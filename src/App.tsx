import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incrementedA, decrementedA } from './store/reducers/panelA';
import { incrementedB, decrementedB } from './store/reducers/panelB';
import { incrementedC, decrementedC } from './store/reducers/panelC';
import { incrementedD, decrementedD } from './store/reducers/panelD';

import logo from './logo.svg'
import './App.css'

function App() {

  const countA = useAppSelector((state) => state.panel1.value);
  const countB = useAppSelector((state) => state.panel2.value);
  const countC = useAppSelector((state) => state.panel3.value);
  const countD = useAppSelector((state) => state.panel4.value);

  const dispatch = useAppDispatch();


  function handleIncrementA() {
    dispatch(incrementedA())
  }

  function handleDecrementA() {
    dispatch(decrementedA())
  }

  function handleIncrementB() {
    dispatch(incrementedB())
  }

  function handleDecrementB() {
    dispatch(decrementedB())
  }

  function handleIncrementC() {
    dispatch(incrementedC())
  }

  function handleDecrementC() {
    dispatch(decrementedC())
  }

  function handleIncrementD() {
    dispatch(incrementedD())
  }

  function handleDecrementD() {
    dispatch(decrementedD())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
        <div className="panel">
          <button onClick={handleIncrementA}></button>
          <button onClick={handleDecrementA}></button>
          count is: {countA}
        </div>
        <div className="panel">
          <button onClick={handleIncrementB}></button>
          <button onClick={handleDecrementB}></button>
          count is: {countB}
        </div>
        <div className="panel">
          <button onClick={handleIncrementC}></button>
          <button onClick={handleDecrementC}></button>
          count is: {countC}
        </div>
        <div className="panel">
          <button onClick={handleIncrementD}></button>
          <button onClick={handleIncrementD}></button>
          count is: {countD}
        </div> 
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
