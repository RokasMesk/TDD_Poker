import { Card } from '../types';

export function isFlush(hand: Card[]): boolean {
  const suit = hand[0].suit;
  for (let i = 1; i < hand.length; i++) {
    if (hand[i].suit !== suit) {
      return false;
    }
  }
  return true;
}

export function isFourOfAKind(hand: Card[]): boolean {
  hand.sort((a, b) => a.value - b.value);
  for (let i = 0; i < 3; i++) {
    if (hand[i].rank !== hand[i + 1].rank) {
      return false;
    }
  }
  return true;
}

export function isFullHouse(hand: Card[]): boolean {
  if (isThreeOfAKind(hand)) {
    const threeOfAKind = hand[2].rank;
    hand = hand.filter((card) => card.rank !== threeOfAKind);
    return isPair(hand);
  }
  return false;
}

export function isPair(hand: Card[]): boolean {
  for (let i = 0; i < hand.length; i++) {
    for (let j = i + 1; j < hand.length; j++) {
      if (hand[i].rank === hand[j].rank) {
        return true;
      }
    }
  }
  return false;
}

export function isRoyalFlush(hand: Card[]): boolean {
  return isStraightFlush(hand) && hand[4].rank === 'A';
}

export function isStraight(hand: Card[]): boolean {
  for (let i = 0; i < 4; i++) {
    if (hand[i].value + 1 !== hand[i + 1].value) {
      return false;
    }
  }
  return true;
}

export function isStraightFlush(hand: Card[]): boolean {
  return isFlush(hand) && isStraight(hand);
}

export function isThreeOfAKind(hand: Card[]): boolean {
  for (const card of hand) {
    let count = 0;
    for (const otherCard of hand) {
      if (card.rank === otherCard.rank) {
        count++;
        if (count === 3) {
          return true;
        }
      }
    }
  }
  return false;
}

export function isTwoPair(hand: Card[]): boolean {
  let pairs = 0;
  for (let i = 0; i < hand.length; i++) {
    for (let j = i + 1; j < hand.length; j++) {
      if (hand[i].rank === hand[j].rank) {
        pairs++;
        if (pairs === 2) {
          return true;
        }
        break;
      }
    }
  }
  return false;
}
