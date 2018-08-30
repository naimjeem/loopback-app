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
          <Link to="/meetupz/add" className="btn-floating btn-large green">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
