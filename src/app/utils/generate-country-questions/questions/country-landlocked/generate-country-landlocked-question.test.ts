import { expect, test, vi } from 'vitest';
import GenerateCountryLandlockedQuestion from './generate-country-landlocked-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = GenerateCountryLandlockedQuestion(testCountryData);
    const expectedAnswers = ["Yes", "No"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First country is always selected
    const generatedQuestion = GenerateCountryLandlockedQuestion(testCountryData);

    const chosenCountry = testCountryData[0];
    expect(generatedQuestion.text).toBe(`Is ${chosenCountry.name.common} landlocked?`);
});

test('Generates the correct answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First country is always selected
    const generatedQuestion = GenerateCountryLandlockedQuestion(testCountryData);

    const chosenCountry = testCountryData[0];
    expect(generatedQuestion.correctAnswer).toBe(chosenCountry.landlocked ? 0 : 1);
});