import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.less";
import Login from "./containers/Login";
import Admin from "./containers/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
