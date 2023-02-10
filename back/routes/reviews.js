const express = require("express");
const { nanoid } = require("nanoid");
const Place = require("../models/Place");
const auth = require("../middleware/auth");
const User = require("../models/User");
const permit = require("../middleware/permit");
const Review = require("../models/Review");
const router = express.Router();


router.post("/", auth, async (req, res) => {
  const review = new Review(req.body);
  const place = await Place.findById(req.body.place);
  place.ratingQuality += review.ratingQuality
  place.ratingService += review.ratingService
  place.ratingInterior += review.ratingInterior
  try {
    await review.save();
    await place.save()
    res.status(201).send(review);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  let query;
  if (req.query.post) {
    query = { place: req.query.post };
  }
  try {
    const reviews = await Review.find(query)
      .sort({ datetime: -1 })
      .populate('user', 'username')
    res.send(reviews);
  } catch (e) {
    res.sendStatus(502);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.sendStatus(404);
    const place = await Place.findById(review.place);
    place.ratingQuality -= review.ratingQuality
    place.ratingService -= review.ratingService
    place.ratingInterior -= review.ratingInterior
    await place.save()
    await Review.deleteOne({ _id: review._id });
    res.sendStatus(204);
  } catch (e) {
    return res.status(502).send(e);
  }
});

module.exports = router;