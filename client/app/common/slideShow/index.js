import angular from 'angular';
import uiRouter from 'angular-ui-router';
import slideShowComponent from './slideShow.component';

let slideShowModule = angular.module('slideShow', [
  uiRouter
])

.component('slideShow', slideShowComponent)

.name;

export default slideShowModule;
