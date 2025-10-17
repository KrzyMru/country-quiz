import { expect, test, vi } from 'vitest';
import pickOptions from './pick-options';
import type { Settings } from '../../../contexts/settings/types';

const allOptions = [2,4,6];

const testSettingsEnabled: Settings = {
    questionCapital: true, questionFlag: true, questionLandlocked: true,
    questionContinent: true, questionPopulationMax: true, questionPopulationMin: true,
    questionAreaMax: true, questionAreaMin: true, numberQuestions: 10,
    probabilityAnswersTwo: 20, probabilityAnswersFour: 70, probabilityAnswersSix: 10,
    AnswersTwo: true, 
    AnswersFour: true, 
    AnswersSix: true, 
};

const testSettingsDisabled: Settings = {
    questionCapital: true, questionFlag: true, questionLandlocked: true,
    questionContinent: true, questionPopulationMax: true, questionPopulationMin: true,
    questionAreaMax: true, questionAreaMin: true, numberQuestions: 10,
    probabilityAnswersTwo: 20, probabilityAnswersFour: 70, probabilityAnswersSix: 10,
    AnswersTwo: false, 
    AnswersFour: false, 
    AnswersSix: false, 
};

test('Generates options correctly', () => {
    const option = pickOptions(testSettingsEnabled);
    expect(option).toBeOneOf(allOptions);
});

test('Generates backup options correctly', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    const options1 = pickOptions(testSettingsDisabled);
    expect(options1).toBeOneOf(allOptions);

    vi.spyOn(Math, 'random').mockReturnValue(0.9);
    const options2 = pickOptions(testSettingsDisabled);
    expect(options2).toBeOneOf(allOptions);
});