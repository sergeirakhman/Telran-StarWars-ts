import {navItems} from "../../utils/constants.ts";
import Home from "./pages/home.tsx";
import {Route, Routes} from "react-router";
import AboutMe from "./pages/aboutMe.tsx";
import StarWars from "./pages/starWars.tsx";
import Contact from "./pages/contact.tsx";
import ErrorPage from "./pages/errorPage.tsx";

const Content = () => {

    return (
        <Routes>
            {["/", `/${navItems[0]}`, "/:heroId", `/${navItems[0]}/:heroId`].map(p => <Route key={p} path={p} element={<Home />}></Route>)}
            {[`/${navItems[1]}`, `/${navItems[1]}/:heroId`].map((p => <Route key={p} path={p} element={<AboutMe />}></Route>))}
            <Route path={`/${navItems[1]}`} element={<AboutMe />}></Route>
            <Route path={`/${navItems[2]}`} element={<StarWars />}></Route>
            <Route path={`/${navItems[3]}`} element={<Contact />}></Route>
            <Route path={"*"} element={<ErrorPage />}></Route>
        </Routes>
    )
};

export default Content;