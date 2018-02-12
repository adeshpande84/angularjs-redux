import addressComponent from './address.component';
import AddressService from './address.service';

const address = angular
	.module('components.address',[])
	.component('address',addressComponent)
	.service('AddressService',AddressService)
	.name;

export default address;	