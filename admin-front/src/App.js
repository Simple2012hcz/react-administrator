import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerRouter from "./router"
import LeftBar from './share-components/leftBar/leftBar';

class App extends Component {
  render() {
    return (
     <div className="app-wrapper">
        <LeftBar className="app-left-wrapper"/>
        <CustomerRouter className="app-right-wrapper"/>
     </div>
    );
  }
}


export default App;
