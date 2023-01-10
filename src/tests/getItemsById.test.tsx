import { dataController } from '../controller/data.controller';

describe('When given exist id', () => {
  it('returns item with in range', () => {
    const getRandom = () => Math.floor(Math.random() * 100) + 1;
    const idx = Array.from(
      new Set(
        Array(dataController.view.length)
          .fill(null)
          .map(getRandom)
      )
    );
    const results = idx.map((id) => dataController.getItemByID(id));
    const expected = [...idx];
    results.map((result, i) => expect(result?.id).toBe(expected[i]));
  });

  it('returns item with min and max range', () => {
    const idx = [
      Math.min(...dataController.view.map((el) => el.id)),
      Math.max(...dataController.view.map((el) => el.id)) - 1,
    ];
    const results = idx.map((id) => dataController.getItemByID(id));
    const expected = [...idx];
    results.map((result, i) => expect(result?.id).toBe(expected[i]));
  });
});

describe('When given id out range', () => {
  it('returns undefined', () => {
    const idx = [
      Math.min(...dataController.view.map((el) => el.id)) - 1,
      Math.max(...dataController.view.map((el) => el.id)) + 1,
    ];
    const results = idx.map((id) => dataController.getItemByID(id));
    results.map((result) => expect(result).toBeUndefined());
  });
});
