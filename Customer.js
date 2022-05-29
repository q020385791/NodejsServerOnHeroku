
const Customerinfo=require("./Customerinfo.js");
var MongoClient = require('mongodb').MongoClient;
var DBurl = "mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority";
const DbName = "CustomSystem";
class Customer
{

      constructor()
      {
        this.customer_id="";//客人ID
        this.customer_name="";//客人名稱
        this._customerinfo=new Customerinfo;//詳細資訊
      }

        GetUserinfo()
        {   
        return this._customerinfo;
        };

        SetUserinfo(customerinfo)
        {
            this._customerinfo=customerinfo;

        };
        static Insert(_customer_id,_customer_name){
          MongoClient.connect(DBurl, function (err, db) {
            if (err) throw err;
            
            let ThisCustomer= new Customer()
            ThisCustomer.customer_id=customer_id;
            ThisCustomer.customer_name=customer_name;
            var dbo = db.db(DbName);
            dbo.collection("Customer").insertOne(ThisBoss, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
        return true
        }
        


}
module.exports=Customer;