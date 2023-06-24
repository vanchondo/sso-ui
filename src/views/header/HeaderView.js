import React from 'react';
import './HeaderView.css';

const Header = ({message, setMessage}) => {
    const hideMessage = () => {
        setMessage({});
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src='../../favicon.ico' alt='va-icon'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            {message.text  && <div className="container-fluid">
                    <div className="row">
                        <div className={`alert text-center alert-dismissible fade show ${message.type === 'Error' ? 'alert-danger' : 'alert-success'}`} role="alert">
                            <label>{message.text}</label>
                            <button type="button" className="btn-close" onClick={hideMessage} aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
} 

export default Header;