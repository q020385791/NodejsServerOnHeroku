let mongoose = require('./connection')
let Schema = mongoose.Schema

let BossSchema = new Schema({
    boss_id: String,
    boss_name: String,
    boss_password: String,
  },{ collection : 'Boss' }) 
  delete mongoose.connection.models['Boss'];
  let Boss = mongoose.model('Boss', BossSchema)
  module.exports = Boss