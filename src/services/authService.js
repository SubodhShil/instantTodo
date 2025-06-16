import localforage from 'localforage';

// Configure localforage
localforage.config({
  name: 'instantTodo',
  storeName: 'auth'
});

const AUTH_KEY = 'currentUser';

// Basic User Structure
const createUser = (email, name) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
    createdAt: new Date().toISOString()
  };
};

// Fake Auth Service
export const authService = {
  // Accept any credentials
  async login(email, password) {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create a fake user for login
      const user = createUser(email, email.split('@')[0]);
      
      // Store in localforage
      await localforage.setItem(AUTH_KEY, user);
      
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Create user with any data
  async signup(email, password, name) {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create user
      const user = createUser(email, name || email.split('@')[0]);
      
      // Store in localforage
      await localforage.setItem(AUTH_KEY, user);
      
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Clear stored data
  async logout() {
    try {
      await localforage.removeItem(AUTH_KEY);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get from localforage
  async getCurrentUser() {
    try {
      const user = await localforage.getItem(AUTH_KEY);
      return user;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  // Check if user exists
  async isLoggedIn() {
    try {
      const user = await localforage.getItem(AUTH_KEY);
      return !!user;
    } catch (error) {
      return false;
    }
  }
};

export default authService;