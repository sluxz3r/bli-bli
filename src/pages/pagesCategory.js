import React, { Component } from 'react';
import SlideCat from '../component/slidecat';
import {Link} from 'react-router-dom';
import Data from '../data/data';
import '../assets/pageCategory.css';

class pageCategory extends Component {
    constructor(props) {
        super(props);
        this.category = props.match.params.category;
        this.pata = Data.filter(item => item.category === this.category)
    }

    render() {
        return (
                <div className="body">
                 <div className="body1">
                    <div>
                        <div className="sub-div">
                        <Link className="home" to='/'>
                            <a >Home</a>
                        </Link>
                            <img src="https://www.static-src.com/4.39.0-12/resources/images/assets/breadcrumb-arrow.png" />
                            <a className="home">{this.category}</a>
                        </div>

                        <div className="sub-div2">
                            <br/>
                            <span className="span1">{this.category}</span>
                            <span className="span2">Daftar Harga {this.category}</span>
                        </div>

                        <div className="slide">
                            <SlideCat />
                        </div>
                    </div>
                    
                    <div className="cat-div1">
                        <h2>Produk Kamu</h2>
                    {this.pata.map(item =>
                   <Link to={`/product/${item.id}`} >
                        <div className="category-flex">
                            <img className="category-icon" src={item.image}/>
                            <p className="cat-p1">{item.name}</p>
                            <p className="cat-p2">Rp {item.price}</p>
                        </div>
                    </Link>
                    )}
                    </div>

                    <div>
                        <img className="kata" src="https://cdn1.imggmi.com/uploads/2019/7/10/949d18345adb728abd7180e72840f4e6-full.png" />
                    </div>
                </div>

            </div>
        );
    }

}

export default pageCategory;