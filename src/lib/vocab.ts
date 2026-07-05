// Vocabulary data for Learn with Bob.
// Emojis act as illustrations so every noun type is supported.

export type Lang = "en" | "fr" | "ar";

export interface VocabItem {
  id: string;
  emoji: string;
  en: string;
  fr: string;
  ar?: string;
}

export interface Category {
  id: string;
  emoji: string;
  color: "blue" | "green" | "orange" | "yellow" | "pink" | "purple";
  name: { en: string; fr: string; ar?: string };
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
      { id: "tiger", emoji: "🐯", en: "Tiger", fr: "Le Tigre" },
      { id: "elephant", emoji: "🐘", en: "Elephant", fr: "L'Éléphant" },
      { id: "giraffe", emoji: "🦒", en: "Giraffe", fr: "La Girafe" },
      { id: "zebra", emoji: "🦓", en: "Zebra", fr: "Le Zèbre" },
      { id: "bird", emoji: "🐦", en: "Bird", fr: "L'Oiseau" },
      { id: "fish", emoji: "🐟", en: "Fish", fr: "Le Poisson" },
      { id: "rabbit", emoji: "🐰", en: "Rabbit", fr: "Le Lapin" },
      { id: "bear", emoji: "🐻", en: "Bear", fr: "L'Ours" },
      { id: "panda", emoji: "🐼", en: "Panda", fr: "Le Panda" },
      { id: "cow", emoji: "🐮", en: "Cow", fr: "La Vache" },
      { id: "horse", emoji: "🐴", en: "Horse", fr: "Le Cheval" },
      { id: "pig", emoji: "🐷", en: "Pig", fr: "Le Cochon" },
      { id: "sheep", emoji: "🐑", en: "Sheep", fr: "Le Mouton" },
      { id: "goat", emoji: "🐐", en: "Goat", fr: "La Chèvre" },
      { id: "monkey", emoji: "🐵", en: "Monkey", fr: "Le Singe" },
      { id: "frog", emoji: "🐸", en: "Frog", fr: "La Grenouille" },
      { id: "snake", emoji: "🐍", en: "Snake", fr: "Le Serpent" },
      { id: "turtle", emoji: "🐢", en: "Turtle", fr: "La Tortue" },
      { id: "duck", emoji: "🦆", en: "Duck", fr: "Le Canard" },
      { id: "chicken", emoji: "🐔", en: "Chicken", fr: "La Poule" },
      { id: "owl", emoji: "🦉", en: "Owl", fr: "Le Hibou" },
      { id: "fox", emoji: "🦊", en: "Fox", fr: "Le Renard" },
      { id: "wolf", emoji: "🐺", en: "Wolf", fr: "Le Loup" },
      { id: "kangaroo", emoji: "🦘", en: "Kangaroo", fr: "Le Kangourou" },
      { id: "penguin", emoji: "🐧", en: "Penguin", fr: "Le Pingouin" },
      { id: "dolphin", emoji: "🐬", en: "Dolphin", fr: "Le Dauphin" },
      { id: "whale", emoji: "🐳", en: "Whale", fr: "La Baleine" },
      { id: "shark", emoji: "🦈", en: "Shark", fr: "Le Requin" },
      { id: "octopus", emoji: "🐙", en: "Octopus", fr: "La Pieuvre" },
      { id: "butterfly", emoji: "🦋", en: "Butterfly", fr: "Le Papillon" },
      { id: "bee", emoji: "🐝", en: "Bee", fr: "L'Abeille" },
      { id: "spider", emoji: "🕷️", en: "Spider", fr: "L'Araignée" },
      { id: "ant", emoji: "🐜", en: "Ant", fr: "La Fourmi" },
    ],
  },
  {
    id: "clothes",
    emoji: "👕",
    color: "blue",
    name: { en: "Clothes", fr: "Vêtements" },
    items: [
      { id: "shirt", emoji: "👕", en: "Shirt", fr: "La Chemise" },
      { id: "tshirt", emoji: "👔", en: "T-Shirt", fr: "Le T-shirt" },
      { id: "pants", emoji: "👖", en: "Pants", fr: "Le Pantalon" },
      { id: "shorts", emoji: "🩳", en: "Shorts", fr: "Le Short" },
      { id: "dress", emoji: "👗", en: "Dress", fr: "La Robe" },
      { id: "skirt", emoji: "👚", en: "Skirt", fr: "La Jupe" },
      { id: "hat", emoji: "🎩", en: "Hat", fr: "Le Chapeau" },
      { id: "cap", emoji: "🧢", en: "Cap", fr: "La Casquette" },
      { id: "shoes", emoji: "👟", en: "Shoes", fr: "Les Chaussures" },
      { id: "boots", emoji: "🥾", en: "Boots", fr: "Les Bottes" },
      { id: "sandals", emoji: "🩴", en: "Sandals", fr: "Les Sandales" },
      { id: "socks", emoji: "🧦", en: "Socks", fr: "Les Chaussettes" },
      { id: "coat", emoji: "🧥", en: "Coat", fr: "Le Manteau" },
      { id: "gloves", emoji: "🧤", en: "Gloves", fr: "Les Gants" },
      { id: "scarf", emoji: "🧣", en: "Scarf", fr: "L'Écharpe" },
      { id: "glasses", emoji: "👓", en: "Glasses", fr: "Les Lunettes" },
      { id: "bag", emoji: "👜", en: "Bag", fr: "Le Sac" },
      { id: "backpack", emoji: "🎒", en: "Backpack", fr: "Le Sac à Dos" },
      { id: "ring", emoji: "💍", en: "Ring", fr: "La Bague" },
      { id: "watch", emoji: "⌚", en: "Watch", fr: "La Montre" },
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
      { id: "bowl", emoji: "🥣", en: "Bowl", fr: "Le Bol" },
      { id: "cup", emoji: "☕", en: "Cup", fr: "La Tasse" },
      { id: "glass", emoji: "🥛", en: "Glass", fr: "Le Verre" },
      { id: "bottle", emoji: "🍾", en: "Bottle", fr: "La Bouteille" },
      { id: "pan", emoji: "🍳", en: "Pan", fr: "La Poêle" },
      { id: "pot", emoji: "🍲", en: "Pot", fr: "La Casserole" },
      { id: "kettle", emoji: "🫖", en: "Kettle", fr: "La Théière" },
      { id: "fridge", emoji: "🧊", en: "Fridge", fr: "Le Frigo" },
      { id: "oven", emoji: "🔥", en: "Oven", fr: "Le Four" },
      { id: "salt", emoji: "🧂", en: "Salt", fr: "Le Sel" },
    ],
  },
  {
    id: "food",
    emoji: "🍎",
    color: "pink",
    name: { en: "Food", fr: "Nourriture" },
    items: [
      { id: "bread", emoji: "🍞", en: "Bread", fr: "Le Pain" },
      { id: "cheese", emoji: "🧀", en: "Cheese", fr: "Le Fromage" },
      { id: "egg", emoji: "🥚", en: "Egg", fr: "L'Œuf" },
      { id: "milk", emoji: "🥛", en: "Milk", fr: "Le Lait" },
      { id: "butter", emoji: "🧈", en: "Butter", fr: "Le Beurre" },
      { id: "pizza", emoji: "🍕", en: "Pizza", fr: "La Pizza" },
      { id: "burger", emoji: "🍔", en: "Burger", fr: "Le Burger" },
      { id: "fries", emoji: "🍟", en: "Fries", fr: "Les Frites" },
      { id: "hotdog", emoji: "🌭", en: "Hot Dog", fr: "Le Hot-dog" },
      { id: "sandwich", emoji: "🥪", en: "Sandwich", fr: "Le Sandwich" },
      { id: "pasta", emoji: "🍝", en: "Pasta", fr: "Les Pâtes" },
      { id: "rice", emoji: "🍚", en: "Rice", fr: "Le Riz" },
      { id: "soup", emoji: "🍜", en: "Soup", fr: "La Soupe" },
      { id: "cake", emoji: "🍰", en: "Cake", fr: "Le Gâteau" },
      { id: "cookie", emoji: "🍪", en: "Cookie", fr: "Le Biscuit" },
      { id: "chocolate", emoji: "🍫", en: "Chocolate", fr: "Le Chocolat" },
      { id: "icecream", emoji: "🍦", en: "Ice Cream", fr: "La Glace" },
      { id: "honey", emoji: "🍯", en: "Honey", fr: "Le Miel" },
    ],
  },
  {
    id: "fruits",
    emoji: "🍎",
    color: "pink",
    name: { en: "Fruits", fr: "Fruits" },
    items: [
      { id: "apple", emoji: "🍎", en: "Apple", fr: "La Pomme" },
      { id: "banana", emoji: "🍌", en: "Banana", fr: "La Banane" },
      { id: "grapes", emoji: "🍇", en: "Grapes", fr: "Le Raisin" },
      { id: "orange", emoji: "🍊", en: "Orange", fr: "L'Orange" },
      { id: "lemon", emoji: "🍋", en: "Lemon", fr: "Le Citron" },
      { id: "strawberry", emoji: "🍓", en: "Strawberry", fr: "La Fraise" },
      { id: "watermelon", emoji: "🍉", en: "Watermelon", fr: "La Pastèque" },
      { id: "pineapple", emoji: "🍍", en: "Pineapple", fr: "L'Ananas" },
      { id: "peach", emoji: "🍑", en: "Peach", fr: "La Pêche" },
      { id: "cherry", emoji: "🍒", en: "Cherry", fr: "La Cerise" },
      { id: "pear", emoji: "🍐", en: "Pear", fr: "La Poire" },
      { id: "mango", emoji: "🥭", en: "Mango", fr: "La Mangue" },
      { id: "kiwi", emoji: "🥝", en: "Kiwi", fr: "Le Kiwi" },
      { id: "coconut", emoji: "🥥", en: "Coconut", fr: "La Noix de Coco" },
      { id: "avocado", emoji: "🥑", en: "Avocado", fr: "L'Avocat" },
    ],
  },
  {
    id: "vegetables",
    emoji: "🥕",
    color: "green",
    name: { en: "Vegetables", fr: "Légumes" },
    items: [
      { id: "carrot", emoji: "🥕", en: "Carrot", fr: "La Carotte" },
      { id: "tomato", emoji: "🍅", en: "Tomato", fr: "La Tomate" },
      { id: "potato", emoji: "🥔", en: "Potato", fr: "La Pomme de Terre" },
      { id: "corn", emoji: "🌽", en: "Corn", fr: "Le Maïs" },
      { id: "cucumber", emoji: "🥒", en: "Cucumber", fr: "Le Concombre" },
      { id: "broccoli", emoji: "🥦", en: "Broccoli", fr: "Le Brocoli" },
      { id: "lettuce", emoji: "🥬", en: "Lettuce", fr: "La Laitue" },
      { id: "pepper", emoji: "🫑", en: "Pepper", fr: "Le Poivron" },
      { id: "onion", emoji: "🧅", en: "Onion", fr: "L'Oignon" },
      { id: "garlic", emoji: "🧄", en: "Garlic", fr: "L'Ail" },
      { id: "mushroom", emoji: "🍄", en: "Mushroom", fr: "Le Champignon" },
      { id: "eggplant", emoji: "🍆", en: "Eggplant", fr: "L'Aubergine" },
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
      { id: "pink", emoji: "🌸", en: "Pink", fr: "Rose" },
      { id: "brown", emoji: "🟫", en: "Brown", fr: "Marron" },
      { id: "black", emoji: "⬛", en: "Black", fr: "Noir" },
      { id: "white", emoji: "⬜", en: "White", fr: "Blanc" },
      { id: "gray", emoji: "🩶", en: "Gray", fr: "Gris" },
    ],
  },
  {
    id: "numbers",
    emoji: "🔢",
    color: "yellow",
    name: { en: "Numbers", fr: "Nombres", ar: "الأرقام" },
    items: [
      { id: "1", emoji: "1️⃣", en: "One", fr: "Un", ar: "واحد" },
      { id: "2", emoji: "2️⃣", en: "Two", fr: "Deux", ar: "اثنان" },
      { id: "3", emoji: "3️⃣", en: "Three", fr: "Trois", ar: "ثلاثة" },
      { id: "4", emoji: "4️⃣", en: "Four", fr: "Quatre", ar: "أربعة" },
      { id: "5", emoji: "5️⃣", en: "Five", fr: "Cinq", ar: "خمسة" },
      { id: "6", emoji: "6️⃣", en: "Six", fr: "Six", ar: "ستة" },
      { id: "7", emoji: "7️⃣", en: "Seven", fr: "Sept", ar: "سبعة" },
      { id: "8", emoji: "8️⃣", en: "Eight", fr: "Huit", ar: "ثمانية" },
      { id: "9", emoji: "9️⃣", en: "Nine", fr: "Neuf", ar: "تسعة" },
      { id: "10", emoji: "🔟", en: "Ten", fr: "Dix", ar: "عشرة" },
      { id: "20", emoji: "🔢", en: "Twenty", fr: "Vingt", ar: "عشرون" },
      { id: "50", emoji: "🔢", en: "Fifty", fr: "Cinquante", ar: "خمسون" },
      { id: "100", emoji: "💯", en: "Hundred", fr: "Cent", ar: "مئة" },
    ],
  },

  {
    id: "shapes",
    emoji: "🔺",
    color: "purple",
    name: { en: "Shapes", fr: "Formes" },
    items: [
      { id: "circle", emoji: "⚪", en: "Circle", fr: "Le Cercle" },
      { id: "square", emoji: "🟩", en: "Square", fr: "Le Carré" },
      { id: "triangle", emoji: "🔺", en: "Triangle", fr: "Le Triangle" },
      { id: "star", emoji: "⭐", en: "Star", fr: "L'Étoile" },
      { id: "heart", emoji: "❤️", en: "Heart", fr: "Le Cœur" },
      { id: "diamond", emoji: "🔷", en: "Diamond", fr: "Le Losange" },
      { id: "rectangle", emoji: "▬", en: "Rectangle", fr: "Le Rectangle" },
      { id: "oval", emoji: "🥚", en: "Oval", fr: "L'Ovale" },
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
      { id: "leg", emoji: "🦵", en: "Leg", fr: "La Jambe" },
      { id: "arm", emoji: "💪", en: "Arm", fr: "Le Bras" },
      { id: "eye", emoji: "👁️", en: "Eye", fr: "L'Œil" },
      { id: "ear", emoji: "👂", en: "Ear", fr: "L'Oreille" },
      { id: "nose", emoji: "👃", en: "Nose", fr: "Le Nez" },
      { id: "mouth", emoji: "👄", en: "Mouth", fr: "La Bouche" },
      { id: "tooth", emoji: "🦷", en: "Tooth", fr: "La Dent" },
      { id: "tongue", emoji: "👅", en: "Tongue", fr: "La Langue" },
      { id: "hair", emoji: "💇", en: "Hair", fr: "Les Cheveux" },
      { id: "brain", emoji: "🧠", en: "Brain", fr: "Le Cerveau" },
      { id: "heart", emoji: "❤️", en: "Heart", fr: "Le Cœur" },
      { id: "finger", emoji: "👆", en: "Finger", fr: "Le Doigt" },
    ],
  },
  {
    id: "family",
    emoji: "👨‍👩‍👧",
    color: "pink",
    name: { en: "Family", fr: "Famille" },
    items: [
      { id: "mother", emoji: "👩", en: "Mother", fr: "La Mère" },
      { id: "father", emoji: "👨", en: "Father", fr: "Le Père" },
      { id: "sister", emoji: "👧", en: "Sister", fr: "La Sœur" },
      { id: "brother", emoji: "👦", en: "Brother", fr: "Le Frère" },
      { id: "baby", emoji: "👶", en: "Baby", fr: "Le Bébé" },
      { id: "grandma", emoji: "👵", en: "Grandma", fr: "La Grand-mère" },
      { id: "grandpa", emoji: "👴", en: "Grandpa", fr: "Le Grand-père" },
      { id: "aunt", emoji: "🧑‍🦰", en: "Aunt", fr: "La Tante" },
      { id: "uncle", emoji: "🧑", en: "Uncle", fr: "L'Oncle" },
      { id: "family", emoji: "👨‍👩‍👧", en: "Family", fr: "La Famille" },
    ],
  },
  {
    id: "house",
    emoji: "🏠",
    color: "orange",
    name: { en: "House", fr: "Maison" },
    items: [
      { id: "house", emoji: "🏠", en: "House", fr: "La Maison" },
      { id: "door", emoji: "🚪", en: "Door", fr: "La Porte" },
      { id: "window", emoji: "🪟", en: "Window", fr: "La Fenêtre" },
      { id: "bed", emoji: "🛏️", en: "Bed", fr: "Le Lit" },
      { id: "chair", emoji: "🪑", en: "Chair", fr: "La Chaise" },
      { id: "table", emoji: "🪵", en: "Table", fr: "La Table" },
      { id: "sofa", emoji: "🛋️", en: "Sofa", fr: "Le Canapé" },
      { id: "lamp", emoji: "💡", en: "Lamp", fr: "La Lampe" },
      { id: "tv", emoji: "📺", en: "TV", fr: "La Télé" },
      { id: "clock", emoji: "🕰️", en: "Clock", fr: "L'Horloge" },
      { id: "key", emoji: "🔑", en: "Key", fr: "La Clé" },
      { id: "bath", emoji: "🛁", en: "Bath", fr: "La Baignoire" },
      { id: "toilet", emoji: "🚽", en: "Toilet", fr: "Les Toilettes" },
      { id: "mirror", emoji: "🪞", en: "Mirror", fr: "Le Miroir" },
    ],
  },
  {
    id: "school",
    emoji: "🎒",
    color: "blue",
    name: { en: "School", fr: "École" },
    items: [
      { id: "book", emoji: "📖", en: "Book", fr: "Le Livre" },
      { id: "pencil", emoji: "✏️", en: "Pencil", fr: "Le Crayon" },
      { id: "pen", emoji: "🖊️", en: "Pen", fr: "Le Stylo" },
      { id: "eraser", emoji: "🧽", en: "Eraser", fr: "La Gomme" },
      { id: "ruler", emoji: "📏", en: "Ruler", fr: "La Règle" },
      { id: "scissors", emoji: "✂️", en: "Scissors", fr: "Les Ciseaux" },
      { id: "backpack", emoji: "🎒", en: "Backpack", fr: "Le Cartable" },
      { id: "notebook", emoji: "📓", en: "Notebook", fr: "Le Cahier" },
      { id: "board", emoji: "🖼️", en: "Board", fr: "Le Tableau" },
      { id: "globe", emoji: "🌍", en: "Globe", fr: "Le Globe" },
      { id: "calculator", emoji: "🧮", en: "Calculator", fr: "La Calculatrice" },
      { id: "paint", emoji: "🎨", en: "Paint", fr: "La Peinture" },
    ],
  },
  {
    id: "weather",
    emoji: "☀️",
    color: "yellow",
    name: { en: "Weather", fr: "Météo" },
    items: [
      { id: "sun", emoji: "☀️", en: "Sun", fr: "Le Soleil" },
      { id: "cloud", emoji: "☁️", en: "Cloud", fr: "Le Nuage" },
      { id: "rain", emoji: "🌧️", en: "Rain", fr: "La Pluie" },
      { id: "snow", emoji: "❄️", en: "Snow", fr: "La Neige" },
      { id: "wind", emoji: "💨", en: "Wind", fr: "Le Vent" },
      { id: "storm", emoji: "⛈️", en: "Storm", fr: "L'Orage" },
      { id: "rainbow", emoji: "🌈", en: "Rainbow", fr: "L'Arc-en-ciel" },
      { id: "lightning", emoji: "⚡", en: "Lightning", fr: "L'Éclair" },
      { id: "moon", emoji: "🌙", en: "Moon", fr: "La Lune" },
      { id: "star", emoji: "⭐", en: "Star", fr: "L'Étoile" },
      { id: "fog", emoji: "🌫️", en: "Fog", fr: "Le Brouillard" },
    ],
  },
  {
    id: "nature",
    emoji: "🌳",
    color: "green",
    name: { en: "Nature", fr: "Nature" },
    items: [
      { id: "tree", emoji: "🌳", en: "Tree", fr: "L'Arbre" },
      { id: "flower", emoji: "🌸", en: "Flower", fr: "La Fleur" },
      { id: "grass", emoji: "🌱", en: "Grass", fr: "L'Herbe" },
      { id: "leaf", emoji: "🍃", en: "Leaf", fr: "La Feuille" },
      { id: "mountain", emoji: "⛰️", en: "Mountain", fr: "La Montagne" },
      { id: "river", emoji: "🏞️", en: "River", fr: "La Rivière" },
      { id: "sea", emoji: "🌊", en: "Sea", fr: "La Mer" },
      { id: "beach", emoji: "🏖️", en: "Beach", fr: "La Plage" },
      { id: "desert", emoji: "🏜️", en: "Desert", fr: "Le Désert" },
      { id: "forest", emoji: "🌲", en: "Forest", fr: "La Forêt" },
      { id: "fire", emoji: "🔥", en: "Fire", fr: "Le Feu" },
      { id: "rock", emoji: "🪨", en: "Rock", fr: "Le Rocher" },
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
      { id: "truck", emoji: "🚚", en: "Truck", fr: "Le Camion" },
      { id: "taxi", emoji: "🚕", en: "Taxi", fr: "Le Taxi" },
      { id: "bike", emoji: "🚲", en: "Bike", fr: "Le Vélo" },
      { id: "motorcycle", emoji: "🏍️", en: "Motorcycle", fr: "La Moto" },
      { id: "plane", emoji: "✈️", en: "Plane", fr: "L'Avion" },
      { id: "helicopter", emoji: "🚁", en: "Helicopter", fr: "L'Hélicoptère" },
      { id: "train", emoji: "🚂", en: "Train", fr: "Le Train" },
      { id: "boat", emoji: "⛵", en: "Boat", fr: "Le Bateau" },
      { id: "ship", emoji: "🚢", en: "Ship", fr: "Le Navire" },
      { id: "rocket", emoji: "🚀", en: "Rocket", fr: "La Fusée" },
      { id: "police", emoji: "🚓", en: "Police Car", fr: "La Voiture de Police" },
      { id: "ambulance", emoji: "🚑", en: "Ambulance", fr: "L'Ambulance" },
      { id: "firetruck", emoji: "🚒", en: "Fire Truck", fr: "Le Camion de Pompiers" },
    ],
  },
  {
    id: "jobs",
    emoji: "👨‍⚕️",
    color: "purple",
    name: { en: "Jobs", fr: "Métiers" },
    items: [
      { id: "doctor", emoji: "👨‍⚕️", en: "Doctor", fr: "Le Docteur" },
      { id: "teacher", emoji: "👩‍🏫", en: "Teacher", fr: "L'Enseignant" },
      { id: "chef", emoji: "👨‍🍳", en: "Chef", fr: "Le Cuisinier" },
      { id: "farmer", emoji: "👨‍🌾", en: "Farmer", fr: "L'Agriculteur" },
      { id: "police", emoji: "👮", en: "Police", fr: "Le Policier" },
      { id: "firefighter", emoji: "👨‍🚒", en: "Firefighter", fr: "Le Pompier" },
      { id: "pilot", emoji: "👨‍✈️", en: "Pilot", fr: "Le Pilote" },
      { id: "artist", emoji: "👨‍🎨", en: "Artist", fr: "L'Artiste" },
      { id: "singer", emoji: "👨‍🎤", en: "Singer", fr: "Le Chanteur" },
      { id: "scientist", emoji: "👨‍🔬", en: "Scientist", fr: "Le Scientifique" },
      { id: "astronaut", emoji: "👨‍🚀", en: "Astronaut", fr: "L'Astronaute" },
      { id: "mechanic", emoji: "👨‍🔧", en: "Mechanic", fr: "Le Mécanicien" },
    ],
  },
  {
    id: "sports",
    emoji: "⚽",
    color: "green",
    name: { en: "Sports", fr: "Sports" },
    items: [
      { id: "soccer", emoji: "⚽", en: "Soccer", fr: "Le Football" },
      { id: "basketball", emoji: "🏀", en: "Basketball", fr: "Le Basketball" },
      { id: "tennis", emoji: "🎾", en: "Tennis", fr: "Le Tennis" },
      { id: "baseball", emoji: "⚾", en: "Baseball", fr: "Le Baseball" },
      { id: "volleyball", emoji: "🏐", en: "Volleyball", fr: "Le Volleyball" },
      { id: "swim", emoji: "🏊", en: "Swimming", fr: "La Natation" },
      { id: "run", emoji: "🏃", en: "Running", fr: "La Course" },
      { id: "cycling", emoji: "🚴", en: "Cycling", fr: "Le Cyclisme" },
      { id: "ski", emoji: "⛷️", en: "Skiing", fr: "Le Ski" },
      { id: "boxing", emoji: "🥊", en: "Boxing", fr: "La Boxe" },
      { id: "chess", emoji: "♟️", en: "Chess", fr: "Les Échecs" },
    ],
  },
  {
    id: "music",
    emoji: "🎵",
    color: "purple",
    name: { en: "Music", fr: "Musique" },
    items: [
      { id: "guitar", emoji: "🎸", en: "Guitar", fr: "La Guitare" },
      { id: "piano", emoji: "🎹", en: "Piano", fr: "Le Piano" },
      { id: "drum", emoji: "🥁", en: "Drum", fr: "Le Tambour" },
      { id: "violin", emoji: "🎻", en: "Violin", fr: "Le Violon" },
      { id: "trumpet", emoji: "🎺", en: "Trumpet", fr: "La Trompette" },
      { id: "saxophone", emoji: "🎷", en: "Saxophone", fr: "Le Saxophone" },
      { id: "microphone", emoji: "🎤", en: "Microphone", fr: "Le Microphone" },
      { id: "headphones", emoji: "🎧", en: "Headphones", fr: "Le Casque" },
      { id: "note", emoji: "🎵", en: "Note", fr: "La Note" },
    ],
  },
  {
    id: "days",
    emoji: "📅",
    color: "yellow",
    name: { en: "Days & Time", fr: "Jours & Temps" },
    items: [
      { id: "mon", emoji: "1️⃣", en: "Monday", fr: "Lundi" },
      { id: "tue", emoji: "2️⃣", en: "Tuesday", fr: "Mardi" },
      { id: "wed", emoji: "3️⃣", en: "Wednesday", fr: "Mercredi" },
      { id: "thu", emoji: "4️⃣", en: "Thursday", fr: "Jeudi" },
      { id: "fri", emoji: "5️⃣", en: "Friday", fr: "Vendredi" },
      { id: "sat", emoji: "6️⃣", en: "Saturday", fr: "Samedi" },
      { id: "sun", emoji: "7️⃣", en: "Sunday", fr: "Dimanche" },
      { id: "today", emoji: "📅", en: "Today", fr: "Aujourd'hui" },
      { id: "tomorrow", emoji: "➡️", en: "Tomorrow", fr: "Demain" },
      { id: "yesterday", emoji: "⬅️", en: "Yesterday", fr: "Hier" },
      { id: "morning", emoji: "🌅", en: "Morning", fr: "Le Matin" },
      { id: "night", emoji: "🌃", en: "Night", fr: "La Nuit" },
    ],
  },
  {
    id: "feelings",
    emoji: "😀",
    color: "pink",
    name: { en: "Feelings", fr: "Émotions" },
    items: [
      { id: "happy", emoji: "😀", en: "Happy", fr: "Heureux" },
      { id: "sad", emoji: "😢", en: "Sad", fr: "Triste" },
      { id: "angry", emoji: "😠", en: "Angry", fr: "En Colère" },
      { id: "scared", emoji: "😨", en: "Scared", fr: "Effrayé" },
      { id: "surprised", emoji: "😮", en: "Surprised", fr: "Surpris" },
      { id: "sleepy", emoji: "😴", en: "Sleepy", fr: "Endormi" },
      { id: "sick", emoji: "🤒", en: "Sick", fr: "Malade" },
      { id: "love", emoji: "🥰", en: "In Love", fr: "Amoureux" },
      { id: "laugh", emoji: "😂", en: "Laughing", fr: "Rire" },
      { id: "cool", emoji: "😎", en: "Cool", fr: "Cool" },
    ],
  },
  {
    id: "tech",
    emoji: "💻",
    color: "blue",
    name: { en: "Technology", fr: "Technologie" },
    items: [
      { id: "phone", emoji: "📱", en: "Phone", fr: "Le Téléphone" },
      { id: "computer", emoji: "💻", en: "Computer", fr: "L'Ordinateur" },
      { id: "keyboard", emoji: "⌨️", en: "Keyboard", fr: "Le Clavier" },
      { id: "mouse", emoji: "🖱️", en: "Mouse", fr: "La Souris" },
      { id: "camera", emoji: "📷", en: "Camera", fr: "L'Appareil Photo" },
      { id: "tv", emoji: "📺", en: "Television", fr: "La Télévision" },
      { id: "radio", emoji: "📻", en: "Radio", fr: "La Radio" },
      { id: "battery", emoji: "🔋", en: "Battery", fr: "La Batterie" },
      { id: "printer", emoji: "🖨️", en: "Printer", fr: "L'Imprimante" },
      { id: "robot", emoji: "🤖", en: "Robot", fr: "Le Robot" },
    ],
  },
];

// ============= Alphabets (English, French, Arabic) =============
// Each item's `en`/`fr`/`ar` is set to the letter itself so games and TTS
// still work. The emoji shows a decorative badge.

function letter(id: string, ch: string, ar?: string): VocabItem {
  return { id, emoji: `🔤`, en: ch, fr: ch, ar: ar ?? ch };
}

const EN_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) =>
  letter(`en-${c}`, c),
);

const FR_LETTERS: VocabItem[] = [
  ...EN_LETTERS.map((l) => ({ ...l, id: `fr-${l.en}` })),
  { id: "fr-e-acute", emoji: "🔤", en: "É", fr: "É" },
  { id: "fr-e-grave", emoji: "🔤", en: "È", fr: "È" },
  { id: "fr-c-cedilla", emoji: "🔤", en: "Ç", fr: "Ç" },
  { id: "fr-a-circ", emoji: "🔤", en: "Â", fr: "Â" },
];

const AR_LETTERS_RAW: Array<[string, string, string]> = [
  ["alif", "ا", "Alif"], ["baa", "ب", "Baa"], ["taa", "ت", "Taa"],
  ["thaa", "ث", "Thaa"], ["jeem", "ج", "Jeem"], ["haa", "ح", "Haa"],
  ["khaa", "خ", "Khaa"], ["dal", "د", "Dal"], ["thal", "ذ", "Thal"],
  ["raa", "ر", "Raa"], ["zay", "ز", "Zay"], ["seen", "س", "Seen"],
  ["sheen", "ش", "Sheen"], ["sad", "ص", "Sad"], ["dad", "ض", "Dad"],
  ["taa2", "ط", "Ttaa"], ["zaa", "ظ", "Zzaa"], ["ain", "ع", "Ayn"],
  ["ghain", "غ", "Ghayn"], ["faa", "ف", "Faa"], ["qaf", "ق", "Qaf"],
  ["kaf", "ك", "Kaf"], ["lam", "ل", "Lam"], ["meem", "م", "Meem"],
  ["noon", "ن", "Noon"], ["haa2", "ه", "Haa"], ["waw", "و", "Waw"],
  ["yaa", "ي", "Yaa"],
];
const AR_LETTERS: VocabItem[] = AR_LETTERS_RAW.map(([id, letter, name]) => ({
  id: `ar-${id}`,
  emoji: "🔤",
  en: name,
  fr: name,
  ar: letter,
}));

CATEGORIES.push(
  {
    id: "letters_en",
    emoji: "🔤",
    color: "blue",
    name: { en: "English Letters", fr: "Lettres anglaises", ar: "الحروف الإنجليزية" },
    items: EN_LETTERS,
  },
  {
    id: "letters_fr",
    emoji: "🔠",
    color: "purple",
    name: { en: "French Letters", fr: "Lettres françaises", ar: "الحروف الفرنسية" },
    items: FR_LETTERS,
  },
  {
    id: "letters_ar",
    emoji: "🕌",
    color: "green",
    name: { en: "Arabic Letters", fr: "Lettres arabes", ar: "الحروف العربية" },
    items: AR_LETTERS,
  },
);

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
    utter.lang = lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "ar-SA";
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

