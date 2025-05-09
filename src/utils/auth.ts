import type { UserProfile } from '@/types/user';
import { userState } from './userState';

export const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken');
  }
  return null;
};

export const getRefreshToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refreshToken');
  }
  return null;
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
};

export const clearTokens = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await fetch('https://api.goldthorncollective.com/account/auth/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  const data = await response.json();
  setTokens(data.access_token, data.refresh_token);
  return data.access_token;
};

export const getUserProfile = async (): Promise<UserProfile> => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    throw new Error('No access token available');
  }

  try {
    // Get the userId from userState
    const userId = userState.getUserId();
    if (!userId) {
      throw new Error('No user ID found. Please try signing in again.');
    }

    console.log('Fetching user settings...');
    const settingsResponse = await fetch(`https://api.goldthorncollective.com/account/settings/${userId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!settingsResponse.ok) {
      // Log the error response for debugging
      const errorText = await settingsResponse.text();
      console.error('Settings fetch error response:', {
        status: settingsResponse.status,
        statusText: settingsResponse.statusText,
        body: errorText
      });
      
      throw new Error(`Failed to fetch user settings: ${settingsResponse.status} ${settingsResponse.statusText}`);
    }

    const settingsData = await settingsResponse.json();
    console.log('Settings data received:', settingsData);

    // Get the user data from localStorage
    const userDataStr = localStorage.getItem('user');
    if (!userDataStr) {
      throw new Error('No user data found in localStorage');
    }

    const userData = JSON.parse(userDataStr);
    
    // Combine user data and settings
    return {
      userId: userData.userId,
      email: userData.email,
      profilePictureUrl: userData.profilePictureUrl,
      interviewReadinessScore: userData.interviewReadinessScore,
      preferences: settingsData.preferences,
      isEmailVerified: userData.emailVerified,
      isPhoneVerified: userData.phoneVerified,
      phoneNumber: userData.phoneNumber,
      mfaEnabled: userData.mfaEnabled,
      accountStatus: userData.accountStatus,
      createdAt: userData.createdAt,
      lastLoginAt: userData.lastLoginAt
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}; 