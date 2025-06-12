export const tokenManager = {
    setToken(token: string) {
      // In a real app, you'd use secure storage
      window.localStorage?.setItem('auth_token', token);
    },
    
    getToken() {
      return window.localStorage?.getItem('auth_token');
    },
    
    removeToken() {
      window.localStorage?.removeItem('auth_token');
    }
  };