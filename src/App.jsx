import "./App.css";
import React, { useRef } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import PikachuComponent from "../components/Pikachu/PikachuComponent";
import About from "../components/About/About";
import Buy from "../components/HowToBuy/Buy";
import Book from "../components/Book/Book";
import Footer from "../components/Footer/Footer";
function App() {
  const aboutRef = useRef(null);
  const buyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-cover">
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} buyRef={buyRef} />
      <PikachuComponent />
      <Banner />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={buyRef}>
        <Buy />
      </div>
      <Book />
      <Footer />
    </div>
  );
}

export default App;