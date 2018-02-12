import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngRedux from 'ng-redux';
import homeComponent from './home.component';
import HomeService from './home.service';
import { RootReducer } from '../../reducers';

const home = angular
	.module('components.home',[uiRouter,ngRedux,ngAnimate])
	.component('home',homeComponent)
	.service('HomeService',HomeService)
	.config(['$stateProvider','$ngReduxProvider',function($stateProvider,$ngReduxProvider) {
		$stateProvider.state('home',{
			url: '/home',
			component: 'home',
			resolve: {

				title: ['HomeService', function(HomeService) {
					
					return HomeService.getTitle();
				}],

				data: ['HomeService',function(HomeService) {

					return HomeService.getProvider().then(function(d) {
						$ngReduxProvider.createStoreWith(RootReducer,[],[],{provider: d});
						return d;
					});
				}]
			}
		});
	}])
	.name;

export default home;	