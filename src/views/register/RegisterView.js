import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './RegisterView.css';

const RegisterView = ({ onRegister }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            var data = await onRegister(username, password, password2);
        } catch (error) {
            setError(error.message);
            setEmail('');
            setUsername('');
            setPassword('');
            setPassword2('');
        }

        setLoading(false);
    };

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
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password2" className="form-label">Repita contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password2" 
                        name="password2"
                        onChange={(e) => setPassword2(e.target.value)}
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