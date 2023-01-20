const Post = require("../models/Post");
const User = require("../models/User");

const authorPost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  const token = req.get('Authenticate')
  const user = await User.findOne({ token: token })
  if (String(post.user._id) !== String(user._id)) {
    return res.sendStatus(401)
  }
  if (!post) return res.sendStatus(404);
  req.body = {...req.body, post: post};
  next();
};

module.exports = authorPost;