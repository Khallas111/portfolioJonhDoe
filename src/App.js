import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Copyrights from "./pages/Copyrights";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/copyrights" element={<Copyrights />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
