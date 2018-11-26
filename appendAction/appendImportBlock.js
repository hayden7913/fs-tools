const {
  mergeAppendedImports,
  appendArrAlphabetically,
  extractImports,
  getImportBlockRegex,
  getRegexMatch,
  getNewImportBlock,
} = require('./utils');


const appendImportBlock = (blockType) => (actionName) => (fileText) => {
  const getTargetImportBlock = getImportBlockRegex(blockType);
  const getImportBlock = getRegexMatch(getTargetImportBlock());
  const ImportBlock = getImportBlock(fileText);
  const appendedImportBlock = (
     getNewImportBlock(ImportBlock, blockType, actionName)
  );

  const newText = fileText.replace(ImportBlock, appendedImportBlock);

  return newText;
}

module.exports = appendImportBlock;
