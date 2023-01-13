const words = {
  caseTest: {
    lowerWords: [
      'string',
      'null',
      'test',
      'double word',
      '',
    ],
    upperWords: [
      'STRING',
      'NULL',
      'TEST',
      'DOUBLE WORD',
      '',
    ],
  },
  spacesTest: {
    lowerWords: [
      ' string ',
      '   null  ',
      ' test  ',
      '     double word    ',
      '    ',
    ],
    upperWords: [
      '  STRING    ',
      '    NULL  ',
      '   TEST ',
      ' DOUBLE WORD    ',
      '   ',
    ],
  },
};

const testCart = {
  reults: [6, 21, 1637],
  fakeItemRequests: [
    { expected: true, id: 1 },
    { expected: true, id: 64 },
    { expected: true, id: 43 },
    { expected: false, id: 44 },
    { expected: false, id: 0 },
    { expected: false, id: 65 },
  ],
  fakeCarts: [
    [
      { id: 1, count: 1 },
      { id: 2, count: 1 },
      { id: 3, count: 1 },
      { id: 4, count: 1 },
      { id: 5, count: 1 },
      { id: 6, count: 1 },
    ],
    [
      { id: 1, count: 1 },
      { id: 1, count: 2 },
      { id: 3, count: 3 },
      { id: 4, count: 4 },
      { id: 64, count: 5 },
      { id: 43, count: 6 },
    ],
    [
      { id: 1, count: 213 },
      { id: 3, count: 34 },
      { id: 4, count: 565 },
      { id: 64, count: 776 },
      { id: 43, count: 23 },
      { id: 12, count: 26 },
    ],
  ],
};

export { words, testCart };
