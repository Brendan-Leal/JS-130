let Anagram = require('./anagrams.js');

describe("Anagram", () => {
  test("No matches returns empty array", () => {
    let detector = new Anagram('diaper');
    expect(detector.match(['hello', 'world', 'zombies', 'pants'])).toEqual([]);
  });

  test("Detect simple anagram", () => {
    let detector = new Anagram('ant');
    let anagrams = detector.match(['tan', 'stand', 'at']);
    expect(anagrams).toEqual(['tan']);
  });

  test("Detect multiple anagrams", () => {
    let detector = new Anagram('master');
    let anagrams = detector.match(['stream', 'pigeon', 'maters']);
    expect(anagrams.sort()).toEqual(['maters', 'stream']);
  });

  test("Do not confuse different duplicates", () => {
    let detector = new Anagram('galea');
    expect(detector.match(['eagle'])).toEqual([]);
  });

  test("Identical word is not anagram", () => {
    let detector = new Anagram('corn');
    let anagrams = detector.match(['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park']);
    expect(anagrams).toEqual(['cron']);
  });

  test("Eliminate anagrams with same checksum", () => {
    let detector = new Anagram('mass');
    expect(detector.match(['last'])).toEqual([]);
  });

  test("Eliminate anagram subsets", () => {
    let detector = new Anagram('good');
    expect(detector.match(['dog', 'goody'])).toEqual([]);
  });

  test("Detect anagram", () => {
    let detector = new Anagram('listen');
    let anagrams = detector.match(['enlists', 'google', 'inlets', 'banana']);
    expect(anagrams).toEqual(['inlets']);
  });

  test("Multiple anagrams", () => {
    let detector = new Anagram('allergy');
    let anagrams = detector.match(['gallery', 'ballerina', 'regally',
                                   'clergy', 'largely', 'leading']);
    expect(anagrams.sort()).toEqual(['gallery', 'largely', 'regally']);
  });

  test("Anagrams are case-insensitive", () => {
    let detector = new Anagram('Orchestra');
    let anagrams = detector.match(['cashregister', 'Carthorse', 'radishes']);
    expect(anagrams).toEqual(['Carthorse'])
  });

  test("the word property is made lowercase when we create an Anagram object", () => {
    let detector = new Anagram("ALLCAPS");
    expect(detector.word).toBe("allcaps");
  });

  test("areEqualArrays() returns true if 2 arrays have the same elements, false otherwise", () => {
    let detector = new Anagram("Test");

    expect(detector.areEqualArrays(["a", "b", "c"], ["a", "b", "c"])).toBe(true)
    expect(detector.areEqualArrays(["a", "b", "c", "1", "2", "3"], ["a", "b", "c"])).toBe(false)
    expect(detector.areEqualArrays(["a", "b", "c", "1"], ["a", "b", "c", "1"])).toBe(true)
  });

  test("isAnagram() returns true if 2 words are anagrams", () => {
    let detector = new Anagram("log");
    expect(detector.isAnagram("gol")).toBe(true);

    detector = new Anagram("allergy");
    expect(detector.isAnagram("gallery")).toBe(true);

    detector = new Anagram("dog");
    expect(detector.isAnagram("good")).toBe(false);
  });
});