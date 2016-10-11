import template from './slideShow.html';
import controller from './slideShow.controller';
import './slideShow.styl';

let slideShowComponent = {
  restrict: 'E',
  bindings: {
    count: '<'
  },
  template,
  controller
};

export default slideShowComponent;
