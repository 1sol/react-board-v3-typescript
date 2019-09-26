import React from 'react';
import { Link } from 'react-router-dom';

class Authentication extends React.Component {

    state = {
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
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
                                    <input name="password"
                                           type="password" 
                                           className="validate"
                                           onChange={this.handleChange}
                                           value={this.state.password} 
                                    />
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