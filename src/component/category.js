import React, {Component} from 'react';
import DataCategory from '../data/DataCategory';
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
                
                    <a className="cat-a" href="">
                        {DataCategory.map( item =>
                            <img className="cat-img" src={item.img} />
                        )} 
                        {DataCategory.map( item =>
                        <span className="cat-text">{item.category}</span>
                        )}
                    </a>
                   
                </div> 
                     
            </div>
        );
    }
}

export default Category;