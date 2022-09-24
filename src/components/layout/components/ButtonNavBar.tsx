import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../css/ButtonNavBar.css";

//TODO: con el active tiene que venir el indicador

export const ButtonNavBar = ({
  icon,
  title,
  activeClass,
}: buttonNavBarProps) => {
  const [liClass, setLiClass] = useState<string>("list");

  useEffect(() => {
    if (activeClass) setLiClass("list active");
    if (!activeClass) setLiClass("list");
  }, [activeClass]);

  return (
    <li className={liClass}>
      <a className="link">
        <span className="icon">
          <FontAwesomeIcon className="image" icon={icon} />
        </span>
        <span className="title">{title}</span>
      </a>
    </li>
  );
};

interface buttonNavBarProps {
  icon: IconDefinition;
  title: string;
  activeClass?: boolean;
}

ButtonNavBar.defaultProps = {
  activeClass: false,
};
