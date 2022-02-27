const http=require("http");

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
    



const port=3000;
const IP = "127.0.0.1";
server.listen(port,IP,()=>
{
    console.log(`Server is running at http:// ${IP}:${port}`);
}); 

