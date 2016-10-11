import Slide from './slide'

class SlideShowController {
  constructor($interval) {
    this.interval = $interval;
  }
  $onInit() {
    this.slides = [];
    this.generateSlides(this.count);

    this.currentIndex = 0;
    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };

    this.prevSlide = function () {
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
    };
    this.nextSlide = function () {
      this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
    };

    this.stopTime = this.interval(()=> this.nextSlide(), 5000);
  }
  $onDestroy(){
    this.interval.cancel(this.stopTime);
  }


  generateSlides(count = 10){
    for (var i = 0; i < count; i++) {
      let slide = new Slide();
      this.slides.push(slide);
    }
  }
}

SlideShowController.$inject = ['$interval'];
export default SlideShowController;
