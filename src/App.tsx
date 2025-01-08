import React from 'react';
import './App.css';
import Login from "Page/Login/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fpassword from './Page/FPassword';
import NewPassword from "./Page/NewPassword";
import SignUp from "./Page/SignUP";
import SignUpWithEmail from "./Page/SignUpWithEmail";
import SignUpWithPassword from "./Page/SignUpWithPassword";
import SignUpWithUsername from "./Page/SignUpWithUsername";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/forgot-password" element={<Fpassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-with-email" element={<SignUpWithEmail />} />
        <Route path="/sign-up-with-password" element={<SignUpWithPassword />} />
        <Route path="/sign-up-with-username" element={<SignUpWithUsername />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
