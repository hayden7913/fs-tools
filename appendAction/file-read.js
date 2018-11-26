const fs = require('fs');

const appendActionBlock = require('./appendActionBlock');

const editFile = (callback) => {
  let fileString = "";
  fs.readFile('App.js', 'utf8', (err, data) => {
    if (err) throw err;
    fileString += data;

    const res = callback(fileString);
    console.log(res);
  });
}

editFile(appendActionBlock('  newAction'));
