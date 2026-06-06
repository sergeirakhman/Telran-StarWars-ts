import Hero from "./hero.tsx";
import DreamTeam from "./dreamTeam.tsx";
import OpeningCrawl from "./openingCrawl.tsx";

const Home = () => {
    return (
        <main className={'clearfix'}>
            <Hero></Hero>
            <DreamTeam></DreamTeam>
            <OpeningCrawl></OpeningCrawl>
        </main>
    );
};

export default Home;