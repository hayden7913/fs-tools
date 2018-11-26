const string = `

import a blind kite {
  a,
  b,
  c,
} from '../helpers';

import {
  actionOne,
  completeTodo,
  actionTwo,
} from './actions';
`;

const getImportBlockRegex = fileName => (
  new RegExp(
    'import {\\n(  \\w+,\\n)*} from.*' + fileName,
  )
);


const regex = getImportBlockRegex('actions');
console.log(regex)
const res = regex.exec(string)[0];
// const res = /\w+/.exec(string)[0];
console.log(res)
