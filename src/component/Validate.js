import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import LoginController from '../controllers/LoginController';
import UserModel from '../models/UserModel';

function Validate() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect( () => {
        var email = searchParams.get("email");
        var token = searchParams.get("token");

        const validateEmail = async (email, token) => {
                return await UserModel.validate(email, token); 
        }
        
        var msg = {
            display : true
        };
        validateEmail(email, token).then(function() {
            msg.text = "Validación realizada correctamente";
            msg.type = 'Success';
        }).catch(function(ex) {
            console.log(ex);
            msg.text = "Ocurrio un error con la validación";
            msg.type = 'Error';
        }).finally(function() {
            navigate(
                '/', 
                {
                    state: {
                        message: msg
                    }
                }
            );            
        })

    }, []);

    return (
        <LoginController />
    );
};

export default Validate;