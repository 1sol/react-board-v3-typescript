import { combineReducers } from 'redux';
import member from './member';
import base from './base';
import modal from './modal';

export default combineReducers({
    member,
    base,
    modal
});