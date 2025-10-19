interface Settings {
    language: LanguagesI18n,
    questionCapital: boolean,
    questionFlag: boolean,
    questionContinent: boolean,
    questionLandlocked: boolean,
    questionPopulationMax: boolean,
    questionPopulationMin: boolean,
    questionAreaMax: boolean,
    questionAreaMin: boolean,
    countryType: 'all' | 'independent' | 'territory',
    numberQuestions: number,
    AnswersTwo: boolean,
    AnswersFour: boolean,
    AnswersSix: boolean,
    probabilityAnswersTwo: number,
    probabilityAnswersFour: number,
    probabilityAnswersSix: number,
}

interface SettingsProps {
    settings: Settings,
    setSettings: (newSettings: Settings) => void,
}

type LanguagesI18n = 'en' | 'pl';

export type { Settings, SettingsProps, LanguagesI18n }