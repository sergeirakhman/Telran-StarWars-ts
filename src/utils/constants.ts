export const starWarsInfo = "Star Wars is an American media franchise created by George Lucas. The space opera saga began with the original Star Wars film (1977) and quickly became a worldwide pop culture phenomenon. It has expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.\n" +
    "\n" +
    "The original film, later retitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).\n" +
    "\n" +
    "All nine films, collectively referred to as the \"Skywalker Saga\", were nominated for Academy Awards, with Oscars going to the first three releases. Together with the spin-off films Rogue One (2016) and Solo (2018), the combined box office revenue of Star Wars theatrical live-action films equals over US$10 billion, making Star Wars the third-highest-grossing film franchise in cinematic history.";
export const navItems = ["Home", "About me", "Star wars", "Contact"]

export const baseApiUrl = "https://sw-info-api.herokuapp.com/";

export const daysLimit = 1000 * 60 * 60 * 24 * 30;

export const fieldsInfo = [
    {name: "gender", label: "Gender"},
    {name: "skin_color", label: "Skin color"},
    {name: "hair_color", label: "Hair color"},
    {name: "height", label: "Height"},
    {name: "eye_color", label: "Eye color"},
    {name: "mass", label: "Mass"},
    {name: "birth_year", label: "Birth year"}
];

export const fieldsMapper = new Map(fieldsInfo.map(field => ([field.name, field])));
