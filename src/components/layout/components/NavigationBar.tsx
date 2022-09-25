import "../css/NavigationBar.css";
import { routes } from "../../../constants/Routes/Router";
import { ButtonNavBar } from "./ButtonNavBar";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className=".navigationBar">
      <div className="navigation">
        <ul>
          {routes.map(({ icon, title, path, end }) =>(
            <NavLink key={title} to={path} end={end} >
               {({isActive})=> <ButtonNavBar
                   icon={icon}
                   activeClass={isActive}
                   title={title} 
                   path={path}/>
               }
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
