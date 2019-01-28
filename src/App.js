import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        <div  className="container">
        <Product></Product>
        </div>
      </div>
    );
  }
}

export default App;
