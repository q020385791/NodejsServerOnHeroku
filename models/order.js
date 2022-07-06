let mongoose = require('./connection')
let Schema = mongoose.Schema


let OrderDetailsSchema = new Schema([{
  product_id: String,
  product_name: String,
  payment: String,
  status:String
}]);

let OrdersSchema = new Schema({
  total: String,
  altert_date: Date,
  wash_date: Date,
  get_date: Date,
  comment: String,
  details:[{
    type:OrderDetailsSchema,
    default: []
  }],
});
let MainOrderSchema = new Schema({
    user_id: String,
    customer_id: String,
    customer_name: String,
    orders:new Schema({
      total: String,
      altert_date: Date,
      wash_date: Date,
      get_date: Date,
      comment: String,
      details:[new Schema({
        product_id: String,
        product_name: String,
        payment: String,
        status:String
      })],
    })
  },{ collection : 'Orders' }) ;

  delete mongoose.connection.models['Orders'];
  // delete mongoose.connection.models['orders'];
  // delete mongoose.connection.models['details'];
  let MainOrder = mongoose.model('Orders', MainOrderSchema)
  // let Orders = mongoose.model('orders', OrdersSchema)
  // let OrderDetail = mongoose.model('details', OrderDetailsSchema)
  module.exports = MainOrder