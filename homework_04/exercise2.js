const http = require("http");
const {fork} = require("child_process");
const server = http.createServer();


server.on("request",(req, res)=>{
if(req.url === "/"){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Home Page</h1><br /><br /><a href="/?url=path/to/my/file.txt">Click ob the link HERE to view data in file.txt</a>');
    res.end();

}else if(req.url === "/?url=path/to/my/file.txt"){
  
    const childProcess = fork("exercise2_heavyOperation.js");
    childProcess.send("msg");
    childProcess.on("message", data =>{
        res.end(data);
    })
}else{
    res.writeHead(404);
    res.end("Page Not Found");
}

   
}).listen(3000, ()=> console.log("Listening on Port 3000"));