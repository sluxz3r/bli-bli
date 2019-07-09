import React, {Component} from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Header1 from './component/header1';
import Header2 from './component/header2';
import Footer from './component/footer';
import PageHome from './pages/pageHome';
import PageCategory from './pages/pagesCategory';
import ProductItem from './pages/productItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Header2 />
              <Route exact path="/" component={PageHome}/>
              <Route path="/category/:category" component={PageCategory}/> 
              <Route path="/product/:id" component={ProductItem} /> 
        <Footer />
      </div>
    );
  }
}

export default App;
