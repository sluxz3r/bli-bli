import React, { Component } from 'react';
import SlideCat from '../component/slidecat';
import {Link} from 'react-router-dom';
import Data from '../data/data';
import '../assets/subheader.css';

class pageCategory extends Component {
    constructor(props) {
        super(props);
        this.category = props.match.params.category;
        this.pata = Data.filter(item => item.category === this.category)
    }

    render() {
        return (
                <div className="body">
                
                    <div>
                        <div className="sub-div">
                        <Link className="home" to='/'  >
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
                    <div>
                    {this.pata.map(item => 
                        <div>
                            <img src={item.image}/>
                            {item.name}
                        </div>
                        )}
                    </div>

                      
                </div>
        );
    }

}

export default pageCategory;