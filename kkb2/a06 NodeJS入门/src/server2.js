const http=require('http');
const fs=require('fs');
const path=require('path');
let server=http.createServer((req, res)=>{
  fs.readFile(__dirname+`/www${req.url}`, (err, data)=>{
    if(err){
      res.write('404');     //?
    }else{
      res.write(data);
    }
    res.end();
  });
});
server.listen(8080);
