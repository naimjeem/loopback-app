import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue">
            <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <a href="/" className="brand-logo center">Meetupz</a>
            
            <ul className="side-nav" id="mobile-demo">        
              <li className="white">
                <Link to="/about" className="waves-effect waves-blue">
                  <i className="material-icons">question_answer</i>
                  About
                </Link>
              </li>
              <li className="white">
                <Link to="/" className="waves-effect waves-blue">
                  <i className="material-icons">list_alt</i>
                  Meetups
                </Link>
              </li>   
            </ul>
            
          </div>
        </nav>     
      </div>
    );
  }
}

export default Navbar;
