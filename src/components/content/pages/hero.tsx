import {useContext} from "react";
import {StarWarsContext} from "../../../utils/context.ts";
import {characters} from "../../../utils/constants.ts";

const Hero = () => {
    const {hero} = useContext(StarWarsContext);

    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img src={characters[hero].img} alt={`${characters[hero].name}`} className={'w-full shadow-hero'}/>
        </section>
    );
};

export default Hero;