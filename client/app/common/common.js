import angular from 'angular';
import SlideShow from './slideShow';
import './common.styl';

let commonModule = angular.module('app.common', [
  SlideShow
])
.name;

export default commonModule;
