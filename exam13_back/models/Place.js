const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const idValidator = require("mongoose-id-validator");

const PlaceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, 'Пользователь обязателен']
  },
  title: {
    type: String,
    required: [true, 'Название заведения обязателен']
  },
  description: {
    type: String,
    required: [true, 'Описание заведения обязательно']
  },
  image: {
    type: String,
    required: [true, 'Изоображение заведения обязательно']
  },
  ratingQuality: {
    type: Number
  },
  ratingService: {
    type: Number
  },
  ratingInterior: {
    type: Number
  },
});
PlaceSchema.pre("save", async function (next) {
  this.datetime = new Date()
  next()
});

PlaceSchema.plugin(idValidator, {
  message: "Пользователя с указанным ID не существует"
});


const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;