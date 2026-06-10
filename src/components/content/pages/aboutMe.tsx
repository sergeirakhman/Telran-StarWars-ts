import React, {useContext, useEffect} from 'react';
import {characters, daysLimit, defaultHero} from "../../../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./errorPage.tsx";
import {StarWarsContext} from "../../../utils/context.ts";

const AboutMe = () => {

    const {changeHero} = useContext(StarWarsContext)
    const {heroId = defaultHero} = useParams();
    const [aboutMeInfo, setAboutMeInfo] = React.useState(() => {
        const aboutMeInfo = JSON.parse(localStorage.getItem(heroId)!)

        if (aboutMeInfo && Date.now() - aboutMeInfo.dateStamp < daysLimit)
            return aboutMeInfo.payload;

    });

    useEffect(() => {
    if (!(heroId in characters)) return;

    changeHero(heroId);
        const fetchAboutMe = async () => {
            const response = await fetch(characters[heroId].url);
            const data = await response.json();
            const info = {
                gender: data.gender,
                skin_color: data.skin_color,
                hair_color: data.hair_color,
                height: data.height,
                eye_color: data.eye_color,
                mass: data.mass,
                birth_year: data.birth_year
            };

            setAboutMeInfo(info);
            localStorage.setItem(heroId, JSON.stringify({
                payload: info,
                dateStamp: Date.now()
            }));
        }

        if (!aboutMeInfo) fetchAboutMe()
    })

    return (
        (heroId in characters) ?
        <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
            {Object.keys(aboutMeInfo).map((key) => {
                return <p key={key}>{key}: {aboutMeInfo[key]}</p>
            })}
        </div>
            : <ErrorPage/>
    );
};

export default AboutMe;