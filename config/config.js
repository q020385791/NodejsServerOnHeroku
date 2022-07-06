require('dotenv').config();

module.exports = {
    NODE_ENV:"production",
    PORT: process.env.PORT,
    mongo: {
      MONGO_USER: "sa",
      MONGO_PW: "sa"
    }
  }