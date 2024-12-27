import React from 'react';
import './App.css';
import Login from "Page/Login/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fpassword from './Page/FPassword';
import NewPassword from "./Page/NewPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/forgot-password" element={<Fpassword />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>h
     
    </BrowserRouter>
  );
}

export default App;
