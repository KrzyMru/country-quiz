import { expect, test, vi } from 'vitest';
import GenerateCountryCapitalQuestion from './generate-country-capital-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = GenerateCountryCapitalQuestion(testCountryData, 4);
    const expectedAnswers = ["Paris", "Sucre", "Berlin", "Kathmandu"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First answer is always correct
    const generatedQuestion = GenerateCountryCapitalQuestion(testCountryData, 4);

    const chosenCountryCapital = generatedQuestion.answers[0]; // Correct capital
    const chosenCountryName = testCountryData.find(cd => cd.capital[0] === chosenCountryCapital)?.name.common;
    expect(generatedQuestion.text).toBe(`What is the capital of ${chosenCountryName}?`);
});

test('Generates the correct answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First answer is always correct
    const generatedQuestion = GenerateCountryCapitalQuestion(testCountryData, 4);

    const chosenCountryCapital = generatedQuestion.answers[0]; // Correct capital
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryCapital));
});