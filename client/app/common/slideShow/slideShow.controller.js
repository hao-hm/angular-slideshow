class SlideShowController {
  constructor() {

  }
  $onInit() {
    // this.slides = [
    //   {image: 'https://unsplash.it/800/400/?random', description: 'Image 00'},
    //   {image: 'https://unsplash.it/800/400/?random', description: 'Image 01'},
    //   {image: 'https://unsplash.it/800/400/?random', description: 'Image 02'},
    //   {image: 'https://unsplash.it/800/400/?random', description: 'Image 03'},
    //   {image: 'https://unsplash.it/800/400/?random', description: 'Image 04'}
    // ];
    this.slides = [];
    this.generateSlides(10);

    this.currentIndex = 0;
    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };

    this.prevSlide = function () {
      this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
    };
    this.nextSlide = function () {
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
    };
  }
  generateSlides(number){
    for (var i = 0; i < number; i++) {
      var slide = arguments[i];
      this.slides.push({
        image: `http://loremflickr.com/800/400?random=${i}`,
        description: `Image ${i}`
      })
    }
  }
}

export default SlideShowController;
