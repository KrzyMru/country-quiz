interface CountryData {
    name: {
        common: string,
        official: string,
    },
    capital: string[],
    continents: string[],
    population: number,
    area: number,
    flag: string,
    landlocked: boolean,
    unMember: boolean,
}

export type { CountryData }