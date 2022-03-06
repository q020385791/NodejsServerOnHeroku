const http=require("http");
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
//雲端 Atlas
var DBurl = "mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority";
const DbName = "CustomSystem";
const CollectionName = "User";

//---testuserclass 測試物件傳值
// const User = require("./Boss");
// const Bossinfo = require("./Bossinfo.js");
// //測試方法
// var test = new User();
// var rr = test._bossinfo.Getname();
// //  console.log(rr);
// //測試傳值
// test._bossinfo.Setname("changeed");
// rr = test._bossinfo.Getname();
// //  console.log(rr);
// //測試更換子Model
// var tBossinfo = new Bossinfo();
// tBossinfo.Setname("tinfoname");
// test.SetUserinfo(tBossinfo);
// console.log(test._bossinfo.Getname());
//---testclass
const server=http.createServer((request,response)=>{
// response.end("hello nodejs server");


    if (request.method == "POST") {
        if (request.url=="/AddUser")
        {
            const chunks = [];
            var _Login=new Login();
            request.on('data', chunk => {
            console.log('A chunk of data has arrived: ', chunk.toString());
            var data = JSON.parse(chunk.toString());
            console.log(data.firstName);
            InsertUser(data.firstName)
            response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials": "true", 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS' });
            response.end(JSON.stringify({ message: 'Hello World POST' + data.firstName }));
          
            });
            // response.end();
        }
        var IFPass = false;
        if (request.url =="/LoginVerify") {
            const chunks = [];
            // var _Login = new Login();
            request.on('data', chunk => {
                console.log('A chunk of data has arrived: ', chunk.toString());
                var data = JSON.parse(chunk.toString());
                LoginVerify(data.id, data.pw, function (pass)
                {
                    IFPass = pass;
                    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials": "true", 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS' });
                    response.end(JSON.stringify({ message: IFPass }));

                });
                

            });
            // response.end();
        }
        
    }

    if (request.method == "GET") 
    {
        response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials": "true", 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'});
        response.end(JSON.stringify({ message: "Hello World" }));
        //response.end('Get received');
    }
}); 
    



const PORT = process.env.PORT || 5000;
//  const server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(PORT,()=>
{
    console.log(`Server is running at port:'${PORT}`); 
}); 

//輸入一筆資料
function InsertUser(name) {
    MongoClient.connect(DBurl, function (err, db) {
        if (err) throw err;
        var newobj = { name: name, password: "123", Tel: "912345678" };
        var dbo = db.db(DbName);
        dbo.collection(CollectionName).insertOne(newobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

function LoginVerify(Boss_id, Boss_password,callBack)
{
    var pass = false;
    MongoClient.connect(DBurl, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DbName);
        dbo.collection("Boss").find({ boss_id: Boss_id, boss_password: Boss_password }).toArray(function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
            var Count = result.length;
            if (Count != 1) {
                pass = false;
            } else {
                pass = true;
            }
            db.close();
            return callBack(pass);
        });
       
    });

}
