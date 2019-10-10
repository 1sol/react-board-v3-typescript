import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import 'App.css';

class Authentication extends React.Component {
  public state = {
    password: '',
    authKey: '1234'
  };
  
  constructor(props: any) {
    super(props);
    this.onInputChanged  = this.onInputChanged.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

	onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ password: e.target.value });
	};

  handleLogin = () => {
    let pw = this.state.password;
    if (pw === "1234") {
      alert("로그인 성공");
      return <Redirect to='/home'/>
    } else {
      alert("로그인 실패");
    }
    return;
  }

  handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.charCode === 13) {
      this.handleLogin();
    }
  }

  render() {

    return (
      <div className="container auth">
        <div className="card login-wrap">
          <div className="header white center">
            <div className="card-content">
            <Link className="logo" to="/"><img src="https://static.wixstatic.com/media/dae33f_0a4669f3e2cf4334a8c57ab55008795b~mv2.png/v1/fill/w_205,h_42,al_c,lg_1,q_80/%EC%9E%90%EC%82%B0%2048.webp"/></Link>
              <div className="row">
                <div className="input-field col s12 password">
                  <label>Password</label>
                  <input name="password"
                        type="password" 
                        className="validate"
                        onChange={this.onInputChanged}
                        onKeyPress={this.handleKeyPress}
                  />
                  <button className="waves-effect waves-light btn" onClick={this.handleLogin}>Login</button>
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