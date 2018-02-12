import home from './home/home.module';
import address from './address/address.module';

const components = angular
	.module('components',[home,address])
	.name;

export default components;	