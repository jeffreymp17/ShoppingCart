import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
        primary: {
        main: '#009688',
        },
        secondary: {
          main:'#303F9F'
        }
      }
    });
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <Header/>
        <div  className="container">
        <Products/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
