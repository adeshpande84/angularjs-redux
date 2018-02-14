//import { TODOS } from '../constants/todos';
import cloneDeep from 'lodash.clonedeep';

const initialState = {};

export function InfoReducer(state = initialState,action) {
    switch(action.type) {
        case 'ACCEPT_INFO_STAGING':
            console.log('InfoReducer ACCEPT_INFO_STAGING',state,action);
            var infoCopy = cloneDeep(state);
            
            infoCopy.master = infoCopy.staging;
            infoCopy.staging = {};
            return infoCopy;
            
        case 'ROLLBACK_INFO':
            console.log('InfoReducer ROLLBACK_INFO',state,action);
            var infoCopy = cloneDeep(action.payload);
            
            return infoCopy;
        
        default:
            return state;
    }
}