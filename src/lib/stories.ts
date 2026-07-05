// Multi-language short stories for kids (English, French, Arabic).
// Each story is tagged with an ageLevel matching the AGE_GROUPS ids.

export type StoryLang = "en" | "fr" | "ar";
export type StoryAgeLevel = "little" | "kids" | "tweens";

export interface Story {
  id: string;
  emoji: string;
  color: "blue" | "green" | "orange" | "yellow" | "pink" | "purple";
  ageLevel: StoryAgeLevel;
  title: { en: string; fr: string; ar: string };
  paragraphs: { en: string[]; fr: string[]; ar: string[] };
  moral: { en: string; fr: string; ar: string };
}

export const STORIES: Story[] = [
  // ==================== LITTLE (3–5) — short, simple ====================
  {
    id: "lion-mouse",
    emoji: "🦁",
    color: "orange",
    ageLevel: "little",
    title: { en: "The Lion and the Mouse", fr: "Le Lion et la Souris", ar: "الأسد والفأر" },
    paragraphs: {
      en: [
        "A big lion was sleeping. A tiny mouse ran on his nose.",
        "The lion caught the mouse. The mouse said: 'Please let me go!' The lion smiled and let him go.",
        "Later, the lion got stuck in a net. The little mouse ran and chewed the ropes. The lion was free!",
      ],
      fr: [
        "Un grand lion dormait. Une petite souris courut sur son nez.",
        "Le lion attrapa la souris. La souris dit: « Laisse-moi partir ! » Le lion sourit et la libéra.",
        "Plus tard, le lion fut pris dans un filet. La petite souris rongea les cordes. Le lion fut libre !",
      ],
      ar: [
        "كان أسدٌ كبير نائمًا. مرّ فأرٌ صغير فوق أنفه.",
        "أمسك الأسد بالفأر. قال الفأر: «أرجوك أطلق سراحي!» ابتسم الأسد وتركه.",
        "بعد أيام، وقع الأسد في شبكة. جاء الفأر الصغير وقطع الحبال. تحرّر الأسد!",
      ],
    },
    moral: {
      en: "Even the smallest friend can help you.",
      fr: "Même le plus petit ami peut t'aider.",
      ar: "حتى أصغر صديق يمكنه مساعدتك.",
    },
  },
  {
    id: "three-pigs",
    emoji: "🐷",
    color: "pink",
    ageLevel: "little",
    title: { en: "The Three Little Pigs", fr: "Les Trois Petits Cochons", ar: "الخنازير الثلاثة الصغيرة" },
    paragraphs: {
      en: [
        "Three little pigs built houses. One of straw, one of sticks, one of bricks.",
        "A big wolf blew down the straw house and the stick house! The pigs ran away.",
        "The wolf could not blow down the brick house. The three pigs were safe inside.",
      ],
      fr: [
        "Trois petits cochons construisirent des maisons. Une en paille, une en bois, une en briques.",
        "Un grand loup souffla et fit tomber la maison de paille et celle de bois ! Les cochons s'enfuirent.",
        "Le loup ne put pas renverser la maison de briques. Les trois cochons étaient en sécurité.",
      ],
      ar: [
        "بنى ثلاثة خنازير صغيرة بيوتًا: من القش، ومن الخشب، ومن الطوب.",
        "نفخ الذئب فسقط بيت القش وبيت الخشب! هرب الخنازير.",
        "لم يستطع الذئب هدم بيت الطوب. صار الخنازير الثلاثة في أمان.",
      ],
    },
    moral: {
      en: "Do your work well and stay safe.",
      fr: "Fais bien ton travail et reste en sécurité.",
      ar: "أتقن عملك وابقَ آمنًا.",
    },
  },
  {
    id: "little-star",
    emoji: "⭐",
    color: "yellow",
    ageLevel: "little",
    title: { en: "The Little Star", fr: "La Petite Étoile", ar: "النجمة الصغيرة" },
    paragraphs: {
      en: [
        "A little star lived high in the sky. She wanted to shine brightly.",
        "'I am too small,' she said sadly. The moon smiled: 'Just try your best!'",
        "She tried and tried. Soon every child on Earth waved at the little shining star.",
      ],
      fr: [
        "Une petite étoile vivait très haut dans le ciel. Elle voulait briller fort.",
        "« Je suis trop petite, » dit-elle tristement. La lune sourit : « Fais de ton mieux ! »",
        "Elle essaya encore et encore. Bientôt, tous les enfants saluèrent la petite étoile brillante.",
      ],
      ar: [
        "عاشت نجمةٌ صغيرة عاليًا في السماء. أرادت أن تلمع بقوة.",
        "قالت بحزن: «أنا صغيرة جدًا.» ابتسم القمر: «حاولي فقط!»",
        "حاولت وحاولت. وسرعان ما لوّح لها كل طفل في الأرض.",
      ],
    },
    moral: {
      en: "Try your best, no matter your size.",
      fr: "Fais de ton mieux, quelle que soit ta taille.",
      ar: "ابذل قصارى جهدك مهما كان حجمك.",
    },
  },
  {
    id: "happy-rainbow",
    emoji: "🌈",
    color: "pink",
    ageLevel: "little",
    title: { en: "The Happy Rainbow", fr: "L'Arc-en-ciel Heureux", ar: "قوس قزح السعيد" },
    paragraphs: {
      en: [
        "After the rain, a beautiful rainbow appeared. Red, orange, yellow, green, blue, purple!",
        "Each color said: 'I am the best!' They started to fight.",
        "The sky said: 'You are beautiful together.' So they smiled and painted the sky as friends.",
      ],
      fr: [
        "Après la pluie, un bel arc-en-ciel apparut. Rouge, orange, jaune, vert, bleu, violet !",
        "Chaque couleur dit : « Je suis la meilleure ! » Elles se disputèrent.",
        "Le ciel dit : « Vous êtes belles ensemble. » Elles se sourirent et peignirent le ciel en amies.",
      ],
      ar: [
        "بعد المطر، ظهر قوس قزح جميل. أحمر وبرتقالي وأصفر وأخضر وأزرق وبنفسجي!",
        "قال كل لون: «أنا الأفضل!» وبدأوا يتشاجرون.",
        "قالت السماء: «أنتم جميلون معًا.» فابتسموا ورسموا السماء كأصدقاء.",
      ],
    },
    moral: { en: "We are stronger together.", fr: "Ensemble, on est plus fort.", ar: "معًا نكون أقوى." },
  },
  {
    id: "kind-cat",
    emoji: "🐱",
    color: "orange",
    ageLevel: "little",
    title: { en: "The Kind Cat", fr: "Le Chat Gentil", ar: "القطة الطيبة" },
    paragraphs: {
      en: [
        "A little cat found a lost bird. The bird was cold and scared.",
        "The cat did not scare the bird. She kept it warm all night.",
        "In the morning, the bird flew home and sang for the kind cat every day.",
      ],
      fr: [
        "Un petit chat trouva un oiseau perdu. L'oiseau avait froid et peur.",
        "Le chat ne fit pas peur à l'oiseau. Il le tint au chaud toute la nuit.",
        "Le matin, l'oiseau rentra chez lui et chanta pour le gentil chat chaque jour.",
      ],
      ar: [
        "وجدت قطةٌ صغيرة طائرًا ضائعًا. كان الطائر باردًا وخائفًا.",
        "لم تخفه القطة، بل دفّأته طوال الليل.",
        "في الصباح، عاد الطائر إلى بيته وصار يغني للقطة الطيبة كل يوم.",
      ],
    },
    moral: { en: "Be kind to those in need.", fr: "Sois gentil avec ceux qui ont besoin.", ar: "كن لطيفًا مع المحتاجين." },
  },
  {
    id: "brave-duckling",
    emoji: "🦆",
    color: "yellow",
    ageLevel: "little",
    title: { en: "The Brave Duckling", fr: "Le Petit Canard Courageux", ar: "البطة الشجاعة" },
    paragraphs: {
      en: [
        "A tiny duckling was afraid of the big pond. All his friends swam happily.",
        "Mama duck said: 'One little step at a time.'",
        "He put one foot, then two. Soon he was swimming and laughing with his friends.",
      ],
      fr: [
        "Un petit caneton avait peur du grand étang. Tous ses amis nageaient joyeusement.",
        "Maman canard dit : « Un petit pas à la fois. »",
        "Il mit un pied, puis deux. Bientôt, il nageait et riait avec ses amis.",
      ],
      ar: [
        "خافت بطةٌ صغيرة من البركة الكبيرة. كان أصدقاؤها يسبحون بفرح.",
        "قالت الأم: «خطوة صغيرة في كل مرة.»",
        "وضعت قدمًا ثم اثنتين، وسرعان ما صارت تسبح وتضحك مع أصدقائها.",
      ],
    },
    moral: { en: "Start small — courage grows.", fr: "Commence petit, le courage grandit.", ar: "ابدأ صغيرًا فالشجاعة تنمو." },
  },

  // ==================== KIDS (5–9) — medium length ====================
  {
    id: "tortoise-hare",
    emoji: "🐢",
    color: "green",
    ageLevel: "kids",
    title: { en: "The Tortoise and the Hare", fr: "La Tortue et le Lièvre", ar: "السلحفاة والأرنب" },
    paragraphs: {
      en: [
        "A fast hare made fun of a slow tortoise. 'Let's race!' said the tortoise. Everyone laughed.",
        "The hare ran ahead quickly, then decided to nap under a tree because he was so far ahead.",
        "The tortoise walked slowly but never stopped. When the hare woke up, the tortoise had already won the race!",
      ],
      fr: [
        "Un lièvre rapide se moquait d'une tortue lente. « Faisons la course ! » dit la tortue.",
        "Le lièvre courut loin devant, puis décida de faire une sieste sous un arbre.",
        "La tortue marcha lentement mais sans jamais s'arrêter. Quand le lièvre se réveilla, la tortue avait déjà gagné !",
      ],
      ar: [
        "كان أرنب سريع يسخر من سلحفاة بطيئة. قالت السلحفاة: «لنتسابق!»",
        "ركض الأرنب بعيدًا ثم قرر النوم تحت شجرة لأنه كان متقدمًا كثيرًا.",
        "مشت السلحفاة ببطء لكنها لم تتوقف. عندما استيقظ الأرنب، كانت قد فازت بالسباق!",
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
    ageLevel: "kids",
    title: { en: "The Ant and the Grasshopper", fr: "La Fourmi et la Sauterelle", ar: "النملة والجندب" },
    paragraphs: {
      en: [
        "All summer, the ant worked hard collecting food. The grasshopper sang and danced.",
        "'Come play with me!' said the grasshopper. 'Winter is coming, I must work,' said the ant.",
        "When winter came, the grasshopper was cold and hungry. The kind ant shared her food and said: next summer, work first!",
      ],
      fr: [
        "Tout l'été, la fourmi travailla dur. La sauterelle chantait et dansait.",
        "« Viens jouer ! » dit la sauterelle. « L'hiver arrive, je dois travailler, » répondit la fourmi.",
        "Quand l'hiver arriva, la sauterelle avait froid et faim. La fourmi partagea sa nourriture et dit : l'été prochain, travaille d'abord !",
      ],
      ar: [
        "طوال الصيف، عملت النملة بجد. أما الجندب فكان يغني ويرقص.",
        "قال الجندب: «تعالي نلعب!» فردت النملة: «الشتاء قادم، يجب أن أعمل.»",
        "عندما جاء الشتاء، جاع الجندب. شاركته النملة الطيبة طعامها وقالت له: في الصيف القادم اعمل أولًا!",
      ],
    },
    moral: { en: "Work today, rest tomorrow.", fr: "Travaille aujourd'hui, repose-toi demain.", ar: "اعمل اليوم لتستريح غدًا." },
  },
  {
    id: "boy-wolf",
    emoji: "🐺",
    color: "blue",
    ageLevel: "kids",
    title: { en: "The Boy Who Cried Wolf", fr: "Le Garçon qui Criait au Loup", ar: "الراعي الكاذب" },
    paragraphs: {
      en: [
        "A young shepherd watched sheep. He got bored and shouted 'Wolf!' The villagers ran to help. There was no wolf. The boy laughed.",
        "He tricked them again. The villagers came running, but again there was no wolf. They were angry.",
        "One day a real wolf came! The boy shouted 'Wolf!' but no one believed him. He learned that liars are not trusted.",
      ],
      fr: [
        "Un jeune berger gardait des moutons. Il s'ennuya et cria « Au loup ! » Les villageois accoururent. Pas de loup. Le garçon rit.",
        "Il refit la même farce. Les villageois accoururent encore, sans loup. Ils étaient fâchés.",
        "Un jour, un vrai loup arriva ! Le garçon cria « Au loup ! » mais personne ne le crut.",
      ],
      ar: [
        "كان راعٍ صغير يرعى الأغنام. شعر بالملل فصاح: «ذئب!» جاء الناس ولم يجدوا ذئبًا فضحك.",
        "كرر المزحة، فجاء الناس مرة أخرى ولم يجدوا شيئًا فغضبوا.",
        "في يوم، جاء ذئب حقيقي! صاح الولد: «ذئب!» لكن لم يصدقه أحد.",
      ],
    },
    moral: { en: "Always tell the truth.", fr: "Il faut toujours dire la vérité.", ar: "قل الحق دائمًا." },
  },
  {
    id: "ugly-duckling",
    emoji: "🦢",
    color: "yellow",
    ageLevel: "kids",
    title: { en: "The Ugly Duckling", fr: "Le Vilain Petit Canard", ar: "البطة القبيحة" },
    paragraphs: {
      en: [
        "A little duckling was born looking different from his brothers and sisters. Everyone teased him.",
        "Sad and alone, he ran away and spent the winter by a cold lake.",
        "In the spring, he saw beautiful swans. Looking at his reflection, he saw he had grown into a beautiful swan too!",
      ],
      fr: [
        "Un petit caneton naquit très différent de ses frères et sœurs. Tout le monde se moquait de lui.",
        "Triste et seul, il s'enfuit et passa l'hiver près d'un lac glacé.",
        "Au printemps, il vit de magnifiques cygnes. En regardant son reflet, il découvrit qu'il était devenu un beau cygne !",
      ],
      ar: [
        "وُلد بطٌ صغير مختلفٌ عن إخوته. سخر منه الجميع.",
        "حزينًا ووحيدًا، هرب وقضى الشتاء عند بحيرة باردة.",
        "في الربيع، رأى بجعات جميلة. ولما نظر إلى انعكاسه، اكتشف أنه صار بجعة جميلة!",
      ],
    },
    moral: { en: "Everyone is beautiful in their own way.", fr: "Chacun est beau à sa manière.", ar: "كل شخص جميل بطريقته." },
  },
  {
    id: "fox-crow",
    emoji: "🦊",
    color: "orange",
    ageLevel: "kids",
    title: { en: "The Fox and the Crow", fr: "Le Renard et le Corbeau", ar: "الثعلب والغراب" },
    paragraphs: {
      en: [
        "A crow found a piece of cheese and flew to a branch. A hungry fox saw her and wanted it.",
        "'Oh, beautiful crow, your voice must be lovely. Please sing!' said the fox.",
        "Proud, the crow opened her beak — and the cheese fell. The clever fox caught it and ran away.",
      ],
      fr: [
        "Un corbeau trouva un morceau de fromage et se posa sur une branche. Un renard affamé le vit.",
        "« Ô beau corbeau, ta voix doit être charmante. Chante ! » dit le renard.",
        "Fier, le corbeau ouvrit son bec — et le fromage tomba. Le renard rusé l'attrapa et s'enfuit.",
      ],
      ar: [
        "وجد غرابٌ قطعة جبن وطار بها إلى غصن. رآه ثعلبٌ جائع.",
        "قال الثعلب: «يا غراب الجميل، صوتك حتمًا رائع. غنِّ!»",
        "افتخر الغراب وفتح فمه — فسقطت الجبنة. أمسك بها الثعلب الماكر وهرب.",
      ],
    },
    moral: { en: "Don't trust flattery.", fr: "Méfie-toi des flatteurs.", ar: "لا تثق بالمتملّق." },
  },
  {
    id: "little-red-hen",
    emoji: "🐔",
    color: "pink",
    ageLevel: "kids",
    title: { en: "The Little Red Hen", fr: "La Petite Poule Rousse", ar: "الدجاجة الحمراء الصغيرة" },
    paragraphs: {
      en: [
        "The little red hen found wheat. 'Who will help me plant it?' 'Not I,' said the cat, dog, and pig.",
        "She planted, watered, harvested, and baked bread all by herself, while the others played.",
        "When the bread was ready, everyone wanted a piece. 'No,' she said, 'I made it alone, I will eat it alone.'",
      ],
      fr: [
        "La petite poule rousse trouva du blé. « Qui m'aidera à le planter ? » « Pas moi, » dirent le chat, le chien, le cochon.",
        "Elle planta, arrosa, récolta et cuisit le pain toute seule pendant que les autres jouaient.",
        "Quand le pain fut prêt, tous en voulaient. « Non, » dit-elle, « je l'ai fait seule, je le mangerai seule. »",
      ],
      ar: [
        "وجدت الدجاجة الحمراء حبّة قمح. سألت: «من يساعدني؟» قال القط والكلب والخنزير: «ليس أنا.»",
        "زرعت وسقت وحصدت وخبزت وحدها، بينما لعب الآخرون.",
        "لما نضج الخبز، أراد الجميع قطعة. قالت: «لا، صنعته وحدي، فآكله وحدي.»",
      ],
    },
    moral: { en: "Those who don't work don't share the reward.", fr: "Qui ne travaille pas ne partage pas la récompense.", ar: "من لا يعمل لا يشارك في الجزاء." },
  },
  {
    id: "north-wind-sun",
    emoji: "☀️",
    color: "yellow",
    ageLevel: "kids",
    title: { en: "The North Wind and the Sun", fr: "La Bise et le Soleil", ar: "الريح والشمس" },
    paragraphs: {
      en: [
        "The North Wind and the Sun argued about who was stronger. A traveler walked below wearing a coat.",
        "The Wind blew hard, but the traveler wrapped his coat tighter.",
        "The Sun shone warm and gentle. Soon the traveler took off his coat. Kindness won!",
      ],
      fr: [
        "La Bise et le Soleil se disputaient. Un voyageur passait, portant un manteau.",
        "La Bise souffla fort, mais l'homme serra son manteau.",
        "Le Soleil brilla doucement. Bientôt l'homme enleva son manteau. La douceur gagna !",
      ],
      ar: [
        "تجادلت الريح والشمس أيهما أقوى. كان مسافر يسير مرتديًا معطفًا.",
        "هبّت الريح بقوة، فتمسّك الرجل بمعطفه أكثر.",
        "أشرقت الشمس بلطف ودفء. فخلع المعطف. اللطف انتصر!",
      ],
    },
    moral: { en: "Kindness is stronger than force.", fr: "La gentillesse est plus forte que la force.", ar: "اللطف أقوى من القوة." },
  },
  {
    id: "golden-fish",
    emoji: "🐟",
    color: "blue",
    ageLevel: "kids",
    title: { en: "The Golden Fish", fr: "Le Poisson d'Or", ar: "السمكة الذهبية" },
    paragraphs: {
      en: [
        "A poor fisherman caught a golden fish. 'Please free me and I will grant a wish,' said the fish.",
        "He asked only for a new net. His wife was angry: 'Ask for a big house! Ask for gold!'",
        "The fish gave them everything, but the wife wanted more and more — until they lost it all. They learned to be thankful.",
      ],
      fr: [
        "Un pauvre pêcheur attrapa un poisson d'or. « Libère-moi et j'exaucerai un vœu, » dit le poisson.",
        "Il demanda juste un nouveau filet. Sa femme fâchée : « Demande une grande maison ! De l'or ! »",
        "Le poisson donna tout, mais la femme voulait toujours plus — jusqu'à tout perdre. Ils apprirent la gratitude.",
      ],
      ar: [
        "اصطاد صيادٌ فقير سمكةً ذهبية. قالت: «أطلقني وسأحقق أمنية.»",
        "طلب شبكة جديدة فقط. غضبت زوجته: «اطلب بيتًا كبيرًا! اطلب ذهبًا!»",
        "أعطتهما السمكة كل شيء، لكن الزوجة أرادت المزيد — حتى فقدا كل شيء. تعلّما الشكر.",
      ],
    },
    moral: { en: "Greed loses what it has.", fr: "L'avidité perd ce qu'elle a.", ar: "الطمع يُضيع ما بين يديك." },
  },
  {
    id: "goldilocks",
    emoji: "🐻",
    color: "orange",
    ageLevel: "kids",
    title: { en: "Goldilocks and the Three Bears", fr: "Boucle d'Or et les Trois Ours", ar: "الشعرة الذهبية والدببة الثلاثة" },
    paragraphs: {
      en: [
        "A girl called Goldilocks entered a small house in the forest. She tasted three bowls of soup and slept in a bed.",
        "She did not ask permission. She ate what was not hers and broke a chair.",
        "When the three bears came home, they were sad and angry. Goldilocks ran home and promised never to enter without asking.",
      ],
      fr: [
        "Une fille, Boucle d'Or, entra dans une maison de la forêt. Elle goûta trois bols de soupe et dormit dans un lit.",
        "Elle ne demanda pas la permission. Elle prit ce qui n'était pas à elle et cassa une chaise.",
        "Quand les trois ours rentrèrent, ils étaient tristes. Boucle d'Or s'enfuit et promit de toujours demander avant d'entrer.",
      ],
      ar: [
        "دخلت فتاةٌ اسمها «الشعرة الذهبية» بيتًا صغيرًا في الغابة. تذوّقت ثلاث أطباق حساء ونامت في سرير.",
        "لم تستأذن. أكلت ما ليس لها وكسرت كرسيًا.",
        "لمّا عادت الدببة الثلاثة، حزنوا. هربت الفتاة ووعدت ألا تدخل بيتًا دون إذن.",
      ],
    },
    moral: { en: "Always ask before you take.", fr: "Demande toujours avant de prendre.", ar: "استأذن قبل أن تأخذ." },
  },

  // ==================== TWEENS (9–15) — longer, deeper ====================
  {
    id: "boy-filbert",
    emoji: "🌰",
    color: "green",
    ageLevel: "tweens",
    title: { en: "The Boy and the Filberts", fr: "L'Enfant et les Noisettes", ar: "الولد والبندق" },
    paragraphs: {
      en: [
        "A boy pushed his hand into a jar full of filberts. He grabbed as many as he could.",
        "When he tried to pull his hand out, it was stuck. He cried in frustration and refused to let any go.",
        "His mother said, 'Be content with half, my boy, and you will easily get your hand out.' He listened, and freed his hand — with plenty of nuts.",
      ],
      fr: [
        "Un garçon plongea sa main dans un pot plein de noisettes et en prit autant qu'il pouvait.",
        "Quand il essaya de retirer sa main, elle resta coincée. Il pleura mais refusa d'en lâcher.",
        "Sa mère dit : « Contente-toi de la moitié, mon fils, et tu retireras ta main facilement. » Il obéit et sortit sa main pleine.",
      ],
      ar: [
        "أدخل ولدٌ يده في جرّة مملوءة بالبندق، وأمسك بأكبر كمية ممكنة.",
        "عندما حاول إخراج يده، عَلِقت. بكى، لكنه رفض أن يترك أيّ حبة.",
        "قالت له أمه: «اقنع بالنصف يا بني وسوف تخرج يدك بسهولة.» أطاعها فخرجت يده ممتلئة.",
      ],
    },
    moral: {
      en: "Do not try to grab too much at once.",
      fr: "Ne cherche pas à tout prendre d'un coup.",
      ar: "لا تحاول أن تأخذ كل شيء مرة واحدة.",
    },
  },
  {
    id: "two-travelers-bear",
    emoji: "🐻",
    color: "orange",
    ageLevel: "tweens",
    title: { en: "The Two Travelers and the Bear", fr: "Les Deux Voyageurs et l'Ours", ar: "المسافران والدب" },
    paragraphs: {
      en: [
        "Two friends were walking through a forest when a huge bear appeared. One climbed a tree without warning his friend.",
        "The other fell to the ground and pretended to be dead. The bear sniffed him and, thinking him dead, walked away.",
        "The first climbed down and asked what the bear whispered. His friend replied: 'He said never trust a friend who leaves you in danger.'",
      ],
      fr: [
        "Deux amis marchaient dans une forêt quand un énorme ours apparut. L'un grimpa à un arbre sans prévenir l'autre.",
        "L'autre se jeta au sol et fit le mort. L'ours le renifla puis s'en alla.",
        "Le premier descendit et demanda ce que l'ours avait chuchoté. L'ami répondit : « Ne fais jamais confiance à un ami qui te laisse en danger. »",
      ],
      ar: [
        "كان صديقان يسيران في غابة، فظهر دبٌّ ضخم. تسلّق أحدهما شجرة دون أن ينبّه صاحبه.",
        "أما الآخر فاستلقى على الأرض متظاهرًا بالموت. شمّه الدب ثم انصرف.",
        "نزل الأول وسأله: ماذا همس الدب في أذنك؟ فأجاب: «قال: لا تثق بصديق يتركك في الخطر.»",
      ],
    },
    moral: {
      en: "A true friend stands by you in hard times.",
      fr: "Un vrai ami reste avec toi dans l'épreuve.",
      ar: "الصديق الحقيقي يقف معك في الشدائد.",
    },
  },
  {
    id: "wise-judge",
    emoji: "⚖️",
    color: "purple",
    ageLevel: "tweens",
    title: { en: "The Wise Judge", fr: "Le Juge Sage", ar: "القاضي الحكيم" },
    paragraphs: {
      en: [
        "Two women came to a wise judge, each claiming the same baby was hers.",
        "The judge said: 'Cut the child in two, half for each.' One mother screamed: 'No! Give him to her, but let him live!'",
        "The judge smiled: 'She is the true mother — because a true mother would rather lose her child than see him harmed.'",
      ],
      fr: [
        "Deux femmes vinrent voir un juge sage, chacune revendiquant le même bébé.",
        "Le juge dit : « Coupons l'enfant en deux, moitié pour chacune. » Une mère cria : « Non ! Donnez-le-lui, mais laissez-le vivre ! »",
        "Le juge sourit : « C'est la vraie mère — car une vraie mère préfère perdre son enfant plutôt que le voir souffrir. »",
      ],
      ar: [
        "جاءت امرأتان إلى قاضٍ حكيم، كلٌّ منهما تدّعي أن الطفل ابنها.",
        "قال القاضي: «اقسموا الطفل نصفين.» صرخت إحداهن: «لا! أعطوها إياه ليعيش!»",
        "ابتسم القاضي: «هي الأم الحقيقية — فالأم الصادقة تفضّل فقده على أذيته.»",
      ],
    },
    moral: {
      en: "True love sacrifices for others.",
      fr: "L'amour véritable se sacrifie pour l'autre.",
      ar: "الحب الحقيقي يضحّي من أجل الآخرين.",
    },
  },
  {
    id: "sindbad-first",
    emoji: "⛵",
    color: "blue",
    ageLevel: "tweens",
    title: { en: "Sindbad's First Voyage", fr: "Le Premier Voyage de Sindbad", ar: "السفرة الأولى للسندباد" },
    paragraphs: {
      en: [
        "Young Sindbad sailed the seas with merchants. One day they stopped at an island to rest and cook a meal.",
        "The 'island' suddenly moved — it was a giant whale! Sindbad was left alone in the ocean, holding onto a piece of wood.",
        "After days at sea, kind sailors rescued him. He returned home wiser, and learned that things are not always what they seem.",
      ],
      fr: [
        "Le jeune Sindbad voguait avec des marchands. Un jour, ils s'arrêtèrent sur une île pour se reposer.",
        "L'« île » se mit à bouger — c'était une baleine géante ! Sindbad se retrouva seul en mer, agrippé à un bout de bois.",
        "Après des jours, de bons marins le sauvèrent. Il rentra plus sage, comprenant que les apparences trompent.",
      ],
      ar: [
        "أبحر السندباد الشاب مع التجار. توقفوا يومًا في جزيرة ليستريحوا ويطبخوا.",
        "تحرّكت «الجزيرة» فجأة — كانت حوتًا عملاقًا! بقي السندباد وحيدًا في البحر متمسّكًا بلوح خشب.",
        "بعد أيام، أنقذه بحارة طيبون. عاد إلى دياره أكثر حكمة وقد تعلّم أن المظاهر خدّاعة.",
      ],
    },
    moral: {
      en: "Look beyond appearances.",
      fr: "Ne te fie pas aux apparences.",
      ar: "لا تحكم من المظاهر.",
    },
  },
  {
    id: "merchant-genie",
    emoji: "🧞",
    color: "purple",
    ageLevel: "tweens",
    title: { en: "The Merchant and the Genie", fr: "Le Marchand et le Génie", ar: "التاجر والجني" },
    paragraphs: {
      en: [
        "A merchant rested under a tree and threw a date stone. A giant genie appeared, furious: 'You have killed my son!'",
        "The merchant begged for one year to say goodbye to his family. The genie agreed and let him go.",
        "One year later, the honest merchant returned to keep his promise. Three wise travelers heard his story, and each told a tale so amazing that the genie forgave him.",
      ],
      fr: [
        "Un marchand se reposait sous un arbre et jeta un noyau de datte. Un génie géant apparut : « Tu as tué mon fils ! »",
        "Le marchand supplia un an pour faire ses adieux. Le génie accepta.",
        "Un an plus tard, le marchand honnête revint. Trois voyageurs racontèrent tour à tour des histoires si merveilleuses que le génie le pardonna.",
      ],
      ar: [
        "استراح تاجر تحت شجرة ورمى نواة تمر. ظهر جنيٌّ عملاق غاضبًا: «لقد قتلت ابني!»",
        "توسّل التاجر أن يعود عامًا ليودّع أهله. قبِل الجني.",
        "بعد عام، عاد التاجر الصادق. حكى ثلاثة مسافرين حكماء قصصًا عجيبة فعفا عنه الجني.",
      ],
    },
    moral: {
      en: "Honesty and good stories can save a life.",
      fr: "L'honnêteté et les belles histoires peuvent sauver une vie.",
      ar: "الصدق والحكايات الجميلة تنقذ الأرواح.",
    },
  },
  {
    id: "farmer-sons",
    emoji: "🌾",
    color: "green",
    ageLevel: "tweens",
    title: { en: "The Farmer and His Sons", fr: "Le Fermier et Ses Fils", ar: "الفلاح وأبناؤه" },
    paragraphs: {
      en: [
        "An old farmer was dying. He called his three sons and said: 'A treasure lies hidden in the vineyard. Dig, and you will find it.'",
        "After his death, the sons dug the whole field, corner to corner. They found no gold.",
        "But that autumn, the vineyard gave the richest harvest they had ever seen. The true treasure was their hard work.",
      ],
      fr: [
        "Un vieux fermier mourant appela ses trois fils : « Un trésor est caché dans la vigne. Creusez, et vous le trouverez. »",
        "À sa mort, les fils bêchèrent tout le champ. Ils ne trouvèrent aucun or.",
        "Mais cet automne, la vigne donna la plus riche récolte de leur vie. Le vrai trésor, c'était leur travail.",
      ],
      ar: [
        "دعا فلاحٌ عجوزٌ على فراش الموت أبناءه الثلاثة وقال: «كنزٌ مخبأ في الكرم، فاحفروا تجدوه.»",
        "بعد وفاته، حفروا الأرض كلها من كل جانب، لكنهم لم يجدوا ذهبًا.",
        "لكن في الخريف، أعطى الكرم أوفر محصول رأوه. كان الكنز الحقيقي هو تعبهم.",
      ],
    },
    moral: {
      en: "Hard work is the true treasure.",
      fr: "Le vrai trésor, c'est le travail.",
      ar: "العمل الجاد هو الكنز الحقيقي.",
    },
  },
  {
    id: "reed-oak",
    emoji: "🌳",
    color: "green",
    ageLevel: "tweens",
    title: { en: "The Oak and the Reed", fr: "Le Chêne et le Roseau", ar: "البلوط والقصبة" },
    paragraphs: {
      en: [
        "A mighty oak tree laughed at a small reed by the river: 'You bend at every breeze — how weak!'",
        "'I bend, but I do not break,' answered the reed calmly.",
        "One night a great storm came. The proud oak was torn out by its roots, while the humble reed bent low and stood again in the morning.",
      ],
      fr: [
        "Un chêne puissant se moqua d'un roseau : « Tu plies au moindre vent — quelle faiblesse ! »",
        "« Je plie, mais je ne romps pas, » répondit calmement le roseau.",
        "Une nuit, une grande tempête vint. Le chêne orgueilleux fut arraché, tandis que l'humble roseau se releva au matin.",
      ],
      ar: [
        "سخرت شجرة بلوط عظيمة من قصبةٍ صغيرة: «تنحنين عند كل نسمة — يا لضعفك!»",
        "أجابت القصبة بهدوء: «أنحني، لكنني لا أنكسر.»",
        "في ليلة، هبّت عاصفة عظيمة. اقتُلعت البلوطة المتكبرة، وبقيت القصبة المتواضعة قائمة في الصباح.",
      ],
    },
    moral: {
      en: "Flexibility beats stubborn pride.",
      fr: "La souplesse vaut mieux que l'orgueil.",
      ar: "المرونة أقوى من الكبرياء.",
    },
  },
  {
    id: "milkmaid",
    emoji: "🥛",
    color: "pink",
    ageLevel: "tweens",
    title: { en: "The Milkmaid and Her Pail", fr: "La Laitière et le Pot au Lait", ar: "بائعة الحليب" },
    paragraphs: {
      en: [
        "A young milkmaid walked to market with a pail of milk on her head. She began to dream.",
        "'With the milk I'll buy eggs, from eggs come chickens, from chickens more money, then a dress, and boys will look at me — but I'll toss my head like this!'",
        "As she tossed her head, the pail fell. The milk spilled, and all her dreams with it.",
      ],
      fr: [
        "Une jeune laitière allait au marché, un pot de lait sur la tête. Elle se mit à rêver.",
        "« Avec ce lait j'achèterai des œufs, puis des poules, puis de l'argent, puis une robe — et je secouerai la tête comme ceci ! »",
        "En secouant la tête, le pot tomba. Le lait se répandit, et tous ses rêves aussi.",
      ],
      ar: [
        "كانت فتاةٌ صغيرة تحمل إناء حليب على رأسها في طريقها إلى السوق. بدأت تحلم.",
        "«بالحليب سأشتري بيضًا، ومن البيض دجاجًا، ومن الدجاج نقودًا، ثم فستانًا — سيلتفت الجميع، وسأميل رأسي هكذا!»",
        "ومالت رأسها، فسقط الإناء وانسكب الحليب، ومعه أحلامها كلها.",
      ],
    },
    moral: {
      en: "Don't count your chickens before they hatch.",
      fr: "Ne vends pas la peau de l'ours avant de l'avoir tué.",
      ar: "لا تبنِ قصورًا على الرمال.",
    },
  },
  // ==================== More LITTLE (3–5) ====================
  {
    id: "sleepy-moon",
    emoji: "🌙",
    color: "purple",
    ageLevel: "little",
    title: { en: "The Sleepy Moon", fr: "La Lune Endormie", ar: "القمر النعسان" },
    paragraphs: {
      en: [
        "The moon was very sleepy. She yawned in the dark sky.",
        "The little stars sang a soft song: 'Sleep well, dear moon.'",
        "The moon smiled and closed her eyes. The sun came up to say good morning.",
      ],
      fr: [
        "La lune avait très sommeil. Elle bâilla dans le ciel sombre.",
        "Les petites étoiles chantèrent doucement : « Dors bien, chère lune. »",
        "La lune sourit et ferma les yeux. Le soleil se leva pour dire bonjour.",
      ],
      ar: [
        "كان القمر نعسانًا جدًا. تثاءب في السماء المظلمة.",
        "غنّت النجوم الصغيرة بلطف: «نم جيدًا يا قمرنا الحبيب.»",
        "ابتسم القمر وأغمض عينيه. وأشرقت الشمس لتقول صباح الخير.",
      ],
    },
    moral: { en: "Everyone needs rest.", fr: "Tout le monde a besoin de repos.", ar: "الجميع بحاجة إلى الراحة." },
  },
  {
    id: "puppy-friend",
    emoji: "🐶",
    color: "orange",
    ageLevel: "little",
    title: { en: "Puppy's New Friend", fr: "Le Nouvel Ami du Chiot", ar: "صديق الجرو الجديد" },
    paragraphs: {
      en: [
        "A small puppy played alone in the park.",
        "A little girl came and gave him a red ball.",
        "They played all day. The puppy had a new best friend!",
      ],
      fr: [
        "Un petit chiot jouait tout seul dans le parc.",
        "Une petite fille arriva et lui donna une balle rouge.",
        "Ils jouèrent toute la journée. Le chiot avait un nouveau meilleur ami !",
      ],
      ar: [
        "كان جروٌ صغير يلعب وحده في الحديقة.",
        "جاءت فتاةٌ صغيرة وأعطته كرة حمراء.",
        "لعبا طوال اليوم. صار للجرو صديقٌ جديد!",
      ],
    },
    moral: { en: "Sharing makes friends.", fr: "Partager, c'est se faire des amis.", ar: "المشاركة تصنع الأصدقاء." },
  },
  {
    id: "apple-tree",
    emoji: "🍎",
    color: "green",
    ageLevel: "little",
    title: { en: "The Little Apple Tree", fr: "Le Petit Pommier", ar: "شجرة التفاح الصغيرة" },
    paragraphs: {
      en: [
        "A little apple tree grew in a sunny garden.",
        "Sun, rain and love helped it grow tall and strong.",
        "One day it gave sweet red apples to every child in the village.",
      ],
      fr: [
        "Un petit pommier poussait dans un jardin ensoleillé.",
        "Le soleil, la pluie et l'amour l'aidèrent à grandir.",
        "Un jour, il offrit de belles pommes rouges à tous les enfants du village.",
      ],
      ar: [
        "نمت شجرة تفاح صغيرة في حديقة مشمسة.",
        "ساعدتها الشمس والمطر والحب على أن تكبر قوية.",
        "وفي يوم، أعطت تفاحًا أحمر لذيذًا لكل أطفال القرية.",
      ],
    },
    moral: { en: "Kindness bears sweet fruit.", fr: "La bonté donne de beaux fruits.", ar: "الطيبة تُثمر أجمل الثمار." },
  },

  // ==================== More KIDS (5–9) ====================
  {
    id: "honest-woodcutter",
    emoji: "🪓",
    color: "green",
    ageLevel: "kids",
    title: { en: "The Honest Woodcutter", fr: "Le Bûcheron Honnête", ar: "الحطاب الصادق" },
    paragraphs: {
      en: [
        "A poor woodcutter dropped his axe into a deep river. He cried.",
        "A kind spirit brought a golden axe, then a silver one. 'These are not mine,' he said each time.",
        "Finally the spirit showed his old iron axe. 'This one!' he smiled. The spirit gave him all three for his honesty.",
      ],
      fr: [
        "Un pauvre bûcheron laissa tomber sa hache dans la rivière. Il pleura.",
        "Un esprit bienveillant apporta une hache en or, puis en argent. « Ce n'est pas la mienne, » répondit-il.",
        "Enfin, l'esprit montra sa vieille hache en fer. « Celle-ci ! » L'esprit lui offrit les trois pour son honnêteté.",
      ],
      ar: [
        "أوقع حطابٌ فقير فأسه في نهر عميق فبكى.",
        "جاء روحٌ طيب بفأس ذهبية ثم فضية. قال في كل مرة: «ليست لي.»",
        "أخيرًا أظهر الروح فأسه الحديدية القديمة. ابتسم وقال: «هذه!» فأعطاه الروح الثلاثة جزاء صدقه.",
      ],
    },
    moral: { en: "Honesty is always rewarded.", fr: "L'honnêteté est toujours récompensée.", ar: "الصدق دائمًا مكافأ." },
  },
  {
    id: "goldilocks",
    emoji: "🐻",
    color: "orange",
    ageLevel: "kids",
    title: { en: "Goldilocks and the Three Bears", fr: "Boucles d'Or et les Trois Ours", ar: "الشعر الذهبي والدببة الثلاثة" },
    paragraphs: {
      en: [
        "A girl named Goldilocks found a house in the forest. She tried three bowls of porridge — one was just right.",
        "She tried three chairs and three beds. The smallest of each was just right, and she fell asleep.",
        "The three bears came home! Goldilocks woke up, said sorry, and ran home. She learned not to enter without asking.",
      ],
      fr: [
        "Une fille nommée Boucles d'Or trouva une maison dans la forêt. Elle goûta trois bols de porridge.",
        "Elle essaya trois chaises et trois lits. Les plus petits étaient parfaits et elle s'endormit.",
        "Les trois ours rentrèrent ! Boucles d'Or se réveilla, s'excusa et s'enfuit chez elle.",
      ],
      ar: [
        "وجدت فتاة اسمها الشعر الذهبي بيتًا في الغابة. جرّبت ثلاث صحون من العصيدة.",
        "جرّبت ثلاث كراسي وثلاث أسِرّة، فكان الأصغر مناسبًا لها فنامت.",
        "عادت الدببة الثلاثة! استيقظت الفتاة واعتذرت وهربت إلى بيتها.",
      ],
    },
    moral: { en: "Respect other people's homes.", fr: "Respecte la maison des autres.", ar: "احترم بيوت الآخرين." },
  },
  {
    id: "clever-crow",
    emoji: "🐦",
    color: "blue",
    ageLevel: "kids",
    title: { en: "The Clever Crow", fr: "Le Corbeau Intelligent", ar: "الغراب الذكي" },
    paragraphs: {
      en: [
        "A thirsty crow found a jug with a little water at the bottom. His beak could not reach it.",
        "He thought hard, then dropped small stones into the jug one by one.",
        "The water slowly rose to the top. The clever crow drank happily.",
      ],
      fr: [
        "Un corbeau assoiffé trouva une cruche avec un peu d'eau au fond. Son bec ne pouvait pas l'atteindre.",
        "Il réfléchit, puis laissa tomber de petits cailloux dans la cruche un à un.",
        "L'eau monta jusqu'en haut. Le corbeau malin but avec joie.",
      ],
      ar: [
        "وجد غرابٌ عطشان جرّة فيها قليل من الماء في القاع. لم يصل منقاره إليها.",
        "فكّر، ثم بدأ يُلقي حصى صغيرة داخل الجرّة واحدة تلو الأخرى.",
        "ارتفع الماء إلى الأعلى، فشرب الغراب الذكي بسعادة.",
      ],
    },
    moral: { en: "Use your brain to solve problems.", fr: "Sers-toi de ta tête pour résoudre les problèmes.", ar: "استخدم عقلك لحل المشكلات." },
  },

  // ==================== More TWEENS (9–15) ====================
  {
    id: "golden-touch",
    emoji: "👑",
    color: "yellow",
    ageLevel: "tweens",
    title: { en: "King Midas and the Golden Touch", fr: "Le Roi Midas et le Toucher d'Or", ar: "الملك ميداس واللمسة الذهبية" },
    paragraphs: {
      en: [
        "King Midas loved gold above all things. A spirit granted him one wish: everything he touched would turn to gold.",
        "At first he was thrilled — flowers, chairs, even his food became gold. But when his daughter ran to hug him, she turned to a golden statue.",
        "Crying, Midas begged for the gift to be taken back. He learned that love is worth more than any treasure.",
      ],
      fr: [
        "Le roi Midas aimait l'or plus que tout. Un esprit lui offrit un vœu : tout ce qu'il toucherait deviendrait or.",
        "D'abord ravi, il transforma fleurs, chaises et nourriture en or. Mais quand sa fille vint l'embrasser, elle devint une statue d'or.",
        "En pleurs, Midas supplia qu'on lui retire ce don. Il comprit que l'amour vaut plus que tout trésor.",
      ],
      ar: [
        "أحبّ الملك ميداس الذهب فوق كل شيء. منحه روحٌ أمنية واحدة: كل ما يلمسه يصير ذهبًا.",
        "فرح في البداية، فتحوّلت الزهور والكراسي وحتى الطعام إلى ذهب. لكن حين احتضنته ابنته، تحوّلت إلى تمثال ذهبي.",
        "بكى ميداس وتوسّل أن تُنزع منه هذه الهبة. تعلّم أن الحب أثمن من كل كنز.",
      ],
    },
    moral: { en: "Love matters more than gold.", fr: "L'amour vaut plus que l'or.", ar: "الحب أغلى من الذهب." },
  },
  {
    id: "icarus",
    emoji: "🪶",
    color: "blue",
    ageLevel: "tweens",
    title: { en: "Icarus and the Wax Wings", fr: "Icare et les Ailes de Cire", ar: "إيكاروس والأجنحة الشمعية" },
    paragraphs: {
      en: [
        "Icarus and his father made wings of feathers and wax to escape an island. 'Don't fly too high,' his father warned.",
        "Amazed by the sky, Icarus flew higher and higher, ignoring the warning.",
        "The sun melted his wax wings. He fell into the sea, and the world remembered his lesson forever.",
      ],
      fr: [
        "Icare et son père fabriquèrent des ailes de plumes et de cire pour s'échapper d'une île. « Ne vole pas trop haut, » avertit son père.",
        "Émerveillé par le ciel, Icare monta de plus en plus haut, ignorant l'avertissement.",
        "Le soleil fit fondre ses ailes. Il tomba dans la mer, et le monde retint la leçon pour toujours.",
      ],
      ar: [
        "صنع إيكاروس ووالده أجنحة من الريش والشمع للهرب من الجزيرة. حذّره أبوه: «لا تطر عاليًا.»",
        "أدهشته السماء، فطار أعلى وأعلى، متجاهلًا التحذير.",
        "أذابت الشمس شمع أجنحته، فسقط في البحر، وبقيت العبرة إلى الأبد.",
      ],
    },
    moral: { en: "Listen to wise advice.", fr: "Écoute les conseils sages.", ar: "أنصت لنصيحة الحكماء." },
  },
  {
    id: "bamboo-flute",
    emoji: "🎋",
    color: "green",
    ageLevel: "tweens",
    title: { en: "The Bamboo Flute", fr: "La Flûte de Bambou", ar: "ناي الخيزران" },
    paragraphs: {
      en: [
        "A shy boy loved music but never played in front of others. He carved a flute from a bamboo stem.",
        "For years he practiced alone by the river, until one evening a traveler heard him and stopped.",
        "The traveler cried at the beauty of the song. 'Share your gift,' he said. The boy grew into a great musician.",
      ],
      fr: [
        "Un garçon timide aimait la musique mais ne jouait jamais devant les autres. Il tailla une flûte dans un bambou.",
        "Pendant des années, il joua seul au bord de la rivière, jusqu'à ce qu'un voyageur l'entende un soir.",
        "Le voyageur pleura devant la beauté du chant. « Partage ton don, » lui dit-il. Le garçon devint un grand musicien.",
      ],
      ar: [
        "أحبّ فتى خجول الموسيقى، لكنه لم يعزف أمام أحد. صنع ناياً من قصبة خيزران.",
        "تدرّب سنواتٍ وحده قرب النهر، حتى سمعه في مساءٍ ما مسافرٌ فتوقف.",
        "بكى المسافر من جمال اللحن، وقال: «شارك موهبتك.» فصار الفتى موسيقيًا عظيمًا.",
      ],
    },
    moral: { en: "A shared talent grows brighter.", fr: "Un talent partagé brille davantage.", ar: "الموهبة تُشرق حين تُشارَك." },
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

export const AGE_LEVEL_LABEL: Record<StoryAgeLevel, { en: string; ar: string; range: string; emoji: string }> = {
  little: { en: "Little (3–5)", ar: "الصغار (3–5)", range: "3-5", emoji: "🧸" },
  kids: { en: "Kids (5–9)", ar: "الأطفال (5–9)", range: "5-9", emoji: "🎒" },
  tweens: { en: "Young (9–15)", ar: "الشباب (9–15)", range: "9-15", emoji: "🧭" },
};

export function storiesForLevel(level: StoryAgeLevel): Story[] {
  return STORIES.filter((s) => s.ageLevel === level);
}

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
