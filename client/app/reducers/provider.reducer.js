
import {combineReducers} from 'redux';

import {AddressListReducer} from './address-list.reducer';
import {ProviderInfoReducer} from './provider-info.reducer';
import {ProviderSummaryReducer} from './provider-summary.reducer';

function saveProvider(state = {},action) {
    if(action.type = 'SAVE_PROVIDER') {
        console.log('ProviderReducer saveProvider');    
    }
    
    return state;
}

function rollbackProvider(state = {},action) {
    if(action.type = 'ROLLBACK_PROVIDER') {
        console.log('ProviderReducer rollbackProvider');    
    }
    return state;
}

export const ProviderReducer = combineReducers({
    //saveProvider,rollbackProvider,
    info: ProviderInfoReducer,
    summary: ProviderSummaryReducer,
    addressList: AddressListReducer 
});