const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<h1>hello World</h1>");
    res.write("<p>This is Swetha</p>");
    res.end();
});
server.listen(5000,()=>console.log("server is running"));