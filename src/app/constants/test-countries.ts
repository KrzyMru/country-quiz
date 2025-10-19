import type { CountryData } from "../api/types";

const testCountryData: CountryData[] = [
    {
        name: { common: "France", official: "French Republic" },
        capital: ["Paris"],
        continents: ["Europe"],
        population: 67000000,
        area: 551695,
        flags: {
            png: "frenchFlagPng",
            alt: "frenchFlagAlt",
        },
        landlocked: false,
        translations: {
            eng: { common: "France", official: "French Republic" },
            pol: { common: "Francja", official: "Republika Francuska" }
        }
    },
    {
        name: { common: "Germany", official: "Federal Republic of Germany" },
        capital: ["Berlin"],
        continents: ["Europe"],
        population: 83000000,
        area: 357022,
        flags: {
            png: "germanFlagPng",
            alt: "germanFlagAlt",
        },
        landlocked: false,
        translations: {
            eng: { common: "Germany", official: "Federal Republic of Germany" },
            pol: { common: "Niemcy", official: "Republika Federalna Niemiec" }
        }
    },
    {
        name: { common: "Nepal", official: "Federal Democratic Republic of Nepal" },
        capital: ["Kathmandu"],
        continents: ["Asia"],
        population: 29000000,
        area: 147516,
        flags: {
            png: "nepaliFlagPng",
            alt: "nepaliFlagAlt",
        },
        landlocked: true,
        translations: {
            eng: { common: "Nepal", official: "Federal Democratic Republic of Nepal" },
            pol: { common: "Nepal", official: "Federalna Demokratyczna Republika Nepalu" }
        }
    },
    {
        name: { common: "Bolivia", official: "Plurinational State of Bolivia" },
        capital: ["Sucre", "La Paz"],
        continents: ["South America"],
        population: 11600000,
        area: 1098581,
        flags: {
            png: "bolivianFlagPng",
            alt: "bolivianFlagAlt",
        },
        landlocked: true,
        translations: {
            eng: { common: "Bolivia", official: "Plurinational State of Bolivia" },
            pol: { common: "Boliwia", official: "Wielonarodowe Państwo Boliwia" }
        }
    },
];

export default testCountryData;