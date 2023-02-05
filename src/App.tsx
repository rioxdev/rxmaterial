import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import  RxButtons  from './components/rxbuttons';
import  RxTextfields from './components/rxtextfields';
import Rxcheckboxes from './components/rxcheckboxes';
import RxDates from './components/rxdates';
import RxGrids from './components/rxgrids';
import RxTables from './components/rxtables';
import RxTablesAdvanced from './components/rxtablesAdvanced';

function App() {


  return (
    <div>
      <RxButtons/>
      <RxTextfields/>
      <Rxcheckboxes/>
      {/* <RxDates /> */}
      <RxGrids />
      <RxTables />
      <RxTablesAdvanced/>
    </div>
  );
}

export default App;
