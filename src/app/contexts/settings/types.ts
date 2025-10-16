interface Settings {
    questionCapital: boolean,
    questionFlag: boolean,
    questionContinent: boolean,
    questionLandlocked: boolean,
    questionPopulationMax: boolean,
    questionPopulationMin: boolean,
    questionAreaMax: boolean,
    questionAreaMin: boolean,
    numberOfQuestions: number,
}

interface SettingsProps {
    settings: Settings,
    setSettings: (newSettings: Settings) => void,
}

export type { Settings, SettingsProps }