import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div style={{background: "black", height: "100px", opacity: "0.9"}} className="Footer zigzag">
        <p style={{ textAlign: "center", color: "grey", paddingTop: "30px"}}>Copyright section</p>
      </div>
    )
  }
}

export default Footer;
