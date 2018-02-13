//import { TODOS } from '../constants/todos';

const initialState = {};

export function ProviderSummaryReducer(state = initialState, action) {  
    switch(action.type) {
        case 'CHANGE_HAS_PENDING':
            //create new state by copying staging to master. mark staging as processed. DO NOT mutate existing state. Return a new copy of state
            console.log('ProviderSummaryReducer CHANGE_HAS_PENDING',state,action);
            return state;
        
        default:
            return state;
    }
}