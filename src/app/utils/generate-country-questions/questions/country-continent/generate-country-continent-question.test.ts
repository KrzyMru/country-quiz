import { expect, test, vi } from 'vitest';
import generateCountryContinentQuestion from './generate-country-continent-question';
import testCountryData from '../../../../constants/test-countries';
import continents from '../../../../constants/continents';

test('Generates correct answers', () => {
    const generatedQuestion = generateCountryContinentQuestion(testCountryData, 4);

    expect(continents).toEqual(expect.arrayContaining(generatedQuestion.answers));
});

test('Generates correct text', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First answer is always correct
    const generatedQuestion = generateCountryContinentQuestion(testCountryData, 4);

    const chosenCountryContinent = generatedQuestion.answers[0]; // Correct continent
    const chosenCountryName = testCountryData.find(cd => cd.continents[0] === chosenCountryContinent)?.name.common;
    expect(generatedQuestion.text).toBe(`Which continent is ${chosenCountryName} a part of?`);
});

test('Generates the correct answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First answer is always correct
    const generatedQuestion = generateCountryContinentQuestion(testCountryData, 4);

    const chosenCountryContinent = generatedQuestion.answers[0]; // Correct continent
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryContinent));
});