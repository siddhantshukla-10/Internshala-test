import React, { Component } from 'react';
import card1 from "./card1.jpeg";

class ListCard extends Component {
  render() {
    return (
      <div className="cotainer-fluid d-flex">
        <div className="card col-lg-8" id="card-margin" style={{ width: "18rem", border: "0px",}}>
          <h1 className="card-title">Libero volutpat pulvinar</h1>
          <h5 class="card-subtitle mb-2 text-muted">Card subtitle</h5>
          <img src={card1} className="card-img-top" alt="image1" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-warning" style={{fontWeight: "bold", borderRadius: "5px"}}>MORE INFO</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div class="card" style={{ width: "18rem", border: "0px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{ fontWeight: "bold" }}>Categories</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Reprehenderit exercitation ex mollit dolor velit nulla ad duis.</li>
                <li class="list-group-item">Mollit fugiat ut id adipisicing commodo sint.</li>
                <li class="list-group-item">Eiusmod duis quis ipsum aliqua minim qui officia voluptate adipisicing proident exercitation dolore.</li>
              </ul>
              <a href="/" className="btn btn-warning" style={{fontWeight: "bold", borderRadius: "5px", padding: "2px"}}>MORE INFO</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ListCard;
