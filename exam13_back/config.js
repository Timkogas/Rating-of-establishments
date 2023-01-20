const path = require("path");

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPathPosts: path.join(rootPath, "public", "uploads", "posts"),
  db: {
    url: "mongodb://localhost/",
    name: "exam13_ermolaev_timur"
  }

};
