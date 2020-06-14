import React, {useState,useReducer} from 'react';
import Parent from './Parent'
import Reducer from './Reducer'
import NumberContext from './NumberContext'
import './App.css';

function App() {
  let [globalState, dispatch] = useReducer(Reducer,44)

  return (
    <NumberContext.Provider value={[globalState,dispatch]}>
    <div >
      App
      <Parent></Parent>
    </div>
    </NumberContext.Provider>
  );
}

export default App;
