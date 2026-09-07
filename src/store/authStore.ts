import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  
  login: async (token: string) => {
    await SecureStore.setItemAsync('jwt_token', token);
    set({ isAuthenticated: true, token });
  },
  
  logout: async () => {
    await SecureStore.deleteItemAsync('jwt_token');
    set({ isAuthenticated: false, token: null });
  },
    hydrate: async () => {
    const token = await SecureStore.getItemAsync('jwt_token');
    if (token) {
      set({ isAuthenticated: true, token });
    } else {
      set({ isAuthenticated: false, token: null });
    }
  },
}));