import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';
import HomeService from './home.service';

const home = angular
	.module('components.home',[uiRouter])
	.component('home',homeComponent)
	.service('HomeService',HomeService)
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider.state('home',{
			url: '/home',
			component: 'home',
			resolve: {

				title: ['HomeService', function(HomeService) {
					
					return HomeService.getTitle();
				}],

				data: ['HomeService', function(HomeService) {
					return HomeService.getProvider();
				}]
			}
		});
	}])
	.name;

export default home;	