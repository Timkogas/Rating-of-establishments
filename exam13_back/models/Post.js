const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const idValidator = require("mongoose-id-validator");

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, 'Пользователь обязателен']
  },
  title: {
    type: String,
    required: [true, 'Заголовок поста обязателен']
  },
  datetime: {
    type: Date,
  }, 
  description: {
    type: String,
    required: [true, 'Описание поста обязательно']
  },
  image: {
    type: String,
    required: [true, 'Изоображение поста обязательно']
  },
});
PostSchema.pre("save", async function (next) {
  this.datetime = new Date()
  next()
});

PostSchema.plugin(idValidator, {
  message: "Пользователя с указанным ID не существует"
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;