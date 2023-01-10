import { dataController } from '../controller/data.controller';

describe('When given id 4', () => {
  it('returns item with id 4', () => {
    const id = 4;
    const result = dataController.getItemByID(id);
    const expected = dataController.view[id - 1];

    expect(result).toEqual(expected);
  });
});

describe('When given id 69', () => {
  it('returns item with id 69', () => {
    const id = 69;
    const result = dataController.getItemByID(id);
    const expected = dataController.view[id - 1];

    expect(result).toEqual(expected);
  });
});

describe('When given id out range (0)', () => {
  it('returns undefined', () => {
    const id = 0;
    const result = dataController.getItemByID(id);
    const expected = dataController.view[id - 1];

    expect(result).toEqual(expected);
  });
});

describe('When given id out range (101)', () => {
  it('returns undefined', () => {
    const id = 101;
    const result = dataController.getItemByID(id);
    const expected = dataController.view[id - 1];

    expect(result).toEqual(expected);
  });
});
