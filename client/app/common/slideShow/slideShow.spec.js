import SlideShowModule from './index'
import SlideShowController from './slideShow.controller';
import SlideShowComponent from './slideShow.component';
import SlideShowTemplate from './slideShow.html';

describe('SlideShow', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SlideShowModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SlideShowController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SlideShowTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SlideShowComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SlideShowTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SlideShowController);
      });
  });
});
