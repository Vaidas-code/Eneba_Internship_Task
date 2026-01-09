
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


// Import routes
const gameKeysRoutes = require('./src/routes/gameKeysRoutes');
app.use('/', gameKeysRoutes);

const path = require('path');
if(process.env.NODE_ENV === 'production'){
  // Serve static files from React build
  app.use(express.static(path.join(__dirname, '../frontend/my-app/dist')));
  // SPA fallback: serve index.html for any unknown route
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/my-app/dist/index.html'));
  });
}

const supabase = require('./src/config/supabase');
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  try {
    const { data, error } = await supabase.from('game_keys').select('*').limit(1);
    if (error) {
      console.log('Could not query game_keys table:', error.message);
    } else if (data && data.length > 0) {
      console.log('Table game_keys found and contains data.');
    } else {
      console.log('Table game_keys found but is empty.');
    }
  } catch (err) {
    console.log('Error checking game_keys table:', err.message);
  }
});
