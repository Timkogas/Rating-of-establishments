const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const idValidator = require("mongoose-id-validator");

const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, 'Пользователь обязателен']
  },
  place: {
    type: Schema.Types.ObjectId,
    ref: "Place",
    required: [true, 'Айди заведения обязателено']
  },
  text: {
    type: String,
    required: [true, 'Описание заведения обязательно']
  },
  ratingQuality: {
    type: Number,
    required: [true, 'Рейтинг заведения обязателен']
  },
  ratingService: {
    type: Number,
    required: [true, 'Рейтинг заведения обязателен']
  },
  ratingInterior: {
    type: Number,
    required: [true, 'Рейтинг заведения обязателен']
  },
  datetime: {
    type: Date,
  }, 
});

ReviewSchema.plugin(idValidator, {
  message: "Заведения с указанным ID не существует"
});

ReviewSchema.pre("save", async function (next) {
  this.datetime = new Date()
});


const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;