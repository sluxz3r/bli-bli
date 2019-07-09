import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header1 from './component/header1';
import Header2 from './component/header2';
import Homepage from './component/homepage'
import FlashSale from './component/flashsale';
import Footer from './component/footer';
import Inspirasi from './component/inspirasi';
import Category from './component/category';
import PageHome from './pages/pageHome';
import PageCategory from './pages/pagesCategory';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Header2 />
        

        <Router>
          <Switch>
          <Route exact path="/"><PageHome /></Route>
          <Route path="/category/:category"> <PageCategory /> </Route>
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
