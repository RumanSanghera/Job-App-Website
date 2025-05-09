import { userState } from './userState';
import { setTokens } from './auth';

interface CustomError extends Error {
  status?: number;
}

interface NotificationPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
}

interface SecurityPreferences {
  mfaEnabled: boolean;
  emailVerified: boolean;
  phoneVerified: boolean;
}

export interface UserSettings {
  userId: string;
  email: string;
  profilePictureUrl?: string;
  preferences: {
    theme: 'LIGHT' | 'DARK';
    notifications: boolean;
    language: string;
    notificationPreferences: NotificationPreferences;
    securityPreferences: SecurityPreferences;
  };
  securityPreferences: {
    emailVerified: boolean;
    twoFactorEnabled: boolean;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

const cleanUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${API_BASE_URL}/${cleanPath}`;
};

const customFetch = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`) as CustomError;
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export const api = {
  post: async <T>(path: string, data: Record<string, unknown>): Promise<T> => {
    try {
      console.log('🚀 Making request to:', cleanUrl(path));
      console.log('📝 Request data:', data);
      
      const response = await customFetch(cleanUrl(path), {
        method: 'POST',
        body: JSON.stringify(data),
      });

      console.log('📦 Response received:', response);

      // If this is a login request, handle the user data storage
      if (path === 'account/auth/login') {
        console.log('🔑 Login response detected, processing user data...');
        
        // Store the tokens
        setTokens(response.accessToken, response.refreshToken);
        console.log('🔐 Tokens stored');
        
        // Store the user data in localStorage
        if (response.user) {
          console.log('👤 User data received:', response.user);
          
          // Store the complete user object
          localStorage.setItem('user', JSON.stringify(response.user));
          console.log('💾 User data stored in localStorage');
          
          // Store user settings separately for easy access
          if (response.user.userSettings) {
            console.log('⚙️ User settings:', response.user.userSettings);
            localStorage.setItem('userSettings', JSON.stringify(response.user.userSettings));
            console.log('💾 User settings stored in localStorage');
          }
          
          // Store the userId in userState
          userState.setUserId(response.user.userId);
          console.log('🆔 UserId stored in userState:', response.user.userId);
        }
      }

      return response as T;
    } catch (error) {
      console.error('❌ API POST Error:', error);
      if (error instanceof Error) {
        if (error.message.includes('502')) {
          throw new Error('Server is temporarily unavailable. Please try again later.');
        }
        if (error.message.includes('Network request failed')) {
          throw new Error('Unable to connect to the server. Please check your internet connection.');
        }
      }
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      // Call the logout endpoint
      await customFetch(cleanUrl('account/auth/logout'), {
        method: 'POST',
      });

      // Clear any stored tokens or user data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // You might want to redirect to login page or home page
      window.location.href = '/';
    } catch (error) {
      console.error('❌ Logout Error:', error);
      // Even if the API call fails, we should still clear local data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
      throw error;
    }
  },

  getSettings: async (userId: string): Promise<UserSettings> => {
    try {
      const response = await customFetch(cleanUrl(`account/settings/${userId}`), {
        method: 'GET',
      });
      return response as UserSettings;
    } catch (error) {
      console.error('❌ Failed to fetch user settings:', error);
      throw error;
    }
  },

  requestEmailVerification: async (email: string): Promise<void> => {
    try {
      console.log('📧 Requesting email verification for:', email);
      const response = await fetch(cleanUrl(`account/auth/verify-email/request?email=${encodeURIComponent(email)}`), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error('Invalid email address or user not found');
          case 429:
            throw new Error('Too many verification requests. Please wait before requesting another email.');
          default:
            throw new Error(`Failed to send verification email: ${response.status} ${response.statusText}`);
        }
      }

      // Check if there's content to parse
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        await response.json();
      }

      console.log('✅ Verification email sent successfully');
    } catch (error) {
      console.error('❌ Failed to send verification email:', error);
      throw error;
    }
  },

  updateSettings: async (userId: string, settings: UserSettings): Promise<void> => {
    try {
      console.log('📝 Updating settings for user:', userId);
      const response = await fetch(cleanUrl(`account/settings/${userId}`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          notificationPreferences: settings.preferences.notificationPreferences,
          securityPreferences: settings.preferences.securityPreferences,
          theme: settings.preferences.theme,
          language: settings.preferences.language
        }),
      });

      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error('Invalid settings data provided');
          case 403:
            throw new Error('You are not authorized to update these settings');
          case 404:
            throw new Error('User not found');
          default:
            throw new Error(`Failed to update settings: ${response.status} ${response.statusText}`);
        }
      }

      console.log('✅ Settings updated successfully');
    } catch (error) {
      console.error('❌ Failed to update settings:', error);
      throw error;
    }
  },
};

export const login = async (email: string, password: string) => {
  try {
    console.log('🔑 Attempting login for:', email);
    
    const response = await fetch('https://api.goldthorncollective.com/account/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('📦 Login response data:', data);
    
    // Store the tokens
    setTokens(data.accessToken, data.refreshToken);
    console.log('🔐 Tokens stored');
    
    // Store the user data in localStorage
    if (data.user) {
      console.log('👤 User data received:', data.user);
      
      // Store the complete user object
      localStorage.setItem('user', JSON.stringify(data.user));
      console.log('💾 User data stored in localStorage');
      
      // Store user settings separately for easy access
      if (data.user.userSettings) {
        console.log('⚙️ User settings:', data.user.userSettings);
        localStorage.setItem('userSettings', JSON.stringify(data.user.userSettings));
        console.log('💾 User settings stored in localStorage');
      }
      
      // Store the userId in userState
      userState.setUserId(data.user.userId);
      console.log('🆔 UserId stored in userState:', data.user.userId);
    }

    return data;
  } catch (error) {
    console.error('❌ Login error:', error);
    throw error;
  }
}; 