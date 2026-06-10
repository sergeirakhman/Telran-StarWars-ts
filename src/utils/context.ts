import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {StarWarsContextValues} from "./types";

export const StarWarsContext = createContext<StarWarsContextValues>({
    hero: defaultHero,
    changeHero: (heroId:string) => console.log(heroId),
});