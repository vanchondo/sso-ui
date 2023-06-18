import { API_BASE_URL } from '../Constants';

class UserModel {
    static async login(username, password) {
        try {
            const response = await fetch(API_BASE_URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                return await response.json();
            } else {
                console.error('Login failed');
                throw new Error('Invalid credentials')
            }
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Invalid credentials')
        }
    };
}

export default UserModel;
