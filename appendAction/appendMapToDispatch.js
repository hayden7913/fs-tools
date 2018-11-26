const compose = require('ramda').compose;

const {
  mergeAppendedPoperties,
  appendArrAlphabetically,
  extractProperties,
  getRegexMatch,
  getAppendedDestructureBlock ,
} = require('./utils');


const appendImportBlock = (blockType) => (actionName) => (fileText) => {
  const getTargetImportBlock = getImportBlockRegex(blockType);
  const getImportBlock = getRegexMatch(getTargetImportBlock());
  const ImportBlock = getImportBlock(fileText);
  const appendedImportBlock = (
     getAppendedDestructureBlock  (ImportBlock, blockType, actionName)
  );

  const newText = fileText.replace(ImportBlock, appendedImportBlock);

  return newText;
}

const getDispatchBlockRegex = () => (
  new RegExp(
    'connect\\(mapStateToProps.*{\\n(  \\w+,\\n)*}\\)\\(\\w+\\)'
  )
);

const getDispatchBlock  = getRegexMatch(getDispatchBlockRegex()) ;

const appendMapToDispatch = actionName => fileText => {
  const regex = getDispatchBlockRegex();
  const dispatchBlock = regex.exec(fileText)[0];
  const appendedDispatchBlock = (
    getAppendedDestructureBlock(dispatchBlock, actionName )
  );
  const newText = fileText.replace(dispatchBlock , appendedDispatchBlock);

  return newText;
}

module.exports = appendMapToDispatch;
