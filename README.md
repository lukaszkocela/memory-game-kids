# 🎉 English Memory Game

Interaktywna gra typu *memory* do nauki angielskiego dla dzieci (ok. 7 lat).
Zbudowana w **React + TypeScript + Vite**.

## Funkcje

- 🧠 Gra memory — odsłaniasz pary kart (obrazek + angielskie słowo)
- 🔊 Wymowa głosowa — każde słowo jest czytane na głos (Web Speech API)
- 🌍 Pełna immersja angielska — wszystkie komunikaty po angielsku
- 🎨 Mieszanka słownictwa — zwierzęta, kolory, liczby, podstawowe słowa
- ⭐ Punkty, liczba prób i gwiazdki za wynik
- 🎈 Ekran zwycięstwa z konfetti
- 📱 Responsywne — działa na telefonie, tablecie i komputerze

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja otworzy się pod adresem `http://localhost:5173`.

Build produkcyjny:

```bash
npm run build
npm run preview
```

## Struktura projektu

```
src/
├── data/
│   └── deck.ts            # Słownik gry — tu dodajesz nowe słowa
├── hooks/
│   ├── useSpeech.ts       # Wymowa przez Web Speech API
│   └── useMemoryGame.ts   # Cała logika gry (stan, dopasowania, punkty)
├── components/
│   ├── Card.tsx           # Pojedyncza karta
│   ├── Scoreboard.tsx     # Pasek wyników
│   └── WinOverlay.tsx     # Ekran zwycięstwa + konfetti
├── App.tsx                # Złożenie całości
├── main.tsx               # Punkt wejścia React
└── styles.css             # Globalne style i animacje
```

## Baza słownictwa

Plik `src/data/deck.ts` zawiera **8 kategorii i ponad 90 słów**:

| Kategoria | EN | Liczba słów |
|-----------|-----|-----|
| `animals` | Zwierzęta | 16 |
| `colors`  | Kolory    | 10 |
| `numbers` | Liczby    | 10 |
| `food`    | Jedzenie  | 16 |
| `body`    | Ciało     | 10 |
| `family`  | Rodzina   | 8  |
| `actions` | Czynności | 12 |
| `nature`  | Przyroda  | 12 |

Każde słowo ma emoji, angielską nazwę, polskie tłumaczenie (`pl`)
i kategorię.

### Jak dodać nowe słowa

Dopisz kolejne obiekty do tablicy `DECK`:

```ts
{ emoji: "🍌", word: "Banana", pl: "Banan", category: "food" },
```

Gra automatycznie wylosuje słowa z puli przy każdej rozgrywce.
Możesz też zmienić `PAIRS`, aby zwiększyć lub zmniejszyć planszę.

### Pomocnicze funkcje

- `getDeck(categories?)` — zwraca słowa z wybranych kategorii
  (lub całą pulę, gdy brak filtra). Gotowe pod ekran wyboru kategorii.
- `CATEGORY_LABELS` — etykiety EN/PL + ikony dla każdej kategorii.
- `ALL_CATEGORIES` — lista wszystkich kategorii.

Pole `pl` (polskie tłumaczenie) jest gotowe pod tryb z podpowiedziami.

## Uwagi techniczne

- Wymowa głosowa wymaga przeglądarki obsługującej Web Speech API
  (Chrome, Edge, Safari). Na urządzeniach mobilnych dźwięk uruchamia
  się po pierwszym dotknięciu ekranu — to standardowe zachowanie przeglądarek.
- Logika gry jest wydzielona do hooka `useMemoryGame`, więc łatwo ją
  przetestować lub użyć z innym interfejsem. Dobry punkt startowy do
  kolejnych projektów edukacyjnych.
```
