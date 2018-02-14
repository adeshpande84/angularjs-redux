//import { TODOS } from '../constants/todos';
import cloneDeep from 'lodash.clonedeep';

const initialState = [];


function acceptUpdate(state) {

}

function acceptDelete(state) {

}


function addressReducer(state,action) {
    switch(action.type) {
        case 'ACCEPT_ADDRESS_STAGING':

            console.log('AddressListReducer ACCEPT_STAGING',state,action);
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            addressListCopy[addressIndex].master = addressListCopy[addressIndex].staging;
            addressListCopy[addressIndex].staging = {};
            return addressListCopy;
            
        case 'ROLLBACK_ADDRESS':
            console.log('AddressListReducer ROLLBACK_ADDRESS',state,action);
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            var addressCopy = cloneDeep(action.payload.addressPrevious);

            addressListCopy[addressIndex] = addressCopy;

            return addressListCopy;
        
        default:
            return state;
    }
}

export function AddressListReducer(state = initialState, action) {  
    switch(action.type) {
        case 'ACCEPT_ADDRESS_STAGING':
            var addressIndex = action.payload.addressIndex;
            return addressReducer(state,action);
        case 'ROLLBACK_ADDRESS':
            var addressIndex = action.payload.addressIndex;
            return addressReducer(state,action);
        case 'ROLLBACK_ADDRESSLIST':
            console.log('AddressListReducer ROLLBACK_ADDRESSLIST',state,action);
            var stateCopy = cloneDeep(action.payload);

            return stateCopy;
            
        default:
            return state;
    }
}