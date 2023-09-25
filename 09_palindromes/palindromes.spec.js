const palindromes = require('./palindromes')

// describe('isAlphaNum', () => {
//   test('works with lowercase', () => {
//     expect(palindromes.isAlphaNum("a")).toBe(true);
//   });
//   test('works with uppercase', () => {
//     expect(palindromes.isAlphaNum("A")).toBe(true);
//   });
//   test('works with number', () => {
//     expect(palindromes.isAlphaNum("5")).toBe(true);
//   });
//   test('works with non-alpha character', () => {
//     expect(palindromes.isAlphaNum("@")).toBe(false);
//   });
//   test('works with space', () => {
//     expect(palindromes.isAlphaNum(" ")).toBe(false);
//   });
// });

// describe('toAlphaNum', () => {
//   test('works with single words', () => {
//     expect(palindromes.toAlphaNum('racecar')).toBe("racecar");
//   });
//   test('works with punctuation ', () => {
//     expect(palindromes.toAlphaNum('racecar!')).toBe("racecar");
//   });
//   test('works with upper-case letters ', () => {
//     expect(palindromes.toAlphaNum('Racecar!')).toBe("Racecar");
//   });
//   test('works with multiple words', () => {
//     expect(palindromes.toAlphaNum('A car, a man, a maraca.')).toBe("Acaramanamaraca");
//   });
//   test('works with numbers in a string', () => {
//     expect(palindromes.toAlphaNum('rac3e3car')).toBe("rac3e3car");
//   });
// })

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes.palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes.palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes.palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes.palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes.palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes.palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes.palindromes('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(palindromes.palindromes('r3ace3car')).toBe(false);
  });
});
