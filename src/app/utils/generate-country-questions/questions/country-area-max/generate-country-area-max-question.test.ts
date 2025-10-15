import { expect, test } from 'vitest';
import generateCountryAreaMaxQuestion from './generate-country-area-max-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = generateCountryAreaMaxQuestion(testCountryData, 4);
    const expectedAnswers = ["France", "Bolivia", "Germany", "Nepal"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    const generatedQuestion = generateCountryAreaMaxQuestion(testCountryData, 4);

    expect(generatedQuestion.text).toBe("Which of the following countries has the largest land area?");
});

test('Generates the correct answer', () => {
    const generatedQuestion = generateCountryAreaMaxQuestion(testCountryData, 4);

    const biggestArea = Math.max(...testCountryData.map(c => c.area));
    const chosenCountryName = testCountryData[testCountryData.findIndex(c => c.area === biggestArea)].name.common; // Correct country
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryName));
});