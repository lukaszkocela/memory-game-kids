export type Category =
  | "animals"
  | "colors"
  | "numbers"
  | "food"
  | "body"
  | "family"
  | "actions"
  | "nature";

export interface WordCard {
  emoji: string;
  word: string;
  /** Polskie tłumaczenie — przydatne dla trybu z podpowiedziami */
  pl: string;
  category: Category;
}

/** Etykiety kategorii (EN + PL) — do ekranu wyboru kategorii */
export const CATEGORY_LABELS: Record<
  Category,
  { en: string; pl: string; icon: string }
> = {
  animals: { en: "Animals", pl: "Zwierzęta", icon: "🐶" },
  colors: { en: "Colors", pl: "Kolory", icon: "🎨" },
  numbers: { en: "Numbers", pl: "Liczby", icon: "🔢" },
  food: { en: "Food", pl: "Jedzenie", icon: "🍎" },
  body: { en: "Body", pl: "Ciało", icon: "✋" },
  family: { en: "Family", pl: "Rodzina", icon: "👨‍👩‍👧" },
  actions: { en: "Actions", pl: "Czynności", icon: "🏃" },
  nature: { en: "Nature", pl: "Przyroda", icon: "🌳" },
};

/**
 * Słownik gry. Aby dodać nowe słowa, po prostu dopisz kolejne obiekty.
 * Gra losowo wybiera PAIRS słów z wybranej puli przy każdej rozgrywce.
 */
export const DECK: WordCard[] = [
  // ── Animals ──
  { emoji: "🐱", word: "Cat", pl: "Kot", category: "animals" },
  { emoji: "🐶", word: "Dog", pl: "Pies", category: "animals" },
  { emoji: "🐠", word: "Fish", pl: "Ryba", category: "animals" },
  { emoji: "🦋", word: "Butterfly", pl: "Motyl", category: "animals" },
  { emoji: "🐰", word: "Rabbit", pl: "Królik", category: "animals" },
  { emoji: "🐻", word: "Bear", pl: "Niedźwiedź", category: "animals" },
  { emoji: "🦁", word: "Lion", pl: "Lew", category: "animals" },
  { emoji: "🐸", word: "Frog", pl: "Żaba", category: "animals" },
  { emoji: "🐴", word: "Horse", pl: "Koń", category: "animals" },
  { emoji: "🐮", word: "Cow", pl: "Krowa", category: "animals" },
  { emoji: "🐷", word: "Pig", pl: "Świnia", category: "animals" },
  { emoji: "🐔", word: "Chicken", pl: "Kura", category: "animals" },
  { emoji: "🦆", word: "Duck", pl: "Kaczka", category: "animals" },
  { emoji: "🐭", word: "Mouse", pl: "Mysz", category: "animals" },
  { emoji: "🐘", word: "Elephant", pl: "Słoń", category: "animals" },
  { emoji: "🐵", word: "Monkey", pl: "Małpa", category: "animals" },

  // ── Colors ──
  { emoji: "🔴", word: "Red", pl: "Czerwony", category: "colors" },
  { emoji: "🔵", word: "Blue", pl: "Niebieski", category: "colors" },
  { emoji: "🟢", word: "Green", pl: "Zielony", category: "colors" },
  { emoji: "🟡", word: "Yellow", pl: "Żółty", category: "colors" },
  { emoji: "🟠", word: "Orange", pl: "Pomarańczowy", category: "colors" },
  { emoji: "🟣", word: "Purple", pl: "Fioletowy", category: "colors" },
  { emoji: "🟤", word: "Brown", pl: "Brązowy", category: "colors" },
  { emoji: "⚫", word: "Black", pl: "Czarny", category: "colors" },
  { emoji: "⚪", word: "White", pl: "Biały", category: "colors" },
  { emoji: "🩷", word: "Pink", pl: "Różowy", category: "colors" },

  // ── Numbers ──
  { emoji: "1️⃣", word: "One", pl: "Jeden", category: "numbers" },
  { emoji: "2️⃣", word: "Two", pl: "Dwa", category: "numbers" },
  { emoji: "3️⃣", word: "Three", pl: "Trzy", category: "numbers" },
  { emoji: "4️⃣", word: "Four", pl: "Cztery", category: "numbers" },
  { emoji: "5️⃣", word: "Five", pl: "Pięć", category: "numbers" },
  { emoji: "6️⃣", word: "Six", pl: "Sześć", category: "numbers" },
  { emoji: "7️⃣", word: "Seven", pl: "Siedem", category: "numbers" },
  { emoji: "8️⃣", word: "Eight", pl: "Osiem", category: "numbers" },
  { emoji: "9️⃣", word: "Nine", pl: "Dziewięć", category: "numbers" },
  { emoji: "🔟", word: "Ten", pl: "Dziesięć", category: "numbers" },

  // ── Food ──
  { emoji: "🍎", word: "Apple", pl: "Jabłko", category: "food" },
  { emoji: "🍌", word: "Banana", pl: "Banan", category: "food" },
  { emoji: "🍊", word: "Orange", pl: "Pomarańcza", category: "food" },
  { emoji: "🍓", word: "Strawberry", pl: "Truskawka", category: "food" },
  { emoji: "🍇", word: "Grapes", pl: "Winogrona", category: "food" },
  { emoji: "🍉", word: "Watermelon", pl: "Arbuz", category: "food" },
  { emoji: "🥕", word: "Carrot", pl: "Marchewka", category: "food" },
  { emoji: "🍞", word: "Bread", pl: "Chleb", category: "food" },
  { emoji: "🧀", word: "Cheese", pl: "Ser", category: "food" },
  { emoji: "🥚", word: "Egg", pl: "Jajko", category: "food" },
  { emoji: "🥛", word: "Milk", pl: "Mleko", category: "food" },
  { emoji: "🍰", word: "Cake", pl: "Ciasto", category: "food" },
  { emoji: "🍪", word: "Cookie", pl: "Ciastko", category: "food" },
  { emoji: "🍕", word: "Pizza", pl: "Pizza", category: "food" },
  { emoji: "🍦", word: "Ice cream", pl: "Lody", category: "food" },
  { emoji: "💧", word: "Water", pl: "Woda", category: "food" },

  // ── Body ──
  { emoji: "👁️", word: "Eye", pl: "Oko", category: "body" },
  { emoji: "👃", word: "Nose", pl: "Nos", category: "body" },
  { emoji: "👄", word: "Mouth", pl: "Usta", category: "body" },
  { emoji: "👂", word: "Ear", pl: "Ucho", category: "body" },
  { emoji: "✋", word: "Hand", pl: "Ręka", category: "body" },
  { emoji: "🦶", word: "Foot", pl: "Stopa", category: "body" },
  { emoji: "🦵", word: "Leg", pl: "Noga", category: "body" },
  { emoji: "💇", word: "Hair", pl: "Włosy", category: "body" },
  { emoji: "🦷", word: "Tooth", pl: "Ząb", category: "body" },
  { emoji: "🧠", word: "Head", pl: "Głowa", category: "body" },

  // ── Family ──
  { emoji: "👩", word: "Mother", pl: "Mama", category: "family" },
  { emoji: "👨", word: "Father", pl: "Tata", category: "family" },
  { emoji: "👧", word: "Sister", pl: "Siostra", category: "family" },
  { emoji: "👦", word: "Brother", pl: "Brat", category: "family" },
  { emoji: "👵", word: "Grandma", pl: "Babcia", category: "family" },
  { emoji: "👴", word: "Grandpa", pl: "Dziadek", category: "family" },
  { emoji: "👶", word: "Baby", pl: "Dziecko", category: "family" },
  { emoji: "👨‍👩‍👧‍👦", word: "Family", pl: "Rodzina", category: "family" },

  // ── Actions ──
  { emoji: "🏃", word: "Run", pl: "Biegać", category: "actions" },
  { emoji: "🚶", word: "Walk", pl: "Chodzić", category: "actions" },
  { emoji: "🦘", word: "Jump", pl: "Skakać", category: "actions" },
  { emoji: "😴", word: "Sleep", pl: "Spać", category: "actions" },
  { emoji: "🍽️", word: "Eat", pl: "Jeść", category: "actions" },
  { emoji: "🥤", word: "Drink", pl: "Pić", category: "actions" },
  { emoji: "📖", word: "Read", pl: "Czytać", category: "actions" },
  { emoji: "✏️", word: "Write", pl: "Pisać", category: "actions" },
  { emoji: "🎵", word: "Sing", pl: "Śpiewać", category: "actions" },
  { emoji: "💃", word: "Dance", pl: "Tańczyć", category: "actions" },
  { emoji: "🏊", word: "Swim", pl: "Pływać", category: "actions" },
  { emoji: "😄", word: "Smile", pl: "Uśmiechać się", category: "actions" },

  // ── Nature ──
  { emoji: "☀️", word: "Sun", pl: "Słońce", category: "nature" },
  { emoji: "⭐", word: "Star", pl: "Gwiazda", category: "nature" },
  { emoji: "🌈", word: "Rainbow", pl: "Tęcza", category: "nature" },
  { emoji: "🌙", word: "Moon", pl: "Księżyc", category: "nature" },
  { emoji: "☁️", word: "Cloud", pl: "Chmura", category: "nature" },
  { emoji: "🌧️", word: "Rain", pl: "Deszcz", category: "nature" },
  { emoji: "❄️", word: "Snow", pl: "Śnieg", category: "nature" },
  { emoji: "🌳", word: "Tree", pl: "Drzewo", category: "nature" },
  { emoji: "🌸", word: "Flower", pl: "Kwiat", category: "nature" },
  { emoji: "🍃", word: "Leaf", pl: "Liść", category: "nature" },
  { emoji: "🏔️", word: "Mountain", pl: "Góra", category: "nature" },
  { emoji: "🌊", word: "Sea", pl: "Morze", category: "nature" },
];

export const PAIRS = 8;

/** Zwraca słowa z wybranych kategorii (lub całą pulę, gdy brak filtra). */
export function getDeck(categories?: Category[]): WordCard[] {
  if (!categories || categories.length === 0) return DECK;
  return DECK.filter((card) => categories.includes(card.category));
}

/** Lista wszystkich dostępnych kategorii. */
export const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];
