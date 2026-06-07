import {NavLink} from "react-router";
import Button from "../ui/button.tsx";

interface NavItemProps {
    itemTitle: string;
}
const NavItem = ({itemTitle}: NavItemProps) => {

    return (
        <nav>
            <NavLink to={`/${itemTitle}`}>
                <Button>{itemTitle}</Button>
            </NavLink>
        </nav>
    )
};

export default NavItem;