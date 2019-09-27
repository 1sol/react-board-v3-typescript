import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'App.css';

class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            password: ''
        };
    }

    handleChange = () => {
        const { password } = this.state.password;
        if(password === '1234') {
            alert("로그인 성공");
        } else {
            alert("다시 로그인해주세요.");
        }
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
                <div className="card login-wrap">
                    <div className="header white center">
                        <div className="card-content">
                          <Link className="logo" to="/"><img src="https://static.wixstatic.com/media/dae33f_0a4669f3e2cf4334a8c57ab55008795b~mv2.png/v1/fill/w_205,h_42,al_c,lg_1,q_80/%EC%9E%90%EC%82%B0%2048.webp" /></Link>
                            <div className="row">
                                <div className="input-field col s12 password">
                                    <label>Password</label>
                                    <input name="password"
                                           type="password" 
                                           className="validate"
                                           onChange={this.handleChange}
                                           value={this.state.password} 
                                    />
                                    <button className="waves-effect waves-light btn" onClick={this.signIn}>Login</button>
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