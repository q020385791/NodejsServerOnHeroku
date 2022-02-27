const http=require("http");
// const { request } = require("https");

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
// const server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(PORT,()=>
{
    console.log(`Server is running at port:'${PORT}`); 
}); 

