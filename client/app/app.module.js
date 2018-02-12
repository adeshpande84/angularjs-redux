import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import components from './components/components.module';
import vendor from './vendor/vendor.module';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import './app.scss';

const app = angular
  .module('app',[uiRouter,components,vendor])
	
  .config(['$locationProvider','$urlRouterProvider',function($locationProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

  }])
  .component('app',AppComponent)
  .name;

export default app;	