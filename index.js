const fs = require('fs');
const express = require('express');
const fs_write = require('util').promisify(fs.writeFile);
const fs_read = require('util').promisify(fs.readFile);
const originalConsoleError = console.error;
const originalConsoleLog = console.log;
console.log = (...args) => originalConsoleLog('LOG:', args);
console.error = (...args) => originalConsoleError('ERROR:', args);

const app = express();

app.get('/monitor', (req, res) => {
	return res.send('server is OK...');
});

app.get('/', (req, res) => {
	return res.send('Hello!!!');
});

// app.get('/write/:text', (req, res) => {
// 	console.log('Write is starting');
// 	const {text} = req.params;
// 	fs_write('/tmp/message.txt', text)
// 		.then(result => {
// 			console.log('Written to file');
// 			return res.send('data written');
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			return res.send(err);
// 		});
// });

// app.get('/read', (req, res) => {
// 	console.log('Reading from original');
// 	fs_read('/tmp/message.txt')
// 		.then(data => {
// 			console.log('Data read: ', data.toString());
// 			return res.send(data.toString());
// 		})
// 		.catch(err => {
// 			console.log('Error reading file');
// 			console.log(err);
// 			return res.send(err);
// 		});
// });

app.listen(5000, () => {
	console.log(`Server running on port 5000.. push 2`);
});
