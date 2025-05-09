'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { api } from '@/utils/api';
import { userState } from '@/utils/userState';
import { getUserProfile } from '@/utils/auth';
import type { UserSettings } from '@/utils/api';
import { getAccessToken } from '@/utils/auth';
import Toast from '@/components/Toast';
import { useTheme } from '@/context/ThemeContext';

export default function AccountPage() {
  const { setTheme } = useTheme();
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Check if user is authenticated
        const token = getAccessToken();
        if (!token) {
          console.log('No access token found');
          throw new Error('Please sign in to view your account settings');
        }

        let userId = userState.getUserId();
        console.log('Initial User ID:', userId);
        
        if (!userId) {
          console.log('No user ID found, fetching profile...');
          // If no userId, fetch the profile first
          const profile = await getUserProfile();
          userId = profile.userId;
          console.log('User ID from profile:', userId);
        }

        if (!userId) {
          throw new Error('User ID not found. Please try signing in again.');
        }

        console.log('Fetching settings for user:', userId);
        const userSettings = await api.getSettings(userId);
        console.log('Settings received:', userSettings);
        
        setSettings(userSettings);
        userState.setSettings(userSettings);
      } catch (err) {
        console.error('Error in fetchSettings:', err);
        setError(err instanceof Error ? err.message : 'Failed to load settings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handlePreferenceChange = (
    category: keyof UserSettings['preferences'],
    key: string,
    value: boolean | 'LIGHT' | 'DARK'
  ) => {
    if (!settings) return;
    
    setSettings(prev => {
      if (!prev) return prev;
      const newSettings = { ...prev };
      if (category === 'theme') {
        newSettings.preferences.theme = value as 'LIGHT' | 'DARK';
      } else if (category === 'notificationPreferences') {
        newSettings.preferences.notificationPreferences[key as keyof typeof newSettings.preferences.notificationPreferences] = value as boolean;
      } else if (category === 'securityPreferences') {
        newSettings.preferences.securityPreferences[key as keyof typeof newSettings.preferences.securityPreferences] = value as boolean;
      }
      return newSettings;
    });
  };

  // Update theme when settings change
  useEffect(() => {
    if (settings?.preferences.theme) {
      setTheme(settings.preferences.theme);
    }
  }, [settings?.preferences.theme, setTheme]);

  const handleSavePreferences = async () => {
    if (!settings) return;
    
    setIsSaving(true);
    try {
      const userId = userState.getUserId();
      if (!userId) {
        throw new Error('User ID not found. Please try signing in again.');
      }

      await api.updateSettings(userId, settings);
      
      // Update local state after successful save
      userState.setSettings(settings);
      
      // Show success toast
      setError('');
      setToast({ message: 'Preferences saved successfully!', type: 'success' });
    } catch (err) {
      console.error('Error saving preferences:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to save preferences';
      setError(errorMessage);
      setToast({ message: errorMessage, type: 'error' });
    } finally {
      setIsSaving(false);
    }
  };

  // Function to handle resend verification
  const handleResendVerification = async () => {
    try {
      setIsResending(true);
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      await api.requestEmailVerification(user.email);
      
      // Start cooldown timer (2 minutes)
      setCooldown(120); // 2 minutes in seconds
      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Failed to resend verification:', error);
      setError(error instanceof Error ? error.message : 'Failed to resend verification email. Please try again later.');
    } finally {
      setIsResending(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Access Denied</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{error}</p>
            <a
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!settings) {
    return <div className="text-center p-4 text-gray-900 dark:text-white">No settings found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      
      <div className="bg-[rgb(var(--card-background))] rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Email Verification</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[rgb(var(--foreground-rgb))]">
              {settings.securityPreferences?.emailVerified 
                ? '✅ Email verified' 
                : '❌ Email not verified'}
            </p>
            {!settings.securityPreferences?.emailVerified && (
              <p className="text-sm text-[rgb(var(--foreground-rgb))] opacity-70 mt-1">
                Please check your email for the verification link
              </p>
            )}
          </div>
          {!settings.securityPreferences?.emailVerified && (
            <button
              onClick={handleResendVerification}
              disabled={cooldown > 0 || isResending}
              className={`px-4 py-2 rounded-md ${
                cooldown > 0 || isResending
                  ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {isResending ? 'Sending...' : 
               cooldown > 0 ? `Resend in ${Math.floor(cooldown / 60)}:${(cooldown % 60).toString().padStart(2, '0')}` :
               'Resend Verification'}
            </button>
          )}
        </div>
      </div>

      <div className="bg-[rgb(var(--card-background))] shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium opacity-70">Email</label>
                <p className="mt-1">{settings.email}</p>
                <span className="text-sm opacity-70">
                  {settings.preferences.securityPreferences.emailVerified ? 'Verified' : 'Not verified'}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium opacity-70">Profile Picture</label>
                {settings.profilePictureUrl ? (
                  <div className="mt-2 relative w-20 h-20">
                    <Image 
                      src={settings.profilePictureUrl} 
                      alt="Profile" 
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <p className="mt-1 opacity-70">No profile picture set</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Security & Status</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium opacity-70">Two-Factor Authentication</label>
                <p className="mt-1">{settings.preferences.securityPreferences.mfaEnabled ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium opacity-70">Phone Verification</label>
                <p className="mt-1">{settings.preferences.securityPreferences.phoneVerified ? 'Verified' : 'Not verified'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="space-y-6">
            <div className="bg-[rgb(var(--background-rgb))] p-4 rounded-lg">
              <h3 className="text-md font-medium mb-3">Notification Preferences</h3>
              <div className="space-y-3">
                {Object.entries(settings.preferences.notificationPreferences).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-sm opacity-70">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={value}
                        onChange={(e) => handlePreferenceChange('notificationPreferences', key, e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[rgb(var(--background-rgb))] p-4 rounded-lg">
              <h3 className="text-md font-medium mb-3">Theme</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-70">Dark Mode</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.preferences.theme === 'DARK'}
                      onChange={(e) => handlePreferenceChange('theme', 'theme', e.target.checked ? 'DARK' : 'LIGHT')}
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
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

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
} 