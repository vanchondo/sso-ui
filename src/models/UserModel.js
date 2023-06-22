import { API_BASE_URL } from '../Constants';

class UserModel {
    headers = {
        'Content-Type': 'application/json',
    }

    static async login(username, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                return await response.json();
            } else {
                console.error('Login failed');
                throw new Error('Credenciales inválidas')
            }
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Credenciales inválidas')
        }
    };

    static async validate(email, token) {
        try {
            const response = await fetch(`${API_BASE_URL}/validate?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`, {
                method: 'POST',
                headers: this.headers,
            });

            if (response.ok) {
                return await response;
            }
            else {
                console.error("Validation failed");
                throw new Error('Validation failed');
            }
        } catch (error) {
            console.error('Validation error:', error);
            throw new Error('Error de comunicación')
        }
    }
}

export default UserModel;
