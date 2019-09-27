import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Authentication extends React.Component {

    state = {
        password: ""
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin = () => {
        let pw = this.state.password;
                
        this.props.onLogin(pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
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

Authentication.propTypes = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (pw) => { console.error("login function not defined"); },
};

export default Authentication;