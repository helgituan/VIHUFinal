import { Game } from "../lib/gameStore";
import {
  calculateWinner,
  getPlayerNameFromSign,
  getRandomPepTalk,
  getWhosTurnItIs,
  calculateDraw,
} from "../utils/gameUtils";

import styles from "../styles/Home.module.css";
import { WinnerAnnouncement } from "./WinnerAnnouncement";

interface Props {
  game: Game;
}

export function BoardHeader({ game }: Props) {
  const nextTurnSign = getWhosTurnItIs(game.moves);
  const winner = calculateWinner(game.moves);
  const draw = calculateDraw(game.moves);
  if (winner) {
    return <WinnerAnnouncement winner={winner} game={game} />;
  }
  if (draw) {
    return <h2 data-testid={"draw"}>ITS A DRAW 🤮</h2>;
  }
  return (
    <h1 className={styles.title}>
      {getRandomPepTalk()}
      <div>{getPlayerNameFromSign(nextTurnSign, game)}</div>
    </h1>
  );
}
