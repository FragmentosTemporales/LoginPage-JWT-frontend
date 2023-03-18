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
import injectContext from "./store/context";
import Info from './views/Info';
import Card from './components/card';
import Dogs from './components/dogs';
import Cats from './components/cats';
import Others from './components/others';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/others" element={<Others />} />
          <Route path="/recoverpass" element={<RecoverPass />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default injectContext(App);
