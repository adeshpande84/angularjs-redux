
import {combineReducers} from 'redux';

import {AddressReducer} from './address.reducer';
import {InfoReducer} from './info.reducer';
import {ProviderSummaryReducer} from './provider-summary.reducer';

export const ProviderReducer = combineReducers({
    
    info: InfoReducer,
    summary: ProviderSummaryReducer,
    addressList: AddressReducer 
});