import { dataController } from '../controller/data.controller';

test('some', () => {
  const id = 4;
  const res = dataController.getItemByID(id);
  const ans = dataController.view[id - 1];
  expect(res).toBe(ans);
});

describe('When given 2 numbers', () => {
  it('returns item with id 4', () => {
    const id = 4;
    const res = dataController.getItemByID(id);
    const ans = dataController.view[id - 1];

    expect(res).toEqual(ans);
  });
});

describe('When given 2 numbers', () => {
  it('returns undefined', () => {
    const id = 0;
    const res = dataController.getItemByID(id);
    const ans = dataController.view[id - 1];

    expect(res).toEqual(ans);
  });
});

describe('When given 2 numbers', () => {
  it('returns undefined', () => {
    const id = 101;
    const res = dataController.getItemByID(id);
    const ans = dataController.view[id - 1];

    expect(res).toEqual(ans);
  });
});
