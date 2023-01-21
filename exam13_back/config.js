const path = require("path");

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPathPosts: path.join(rootPath, "public", "uploads", "places"),
  uploadPathPictures: path.join(rootPath, "public", "uploads", 'pictures'),
  db: {
    url: "mongodb://localhost/",
    name: "exam13_ermolaev_timur"
  }

};
