import React, {useEffect} from 'react';
import {baseApiUrl, daysLimit, fieldsMapper} from "../../../utils/constants.ts";

const AboutMe = () => {
    const [aboutMeInfo, setAboutMeInfo] = React.useState(() => {
        const aboutMeInfo = JSON.parse(localStorage.getItem("aboutMeInfo")!)

        if (aboutMeInfo && Date.now() - aboutMeInfo.dateStamp < daysLimit)
            return aboutMeInfo.payload;

    });


    useEffect(() => {

        const fetchAboutMe = async () => {

            const response = await fetch(`${baseApiUrl}/v1/peoples/1`);
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
            localStorage.setItem("aboutMeInfo", JSON.stringify({
                payload: info,
                dateStamp: Date.now()
            }));
        }

        if (!aboutMeInfo) fetchAboutMe()
    })

    if (aboutMeInfo)
    return (
        <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
            {Object.entries(aboutMeInfo).map(([key, value]) => {
                const field = fieldsMapper
                    .get(key)

                return field && <p key={key}>{field.label}: {value}</p>
            })}
        </div>
    );
    else return (
        <div className={'spinner spinner-border'}></div>
    );
};

export default AboutMe;