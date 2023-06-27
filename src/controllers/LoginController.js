import React from 'react';
import UserModel from '../models/UserModel';
import LoginView from '../views/login/LoginView';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { GOOGLE_RECAPTCHA_KEY } from '../Constants';

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

    return (
        <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_RECAPTCHA_KEY}>
            <LoginView onLogin={handleLogin} setMessage={setMessage} />
        </GoogleReCaptchaProvider>
    );
}

export default LoginController;
