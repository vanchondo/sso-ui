import React from 'react';
import RegisterController from '../controllers/RegisterController';
  
function Register({setMessage}){
    return (
        <RegisterController setMessage={setMessage}/>
    );
}
  
export default Register;