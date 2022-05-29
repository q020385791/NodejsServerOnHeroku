var DBurl = "mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority";
const DbName = "CustomSystem";
var MongoClient = require('mongodb').MongoClient;

class Order{
    static InsertOrder(OrderBoss,OrdeMain,OrderDetail)
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

    static SelectOrderDetail(OrderBossId,OrdeMainId)
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
    

    static GetOrderByday(StartDate,EdnDate,callback){
        MongoClient.connect(DBurl, function (err, db) {
            if (err) throw err;
            var dbo = db.db(DbName);

            var _StartDate=new Date(StartDate)
            var _EdnDate=new Date(EdnDate)
            dbo.collection("Orders").find({'orders.wash_date':{  
                    $gte: new Date(_StartDate.toISOString()), 
                    $lte: new Date(_EdnDate.toISOString())            
            }
        }

            ).toArray(function (err, result) {
                if (err) throw err;
                console.log(JSON.stringify(result));
                db.close();
               return callback(result);
            });
    
        });

    }
}

class OrderBoss
{
    constructor()
    {
      this.user_id="";//店家ID
      this.customer_id="";//店家名稱
      this.customer_name="";//店家密碼
      this.orders=new OrdeMain()
    }



}

class OrdeMain{
    constructor()
    {
      this.total="";//總價
      this.altert_date="";//通知日
      this.wash_date="";//洗滌時間
      this.get_date="" //取得時間
      this.comment="";//備註
      this.details=Array();//詳細資訊
      
    }
}


class OrderDetail{
    constructor()
    {
      this.product_id="";//商品ID
      this.product_name="";//商品名稱
      this.payment="";//價格
      this.status="" //狀態
    }


}


module.exports={
    Order:Order,
    OrderBoss:OrderBoss,
    OrdeMain:OrdeMain,
    OrderDetail:OrderDetail
}

