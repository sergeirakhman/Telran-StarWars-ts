import Hero from "./hero.tsx";
import DreamTeam from "./dreamTeam.tsx";
import OpeningCrawl from "./openingCrawl.tsx";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {StarWarsContext} from "../../../utils/context.ts";
import {defaultHero} from "../../../utils/constants.ts";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(StarWarsContext);

    useEffect(() => {
        if (!heroId) return;
        changeHero(heroId);
    }, [heroId, changeHero]);

    return (
        <main className={'clearfix'}>
            <Hero></Hero>
            <DreamTeam></DreamTeam>
            <OpeningCrawl></OpeningCrawl>
        </main>
    );
};

export default Home;