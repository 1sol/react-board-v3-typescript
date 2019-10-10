import React from 'react';
import { Authentication } from '../components';
import { connect } from 'react-redux';
import { CombineReducers } from '../stores/rootReducer';

class Login extends React.Component {
	render() {
		return (
			<div><Authentication /></div>
		);
	}
}

const mapStateToProps = (state: CombineReducers) => ({
	isLoggedIn: state.AuthReducer.isLoggedIn
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);