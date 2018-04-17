const fs = require('fs');
const dir = './';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});
