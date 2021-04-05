const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', 'https://res'); 
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		next();
});

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
		app.use(express.static('client/build'));

		app.get('*', (req, res) => {
				res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
		});
}

app.use('/api/email', require('./routes/email'))

//PORT & Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
