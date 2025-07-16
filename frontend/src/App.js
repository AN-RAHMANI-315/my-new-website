import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;