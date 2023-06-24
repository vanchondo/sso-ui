import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import LoginController from '../controllers/LoginController';
import UserModel from '../models/UserModel';

function Validate( {setMessage} ) {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect( () => {
        var email = searchParams.get("email");
        var token = searchParams.get("token");

        const validateEmail = async (email, token) => {
                return await UserModel.validate(email, token); 
        }
        
        var msg = {};
        validateEmail(email, token).then(function() {
            msg.text = "Validación realizada correctamente";
            msg.type = 'Success';
        }).catch(function(ex) {
            console.log(ex);
            msg.text = "Ocurrio un error con la validación";
            msg.type = 'Error';
        }).finally(function() {
            setMessage(msg);           
        })

    }, []);

    return (
        <LoginController setMessage={setMessage}/>
    );
};

export default Validate;