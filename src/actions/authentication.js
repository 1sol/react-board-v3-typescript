import axios from 'axios';

import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

/* LOGIN */
export function loginRequest(password) {
    return axios.post('/handleLogin', { 
        password: this.state.password
    })
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);    
    });
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess() {
    return {
        type: AUTH_LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}