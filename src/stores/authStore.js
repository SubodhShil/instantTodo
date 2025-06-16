import { create } from 'zustand';
import { authService } from '../services/authService';

// Zustand Store (Simple)
export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Accept anything, store in localforage
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    
    try {
      const result = await authService.login(email, password);
      
      if (result.success) {
        set({ 
          user: result.user, 
          isAuthenticated: true, 
          isLoading: false,
          error: null 
        });
        return { success: true, user: result.user };
      } else {
        set({ 
          error: result.error, 
          isLoading: false 
        });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ 
        error: error.message, 
        isLoading: false 
      });
      return { success: false, error: error.message };
    }
  },

  // Create user, store locally
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    
    try {
      const result = await authService.signup(email, password, name);
      
      if (result.success) {
        set({ 
          user: result.user, 
          isAuthenticated: true, 
          isLoading: false,
          error: null 
        });
        return { success: true, user: result.user };
      } else {
        set({ 
          error: result.error, 
          isLoading: false 
        });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ 
        error: error.message, 
        isLoading: false 
      });
      return { success: false, error: error.message };
    }
  },

  // Clear user data
  logout: async () => {
    set({ isLoading: true });
    
    try {
      await authService.logout();
      set({ 
        user: null, 
        isAuthenticated: false, 
        isLoading: false,
        error: null 
      });
      return { success: true };
    } catch (error) {
      set({ 
        error: error.message, 
        isLoading: false 
      });
      return { success: false, error: error.message };
    }
  },

  // Load user from localforage on app start
  checkAuth: async () => {
    set({ isLoading: true });
    
    try {
      const user = await authService.getCurrentUser();
      
      if (user) {
        set({ 
          user, 
          isAuthenticated: true, 
          isLoading: false,
          error: null 
        });
      } else {
        set({ 
          user: null, 
          isAuthenticated: false, 
          isLoading: false,
          error: null 
        });
      }
    } catch (error) {
      set({ 
        user: null, 
        isAuthenticated: false, 
        isLoading: false,
        error: error.message 
      });
    }
  },

  // Clear error
  clearError: () => set({ error: null })
}));

export default useAuthStore;