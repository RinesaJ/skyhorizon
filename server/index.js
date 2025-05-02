const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/tours', (req, res) => {
  res.json([
    { id: 1, title: 'European Adventure', duration: '10 Days', price: '$2500' },
    { id: 2, title: 'Asian Explorer', duration: '12 Days', price: '$2100' }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
