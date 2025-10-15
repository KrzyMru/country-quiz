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
    },
];

export default testCountryData;