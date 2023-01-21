const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { db } = require("./config");
const users = require("./routes/users");
const places = require("./routes/places");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/users", users);
app.use("/places", places);


const run = async () => {
  await mongoose.connect(db.url + db.name, { useNewUrlParser: true });
  console.log("Connected to mongo DB");
  app.listen(port, () => {
    console.log(
      `Server started at http://localhost:${port}`
    );
  });
  process.on("exit", () => {
    mongoose.disconnect();
  });
};

run().catch(console.log);




