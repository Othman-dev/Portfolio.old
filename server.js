const express = require('express');

const app = express();


app.get('/', (req, res) => res.send('API Running'));

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/email', require('./api/email.js'));
app.use('/api/maps', require('./api/maps.js'));
app.use('/api/music', require('./api/music.js'));

//PORT & Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
