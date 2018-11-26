const fs = require('fs');

const editFile = (callback) => {
  let fileString = "";
  fs.readFile('App.js', 'utf8', (err, data) => {
    if (err) throw err;
    fileString += data;

    const res = callback(fileString);
    console.log(res);
  });
}

module.exports = editFile;
