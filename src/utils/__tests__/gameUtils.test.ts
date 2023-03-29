import {describe, expect, it} from "vitest";
//import {handlers} from "../../../mocks/index"
import {setupServer} from "msw/node";
import {calculateWinner, getPlayerNameFromSign, calculateDraw,getWhosTurnItIs,getRandomPepTalk} from "../gameUtils";
import {EMOJI, pepTalks, Sign} from "../constants";


describe("Date Utils", () => {
  // TODO add tests
  it("get current year", () => {
    expect(true).toBe(true);
  });
});
