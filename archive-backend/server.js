const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const { q, page = 1 } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  const searchUrl = 'https://archive.org/advancedsearch.php';
  const params = {
    q,
    fl: ['identifier', 'title', 'creator', 'mediatype', 'description'],
    rows: 10,
    page,
    output: 'json',
  };

  try {
    const response = await axios.get(searchUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Internet Archive:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Internet Archive' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
