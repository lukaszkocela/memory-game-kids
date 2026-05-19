import { CSSProperties } from "react";
import { useMemoryGame } from "./hooks/useMemoryGame";
import { useSpeech } from "./hooks/useSpeech";
import { Card } from "./components/Card";
import { Scoreboard } from "./components/Scoreboard";
import { WinOverlay } from "./components/WinOverlay";

export default function App() {
  const game = useMemoryGame();
  const { speak } = useSpeech();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🎉 English Memory Game 🎉</h1>
      <div style={styles.subtitle}>
        Find the matching pairs! Listen and learn 🐱🔵 5️⃣
      </div>

      <Scoreboard
        score={game.score}
        moves={game.moves}
        matchedPairs={game.matchedPairs}
        totalPairs={game.totalPairs}
      />

      <div style={styles.board}>
        {game.cards.map((card, i) => (
          <Card key={card.uid} card={card} onFlip={() => game.flipCard(i)} />
        ))}
      </div>

      <div style={styles.controls}>
        <button
          style={{ ...styles.btn, background: "#7ED957" }}
          onClick={game.newGame}
        >
          🔁 New Game
        </button>
        <button
          style={styles.btn}
          onClick={() => speak("Tap the cards to find pairs!")}
        >
          🔊 Help
        </button>
      </div>

      {game.won && (
        <WinOverlay
          stars={game.stars}
          message={game.winMessage}
          score={game.score}
          onPlayAgain={game.newGame}
        />
      )}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "clamp(26px,6vw,44px)",
    color: "#fff",
    textShadow: "0 4px 0 #FF6B6B, 0 7px 14px rgba(0,0,0,.2)",
    textAlign: "center",
    marginTop: 6,
  },
  subtitle: {
    fontSize: "clamp(13px,3.4vw,17px)",
    background: "rgba(255,255,255,.55)",
    padding: "5px 16px",
    borderRadius: 999,
    margin: "8px 0 14px",
    fontWeight: 600,
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "clamp(8px,2.2vw,15px)",
    width: "min(560px,94vw)",
    marginBottom: 20,
  },
  controls: { display: "flex", gap: 12, flexWrap: "wrap" },
  btn: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "clamp(14px,3.8vw,19px)",
    fontWeight: 800,
    color: "#fff",
    background: "#4D96FF",
    border: "4px solid #3A2E5C",
    borderRadius: 18,
    padding: "12px 26px",
    cursor: "pointer",
    boxShadow: "0 6px 0 rgba(0,0,0,.22)",
  },
};
