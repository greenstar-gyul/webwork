const fs = require('fs');
let result = fs.readFileSync('C:\\Temp\\data.txt');
console.log(result.toString());