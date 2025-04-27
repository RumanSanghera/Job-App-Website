import { UserProfile } from '@/types/user';

export const mockUserProfile: UserProfile = {
  userId: "123e4567-e89b-12d3-a456-426614174000",
  email: "user@example.com",
  profilePictureUrl: "https://via.placeholder.com/150",
  interviewReadinessScore: 85,
  preferences: {
    privacyPreferences: {
      publicProfile: true,
      showAchievements: true,
      showLearningGoals: true
    },
    notificationPreferences: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false
    },
    theme: "LIGHT",
    language: "en"
  },
  isEmailVerified: true,
  isPhoneVerified: false,
  phoneNumber: "+1234567890",
  mfaEnabled: false,
  accountStatus: "ACTIVE",
  createdAt: "2025-04-27T11:17:32.540Z",
  lastLoginAt: "2025-04-27T11:17:32.540Z"
}; 