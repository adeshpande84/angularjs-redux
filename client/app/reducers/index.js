import {combineReducers} from 'redux';
import {ProviderReducer} from './provider.reducer';
import {AddressListReducer} from './address-list.reducer';
import {ProviderSummaryReducer} from './provider-summary.reducer';


export const RootReducer = combineReducers({
	
	provider: ProviderReducer
	
});