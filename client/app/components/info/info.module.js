import infoComponent from './info.component';

const info = angular
	.module('components.info',[])
	.component('info',infoComponent)
	.name;

export default info;	