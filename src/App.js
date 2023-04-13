
import './App.css';
import { useState, useEffect } from 'react';
import { Sidebar } from './Component/Sidebar';
import { Header } from './Component/Header';
import { Leaders } from './Component/Leaders';

import {Slider} from './Component/Slider'
import {CardBs} from './Component/CardBs'

import { Splash } from './Component/Splash';


function App() {

  return (
    <div>
      <Splash />
    <Header/>    
    <Slider />
     <Leaders />  
    <CardBs />
     </div>
  );
}

export default App;
