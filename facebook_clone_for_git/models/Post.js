const mongoose = require('mongoose');

let PostSchema = new mongoose.Scheama({
  content: String,
  time: Date,
  image: String,
  creater: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: String,
    lastName: String,
    profile: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }
  ]
});

let Post = mongoose.model("Post", PostSchema);
module.exports = Post;