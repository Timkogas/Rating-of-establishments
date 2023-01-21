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
const Picture = require("../models/Picture");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPathPictures);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  let query;
  if (req.query.post) {
    query = { place: req.query.post };
  }
  try {
    const pictures = await Picture.find(query)
      .sort({ datetime: -1 })
      .populate('user', 'username')
    res.send(pictures);
  } catch (e) {
    res.sendStatus(502);
  }
});

router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const token = req.get('Authenticate')
    const user = await User.findOne({ token: token })
    const picture = new Picture({
      user: user,
    });
    if (req.file) {
      picture.image = req.file.filename;
    }
    await picture.save();
    res.status(200).send(picture);
  } catch (e) {
    res.status(400).send({ e });
  }
});

router.delete("/:id", auth, permit('admin'), async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!comment) return res.sendStatus(404);
    await Picture.deleteOne({ _id: picture._id });
    res.sendStatus(204);
  } catch (e) {
    return res.status(502).send(e);
  }
});

module.exports = router;