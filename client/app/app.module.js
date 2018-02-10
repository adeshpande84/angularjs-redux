import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import AppComponent from './app.component';

import components from './components/components.module';
import vendor from './vendor/vendor.module';

import { RootReducer } from './reducers';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import './app.scss';

const app = angular
  .module('app',[uiRouter,ngRedux,components,vendor])
	
  .config(['$locationProvider','$urlRouterProvider','$ngReduxProvider',function($locationProvider,$urlRouterProvider,$ngReduxProvider) {
    $urlRouterProvider.otherwise('/home');

    $ngReduxProvider.createStoreWith(RootReducer);
  }])
  .component('app',AppComponent)
  .name;

export default app;	