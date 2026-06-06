import {useContext} from 'react';
import {StarWarsContext} from "../../utils/context.ts";
import Button from "../ui/button.tsx";

interface NavItemProps {
    itemTitle: string;
}
const NavItem = ({itemTitle}: NavItemProps) => {

    const {changePage} = useContext(StarWarsContext);

    return <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
};

export default NavItem;