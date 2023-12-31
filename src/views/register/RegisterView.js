import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterView.css';

const RegisterView = ({ onRegister, setMessage }) => {
    const navigate = useNavigate();
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const usernameRef = useRef(null);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            setLoading(true);
            await onRegister(username, email, password, passwordConfirm);
            navigate('/');
            setMessage({
                type: 'Success',
                text: 'Usuario registrado correctamente, email de verificación enviado.'
            });
        } catch (error) {
            passwordRef.current.value = '';
            passwordConfirmRef.current.value = '';
            setMessage({
                type: 'Error',
                text: error.message
            });

        } finally {
            setLoading(false);
        }
    };

    const passwordValidation = () => {
        // const passwordRegex = /^[A-Za-z]\w{7,}$/; // Not include special characters
        const passwordRegex = /^.{7,}$/;
        const passwordElement = passwordRef.current;
        const passwordConfirmElement = passwordConfirmRef.current;

        if (passwordElement.value && passwordElement.value === passwordConfirmElement.value && passwordRegex.test(passwordElement.value)) {
            passwordElement.setCustomValidity('');
            passwordConfirmElement.setCustomValidity('');
        }
        else {
            var errorMessage = 'Las contraseñas no son válidas, utilice una constraseña de por lo menos 7 carácteres.';
            passwordElement.setCustomValidity(errorMessage);
            passwordConfirmElement.setCustomValidity(errorMessage);
        }
    };

    const usernameValidation = () => {
        const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;
        const usernameElement = usernameRef.current;

        if (usernameElement.value && usernameRegex.test(usernameElement.value)) {
            usernameElement.setCustomValidity('');
        }
        else {
            usernameElement.setCustomValidity('Nombre de usuario no válido, debe de contener mas de 6 carácteres, letras, numeros y guiones bajos.');
        }
    }

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="E-mail"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="Usuario"
                            name="username"
                            onChange={(e) => { 
                                setUsername(e.target.value);
                                usernameValidation();
                            }}
                            ref={usernameRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                passwordValidation();
                            }}
                            ref={passwordRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirm" className="form-label">Repita contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            onChange={(e) => {
                                setPasswordConfirm(e.target.value);
                                passwordValidation();
                            }}
                            ref={passwordConfirmRef}
                            required
                        />
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">
                                {loading ? 'Registrando...' : 'Registrar'}
                            </button>
                        </div>
                    </div>
                </form>
            </div >
            <div className="col"></div>
        </div >
    );
}

export default RegisterView;