const express = require ('express');
const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'Andres desde house'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);