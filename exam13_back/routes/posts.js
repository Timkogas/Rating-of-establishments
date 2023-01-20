const multer = require("multer");
const express = require("express");
const path = require("path");
const { nanoid } = require("nanoid");
const config = require("../config");
const Post = require("../models/Post");
const auth = require("../middleware/auth");
const User = require("../models/User");
const authorPost = require("../middleware/authorPost");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPathPosts);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ datetime: -1 })
      .populate('user', 'username')
    res.send(posts);
  } catch (e) {
    res.sendStatus(502);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('user', 'username')
    if (!post) return res.sendStatus(404)
    res.send(post);
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/", auth, upload.single("image"), async (req, res) => {
  const postData = req.body
  try {
    const token = req.get('Authenticate')
    const user = await User.findOne({ token: token })
    const post = new Post({
      user: user,
      title: postData.title,
      description: postData.description,
    });
    if (req.file) {
      post.image = req.file.filename;
    }
    await post.save();
    res.status(200).send(post);
  } catch (e) {
    res.status(400).send({ e });
  }
});

router.delete("/:id", auth, authorPost, async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.body.post._id });
    res.sendStatus(204);
  } catch (e) {
    return res.status(502).send(e);
  }
});

module.exports = router;