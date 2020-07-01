import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Card from "./Card";
import ListCard from './ListCard';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Card />
        <hr />
        <ListCard />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
