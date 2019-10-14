const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork(); //会导致执行两次，但是子进程无法 fork
}

console.info("abc");

