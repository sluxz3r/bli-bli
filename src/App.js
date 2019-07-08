import React, { Component } from 'react';
import Header1 from './component/header1';
import Header2 from './component/header2';
import FlashSale from './component/flashsale';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Header2 />
        <div className="body">
          
          <FlashSale />
        </div>
      </div>
    );
  }
}

export default App;
