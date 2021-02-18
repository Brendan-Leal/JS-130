let Scrabble = require('./scrabble.js');

describe("Scrabble", () => {
  test("empty word scores zero", () => {
    expect(new Scrabble('').score()).toBe(0);
  });

  test("whitespace scores zero", () => {
    expect(new Scrabble(" \t\n").score()).toBe(0);
  });

  test("null scores zero", () => {
    expect(new Scrabble(null).score()).toBe(0);
  });

  test("scores very short word", () => {
    expect(new Scrabble('a').score()).toBe(1);
  });

  test("scores other very short word", () => {
    expect(new Scrabble('f').score()).toBe(4);
  });

  test("simple word scores the number of letters", () => {
    expect(new Scrabble('street').score()).toBe(6);
  });

  test("complicated words score more", () => {
    expect(new Scrabble('quirky').score()).toBe(22);
  });

  test("scores are case-insensitive", () => {
    expect(new Scrabble('OXYPHENBUTAZONE').score()).toBe(41);
  });

  test("convenient scoring", () => {
    expect(Scrabble.score('alacrity')).toBe(13);
  });

  test("isWhiteSpace() returns true if the input matches as a white space", () => {
    expect(new Scrabble("\n").isWhiteSpace()).toBeTruthy();
    expect(new Scrabble("").isWhiteSpace()).toBeFalsy();
    expect(new Scrabble(" ").isWhiteSpace()).toBe(true);
    expect(new Scrabble("Word").isWhiteSpace()).toBe(false);
  });

  test("isNotAWord returns true if the scrabbleWord is not a word", () => {
    expect(new Scrabble("").isNotAWord()).toBe(true);
    expect(new Scrabble("\n").isNotAWord()).toBe(true);
    expect(new Scrabble(null).isNotAWord()).toBe(true);
    expect(new Scrabble(" ").isNotAWord()).toBe(true);
    expect(new Scrabble("word").isNotAWord()).toBe(false);
  });
});