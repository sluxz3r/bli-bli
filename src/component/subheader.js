import React, {Component} from 'react';
import SlideCat from '../component/slidecat';
import '../assets/subheader.css';

class SubHeader extends Component {
    render(){
        return(
            <div>
               <div className="sub-div">
                       <a>Home</a>
                           <img src="https://www.static-src.com/4.39.0-12/resources/images/assets/breadcrumb-arrow.png"/>
                       <a>{this.category}</a>     
               </div>
               <div className="sub-div2">
                   <span className="span1">(Kategori)</span>
                   <span className="span2">Daftar Harga (Kategori)</span>
               </div>
               <div className="slide">
                    <SlideCat />
               </div>
            </div>
        );
    }
}

export default SubHeader;