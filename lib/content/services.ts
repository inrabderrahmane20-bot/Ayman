import { type Faq, type Localized, type Section, L } from './types';

export type ServiceContent = {
  slug: string;
  icon: 'dumbbell' | 'leaf' | 'chart' | 'compass';
  name: Localized<string>;
  metaTitle: Localized<string>;
  metaDescription: Localized<string>;
  eyebrow: Localized<string>;
  h1: Localized<string>;
  intro: Localized<string>;
  summary: Localized<string>;
  forWho: Localized<string[]>;
  sections: Localized<Section[]>;
  faq: Localized<Faq[]>;
  ctaTitle: Localized<string>;
  ctaText: Localized<string>;
};

export const services: ServiceContent[] = [
  {
    slug: 'online-fitness-coaching',
    icon: 'compass',
    name: L('Online fitness coaching', 'Coaching sportif en ligne', 'التدريب الرياضي عبر الإنترنت'),
    metaTitle: L(
      'Online Fitness Coaching — Written Plans & Reviews | Coach Ayman',
      'Coaching sportif en ligne — plans écrits et bilans | Coach Ayman',
      'تدريب رياضي عبر الإنترنت — خطط مكتوبة ومتابعة | الكوتش أيمن',
    ),
    metaDescription: L(
      'Personal training and nutrition guidance delivered online: assessment, written plan, scheduled reviews and direct messaging. Coaching in English, French and Arabic.',
      "Entraînement et nutrition personnalisés en ligne : bilan, plan écrit, bilans planifiés et messagerie directe. Coaching en français, anglais et arabe.",
      'تدريب وتغذية مخصصان عبر الإنترنت: تقييم، خطة مكتوبة، مراجعات مجدولة ورسائل مباشرة. بالعربية والفرنسية والإنجليزية.',
    ),
    eyebrow: L('The core service', 'Le service principal', 'الخدمة الأساسية'),
    h1: L(
      'Online fitness coaching built around your week',
      'Un coaching sportif en ligne construit autour de votre semaine',
      'تدريب رياضي عبر الإنترنت مبني على أسبوعك',
    ),
    intro: L(
      'A structured coaching relationship, not a downloaded template. We assess where you are, agree what you are working toward, and build a plan you can actually execute — in a gym, at home, or while travelling.',
      "Une relation de coaching structurée, pas un modèle téléchargé. Nous évaluons votre point de départ, définissons votre objectif et construisons un plan que vous pouvez réellement exécuter — en salle, à la maison ou en déplacement.",
      'علاقة تدريب منظمة، لا قالب جاهز للتحميل. نقيّم نقطة انطلاقك، ونتفق على هدفك، ونبني خطة يمكنك تنفيذها فعلاً — في الصالة أو المنزل أو أثناء السفر.',
    ),
    summary: L(
      'A written training and nutrition plan, reviewed and adjusted with you online.',
      'Un plan écrit d’entraînement et de nutrition, révisé et ajusté avec vous en ligne.',
      'خطة مكتوبة للتدريب والتغذية، تُراجع وتُعدّل معك عبر الإنترنت.',
    ),
    forWho: L(
      [
        'Adults who want a clear, written plan instead of improvising sessions',
        'Beginners who need to learn the basics safely',
        'Intermediate lifters whose progress has stalled',
        'Busy professionals who need training to fit a real schedule',
        'People who want scheduled accountability, not a one-off programme',
      ],
      [
        'Adultes qui veulent un plan écrit et clair au lieu d’improviser leurs séances',
        'Débutants qui ont besoin d’apprendre les bases en sécurité',
        'Pratiquants intermédiaires dont les progrès stagnent',
        'Professionnels occupés qui ont besoin d’un entraînement compatible avec un vrai emploi du temps',
        'Personnes qui recherchent un suivi planifié, pas un programme ponctuel',
      ],
      [
        'البالغون الذين يريدون خطة مكتوبة وواضحة بدل الارتجال في التمرين',
        'المبتدئون الذين يحتاجون إلى تعلم الأساسيات بأمان',
        'المتوسطون الذين توقف تقدمهم',
        'المهنيون المشغولون الذين يحتاجون تدريباً يناسب جدولاً واقعياً',
        'من يريد متابعة مجدولة وليس برنامجاً لمرة واحدة',
      ],
    ),
    sections: L(
      [
        {
          title: 'What the programme contains',
          body: [
            'Your training plan is written for the days, equipment and experience you actually have. It sets out the sessions, exercise selection, sets, reps and how load should progress.',
            'Nutrition guidance is built around your goal, food preferences and routine. The level of detail depends on the plan you choose; the nutrition-only option focuses on targets, meal structure and adjustments without a training programme.',
          ],
          bullets: [
            'A written training plan matched to your equipment and weekly availability',
            'Exercise progression rather than a random collection of workouts',
            'Calorie and macronutrient targets, plus practical food guidance',
            'Scheduled check-ins and plan adjustments',
            'Direct messaging support within the agreed response window',
          ],
        },
        {
          title: 'How the first month works',
          body: [
            'You apply, then complete an assessment covering training history, injuries, schedule, equipment and food preferences. If the service is not a good fit — for example, if you need medical nutrition therapy — I will say so before you pay.',
            'The starting plan is issued after the assessment. The first weeks are used to calibrate training loads, food structure and the check-in rhythm. Adjustments are made from the information you send back, not from guesswork.',
          ],
        },
        {
          title: 'What this service is not',
          body: [
            'Coaching is educational. It does not diagnose or treat medical conditions, and it does not replace a doctor, physiotherapist or registered dietitian. If your situation needs clinical care, you will be referred.',
            'No specific amount of fat loss, muscle gain or timeline is promised. Outcomes depend on your starting point, health, adherence and circumstances.',
          ],
        },
      ],
      [
        {
          title: 'Ce que contient le programme',
          body: [
            "Votre plan d'entraînement est écrit pour les jours, le matériel et le niveau que vous avez réellement. Il précise les séances, le choix des exercices, les séries, les répétitions et la progression des charges.",
            "Les conseils nutritionnels sont construits autour de votre objectif, de vos préférences alimentaires et de votre routine. Le niveau de détail dépend de la formule choisie ; l'option nutrition seule se concentre sur les objectifs, la structure des repas et les ajustements, sans programme d'entraînement.",
          ],
          bullets: [
            "Un plan d'entraînement écrit adapté à votre matériel et à vos disponibilités",
            "Une progression des exercices, pas une collection de séances au hasard",
            'Des objectifs caloriques et de macronutriments, avec des conseils alimentaires pratiques',
            'Des bilans planifiés et des ajustements du plan',
            'Un suivi par messagerie directe dans le délai de réponse convenu',
          ],
        },
        {
          title: 'Comment se déroule le premier mois',
          body: [
            "Vous postulez, puis vous complétez un bilan couvrant votre historique d'entraînement, vos blessures, votre emploi du temps, votre matériel et vos préférences alimentaires. Si le service ne vous convient pas — par exemple si vous avez besoin d'une prise en charge nutritionnelle médicale — je vous le dis avant tout paiement.",
            "Le plan de départ est remis après le bilan. Les premières semaines servent à calibrer les charges, la structure alimentaire et le rythme des bilans. Les ajustements se font à partir des informations que vous transmettez, pas au hasard.",
          ],
        },
        {
          title: 'Ce que ce service n’est pas',
          body: [
            "Le coaching est éducatif. Il ne diagnostique ni ne traite aucune maladie et ne remplace pas un médecin, un kinésithérapeute ou un diététicien diplômé. Si votre situation nécessite des soins cliniques, vous serez orienté.",
            "Aucune quantité précise de perte de gras, de prise de muscle ni aucun délai n'est promis. Les résultats dépendent de votre point de départ, de votre santé, de votre adhérence et de vos circonstances.",
          ],
        },
      ],
      [
        {
          title: 'ماذا يتضمن البرنامج',
          body: [
            'تُكتب خطتك التدريبية وفق الأيام والمعدات والمستوى المتاح لديك فعلاً. وتحدد الحصص واختيار التمارين والمجموعات والتكرارات وكيفية تقدم الأوزان.',
            'تُبنى إرشادات التغذية حول هدفك وتفضيلاتك الغذائية وروتينك. ويتوقف مستوى التفصيل على الخطة التي تختارها؛ فخطة التغذية وحدها تركز على الأهداف وبنية الوجبات والتعديلات دون برنامج تدريبي.',
          ],
          bullets: [
            'خطة تدريبية مكتوبة تناسب معداتك وأيامك المتاحة',
            'تدرج في التمارين بدل مجموعة حصص عشوائية',
            'أهداف للسعرات والماكروز مع إرشادات غذائية عملية',
            'متابعات مجدولة وتعديلات على الخطة',
            'دعم مباشر عبر الرسائل ضمن مدة الاستجابة المتفق عليها',
          ],
        },
        {
          title: 'كيف يعمل الشهر الأول',
          body: [
            'تتقدم أولاً، ثم تُكمل تقييماً يشمل تاريخك التدريبي والإصابات وجدولك والمعدات وتفضيلاتك الغذائية. وإذا لم تكن الخدمة مناسبة لك — مثلاً إذا كنت تحتاج إلى علاج تغذوي طبي — سأوضح ذلك قبل أي دفع.',
            'تُسلّم خطة البداية بعد التقييم. وتُستخدم الأسابيع الأولى لمعايرة الأوزان وبنية الطعام وإيقاع المتابعة. وتُجرى التعديلات بناءً على المعلومات التي ترسلها، لا على التخمين.',
          ],
        },
        {
          title: 'ما ليست هذه الخدمة',
          body: [
            'التدريب خدمة توعوية. لا يشخّص الأمراض ولا يعالجها، ولا يُغني عن الطبيب أو أخصائي العلاج الطبيعي أو أخصائي التغذية المعتمد. وإذا كانت حالتك تحتاج رعاية سريرية فستتم إحالتك.',
            'لا نَعِد بمقدار محدد من خسارة الدهون أو بناء العضلات ولا بمدة زمنية معينة. تعتمد النتائج على نقطة البداية والصحة والالتزام والظروف.',
          ],
        },
      ],
    ),
    faq: L(
      [
        {
          q: 'Do I need a gym?',
          a: 'No. The plan can be built for a commercial gym, a home set-up, or minimal equipment. Tell me what you have during the assessment.',
        },
        {
          q: 'How much time do I need each week?',
          a: 'Most plans are built around two to five training sessions per week, depending on your goal and availability. The programme is matched to the time you can realistically commit.',
        },
        {
          q: 'How do check-ins work?',
          a: 'You send agreed progress information at scheduled intervals, and I review it and adjust the plan. The exact rhythm depends on the plan you choose and is confirmed before you start.',
        },
        {
          q: 'Can I start if I am a complete beginner?',
          a: 'Yes. Beginners are assessed the same way and start with a plan that teaches the movements and builds a base. You do not need previous gym experience.',
        },
      ],
      [
        {
          q: 'Ai-je besoin d’une salle de sport ?',
          a: "Non. Le plan peut être construit pour une salle commerciale, un espace à domicile ou un matériel minimal. Indiquez-moi ce que vous avez lors du bilan.",
        },
        {
          q: 'Combien de temps faut-il par semaine ?',
          a: "La plupart des plans s'articulent autour de deux à cinq séances par semaine, selon votre objectif et vos disponibilités. Le programme est adapté au temps que vous pouvez réellement consacrer.",
        },
        {
          q: 'Comment fonctionnent les bilans ?',
          a: "Vous envoyez les informations de suivi convenues à intervalles planifiés, je les examine et j'ajuste le plan. Le rythme exact dépend de la formule choisie et est confirmé avant le début.",
        },
        {
          q: 'Puis-je commencer en étant débutant complet ?',
          a: "Oui. Les débutants sont évalués de la même manière et commencent par un plan qui enseigne les mouvements et construit une base. Aucune expérience en salle n'est nécessaire.",
        },
      ],
      [
        {
          q: 'هل أحتاج إلى صالة رياضية؟',
          a: 'لا. يمكن بناء الخطة لصالة تجارية أو لمساحة منزلية أو لمعدات بسيطة. أخبرني بما لديك أثناء التقييم.',
        },
        {
          q: 'كم من الوقت أحتاج أسبوعياً؟',
          a: 'تُبنى معظم الخطط حول حصتين إلى خمس حصص أسبوعياً حسب هدفك وتوفرك. يُطابق البرنامج الوقت الذي يمكنك الالتزام به فعلاً.',
        },
        {
          q: 'كيف تتم المتابعة؟',
          a: 'ترسل معلومات التقدم المتفق عليها في مواعيد محددة، وأراجعها وأعدّل الخطة. الإيقاع الدقيق يعتمد على الخطة التي تختارها ويُؤكد قبل البدء.',
        },
        {
          q: 'هل يمكنني البدء وأنا مبتدئ تماماً؟',
          a: 'نعم. يُقيَّم المبتدئون بالطريقة نفسها ويبدأون بخطة تعليم الحركات وبناء الأساس. لا تحتاج إلى خبرة سابقة في الصالة.',
        },
      ],
    ),
    ctaTitle: L('Start with an honest assessment', 'Commencez par un bilan honnête', 'ابدأ بتقييم صادق'),
    ctaText: L(
      'Tell me what you are working toward and what your week looks like. If coaching is not the right fit, I will tell you before you commit.',
      "Dites-moi ce que vous visez et à quoi ressemble votre semaine. Si le coaching n'est pas la bonne solution, je vous le dirai avant tout engagement.",
      'أخبرني بما تسعى إليه وكيف يبدو أسبوعك. وإن لم يكن التدريب هو الحل المناسب فسأوضح ذلك قبل أن تلتزم.',
    ),
  },
  {
    slug: 'weight-loss',
    icon: 'chart',
    name: L('Weight-loss coaching', 'Coaching perte de poids', 'تدريب خسارة الوزن'),
    metaTitle: L(
      'Weight-Loss Coaching — Training & Nutrition Support | Coach Ayman',
      'Coaching perte de poids — entraînement et nutrition | Coach Ayman',
      'تدريب خسارة الوزن — تدريب وتغذية | الكوتش أيمن',
    ),
    metaDescription: L(
      'A structured fat-loss programme with strength training, practical nutrition and progress reviews. No crash diets, no guaranteed-result claims.',
      "Un programme de perte de gras structuré : renforcement musculaire, nutrition pratique et bilans. Pas de régime choc, aucune promesse de résultat garanti.",
      'برنامج منظم لخسارة الدهون يشمل تدريب القوة وتغذية عملية ومراجعات للتقدم. دون حميات قاسية أو وعود بنتائج مضمونة.',
    ),
    eyebrow: L('Fat loss', 'Perte de gras', 'خسارة الدهون'),
    h1: L(
      'Weight-loss coaching without crash diets',
      'Une perte de poids sans régime choc',
      'خسارة وزن دون حميات قاسية',
    ),
    intro: L(
      'Fat loss is not a punishment. It is a calorie deficit you can sustain, strength training to protect muscle, and enough structure to keep going when motivation dips.',
      "La perte de gras n'est pas une punition. C'est un déficit calorique que vous pouvez tenir, du renforcement musculaire pour protéger la masse maigre, et assez de structure pour continuer quand la motivation baisse.",
      'خسارة الدهون ليست عقاباً. إنها عجز في السعرات يمكنك تحمله، وتدريب قوة للحفاظ على العضلات، وبنية كافية للاستمرار حين تنخفض الحماسة.',
    ),
    summary: L(
      'Strength training, sustainable nutrition and progress reviews for fat loss.',
      'Renforcement musculaire, nutrition durable et bilans pour perdre du gras.',
      'تدريب قوة وتغذية مستدامة ومراجعات للتقدم بهدف خسارة الدهون.',
    ),
    forWho: L(
      [
        'Adults who want to reduce body fat while keeping strength',
        'People who have lost weight before and regained it',
        'Anyone tired of restrictive plans that do not survive real life',
        'People who prefer gradual, measurable change to a crash diet',
      ],
      [
        'Adultes qui veulent réduire la masse grasse tout en gardant leur force',
        'Personnes qui ont déjà perdu du poids avant de le reprendre',
        'Toute personne lassée des plans restrictifs impossibles à tenir',
        'Personnes qui préfèrent un changement progressif et mesurable à un régime choc',
      ],
      [
        'البالغون الذين يريدون تقليل دهون الجسم مع الحفاظ على القوة',
        'من فقدوا الوزن سابقاً ثم استعادوه',
        'من تعبوا من الخطط القاسية التي لا تصمد أمام الحياة الواقعية',
        'من يفضلون التغيير التدريجي القابل للقياس على الحمية القاسية',
      ],
    ),
    sections: L(
      [
        {
          title: 'The assessment comes first',
          body: [
            'We review your current routine, training experience, food patterns, sleep, stress and any known medical limitations. If you have a condition that requires clinical nutrition care, you will be asked to work with an appropriate professional first.',
            'The plan is then built around a realistic rate of change, not an aggressive target that collapses after three weeks.',
          ],
        },
        {
          title: 'Training to keep muscle',
          body: [
            'A fat-loss plan should not be endless cardio. Your programme includes resistance training that gives your body a reason to keep muscle while the deficit does its work.',
            'Sessions are matched to your equipment and schedule, and loads progress where appropriate.',
          ],
        },
        {
          title: 'Nutrition you can repeat',
          body: [
            'You receive calorie and macronutrient targets, meal structure, and practical guidance for the foods and situations you actually encounter — including eating out and travel where relevant.',
            'There are no forbidden foods and no supplement prescriptions. The aim is a pattern you can repeat after the coaching period ends.',
          ],
        },
        {
          title: 'How progress is reviewed',
          body: [
            'The scale is one data point, not the whole picture. Reviews can include weight trends, waist measurements, training performance, photographs you choose to share, and adherence.',
            'If progress stalls, we look at the data and adjust the plan. We do not simply cut calories further without reason.',
          ],
        },
        {
          title: 'Honest limits',
          body: [
            'The rate and amount of fat loss differ between people. Medical conditions, medication, sleep, stress and adherence all matter. No specific result or timeline is promised.',
            'This service is not a treatment for obesity or any medical condition, and it is not a substitute for care from a doctor or registered dietitian.',
          ],
        },
      ],
      [
        {
          title: 'Le bilan d’abord',
          body: [
            "Nous examinons votre routine actuelle, votre expérience d'entraînement, vos habitudes alimentaires, votre sommeil, votre stress et toute limitation médicale connue. Si vous avez une condition nécessitant une prise en charge nutritionnelle clinique, il vous sera demandé de consulter d'abord un professionnel approprié.",
            "Le plan est ensuite construit autour d'un rythme de changement réaliste, pas d'un objectif agressif qui s'effondre au bout de trois semaines.",
          ],
        },
        {
          title: 'Un entraînement qui préserve le muscle',
          body: [
            "Un plan de perte de gras ne doit pas être du cardio sans fin. Votre programme comprend du renforcement musculaire pour donner à votre corps une raison de conserver sa masse pendant le déficit.",
            "Les séances sont adaptées à votre matériel et à votre emploi du temps, avec une progression des charges lorsque c'est pertinent.",
          ],
        },
        {
          title: 'Une nutrition que vous pouvez répéter',
          body: [
            "Vous recevez des objectifs caloriques et de macronutriments, une structure de repas et des conseils pratiques pour les aliments et les situations que vous rencontrez réellement — y compris les repas à l'extérieur et les déplacements.",
            "Aucun aliment n'est interdit et aucun complément n'est prescrit. L'objectif est un modèle que vous pouvez reproduire après la fin du coaching.",
          ],
        },
        {
          title: 'Comment le progrès est évalué',
          body: [
            "La balance n'est qu'une donnée, pas toute l'histoire. Les bilans peuvent inclure la tendance du poids, le tour de taille, les performances à l'entraînement, les photos que vous choisissez de partager et l'adhérence.",
            "Si le progrès stagne, nous examinons les données et ajustons le plan. Nous ne réduisons pas simplement les calories davantage sans raison.",
          ],
        },
        {
          title: 'Des limites honnêtes',
          body: [
            "Le rythme et l'ampleur de la perte de gras varient d'une personne à l'autre. Les conditions médicales, les médicaments, le sommeil, le stress et l'adhérence comptent. Aucun résultat ni délai précis n'est promis.",
            "Ce service n'est pas un traitement de l'obésité ni d'une maladie, et ne remplace pas le suivi d'un médecin ou d'un diététicien diplômé.",
          ],
        },
      ],
      [
        {
          title: 'التقييم أولاً',
          body: [
            'نراجع روتينك الحالي وخبرتك التدريبية وأنماط طعامك ونومك وتوترك وأي قيود طبية معروفة. وإذا كانت لديك حالة تتطلب رعاية تغذوية سريرية، فسيُطلب منك مراجعة مختص مناسب أولاً.',
            'ثم تُبنى الخطة حول معدل تغيير واقعي، لا حول هدف عدواني ينهار بعد ثلاثة أسابيع.',
          ],
        },
        {
          title: 'تدريب يحافظ على العضلات',
          body: [
            'خطة خسارة الدهون لا ينبغي أن تكون كارديو بلا نهاية. يتضمن برنامجك تدريب مقاومة يمنح جسمك سبباً للحفاظ على العضلات أثناء العجز الحراري.',
            'تُطابق الحصص مع معداتك وجدولك، وتتقدم الأوزان عند الاقتضاء.',
          ],
        },
        {
          title: 'تغذية يمكنك تكرارها',
          body: [
            'تحصل على أهداف للسعرات والماكروز وبنية وجبات وإرشادات عملية للأطعمة والمواقف التي تواجهها فعلاً، بما في ذلك الأكل خارج المنزل والسفر عند الحاجة.',
            'لا أطعمة محرّمة ولا وصفات مكملات. الهدف هو نمط يمكنك تكراره بعد انتهاء فترة التدريب.',
          ],
        },
        {
          title: 'كيف نراجع التقدم',
          body: [
            'الميزان نقطة بيانات واحدة وليس الصورة كاملة. قد تشمل المراجعات اتجاه الوزن ومحيط الخصر وأداء التدريب والصور التي تختار مشاركتها والالتزام.',
            'إذا توقف التقدم نراجع البيانات ونعدّل الخطة. ولا نقلل السعرات أكثر دون سبب.',
          ],
        },
        {
          title: 'حدود صادقة',
          body: [
            'يختلف معدل خسارة الدهون ومقدارها بين الأشخاص. الحالات الطبية والأدوية والنوم والتوتر والالتزام كلها عوامل مؤثرة. لا نَعِد بنتيجة أو مدة محددة.',
            'هذه الخدمة ليست علاجاً للسمنة أو أي حالة طبية، ولا تُغني عن رعاية الطبيب أو أخصائي التغذية المعتمد.',
          ],
        },
      ],
    ),
    faq: L(
      [
        {
          q: 'How fast can I lose weight?',
          a: 'That depends on your starting point, health and adherence. I will not promise a specific number or timeline. The goal is a rate you can sustain without losing strength or abandoning the plan.',
        },
        {
          q: 'Do I have to track every calorie?',
          a: 'Not necessarily. Some clients prefer detailed tracking, others need a simpler structure. The method is agreed during the assessment and adjusted if it becomes burdensome.',
        },
        {
          q: 'Will I be given a meal plan?',
          a: 'You receive calorie and macro targets plus practical meal structure and food guidance. Whether you get a detailed day-by-day menu depends on the plan and your needs.',
        },
        {
          q: 'Can I do this if I have a medical condition?',
          a: 'Tell me during the application. Some conditions require medical or dietetic supervision before exercise or nutrition changes. I will refer you where that is the right step.',
        },
      ],
      [
        {
          q: 'À quelle vitesse puis-je perdre du poids ?',
          a: "Cela dépend de votre point de départ, de votre santé et de votre adhérence. Je ne promets ni chiffre ni délai précis. L'objectif est un rythme tenable sans perdre de force ni abandonner le plan.",
        },
        {
          q: 'Dois-je compter chaque calorie ?',
          a: "Pas nécessairement. Certains clients préfèrent un suivi détaillé, d'autres ont besoin d'une structure plus simple. La méthode est convenue lors du bilan et ajustée si elle devient trop contraignante.",
        },
        {
          q: 'Vais-je recevoir un plan alimentaire ?',
          a: "Vous recevez des objectifs caloriques et de macronutriments, une structure de repas pratique et des conseils alimentaires. Le menu détaillé jour par jour dépend de la formule et de vos besoins.",
        },
        {
          q: 'Puis-je suivre ce coaching avec une condition médicale ?',
          a: "Indiquez-le lors de la candidature. Certaines conditions nécessitent une supervision médicale ou diététique avant de modifier l'exercice ou l'alimentation. Je vous orienterai si c'est la bonne étape.",
        },
      ],
      [
        {
          q: 'ما سرعة خسارة الوزن؟',
          a: 'يعتمد ذلك على نقطة البداية والصحة والالتزام. لن أعد برقم أو مدة محددة. الهدف هو معدل يمكنك تحمله دون فقدان القوة أو التخلي عن الخطة.',
        },
        {
          q: 'هل يجب أن أحسب كل سعرة؟',
          a: 'ليس بالضرورة. بعض العملاء يفضلون التتبع التفصيلي، وآخرون يحتاجون بنية أبسط. تُتفق الطريقة أثناء التقييم وتُعدّل إذا أصبحت مرهقة.',
        },
        {
          q: 'هل سأحصل على خطة وجبات؟',
          a: 'تحصل على أهداف للسعرات والماكروز مع بنية وجبات عملية وإرشادات غذائية. أما القائمة التفصيلية يوماً بيوم فتعتمد على الخطة واحتياجك.',
        },
        {
          q: 'هل يمكنني المتابعة مع وجود حالة طبية؟',
          a: 'اذكر ذلك في الطلب. بعض الحالات تتطلب إشرافاً طبياً أو تغذوياً قبل تغيير التمرين أو الطعام. سأحيلك إذا كانت هذه هي الخطوة الصحيحة.',
        },
      ],
    ),
    ctaTitle: L('Build a fat-loss plan you can keep', 'Construisez un plan de perte de gras tenable', 'ابنِ خطة لخسارة الدهون يمكنك الاستمرار عليها'),
    ctaText: L(
      'Apply with your goal, current routine and any medical considerations. You will get a straight answer about whether coaching is appropriate.',
      "Postulez en indiquant votre objectif, votre routine actuelle et toute considération médicale. Vous obtiendrez une réponse franche sur la pertinence du coaching.",
      'تقدّم بهدفك وروتينك الحالي وأي اعتبارات طبية. وستحصل على إجابة واضحة حول مدى ملاءمة التدريب.',
    ),
  },
  {
    slug: 'muscle-building',
    icon: 'dumbbell',
    name: L('Muscle-building coaching', 'Coaching prise de muscle', 'تدريب بناء العضلات'),
    metaTitle: L(
      'Muscle-Building Coaching — Structured Hypertrophy Training | Coach Ayman',
      'Coaching prise de muscle — entraînement structuré | Coach Ayman',
      'تدريب بناء العضلات — برنامج تضخم منظم | الكوتش أيمن',
    ),
    metaDescription: L(
      'Progressive resistance training, recovery and nutrition guidance for muscle gain. A written plan with scheduled reviews, delivered online.',
      "Entraînement progressif, récupération et nutrition pour prendre du muscle. Un plan écrit avec des bilans planifiés, en ligne.",
      'تدريب مقاومة تدريجي واستشفاء وتغذية لبناء العضلات. خطة مكتوبة مع مراجعات مجدولة عبر الإنترنت.',
    ),
    eyebrow: L('Muscle gain', 'Prise de muscle', 'بناء العضلات'),
    h1: L(
      'Muscle-building coaching with a progression you can track',
      'Une prise de muscle avec une progression mesurable',
      'بناء عضلات بتقدم يمكنك قياسه',
    ),
    intro: L(
      'Muscle is built by doing more over time, eating enough, and recovering. The plan gives those three things a structure — and gives you a way to see whether they are working.',
      "Le muscle se construit en faisant plus au fil du temps, en mangeant suffisamment et en récupérant. Le plan donne une structure à ces trois éléments — et un moyen de vérifier s'ils fonctionnent.",
      'تُبنى العضلات بزيادة الأداء تدريجياً، وتناول ما يكفي، والاستشفاء. تمنح الخطة هذه العناصر الثلاثة بنية واضحة، وطريقة لمعرفة ما إذا كانت تعمل.',
    ),
    summary: L(
      'Progressive resistance training with nutrition and recovery structured around you.',
      'Un entraînement progressif avec nutrition et récupération structurées autour de vous.',
      'تدريب مقاومة تدريجي مع تغذية واستشفاء مبنيين حولك.',
    ),
    forWho: L(
      [
        'Adults who want to add muscle without losing sight of their health',
        'Beginner lifters who want to learn the main movements properly',
        'Intermediate lifters who have been training without progressing',
        'People returning to training after a break',
      ],
      [
        'Adultes qui veulent gagner du muscle sans négliger leur santé',
        'Débutants qui veulent apprendre correctement les mouvements principaux',
        'Intermédiaires qui s’entraînent sans progresser',
        'Personnes qui reprennent après une pause',
      ],
      [
        'البالغون الذين يريدون زيادة العضلات دون إغفال صحتهم',
        'المبتدئون الذين يريدون تعلم الحركات الأساسية بشكل صحيح',
        'المتوسطون الذين يتدربون دون تقدم',
        'من يعودون إلى التدريب بعد انقطاع',
      ],
    ),
    sections: L(
      [
        {
          title: 'Programme structure',
          body: [
            'Your split, exercise selection and weekly volume are chosen for your experience, recovery capacity and available days. The plan is written down; you are not expected to invent a session when you arrive at the gym.',
            'Where relevant, the programme includes compound movements, access to machines or free weights, and isolation work that fits your equipment.',
          ],
        },
        {
          title: 'Progressive overload, explained',
          body: [
            'Progression does not only mean adding weight. It can mean more reps at the same load, better technique, more controlled sets, or a small increase in weekly volume.',
            'You will know what to record and what “progress” looks like for each movement, so adjustments are based on your training data.',
          ],
        },
        {
          title: 'Frequency and recovery',
          body: [
            'Training frequency is matched to what you can recover from. Sleep, stress and schedule are part of the assessment; more sessions are not automatically better.',
            'If you are injured or returning from a break, the plan is adjusted around the limitations you report. This is not a substitute for physiotherapy or medical assessment.',
          ],
        },
        {
          title: 'Eating for muscle',
          body: [
            'Muscle gain requires enough energy and protein, distributed in a way you can maintain. Your nutrition guidance is built around your food preferences and budget, not a bodybuilding menu you will abandon.',
            'Supplements are not required. If you ask about one, you will get a factual answer rather than a prescription.',
          ],
        },
        {
          title: 'How progress is assessed',
          body: [
            'Reviews can include training loads, rep performance, body weight trend, measurements and photographs you choose to share. Changes in strength and measurements often tell a clearer story than the scale alone.',
            'Muscle gain is slow. The plan is designed for months, not a two-week sprint, and no specific amount of gain is promised.',
          ],
        },
      ],
      [
        {
          title: 'Structure du programme',
          body: [
            "Votre split, le choix des exercices et le volume hebdomadaire sont déterminés selon votre expérience, votre capacité de récupération et vos jours disponibles. Le plan est écrit ; vous n'avez pas à inventer une séance en arrivant à la salle.",
            "Lorsque c'est pertinent, le programme inclut des mouvements polyarticulaires, l'accès aux machines ou aux poids libres, et un travail d'isolation adapté à votre matériel.",
          ],
        },
        {
          title: 'La surcharge progressive, expliquée',
          body: [
            "Progresser ne signifie pas seulement ajouter de la charge. Cela peut être plus de répétitions à charge égale, une meilleure technique, des séries plus contrôlées ou une légère augmentation du volume hebdomadaire.",
            "Vous saurez quoi noter et à quoi ressemble le « progrès » pour chaque mouvement, afin que les ajustements reposent sur vos données d'entraînement.",
          ],
        },
        {
          title: 'Fréquence et récupération',
          body: [
            "La fréquence d'entraînement est adaptée à ce que vous pouvez récupérer. Le sommeil, le stress et l'emploi du temps font partie du bilan ; plus de séances n'est pas automatiquement mieux.",
            "En cas de blessure ou de reprise après une pause, le plan est ajusté autour des limitations signalées. Cela ne remplace ni la kinésithérapie ni un avis médical.",
          ],
        },
        {
          title: 'Manger pour construire du muscle',
          body: [
            "La prise de muscle nécessite suffisamment d'énergie et de protéines, réparties d'une manière tenable. Vos conseils nutritionnels sont construits autour de vos préférences et de votre budget, pas d'un menu de culturiste que vous abandonnerez.",
            "Les compléments ne sont pas nécessaires. Si vous posez la question, vous obtiendrez une réponse factuelle plutôt qu'une prescription.",
          ],
        },
        {
          title: 'Comment le progrès est évalué',
          body: [
            "Les bilans peuvent inclure les charges, les performances en répétitions, la tendance du poids, les mesures et les photos que vous choisissez de partager. L'évolution de la force et des mesures raconte souvent une histoire plus claire que la balance seule.",
            "La prise de muscle est lente. Le plan est conçu pour des mois, pas pour un sprint de deux semaines, et aucune quantité précise n'est promise.",
          ],
        },
      ],
      [
        {
          title: 'بنية البرنامج',
          body: [
            'يُختار تقسيم التدريب واختيار التمارين والحجم الأسبوعي وفق خبرتك وقدرتك على الاستشفاء وأيامك المتاحة. الخطة مكتوبة، ولا يُتوقع منك اختراع حصة عند وصولك إلى الصالة.',
            'عند الاقتضاء يتضمن البرنامج حركات مركبة واستخدام الآلات أو الأوزان الحرة وعزلاً يناسب معداتك.',
          ],
        },
        {
          title: 'الحمل التدريجي، بشرح واضح',
          body: [
            'التقدم لا يعني إضافة وزن فقط. قد يعني تكرارات أكثر بالحمل نفسه، أو تقنية أفضل، أو مجموعات أكثر تحكماً، أو زيادة صغيرة في الحجم الأسبوعي.',
            'ستعرف ماذا تسجل وكيف يبدو «التقدم» لكل حركة، لتكون التعديلات مبنية على بيانات تدريبك.',
          ],
        },
        {
          title: 'التكرار والاستشفاء',
          body: [
            'يُطابق تكرار التدريب مع ما يمكنك استشفاؤه. النوم والتوتر والجدول جزء من التقييم؛ وزيادة الحصص ليست أفضل تلقائياً.',
            'إذا كنت مصاباً أو عائداً بعد انقطاع، تُعدّل الخطة حول القيود التي تذكرها. وهذا لا يُغني عن العلاج الطبيعي أو التقييم الطبي.',
          ],
        },
        {
          title: 'الأكل لبناء العضلات',
          body: [
            'بناء العضلات يحتاج طاقة وبروتيناً كافيين، موزعين بطريقة يمكنك الحفاظ عليها. تُبنى إرشاداتك الغذائية على تفضيلاتك وميزانيتك، لا على قائمة لاعب كمال أجسام ستتخلى عنها.',
            'المكملات ليست ضرورية. وإذا سألت عن أحدها فستحصل على إجابة واقعية لا على وصفة.',
          ],
        },
        {
          title: 'كيف يُقيَّم التقدم',
          body: [
            'قد تشمل المراجعات الأوزان وأداء التكرارات واتجاه وزن الجسم والقياسات والصور التي تختار مشاركتها. غالباً ما تحكي القوة والقياسات قصة أوضح من الميزان وحده.',
            'بناء العضلات بطيء. صُممت الخطة لأشهر لا لسباق أسبوعين، ولا نَعِد بمقدار محدد.',
          ],
        },
      ],
    ),
    faq: L(
      [
        {
          q: 'Do I need to train six days a week?',
          a: 'No. Frequency is matched to your recovery and schedule. Three well-structured sessions can be enough, depending on your experience and goal.',
        },
        {
          q: 'Can I build muscle at home?',
          a: 'Often, yes, with the right equipment and progression. We will review what you have and be honest about what is realistic without a gym.',
        },
        {
          q: 'Do I need supplements?',
          a: 'No. Food comes first. No supplement is required to follow the plan, and none is prescribed.',
        },
        {
          q: 'How long before I see a change?',
          a: 'Strength often changes before appearance does. I will not promise a timeline. We track loads, measurements and body-weight trend over months, not days.',
        },
      ],
      [
        {
          q: 'Dois-je m’entraîner six jours par semaine ?',
          a: "Non. La fréquence est adaptée à votre récupération et à votre emploi du temps. Trois séances bien structurées peuvent suffire, selon votre expérience et votre objectif.",
        },
        {
          q: 'Puis-je construire du muscle à la maison ?',
          a: "Souvent oui, avec le bon matériel et une progression adaptée. Nous examinerons ce que vous avez et serons honnêtes sur ce qui est réaliste sans salle.",
        },
        {
          q: 'Ai-je besoin de compléments ?',
          a: "Non. L'alimentation passe d'abord. Aucun complément n'est nécessaire pour suivre le plan, et aucun n'est prescrit.",
        },
        {
          q: 'Combien de temps avant de voir un changement ?',
          a: "La force change souvent avant l'apparence. Je ne promets pas de délai. Nous suivons les charges, les mesures et la tendance du poids sur des mois, pas des jours.",
        },
      ],
      [
        {
          q: 'هل أحتاج إلى التدريب ستة أيام أسبوعياً؟',
          a: 'لا. يُطابق التكرار مع استشفائك وجدولك. ثلاث حصص منظمة قد تكون كافية حسب خبرتك وهدفك.',
        },
        {
          q: 'هل يمكنني بناء العضلات في المنزل؟',
          a: 'غالباً نعم، بالمعدات المناسبة والتدرج الصحيح. سنراجع ما لديك ونكون صادقين بشأن ما هو واقعي دون صالة.',
        },
        {
          q: 'هل أحتاج إلى مكملات؟',
          a: 'لا. الطعام أولاً. لا مكمل ضروري لاتباع الخطة، ولا يُوصف أي منها.',
        },
        {
          q: 'كم من الوقت قبل رؤية تغيير؟',
          a: 'تتغير القوة غالباً قبل المظهر. لن أعد بمدة محددة. نتابع الأوزان والقياسات واتجاه الوزن على مدى أشهر لا أيام.',
        },
      ],
    ),
    ctaTitle: L('Train with a progression, not a guess', 'Entraînez-vous avec une progression, pas au hasard', 'تدرّب وفق تدرج واضح لا تخمين'),
    ctaText: L(
      'Tell me your experience, equipment and goal. I will tell you what a realistic programme looks like.',
      "Indiquez votre expérience, votre matériel et votre objectif. Je vous dirai à quoi ressemble un programme réaliste.",
      'أخبرني بخبرتك ومعداتك وهدفك، وسأوضح كيف يبدو برنامج واقعي.',
    ),
  },
  {
    slug: 'nutrition',
    icon: 'leaf',
    name: L('Nutrition coaching', 'Coaching nutritionnel', 'التدريب الغذائي'),
    metaTitle: L(
      'Online Nutrition Coaching — Practical Guidance | Coach Ayman',
      'Coaching nutritionnel en ligne — conseils pratiques | Coach Ayman',
      'تدريب غذائي عبر الإنترنت — إرشادات عملية | الكوتش أيمن',
    ),
    metaDescription: L(
      'Calorie and macro targets, meal structure and practical food guidance built around your routine. Educational nutrition coaching, not medical nutrition therapy.',
      "Objectifs caloriques et macro, structure des repas et conseils pratiques adaptés à votre routine. Un coaching nutritionnel éducatif, pas une thérapie nutritionnelle médicale.",
      'أهداف للسعرات والماكروز وبنية وجبات وإرشادات غذائية عملية تناسب روتينك. تدريب غذائي توعوي وليس علاجاً تغذوياً طبياً.',
    ),
    eyebrow: L('Nutrition', 'Nutrition', 'التغذية'),
    h1: L(
      'Nutrition coaching that fits your actual diet',
      'Une nutrition qui s’adapte à votre alimentation réelle',
      'تدريب غذائي يناسب طعامك الواقعي',
    ),
    intro: L(
      'A nutrition plan is only useful if it survives your week. This service focuses on calorie and macro targets, meal structure and practical decisions — not a list of forbidden foods.',
      "Un plan nutritionnel n'est utile que s'il tient face à votre semaine. Ce service se concentre sur les objectifs caloriques et de macronutriments, la structure des repas et les décisions pratiques — pas sur une liste d'aliments interdits.",
      'الخطة الغذائية لا تفيد إلا إذا صمدت أمام أسبوعك. تركز هذه الخدمة على أهداف السعرات والماكروز وبنية الوجبات والقرارات العملية، لا على قائمة أطعمة محرّمة.',
    ),
    summary: L(
      'Targets, meal structure and adjustments for people who already train.',
      'Objectifs, structure des repas et ajustements pour ceux qui s’entraînent déjà.',
      'أهداف وبنية وجبات وتعديلات لمن يتدربون بالفعل.',
    ),
    forWho: L(
      [
        'People who already train and want their nutrition organised',
        'Anyone confused by conflicting diet advice',
        'People who want flexible guidance rather than a rigid menu',
        'Clients who need help adjusting intake for fat loss or muscle gain',
      ],
      [
        'Personnes qui s’entraînent déjà et veulent structurer leur nutrition',
        'Toute personne perdue face aux conseils alimentaires contradictoires',
        'Personnes qui préfèrent des conseils flexibles à un menu rigide',
        'Clients qui ont besoin d’ajuster leurs apports pour perdre du gras ou prendre du muscle',
      ],
      [
        'من يتدربون بالفعل ويريدون تنظيم تغذيتهم',
        'من يحتارون بين النصائح الغذائية المتضاربة',
        'من يفضلون إرشادات مرنة بدل قائمة صارمة',
        'من يحتاجون تعديل المدخول لخسارة الدهون أو بناء العضلات',
      ],
    ),
    sections: L(
      [
        {
          title: 'What you receive',
          body: [
            'Calorie and macronutrient targets based on your goal and current routine, plus a practical meal structure. You also receive guidance on portions, food choices and how to handle common situations such as eating out or travelling.',
            'The plan is adjusted at agreed check-ins based on your progress and feedback, not changed randomly.',
          ],
          bullets: [
            'Calorie and macro targets',
            'A flexible meal structure built around foods you eat',
            'Portion and preparation guidance',
            'Practical options for eating out and travel',
            'Scheduled reviews and adjustments',
          ],
        },
        {
          title: 'What it does not include',
          body: [
            'This is educational nutrition coaching. It is not medical nutrition therapy, it does not diagnose allergies or deficiencies, and it does not prescribe supplements or medication.',
            'If you have a clinical condition, a diagnosed eating disorder, are pregnant or breastfeeding, or need therapeutic diets, you will be referred to an appropriately qualified professional. Coaching may then continue only alongside that care.',
          ],
        },
        {
          title: 'Why there is no forbidden-food list',
          body: [
            'Restriction is easy to write and hard to live with. The plan teaches you how to fit the foods you enjoy into your targets, so you are not choosing between the plan and your culture, family or social life.',
            'That does not mean every food is nutritionally equivalent. It means the guidance is built around frequency, portion and context rather than shame.',
          ],
        },
      ],
      [
        {
          title: 'Ce que vous recevez',
          body: [
            "Des objectifs caloriques et de macronutriments basés sur votre objectif et votre routine actuelle, ainsi qu'une structure de repas pratique. Vous recevez aussi des conseils sur les portions, le choix des aliments et la gestion des situations courantes comme les repas à l'extérieur ou les déplacements.",
            "Le plan est ajusté lors des bilans convenus, en fonction de votre progression et de vos retours, et non modifié au hasard.",
          ],
          bullets: [
            'Objectifs caloriques et de macronutriments',
            'Une structure de repas flexible construite autour des aliments que vous mangez',
            'Conseils sur les portions et la préparation',
            'Options pratiques pour les repas à l’extérieur et les déplacements',
            'Bilans planifiés et ajustements',
          ],
        },
        {
          title: 'Ce que cela ne comprend pas',
          body: [
            "Il s'agit d'un coaching nutritionnel éducatif. Ce n'est pas une thérapie nutritionnelle médicale, cela ne diagnostique ni allergies ni carences, et cela ne prescrit ni compléments ni médicaments.",
            "En cas de condition clinique, de trouble alimentaire diagnostiqué, de grossesse ou d'allaitement, ou de besoin de régime thérapeutique, vous serez orienté vers un professionnel qualifié. Le coaching ne pourra continuer qu'en complément de ce suivi.",
          ],
        },
        {
          title: 'Pourquoi il n’y a pas de liste d’aliments interdits',
          body: [
            "La restriction est facile à écrire et difficile à vivre. Le plan vous apprend à intégrer les aliments que vous aimez dans vos objectifs, pour que vous n'ayez pas à choisir entre le plan et votre culture, votre famille ou votre vie sociale.",
            "Cela ne signifie pas que tous les aliments se valent sur le plan nutritionnel. Cela signifie que les conseils reposent sur la fréquence, la portion et le contexte, pas sur la culpabilité.",
          ],
        },
      ],
      [
        {
          title: 'ماذا تحصل عليه',
          body: [
            'أهداف للسعرات والماكروز مبنية على هدفك وروتينك الحالي، مع بنية وجبات عملية. كما تحصل على إرشادات حول الحصص واختيار الأطعمة والتعامل مع المواقف الشائعة مثل الأكل خارج المنزل والسفر.',
            'تُعدّل الخطة في المتابعات المتفق عليها بناءً على تقدمك وملاحظاتك، لا بشكل عشوائي.',
          ],
          bullets: [
            'أهداف للسعرات والماكروز',
            'بنية وجبات مرنة مبنية على أطعمة تتناولها',
            'إرشادات للحصص والتحضير',
            'خيارات عملية للأكل خارج المنزل والسفر',
            'مراجعات مجدولة وتعديلات',
          ],
        },
        {
          title: 'ما لا تشمله',
          body: [
            'هذا تدريب غذائي توعوي. ليس علاجاً تغذوياً طبياً، ولا يشخّص الحساسية أو النقص الغذائي، ولا يصف مكملات أو أدوية.',
            'إذا كانت لديك حالة سريرية أو اضطراب غذائي مشخص أو حمل أو رضاعة أو حاجة إلى حمية علاجية، فستتم إحالتك إلى مختص مؤهل. وقد يستمر التدريب بعد ذلك بالتوازي مع تلك الرعاية فقط.',
          ],
        },
        {
          title: 'لماذا لا توجد قائمة أطعمة محرّمة',
          body: [
            'الحرمان سهل الكتابة وصعب العيش. تعلّمك الخطة كيف تُدخل الأطعمة التي تستمتع بها ضمن أهدافك، حتى لا تضطر للاختيار بين الخطة وثقافتك أو عائلتك أو حياتك الاجتماعية.',
            'هذا لا يعني أن كل الأطعمة متساوية غذائياً. بل يعني أن الإرشاد مبني على التكرار والحصة والسياق، لا على الشعور بالذنب.',
          ],
        },
      ],
    ),
    faq: L(
      [
        {
          q: 'Is this a diet plan?',
          a: 'It is a nutrition coaching service with calorie and macro targets, meal structure and adjustments. It is not a fixed menu you must follow forever.',
        },
        {
          q: 'Can I get nutrition coaching without training?',
          a: 'Yes. The nutrition-only plan exists for people who already train or have their own programme. If you need a training plan too, choose the combined option.',
        },
        {
          q: 'Will you prescribe supplements?',
          a: 'No. Supplements are not prescribed. If you ask about a specific product, you will get factual information and a recommendation to check with a clinician where appropriate.',
        },
        {
          q: 'What if I have an eating disorder?',
          a: 'Tell me before applying. Coaching is not appropriate as a substitute for specialist care. I will refer you to a qualified professional and will not take on nutritional coaching in that situation.',
        },
      ],
      [
        {
          q: 'Est-ce un régime ?',
          a: "C'est un service de coaching nutritionnel avec des objectifs caloriques et de macronutriments, une structure de repas et des ajustements. Ce n'est pas un menu fixe à suivre pour toujours.",
        },
        {
          q: 'Puis-je avoir le coaching nutritionnel sans entraînement ?',
          a: "Oui. La formule nutrition seule existe pour les personnes qui s'entraînent déjà ou qui ont leur propre programme. Si vous avez aussi besoin d'un plan d'entraînement, choisissez l'option combinée.",
        },
        {
          q: 'Allez-vous prescrire des compléments ?',
          a: "Non. Les compléments ne sont pas prescrits. Si vous posez une question sur un produit précis, vous obtiendrez une information factuelle et serez invité à vérifier avec un professionnel de santé le cas échéant.",
        },
        {
          q: 'Et si j’ai un trouble alimentaire ?',
          a: "Signalez-le avant de postuler. Le coaching ne remplace pas une prise en charge spécialisée. Je vous orienterai vers un professionnel qualifié et je n'accepterai pas de coaching nutritionnel dans cette situation.",
        },
      ],
      [
        {
          q: 'هل هذه حمية؟',
          a: 'هي خدمة تدريب غذائي تشمل أهدافاً للسعرات والماكروز وبنية وجبات وتعديلات. وليست قائمة ثابتة يجب اتباعها للأبد.',
        },
        {
          q: 'هل يمكنني الحصول على تدريب غذائي دون تدريب رياضي؟',
          a: 'نعم. خطة التغذية وحدها متاحة لمن يتدربون بالفعل أو لديهم برنامجهم الخاص. وإذا كنت تحتاج خطة تدريب أيضاً فاختر الخيار المشترك.',
        },
        {
          q: 'هل ستوصف لي مكملات؟',
          a: 'لا. لا تُوصف المكملات. وإذا سألت عن منتج معين فستحصل على معلومات واقعية وعلى نصيحة بمراجعة مختص عند الاقتضاء.',
        },
        {
          q: 'ماذا لو كان لدي اضطراب غذائي؟',
          a: 'أخبرني قبل التقديم. التدريب ليس بديلاً عن الرعاية المتخصصة. سأحيلك إلى مختص مؤهل ولن أتولى التدريب الغذائي في هذه الحالة.',
        },
      ],
    ),
    ctaTitle: L('Get nutrition guidance you can actually follow', 'Recevez des conseils nutritionnels applicables', 'احصل على إرشاد غذائي يمكنك اتباعه فعلاً'),
    ctaText: L(
      'Tell me how you eat now and what you want to change. The plan starts from there.',
      "Dites-moi comment vous mangez aujourd'hui et ce que vous voulez changer. Le plan part de là.",
      'أخبرني كيف تأكل الآن وما تريد تغييره. تبدأ الخطة من هناك.',
    ),
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
