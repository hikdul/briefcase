
//TODO: falta integrar con react router
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faHouseLaptop, faAddressCard, faPersonDigging, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { About } from "../../Pages/About/About";
import { ContactMe } from "../../Pages/Contact/ContactMe";
import { Home } from "../../Pages/Home/Home";
import { Projects } from "../../Pages/Projects/Project";

export const routes: routesProps[] = [
    {
        whitButtom: true,
        icon: faHouseLaptop,
        title: 'Home',
        path: '/',
        activeClass: false,
        page: Home
    },
    {
        whitButtom: true,
        icon: faPersonDigging,
        title: 'Projects',
        path: '/Projects',
        activeClass: false,
        page: Projects
    },
    {
        whitButtom: true,
        icon: faFeatherPointed,
        title: 'About',
        path: '/About',
        activeClass: true,
        page: About
    },
    {
        whitButtom: true,
        icon: faAddressCard,
        title: 'Contact',
        path: '/Contact',
        activeClass: false,
        page: ContactMe
    },
]

interface routesProps {
    whitButtom: boolean
    icon: IconDefinition
    title: string
    activeClass: boolean
    path: string
    page: () => JSX.Element
}


