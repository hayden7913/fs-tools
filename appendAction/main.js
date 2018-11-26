const compose = require('ramda').compose;
const editFile = require('./editFile');
const appendImportBlock = require('./appendImportBlock');
const appendMapToDispatch = require('./appendMapToDispatch');

// aa 'actionName'

const init = () => {
  const fileName = process.argv[2];
  const actionName = process.argv[3];

  const appendActionBlock = appendImportBlock('actions')('  ' + actionName);
  const appendMapToDispatchBlock = appendMapToDispatch('  ' + actionName);
  const appendAction = compose(
    appendMapToDispatchBlock,
    appendActionBlock,
  );

  editFile(fileName, appendAction);
}

init();
