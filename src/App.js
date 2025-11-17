import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/About-Us/AboutUs'; // ✅ Import AboutUs
import GetQuote from './components/GetQuote/GetQuote';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onGetQuote={() => setIsModalOpen(true)} />

      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="about"><AboutUs /></section>
      <section id="footer"><Footer /></section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>✖</button>
            <GetQuote />
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
