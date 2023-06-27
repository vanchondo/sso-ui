import React from 'react';
import UserModel from '../models/UserModel';
import LoginView from '../views/login/LoginView';

function LoginController( {setMessage} ) {
    const handleLogin = async (username, password, captcha) => {
        try {
            const response = await UserModel.login(username, password, captcha);
            console.log('Login successful:', response);
            return response;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    return <LoginView onLogin={handleLogin} setMessage={setMessage} />;
}

export default LoginController;
