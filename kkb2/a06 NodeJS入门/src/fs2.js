const fs=require('fs');

fs.readFile(__dirname +'/ofo.png', (err, data)=>{
  fs.writeFile('ofo2.png', data, ()=>{});
});
