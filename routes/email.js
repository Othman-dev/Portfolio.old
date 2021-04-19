const express = require('express');
const router = express.Router();
const sendGrid = require('@sendgrid/mail');
require('dotenv').config();

const apiKey = process.env.EMAIL_KEY;

router.post('/', (req, res) => {

		sendGrid.setApiKey(apiKey);
		const msg = {
		to: 'othman@workmail.com',
		from: 'othman@workmail.com',
		subject: req.body.subject,
		text: req.body.name + '\n' + req.body.email  + '\n\n' + req.body.content,
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
