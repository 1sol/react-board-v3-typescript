import * as types from './AuthTypes';

export interface AuthState {
  isLoggedIn: boolean
  status: string
}

const initState = () => ({
  isLoggedIn: false,
  status: 'INIT'
} as AuthState);

export const AuthReducer = (state: AuthState = initState(), action: any) => {

  switch(action.type) {
    case types.AUTH_LOGIN:
        return {
            ...state,
            status: 'WAITING'
        };
    case types.AUTH_LOGIN_SUCCESS:
        return {
            ...state,
            status: 'SUCCESS',
            isLoggedIn: true
        };
    case types.AUTH_LOGIN_FAILURE:
        return {
            ...state,
            status: 'FAILURE',
            isLoggedIn: false
        };
    case types.AUTH_LOGOUT:
        return initState();
    default:
        return state;
  }
}