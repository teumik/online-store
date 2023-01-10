import { capitalizer, deCapitalizer } from '../lib/stringHelpers';

describe('Correct implementation of functions', () => {
  it('returns first character in upper case', () => {
    const words = [
      'string',
      'null',
      'test',
      'double word',
      '',
    ];
    const results = words.map((word) => capitalizer(word));
    results.map((result, i) => (
      expect(result.slice(0, 1))
        .toEqual(words[i].slice(0, 1).toLocaleUpperCase())));
  });
  it('returns first character in lower case', () => {
    const words = [
      'STRING',
      'NULL',
      'TEST',
      'DOUBLE WORD',
      '',
    ];
    const results = words.map((word) => deCapitalizer(word));
    results.map((result, i) => (
      expect(result.slice(0, 1))
        .toEqual(words[i].slice(0, 1).toLocaleLowerCase())));
  });
  it('check trim spaces ', () => {
    const lowerWords = [
      ' string',
      '   null',
      ' test',
      '     double word',
      '    ',
    ];
    const upperWords = [
      '  STRING',
      '    NULL',
      '   TEST',
      ' DOUBLE WORD',
      '   ',
    ];
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
