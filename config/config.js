require('dotenv').config();
//TODO  dotenv 環境變數 .env檔案 尚未建置 
module.exports = {
    NODE_ENV:"production",
    PORT: process.env.PORT,
    mongo: {
      MONGO_USER: "sa",
      MONGO_PW: "sa"
    }
  }