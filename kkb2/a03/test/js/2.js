function sleep(sec){
    return new Promise((resolve, reject)=>{
        setTimeout(function (){
            resolve();
        }, sec*1000);
    })
}

async function show(){
    alert('a');

    await sleep(1);

    alert('b');

    await sleep(2);

    alert('c');
}

show();