const http=require("http");
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
//雲端 Atlas
var DBurl = "mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority";
const DbName = "CustomSystem";
const CollectionName = "User";
const server=http.createServer((request,response)=>{


// response.end("hello nodejs server");
    if (request.method == "POST") {
        if (request.url=="/AddUser")
        {
            const chunks = [];
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
    }

    if (request.method == "GET") 
    {
        response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials": "true", 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'});
        response.end(JSON.stringify({ message: "Hello World" }));
        //response.end('Get received');
    }
}); 
    



const PORT = process.env.PORT || 5000;
// const server_host = process.env.YOUR_HOST || '0.0.0.0';
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