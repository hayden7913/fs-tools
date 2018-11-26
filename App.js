import React from 'react';
import { connect } from 'react-redux';

import {
  a,
  b,
  c,
} from '../helpers';

import {
  actionOne,
  actionTwo,
} from './actions';

function App() {
  return (
    <div>Hola Mundo</div>
  );
}

export default connect(mapStateToProps, {

})(App);
