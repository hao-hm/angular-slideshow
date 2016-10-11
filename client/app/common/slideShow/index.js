import angular from 'angular';
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import slideShowComponent from './slideShow.component';

let slideShowModule = angular.module('slideShow', [
  ngAnimate,
  ngTouch
])

.component('slideShow', slideShowComponent)

.name;

export default slideShowModule;
