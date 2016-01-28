import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../reducers';

import Scene from './Scene.js';

const STYLE_APP = { color: 'black', fontFamily: 'Roboto', padding: 100 };

const store = createStore(reducer);

// The store will injected into the React context.
// To get it back, components must be wrapped with : connect()(Component)
export default () =>
  <div style={STYLE_APP}>
    <Provider store={store}>
      <Scene />
    </Provider>
  </div>;
