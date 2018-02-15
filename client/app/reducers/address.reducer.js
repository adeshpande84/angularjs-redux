//import { TODOS } from '../constants/todos';
import cloneDeep from 'lodash.clonedeep';

const initialState = [];


function acceptUpdate(state) {

}

function acceptDelete(state) {

}

function acceptAdd(state) {

}

function addressItemReducer(state,action) {
    switch(action.type) {
        case 'ACCEPT_ADDRESS_STAGING':

            console.log('AddressReducer ACCEPT_STAGING',state,action);
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            addressListCopy[addressIndex].master = addressListCopy[addressIndex].staging;
            addressListCopy[addressIndex].staging = {};
            addressListCopy[addressIndex].ACTION_TAKEN_ON_STAGING = 1;
            addressListCopy[addressIndex].ACTION_TAKEN_ON_MASTER = 1;
            return addressListCopy;
            
        case 'ROLLBACK_ADDRESS':
            console.log('AddressReducer ROLLBACK_ADDRESS',state,action);
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            var addressCopy = cloneDeep(action.payload.addressPrevious);
            //addressCopy.ACTION_TAKEN_ON_STAGING = 0;
            addressListCopy[addressIndex] = addressCopy;

            return addressListCopy;

        case 'ADDRESS_VALUE_CHANGED':
            console.log('AddressReducer ADDRESS_VALUE_CHANGED',state,action);
            
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;

            addressListCopy[addressIndex].ACTION_TAKEN_ON_MASTER = 1;
            addressListCopy[addressIndex].ACTION_TYPE_ON_MASTER = 'manual';
            
            return addressListCopy;
        default:
            return state;
    }
}

export function AddressReducer(state = initialState, action) {  
    switch(action.type) {
        case 'ACCEPT_ADDRESS_STAGING':
            var addressIndex = action.payload.addressIndex;
            return addressItemReducer(state,action);
        case 'ROLLBACK_ADDRESS':
            var addressIndex = action.payload.addressIndex;
            return addressItemReducer(state,action);
        case 'ROLLBACK_ADDRESSLIST':
            console.log('AddressReducer ROLLBACK_ADDRESSLIST',state,action);
            var stateCopy = cloneDeep(action.payload);

            return stateCopy;
            
        default:
            return state;
    }
}