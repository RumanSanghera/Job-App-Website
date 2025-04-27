import type { UserProfile } from '@/types/user';

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

  const response = await fetch('https://api.goldthorncollective.com/account/user/profile', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Token expired, try to refresh
      await refreshAccessToken();
      return getUserProfile(); // Retry with new token
    }
    throw new Error('Failed to fetch user profile');
  }

  const data = await response.json();
  // Ensure the response data matches the UserProfile type
  return {
    userId: data.userId,
    email: data.email,
    profilePictureUrl: data.profilePictureUrl,
    interviewReadinessScore: data.interviewReadinessScore,
    preferences: data.preferences,
    isEmailVerified: data.isEmailVerified,
    isPhoneVerified: data.isPhoneVerified,
    phoneNumber: data.phoneNumber,
    mfaEnabled: data.mfaEnabled,
    accountStatus: data.accountStatus,
    createdAt: data.createdAt,
    lastLoginAt: data.lastLoginAt
  };
}; 