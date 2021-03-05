const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ name: 'Home', email: '1808@gmail.com' });
});

app.get('/api/v1/info/mentors', (req, res) => {
  res.json({ name: 'Dev' });
});
app.get('/api/v1/info/companies', (req, res) => {
  res.json({ name: 'Umbrella' });
});

app.listen(process.env.PORT || port, () => {
  console.log(`listening on ${port}`);
});
