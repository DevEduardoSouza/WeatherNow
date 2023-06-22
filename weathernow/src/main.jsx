import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
