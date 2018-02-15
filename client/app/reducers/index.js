import {combineReducers} from 'redux';
import {ProviderReducer} from './provider.reducer';

export const RootReducer = combineReducers({
	
	provider: ProviderReducer
	
});