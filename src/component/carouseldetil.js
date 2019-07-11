import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

class DemoCarousel extends Component {
    render() {
        return (
            
            <Carousel>
                <div>
                    <img src="https://cf.shopee.co.id/file/7fc5b524885b465d7cf1fd57312163c9" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://cf.shopee.co.id/file/7fc5b524885b465d7cf1fd57312163c9" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://cf.shopee.co.id/file/7fc5b524885b465d7cf1fd57312163c9" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel