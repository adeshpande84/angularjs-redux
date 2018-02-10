import {combineReducers} from 'redux';
import {AddressReducer} from './address.reducer';

export const RootReducer = combineReducers({
	address: AddressReducer
})