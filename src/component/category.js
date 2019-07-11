import React, {Component} from 'react';
import DataCategory from '../data/DataCategory';
import {Link} from 'react-router-dom';
import '../assets/category.css';

class Category extends Component{
    render(){
        return(
            <div className="category">
                <div className="cat-header">
                    <span>Kategori</span>
                    <button>Lihat Selengkapnya</button>
                </div>
               
                <div className="cat-div">
                    {DataCategory.map( item =>
                        <Link to={`/category/${item.category}`} >
                            <div className="cat-a">
                                <img className="cat-img" src={item.img} />
                                <p className="cat-p">{item.category}</p>
                            </div>
                        </Link>
                    )}
                </div> 
                     
            </div>
          
        );
    }
}

export default Category;