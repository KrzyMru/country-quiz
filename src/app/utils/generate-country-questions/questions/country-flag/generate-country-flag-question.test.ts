import { expect, test, vi } from 'vitest';
import GenerateCountryFlagQuestion from './generate-country-flag-question';
import testCountryData from '../../../../constants/test-countries';

test('Generates correct answers', () => {
    const generatedQuestion = GenerateCountryFlagQuestion(testCountryData, 4);
    const expectedAnswers = ["France", "Bolivia", "Germany", "Nepal"];

    expect(generatedQuestion.answers).toEqual(expect.arrayContaining(expectedAnswers));
});

test('Generates correct text', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First country is always chosen
    const generatedQuestion = GenerateCountryFlagQuestion(testCountryData, 4);

    const chosenCountryName = generatedQuestion.answers[0]; // Correct country
    const chosenCountryFlag = testCountryData.find(cd => cd.name.common === chosenCountryName)?.flag;
    
    expect(generatedQuestion.text).toBe(`Which country does this flag '${chosenCountryFlag}' belong to?`);
});

test('Generates the correct answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.2); // First country is always chosen
    const generatedQuestion = GenerateCountryFlagQuestion(testCountryData, 4);

    const chosenCountryName = generatedQuestion.answers[0]; // Correct country
    expect(generatedQuestion.correctAnswer).toBe(generatedQuestion.answers.indexOf(chosenCountryName));
});