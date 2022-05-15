
const Bossinfo=require("./Bossinfo.js");
var MongoClient = require('mongodb').MongoClient;
var DBurl = "mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority";
const DbName = "CustomSystem";
class Boss
{

      constructor()
      {
        this.boss_id="";//店家ID
        this.boss_name="";//店家名稱
        this.boss_password="";//店家密碼
        this._bossinfo=new Bossinfo;//詳細資訊
      }

        GetUserinfo()
        {   
        return this._bossinfo;
        };

        SetUserinfo(bossinfo)
        {
            this._bossinfo=bossinfo;

        };
        static Insert(_boss_id,_boss_name,_boss_password){
          MongoClient.connect(DBurl, function (err, db) {
            if (err) throw err;
            
            let ThisBoss= new Boss()
            ThisBoss.boss_id=_boss_id;
            ThisBoss.boss_name=_boss_name;
            ThisBoss.boss_password=_boss_password;
            var dbo = db.db(DbName);
            dbo.collection("Boss").insertOne(ThisBoss, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
        return true
        }
        


}
module.exports=Boss;