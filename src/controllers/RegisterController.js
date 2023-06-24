import React from 'react';
import UserModel from '../models/UserModel';
import RegisterView from '../views/register/RegisterView';

function RegisterController ({ setMessage }) {
    const handleRegistration = async (username, password, pasword2) => {
        console.log('Registration submitted');
            
    };

    return <RegisterView onRegister={handleRegistration} setMessage={setMessage} />;
}

export default RegisterController;
