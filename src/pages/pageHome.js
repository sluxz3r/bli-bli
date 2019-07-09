import React, { Component } from 'react';
import Homepage from '../component/homepage'
import FlashSale from '../component/flashsale';
import Inspirasi from '../component/inspirasi';
import Category from '../component/category';
import '../assets/pageHome.css';

class pageHome extends Component {
  render() {
    return (
      <div>
        <div className="body">
          <Homepage />
          <FlashSale />
          <Inspirasi />
          <Category />
        </div>
      </div>
    );
  }
}

export default pageHome;
