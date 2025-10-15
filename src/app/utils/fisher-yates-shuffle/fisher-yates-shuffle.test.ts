import { expect, test } from 'vitest';
import fisherYatesShuffle from './fisher-yates-shuffle';

test('Returns an array of the same size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = fisherYatesShuffle(array);

    expect(Array.isArray(result)).toBe(true);
    expect(array.length).toEqual(result.length);
});