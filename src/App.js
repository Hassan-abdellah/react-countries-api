import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/country/Country";
import Footer from "./components/footer/Footer";

const App = () => {
  const { darkTheme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
