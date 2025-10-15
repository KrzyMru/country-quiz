import { expect, test, vi } from 'vitest';
import generateCountryFlagQuestion from './generate-country-flag-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = generateCountryFlagQuestion(testCountryData, 4);
    const expectedAnswers = ["France", "Bolivia", "Germany", "Nepal"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    const generatedQuestion = generateCountryFlagQuestion(testCountryData, 4);

    expect(generatedQuestion.text).toBe("Which country does this flag belong to?");
});

test('Generates the correct answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First answer is always correct
    const generatedQuestion = generateCountryFlagQuestion(testCountryData, 4);

    const chosenCountryName = generatedQuestion.answers[0]; // Correct country
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryName));
});

test('Generates the correct flag', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First answer is always correct
    const generatedQuestion = generateCountryFlagQuestion(testCountryData, 4);

    const chosenCountryName = generatedQuestion.answers[0]; // Correct country
    const chosenCountryFlags = testCountryData.find(c => c.name.common === chosenCountryName)?.flags;
    expect(chosenCountryFlags).toBeTruthy();
    expect(generatedQuestion.image?.png).toBe(chosenCountryFlags?.png);
    expect(generatedQuestion.image?.alt).toBe(chosenCountryFlags?.alt);
});