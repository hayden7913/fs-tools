const {
  mergeAppendedImports,
  appendArrAlphabetically,
  extractImports,
  getImportBlockRegex,
  getRegexMatch,
  getNewImportBlock,
} = require('./utils');

const getActionBlockRegex = getImportBlockRegex('actions');
const getActionBlock = getRegexMatch(getActionBlockRegex());

const appendActionBlock = (actionName) => (fileText) => {
  const actionBlock = getActionBlock(fileText);
  const appendedActionBlock = (
     getNewImportBlock(actionBlock, 'actions', actionName)
  );

  const newText = fileText.replace(actionBlock, appendedActionBlock);

  return newText;
}

module.exports = appendActionBlock;
