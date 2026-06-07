import {navItems} from "../../utils/constants.ts";
import Home from "./pages/home.tsx";
import {Route, Routes} from "react-router";
import AboutMe from "./pages/aboutMe.tsx";
import StarWars from "./pages/starWars.tsx";
import Contact from "./pages/contact.tsx";

const Content = () => {

    return (
        <Routes>
            {["/", `/${navItems[0]}`].map(p => <Route key={p} path={p} element={<Home />} />)}
            <Route path={`/${navItems[1]}`} element={<AboutMe />}></Route>
            <Route path={`/${navItems[2]}`} element={<StarWars />}></Route>
            <Route path={`/${navItems[3]}`} element={<Contact />}></Route>
        </Routes>
    )
};

export default Content;