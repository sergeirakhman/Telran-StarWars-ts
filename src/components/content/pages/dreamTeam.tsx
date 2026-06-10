import {friends} from "../../../utils/constants.ts";
import Friend from "./friend.tsx";
import {useContext} from "react";
import {StarWarsContext} from "../../../utils/context.ts";
import {NavLink} from "react-router";

const DreamTeam = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <section className={'float-right w-1/2 row border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2'}>
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {
                friends.filter(friend => friend !== hero).map((friend, index) =>
                    <NavLink to={`/Home/${friend}`}><Friend friend={friend} pos={index+1} key={friend}/></NavLink>
                )
            }

        </section>
    );
};

export default DreamTeam;