// Extra teaching methods: dialogues (conversations), grammar rules and listening
// snippets. Content is organized per age group and available in EN / FR / AR.

import type { AgeId } from "@/lib/ageGroups";

export type ExtraLang = "en" | "fr" | "ar";

export interface DialogueLine {
  speaker: "A" | "B";
  en: string;
  fr: string;
  ar: string;
}

export interface Dialogue {
  id: string;
  emoji: string;
  title: { en: string; fr: string; ar: string };
  lines: DialogueLine[];
}

export const DIALOGUES: Record<AgeId, Dialogue[]> = {
  little: [
    {
      id: "hello",
      emoji: "👋",
      title: { en: "Say hello", fr: "Dire bonjour", ar: "قل مرحبًا" },
      lines: [
        { speaker: "A", en: "Hello!", fr: "Bonjour !", ar: "مرحبًا!" },
        { speaker: "B", en: "Hi! I am Sami.", fr: "Salut ! Je m'appelle Sami.", ar: "أهلًا! أنا سامي." },
        { speaker: "A", en: "Nice to meet you!", fr: "Enchanté !", ar: "تشرّفت بلقائك!" },
      ],
    },
    {
      id: "colors",
      emoji: "🎨",
      title: { en: "What color?", fr: "Quelle couleur ?", ar: "ما هذا اللون؟" },
      lines: [
        { speaker: "A", en: "What color is this?", fr: "Quelle est cette couleur ?", ar: "ما هذا اللون؟" },
        { speaker: "B", en: "It is red.", fr: "C'est rouge.", ar: "هذا لون أحمر." },
        { speaker: "A", en: "And this?", fr: "Et celle-ci ?", ar: "وهذا؟" },
        { speaker: "B", en: "It is blue!", fr: "C'est bleu !", ar: "هذا أزرق!" },
      ],
    },
    {
      id: "food",
      emoji: "🍎",
      title: { en: "I am hungry", fr: "J'ai faim", ar: "أنا جائع" },
      lines: [
        { speaker: "A", en: "I am hungry.", fr: "J'ai faim.", ar: "أنا جائع." },
        { speaker: "B", en: "Do you like apples?", fr: "Tu aimes les pommes ?", ar: "هل تحب التفاح؟" },
        { speaker: "A", en: "Yes, please!", fr: "Oui, s'il te plaît !", ar: "نعم من فضلك!" },
      ],
    },
  ],
  kids: [
    {
      id: "at-school",
      emoji: "🏫",
      title: { en: "At school", fr: "À l'école", ar: "في المدرسة" },
      lines: [
        { speaker: "A", en: "What do you have today?", fr: "Qu'est-ce que tu as aujourd'hui ?", ar: "ما هي حصصك اليوم؟" },
        { speaker: "B", en: "I have math and drawing.", fr: "J'ai des maths et du dessin.", ar: "عندي رياضيات ورسم." },
        { speaker: "A", en: "Cool! I love drawing.", fr: "Génial ! J'adore dessiner.", ar: "رائع! أحب الرسم." },
      ],
    },
    {
      id: "shopping",
      emoji: "🛒",
      title: { en: "At the market", fr: "Au marché", ar: "في السوق" },
      lines: [
        { speaker: "A", en: "How much are the tomatoes?", fr: "Combien coûtent les tomates ?", ar: "بكم الطماطم؟" },
        { speaker: "B", en: "Ten dirhams per kilo.", fr: "Dix dirhams le kilo.", ar: "عشرة دراهم للكيلو." },
        { speaker: "A", en: "I will take two kilos, please.", fr: "Je prendrai deux kilos, s'il vous plaît.", ar: "خذ لي كيلوين من فضلك." },
      ],
    },
    {
      id: "weather",
      emoji: "🌦️",
      title: { en: "The weather today", fr: "Le temps aujourd'hui", ar: "الطقس اليوم" },
      lines: [
        { speaker: "A", en: "How is the weather today?", fr: "Quel temps fait-il aujourd'hui ?", ar: "كيف الطقس اليوم؟" },
        { speaker: "B", en: "It is sunny and warm.", fr: "Il fait beau et chaud.", ar: "الطقس مشمس ودافئ." },
        { speaker: "A", en: "Let's go to the park!", fr: "Allons au parc !", ar: "لنذهب إلى الحديقة!" },
      ],
    },
    {
      id: "introduce",
      emoji: "🙋",
      title: { en: "Introduce yourself", fr: "Se présenter", ar: "قدّم نفسك" },
      lines: [
        { speaker: "A", en: "My name is Lina. I am eight years old.", fr: "Je m'appelle Lina. J'ai huit ans.", ar: "اسمي لينا. عمري ثماني سنوات." },
        { speaker: "B", en: "Where are you from?", fr: "D'où viens-tu ?", ar: "من أين أنت؟" },
        { speaker: "A", en: "I am from Morocco.", fr: "Je viens du Maroc.", ar: "أنا من المغرب." },
      ],
    },
  ],
  tweens: [
    {
      id: "hobbies",
      emoji: "🎧",
      title: { en: "Talking about hobbies", fr: "Parler des loisirs", ar: "الحديث عن الهوايات" },
      lines: [
        { speaker: "A", en: "What do you like to do in your free time?", fr: "Que fais-tu pendant ton temps libre ?", ar: "ماذا تحب أن تفعل في وقت الفراغ؟" },
        { speaker: "B", en: "I usually read books and play football.", fr: "Je lis des livres et je joue au foot.", ar: "عادةً أقرأ الكتب وألعب كرة القدم." },
        { speaker: "A", en: "That sounds great! I prefer music.", fr: "Super ! Moi, je préfère la musique.", ar: "رائع! أنا أفضّل الموسيقى." },
      ],
    },
    {
      id: "directions",
      emoji: "🗺️",
      title: { en: "Asking directions", fr: "Demander son chemin", ar: "السؤال عن الطريق" },
      lines: [
        { speaker: "A", en: "Excuse me, where is the library?", fr: "Excusez-moi, où est la bibliothèque ?", ar: "من فضلك، أين المكتبة؟" },
        { speaker: "B", en: "Go straight, then turn left after the bakery.", fr: "Allez tout droit, puis tournez à gauche après la boulangerie.", ar: "امشِ مستقيمًا ثم انعطف يسارًا بعد المخبزة." },
        { speaker: "A", en: "Thank you very much!", fr: "Merci beaucoup !", ar: "شكرًا جزيلًا!" },
      ],
    },
    {
      id: "future",
      emoji: "🚀",
      title: { en: "Future plans", fr: "Projets futurs", ar: "خطط المستقبل" },
      lines: [
        { speaker: "A", en: "What do you want to be when you grow up?", fr: "Que veux-tu faire quand tu seras grand ?", ar: "ماذا تريد أن تصبح عندما تكبر؟" },
        { speaker: "B", en: "I want to be a doctor to help people.", fr: "Je veux être médecin pour aider les gens.", ar: "أريد أن أصبح طبيبًا لأساعد الناس." },
        { speaker: "A", en: "That is a wonderful goal!", fr: "C'est un très beau projet !", ar: "هدف رائع!" },
      ],
    },
    {
      id: "opinion",
      emoji: "💬",
      title: { en: "Sharing opinions", fr: "Donner son avis", ar: "التعبير عن الرأي" },
      lines: [
        { speaker: "A", en: "What do you think about this movie?", fr: "Que penses-tu de ce film ?", ar: "ما رأيك في هذا الفيلم؟" },
        { speaker: "B", en: "In my opinion, it was interesting but too long.", fr: "À mon avis, il était intéressant mais trop long.", ar: "برأيي، كان مثيرًا للاهتمام لكنه طويل جدًا." },
        { speaker: "A", en: "I agree with you.", fr: "Je suis d'accord avec toi.", ar: "أنا أوافقك الرأي." },
      ],
    },
  ],
};

// ================= Grammar rules =================

export interface GrammarRule {
  id: string;
  emoji: string;
  title: { en: string; fr: string; ar: string };
  explanation: { en: string; fr: string; ar: string };
  examples: { en: string; fr: string; ar: string }[];
}

export const GRAMMAR: Record<AgeId, GrammarRule[]> = {
  little: [
    {
      id: "a-an",
      emoji: "🅰️",
      title: { en: "a / an", fr: "un / une", ar: "أدوات التنكير" },
      explanation: {
        en: "Use 'a' before a consonant sound and 'an' before a vowel sound.",
        fr: "On utilise « un » pour le masculin et « une » pour le féminin.",
        ar: "لا توجد أداة تنكير في العربية، فالاسم غير المعرّف بـ«ال» يكون نكرة.",
      },
      examples: [
        { en: "a cat", fr: "un chat", ar: "قطة" },
        { en: "an apple", fr: "une pomme", ar: "تفاحة" },
        { en: "a car", fr: "une voiture", ar: "سيارة" },
      ],
    },
    {
      id: "plural-s",
      emoji: "➕",
      title: { en: "One and many", fr: "Singulier et pluriel", ar: "المفرد والجمع" },
      explanation: {
        en: "Add -s to make most words plural.",
        fr: "En général, on ajoute -s pour le pluriel.",
        ar: "في العربية للجمع صيغ متعددة (مذكر سالم / مؤنث سالم / تكسير).",
      },
      examples: [
        { en: "one cat → two cats", fr: "un chat → deux chats", ar: "قط → قطط" },
        { en: "one dog → three dogs", fr: "un chien → trois chiens", ar: "كلب → كلاب" },
        { en: "one apple → four apples", fr: "une pomme → quatre pommes", ar: "تفاحة → تفاحات" },
      ],
    },
    {
      id: "colors-adj",
      emoji: "🎨",
      title: { en: "Describing colors", fr: "Décrire les couleurs", ar: "وصف الألوان" },
      explanation: {
        en: "Say the color after the word 'is'.",
        fr: "L'adjectif s'accorde avec le nom.",
        ar: "الصفة تتبع الموصوف في التذكير والتأنيث.",
      },
      examples: [
        { en: "The ball is red.", fr: "Le ballon est rouge.", ar: "الكرة حمراء." },
        { en: "The sky is blue.", fr: "Le ciel est bleu.", ar: "السماء زرقاء." },
      ],
    },
  ],
  kids: [
    {
      id: "verb-be",
      emoji: "🔷",
      title: { en: "The verb 'to be'", fr: "Le verbe « être »", ar: "أفعال الكينونة" },
      explanation: {
        en: "I am · you are · he/she is · we are · they are.",
        fr: "Je suis · tu es · il/elle est · nous sommes · vous êtes · ils/elles sont.",
        ar: "في العربية لا يوجد فعل 'يكون' في الحاضر، فيُحذف: «أنا طالب».",
      },
      examples: [
        { en: "I am happy.", fr: "Je suis content.", ar: "أنا سعيد." },
        { en: "You are kind.", fr: "Tu es gentil.", ar: "أنت لطيف." },
        { en: "She is tall.", fr: "Elle est grande.", ar: "هي طويلة." },
      ],
    },
    {
      id: "questions",
      emoji: "❓",
      title: { en: "Question words", fr: "Les mots interrogatifs", ar: "أدوات الاستفهام" },
      explanation: {
        en: "Use What / Who / Where / When / Why / How to ask questions.",
        fr: "Utilise Quoi / Qui / Où / Quand / Pourquoi / Comment.",
        ar: "استخدم: ما / من / أين / متى / لماذا / كيف.",
      },
      examples: [
        { en: "What is your name?", fr: "Comment tu t'appelles ?", ar: "ما اسمك؟" },
        { en: "Where do you live?", fr: "Où habites-tu ?", ar: "أين تسكن؟" },
        { en: "Why are you sad?", fr: "Pourquoi es-tu triste ?", ar: "لماذا أنت حزين؟" },
      ],
    },
    {
      id: "present-simple",
      emoji: "⏱️",
      title: { en: "Present simple", fr: "Présent simple", ar: "المضارع البسيط" },
      explanation: {
        en: "Use present simple for things you do every day. Add -s for he/she/it.",
        fr: "Le présent décrit les actions habituelles. Attention aux terminaisons.",
        ar: "الفعل المضارع يدل على حدثٍ يحصل الآن أو بشكل متكرر.",
      },
      examples: [
        { en: "I eat bread every morning.", fr: "Je mange du pain chaque matin.", ar: "آكل الخبز كل صباح." },
        { en: "She plays the piano.", fr: "Elle joue du piano.", ar: "هي تعزف البيانو." },
      ],
    },
    {
      id: "possessive",
      emoji: "🔑",
      title: { en: "My, your, his, her", fr: "Mon, ton, son", ar: "الضمائر المتصلة" },
      explanation: {
        en: "These words show who owns something.",
        fr: "Les adjectifs possessifs s'accordent avec l'objet possédé.",
        ar: "الضمائر المتصلة تُلحق بالاسم للدلالة على الملكية: كتابي، كتابك، كتابه.",
      },
      examples: [
        { en: "This is my book.", fr: "C'est mon livre.", ar: "هذا كتابي." },
        { en: "Where is your bag?", fr: "Où est ton sac ?", ar: "أين حقيبتك؟" },
      ],
    },
  ],
  tweens: [
    {
      id: "past-simple",
      emoji: "⏪",
      title: { en: "Past simple", fr: "Passé composé", ar: "الفعل الماضي" },
      explanation: {
        en: "Talk about finished actions. Regular verbs add -ed.",
        fr: "On utilise « avoir » ou « être » + participe passé.",
        ar: "يدل الفعل الماضي على حدثٍ انتهى قبل زمن التكلم.",
      },
      examples: [
        { en: "I played football yesterday.", fr: "J'ai joué au foot hier.", ar: "لعبتُ كرة القدم أمس." },
        { en: "She went to school.", fr: "Elle est allée à l'école.", ar: "ذهبت إلى المدرسة." },
      ],
    },
    {
      id: "future",
      emoji: "⏩",
      title: { en: "Talking about the future", fr: "Parler du futur", ar: "الحديث عن المستقبل" },
      explanation: {
        en: "Use 'will' + verb, or 'be going to' for plans.",
        fr: "Utilise le futur simple ou « aller » + infinitif.",
        ar: "يُصاغ المستقبل بإضافة السين أو «سوف» قبل الفعل المضارع.",
      },
      examples: [
        { en: "I will travel next summer.", fr: "Je voyagerai l'été prochain.", ar: "سأسافر في الصيف القادم." },
        { en: "We are going to study.", fr: "Nous allons étudier.", ar: "سوف ندرس." },
      ],
    },
    {
      id: "comparatives",
      emoji: "⚖️",
      title: { en: "Comparatives", fr: "Le comparatif", ar: "اسم التفضيل" },
      explanation: {
        en: "Add -er or use 'more' to compare two things.",
        fr: "Utilise « plus / moins / aussi ... que ».",
        ar: "يُصاغ اسم التفضيل على وزن «أفعل»: أكبر، أصغر، أجمل.",
      },
      examples: [
        { en: "A cat is smaller than a dog.", fr: "Un chat est plus petit qu'un chien.", ar: "القط أصغر من الكلب." },
        { en: "This book is more interesting.", fr: "Ce livre est plus intéressant.", ar: "هذا الكتاب أكثر إثارة." },
      ],
    },
    {
      id: "conditionals",
      emoji: "🌉",
      title: { en: "If ... then", fr: "Si ... alors", ar: "الشرط والجواب" },
      explanation: {
        en: "Use 'if' + present, then 'will' for likely situations.",
        fr: "« Si » + présent, futur simple dans la principale.",
        ar: "تُستخدم أدوات الشرط مثل «إذا» و«إن» للربط بين حدثين.",
      },
      examples: [
        { en: "If it rains, I will stay home.", fr: "S'il pleut, je resterai à la maison.", ar: "إذا أمطرت، سأبقى في البيت." },
        { en: "If you study, you will succeed.", fr: "Si tu travailles, tu réussiras.", ar: "إن اجتهدت، ستنجح." },
      ],
    },
    {
      id: "connectors",
      emoji: "🔗",
      title: { en: "Linking words", fr: "Connecteurs logiques", ar: "أدوات الربط" },
      explanation: {
        en: "Words like 'and, but, because, so' connect ideas.",
        fr: "« Et, mais, parce que, donc » relient les idées.",
        ar: "أدوات الربط: «و، لكن، لأن، إذن» تربط بين الجمل.",
      },
      examples: [
        { en: "I was tired but I finished.", fr: "J'étais fatigué mais j'ai fini.", ar: "كنتُ متعبًا لكنني أكملت." },
        { en: "She left because it was late.", fr: "Elle est partie parce qu'il était tard.", ar: "غادرت لأن الوقت كان متأخرًا." },
      ],
    },
  ],
};

export function speakExtra(text: string, lang: ExtraLang) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "ar-SA";
    u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    // ignore
  }
}

export const AGE_LABEL: Record<AgeId, string> = {
  little: "3–5",
  kids: "5–9",
  tweens: "9–15",
};
