import "../css/NavigationBar.css";
import { routes } from "../../../constants/Routes/Router";
import { ButtonNavBar } from "./ButtonNavBar";

export const NavigationBar = () => {
  return (
    <div className=".navigationBar">
      <div className="navigation">
        <ul>
          {routes.map(({whitButtom, icon, title, activeClass, path }, index) =>{
            if(whitButtom) 
              return(<ButtonNavBar
              key={title}
              icon={icon}
              activeClass={activeClass}
              title={title} 
              path={path}/>
          )})}
        </ul>
      </div>
    </div>
  );
};
