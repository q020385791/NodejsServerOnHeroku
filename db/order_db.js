let Order = require('../models/order')
const mongoose = require('mongoose');
let InsertOrder=(info)=>{
var NewOrder=new Order(info);

console.log(JSON.stringify(NewOrder));
NewOrder.save(function(err){
  if(err){
console.log(err);
return false
  }
})
return true
}

let GetOrderByDay = (StartDate,EndDate) => {
    StartDate=new Date(StartDate)
    EndDate=new Date(EndDate)
    return Order.find({'orders.wash_date':{  
        $gte: new Date(StartDate.toISOString()), 
        $lte: new Date(EndDate.toISOString())            
}
})
}

//TODO 刪除功能尚未完成
var ObjectId = require('mongoose').Types.ObjectId;
let DeleteOrderbyID=(OrderID,DetailID)=>{
  try{

    Order.deleteOne({"_id":{"$oid" : DetailID }});

    // var thisorder=Order.orders.id(OrderID)

    // Order.orders.details.id(DetailID).remove();

    // var test=Order.findByIdAndDelete(OrderID,{
    //   $pullAll:{
    //     orders:{
    //       details:[{_id:new ObjectId(DetailID)}],
    //     }}
    // })
    
    return true ;
  } catch(ex) {
    console.log(ex);
    return false ;
  } finally{
    return true ;

  }
  
}



module.exports = {
    GetOrderByDay:GetOrderByDay,
    InsertOrder:InsertOrder,
    DeleteOrderbyID:DeleteOrderbyID,
  }
