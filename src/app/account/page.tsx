'use client';

import { useState, useEffect } from 'react';
import { getUserProfile } from '@/utils/auth';
import { mockUserProfile } from '@/utils/mockData';
import type { UserProfile, Preferences, PrivacyPreferences, NotificationPreferences } from '@/types/user';

export default function AccountPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [preferences, setPreferences] = useState<Preferences>({
    privacyPreferences: {
      publicProfile: false,
      showAchievements: false,
      showLearningGoals: false
    },
    notificationPreferences: {
      emailNotifications: false,
      pushNotifications: false,
      smsNotifications: false
    },
    theme: 'LIGHT',
    language: 'en'
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
          setProfile(mockUserProfile);
          setPreferences(mockUserProfile.preferences);
        } else {
          const data = await getUserProfile();
          setProfile(data);
          setPreferences(data.preferences);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load profile');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handlePreferenceChange = (category: keyof Preferences, key: keyof PrivacyPreferences | keyof NotificationPreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...(prev[category] as unknown as Record<string, boolean>),
        [key]: value
      }
    } as Preferences));
  };

  const handleSavePreferences = async () => {
    setIsSaving(true);
    try {
      // TODO: Implement API call to save preferences
      alert('Preferences saved successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save preferences');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1">{profile.email}</p>
                <span className="text-sm text-gray-500">
                  {profile.isEmailVerified ? 'Verified' : 'Not verified'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <p className="mt-1">{profile.phoneNumber || 'Not set'}</p>
                <span className="text-sm text-gray-500">
                  {profile.isPhoneVerified ? 'Verified' : 'Not verified'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                {profile.profilePictureUrl ? (
                  <img 
                    src={profile.profilePictureUrl} 
                    alt="Profile" 
                    className="mt-2 w-20 h-20 rounded-full"
                  />
                ) : (
                  <p className="mt-1 text-gray-500">No profile picture set</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interview Readiness Score</label>
                <p className="mt-1">{profile.interviewReadinessScore || 'Not calculated'}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Security & Status</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Status</label>
                <p className="mt-1">{profile.accountStatus}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                <p className="mt-1">{profile.mfaEnabled ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Login</label>
                <p className="mt-1">{new Date(profile.lastLoginAt).toLocaleString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Created</label>
                <p className="mt-1">{new Date(profile.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="space-y-6">
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-900 mb-3">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </h3>
                <div className="space-y-3">
                  {typeof value === 'object' && value !== null ? (
                    Object.entries(value as Record<string, boolean>).map(([subKey, subValue]) => (
                      <div key={subKey} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          {subKey.charAt(0).toUpperCase() + subKey.slice(1).replace(/([A-Z])/g, ' $1')}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={subValue}
                            onChange={(e) => handlePreferenceChange(
                              key as keyof Preferences,
                              subKey as keyof PrivacyPreferences | keyof NotificationPreferences,
                              e.target.checked
                            )}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSavePreferences}
            disabled={isSaving}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>
      </div>
    </div>
  );
} 