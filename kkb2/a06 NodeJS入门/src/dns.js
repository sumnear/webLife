const dns=require('dns');

dns.resolve('sumnear.github.io', (err, res)=>{
  if(err){
    console.log('解析失败');
  }else{
    console.log(res);
  }
});


