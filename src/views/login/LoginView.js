import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './LoginView.css';

const LoginView = ({ onLogin, setMessage }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const origin = queryParams.get('origin');    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            var data = await onLogin(username, password);
            window.location.href = origin + "?token=" + data.token;
        } catch (error) { 
            setMessage({
                text: 'Credenciales inválidas',
                type: 'Error'
            });  
            setUsername('');
            setPassword('');
        }

        setLoading(false);
    };

    return (
        <div className="row">
            <div className='col'></div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            placeholder="Usuario"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <div className='col'>
                        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </button>
                        </div>
                        <div className='col form-text'>
                            ¿No tienes cuenta? <Link to="/register"> ¡Registrate! </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col'></div>
        </div>
    );
};

export default LoginView;
