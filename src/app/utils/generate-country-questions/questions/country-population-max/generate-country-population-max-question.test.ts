import { expect, test } from 'vitest';
import GenerateCountryPopulationMaxQuestion from './generate-country-population-max-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = GenerateCountryPopulationMaxQuestion(testCountryData, 4);
    const expectedAnswers = ["France", "Bolivia", "Germany", "Nepal"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    const generatedQuestion = GenerateCountryPopulationMaxQuestion(testCountryData, 4);

    expect(generatedQuestion.text).toBe("Which of the following countries has the largest population?");
});

test('Generates the correct answer', () => {
    const generatedQuestion = GenerateCountryPopulationMaxQuestion(testCountryData, 4);

    const biggestPopulation = Math.max(...testCountryData.map(c => c.population));
    const chosenCountryName = testCountryData[testCountryData.findIndex(c => c.population === biggestPopulation)].name.common; // Correct country
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryName));
});