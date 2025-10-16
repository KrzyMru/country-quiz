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
    numberOfQuestions: 10,
};

const SettingsContext = createContext<SettingsProps>({
    settings: defaultSettings,
    setSettings: () => null
});

const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [settings, setSettings] = useState<Settings>(() => {
        try {
            const stored = localStorage.getItem("settings");
            if(stored)
                return { ...defaultSettings, ...JSON.parse(stored)};
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