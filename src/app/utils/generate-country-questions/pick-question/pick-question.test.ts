import { expect, test, vi } from 'vitest';
import pickQuestion from './pick-question';
import type { Settings } from '../../../contexts/settings/types';
import generateCountryFlagQuestion from '../questions/country-flag/generate-country-flag-question';
import generateCountryCapitalQuestion from '../questions/country-capital/generate-country-capital-question';
import generateCountryContinentQuestion from '../questions/country-continent/generate-country-continent-question';
import generateCountryLandlockedQuestion from '../questions/country-landlocked/generate-country-landlocked-question';
import generateCountryPopulationMaxQuestion from '../questions/country-population-max/generate-country-population-max-question';
import generateCountryPopulationMinQuestion from '../questions/country-population-min/generate-country-population-min-question';
import generateCountryAreaMaxQuestion from '../questions/country-area-max/generate-country-area-max-question';
import generateCountryAreaMinQuestion from '../questions/country-area-min/generate-country-area-min-question';

const allQuestions = [
    generateCountryFlagQuestion,
    generateCountryCapitalQuestion,
    generateCountryContinentQuestion,
    generateCountryLandlockedQuestion,
    generateCountryPopulationMaxQuestion,
    generateCountryPopulationMinQuestion,
    generateCountryAreaMaxQuestion,
    generateCountryAreaMinQuestion,
];

const testSettingsEnabled: Settings = {
    questionCapital: true,
    questionFlag: true,
    questionLandlocked: true,
    questionContinent: true,
    questionPopulationMax: true,
    questionPopulationMin: true,
    questionAreaMax: true,
    questionAreaMin: true,
    numberQuestions: 10, countryType: 'independent',
    AnswersTwo: true, probabilityAnswersTwo: 0,
    AnswersFour: true, probabilityAnswersFour: 0,
    AnswersSix: true, probabilityAnswersSix: 0,
};

const testSettingsDisabled: Settings = {
    questionCapital: false,
    questionFlag: false,
    questionLandlocked: false,
    questionContinent: false,
    questionPopulationMax: false,
    questionPopulationMin: false,
    questionAreaMax: false,
    questionAreaMin: false,
    numberQuestions: 10, countryType: 'independent',
    AnswersTwo: true, probabilityAnswersTwo: 0,
    AnswersFour: true, probabilityAnswersFour: 0,
    AnswersSix: true, probabilityAnswersSix: 0,
};

test('Generates questions correctly', () => {
    const question = pickQuestion(testSettingsEnabled);
    expect(question).toBeOneOf(allQuestions);
});

test('Generates backup question correctly', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    const question1 = pickQuestion(testSettingsDisabled);
    expect(question1).toBeOneOf(allQuestions);

    vi.spyOn(Math, 'random').mockReturnValue(0.9);
    const question2 = pickQuestion(testSettingsDisabled);
    expect(question2).toBeOneOf(allQuestions);
});