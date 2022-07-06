
let OrderUsecase = require('../usecase/order_usecase')
let response =require('../response/response')
let Order = module.exports = {}
Order.GetOrderByDay = (req, res, next) => {
  OrderUsecase.GetOrderByDay(req.query)
      .then(data => {
        res.send(new response(true,data))
      })
  }


  Order.InsertOrder= (req, res, next) =>{
    var result=OrderUsecase.InsertOrder(req.body);
    res.send(new response(true,result))

  }


  Order.DeleteOrderbyID=(req, res, next)=>{
    var result=OrderUsecase.DeleteOrderbyID(req.body);
    res.send(new response(true,result))


  }