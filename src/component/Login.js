import React from 'react';
import LoginController from '../controllers/LoginController';

function Login( {setMessage} ) {

    return (
        <LoginController setMessage={setMessage}/>
    );
};

export default Login;