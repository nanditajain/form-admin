import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import WebPage from "./components/WebPage";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="webpage" element={<WebPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
