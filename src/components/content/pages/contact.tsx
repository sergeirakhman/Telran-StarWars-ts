import React, {useEffect} from 'react';
import {baseApiUrl, daysLimit} from "../../../utils/constants.ts";

const Contact = () => {
    const [planets, setPlanets] = React.useState<string[]>(() => {
        const storage = JSON.parse(localStorage.getItem("planets")!);

        if (storage && Date.now() - storage.dateStamp < daysLimit)
            return storage.payload;
        else return  ['wait...']
    });

    useEffect(() => {
        const fetchData = async () => {

            if (!planets) {
                const response = await fetch(`${baseApiUrl}/v1/planets`);
                const data: {name: string}[] = await response.json();
                const planetNames = data.map(item => item.name);

                setPlanets(planetNames);
                localStorage.setItem("planets", JSON.stringify({
                    payload: planetNames,
                    dateStamp: Date.now()
                }));
            }
        };

        if (!planets) fetchData()
    });

    if (planets)
    return (
        <form className="w-4/5 rounded-[5px] bg-[#f2f2f2] mx-auto p-5 my-2" onSubmit={e => {
            e.preventDefault();
        }}>
            <label className={'w-full text-danger'}>First Name
                <input className={'w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                       type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label className={'w-full text-danger'}>Last Name
                <input className={'w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                       type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label className={'w-full text-danger'}>Planet
                <select className={'w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                        name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label className={'w-full text-danger'}>Subject
                <textarea className={'h-50 w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                          name="subject" placeholder="Write something.."></textarea>
            </label>
            <button
                className={'bg-[#04AA6D] text-white py-3 px-5 border-none rounded-sm cursor-pointer hover:bg-[#45a049]'}
                type="submit">Submit
            </button>
        </form>
    );
    else return (
        <div className={'spinner spinner-border'}></div>
    );
};

export default Contact;