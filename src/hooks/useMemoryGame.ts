import { useState, useEffect, useCallback } from "react";
import { DECK, PAIRS, WordCard } from "../data/deck";
import { useSpeech } from "./useSpeech";

export interface BoardCard extends WordCard {
  uid: number;
  flipped: boolean;
  matched: boolean;
}

export interface GameState {
  cards: BoardCard[];
  score: number;
  moves: number;
  matchedPairs: number;
  won: boolean;
  stars: string;
  winMessage: string;
  flipCard: (index: number) => void;
  newGame: () => void;
  totalPairs: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildBoard(): BoardCard[] {
  const chosen = shuffle(DECK).slice(0, PAIRS);
  return shuffle([...chosen, ...chosen]).map((card, i) => ({
    ...card,
    uid: i,
    flipped: false,
    matched: false,
  }));
}

/**
 * Zawiera całą logikę gry memory: stan kart, dopasowywanie par,
 * punktację i warunek wygranej. Wydzielony z UI, więc łatwo go
 * przetestować lub użyć z innym interfejsem.
 */
export function useMemoryGame(): GameState {
  const { speak } = useSpeech();
  const [cards, setCards] = useState<BoardCard[]>(buildBoard);
  const [first, setFirst] = useState<number | null>(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const matchedPairs = cards.filter((c) => c.matched).length / 2;

  const newGame = useCallback(() => {
    setCards(buildBoard());
    setFirst(null);
    setLock(false);
    setScore(0);
    setMoves(0);
    setWon(false);
  }, []);

  const flipCard = useCallback(
    (index: number) => {
      if (lock) return;

      setCards((current) => {
        const card = current[index];
        if (card.flipped || card.matched) return current;

        speak(card.word);
        const next = current.map((c, i) =>
          i === index ? { ...c, flipped: true } : c
        );

        if (first === null) {
          setFirst(index);
          return next;
        }

        setLock(true);
        setMoves((m) => m + 1);
        const a = next[first];
        const b = next[index];

        if (a.word === b.word) {
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c) =>
                c.word === a.word ? { ...c, matched: true } : c
              )
            );
            setScore((s) => s + 10);
            setFirst(null);
            setLock(false);
          }, 650);
        } else {
          const firstIdx = first;
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c, i) =>
                i === firstIdx || i === index
                  ? { ...c, flipped: false }
                  : c
              )
            );
            setFirst(null);
            setLock(false);
          }, 1000);
        }

        return next;
      });
    },
    [first, lock, speak]
  );

  useEffect(() => {
    if (matchedPairs === PAIRS && !won) {
      setWon(true);
      setTimeout(() => speak("You win! Great job!"), 400);
    }
  }, [matchedPairs, won, speak]);

  const stars = moves > 24 ? "⭐" : moves > 16 ? "⭐⭐" : "⭐⭐⭐";
  const winMessage =
    moves > 24
      ? "Good try! Play again to do better! 💪"
      : moves > 16
      ? "Well done! Keep practicing! 🎈"
      : "Amazing! You are an English star! 🌟";

  return {
    cards,
    score,
    moves,
    matchedPairs,
    won,
    stars,
    winMessage,
    flipCard,
    newGame,
    totalPairs: PAIRS,
  };
}
