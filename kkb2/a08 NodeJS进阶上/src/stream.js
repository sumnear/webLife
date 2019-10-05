const fs=require('fs');
const path = require('path');

let rs=fs.createReadStream(__dirname+ '/1.png');
let ws=fs.createWriteStream(__dirname+ '/2.png');

rs.pipe(ws);

rs.on('error', err=>{
  console.log('读取失败');
});

ws.on('finish', ()=>{
  console.log('写入完成');
});
