const fs=require('fs');
const path = require("path");
// console.log(__dirname);
// console.log(path.dirname(__dirname));
var currentPath = path.dirname(__dirname)
fs.readFile(__dirname +'/1.txt', (err, data)=>{
  if(err){
    console.log(err);
    console.log('有错');
  }else{
    console.log(data.toString());
  }
});

/*fs.writeFile('3.txt', 'erqwreqwere', err=>{
  if(err){
    console.log(err);
  }else{
    console.log('成功');
  }
});*/

