import React from 'react';
import UserModel from '../models/UserModel';
import LoginView from '../views/login/LoginView';

class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    handleLogin = async (username, password) => {
        try {
            const response = await UserModel.login(username, password);
            console.log('Login successful:', response);
            return response;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    render() {
        return <LoginView onLogin={this.handleLogin} setMessage={this.props.setMessage} />;
    }
}

export default LoginController;
