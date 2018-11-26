const fs = require('fs');

const appendString = (str, value, position,) => (
  [str.slice(0, position), value, str.slice(position)].join('')
);

const appendAfterMatch = (regex, str, newText ) => {
  const target = regex.exec(str);
  const insertPosition = target.index + target[0].length;
  const newString = appendString(str, newText, insertPosition);

  return newString;
};

const mergeAppndedActions = (blockArr, appendedArr) => {
  const firstLine = blockArr[0];
  const lastLine = blockArr[blockArr.length - 1];

  return [
    firstLine,
    ...appendedArr,
    lastLine,
  ];
}

const appendArrAlphabetically = (arr, index, newVal) => {
  const clone = [...arr];
  clone.splice(index, 0, newVal);
  const sortedClone = clone.sort();

  return sortedClone;
};

const containsWord = word => string => (
  new RegExp(word).test(string)
);

const containsImport = containsWord('import');
const containsFrom = containsWord('from');

const extractActions = importBlockArr => (
  importBlockArr.filter((line) => (
    !containsImport(line) && !containsFrom(line)
  ))
);

const getImportBlockRegex = fileName => () => (
  new RegExp(
    'import {\\n(  \\w+,\\n)*} from.*' + fileName,
  )
);

const getActionBlockRegex = getImportBlockRegex('actions');

const filterTargetBlock = (importBlocks, fileName) => {
  const containsFileName = containsWord(fileName);
  return importBlocks .split('\n\n')
    .filter(containsFileName)[0]
}

const getRegexMatch = (regex) => (string) => (
  regex.exec(string)[0]
);

const getActionBlock = getRegexMatch(getActionBlockRegex());

const getNewImportBlock = (fileString, fileName, newActionName) => {
  const targetBlockArr = (
    getActionBlock(fileString).split('\n')
  );
  const actions = extractActions(targetBlockArr);
  const appendedActions = appendArrAlphabetically(actions, 1, newActionName);
  const newImportBlock = (
    mergeAppndedActions(targetBlockArr, appendedActions).join('\n')
  );

  return newImportBlock;
};


const appendActionBlock = (actionName) => (fileText) => {
  const actionBlock = getActionBlock(fileText);
  const appendedActionBlock = (
     getNewImportBlock(fileText, 'actions', actionName)
  );

  const newText = fileText.replace(actionBlock, appendedActionBlock);

  return newText;
}

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
