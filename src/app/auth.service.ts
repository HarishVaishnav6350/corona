import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Register: Save user data to local storage
  registerUser(userData: { name: string; email: string; password: string }) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  // Login: Check if credentials match stored user
  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return user.email === email && user.password === password;
    }
    return false;
  }

  // Check if user is logged in (e.g., via a flag)
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Set login status
  setLoginStatus(status: boolean): void {
    localStorage.setItem('isLoggedIn', status.toString());
  }

  // Logout
  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  // Get current user
  getCurrentUser(): any {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  }
}
