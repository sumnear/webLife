let arr=[12,5,88,37,21,91,17,24];

let sum=arr.reduce((tmp,item,index)=>{
    console.log(tmp, item, index);

    return tmp+item;
});

console.log(sum);