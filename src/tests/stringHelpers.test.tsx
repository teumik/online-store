import { capitalizer, deCapitalizer } from '../lib/stringHelpers';
import words from './mocks';

describe('Correct implementation of functions', () => {
  it('returns first character in upper case', () => {
    const { lowerWords } = words.caseTest;
    const results = lowerWords.map((word) => capitalizer(word));
    results.map((result, i) => (
      expect(result.slice(0, 1))
        .toEqual(lowerWords[i].slice(0, 1).toLocaleUpperCase())));
  });
  it('returns first character in lower case', () => {
    const { upperWords } = words.caseTest;
    const results = upperWords.map((word) => deCapitalizer(word));
    results.map((result, i) => (
      expect(result.slice(0, 1))
        .toEqual(upperWords[i].slice(0, 1).toLocaleLowerCase())));
  });
  it('check trim spaces ', () => {
    const { lowerWords, upperWords } = words.spacesTest;
    const upperResults = lowerWords.map((word) => capitalizer(word));
    const lowerResults = upperWords.map((word) => deCapitalizer(word));
    upperResults.map((result, i) => (
      expect(result.slice(0, 1))
        .toEqual(lowerWords[i].trim().slice(0, 1).toLocaleUpperCase())));
    lowerResults.map((result, i) => (
      expect(result.slice(0, 1))
        .toEqual(lowerWords[i].trim().slice(0, 1).toLocaleLowerCase())));
  });
});
