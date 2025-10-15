import { expect, test } from 'vitest';
import generateCountryAreaMinQuestion from './generate-country-area-min-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = generateCountryAreaMinQuestion(testCountryData, 4);
    const expectedAnswers = ["France", "Bolivia", "Germany", "Nepal"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    const generatedQuestion = generateCountryAreaMinQuestion(testCountryData, 4);

    expect(generatedQuestion.text).toBe("Which of the following countries has the smallest land area?");
});

test('Generates the correct answer', () => {
    const generatedQuestion = generateCountryAreaMinQuestion(testCountryData, 4);

    const smallestArea = Math.min(...testCountryData.map(c => c.area));
    const chosenCountryName = testCountryData[testCountryData.findIndex(c => c.area === smallestArea)].name.common; // Correct country
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryName));
});