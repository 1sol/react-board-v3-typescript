import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const CREATE = 'member/CREATE';
const MODIFY = 'member/MODIFY';
const REMOVE  = 'member/REMOVE ';

export const create = createAction(CREATE);
export const modify = createAction(MODIFY);
export const remove = createAction(REMOVE);

export const initialState = List([
    Map({
        id: 0,
        name: 'Jake, JunKil Been',
        rank: 'CEO',
        department: ''
    }),
    Map({
        id: 1,
        name: 'Jake, JunKil Been',
        rank: 'CEO',
        department: ''
    }),
    Map({
        id: 2,
        name: 'Jake, JunKil Been',
        rank: 'CEO',
        department: ''
    }),
    Map({
        id: 3,
        name: 'Jake, JunKil Been',
        rank: 'CEO',
        department: ''
    }),
]);

export default handleActions(
    {
        [CREATE]: (state, action) => {
            return state.push(Map(action.payload));
        },
        [MODIFY]: (state, action) => {
            const index = state.findIndex(member => member.get('id') === action.payload.id);
            return state.mergeIn([index], action.payload.member);
        },
        [REMOVE]: (state, action) => {
            const index = state.findIndex(member => member.get('id') === action.payload);
            return state.delete(index);
        }
    }, 
initialState);