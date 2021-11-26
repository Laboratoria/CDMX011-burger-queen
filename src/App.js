import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import Orders from './Components/Orders';
import Cooking from './Components/Reception';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Welcome />}/>  
            <Route path = '/newOrder' element={<Orders />}/>
            <Route path ='/cooking' element={<Cooking />}/>
        </Routes>
    </Router>
  )
}

export default App;

//¿Aquí va el archivo de FB?
