const cluster = require('cluster');
const os = require('os');


if(cluster.isMaster){
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    console.info("主进程");
}else{
    console.info("子进程");
}
