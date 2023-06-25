import React from 'react';
import UserModel from '../models/UserModel';
import RegisterView from '../views/register/RegisterView';

function RegisterController ({ setMessage }) {
    const handleRegistration = async (username, email, password, pasword2) => {
        try {
            const response = await UserModel.register(username, email, password);
            console.log('User registration successful:', response);
            return response;
        } catch (error) {
            console.error(`User registration failed`);
            throw error;
        }
            
    };

    return <RegisterView onRegister={handleRegistration} setMessage={setMessage} />;
}

export default RegisterController;
