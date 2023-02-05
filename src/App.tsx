import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import  RxButtons  from './components/rxbuttons';
import  RxTextfields from './components/rxtextfields';
import Rxcheckboxes from './components/rxcheckboxes';

function App() {




  return (
    <div>
      <RxButtons/>
      <RxTextfields/>
      <Rxcheckboxes/>
    </div>
  );
}

export default App;
