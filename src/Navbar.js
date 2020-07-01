import React, { Component } from 'react';
import "./Navbar.css";


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navBAR">
        <div className="container">
          <a className="navbar-brand" href="/" id="navbarBrand">TEST</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active px-3">
                <a className="nav-link" id="homePage" href="/">HOMEPAGE <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">ABOUT US</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">CLIENTS</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">CAREERS</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">CONTACT US</a>
              </li>
            </ul>

          </div>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;


