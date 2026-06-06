import {useContext} from 'react';
import StarWars from "./pages/starWars.tsx";
import AboutMe from "./pages/aboutMe.tsx";
import {navItems} from "../../utils/constants.ts";
import Home from "./pages/home.tsx";
import Contact from "./pages/contact.tsx";
import {StarWarsContext} from "../../utils/context.ts";

const Content = () => {
    const {page} = useContext(StarWarsContext);
    switch (page) {
        case navItems[1]:
            return (<AboutMe />);
        case navItems[2]:
            return (<StarWars />);
        case navItems[3]:
            return (<Contact />);
        default:
            return (<Home />);
    }
};

export default Content;