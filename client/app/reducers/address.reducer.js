//import { TODOS } from '../constants/todos';

const initialState = {};

export function AddressReducer(state = initialState, action) {  
    switch(action.type) {
        case 'ACCEPT':
            //create new state by copying staging to master. mark staging as processed. DO NOT mutate existing state. Return a new copy of state
            console.log('AddressReducer',state,action);
            return state;
        case 'REJECT':
            //create new state by marking staging as processed. master remains same. DO NOT mutate existing state. Return a new copy of state
            return state;
        default:
            return state;
    }
}