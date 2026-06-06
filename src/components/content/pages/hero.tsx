import hero from "../../../assets/images/main.jpg";

const Hero = () => {
    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img src={hero} alt="Luke Skywalker" className={'w-full shadow-hero'}/>
        </section>
    );
};

export default Hero;