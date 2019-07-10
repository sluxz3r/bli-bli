import React, { Component } from 'react';
import dataRekomendasi from '../data/datarekomendasi'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import '../assets/purejscarousel.css'
import "../assets/lisproduct.css"
let data = require('../data/data');
 
class ListProduct extends Component {
    render() {
        return (
            <div className="recomendation row box">
                <div className="boxheader">
                    <h2>Produk Terlaris</h2>
                </div>
                <div className="product">
                    <div className="vuecarousel" role="listbox">
                        {dataRekomendasi.map(e => 
                            <div className="itemcarousel">
                                <a>
                                    <div className="product-item">
                                        <div className="productimg">
                                            <img src={e.image} />
                                        </div>
                                        <div className="productinfo">
                                            <div className="productname">{e.name}</div>
                                            <div className="productprice">{e.price}</div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="navigationbutton">

                    </div>
                </div>
            </div>
        );
    }
};




// console.log(data)

export default ListProduct;