import React, { Component } from 'react';
import './App.css';
import PriceList from './components/PriceList.js';
import Calculator from './components/Calculator.js';
import Header from './components/Header';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <NavBar/>
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/" component={PriceList} />
        
        </div>
    );
  }
}

export default App;
