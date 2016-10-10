import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import SlideShow from './slideShow';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  SlideShow
])

.name;

export default commonModule;
