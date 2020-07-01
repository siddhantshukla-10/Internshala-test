import React, { Component } from 'react';
import "./Card.css";
import card1 from "./card1.jpeg";
import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";

class Card extends Component {
  render() {
    return (
      <div className="cotainer-fluid d-flex">
        <div className="card col-lg-4 text-center" id="card-margin" style={{ width: "18rem" }}>
          <img src={card1} className="card-img-top" alt="image1" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: "bold"}}>Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-warning"  style={{fontWeight: "bold", borderRadius: "5px"}}>MORE INFO</a>
          </div>
        </div>

        <div className="card col-lg-4 text-center" id="card-margin" style={{ width: "18rem" }}>
          <img src={card2} className="card-img-top" alt="image2" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: "bold"}}>Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-warning" style={{fontWeight: "bold", borderRadius: "5px"}}>MORE INFO</a>
          </div>
        </div>

        <div className="card col-lg-4 text-center" id="card-margin" style={{ width: "18rem" }}>
          <img src={card3} className="card-img-top" alt="image3" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: "bold"}}>Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-warning" style={{fontWeight: "bold", borderRadius: "5px"}}>MORE INFO</a>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Card;


