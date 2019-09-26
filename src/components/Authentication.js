import React from 'react';
import { Link } from 'react-router-dom';

class Authentication extends React.Component {
    
    render() {

        return (
            <div className="container auth">
                <Link className="logo" to="/"><img src="" />logo</Link>
                <div className="card login-wrap">
                    <div className="header white center">
                        <div className="card-content">
                            <div className="row">
                                <div className="input-field col s12 password">
                                    <label>Username</label>
                                    <input name="password" type="password" className="validate" />
                                    <a className="waves-effect waves-light btn">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authentication;