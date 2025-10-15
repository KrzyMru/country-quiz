import { expect, test } from 'vitest';
import GenerateCountryPopulationMinQuestion from './generate-country-population-min-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = GenerateCountryPopulationMinQuestion(testCountryData, 4);
    const expectedAnswers = ["France", "Bolivia", "Germany", "Nepal"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    const generatedQuestion = GenerateCountryPopulationMinQuestion(testCountryData, 4);

    expect(generatedQuestion.text).toBe("Which of the following countries has the smallest population?");
});

test('Generates the correct answer', () => {
    const generatedQuestion = GenerateCountryPopulationMinQuestion(testCountryData, 4);

    const smallestPopulation = Math.min(...testCountryData.map(c => c.population));
    const chosenCountryName = testCountryData[testCountryData.findIndex(c => c.population === smallestPopulation)].name.common; // Correct country
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryName));
});