
let express = require('express');
let app = express();
let port = process.env.PORT || 8000;



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