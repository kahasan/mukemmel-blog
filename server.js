const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
  date: String,
  title: String,
  details: String,
  photoid: Number
});

var Blog;

if (mongoose.models.Blog) {
  Blog = mongoose.model('Blog');
} else {
  Blog = mongoose.model('Blog', blogSchema);
}

mongoose.connect('mongodb://localhost:27017/mukemmelblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: false }));

  server.use(bodyParser.json());

  server.get('/api/blogs', (req, res) => {
    Blog.find(function(err, blogs) {
      if (err) {
        console.log(err);
      } else {
        return res.json(blogs);
      }
    });
  });

  server.post('/post', (req, res) => {
    const newOne = new Blog({
      date: req.body.date,
      title: req.body.newPost,
      details: req.body.newPostContent,
      photoid: req.body.photoid
    });

    newOne.save(function(err) {
      if (err) {
        console.log(err);
      }
      return res.redirect('blogs');
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
