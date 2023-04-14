import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import injectContext from "./store/context";
import User from "./views/user";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<User />} path="/user" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default injectContext(App);
