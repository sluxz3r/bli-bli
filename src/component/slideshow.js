import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../assets/slideshow.css'
 
const slideImages = [
  'https://www.static-src.com/siva/asset//07_2019/summer-shop-840x280.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//07_2019/caffino-blm-carousel-desktop.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//07_2019/FC-Back-to-School-Jul-19_Home-Page.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//07_2019/msi-777-home.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//05_2019/caraouseluobakuisisidesktop.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//07_2019/q3-main-dekstop2-rev.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//07_2019/840x280mmd8jul.jpg?output-format=webp',
  'https://www.static-src.com/siva/asset//07_2019/homemon.jpg?output-format=webp'
];
 
const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
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
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[6]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[7]})`, 'height': `100%`, 'width': '80%'}}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow