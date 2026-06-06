import {navItems} from "../../utils/constants.ts";
import NavItem from "./navItem.tsx";

const Menu = () => {
    return (
        <nav className="fixed top-2 left-12 flex gap-3">
            {navItems.map(item => <NavItem itemTitle={item} key={item} />)}
        </nav>
    );
};

export default Menu;