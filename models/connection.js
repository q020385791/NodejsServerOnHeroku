let config = require('../config/config')
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);

let env = config.NODE_ENV
config.mongo.MONGO_USER;

if (env === 'production') {
    // Using mongoose to connect to MLAB database (Create new database single node free and create new user and set name and password)
    const username = config.mongo.MONGO_USER
    const password = config.mongo.MONGO_PW
    
 
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority`)
  } else {
    // mongoose.connect('mongodb://localhost:27017/clean_node'), {
    //   useMongoClient: true,
    // };
  }
  mongoose.connection.once('open', function () {
    console.log('Connection has been made');
  }).on('error', function (error) {
    console.log('Connect error', error);
  }).on('disconnected', function () {
    console.log('Connection disconnected');
  })

  module.exports = mongoose