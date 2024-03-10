//child process is a node module used to create sub processes within a script
// you can perform different task with your script just by using some methods

const cp = require('child_process');

// cp.execSync('calc')
// cp.execSync('start chrome')
console.log('output '+ cp.execSync('node demo.js'))
