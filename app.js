var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req, res){
        res.send('Please Use the API /api/books or /api/genres');
});

//////////////////// GENRE API ////////////////////////

//To get all the genres from database
app.get('/api/genres', function(req, res){
Genre.getGenres(function(err, genres){
  if(err){
    throw err;
  }
  res.json(genres);
});
});

//To get a genre details using it's id
app.get('/api/genre/:_id', function(req, res){
Genre.getGenreById(req.params._id, function(err, genre){
  if(err){
    throw err;
  }
  res.json(genre);
});
});

//To add a new Genre to the database
app.post('/api/genre', function(req, res){
var genre = req.body;
Genre.addGenre(genre, function(err, genre){
  if(err){
    throw err;
  }
  res.json(genre);
});
});

//To update a genre details by its id
app.put('/api/genre/:_id', function(req, res){
var id = req.params._id;
var genre = req.body;
Genre.updateGenre(id, genre, {}, function(err, genre){
  if(err){
    throw err;
  }
  res.json(genre);
});
});

//To delete a genre using its id
app.delete('/api/genre/:_id', function(req, res){
var id = req.params._id;
Genre.deleteGenre(id, function(err, genre){
  if(err){
    throw err;
  }
  res.json(genre);
});
});


//////////////////// BOOK API ////////////////////////

// To get all the books from the database
app.get('/api/books', function(req, res){
Book.getBooks(function(err, books){
  if(err){
    throw err;
  }
  res.json(books);
});
});

//To get a book details using it's id
app.get('/api/book/:_id', function(req, res){
Book.getBookById(req.params._id, function(err, book){
  if(err){
    throw err;
  }
  res.json(book);
});
});

//To add a new book to the database
app.post('/api/book', function(req, res){
var book = req.body;
Book.addBook(book, function(err, book){
  if(err){
    throw err;
  }
  res.json(book);
});
});

//To update a book details by its id
app.put('/api/book/:_id', function(req, res){
var id = req.params._id;
var book = req.body;
Book.updateBook(id, book, {}, function(err, book){
  if(err){
    throw err;
  }
  res.json(book);
});
});

//To delete a book using its id
app.delete('/api/book/:_id', function(req, res){
var id = req.params._id;
Book.deleteBook(id, function(err, book){
  if(err){
    throw err;
  }
  res.json(book);
});
});

app.listen(3000);
console.log('Running on port 3000..');
