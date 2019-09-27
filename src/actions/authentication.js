import axios from 'axios';

import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

/* LOGIN */
export function loginRequest(password) {
    return (dispatch) => {
        dispatch(login());

        return axios.post('/api/account/signin', { password })
        .then((response) => {
            dispatch(loginSuccess);
        }).catch((error) => {
            dispatch(loginFailure());
        });
    };
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