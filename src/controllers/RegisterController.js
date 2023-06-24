import React from 'react';
import UserModel from '../models/UserModel';
import RegisterView from '../views/register/RegisterView';

class RegisterController extends React.Component {    
    constructor(props) {
        super(props);
        this.props = props;
    }
    handleRegistration = async (username, password, pasword2) => {
        console.log('Registration submitted');
            
    };

    render() {
        return <RegisterView onRegister={this.handleRegistration} props={this.props} />;
    }
}

export default RegisterController;
