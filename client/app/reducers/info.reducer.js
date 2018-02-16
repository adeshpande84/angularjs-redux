//import { TODOS } from '../constants/todos';
import cloneDeep from 'lodash.clonedeep';

const initialState = {};

export function InfoReducer(state = initialState,action) {
    switch(action.type) {
        case 'ACCEPT_INFO_STAGING':
            
            var infoCopy = cloneDeep(state);

            if(infoCopy.CHANGE_TYPE.toLowerCase() == 'add') {
                infoCopy.master = cloneDeep(infoCopy.staging);
                infoCopy.master.STATUS = 'Active';
            } else if(infoCopy.CHANGE_TYPE.toLowerCase() == 'update') {
                var existingMasterStatus = infoCopy.master.STATUS;
                infoCopy.master = cloneDeep(infoCopy.staging);
                infoCopy.master.STATUS = existingMasterStatus;
            }

            infoCopy.ACTION_TAKEN_ON_STAGING = 1;
            infoCopy.ACTION_TAKEN_ON_MASTER = 1;
            infoCopy.ACTION_TYPE_ON_STAGING = 'accept';
            //infoCopy.master = cloneDeep(infoCopy.staging);

            infoCopy.staging.STATUS = 'Processed';
            return infoCopy;
        
        case 'REJECT_INFO_STAGING':
            
            var infoCopy = cloneDeep(state);
            infoCopy.ACTION_TAKEN_ON_STAGING = 1;
            //infoCopy.ACTION_TAKEN_ON_MASTER = 0;
            infoCopy.ACTION_TYPE_ON_STAGING = 'reject';
            
            infoCopy.staging.STATUS = 'Processed';
            return infoCopy;

        case 'ROLLBACK_INFO':
            
            var infoCopy = cloneDeep(action.payload);
            //infoCopy.ACTION_TAKEN_ON_STAGING = 0;
            //infoCopy.ACTION_TAKEN_ON_MASTER = 0;
            //infoCopy.ACTION_TYPE_ON_STAGING = '';
            //infoCopy.ACTION_TYPE_ON_MASTER = '';
            return infoCopy;
        
        case 'INFO_VALUE_CHANGED':
            
            var infoCopy = cloneDeep(state);
            infoCopy.ACTION_TAKEN_ON_MASTER = 1;
            infoCopy.ACTION_TYPE_ON_MASTER = 'manual';
            return infoCopy;
        default:
            return state;
    }
}