import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../assets/slidecat.css'
 
const slideImages = [
  'https://www.static-src.com/siva/asset//07_2019/CERMATHEMAT-c1.jpg',
  'https://www.static-src.com/siva/asset//07_2019/travelogue2-15juli-c1_desktop-1200x460.jpg',
  'https://www.static-src.com/siva/asset//07_2019/file-c1-ori-ga-mahal-jul-hom-c1rev.jpg',
  'https://www.static-src.com/siva/asset//07_2019/zyo_best_selling-c1_mob-1200x460.jpg',
  'https://www.static-src.com/siva/asset//07_2019/king_rabbit_relaunch-c1_desk1-1200x460rev.jpg'
];
 
const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const SlideCat = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
    )
}

export default SlideCat