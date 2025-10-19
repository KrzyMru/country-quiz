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
    translations: Record<LanguagesApi, {
        common: string,
        official: string,
    }>
}

type LanguagesApi = 'eng' | 'pol';

export type { CountryData, LanguagesApi }