import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar';
import Footer from './components/footer'
import Home from "./views/Home"
import Login from "./views/Login"
import Register from './views/Register';
import RecoverPass from './views/RecoverPass';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recoverpass" element={<RecoverPass />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
