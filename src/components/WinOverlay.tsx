import { CSSProperties, useEffect, useRef } from "react";

interface Props {
  stars: string;
  message: string;
  score: number;
  onPlayAgain: () => void;
}

const CONFETTI_COLORS = [
  "#FF6B6B",
  "#4D96FF",
  "#7ED957",
  "#FFD56B",
  "#9B6DFF",
];

export function WinOverlay({ stars, message, score, onPlayAgain }: Props) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const pieces: HTMLDivElement[] = [];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("div");
      c.style.position = "fixed";
      c.style.top = "-20px";
      c.style.left = `${Math.random() * 100}vw`;
      c.style.width = "12px";
      c.style.height = "12px";
      c.style.zIndex = "60";
      c.style.pointerEvents = "none";
      c.style.background =
        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      c.style.animation = `fall ${2 + Math.random() * 2}s linear ${
        Math.random() * 1.2
      }s forwards`;
      document.body.appendChild(c);
      pieces.push(c);
    }
    const timer = setTimeout(() => {
      pieces.forEach((p) => p.remove());
    }, 5500);
    return () => {
      clearTimeout(timer);
      pieces.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div style={styles.overlay} ref={layerRef}>
      <div style={styles.winCard}>
        <div style={{ fontSize: 46, marginBottom: 10 }}>{stars}</div>
        <h2 style={styles.winTitle}>You Win!</h2>
        <p style={styles.winText}>
          {message} (Score: {score})
        </p>
        <button
          style={{ ...styles.btn, background: "#7ED957" }}
          onClick={onPlayAgain}
        >
          Play Again ▶️
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(58,46,92,.78)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    zIndex: 50,
    animation: "fade .4s ease",
  },
  winCard: {
    background: "#fff",
    border: "6px solid #3A2E5C",
    borderRadius: 28,
    padding: "34px 30px",
    boxShadow: "0 12px 0 rgba(0,0,0,.3)",
    textAlign: "center",
    maxWidth: 380,
  },
  winTitle: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "clamp(28px,7vw,44px)",
    color: "#FF6B6B",
    marginBottom: 8,
  },
  winText: {
    fontSize: "clamp(15px,4vw,19px)",
    fontWeight: 600,
    marginBottom: 20,
  },
  btn: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "clamp(14px,3.8vw,19px)",
    fontWeight: 800,
    color: "#fff",
    border: "4px solid #3A2E5C",
    borderRadius: 18,
    padding: "12px 26px",
    cursor: "pointer",
    boxShadow: "0 6px 0 rgba(0,0,0,.22)",
  },
};
