class Slide {
  constructor(image, description){
    let random  = Math.floor((Math.random() * 100) + 1);
    this.image = image || `http://loremflickr.com/800/400?random=${random}`;
    this.description = description || `Description ${random}`
  }
}

export default Slide
