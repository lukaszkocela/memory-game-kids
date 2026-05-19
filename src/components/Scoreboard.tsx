import { CSSProperties } from "react";

interface ChipProps {
  icon: string;
  label: string;
  value: string | number;
}

function Chip({ icon, label, value }: ChipProps) {
  return (
    <div style={styles.chip}>
      <span>{icon}</span>
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <small style={{ opacity: 0.6, fontSize: ".7em" }}>{label}</small>
        <b>{value}</b>
      </span>
    </div>
  );
}

interface Props {
  score: number;
  moves: number;
  matchedPairs: number;
  totalPairs: number;
}

export function Scoreboard({ score, moves, matchedPairs, totalPairs }: Props) {
  return (
    <div style={styles.hud}>
      <Chip icon="⭐" label="Score" value={score} />
      <Chip icon="🔄" label="Tries" value={moves} />
      <Chip icon="🏆" label="Pairs" value={`${matchedPairs}/${totalPairs}`} />
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  hud: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 },
  chip: {
    background: "#fff",
    borderRadius: 18,
    padding: "8px 16px",
    fontWeight: 700,
    fontSize: "clamp(13px,3.6vw,17px)",
    boxShadow: "0 5px 0 rgba(0,0,0,.12)",
    display: "flex",
    alignItems: "center",
    gap: 7,
    border: "3px solid #3A2E5C",
  },
};
