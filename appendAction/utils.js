const mergeAppendedImports = (blockArr, appendedArr) => {
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

const extractImports = importBlockArr => (
  importBlockArr.filter((line, index) => (
    (index !== 0) && (index !== importBlockArr.length -1)
  ))
);

const getImportBlockRegex = fileName => () => (
  new RegExp(
    'import {\\n(  \\w+,\\n)*} from.*' + fileName,
  )
);

const getRegexMatch = (regex) => (string) => (
  regex.exec(string)[0]
);

const getNewImportBlock = (targetBlock, fileName, newActionName) => {
  const targetBlockArr = (
    targetBlock.split('\n')
  );
  const imports = extractImports(targetBlockArr);
  const appendedImports = appendArrAlphabetically(imports, 1, newActionName);
  const newImportBlock = (
    mergeAppendedImports(targetBlockArr, appendedImports).join('\n')
  );

  return newImportBlock;
};

module.exports = {
  appendArrAlphabetically,
  extractImports,
  getImportBlockRegex,
  getNewImportBlock,
  getRegexMatch,
  mergeAppendedImports,
}
