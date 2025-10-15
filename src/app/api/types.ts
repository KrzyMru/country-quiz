interface CountryData {
    name: {
        common: string,
        official: string,
    },
    capital: string[],
    continents: string[],
    population: number,
    area: number,
    flags: {
        png: string,
        alt: string,
    },
    landlocked: boolean,
}

export type { CountryData }