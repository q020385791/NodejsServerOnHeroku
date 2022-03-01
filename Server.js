const http=require("http");
// const { request } = require("https");

//---testuserclass 測試物件傳值
const User=require("./Users");
const Bossinfo=require("./Bossinfo.js");
//測試方法
var test=new User(); 
 var rr=test._bossinfo.Getname();
//  console.log(rr);
//測試傳值
 test._bossinfo.Setname("changeed");
 rr=test._bossinfo.Getname();
//  console.log(rr);
//測試更換子Model
var tBossinfo=new  Bossinfo();
tBossinfo.Setname("tinfoname");
 test.SetUserinfo(tBossinfo);
 console.log(test._bossinfo.Getname());
//---testclass
const server=http.createServer((request,response)=>{
// response.end("hello nodejs server");
    if (request.method == "POST") {
        if (request.url=="/AddUser")
        {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Hello World POST" }));
            // response.end();
        }
    }

    if (request.method == "GET") 
    {
        response.writeHead(200, { 'Content-Type': 'application/json' });
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

