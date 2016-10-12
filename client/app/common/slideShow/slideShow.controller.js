import Slide from './slide'

class SlideShowController {
  constructor($interval) {
    this.interval = $interval;
  }
  
  $onInit() {
    this.slides = this.generateSlides(this.count);
    this.currentIndex = 0;
    //auto play
    //this.stopTime = this.interval(()=> this.nextSlide(), 5000);
  }

  $onDestroy(){
    this.interval.cancel(this.stopTime);
  }

  prevSlide(){
    this.prev = true;
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }

  nextSlide(){
    this.prev = false;
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }

  isCurrentSlideIndex(index){
    return this.currentIndex === index;
  }

  setCurrentSlideIndex(index){
    this.prev = index < this.currentIndex;
    this.currentIndex = index;
  }

  generateSlides(count = 10){
    let slides = [];
    for (var i = 0; i < count; i++) {
      let slide = new Slide();
      slides.push(slide);
    }
    return slides;
  }
}

SlideShowController.$inject = ['$interval'];
export default SlideShowController;
