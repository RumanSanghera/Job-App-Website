const API_BASE_URL = 'https://api.goldthorncollective.com';

export const AUTH_ENDPOINTS = {
  login: `${API_BASE_URL}/account/auth/login`,
  register: `${API_BASE_URL}/account/auth/register`,
  verifyEmail: `${API_BASE_URL}/account/auth/verify-email`,
  requestVerification: `${API_BASE_URL}/account/auth/verify-email/request`,
  resetPasswordRequest: `${API_BASE_URL}/account/auth/reset-password/request`,
  resetPassword: `${API_BASE_URL}/account/auth/reset-password`,
  resendVerification: `${API_BASE_URL}/account/auth/resend-verification`,
  token: `${API_BASE_URL}/account/auth/token`,
  refreshToken: `${API_BASE_URL}/account/auth/refresh-token`,
  googleAuthUrl: `${API_BASE_URL}/account/auth/oauth2/google`,
  googleCallback: `${API_BASE_URL}/account/auth/oauth2/google/callback`,
  settings: `${API_BASE_URL}/account/settings`,
  user: `${API_BASE_URL}/account/user`,
};

export default {
  AUTH_ENDPOINTS,
}; 