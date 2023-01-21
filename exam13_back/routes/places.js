const multer = require("multer");
const express = require("express");
const path = require("path");
const { nanoid } = require("nanoid");
const config = require("../config");
const Place = require("../models/Place");
const auth = require("../middleware/auth");
const User = require("../models/User");
const permit = require("../middleware/permit");
const Review = require("../models/Review");
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
    const places = await Place.find()
      .sort({ title: -1 })
      .populate('user', 'username')
    res.send(places);
  } catch (e) {
    res.sendStatus(502);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id)
      .populate('user', 'username')
    if (!place) return res.sendStatus(404)
    res.send(place);
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/", auth, upload.single("image"), async (req, res) => {
  const placeData = req.body
  if (placeData.approval === 'false') {
    return res.status(400)
  }
  try {
    const token = req.get('Authenticate')
    const user = await User.findOne({ token: token })
    const place = new Place({
      user: user,
      title: placeData.title,
      description: placeData.description,
    });
    if (req.file) {
      place.image = req.file.filename;
    }
    await place.save();
    res.status(200).send(place);
  } catch (e) {
    res.status(400).send({ e });
  }
});

router.delete("/:id", auth, permit('admin'), async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.sendStatus(404);
  try {
    await Review.deleteMany({post: post._id});
    await Place.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (e) {
    return res.status(502).send(e);
  }
});

module.exports = router;