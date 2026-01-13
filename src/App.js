import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Copyrights from "./pages/Copyrights";
import Services from "./pages/Services";
import Container from "react-bootstrap/Container";

function Layout({ children }) {
  return (
    <Container fluid className="px-0">
      {children}
    </Container>
  );
}

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/copyrights" element={<Copyrights />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
