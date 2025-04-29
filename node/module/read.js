const fs = require('fs');
fs.readFile('C:\\Temp\\data.txt', (err, data) => {
  if (err) {
    console.err(err);
  }
  else {
    console.log(data.toString());
  }
});