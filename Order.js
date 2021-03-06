var DBurl = "mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority";
const DbName = "CustomSystem";
var MongoClient = require('mongodb').MongoClient;

class Order{
    static InsertOrder(OrderBoss,OrdeMain,OrderDetail)  //ok
    {
        OrdeMain.details=OrderDetail;
        OrderBoss.orders=OrdeMain;
    
        MongoClient.connect(DBurl, function (err, db) {
            if (err) return false
            
            var dbo = db.db(DbName);
            dbo.collection("Orders").insertOne(OrderBoss, function (err, res) {
                if (err) return false
                console.log("1 document inserted");
                db.close();
            });
        });
    return true
    };

    static SelectOrderDetail(OrderBossId,OrdeMainId) //?
    {
    
        MongoClient.connect(DBurl, function (err, db) {
            if (err) return false
            
            var dbo = db.db(DbName);
            dbo.collection("Orders").find({user_id:OrdeMainId,_id:ObjectId(OrdeMainId)}, function (err, res) {
                if (err) return false
                console.log(res);
                db.close();
            });
        });
    return true

    };

    // static DeleteOrder(OrderBossId,OrdeMainId)
    // {
    //     OrdeMain.OrdeMainId=OrdeMainId;
    //     OrderBoss.OrderBossId=OrderBossId;
    
    //     MongoClient.connect(DBurl, function (err, db) {
    //         if (err) return false
            
    //         var dbo = db.db(DbName);
    //         dbo.collection("Orders").remove({user_id:OrdeMainId,_id:ObjectId(OrdeMainId),}, function (err, res) {
    //             if (err) return false
    //             console.log('Document Removed Successfully!');
    //             db.close();
    //         });
    //     });
    // return true
    // };

    static UpdateOrder(OrderBoss,OrdeMain,ReNewData)
    {
        var BeforeOrder=SelectOrderDetail(OrderBoss,OrdeMain)
    
        OrdeMain.details=OrderDetail;
        OrderBoss.orders=OrdeMain;

        MongoClient.connect(DBurl, function (err, db) {
            if (err) return false
            var dbo = db.db(DbName);
            dbo.collection("Orders").update(BeforeOrder,{$set:{ReNewData}}, {w:1}, function (err, res) {
                if (err) return false
                console.log(res);
                db.close();
            });
        });
    return true
    };

}

class OrderBoss
{
    constructor()
    {
      this.user_id="";//??????ID
      this.customer_id="";//????????????
      this.customer_name="";//????????????
      this.customer_phone=""; // ????????????
      this.customer_address=""; //????????????
      this.orders=new OrdeMain()
    }



}

class OrdeMain{
    constructor()
    {
      this.orders_status="";//????????????
      this.total="";//??????
      this.inform_date="";//?????????
      this.wash_date="";//????????????
      this.get_date="" //????????????
      this.comment="";//??????
      this.abandon=false;// ??????
      this.details=Array();//????????????
      
    }
}


class OrderDetail{
    constructor()
    {
      this.product_id="";//??????ID
      this.product_name="";//????????????
      this.payment="";//??????
      this.status="" //??????
    }


}


// module.exports={
//     Order:Order,
//     OrderBoss:OrderBoss,
//     OrdeMain:OrdeMain,
//     OrderDetail:OrderDetail
// }

