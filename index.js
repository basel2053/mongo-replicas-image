const mongoose = require('mongoose');
const server = require('http').createServer();

mongoose
  .connect('mongodb://mongodb:27017/api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const postSchema = new Schema({
      author: ObjectId,
      title: String,
      body: String,
      date: Date,
    });
    const Post = mongoose.model('Post', postSchema);
    console.log('Connected to MongoDB');
  })
  .catch(() => {
    console.log('Error connecting to MongoDB');
  });

server.on('request', (req, res) => {
  res.end('<h1>Hello World</h1>');
});

server.on('listening', () => {
  console.log('Listening on http://localhost:3000/');
});

server.listen(3000);
