import React, { useState, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import Pets from './Pets';
import videoFile from '../assets/Image/dogsC.mp4';
import catC from '../assets/Image/catC.mp4';
import dogC from "../assets/Image/dogC.mp4"; 
import catsc from "../assets/Image/catsc.mp4";
import About from './About';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const carouselRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleVideoEnd = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };  return (
    <>
     <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">HAPPY TAILS 🐾</div>
        <div className='nav-links'>
          <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#details">Pets</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          ☰
        </div>
      </nav>
        <div className='heads'>
          <h1>HAPPY TAILS <br />Learn More About <br /> Dogs and Cats..</h1>
        </div>
      </div>
      
      <Carousel data-bs-theme="dark" ref={carouselRef}>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay muted loop onEnded={handleVideoEnd}>
            <source src={dogC} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption style={{ color: 'lightblue' }}>
            <h5>Discover the Paw-sitive Vibes of Dogs</h5>
            <p style={{ color: 'lightblue' }}>Unleash joy with playful pups and loyal companions. From sprightly Border Collies to loving Golden Retrievers, find your perfect furry friend!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video className="d-block w-100" autoPlay muted loop onEnded={handleVideoEnd}>
            <source src={catsc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption style={{ color: 'lightgreen' }}>
            <h5>Cat-tastic Adventures Await</h5>
            <p>Explore the mysterious and graceful world of cats. Whether you're captivated by the elegance of the Russian Blue or the warmth of a Maine Coon, there's a feline friend for everyone!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video className="d-block w-100" autoPlay muted loop onEnded={handleVideoEnd}>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption style={{ color: 'lightgoldenrodyellow' }}>
            <h5>Canine Companions: Tail-Wagging Tales</h5>
            <p>Embark on a journey with man's best friend. From the spirited Border Collie to the loyal Golden Retriever, discover the heartwarming stories and playful antics of our beloved dogs. Your perfect furry friend awaits!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video className="d-block w-100" autoPlay muted loop onEnded={handleVideoEnd}>
            <source src={catC} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption style={{ color: 'lavender' }}>
            <h5>Enigmatic Elegance: Cat Chronicles</h5>
            <p>Delve into the captivating world of feline grace and mystery. From the dignified Persian to the playful Siamese, each breed offers a unique blend of charm and affection. Find your purr-fect companion today!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
      <div id="details">
        <Pets />
      </div>
      <div id="About">
        <About />
      </div>
    </>
  );
};

export default Home;
