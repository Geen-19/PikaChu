import React, { useEffect, useState } from "react";
import "./About.css";
import PikaRocket from "../../assets/pika-rocket.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-cover">
      <h1>ABOUT US</h1>
      <div className="about">
        <p>
          NIGGACHU is the electric meme coin that powers up your wallet with the
          vibrant energy of Pikachu and the bold flair of a black-and-red
          design! Just like the beloved Pokémon, niggachu is here to bring
          excitement, laughs, and a little zap of fun into the world of
          cryptocurrency. 
        </p>
        <br />
        <br />
        <p>
          This coin is all about community, creativity, and
          electrifying vibes. Whether you're looking to trade, tip, or just
          power up your collection, Niggachu is the spark you've been waiting
          for!
        </p>
        <div className="buy-button">
          <button>Buy $NIGGACHU</button>
        </div>
        <img 
          className={`pika-rocket ${isVisible ? 'visible' : ''}`} 
          src={PikaRocket} 
          alt="" 
        />
      </div>
    </div>
  );
};

export default About;