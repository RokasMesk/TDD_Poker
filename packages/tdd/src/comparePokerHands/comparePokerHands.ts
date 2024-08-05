import {
  isFlush,
  isFourOfAKind,
  isRoyalFlush,
  isStraight,
  isStraightFlush,
  isFullHouse,
  isThreeOfAKind,
  isTwoPair,
  isPair,
} from '../pokerHands/pokerHands';
import { Card } from '../types';

const rankOrder = '23456789TJQKA';

export function comparePokerHands(a: string, b: string): number {
  const parsedHandA = parseHand(a);
  const parsedHandB = parseHand(b);

  const handValueA = evaluateHand(parsedHandA);
  const handValueB = evaluateHand(parsedHandB);

  if (handValueA !== handValueB) {
    return handValueA > handValueB ? 1 : -1;
  }

  return compareHighCards(parsedHandA, parsedHandB);
}

export function parseHand(hand: string): Card[] {
  return hand
    .split(' ')
    .map((card) => ({
      rank: card[0],
      suit: card[1],
      value: rankOrder.indexOf(card[0]),
    }))
    .sort((a, b) => a.value - b.value);
}

function evaluateHand(hand: Card[]): number {
  if (isRoyalFlush(hand)) {
    return 9;
  }
  if (isStraightFlush(hand)) {
    return 8;
  }
  if (isFourOfAKind(hand)) {
    return 7;
  }
  if (isFullHouse(hand)) {
    return 6;
  }
  if (isFlush(hand)) {
    return 5;
  }
  if (isStraight(hand)) {
    return 4;
  }
  if (isThreeOfAKind(hand)) {
    return 3;
  }
  if (isTwoPair(hand)) {
    return 2;
  }
  if (isPair(hand)) {
    return 1;
  }
  return 0;
}

function compareHighCards(handA: Card[], handB: Card[]): number {
  for (let i = 4; i >= 0; i--) {
    if (handA[i].value !== handB[i].value) {
      return handA[i].value > handB[i].value ? 1 : -1;
    }
  }
  return 0;
}
