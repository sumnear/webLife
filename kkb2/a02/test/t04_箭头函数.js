let show = (a,b)=>{
    console.info("show func!!!"+(a+b));
}


show(5,10);



let show1 = function (a) {
    return a*3;
}

let show2 = (a) => {
    return a*3;
}

let show3 = a => a*3;

console.info(show1(5));
console.info(show1(15));
console.info(show1(25));
