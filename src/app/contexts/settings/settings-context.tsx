import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Settings, SettingsProps } from "./types";

const defaultSettings: Settings = {
    questionCapital: true,
    questionFlag: true,
    questionLandlocked: true,
    questionContinent: true,
    questionPopulationMax: true,
    questionPopulationMin: true,
    questionAreaMax: true,
    questionAreaMin: true,
    countryType: 'independent',
    numberQuestions: 10,
    AnswersTwo: true,
    AnswersFour: true,
    AnswersSix: true,
    probabilityAnswersTwo: 20,
    probabilityAnswersFour: 80,
    probabilityAnswersSix: 20,
};

const SettingsContext = createContext<SettingsProps>({
    settings: defaultSettings,
    setSettings: () => null
});

const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [settings, setSettings] = useState<Settings>(() => {
        try {
            const stored = localStorage.getItem("settings");
            if(stored) {
                const parsed = JSON.parse(stored) as Settings;
                console.log(parsed)
                return { 
                    ...defaultSettings, 
                    ...parsed, 
                    numberQuestions: (parsed.numberQuestions >= 1 || parsed.numberQuestions <= 30) ? parsed.numberQuestions : defaultSettings.numberQuestions,
                    countryType: (parsed.countryType === 'all' || parsed.countryType === 'independent' || parsed.countryType === 'territory') ? parsed.countryType : defaultSettings.countryType
                };
            }
            return defaultSettings;
        } catch(e: unknown) {
            return defaultSettings;
        }
    });

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings)); 
    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export { SettingsContext, SettingsProvider };