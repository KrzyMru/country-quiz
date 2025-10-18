import type { CountryData } from "./types";

const getCountryDataAll = async (): Promise<CountryData[]> => {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,continents,population,area,flags,landlocked", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });

    if(!response.ok)
        throw new Error();
    
    const content = await response.json() as CountryData[];
    return content;
}

export default getCountryDataAll;