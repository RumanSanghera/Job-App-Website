import { UserSettings } from './api';

interface UserState {
  userId: string | null;
  settings: UserSettings | null;
}

const USER_STATE_KEY = 'user_state';

export const userState = {
  get: (): UserState => {
    if (typeof window === 'undefined') {
      return { userId: null, settings: null };
    }
    const stored = localStorage.getItem(USER_STATE_KEY);
    return stored ? JSON.parse(stored) : { userId: null, settings: null };
  },

  set: (state: Partial<UserState>) => {
    if (typeof window === 'undefined') return;
    const current = userState.get();
    const newState = { ...current, ...state };
    localStorage.setItem(USER_STATE_KEY, JSON.stringify(newState));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(USER_STATE_KEY);
  },

  getUserId: (): string | null => {
    return userState.get().userId;
  },

  setUserId: (userId: string) => {
    userState.set({ userId });
  },

  getSettings: (): UserSettings | null => {
    return userState.get().settings;
  },

  setSettings: (settings: UserSettings) => {
    userState.set({ settings });
  },
}; 