export interface PrivacyPreferences {
  publicProfile: boolean;
  showAchievements: boolean;
  showLearningGoals: boolean;
}

export interface NotificationPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
}

export interface Preferences {
  privacyPreferences: PrivacyPreferences;
  notificationPreferences: NotificationPreferences;
  theme: 'LIGHT' | 'DARK';
  language: string;
}

export interface UserProfile {
  userId: string;
  email: string;
  profilePictureUrl?: string;
  interviewReadinessScore: number;
  preferences: Preferences;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  phoneNumber?: string;
  mfaEnabled: boolean;
  accountStatus: string;
  createdAt: string;
  lastLoginAt: string;
} 