const fs = require('fs');

const editFile = (fileName, callback) => {
  let fileString = "";
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    fileString += data;

    const res = callback(fileString);
    console.log(res);
  });
}

module.exports = editFile;
