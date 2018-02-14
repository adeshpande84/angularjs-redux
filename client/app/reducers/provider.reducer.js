
import {combineReducers} from 'redux';

import {AddressListReducer} from './address-list.reducer';
import {InfoReducer} from './info.reducer';
import {ProviderSummaryReducer} from './provider-summary.reducer';

export const ProviderReducer = combineReducers({
    //saveProvider,rollbackProvider,

    //ProviderBaseReducer,
    info: InfoReducer,
    summary: ProviderSummaryReducer,
    addressList: AddressListReducer 
});