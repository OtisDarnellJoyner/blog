var mongoose = require('mongoose');

// Posts Schema
var postSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  postContent:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Post = module.exports = mongoose.model('Post', postSchema);

// Get posts
module.exports.getPosts = function(callback, limit){
  Post.find(callback).limit(limit);
}

module.exports.getPostsById = function(id, callback){
  Post.findById(id, callback);
}

// Add posts
module.exports.addPost = function(post, callback){
  Post.create(post, callback);
}
// Update Post
module.exports.updatePost = function(id, post, options, callback){
  var query = {_id: id};
  var update = {
    title: post.title,
    postContent: post.postContent
  }
  Post.findOneAndUpdate(query, update, options, callback);
}

// Delete Post
module.exports.deletePost = function(id, callback){
  var query = {_id:id};
  Post.remove(query, callback);
}
