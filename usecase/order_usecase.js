let {
    InsertOrder,
    GetOrderByDay,
    DeleteOrderbyID,
    
    } = require('../db/order_db')
  
let OrderDb = {
    InsertOrder,
    GetOrderByDay,
    DeleteOrderbyID,
    }
//邏輯層
let OrderUsecase = module.exports = {}
    OrderUsecase.GetOrderByDay=(info)=>{
        var StartDate=info.StartDate;
        var EndDate=info.EndDate;

        return  OrderDb.GetOrderByDay(StartDate,EndDate)
    }
    
    OrderUsecase.InsertOrder=(info)=>{

        //ok
        // var test=info.user_id; 
        return  OrderDb.InsertOrder(info)
    }

    OrderUsecase.DeleteOrderbyID=(info)=>{
        return  OrderDb.DeleteOrderbyID(info.OrderID,info.DetailID)
    }


    module.exports = OrderUsecase