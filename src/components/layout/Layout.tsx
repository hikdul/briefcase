import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import './css/NavigationBar.css'

// todo: hacer que los botones se vean como undidos 
// todo: definir y generar los botones; segun sean necesarios
// todo: generar una lista o clase que cuando un elemento este activo, se apliquen todas las clases que indiquen esto. asi es mas simple para trabajar con js

export const Layout = () => {
  return (
    <section className=".navigationBar">
      <div className="navigation">
        <ul>
          <li className="list active">
            <a className="link" >
              <span className="icon">
                <FontAwesomeIcon className="image" icon={faHome} />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list">
            <a className="link" >
              <span className="icon">
                <FontAwesomeIcon className="image" icon={faAddressCard} />
              </span>
              <span className="title">About</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </section>
  );
};
