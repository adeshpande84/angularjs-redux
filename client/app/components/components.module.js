import home from './home/home.module';
import addressList from './address-list/address-list.module';
import info from './info/info.module';

const components = angular
	.module('components',[home,info,addressList])
	.name;

export default components;	