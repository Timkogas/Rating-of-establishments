const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const idValidator = require("mongoose-id-validator");

const PictureSchema = new Schema({
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
});

PictureSchema.plugin(idValidator, {
  message: "Заведения с указанным ID не существует"
});

const Picture = mongoose.model("Picture", PictureSchema);

module.exports = Picture;