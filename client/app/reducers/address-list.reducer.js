//import { TODOS } from '../constants/todos';
import cloneDeep from 'lodash.clonedeep';

const initialState = [];

export function AddressListReducer(state = initialState, action) {  
    switch(action.type) {
        case 'ACCEPT_STAGING':
            console.log('AddressListReducer ACCEPT_STAGING',state,action);
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            addressListCopy[addressIndex].master = addressListCopy[addressIndex].staging;
            addressListCopy[addressIndex].staging = {};
            return addressListCopy;
            break;
        case 'ROLLBACK_ADDRESSITEM':
            console.log('AddressListReducer ROLLBACK_ADDRESSITEM',state,action);
            return state;
        case 'ROLLBACK_ADDRESSLIST':
            //create new state by copying staging to master. mark staging as processed. DO NOT mutate existing state. Return a new copy of state
            console.log('AddressListReducer ROLLBACK_ADDRESSLIST',state,action);
            return state;
            break;
        default:
            return state;
    }
}