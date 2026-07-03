// Multi-language short stories for kids (English, French, Arabic).

export type StoryLang = "en" | "fr" | "ar";

export interface Story {
  id: string;
  emoji: string;
  color: "blue" | "green" | "orange" | "yellow" | "pink" | "purple";
  title: { en: string; fr: string; ar: string };
  paragraphs: { en: string[]; fr: string[]; ar: string[] };
  moral: { en: string; fr: string; ar: string };
}

export const STORIES: Story[] = [
  {
    id: "lion-mouse",
    emoji: "🦁",
    color: "orange",
    title: {
      en: "The Lion and the Mouse",
      fr: "Le Lion et la Souris",
      ar: "الأسد والفأر",
    },
    paragraphs: {
      en: [
        "One sunny day, a big lion was sleeping under a tree. A tiny mouse ran across his nose by mistake.",
        "The lion woke up and caught the mouse. 'Please let me go,' said the mouse. 'One day I will help you!' The lion laughed and set him free.",
        "Later, the lion got trapped in a hunter's net. He roared for help. The little mouse came running and chewed the ropes until the lion was free.",
      ],
      fr: [
        "Un jour ensoleillé, un grand lion dormait sous un arbre. Une petite souris courut sur son nez par erreur.",
        "Le lion se réveilla et attrapa la souris. « S'il te plaît, laisse-moi partir, » dit la souris. « Un jour, je t'aiderai ! » Le lion rit et la libéra.",
        "Plus tard, le lion fut pris dans le filet d'un chasseur. Il rugit à l'aide. La petite souris accourut et rongea les cordes jusqu'à libérer le lion.",
      ],
      ar: [
        "في يوم مشمس، كان أسد كبير نائمًا تحت شجرة. مرّ فأر صغير فوق أنفه بالخطأ.",
        "استيقظ الأسد وأمسك بالفأر. قال الفأر: «أرجوك أطلق سراحي، وسأساعدك يومًا ما!» ضحك الأسد وتركه.",
        "بعد أيام، وقع الأسد في شبكة صياد. زأر طالبًا المساعدة. جاء الفأر الصغير مسرعًا وقضم الحبال حتى تحرر الأسد.",
      ],
    },
    moral: {
      en: "Even the smallest friend can help you.",
      fr: "Même le plus petit ami peut t'aider.",
      ar: "حتى أصغر صديق يمكنه مساعدتك.",
    },
  },
  {
    id: "tortoise-hare",
    emoji: "🐢",
    color: "green",
    title: {
      en: "The Tortoise and the Hare",
      fr: "La Tortue et le Lièvre",
      ar: "السلحفاة والأرنب",
    },
    paragraphs: {
      en: [
        "A fast hare made fun of a slow tortoise. 'Let's race!' said the tortoise. Everyone laughed.",
        "The hare ran ahead quickly, then decided to nap under a tree because he was so far ahead.",
        "The tortoise walked slowly but never stopped. When the hare woke up, the tortoise had already won the race!",
      ],
      fr: [
        "Un lièvre rapide se moquait d'une tortue lente. « Faisons la course ! » dit la tortue. Tout le monde rit.",
        "Le lièvre courut loin devant, puis décida de faire une sieste sous un arbre.",
        "La tortue marcha lentement mais sans jamais s'arrêter. Quand le lièvre se réveilla, la tortue avait déjà gagné !",
      ],
      ar: [
        "كان أرنب سريع يسخر من سلحفاة بطيئة. قالت السلحفاة: «لنتسابق!» فضحك الجميع.",
        "ركض الأرنب بعيدًا ثم قرر النوم تحت شجرة لأنه كان متقدمًا كثيرًا.",
        "مشت السلحفاة ببطء لكنها لم تتوقف. عندما استيقظ الأرنب، كانت السلحفاة قد فازت بالسباق!",
      ],
    },
    moral: {
      en: "Slow and steady wins the race.",
      fr: "Lentement mais sûrement, on gagne la course.",
      ar: "الثابت البطيء يفوز في السباق.",
    },
  },
  {
    id: "ant-grasshopper",
    emoji: "🐜",
    color: "yellow",
    title: {
      en: "The Ant and the Grasshopper",
      fr: "La Fourmi et la Sauterelle",
      ar: "النملة والجندب",
    },
    paragraphs: {
      en: [
        "All summer, the ant worked hard collecting food. The grasshopper sang and danced.",
        "'Come play with me!' said the grasshopper. 'Winter is coming, I must work,' said the ant.",
        "When winter came, the grasshopper was cold and hungry. The kind ant shared her food and told him: next summer, work first!",
      ],
      fr: [
        "Tout l'été, la fourmi travailla dur pour ramasser de la nourriture. La sauterelle chantait et dansait.",
        "« Viens jouer ! » dit la sauterelle. « L'hiver arrive, je dois travailler, » répondit la fourmi.",
        "Quand l'hiver arriva, la sauterelle avait froid et faim. La gentille fourmi partagea sa nourriture et lui dit : l'été prochain, travaille d'abord !",
      ],
      ar: [
        "طوال الصيف، عملت النملة بجد لتجمع الطعام، بينما كان الجندب يغني ويرقص.",
        "قال الجندب: «تعالي نلعب!» فردت النملة: «الشتاء قادم، يجب أن أعمل.»",
        "عندما جاء الشتاء، شعر الجندب بالبرد والجوع. شاركته النملة الطيبة طعامها وقالت له: في الصيف القادم اعمل أولًا!",
      ],
    },
    moral: {
      en: "Work today, rest tomorrow.",
      fr: "Travaille aujourd'hui, repose-toi demain.",
      ar: "اعمل اليوم لتستريح غدًا.",
    },
  },
  {
    id: "boy-wolf",
    emoji: "🐺",
    color: "blue",
    title: {
      en: "The Boy Who Cried Wolf",
      fr: "Le Garçon qui Criait au Loup",
      ar: "الراعي الكاذب",
    },
    paragraphs: {
      en: [
        "A young shepherd watched sheep on a hill. He got bored and shouted 'Wolf! Wolf!' The villagers ran to help but there was no wolf. The boy laughed.",
        "He did the same trick again. The villagers came running, but again there was no wolf. They were angry.",
        "One day a real wolf came! The boy shouted 'Wolf!' but no one believed him. He learned that liars are not trusted, even when they tell the truth.",
      ],
      fr: [
        "Un jeune berger gardait des moutons sur une colline. Il s'ennuya et cria « Au loup ! » Les villageois accoururent mais il n'y avait pas de loup. Le garçon rit.",
        "Il refit la même farce. Les villageois accoururent encore, mais il n'y avait toujours pas de loup. Ils étaient fâchés.",
        "Un jour, un vrai loup arriva ! Le garçon cria « Au loup ! » mais personne ne le crut. Il comprit qu'un menteur n'est pas cru, même quand il dit la vérité.",
      ],
      ar: [
        "كان راعٍ صغير يرعى الأغنام على تلة. شعر بالملل فصاح: «ذئب! ذئب!» جاء أهل القرية مسرعين ولم يجدوا ذئبًا، فضحك الولد.",
        "كرر المزحة نفسها. جاء الناس مرة أخرى ولم يجدوا شيئًا، فغضبوا منه.",
        "في يوم من الأيام، جاء ذئب حقيقي! صاح الولد: «ذئب!» لكن لم يصدقه أحد. تعلم أن الكاذب لا يُصدَّق حتى لو قال الحق.",
      ],
    },
    moral: {
      en: "Always tell the truth.",
      fr: "Il faut toujours dire la vérité.",
      ar: "قل الحق دائمًا.",
    },
  },
  {
    id: "ugly-duckling",
    emoji: "🦆",
    color: "yellow",
    title: {
      en: "The Ugly Duckling",
      fr: "Le Vilain Petit Canard",
      ar: "البطة القبيحة",
    },
    paragraphs: {
      en: [
        "A little duckling was born looking different from his brothers and sisters. Everyone teased him and called him ugly.",
        "Sad and alone, he ran away and spent the winter by a cold lake.",
        "In the spring, he saw beautiful swans on the water. When he looked at his reflection, he saw that he had grown into a beautiful swan too!",
      ],
      fr: [
        "Un petit caneton naquit très différent de ses frères et sœurs. Tout le monde se moquait de lui.",
        "Triste et seul, il s'enfuit et passa l'hiver près d'un lac glacé.",
        "Au printemps, il vit de magnifiques cygnes sur l'eau. En regardant son reflet, il découvrit qu'il était devenu un beau cygne lui aussi !",
      ],
      ar: [
        "وُلد بطٌ صغير مختلفٌ عن إخوته. كان الجميع يسخر منه ويناديه بالقبيح.",
        "حزينًا ووحيدًا، هرب وقضى الشتاء عند بحيرة باردة.",
        "في الربيع، رأى بجعات جميلة على الماء. ولما نظر إلى انعكاسه، اكتشف أنه أصبح بجعة جميلة أيضًا!",
      ],
    },
    moral: {
      en: "Everyone is beautiful in their own way.",
      fr: "Chacun est beau à sa manière.",
      ar: "كل شخص جميل بطريقته الخاصة.",
    },
  },
  {
    id: "three-pigs",
    emoji: "🐷",
    color: "pink",
    title: {
      en: "The Three Little Pigs",
      fr: "Les Trois Petits Cochons",
      ar: "الخنازير الثلاثة الصغيرة",
    },
    paragraphs: {
      en: [
        "Three little pigs built houses. The first used straw, the second used sticks, and the third built with strong bricks.",
        "A big bad wolf blew down the straw house and the stick house! The two pigs ran to their brother's brick house.",
        "The wolf huffed and puffed but could not blow the brick house down. The three pigs were safe and learned that hard work keeps you strong!",
      ],
      fr: [
        "Trois petits cochons construisirent des maisons. Le premier en paille, le second en bois, et le troisième en briques solides.",
        "Un grand méchant loup souffla et fit tomber la maison de paille et celle de bois ! Les deux cochons coururent chez leur frère.",
        "Le loup souffla très fort mais ne put renverser la maison de briques. Les trois cochons étaient en sécurité et apprirent que le travail bien fait protège !",
      ],
      ar: [
        "بنى ثلاثة خنازير صغيرة بيوتًا. الأول من القش، والثاني من الخشب، والثالث من الطوب المتين.",
        "جاء الذئب الكبير الشرير ونفخ فسقط بيت القش وبيت الخشب! هرب الخنزيران إلى بيت أخيهما.",
        "نفخ الذئب بكل قوته لكنه لم يستطع هدم بيت الطوب. نجا الخنازير وتعلموا أن العمل الجاد يحمينا.",
      ],
    },
    moral: {
      en: "Do your work well and stay safe.",
      fr: "Fais bien ton travail et reste en sécurité.",
      ar: "أتقن عملك وابقَ آمنًا.",
    },
  },
];

export const STORY_MAP = Object.fromEntries(
  STORIES.map((s) => [s.id, s]),
) as Record<string, Story>;

export function getStory(id: string): Story | undefined {
  return STORY_MAP[id];
}

export const STORY_LANG_LABEL: Record<StoryLang, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function speakStory(text: string, lang: StoryLang) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "ar-SA";
    utter.rate = 0.85;
    utter.pitch = 1.05;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch {
    // ignore
  }
}
