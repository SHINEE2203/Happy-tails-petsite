import React from 'react';
import './Pets.css';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/Image/photo1.jpg';
import photo2 from '../assets/Image/photo2.jpg';
import logo from '../assets/Image/logo.jpg';
const Pets = () => {
  
    const navigate = useNavigate();

    const navigate1 = useNavigate();
    
   
 const backgroundimg = {
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%', // or any other value
 }
  return (
    <div className="gallery"  style={backgroundimg}>
      
      <div className="centered-content">
        <div className="head">
          <h1>WELCOME TO OUR PET PARADISE 🐾</h1>
        </div>
        <div className="para">
        <p>
  Whether you're a dedicated dog lover or a cat enthusiast,<br />
  Whether you're a dog devotee or a cat connoisseur,<br />
  we've got you covered with detailed insights and tips to help you make the best choice.<br />
  Click on each pet image to dive into the wonderful world of dog and cat breeds!<br />
  Explore the unique personalities, care needs, and special traits of each breed,<br />
  and find the perfect furry friend for your home.
</p>
        </div>
      </div>
      <div className="galleries">
        <div className="gallery-item" onClick={() => navigate('Dog.js')}>
          <div className="Dog" id="userTable1">
            <img src={photo1} alt="Dog"/>
          </div>
        </div>
        <div className="gallery-item" onClick={() => navigate1('Cat.js')}>
          <div id="userTable2">
            <img src={photo2} alt="Cat" />
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default Pets;
