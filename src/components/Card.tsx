import { CSSProperties } from "react";
import { BoardCard } from "../hooks/useMemoryGame";

interface Props {
  card: BoardCard;
  onFlip: () => void;
}

export function Card({ card, onFlip }: Props) {
  const open = card.flipped || card.matched;

  return (
    <div style={styles.card} onClick={onFlip}>
      <div
        style={{
          ...styles.inner,
          transform: open ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div style={{ ...styles.face, ...styles.front }}>
          <span style={styles.q}>?</span>
        </div>
        <div
          style={{
            ...styles.face,
            ...styles.back,
            background: card.matched ? "#E8FFE3" : "#fff",
            borderColor: card.matched ? "#7ED957" : "#3A2E5C",
          }}
        >
          <span style={styles.emoji}>{card.emoji}</span>
          <span
            style={{
              ...styles.word,
              color: card.matched ? "#7ED957" : "#4D96FF",
            }}
          >
            {card.word}
          </span>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  card: { aspectRatio: "3/4", perspective: 900, cursor: "pointer" },
  inner: {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform .45s cubic-bezier(.6,-0.2,.3,1.4)",
    borderRadius: 18,
  },
  face: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "4px solid #3A2E5C",
    boxShadow: "0 6px 0 rgba(0,0,0,.18)",
  },
  front: {
    background:
      "repeating-linear-gradient(45deg,#FF8FB1 0 14px,#FF9DBB 14px 28px)",
  },
  back: { transform: "rotateY(180deg)", gap: 6, padding: 6 },
  q: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "clamp(32px,8vw,52px)",
    color: "#fff",
    textShadow: "0 3px 0 rgba(0,0,0,.18)",
  },
  emoji: { fontSize: "clamp(32px,9vw,56px)", lineHeight: 1 },
  word: {
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 800,
    fontSize: "clamp(14px,4vw,22px)",
    textAlign: "center",
  },
};
