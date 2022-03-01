const http=require("http");
// const { request } = require("https");

//---testuserclass 測試物件傳值
// const User=require("./Users");
// const Userinfo=require("./Userinfo.js");
// //測試方法
// var test=new User(); 
//  var rr=test._userinfo.Getname();
// //  console.log(rr);
// //測試傳值
//  test._userinfo.Setname("changeed");
//  rr=test._userinfo.Getname();
// //  console.log(rr);
// //測試更換子Model
// var tUserinfo=new  Userinfo();
// tUserinfo.Setname("tinfoname");
//  test.SetUserinfo(tUserinfo);
//  console.log(test._userinfo.Getname());
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

