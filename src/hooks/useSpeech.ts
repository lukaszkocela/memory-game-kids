import { useCallback } from "react";

/**
 * Hook obsługujący wymowę angielskich słów przez Web Speech API.
 * Działa w przeglądarce; na telefonach uruchamia się po pierwszej interakcji.
 */
export function useSpeech() {
  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85; // wolniej, żeby dziecko nadążyło
    utterance.pitch = 1.15; // lekko wyższy, przyjazny ton
    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak };
}
