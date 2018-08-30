import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue">
            <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <a href="/" className="brand-logo">Meetupz</a>
            
            <ul className="side-nav" id="mobile-demo">        
              <li className="white"><a href="#" className="waves-effect waves-blue"><i className="material-icons">mail</i>Menu item</a></li>
              <li className="white"><a href="#" className="waves-effect waves-blue"><i className="material-icons">call</i> Menu item</a></li>
              <li className="white"><a href="#" className="waves-effect waves-blue"><i className="material-icons">android</i> Menu item</a></li>
              <li className="white"><a href="#" className="waves-effect waves-blue"><i className="material-icons">dialpad</i> Menu item</a></li>              
            </ul>
            
          </div>
        </nav>     
      </div>
    );
  }
}

export default Navbar;
