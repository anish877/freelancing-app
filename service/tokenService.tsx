export const tokenManager = {
    setToken(token: string): void {
      // In a real app, you'd use secure storage
      window.localStorage?.setItem('auth_token', token);
    },
    
    getToken(): string | null {
      return window.localStorage?.getItem('auth_token') || null;
    },
    
    removeToken(): void {
      window.localStorage?.removeItem('auth_token');
    }
  };