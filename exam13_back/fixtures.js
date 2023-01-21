const mongoose = require("mongoose");
const {nanoid} = require("nanoid");
const {db} = require("./config");

const Review = require("./models/Review");
const Place = require("./models/Place");
const Picture = require("./models/Picture")
const User = require("./models/User");

mongoose.connect(db.url + db.name);

const connection = mongoose.connection;

connection.once('open', async () => {
  try {
    await connection.dropCollection("users")
    await connection.dropCollection("places");
    await connection.dropCollection("reviews");
    await connection.dropCollection("pictures");
  } catch(e) {
    console.log("Skipping drop");
  }

  const [userUser, adminUser, timurUser] = await User.create({
    username: "user",
    password: "123",
    token: nanoid(),
    role: 'user'
  }, {
    username: "admin",
    password: "123",
    token: nanoid(),
    role: 'admin'
  }, {
    username: "timur",
    password: "123",
    token: nanoid(),
    role: 'user'
  })


  const [FirstPlace, SecondPlace, ThirdPlace] = await Place.create({
    title: 'Тат Мак',
    image: "Photo1.jpg",
    user: adminUser._id,
    ratingQuality: 11,
    ratingService: 9,
    ratingInterior: 8,
    description: 'Популярная тема в Казани, но раньше было лучше',
  }, {
    title: 'Неизвестное кафе',
    image: "Photo2.jpg",
    ratingQuality: 0,
    ratingService: 0,
    ratingInterior: 0,
    user: adminUser._id,
    description: 'Никто ничего об этом кафе не знает',
  }, {
    title: 'Шаурма',
    image: "Photo2.jpg",
    user: userUser._id,
    ratingQuality: 8,
    ratingService: 9,
    ratingInterior: 6,
    description: 'Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму, Тут делают шаурму',
  });
 
  const [FirstReview, SecondReview, ThirdReview, FourthReview, FifthReview] = await Review.create({
    text: 'Хорошее место',
    ratingQuality: 5,
    ratingService: 4,
    ratingInterior: 4,
    user: adminUser._id,
    place: FirstPlace._id
  },{
    text: 'Сойдет',
    ratingQuality: 4,
    ratingService: 4,
    ratingInterior: 3,
    user: userUser._id,
    place: FirstPlace._id
  },
  {
    text: 'Плохое место, отзывы куплены',
    ratingQuality: 2,
    ratingService: 1,
    ratingInterior: 1,
    user: timurUser._id,
    place: FirstPlace._id
  },
  {
    text: 'Вставьте сюда текст',
    ratingQuality: 5,
    ratingService: 4,
    ratingInterior: 4,
    user: adminUser._id,
    place: ThirdPlace._id
  },
  {
    text: 'bottom text',
    ratingQuality: 3,
    ratingService: 5,
    ratingInterior: 2,
    user: userUser._id,
    place: ThirdPlace._id
  },);

  const [FirstRicture, SecondRicture, ThirdRicture, FourthRicture, FifthRicture] = await Picture.create({
    image: 'Photo1.jpg',
    user: adminUser._id,
    place: FirstPlace._id
  },{
    image: 'Photo2.jpg',
    user: userUser._id,
    place: FirstPlace._id
  },
  {
    image: 'Photo3.jpg',
    user: userUser._id,
    place: FirstPlace._id
  },
  {
    image: 'Photo4.jpg',
    user: timurUser._id,
    place: ThirdPlace._id
  });


  
  connection.close();
});
console.log('Работа фикстуры закончена')
