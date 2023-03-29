// TODO create your mock api server here along with your mock data (the data should be in different files)
import { rest } from "msw";

const games = [
  {
    id: "0",
    player1_name: "John",
    player2_name: "Stamos",
    moves: ["X", "O", "O", "X", "X", "O", "O", "X", "X"],
    Date: new Date(),
  },
  {
    id: "1",
    player1_name: "John",
    player2_name: "Stamos",
    moves: ["O", "X", "O", "X", "X", "O", "O", "O", "X"],
    Date: new Date(),
  },
];

export const handlers = [
  rest.get("/api/game/list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(games));
  }),
  rest.get("/api/game/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([games[1]]));
  }),
  rest.put("/api/game/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([games[2]]));
  }),
];

/* 
 api/game/1 return false
api/game/1 return stuffi
api/game/1 put

export interface Game {
  id: string;
  player1_name: string;
  player2_name?: string | null;
  moves: Sign[] | string[];
  createdAt?: Date | number;
}
["X","X","X",
"X","X","X",
"X","X","X"]

*/
