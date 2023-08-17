import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <SocialBar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/work" element={<Work></Work>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
