import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SET_VIEW = 'base/SET_VIEW';

export const setView = createAction(SET_VIEW);

const memberList = Map({
    keyword: '',
    view: 'list'
});

export default handleActions({
    [CHANGE_SEARCH]: (state, action) => state.set('keyword', action.payload),
    [SET_VIEW]: (state, action) => state.set('view', action.payload)
}, memberList);s