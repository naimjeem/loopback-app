import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Main />
        </div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large green modal-trigger" href="#modal1">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
