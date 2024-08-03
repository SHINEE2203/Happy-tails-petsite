const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Route to proxy requests to eBird API
app.get('/api/obs/recent', async (req, res) => {
  const apiKey = 'tubsl3gt6hkt'; // Replace with your actual API key
  const url = 'https://api.ebird.org/v2/data/obs/geo/recent';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${apiKey}`
      }
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      return res.status(response.status).send(`Error: ${errorText}`);
    }

    // Send the JSON response
    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
