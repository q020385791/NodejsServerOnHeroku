const express = require('express')
const router = express.Router()
const Login = require('./login_route')
const Order = require('./order_route')
const Boss = require('./boss_route')


//Boss
router
  .get('/FindBossByID', Boss.FindBossByID)
  .get('/GetOrderByDay', Order.GetOrderByDay);
  
router
  .post('/LoginVerify', Login.LoginVerify)
  .post('/InsertBoss', Boss.InsertBoss)
  .post('/InsertOrder', Order.InsertOrder);


  router
  .delete('/DeleteOrder',Order.DeleteOrderbyID)
  module.exports = router