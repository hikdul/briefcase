
//TODO: falta integrar con react router
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faHouseLaptop, faAddressCard, faPersonDigging, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { About } from "../../Pages/About/About";
import { ContactMe } from "../../Pages/Contact/ContactMe";
import { Home } from "../../Pages/Home/Home";
import { Projects } from "../../Pages/Projects/Project";

export const routes: routesProps[] = [
    {
        icon: faHouseLaptop,
        title: 'Home',
        path: '/',
        end: true,
        page: Home
    },
    {
        icon: faPersonDigging,
        title: 'Projects',
        path: '/Projects',
        end: false,
        page: Projects
    },
    {
        icon: faFeatherPointed,
        title: 'About',
        path: '/About',
        end: false,
        page: About
    },
    {
        icon: faAddressCard,
        title: 'Contact',
        path: '/Contact',
        end: false,
        page: ContactMe
    },
]

interface routesProps {
    icon: IconDefinition
    title: string
    path: string
    end: boolean
    page: () => JSX.Element
}


