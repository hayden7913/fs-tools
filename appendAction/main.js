const compose = require('ramda').compose;
const editFile = require('./editFile');
const appendImportBlock = require('./appendImportBlock');

const init = () => {
  const appendActionBlock = appendImportBlock('actions')('  newAction');
  const appendSagaBlock = appendImportBlock('sagas')('  newSaga');

  const appendAction = compose(
    appendActionBlock,
    appendSagaBlock,
  );

  editFile(appendAction);
}

init();
