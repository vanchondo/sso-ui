import React from 'react';
import UserModel from '../models/UserModel';
import LoginView from '../views/LoginView';

class LoginController extends React.Component {
    handleLogin = async (username, password) => {
        try {
            const response = await UserModel.login(username, password);
            console.log('Login successful:', response);
            return response;
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
