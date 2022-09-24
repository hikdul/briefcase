import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import "../css/NavigationBar.css";
import { ButtonNavBar } from "./ButtonNavBar";

export const NavigationBar = () => {
  return (
    <section className=".navigationBar">
      <div className="navigation">
        <ul>
          <ButtonNavBar icon={faHome} activeClass={true} title='Home'/>
          <ButtonNavBar icon={faAddressCard} activeClass={false} title='About'/>
        </ul>
      </div>
    </section>
  );
};
