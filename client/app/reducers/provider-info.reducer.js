//import { TODOS } from '../constants/todos';

const initialState = {};

export function ProviderInfoReducer(state = initialState, action) {  
    switch(action.type) {
        case 'ACCEPT':
            //create new state by copying staging to master. mark staging as processed. DO NOT mutate existing state. Return a new copy of state
            console.log('ProviderInfoReducer ACCEPT',state,action);
            return state;
        
        default:
            return state;
    }
}