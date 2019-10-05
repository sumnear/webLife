function show(a, b, c){
    b=b||5;
    c=c||12;

    console.log(a,b,c);
}
console.info(show(1))



function show1(a=1, b=2, c=3){

    console.info(a,b,c);
}
console.info(show1(1))


let arr=[12,5,8,99];
let arr2=[...arr, ...arr];

console.info(arr2);