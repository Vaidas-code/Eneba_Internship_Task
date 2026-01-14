const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const gameKeysRoutes = require('./src/routes/gameKeysRoutes');
app.use('/', gameKeysRoutes);

const path = require('path');
app.use(express.static(path.join(__dirname, 'static')));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
