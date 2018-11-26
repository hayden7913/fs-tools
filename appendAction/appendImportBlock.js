const {
  appendArrAlphabetically,
  extractProperties,
  getImportBlockRegex,
  getRegexMatch,
  getAppendedDestructureBlock  ,
} = require('./utils');

const appendImportBlock = (blockType) => (actionName) => (fileText) => {
  const getTargetImportBlock = getImportBlockRegex(blockType);
  const getImportBlock = getRegexMatch(getTargetImportBlock());
  const importBlock = getImportBlock(fileText);
  const appendedImportBlock = (
     getAppendedDestructureBlock (importBlock, actionName)
  );

  const newText = fileText.replace(importBlock, appendedImportBlock);

  return newText;
}

module.exports = appendImportBlock;
