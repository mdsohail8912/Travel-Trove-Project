import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Createinfo from "./pages/Createinfo";

import Deleteinfo from "./pages/Deleteinfo";

function App() {
  return (
    <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/infos/create' element={<Createinfo />} />
      <Route path='/infos/delete/:id' element={<Deleteinfo />} />
      
    </Routes>
  );
}

export default App;
