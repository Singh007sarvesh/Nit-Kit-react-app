import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import About from  './components/about'
import Login from './components/signup/login';
import Option from './components/signup/options';
import SignUp from './components/signup/signup';
import Item  from './components/items/item.js';
import Buyer  from './components/users/buyer.js';
import Seller  from './components/users/seller.js';
import Bid from './components/users/bid.js'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router> */}
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/options" component={Option} />
          <Route exact path="/buyer" component={Buyer} />
          <Route exact path="/seller" component={Seller} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/bid/:id" component={Bid} /> 
          <Route exact path="/" component={Home} />
        </Switch>
      {/* </Router> */}
      <Footer />
    </div>
  );
}

export default App;
