import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import './Dog.css'; // Import the CSS file

function Dog() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds/', {
          headers: {
            'x-api-key': 'live_P6SlmyTEhDz8GRCxZi3WuMmUgr8A1klDLaFMgUsly2IpbTQgnGB7873mqmMgfeCx'
          }
        });
        setRecords(response.data);
      } catch (error) {
        setError('Failed to fetch dog data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="DisplayDog" className="display-dog">
      {error && <div className="alert alert-danger">{error}</div>}
      <Container fluid>
        <Row>
          {records.map((breed, key) => (
            <Col key={key} md={4} className="mb-4">
              <div className="dog-card">
                <img
                  src={breed.image?.url || 'default-image-url'}  // Add a default image URL if image is not available
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
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Dog;
