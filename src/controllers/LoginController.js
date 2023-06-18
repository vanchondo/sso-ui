import React from 'react';
import UserModel from '../models/UserModel';
import LoginView from '../views/LoginView';

class LoginController extends React.Component {
  handleLogin = async (username, password) => {
    try {
      // Call the UserModel login method to authenticate the user
      const user = await UserModel.login(username, password);
      console.log('Login successful:', user);
      // Do something with the authenticated user, such as updating app state or redirecting to another page
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  render() {
    return <LoginView onLogin={this.handleLogin} />;
  }
}

export default LoginController;