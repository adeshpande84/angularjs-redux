import addressListComponent from './address-list.component';
import address from '../address/address.module';

const addressList = angular
	.module('components.addressList',[address])
	.component('addressList',addressListComponent)
	//.service('AddressService',AddressService)
	.name;

export default addressList;	