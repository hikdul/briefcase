import { Route, Routes } from "react-router-dom";
import { routes } from "../../constants/Routes/Router";
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
          {routes.map(route =><Route path={route.path} element={<route.page />} />)}
        </Routes>
      </div>
    </div>
  );
};
