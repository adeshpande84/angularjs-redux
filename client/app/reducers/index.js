import {combineReducers} from 'redux';
import {ProviderReducer} from './provider.reducer';
//import {AddressReducer} from './address.reducer';

export const RootReducer = combineReducers({
	provider: ProviderReducer
})