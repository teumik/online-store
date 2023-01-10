import { dataController } from '../controller/data.controller';
import roundNumber from '../lib/numberHelpers';

describe('Correct implementation of functions', () => {
  const getRandom = () => Math.random() * 100 * dataController.getMaxPrice();
  const floatNumbers = Array.from(
    new Set(
      Array(100)
        .fill(null)
        .map(getRandom)
    )
  );
  const results = floatNumbers.map((float) => roundNumber(float));
  it('returns not integers', () => {
    results.map((result) => (
      expect(result).not.toEqual(Number.isInteger(result))));
  });
  it('returns with 2 digits precision', () => {
    results.map((result) => {
      if (!Number.isInteger(result)) {
        const [[precision]] = Array.from(String(result).matchAll(/(?<=\.)\d*/g));
        return expect(Array.from(precision).length).toBeLessThan(3);
      }
      return result;
    });
  });
});
