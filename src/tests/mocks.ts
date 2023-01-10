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

export default words;
