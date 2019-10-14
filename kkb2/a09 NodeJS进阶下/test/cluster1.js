const cluster = require('cluster');

cluster.fork(); //会导致执行两次，但是子进程无法 fork

console.info("abc");

