// Age-based learning tracks. Each track curates categories and games
// suitable for the age range and defines a suggested lesson order.

import { CATEGORIES, type Category } from "@/lib/vocab";

export type AgeId = "little" | "kids" | "tweens";

export interface Lesson {
  id: string;
  title: { en: string; fr: string; ar: string };
  categoryId: string;
  goal: { en: string; fr: string; ar: string };
  activity: "flashcards" | "matching" | "quiz" | "spelling" | "explore" | "dialogue" | "grammar";
}

export interface AgeGroup {
  id: AgeId;
  range: string;
  emoji: string;
  color: "yellow" | "green" | "purple";
  name: { en: string; fr: string; ar: string };
  tagline: { en: string; fr: string; ar: string };
  categoryIds: string[];
  lessons: Lesson[];
}

export const AGE_GROUPS: AgeGroup[] = [
  {
    id: "little",
    range: "3 – 5",
    emoji: "🧸",
    color: "yellow",
    name: { en: "Little Explorers", fr: "Petits Explorateurs", ar: "المستكشفون الصغار" },
    tagline: {
      en: "Colors, shapes, animals — big pictures, gentle sounds.",
      fr: "Couleurs, formes, animaux — grandes images, sons doux.",
      ar: "ألوان وأشكال وحيوانات — صور كبيرة وأصوات لطيفة.",
    },
    categoryIds: ["letters_en", "letters_ar", "numbers", "colors", "shapes", "animals", "fruits", "family", "body", "food"],
    lessons: [
      { id: "l0a", title: { en: "ABC letters", fr: "Lettres ABC", ar: "حروف ABC" }, categoryId: "letters_en", activity: "flashcards", goal: { en: "Learn A–Z", fr: "Apprendre A–Z", ar: "تعلّم الحروف من A إلى Z" } },
      { id: "l0b", title: { en: "Arabic letters", fr: "Lettres arabes", ar: "الحروف العربية" }, categoryId: "letters_ar", activity: "flashcards", goal: { en: "Learn ا–ي", fr: "Apprendre ا–ي", ar: "تعلّم من ا إلى ي" } },
      { id: "l1", title: { en: "My first colors", fr: "Mes premières couleurs", ar: "ألواني الأولى" }, categoryId: "colors", activity: "flashcards", goal: { en: "Recognize 6 colors", fr: "Reconnaître 6 couleurs", ar: "تعرّف على 6 ألوان" } },
      { id: "l2", title: { en: "Count to 10", fr: "Compter jusqu'à 10", ar: "العدّ حتى 10" }, categoryId: "numbers", activity: "flashcards", goal: { en: "Say numbers 1–10", fr: "Dire les nombres 1–10", ar: "قل الأرقام من 1 إلى 10" } },
      { id: "l3", title: { en: "Farm animals", fr: "Animaux de la ferme", ar: "حيوانات المزرعة" }, categoryId: "animals", activity: "matching", goal: { en: "Match 6 animals", fr: "Associer 6 animaux", ar: "طابق 6 حيوانات" } },
      { id: "l4", title: { en: "Yummy fruits", fr: "Fruits délicieux", ar: "فواكه لذيذة" }, categoryId: "fruits", activity: "flashcards", goal: { en: "Name 8 fruits", fr: "Nommer 8 fruits", ar: "سمِّ 8 فواكه" } },
      { id: "l5", title: { en: "My family", fr: "Ma famille", ar: "عائلتي" }, categoryId: "family", activity: "explore", goal: { en: "Learn family words", fr: "Apprendre les mots de famille", ar: "تعلّم كلمات العائلة" } },
      { id: "l6", title: { en: "My body", fr: "Mon corps", ar: "جسمي" }, categoryId: "body", activity: "matching", goal: { en: "Point and say", fr: "Montre et dis", ar: "أشر وقُل" } },
      { id: "l7", title: { en: "Shapes around me", fr: "Les formes", ar: "الأشكال حولي" }, categoryId: "shapes", activity: "matching", goal: { en: "Match 6 shapes", fr: "Associer 6 formes", ar: "طابق 6 أشكال" } },
      { id: "l8", title: { en: "Yummy food", fr: "Nourriture délicieuse", ar: "طعام لذيذ" }, categoryId: "food", activity: "flashcards", goal: { en: "Name common foods", fr: "Nommer les aliments", ar: "سمِّ الأطعمة" } },
      { id: "l9", title: { en: "Numbers 1–10 quiz", fr: "Quiz des nombres 1–10", ar: "اختبار الأرقام 1–10" }, categoryId: "numbers", activity: "quiz", goal: { en: "Quick number quiz", fr: "Petit quiz des nombres", ar: "اختبار سريع للأرقام" } },
      { id: "l10", title: { en: "Colors matching", fr: "Associer les couleurs", ar: "مطابقة الألوان" }, categoryId: "colors", activity: "matching", goal: { en: "Match 6 colors", fr: "Associer 6 couleurs", ar: "طابق 6 ألوان" } },
      { id: "l11", title: { en: "Fruits flashcards", fr: "Cartes de fruits", ar: "بطاقات الفواكه" }, categoryId: "fruits", activity: "flashcards", goal: { en: "Learn 8 fruits", fr: "Apprendre 8 fruits", ar: "تعلّم 8 فواكه" } },
      { id: "l12", title: { en: "Say hello (dialogue)", fr: "Dire bonjour (dialogue)", ar: "قل مرحبًا (محاورة)" }, categoryId: "family", activity: "dialogue", goal: { en: "Greet like a friend", fr: "Saluer comme un ami", ar: "حيّي مثل الأصدقاء" } },
      { id: "l13", title: { en: "First grammar: a / an", fr: "Grammaire: un / une", ar: "قواعد: التنكير" }, categoryId: "letters_en", activity: "grammar", goal: { en: "Learn a/an/the", fr: "Apprendre les articles", ar: "تعلّم أدوات التنكير" } },
    ],
  },

  {
    id: "kids",
    range: "5 – 9",
    emoji: "🎒",
    color: "green",
    name: { en: "Curious Kids", fr: "Enfants Curieux", ar: "الأطفال الفضوليون" },
    tagline: {
      en: "Everyday vocabulary, matching and quick quizzes.",
      fr: "Vocabulaire quotidien, associations et petits quiz.",
      ar: "مفردات يومية وألعاب مطابقة واختبارات قصيرة.",
    },
    categoryIds: ["letters_en", "letters_fr", "letters_ar", "numbers", "animals", "clothes", "kitchen", "food", "vegetables", "school", "house", "weather", "vehicles", "feelings", "days"],
    lessons: [
      { id: "l1", title: { en: "At school", fr: "À l'école", ar: "في المدرسة" }, categoryId: "school", activity: "flashcards", goal: { en: "12 school words", fr: "12 mots d'école", ar: "12 كلمة مدرسية" } },
      { id: "l2", title: { en: "Around the house", fr: "Dans la maison", ar: "في المنزل" }, categoryId: "house", activity: "matching", goal: { en: "Match rooms & items", fr: "Associer pièces et objets", ar: "طابق الغرف والأدوات" } },
      { id: "l3", title: { en: "What's the weather?", fr: "Quel temps fait-il ?", ar: "ما هو الطقس؟" }, categoryId: "weather", activity: "quiz", goal: { en: "10-question quiz", fr: "Quiz de 10 questions", ar: "اختبار من 10 أسئلة" } },
      { id: "l4", title: { en: "Getting dressed", fr: "S'habiller", ar: "ارتداء الملابس" }, categoryId: "clothes", activity: "spelling", goal: { en: "Spell 5 clothes", fr: "Épeler 5 vêtements", ar: "تهجّة 5 ملابس" } },
      { id: "l5", title: { en: "Kitchen tour", fr: "Visite de la cuisine", ar: "جولة في المطبخ" }, categoryId: "kitchen", activity: "flashcards", goal: { en: "Kitchen tools", fr: "Ustensiles de cuisine", ar: "أدوات المطبخ" } },
      { id: "l6", title: { en: "Vehicles I know", fr: "Véhicules que je connais", ar: "المركبات التي أعرفها" }, categoryId: "vehicles", activity: "matching", goal: { en: "Match 8 vehicles", fr: "Associer 8 véhicules", ar: "طابق 8 مركبات" } },
      { id: "l7", title: { en: "Days of the week", fr: "Jours de la semaine", ar: "أيام الأسبوع" }, categoryId: "days", activity: "flashcards", goal: { en: "Learn 7 days", fr: "Apprendre les 7 jours", ar: "تعلّم 7 أيام" } },
      { id: "l8", title: { en: "How do I feel?", fr: "Comment je me sens ?", ar: "كيف أشعر؟" }, categoryId: "feelings", activity: "explore", goal: { en: "Name feelings", fr: "Nommer les émotions", ar: "سمِّ المشاعر" } },
      { id: "l9", title: { en: "Animals quiz", fr: "Quiz des animaux", ar: "اختبار الحيوانات" }, categoryId: "animals", activity: "quiz", goal: { en: "10 animal questions", fr: "10 questions", ar: "10 أسئلة عن الحيوانات" } },
      { id: "l10", title: { en: "Food & vegetables", fr: "Nourriture et légumes", ar: "الطعام والخضروات" }, categoryId: "vegetables", activity: "flashcards", goal: { en: "Learn 10 veggies", fr: "Apprendre 10 légumes", ar: "تعلّم 10 خضروات" } },
      { id: "l11", title: { en: "Spell house items", fr: "Épeler la maison", ar: "تهجّة أدوات المنزل" }, categoryId: "house", activity: "spelling", goal: { en: "Spell 6 items", fr: "Épeler 6 objets", ar: "تهجّة 6 أدوات" } },
      { id: "l12", title: { en: "French letters", fr: "Lettres françaises", ar: "الحروف الفرنسية" }, categoryId: "letters_fr", activity: "flashcards", goal: { en: "Learn A–Z (FR)", fr: "Apprendre A–Z", ar: "تعلّم الحروف الفرنسية" } },
      { id: "l13", title: { en: "Numbers spelling", fr: "Épeler les nombres", ar: "تهجّة الأرقام" }, categoryId: "numbers", activity: "spelling", goal: { en: "Spell 10 numbers", fr: "Épeler 10 nombres", ar: "تهجّة 10 أرقام" } },
      { id: "l14", title: { en: "Dialogue: at the market", fr: "Dialogue: au marché", ar: "محاورة: في السوق" }, categoryId: "food", activity: "dialogue", goal: { en: "Buy things politely", fr: "Acheter poliment", ar: "اشترِ بلباقة" } },
      { id: "l15", title: { en: "Dialogue: at school", fr: "Dialogue: à l'école", ar: "محاورة: في المدرسة" }, categoryId: "school", activity: "dialogue", goal: { en: "Talk about classes", fr: "Parler des cours", ar: "تحدث عن الحصص" } },
      { id: "l16", title: { en: "Grammar: verb to be", fr: "Grammaire: être", ar: "قواعد: أفعال الكينونة" }, categoryId: "letters_en", activity: "grammar", goal: { en: "Master to be", fr: "Maîtriser être", ar: "أتقن الأفعال الرابطة" } },
      { id: "l17", title: { en: "Grammar: questions", fr: "Grammaire: questions", ar: "قواعد: الاستفهام" }, categoryId: "letters_en", activity: "grammar", goal: { en: "Ask correctly", fr: "Poser des questions", ar: "اطرح الأسئلة بصحة" } },
    ],
  },
  {
    id: "tweens",
    range: "9 – 15",
    emoji: "🧭",
    color: "purple",
    name: { en: "Young Learners", fr: "Jeunes Apprenants", ar: "المتعلّمون الشباب" },
    tagline: {
      en: "Wider topics, spelling drills and reading stories.",
      fr: "Sujets variés, exercices d'orthographe et lectures.",
      ar: "مواضيع أوسع وتدريبات إملاء وقراءة قصص.",
    },
    categoryIds: ["letters_fr", "letters_ar", "school", "jobs", "sports", "music", "nature", "tech", "feelings", "weather", "days", "vehicles"],
    lessons: [
      { id: "l1", title: { en: "Jobs & careers", fr: "Métiers et carrières", ar: "الوظائف والمهن" }, categoryId: "jobs", activity: "flashcards", goal: { en: "Explore jobs", fr: "Découvrir les métiers", ar: "استكشف المهن" } },
      { id: "l2", title: { en: "Sports vocabulary", fr: "Vocabulaire du sport", ar: "مفردات الرياضة" }, categoryId: "sports", activity: "quiz", goal: { en: "10-question quiz", fr: "Quiz de 10 questions", ar: "اختبار من 10 أسئلة" } },
      { id: "l3", title: { en: "Music words", fr: "Mots de la musique", ar: "كلمات الموسيقى" }, categoryId: "music", activity: "spelling", goal: { en: "Spell 6 music words", fr: "Épeler 6 mots", ar: "تهجّة 6 كلمات" } },
      { id: "l4", title: { en: "Nature around us", fr: "La nature autour de nous", ar: "الطبيعة حولنا" }, categoryId: "nature", activity: "matching", goal: { en: "Match 8 nature words", fr: "Associer 8 mots", ar: "طابق 8 كلمات" } },
      { id: "l5", title: { en: "Modern technology", fr: "Technologie moderne", ar: "التكنولوجيا الحديثة" }, categoryId: "tech", activity: "spelling", goal: { en: "Spell tech words", fr: "Épeler des mots tech", ar: "تهجّة كلمات التقنية" } },
      { id: "l6", title: { en: "Advanced weather", fr: "Météo avancée", ar: "طقس متقدّم" }, categoryId: "weather", activity: "quiz", goal: { en: "Weather quiz", fr: "Quiz météo", ar: "اختبار الطقس" } },
      { id: "l7", title: { en: "School subjects", fr: "Matières scolaires", ar: "المواد الدراسية" }, categoryId: "school", activity: "flashcards", goal: { en: "Review school", fr: "Revoir l'école", ar: "راجع المدرسة" } },
      { id: "l8", title: { en: "Story time", fr: "L'heure du conte", ar: "وقت القصة" }, categoryId: "feelings", activity: "explore", goal: { en: "Read a story", fr: "Lire une histoire", ar: "اقرأ قصة" } },
      { id: "l9", title: { en: "Nature quiz", fr: "Quiz nature", ar: "اختبار الطبيعة" }, categoryId: "nature", activity: "quiz", goal: { en: "10 nature questions", fr: "10 questions nature", ar: "10 أسئلة عن الطبيعة" } },
      { id: "l10", title: { en: "Vehicles spelling", fr: "Épeler les véhicules", ar: "تهجّة المركبات" }, categoryId: "vehicles", activity: "spelling", goal: { en: "Spell 6 vehicles", fr: "Épeler 6 véhicules", ar: "تهجّة 6 مركبات" } },
      { id: "l11", title: { en: "Days & feelings", fr: "Jours et émotions", ar: "الأيام والمشاعر" }, categoryId: "days", activity: "matching", goal: { en: "Match days & moods", fr: "Associer jours et humeurs", ar: "طابق الأيام والمشاعر" } },
      { id: "l12", title: { en: "Sports quiz", fr: "Quiz sportif", ar: "اختبار رياضي" }, categoryId: "sports", activity: "quiz", goal: { en: "Test sports words", fr: "Tester le vocabulaire", ar: "اختبار مفردات الرياضة" } },
      { id: "l13", title: { en: "Arabic reading", fr: "Lecture arabe", ar: "قراءة عربية" }, categoryId: "letters_ar", activity: "flashcards", goal: { en: "Review Arabic letters", fr: "Réviser l'arabe", ar: "راجع الحروف العربية" } },
      { id: "l14", title: { en: "Tech matching", fr: "Associer la tech", ar: "مطابقة التقنية" }, categoryId: "tech", activity: "matching", goal: { en: "Match 8 tech words", fr: "Associer 8 mots tech", ar: "طابق 8 كلمات تقنية" } },
      { id: "l15", title: { en: "Dialogue: hobbies", fr: "Dialogue: loisirs", ar: "محاورة: الهوايات" }, categoryId: "sports", activity: "dialogue", goal: { en: "Talk about free time", fr: "Parler du temps libre", ar: "تحدث عن وقت الفراغ" } },
      { id: "l16", title: { en: "Dialogue: directions", fr: "Dialogue: le chemin", ar: "محاورة: السؤال عن الطريق" }, categoryId: "vehicles", activity: "dialogue", goal: { en: "Ask & give directions", fr: "Demander le chemin", ar: "اسأل عن الطريق" } },
      { id: "l17", title: { en: "Grammar: past simple", fr: "Grammaire: passé", ar: "قواعد: الفعل الماضي" }, categoryId: "letters_fr", activity: "grammar", goal: { en: "Talk about the past", fr: "Parler du passé", ar: "تحدث عن الماضي" } },
      { id: "l18", title: { en: "Grammar: future & plans", fr: "Grammaire: futur", ar: "قواعد: المستقبل" }, categoryId: "letters_fr", activity: "grammar", goal: { en: "Talk about plans", fr: "Parler du futur", ar: "تحدث عن المستقبل" } },
      { id: "l19", title: { en: "Grammar: if... then", fr: "Grammaire: si...", ar: "قواعد: الشرط" }, categoryId: "letters_ar", activity: "grammar", goal: { en: "Conditionals", fr: "Le conditionnel", ar: "أساليب الشرط" } },
    ],
  },
];

export const AGE_MAP = Object.fromEntries(AGE_GROUPS.map((a) => [a.id, a])) as Record<AgeId, AgeGroup>;

export function getAgeGroup(id: string): AgeGroup | undefined {
  return AGE_MAP[id as AgeId];
}

export function categoriesForAge(id: AgeId): Category[] {
  const group = AGE_MAP[id];
  if (!group) return [];
  return group.categoryIds
    .map((cid) => CATEGORIES.find((c) => c.id === cid))
    .filter((c): c is Category => Boolean(c));
}
