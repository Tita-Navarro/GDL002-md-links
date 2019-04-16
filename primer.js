let fs = require('fs');
let filePath= process.argv[2];

let buf= fs.readFileSync(filePath);

let str = buf.toString();
let arr = str.split('\n');
let l = arr.length - 1;

console.log(l);