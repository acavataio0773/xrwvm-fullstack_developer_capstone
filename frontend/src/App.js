import React from "react";
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
        {/* Route for dealers*/}
        <Route path="/dealers" element={<Dealers/>} />
      {/* Route for Login */}
      <Route path="/login" element={<LoginPanel />} />

      {/* Route for Register */}
      <Route path="/register" element={<Register />} />

      {/* Default Route (Optional) */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
