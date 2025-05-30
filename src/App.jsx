import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import "./index.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div>
        <Button variant="contained" color="primary">
          <a href="/" className="text-white">Home</a>
        </Button>
        <Button variant="contained" color="secondary">
          <a href="/about" className="text-white">Quiénes Somos</a>
        </Button>
        <Button variant="contained" color="success">
          <a href="/contact" className="text-white">Contacto</a>
        </Button>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
