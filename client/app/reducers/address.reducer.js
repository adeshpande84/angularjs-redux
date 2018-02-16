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
            
            //add
            //copy staging to master

            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;

            var address = addressListCopy[addressIndex];

            if(address.CHANGE_TYPE.toLowerCase() == 'add') {
                address.master = cloneDeep(address.staging);
                address.master.STATUS = 'Active';
            } else if(address.CHANGE_TYPE.toLowerCase() == 'update') {
                var existingMasterStatus = address.master.STATUS;
                address.master = cloneDeep(address.staging);
                address.master.STATUS = existingMasterStatus;
            }

            //address.master = address.staging;
            address.staging.STATUS = 'Processed';
            address.ACTION_TAKEN_ON_STAGING = 1;
            address.ACTION_TYPE_ON_STAGING = 'accept';
            address.ACTION_TAKEN_ON_MASTER = 1;

            return addressListCopy;
        
        case 'REJECT_ADDRESS_STAGING':
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            addressListCopy[addressIndex].ACTION_TAKEN_ON_STAGING = 1;
            addressListCopy[addressIndex].ACTION_TYPE_ON_STAGING = 'reject';
            addressListCopy[addressIndex].staging.STATUS = 'Processed';
            return addressListCopy;

        case 'ROLLBACK_ADDRESS':
            
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;
            var addressCopy = cloneDeep(action.payload.addressPrevious);
            //addressCopy.ACTION_TAKEN_ON_STAGING = 0;
            addressListCopy[addressIndex] = addressCopy;

            return addressListCopy;

        case 'ADDRESS_VALUE_CHANGED':
            
            var addressListCopy = cloneDeep(state);
            var addressIndex = action.payload.addressIndex;

            addressListCopy[addressIndex].ACTION_TAKEN_ON_MASTER = 1;
            addressListCopy[addressIndex].ACTION_TYPE_ON_MASTER = 'manual';
            addressListCopy[addressIndex].master.STATUS = 'Manual';
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
        case 'REJECT_ADDRESS_STAGING':
            var addressIndex = action.payload.addressIndex;
            return addressItemReducer(state,action);    
        case 'ROLLBACK_ADDRESS':
            var addressIndex = action.payload.addressIndex;
            return addressItemReducer(state,action);
        case 'ADDRESS_VALUE_CHANGED':
            return addressItemReducer(state,action);    
        case 'ROLLBACK_ADDRESSLIST':
            
            var stateCopy = cloneDeep(action.payload);

            return stateCopy;
            
        default:
            return state;
    }
}