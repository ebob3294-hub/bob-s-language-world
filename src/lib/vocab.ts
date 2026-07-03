// Vocabulary data for Learn with Bob.
// Each category has an emoji visual + English/French names.
// Emojis are used as the "image" so every noun type is supported without
// needing to generate hundreds of images.

export type Lang = "en" | "fr";

export interface VocabItem {
  id: string;
  emoji: string;
  en: string;
  fr: string;
}

export interface Category {
  id: string;
  emoji: string;
  color: "blue" | "green" | "orange" | "yellow" | "pink" | "purple";
  name: { en: string; fr: string };
  items: VocabItem[];
}

export const CATEGORIES: Category[] = [
  {
    id: "animals",
    emoji: "🦁",
    color: "green",
    name: { en: "Animals", fr: "Animaux" },
    items: [
      { id: "cat", emoji: "🐱", en: "Cat", fr: "Le Chat" },
      { id: "dog", emoji: "🐶", en: "Dog", fr: "Le Chien" },
      { id: "lion", emoji: "🦁", en: "Lion", fr: "Le Lion" },
      { id: "elephant", emoji: "🐘", en: "Elephant", fr: "L'Éléphant" },
      { id: "bird", emoji: "🐦", en: "Bird", fr: "L'Oiseau" },
      { id: "fish", emoji: "🐟", en: "Fish", fr: "Le Poisson" },
      { id: "rabbit", emoji: "🐰", en: "Rabbit", fr: "Le Lapin" },
      { id: "bear", emoji: "🐻", en: "Bear", fr: "L'Ours" },
      { id: "cow", emoji: "🐮", en: "Cow", fr: "La Vache" },
      { id: "horse", emoji: "🐴", en: "Horse", fr: "Le Cheval" },
      { id: "pig", emoji: "🐷", en: "Pig", fr: "Le Cochon" },
      { id: "monkey", emoji: "🐵", en: "Monkey", fr: "Le Singe" },
    ],
  },
  {
    id: "clothes",
    emoji: "👕",
    color: "blue",
    name: { en: "Clothes", fr: "Vêtements" },
    items: [
      { id: "shirt", emoji: "👕", en: "Shirt", fr: "La Chemise" },
      { id: "pants", emoji: "👖", en: "Pants", fr: "Le Pantalon" },
      { id: "dress", emoji: "👗", en: "Dress", fr: "La Robe" },
      { id: "hat", emoji: "🎩", en: "Hat", fr: "Le Chapeau" },
      { id: "shoes", emoji: "👟", en: "Shoes", fr: "Les Chaussures" },
      { id: "socks", emoji: "🧦", en: "Socks", fr: "Les Chaussettes" },
      { id: "coat", emoji: "🧥", en: "Coat", fr: "Le Manteau" },
      { id: "gloves", emoji: "🧤", en: "Gloves", fr: "Les Gants" },
      { id: "scarf", emoji: "🧣", en: "Scarf", fr: "L'Écharpe" },
    ],
  },
  {
    id: "kitchen",
    emoji: "🍳",
    color: "orange",
    name: { en: "Kitchen", fr: "Cuisine" },
    items: [
      { id: "spoon", emoji: "🥄", en: "Spoon", fr: "La Cuillère" },
      { id: "fork", emoji: "🍴", en: "Fork", fr: "La Fourchette" },
      { id: "knife", emoji: "🔪", en: "Knife", fr: "Le Couteau" },
      { id: "plate", emoji: "🍽️", en: "Plate", fr: "L'Assiette" },
      { id: "cup", emoji: "☕", en: "Cup", fr: "La Tasse" },
      { id: "pan", emoji: "🍳", en: "Pan", fr: "La Poêle" },
      { id: "pot", emoji: "🍲", en: "Pot", fr: "La Casserole" },
      { id: "kettle", emoji: "🫖", en: "Kettle", fr: "La Théière" },
    ],
  },
  {
    id: "food",
    emoji: "🍎",
    color: "pink",
    name: { en: "Food", fr: "Nourriture" },
    items: [
      { id: "apple", emoji: "🍎", en: "Apple", fr: "La Pomme" },
      { id: "banana", emoji: "🍌", en: "Banana", fr: "La Banane" },
      { id: "bread", emoji: "🍞", en: "Bread", fr: "Le Pain" },
      { id: "cheese", emoji: "🧀", en: "Cheese", fr: "Le Fromage" },
      { id: "egg", emoji: "🥚", en: "Egg", fr: "L'Œuf" },
      { id: "milk", emoji: "🥛", en: "Milk", fr: "Le Lait" },
      { id: "carrot", emoji: "🥕", en: "Carrot", fr: "La Carotte" },
      { id: "grapes", emoji: "🍇", en: "Grapes", fr: "Les Raisins" },
      { id: "pizza", emoji: "🍕", en: "Pizza", fr: "La Pizza" },
      { id: "cake", emoji: "🍰", en: "Cake", fr: "Le Gâteau" },
    ],
  },
  {
    id: "colors",
    emoji: "🎨",
    color: "purple",
    name: { en: "Colors", fr: "Couleurs" },
    items: [
      { id: "red", emoji: "🟥", en: "Red", fr: "Rouge" },
      { id: "blue", emoji: "🟦", en: "Blue", fr: "Bleu" },
      { id: "green", emoji: "🟩", en: "Green", fr: "Vert" },
      { id: "yellow", emoji: "🟨", en: "Yellow", fr: "Jaune" },
      { id: "orange", emoji: "🟧", en: "Orange", fr: "Orange" },
      { id: "purple", emoji: "🟪", en: "Purple", fr: "Violet" },
      { id: "black", emoji: "⬛", en: "Black", fr: "Noir" },
      { id: "white", emoji: "⬜", en: "White", fr: "Blanc" },
    ],
  },
  {
    id: "numbers",
    emoji: "🔢",
    color: "yellow",
    name: { en: "Numbers", fr: "Nombres" },
    items: [
      { id: "1", emoji: "1️⃣", en: "One", fr: "Un" },
      { id: "2", emoji: "2️⃣", en: "Two", fr: "Deux" },
      { id: "3", emoji: "3️⃣", en: "Three", fr: "Trois" },
      { id: "4", emoji: "4️⃣", en: "Four", fr: "Quatre" },
      { id: "5", emoji: "5️⃣", en: "Five", fr: "Cinq" },
      { id: "6", emoji: "6️⃣", en: "Six", fr: "Six" },
      { id: "7", emoji: "7️⃣", en: "Seven", fr: "Sept" },
      { id: "8", emoji: "8️⃣", en: "Eight", fr: "Huit" },
      { id: "9", emoji: "9️⃣", en: "Nine", fr: "Neuf" },
      { id: "10", emoji: "🔟", en: "Ten", fr: "Dix" },
    ],
  },
  {
    id: "body",
    emoji: "👋",
    color: "orange",
    name: { en: "Body", fr: "Corps" },
    items: [
      { id: "hand", emoji: "✋", en: "Hand", fr: "La Main" },
      { id: "foot", emoji: "🦶", en: "Foot", fr: "Le Pied" },
      { id: "eye", emoji: "👁️", en: "Eye", fr: "L'Œil" },
      { id: "ear", emoji: "👂", en: "Ear", fr: "L'Oreille" },
      { id: "nose", emoji: "👃", en: "Nose", fr: "Le Nez" },
      { id: "mouth", emoji: "👄", en: "Mouth", fr: "La Bouche" },
      { id: "tooth", emoji: "🦷", en: "Tooth", fr: "La Dent" },
      { id: "brain", emoji: "🧠", en: "Brain", fr: "Le Cerveau" },
    ],
  },
  {
    id: "vehicles",
    emoji: "🚗",
    color: "blue",
    name: { en: "Vehicles", fr: "Véhicules" },
    items: [
      { id: "car", emoji: "🚗", en: "Car", fr: "La Voiture" },
      { id: "bus", emoji: "🚌", en: "Bus", fr: "Le Bus" },
      { id: "bike", emoji: "🚲", en: "Bike", fr: "Le Vélo" },
      { id: "plane", emoji: "✈️", en: "Plane", fr: "L'Avion" },
      { id: "train", emoji: "🚂", en: "Train", fr: "Le Train" },
      { id: "boat", emoji: "⛵", en: "Boat", fr: "Le Bateau" },
    ],
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<string, Category>;

export function getCategory(id: string): Category | undefined {
  return CATEGORY_MAP[id];
}

// Speak a word using the browser's Web Speech API. Safe to no-op on SSR.
export function speak(text: string, lang: Lang) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === "en" ? "en-US" : "fr-FR";
    utter.rate = 0.85;
    utter.pitch = 1.1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch {
    // Ignore synthesis errors — feature is a bonus, not required.
  }
}

// Strip French articles ("Le ", "La ", "L'", "Les ") for cleaner speech.
export function stripArticle(text: string): string {
  return text.replace(/^(Le |La |L'|Les )/i, "");
}
