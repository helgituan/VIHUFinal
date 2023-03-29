import { describe, expect, it } from "vitest";
//import {handlers} from "../../../mocks/index"
import { setupServer } from "msw/node";
import {
  calculateWinner,
  getPlayerNameFromSign,
  calculateDraw,
  getWhosTurnItIs,
  getRandomPepTalk,
} from "../gameUtils";
import { EMOJI, pepTalks, Sign } from "../constants";

describe("getWhosTurnItIs", () => {
  it("should return Sign.X for a new game", () => {
    const moves: string[] = [];
    expect(getWhosTurnItIs(moves)).toBe(Sign.X);
  });

  it("should return Sign.O after the first move (Sign.X)", () => {
    const moves: (string | Sign)[] = [Sign.X];
    expect(getWhosTurnItIs(moves)).toBe(Sign.O);
  });

  it("should return Sign.X after the second move (Sign.O)", () => {
    const moves: (string | Sign)[] = [Sign.X, Sign.O];
    expect(getWhosTurnItIs(moves)).toBe(Sign.X);
  });

  it("should return Sign.O after the third move (Sign.X, Sign.O)", () => {
    const moves: (string | Sign)[] = [Sign.X, Sign.O, Sign.X];
    expect(getWhosTurnItIs(moves)).toBe(Sign.O);
  });
});

describe("Calculate the winner", () => {
  it("Lul No winner here", () => {
    const moves: (string | Sign)[] = [Sign.X];
    expect(calculateWinner(moves)).toBe(null);
  });

  it("X gonna give it to ya.(DMX) ", () => {
    const moves: (string | Sign)[] = [
      Sign.X,
      Sign.O,
      Sign.X,
      Sign.O,
      Sign.X,
      Sign.O,
      Sign.X,
    ];
    expect(calculateWinner(moves)).toBe(Sign.X);
  });
});
