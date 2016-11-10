var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

Post = require('./models/post');

// Connect to mongoose
// This is for local -
mongoose.connect('mongodb://localhost/blogpost');

var mongodbUri = 'mongodb://heroku_z75f6zgj:hhl655vnac7csv10c0es6co8dl@ds145997.mlab.com:45997/heroku_z75f6zgj';

//var mongodbUri = 'mongodb://heroku_z75f6zgj:hhl655vnac7csv10c0es6co8dl@ds145997.mlab.com:45997/heroku_z75f6zgj';

//mongoose.connect(mongodbUri);

//var db = mongoose.connection;

// Get root
app.get('/', function(req, res){
  res.send('Hello World!');
});

// Get All Posts
app.get('/api/posts', function(req, res){
  //res.send('posts info here');
  Post.getPosts(function(err, posts){
    if(err){
      throw err;
    }
    res.json(posts);
  });
});

// Get Posts By Id
app.get('/api/posts/:_id', function(req, res){
  //res.send('posts info here');
  Post.getPostsById(req.params._id, function(err, post){
    if(err){
      throw err;
    }
    res.json(post);
  });
});

// Adds New Post
app.post('/api/posts', function(req, res){
  var post = req.body;
  //res.send('posts info here');
  Post.addPost(post, function(err, post){
    if(err){
      throw err;
    }
    res.json(post);
  });
});

// Update Post
app.put('/api/posts/:_id', function(req, res){
  var id = req.params._id;
  var post = req.body;
  //res.send('posts info here');
  Post.updatePost(id, post, {}, function(err, post){
    if(err){
      throw err;
    }
    res.json(post);
  });
});

// Delete Post
app.delete('/api/posts/:_id', function(req, res){
  var id = req.params._id;
  Post.deletePost(id, function(err, post){
    if(err){
      throw err;
    }
    res.json(post);
  });
});


app.listen(process.env.PORT || 3000, '0.0.0.0');
console.log('server is running on port 3000');
