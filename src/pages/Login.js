import React from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = (pw) => {
        return this.props.loginRequest(pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }

    render() {
        return(
            <div>
                <Authentication mode={true} onLogin={this.handleLogin}/>
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (pw) => {
            return dispatch(loginRequest(pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);
