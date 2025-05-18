import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const mainRoutes = [
  <Route path="/" element={<Dashboard />} />,
  <Route path="/about" element={<About />} />,
  <Route path="/services" element={<Services />} />,
  <Route path="/contact" element={<Contact />} />,
];

export default mainRoutes;