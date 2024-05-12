import http from "http";
const  server = http.createServer((req,res)=>{
        res.end("Mi primer sever")
})
server.listen(8080, ()=>  console.log ('sever escuchando en puerto 8080'))