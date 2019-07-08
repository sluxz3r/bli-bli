import React, {Component} from 'react';
import Header1 from './component/header1';
import Header2 from './component/header2';
import Homepage from './component/homepage'
import './App.css';

class App extends Component{
  render() {
    return (
      <div>
        <Header1 />
        <Header2 />
        <Homepage />
      </div>
    );
  }
}

export default App;
