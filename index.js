
let express = require('express');
let app = express();
let port = process.env.PORT || 8000;

app.get('/', (req, res) => {
	res.send({
		name: 'John',
		surname: 'Doe'
	});
})
console.log(port);
app.listen(port, () => console.log(`Server is listening on port ${port}`));