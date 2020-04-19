const express = require('express');
const fs = require('fs');
const fs_read = require('util').promisify(fs.readFile);
const app = express();

app.get('/write', (req, res) => {
	// fs_write('/tmp/message.txt', 'Testing Mounts')
	// 	.then(result => {
	// 		console.log('Written to file');
	// 		return res.status(200).send('File Updated');
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 		return res.status(400).send(err);
	// 	});

	fs_read('/tmp/message.txt')
		.then(data => {
			console.log('Data read: ', data.toString());
			return res.send(data.toString());
		})
		.catch(err => {
			console.log('Error reading file');
			console.log(err);
			return res.send(err);
		});
});

app.get('/monitor', (req, res) => {
	return res.status(200).send('Ok');
});

app.listen(5000, () => {
	console.log('Server running on port 5000');
});
