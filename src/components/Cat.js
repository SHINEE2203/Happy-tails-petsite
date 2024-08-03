import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import './Cat.css'; // Import the CSS file

function Cat() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'x-api-key': 'live_s04SR7fSp9gl1pCNXTGjuV2JR98uoUNciBqOsIe81FKkk5hyGb1g65nlkKMpF7Np'
        };

        const response = await axios.get('https://api.thecatapi.com/v1/breeds/', { headers });
        const data = response.data;

        // Filter breeds with valid reference_image_id
        const validBreeds = data.filter(breed => breed.reference_image_id);

        // Fetch additional image data for each valid breed
        const imagePromises = validBreeds.map((breed) => {
          const catImageURL = `https://api.thecatapi.com/v1/images/${breed.reference_image_id}`;
          return axios.get(catImageURL)
            .then(imageResponse => ({ breed, image: imageResponse.data }))
            .catch(error => {
              console.error(`Error fetching image for breed ${breed.name}:`, error);
              return null; // Skip this breed if there's an error
            });
        });

        // Wait for all image data to be fetched
        const imageResponses = await Promise.all(imagePromises);
        setRecords(imageResponses.filter(response => response !== null)); // Remove null entries

      } catch (error) {
        setError('Failed to fetch cat data');
        console.error('Error fetching cat data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="DisplayCat" className="display-cat">
      {error && <div className="alert alert-danger">{error}</div>}
      <Container>
        <Row>
          {records.map((data, key) => {
            const { breed, image } = data;
            return (
              <Col key={key} md={4} className="mb-4">
                <div className="cat-card">
                  <img
                    src={image.url}
                    alt={breed.name}
                    className="card-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{breed.name}</h5>
                    <div className="card-text">
                      <p><b>Bred for:</b> <span>{breed.bred_for || 'Unknown'}</span></p>
                      <p><b>Origin:</b> <span>{breed.origin || 'Unknown'}</span></p>
                      <p><b>Life Span:</b> <span>{breed.life_span || 'Unknown'}</span></p>
                      <p><b>Temperament:</b> <span>{breed.temperament || 'Unknown'}</span></p>
                      <p><b>Height:</b> <span>{breed.height?.imperial || 'Unknown'}</span></p>
                      <p><b>Weight:</b> <span>{breed.weight?.imperial || 'Unknown'}</span></p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Cat;
