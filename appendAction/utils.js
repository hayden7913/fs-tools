const mergeAppendedPoperties = (blockArr, appendedArr) => {
  const firstLine = blockArr[0];
  const lastLine = blockArr[blockArr.length - 1];

  return [
    firstLine,
    ...appendedArr,
    lastLine,
  ];
}

const appendArrAlphabetically = (arr, newVal) => {
  const appendedArr = [...arr, newVal];
  const sortedArr = appendedArr.sort();

  return sortedArr;
};

const extractProperties = importBlockArr => (
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

const getAppendedDestructureBlock  = (targetBlock, newActionName) => {
  const targetBlockArr = (
    targetBlock.split('\n')
  );
  const imports = extractProperties(targetBlockArr);
  const appendedImports = appendArrAlphabetically(imports, newActionName);
  const newImportBlock = (
    mergeAppendedPoperties(targetBlockArr, appendedImports).join('\n')
  );

  return newImportBlock;
};

module.exports = {
  appendArrAlphabetically,
  extractProperties,
  getImportBlockRegex,
  getAppendedDestructureBlock  ,
  getRegexMatch,
}
