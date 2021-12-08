import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Orders from "./Components/Orders";
import Cooking from "./Components/Reception";
import Delivered from "./Components/Delivered";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/newOrder" element={<Orders />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/delivered" element={<Delivered />} />
      </Routes>
    </Router>
  );
}

export default App;

//¿Aquí va el archivo de FB?
