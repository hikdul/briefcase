import { Route, Routes } from "react-router-dom";
import { About } from "../../Pages/About/About";
import { ContactMe } from "../../Pages/Contact/ContactMe";
import { Home } from "../../Pages/Home/Home";
import { Projects } from "../../Pages/Projects/Project";
import "./css/container.css";

export const Container = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<ContactMe />} />
        </Routes>
      </div>
    </div>
  );
};
