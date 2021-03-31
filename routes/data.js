const express = require('express');
const router = express.Router();

router.post('/En', (req, res) => {

		console.log('En');
		res.json('test');
});

router.post('/Fr', (req, res) => {

		console.log('Fr');
		res.json('test');
});

module.exports = router;
