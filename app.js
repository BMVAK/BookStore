const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoute = require('./routes/books-route');
const genreRoute = require('./routes/genres-route');

//Using dot env to laod environment variables
dotenv.load();

//BOOKSTORE_MLAB_URL - MongoDb url from Mlab
const MONGODB_URL = process.env.BOOKSTORE_MLAB_URL || 'mongodb://localhost/bookstore';
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
//location for static content
app.use(express.static(__dirname + '/client'));

//Use Mlab url here
mongoose.connect(MONGODB_URL);

app.get('/', function (req, res) {
	res.send('Please Use the API /api/book or /api/genre');
});

app.use('/api/book', bookRoute);
app.use('/api/genre', genreRoute);

app.listen(PORT);
console.log('Started BookStore application on port ' + PORT);
console.log('Open http://localhost:' + PORT + ' on your browser!');