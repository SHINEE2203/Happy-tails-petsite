import React from 'react'
import './About.css';
const About = () => {
    return (
        <>
        <div className="about-us">
          <section className="welcome">
            <h1>Welcome to Happy Tails!</h1>
            <p>
              At Happy Tails, our mission is to provide comprehensive and reliable information about dog and cat breeds to pet enthusiasts, prospective pet owners, and anyone curious about the diverse world of pets.
            </p>
          </section>
          
          <section className="our-story">
            <h2>Our Story</h2>
            <p>
              As a student with a deep love for animals, I created Happy Tails to share my passion for dogs and cats with others. What began as a personal project has blossomed into a valuable resource for anyone seeking to learn more about their future furry companions. With detailed breed profiles, expert advice, and practical tips, our goal is to help you make informed decisions about pet ownership and care.
            </p>
          </section>
          
          <section className="what-we-offer">
            <h2>What We Offer</h2>
            <ul>
              <li><strong>Detailed Breed Profiles:</strong> Dive into extensive information about a wide range of dog and cat breeds, including their characteristics, temperament, and care needs.</li>
              <li><strong>Interactive Features:</strong> Use our tools to compare breeds, find the perfect match for your lifestyle, and much more.</li>
            </ul>
          </section>
                  <section className="meet-the-creator">
            <h2>Meet the Creator</h2>
            <p>
              I’m Shinee Vasudevan, a dedicated student with a passion for animals. My goal with Happy Tails is to create a resource that not only informs but also inspires. Thank you for being a part of this journey into the incredible world of pets!
            </p>
          </section>
        </div>
        </>
      );
    };
    


export default About
