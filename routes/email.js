const express = require('express');
const router = express.Router();
const sendGrid = require('@sendgrid/mail');
require('dotenv').config();

const app = express();

const apiKey = process.env.EMAIL_KEY;

router.get('/', (req, res) => {
		console.log(req.body)
});

router.post('/', (req, res) => {
		console.log(req.body);		
		sendGrid.setApiKey(apiKey);
		const msg = {
		to: 'othman@workmail.com',
		from: req.body.email,
		subject: req.body.subject,
		text: req.body.content + '\n' + req.body.name,
		};

		sendGrid.send(msg)
				.then(result => {
						res.status(200).json({
								success: true
						});
				})
				.catch(err => {
						res.status(401).json({
								success: false
						});
				});
});

module.exports = router;
