import React from 'react'
import Router from './Router'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './store/reducer'

const store = createStore(reducer)

function App() {
  return (
    <Provider store = {store}>
      <Router/>
    </Provider>
  );
}

export default App;
