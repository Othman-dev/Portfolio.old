const express = require('express');
const sendGrid = require('@sendgrid/mail');
require('dotenv').config();

const app = express();

const apiKey = process.env.SENDGRID_KEY;


app.post('/', (req, res) => {
		
		sendGrid.setApiKey(apiKey);
		const msg = {
		to: 'othman@workmail.com',
		from: req.body.email,
		subject: req.body.subject,
		text: req.body.content + '\n' + req.body.name,
		};

		sendGrid.send(msg)
				.then(result => {
						console.log(res)
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
