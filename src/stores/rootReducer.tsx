import { combineReducers, Reducer, AnyAction } from 'redux';
import { AuthState, AuthReducer} from '../stores/auth/AuthReducer';

export interface CombineReducers {
  AuthReducer : AuthState;
}

export const rootReducer: Reducer<CombineReducers, AnyAction> = combineReducers({
  AuthReducer
});
