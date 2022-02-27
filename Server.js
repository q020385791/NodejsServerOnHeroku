const http=require("http");
const { request } = require("https");

const server=http.createServer((request,response)=>{
// response.end("hello nodejs server");
    
    if (request.method == "POST") {
        if (request.url=="/AddUser")
        {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Hello World" }));
            response.end();

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
const server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(PORT, server_host,()=>
{
    
   
    console.log(`Server is running at http:// ${server_host}:${PORT}`); 
}); 

