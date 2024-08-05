import { parseHand } from '../comparePokerHands/comparePokerHands';
import { isFourOfAKind, isFullHouse, isFlush } from './pokerHands';

describe('isFourOfAKind', () => {
  it('should return true for a hand with four of a kind', () => {
    const hand = '2H 2D 2S 2C 3D';
    const parsedHand = parseHand(hand);
    expect(isFourOfAKind(parsedHand)).toBe(true);
  });

  it('should return false for a hand without four of a kind', () => {
    const hand = '2H 2D 2S 3C 4D';
    const parsedHand = parseHand(hand);
    expect(isFourOfAKind(parsedHand)).toBe(false);
  });

  it('should return false for a full house', () => {
    const hand = '2H 2D 2S 3C 3D';
    const parsedHand = parseHand(hand);
    expect(isFourOfAKind(parsedHand)).toBe(false);
  });

  it('should return false for different suits four of a kind', () => {
    const hand = 'AS AH 2H AD AC';
    const parsedHand = parseHand(hand);
    expect(isFourOfAKind(parsedHand)).toBe(false);
  });
});

describe('isFullHouse', () => {
  it('should return true for a hand with a full house', () => {
    const hand = '2H 2D 2S 3C 3D';
    const parsedHand = parseHand(hand);
    expect(isFullHouse(parsedHand)).toBe(true);
  });

  it('should return false for a hand without a full house', () => {
    const hand = '2H 2D 2S 3C 4D';
    const parsedHand = parseHand(hand);
    expect(isFullHouse(parsedHand)).toBe(false);
  });

  it('should return false for an empty hand', () => {
    const hand = '';
    const parsedHand = parseHand(hand);
    expect(isFullHouse(parsedHand)).toBe(false);
  });

  it('should return false for four of a kind', () => {
    const hand = '2H 2D 2S 2C 3D';
    const parsedHand = parseHand(hand);
    expect(isFullHouse(parsedHand)).toBe(false);
  });

  it('should return false for different suits four of a kind', () => {
    const hand = 'AS AH 2H AD AC';
    const parsedHand = parseHand(hand);
    expect(isFullHouse(parsedHand)).toBe(false);
  });
  describe('isFlush', () => {
    it('should return true for a hand with a flush', () => {
      const hand = '2H 3H 4H 5H 6H';
      const parsedHand = parseHand(hand);
      expect(isFlush(parsedHand)).toBe(true);
    });

    it('should return false for a hand without a flush', () => {
      const hand = '2H 3H 4H 5H 6D';
      const parsedHand = parseHand(hand);
      expect(isFlush(parsedHand)).toBe(false);
    });
  });
});
