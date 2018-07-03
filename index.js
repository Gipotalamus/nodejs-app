
const utils = require('./utils');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 8000;

MongoClient.connect('mongodb://localhost:27017/testdb', (err, client) => {
	if (err) {
		return console.log('error while connecting');
	}
	console.log('connected!');
	const db = client.db('testdb');
	db.collection('firstCollection').insertOne({
		firstName: 'Myron',
		lastName: 'Gorbovyi'
	}, (err, result) => {
		if (err) {
			return console.log('error while connecting');
		}
		console.log(JSON.stringify(result));
	});
	client.close();
})

app.get('/json', (req, res) => {
	res.send({
		name: 'John',
		surname: 'Doe'
	});
})


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/static/index.html');
})


app.listen(port, () => console.log(`Server is listening on port ${port}`));