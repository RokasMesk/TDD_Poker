import { comparePokerHands } from './comparePokerHands';

describe('Poker Hands', () => {
  describe('between two poker hands', () => {
    test('Straight flush vs Royal flush', () => {
      const firstHand = '2H 3H 4H 5H 6H';
      const secondHand = 'KS AS TS QS JS';
      const expectedResult = -1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Straight flush vs Four of a kind', () => {
      const firstHand = '2H 3H 4H 5H 6H';
      const secondHand = 'AS AD AC AH JD';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Full house vs Four of a kind', () => {
      const firstHand = 'AS AH 2H AD AC';
      const secondHand = 'JS JD JC JH 3D';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Full house vs Four of a kind (different suits)', () => {
      const firstHand = '2S AH 2H AS AC';
      const secondHand = 'JS JD JC JH AD';
      const expectedResult = -1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Full house vs Straight', () => {
      const firstHand = '2S AH 2H AS AC';
      const secondHand = '2H 3H 5H 6H 7H';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Flush vs Straight', () => {
      const firstHand = 'AS 3S 4S 8S 2S';
      const secondHand = '2H 3H 5H 6H 7H';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Straight vs Straight', () => {
      const firstHand = '2H 3H 5H 6H 7H';
      const secondHand = '2S 3H 4H 5S 6C';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Straight vs Straight (tie)', () => {
      const firstHand = '2S 3H 4H 5S 6C';
      const secondHand = '3D 4C 5H 6H 2S';
      const expectedResult = 0;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Straight vs Full house', () => {
      const firstHand = '2S 3H 4H 5S 6C';
      const secondHand = 'AH AC 5H 6H AS';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Two Pair vs Full house', () => {
      const firstHand = '2S 2H 4H 5S 4C';
      const secondHand = 'AH AC 5H 6H AS';
      const expectedResult = -1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Two Pair vs Two Pair', () => {
      const firstHand = '2S 2H 4H 5S 4C';
      const secondHand = 'AH AC 5H 6H 7S';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('Pair vs Two Pair', () => {
      const firstHand = '6S AD 7H 4S AS';
      const secondHand = 'AH AC 5H 6H 7S';
      const expectedResult = -1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('High Card vs Pair', () => {
      const firstHand = '2S AH 4H 5S KC';
      const secondHand = 'AH AC 5H 6H 7S';
      const expectedResult = -1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('High Card vs High Card', () => {
      const firstHand = '2S 3H 6H 7S 9C';
      const secondHand = '7H 3C TH 6H 9S';
      const expectedResult = -1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('High Card vs High Card (different ranks)', () => {
      const firstHand = '4S 5H 6H TS AC';
      const secondHand = '3S 5H 6H TS AC';
      const expectedResult = 1;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });

    test('High Card vs High Card (tie)', () => {
      const firstHand = '2S AH 4H 5S 6C';
      const secondHand = 'AD 4C 5H 6H 2C';
      const expectedResult = 0;
      const result = comparePokerHands(firstHand, secondHand);
      expect(result).toBe(expectedResult);
    });
  });
});
