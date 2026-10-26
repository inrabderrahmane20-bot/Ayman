import { L } from './types';

export const home = {
  metaTitle: L(
    'Online Fitness & Nutrition Coaching | Coach Ayman',
    'Coaching sportif et nutritionnel en ligne | Coach Ayman',
    'تدريب لياقة وتغذية عبر الإنترنت | الكوتش أيمن',
  ),
  metaDescription: L(
    'Personal training and nutrition coaching delivered online in English, French and Arabic. Assessment, written plan, scheduled reviews and direct support.',
    "Entraînement et nutrition personnalisés en ligne, en français, anglais et arabe. Bilan, plan écrit, bilans planifiés et suivi direct.",
    'تدريب وتغذية مخصصان عبر الإنترنت بالعربية والفرنسية والإنجليزية. تقييم وخطة مكتوبة ومراجعات مجدولة ودعم مباشر.',
  ),
  hero: {
    eyebrow: L(
      'Online coaching · Morocco · Worldwide',
      'Coaching en ligne · Maroc · Monde entier',
      'تدريب عبر الإنترنت · المغرب · حول العالم',
    ),
    title: L(
      'Coaching built around your real life, not an ideal one',
      'Un coaching construit autour de votre vraie vie, pas d’une vie idéale',
      'تدريب مبني على حياتك الواقعية، لا على حياة مثالية',
    ),
    highlight: L('real life', 'vraie vie', 'حياتك الواقعية'),
    intro: L(
      'Written training and nutrition plans, scheduled reviews and direct support for adults who want to lose fat, build muscle or train consistently — in English, French or Arabic.',
      "Des plans écrits d'entraînement et de nutrition, des bilans planifiés et un suivi direct pour les adultes qui veulent perdre du gras, gagner du muscle ou s'entraîner avec régularité — en français, anglais ou arabe.",
      'خطط مكتوبة للتدريب والتغذية، ومراجعات مجدولة، ودعم مباشر للبالغين الذين يريدون خسارة الدهون أو بناء العضلات أو الانتظام في التدريب — بالعربية أو الفرنسية أو الإنجليزية.',
    ),
    primaryCta: L('Apply for coaching', 'Demander un accompagnement', 'تقدّم للتدريب'),
    secondaryCta: L('See how it works', 'Voir comment ça marche', 'كيف يعمل التدريب'),
    imageAlt: L(
      'Coach Mohamed Ayman Yakhmim',
      'Coach Mohamed Ayman Yakhmim',
      'الكوتش محمد أيمن يخميم',
    ),
    proof: L(
      '220+ clients coached — figure supplied by the coach',
      '220+ clients accompagnés — chiffre fourni par le coach',
      'أكثر من 220 عميلاً — رقم مقدَّم من المدرب',
    ),
  },
  trust: [
    {
      label: L('Online, worldwide', 'En ligne, partout', 'عبر الإنترنت، حول العالم'),
      detail: L(
        'No clinic visit required. Coaching is delivered remotely.',
        'Aucun déplacement nécessaire. Le coaching se fait à distance.',
        'لا حاجة لزيارة عيادة. التدريب يُقدَّم عن بُعد.',
      ),
    },
    {
      label: L('Three coaching languages', 'Trois langues de coaching', 'ثلاث لغات للتدريب'),
      detail: L('English, French and Arabic.', 'Français, anglais et arabe.', 'العربية والفرنسية والإنجليزية.'),
    },
    {
      label: L('Written plans', 'Des plans écrits', 'خطط مكتوبة'),
      detail: L(
        'You keep the plan. Nothing is improvised session by session.',
        'Vous gardez le plan. Rien n’est improvisé séance par séance.',
        'تحتفظ بالخطة. لا شيء يُرتجل حصة بحصة.',
      ),
    },
    {
      label: L('No app required', 'Aucune application requise', 'دون تطبيق'),
      detail: L(
        'Plans and check-ins are delivered through documents and messaging.',
        'Les plans et bilans sont transmis par documents et messagerie.',
        'تُسلَّم الخطط والمتابعات عبر المستندات والرسائل.',
      ),
    },
  ],
  audience: {
    eyebrow: L('Who it is for', 'Pour qui', 'لمن هذا التدريب'),
    title: L(
      'For adults who want a plan and a person behind it',
      'Pour les adultes qui veulent un plan et une personne derrière',
      'للبالغين الذين يريدون خطة وشخصاً مسؤولاً عنها',
    ),
    intro: L(
      'Coaching is not the right answer for every situation. This is what it is designed for — and what it is not.',
      "Le coaching n'est pas la bonne réponse dans toutes les situations. Voici à quoi il sert — et ce qu'il n'est pas.",
      'التدريب ليس الحل المناسب لكل حالة. هذا ما صُمم له، وما لا يفعله.',
    ),
    forTitle: L('A good fit if you', 'C’est adapté si vous', 'مناسب لك إذا كنت'),
    forList: L(
      [
        'Want a written plan instead of guessing in the gym',
        'Have a schedule that changes and need training that adapts',
        'Want someone to review progress and adjust the plan',
        'Are willing to report honestly, including the difficult weeks',
        'Understand that results take months, not days',
      ],
      [
        'Voulez un plan écrit au lieu de deviner à la salle',
        'Avez un emploi du temps changeant et besoin d’un entraînement adaptable',
        'Voulez que quelqu’un examine vos progrès et ajuste le plan',
        'Êtes prêt à rendre compte honnêtement, y compris les semaines difficiles',
        'Comprenez que les résultats prennent des mois, pas des jours',
      ],
      [
        'تريد خطة مكتوبة بدل التخمين في الصالة',
        'لديك جدول متغير وتحتاج تدريباً يتكيف معه',
        'تريد من يراجع تقدمك ويعدّل الخطة',
        'مستعد للإبلاغ بصدق، بما في ذلك الأسابيع الصعبة',
        'تدرك أن النتائج تحتاج أشهراً لا أياماً',
      ],
    ),
    notTitle: L('It is not suitable if you', 'Ce n’est pas adapté si vous', 'غير مناسب لك إذا كنت'),
    notList: L(
      [
        'Need diagnosis or treatment of a medical condition',
        'Need medical nutrition therapy, a therapeutic diet or eating-disorder care',
        'Are looking for a guaranteed result or a fixed timeline',
        'Want a plan but do not intend to follow or report on it',
        'Are pregnant or breastfeeding and have not consulted a clinician',
      ],
      [
        'Avez besoin d’un diagnostic ou d’un traitement médical',
        'Avez besoin d’une thérapie nutritionnelle médicale, d’un régime thérapeutique ou de soins pour un trouble alimentaire',
        'Cherchez un résultat garanti ou un délai fixe',
        'Voulez un plan sans intention de le suivre ni d’en rendre compte',
        'Êtes enceinte ou allaitante sans avis médical',
      ],
      [
        'تحتاج تشخيصاً أو علاجاً لحالة طبية',
        'تحتاج علاجاً تغذوياً طبياً أو حمية علاجية أو رعاية اضطرابات الأكل',
        'تبحث عن نتيجة مضمونة أو مدة ثابتة',
        'تريد خطة دون نية لاتباعها أو الإبلاغ عنها',
        'كنت حاملاً أو مرضعة دون استشارة مختص',
      ],
    ),
    note: L(
      'If your situation needs clinical care, I will say so before you pay and refer you to an appropriately qualified professional.',
      "Si votre situation nécessite des soins cliniques, je vous le dirai avant tout paiement et vous orienterai vers un professionnel qualifié.",
      'إذا كانت حالتك تحتاج رعاية سريرية، فسأوضح ذلك قبل الدفع وأحيلك إلى مختص مؤهل.',
    ),
  },
  approach: {
    eyebrow: L('The approach', 'La méthode', 'المنهج'),
    title: L(
      'Assessment, not assumptions',
      'Un bilan, pas des suppositions',
      'تقييم لا افتراضات',
    ),
    intro: L(
      'Four principles shape every plan. None of them requires an app, and none of them promises a result that cannot be guaranteed.',
      "Quatre principes structurent chaque plan. Aucun ne nécessite d'application, et aucun ne promet un résultat impossible à garantir.",
      'أربعة مبادئ تشكل كل خطة. لا يحتاج أي منها إلى تطبيق، ولا يَعِد أي منها بنتيجة لا يمكن ضمانها.',
    ),
    items: [
      {
        title: L('Start with your baseline', 'Partir de votre point de départ', 'ابدأ من نقطة انطلاقك'),
        body: L(
          'Training history, equipment, schedule, food preferences and known limitations are reviewed before a plan is written.',
          "L'historique d'entraînement, le matériel, l'emploi du temps, les préférences alimentaires et les limitations connues sont examinés avant d'écrire un plan.",
          'تُراجع خبرتك التدريبية ومعداتك وجدولك وتفضيلاتك الغذائية وقيودك المعروفة قبل كتابة أي خطة.',
        ),
      },
      {
        title: L('Make progress measurable', 'Rendre le progrès mesurable', 'اجعل التقدم قابلاً للقياس'),
        body: L(
          'Sessions have a purpose. You record what matters, so the next adjustment is based on data rather than guesswork.',
          "Chaque séance a un objectif. Vous notez ce qui compte, afin que le prochain ajustement repose sur des données et non sur l'intuition.",
          'لكل حصة هدف. تسجل ما يهم، ليكون التعديل التالي مبنياً على بيانات لا على التخمين.',
        ),
      },
      {
        title: L('Keep nutrition practical', 'Garder la nutrition pratique', 'اجعل التغذية عملية'),
        body: L(
          'Guidance is built around foods you actually eat, including meals out and travel. No forbidden-food theatre and no supplement prescriptions.',
          'Les conseils sont construits autour des aliments que vous mangez réellement, y compris les repas à l’extérieur et les déplacements. Pas de théâtre des aliments interdits ni de prescription de compléments.',
          'تُبنى الإرشادات على أطعمة تتناولها فعلاً، بما في ذلك الأكل خارج المنزل والسفر. لا مبالغة في الممنوعات ولا وصفات مكملات.',
        ),
      },
      {
        title: L('Be honest about limits', 'Être honnête sur les limites', 'كن صادقاً بشأن الحدود'),
        body: L(
          'Coaching is educational. It does not replace medical care, and no specific fat-loss, muscle-gain or timeline result is promised.',
          "Le coaching est éducatif. Il ne remplace pas les soins médicaux, et aucun résultat précis de perte de gras, de prise de muscle ou de délai n'est promis.",
          'التدريب خدمة توعوية لا تُغني عن الرعاية الطبية، ولا نَعِد بنتيجة محددة لخسارة الدهون أو بناء العضلات أو بمدة زمنية.',
        ),
      },
    ],
  },
  process: {
    eyebrow: L('How it works', 'Comment ça marche', 'كيف يعمل'),
    title: L('From application to adjustment', 'De la candidature aux ajustements', 'من الطلب إلى التعديل'),
    intro: L(
      'A straightforward process with a fit check before any payment.',
      'Un processus simple, avec une vérification de compatibilité avant tout paiement.',
      'عملية واضحة مع التحقق من الملاءمة قبل أي دفع.',
    ),
    steps: [
      {
        n: '01',
        title: L('Apply', 'Postuler', 'تقدّم'),
        body: L(
          'Tell me your goal, schedule, training experience and any medical considerations through a short form.',
          "Indiquez votre objectif, votre emploi du temps, votre expérience d'entraînement et toute considération médicale via un court formulaire.",
          'أخبرني بهدفك وجدولك وخبرتك التدريبية وأي اعتبارات طبية عبر نموذج قصير.',
        ),
      },
      {
        n: '02',
        title: L('Assessment and fit check', 'Bilan et vérification', 'التقييم والتحقق'),
        body: L(
          'If the service is appropriate, you complete a fuller assessment. If it is not, I tell you before you pay and refer you where needed.',
          "Si le service est approprié, vous complétez un bilan plus complet. Sinon, je vous le dis avant tout paiement et vous oriente vers qui de droit.",
          'إذا كانت الخدمة مناسبة، تكمل تقييماً أوسع. وإن لم تكن، أوضح ذلك قبل الدفع وأحيلك إلى الجهة المناسبة.',
        ),
      },
      {
        n: '03',
        title: L('Written plan', 'Plan écrit', 'خطة مكتوبة'),
        body: L(
          'You receive the training and/or nutrition plan in writing, with the reasoning and the progression explained.',
          "Vous recevez le plan d'entraînement et/ou de nutrition par écrit, avec le raisonnement et la progression expliqués.",
          'تستلم خطة التدريب و/أو التغذية مكتوبة، مع شرح المنطق والتدرج.',
        ),
      },
      {
        n: '04',
        title: L('Review and adjust', 'Bilan et ajustement', 'المراجعة والتعديل'),
        body: L(
          'At the agreed check-ins, you send progress information. The plan is adjusted from what the data shows.',
          'Aux bilans convenus, vous envoyez les informations de suivi. Le plan est ajusté selon ce que montrent les données.',
          'في المتابعات المتفق عليها ترسل معلومات التقدم، وتُعدّل الخطة وفق ما تُظهره البيانات.',
        ),
      },
    ],
    note: L(
      'No payment is collected on this website. Pricing is confirmed in writing before coaching begins.',
      "Aucun paiement n'est collecté sur ce site. Le tarif est confirmé par écrit avant le début du coaching.",
      'لا يتم تحصيل أي دفع على هذا الموقع. يُؤكَّد السعر كتابياً قبل بدء التدريب.',
    ),
  },
  servicesSection: {
    eyebrow: L('Coaching options', 'Les formules', 'خيارات التدريب'),
    title: L('Pick the problem you want solved', 'Choisissez le problème à résoudre', 'اختر ما تريد حله'),
    intro: L(
      'Four focused services. Each one is delivered online and starts with an assessment.',
      'Quatre services ciblés. Chacun est proposé en ligne et commence par un bilan.',
      'أربع خدمات مركزة. تُقدَّم كلها عبر الإنترنت وتبدأ بتقييم.',
    ),
  },
  pricingSection: {
    eyebrow: L('Pricing', 'Tarifs', 'الأسعار'),
    title: L('Simple monthly plans in USD', 'Des formules mensuelles simples en USD', 'خطط شهرية واضحة بالدولار'),
    intro: L(
      'Applications are reviewed before payment. No contract, no app, no hidden add-ons.',
      'Les candidatures sont examinées avant paiement. Sans engagement, sans application, sans options cachées.',
      'تُراجع الطلبات قبل الدفع. دون عقد ملزم أو تطبيق أو إضافات خفية.',
    ),
    note: L(
      'Prices are shown in US dollars and billed monthly. Cancel before the next renewal date. See the pricing page for billing, cancellation and exclusions.',
      "Les prix sont en dollars américains et facturés mensuellement. Annulez avant la prochaine date de renouvellement. Voir la page tarifs pour la facturation, l'annulation et les exclusions.",
      'الأسعار بالدولار الأمريكي وتُفوتر شهرياً. ألغِ قبل تاريخ التجديد التالي. راجع صفحة الأسعار للفوترة والإلغاء والاستثناءات.',
    ),
  },
  resultsSection: {
    eyebrow: L('Results, honestly', 'Les résultats, honnêtement', 'النتائج بصدق'),
    title: L('No borrowed before-and-afters. No invented numbers.', 'Pas de photos empruntées. Pas de chiffres inventés.', 'لا صور مستعارة. لا أرقام مختلقة.'),
    body: L(
      'This site does not currently publish client transformations. Real case studies require a client record and written consent, and neither is in place yet. The results page explains the standard that will be applied before any story is published.',
      "Ce site ne publie pas actuellement de transformations de clients. De vraies études de cas exigent un dossier client et un consentement écrit, et aucun des deux n'est encore en place. La page résultats explique la norme qui sera appliquée avant toute publication.",
      'لا ينشر هذا الموقع حالياً تحولات لعملاء. تتطلب دراسات الحالة الحقيقية سجلاً للعميل وموافقة خطية، وليس أي منهما متاحاً بعد. توضح صفحة النتائج المعيار الذي سيُطبَّق قبل نشر أي قصة.',
    ),
    cta: L('Read the results policy', 'Lire la politique de résultats', 'اقرأ سياسة النتائج'),
    stats: [
      {
        value: '220+',
        label: L('clients coached', 'clients accompagnés', 'عميلاً تم تدريبهم'),
        note: L('Owner-reported figure', 'Chiffre fourni par le coach', 'رقم مقدَّم من المدرب'),
      },
      {
        value: '3',
        label: L('coaching languages', 'langues de coaching', 'لغات للتدريب'),
        note: L('English · French · Arabic', 'Français · anglais · arabe', 'العربية · الفرنسية · الإنجليزية'),
      },
      {
        value: '1:1',
        label: L('direct coaching', 'coaching direct', 'تدريب مباشر'),
        note: L('No group template', 'Pas de modèle de groupe', 'دون قالب جماعي'),
      },
    ],
  },
  calculatorSection: {
    eyebrow: L('Free tool', 'Outil gratuit', 'أداة مجانية'),
    title: L('Estimate your starting calories', 'Estimez vos calories de départ', 'قدّر سعراتك الأولية'),
    intro: L(
      'A rough starting estimate for healthy adults, using the Mifflin–St Jeor equation. It is educational, not a prescription, and it is not medical or dietetic advice.',
      "Une estimation approximative pour adultes en bonne santé, basée sur l'équation de Mifflin–St Jeor. Elle est éducative, non prescriptive, et ne constitue pas un avis médical ou diététique.",
      'تقدير أولي تقريبي للبالغين الأصحاء باستخدام معادلة ميفلين–سانت جور. وهو تعليمي وليس وصفة ولا نصيحة طبية أو تغذوية.',
    ),
  },
  faqSection: {
    eyebrow: L('Common questions', 'Questions fréquentes', 'أسئلة شائعة'),
    title: L('Before you apply', 'Avant de postuler', 'قبل أن تتقدم'),
    cta: L('All questions and answers', 'Toutes les questions et réponses', 'كل الأسئلة والأجوبة'),
  },
  finalCta: {
    eyebrow: L('Next step', 'Prochaine étape', 'الخطوة التالية'),
    title: L('Tell me what you are working toward', 'Dites-moi ce que vous visez', 'أخبرني بما تسعى إليه'),
    body: L(
      'The application takes a few minutes. You will get a straight answer about whether coaching is appropriate for your situation — before any payment.',
      "La candidature prend quelques minutes. Vous obtiendrez une réponse franche sur la pertinence du coaching pour votre situation — avant tout paiement.",
      'يستغرق الطلب بضع دقائق. وستحصل على إجابة واضحة حول مدى ملاءمة التدريب لحالتك — قبل أي دفع.',
    ),
    primary: L('Start the application', 'Commencer la candidature', 'ابدأ الطلب'),
    secondary: L('Ask a question first', 'Poser une question d’abord', 'اطرح سؤالاً أولاً'),
  },
};

export type PlanContent = {
  id: string;
  name: ReturnType<typeof L<string>>;
  price: number;
  cadence: ReturnType<typeof L<string>>;
  tagline: ReturnType<typeof L<string>>;
  featured?: boolean;
  cta: ReturnType<typeof L<string>>;
  includes: ReturnType<typeof L<string[]>>;
  excludes: ReturnType<typeof L<string[]>>;
};

export const plans: PlanContent[] = [
  {
    id: 'nutrition',
    name: L('Nutrition only', 'Nutrition seule', 'التغذية فقط'),
    price: 99,
    cadence: L('per month', 'par mois', 'شهرياً'),
    tagline: L(
      'For people who already train and want their nutrition organised.',
      'Pour ceux qui s’entraînent déjà et veulent structurer leur nutrition.',
      'لمن يتدربون بالفعل ويريدون تنظيم تغذيتهم.',
    ),
    cta: L('Apply for nutrition', 'Demander la nutrition', 'تقدّم للتغذية'),
    includes: L(
      [
        'Calorie and macronutrient targets',
        'Flexible meal structure built around foods you eat',
        'Portion and preparation guidance',
        'Practical options for eating out and travel',
        'Scheduled nutrition check-ins and adjustments',
        'Direct messaging support',
      ],
      [
        'Objectifs caloriques et de macronutriments',
        'Structure de repas flexible autour des aliments que vous mangez',
        'Conseils sur les portions et la préparation',
        'Options pratiques pour les repas à l’extérieur et les déplacements',
        'Bilans nutritionnels planifiés et ajustements',
        'Suivi par messagerie directe',
      ],
      [
        'أهداف السعرات والماكروز',
        'بنية وجبات مرنة مبنية على أطعمة تتناولها',
        'إرشادات الحصص والتحضير',
        'خيارات عملية للأكل خارج المنزل والسفر',
        'متابعات غذائية مجدولة وتعديلات',
        'دعم مباشر عبر الرسائل',
      ],
    ),
    excludes: L(
      ['A training programme', 'Medical nutrition therapy', 'Supplement prescriptions'],
      ['Un programme d’entraînement', 'Une thérapie nutritionnelle médicale', 'Des prescriptions de compléments'],
      ['برنامج تدريبي', 'علاج تغذوي طبي', 'وصفات مكملات'],
    ),
  },
  {
    id: 'training',
    name: L('Training + nutrition', 'Entraînement + nutrition', 'التدريب + التغذية'),
    price: 169,
    cadence: L('per month', 'par mois', 'شهرياً'),
    tagline: L(
      'The full coaching system: training, nutrition and scheduled accountability.',
      'Le système complet : entraînement, nutrition et suivi planifié.',
      'النظام الكامل: تدريب وتغذية ومتابعة مجدولة.',
    ),
    cta: L('Apply for full coaching', 'Demander le coaching complet', 'تقدّم للتدريب الكامل'),
    includes: L(
      [
        'Written training plan matched to your equipment and schedule',
        'Exercise progression and tracking guidance',
        'Calorie and macro targets plus practical food guidance',
        'Scheduled check-ins and plan adjustments',
        'Direct messaging support',
        'Form questions answered within the agreed response window',
      ],
      [
        'Plan d’entraînement écrit adapté à votre matériel et à votre emploi du temps',
        'Progression des exercices et conseils de suivi',
        'Objectifs caloriques et macro avec conseils alimentaires pratiques',
        'Bilans planifiés et ajustements du plan',
        'Suivi par messagerie directe',
        'Questions de technique traitées dans le délai de réponse convenu',
      ],
      [
        'خطة تدريب مكتوبة تناسب معداتك وجدولك',
        'تدرج التمارين وإرشادات التسجيل',
        'أهداف السعرات والماكروز مع إرشادات غذائية عملية',
        'متابعات مجدولة وتعديلات على الخطة',
        'دعم مباشر عبر الرسائل',
        'الإجابة عن أسئلة الأداء ضمن مدة الاستجابة المتفق عليها',
      ],
    ),
    excludes: L(
      ['Medical treatment or physiotherapy', 'Guaranteed fat loss or muscle gain', 'A mobile app'],
      ['Traitement médical ou kinésithérapie', 'Perte de gras ou prise de muscle garantie', 'Une application mobile'],
      ['علاج طبي أو علاج طبيعي', 'خسارة دهون أو بناء عضلات مضمون', 'تطبيق جوال'],
    ),
  },
  {
    id: 'vip',
    name: L('VIP transformation', 'Transformation VIP', 'التحول VIP'),
    price: 249,
    cadence: L('per month', 'par mois', 'شهرياً'),
    tagline: L(
      'The highest level of access, for people who want closer review.',
      'Le niveau d’accès le plus élevé, pour ceux qui veulent un suivi plus rapproché.',
      'أعلى مستوى من الوصول لمن يريد مراجعة أقرب.',
    ),
    featured: true,
    cta: L('Apply for VIP', 'Demander le VIP', 'تقدّم لـ VIP'),
    includes: L(
      [
        'Everything in Training + Nutrition',
        'Priority messaging',
        'Scheduled one-to-one video calls',
        'Form review from submitted video',
        'Habit and lifestyle coaching',
        'Periodic full plan review',
      ],
      [
        'Tout ce qui est inclus dans Entraînement + Nutrition',
        'Messagerie prioritaire',
        'Appels vidéo individuels planifiés',
        'Revue technique à partir des vidéos envoyées',
        'Coaching des habitudes et du mode de vie',
        'Revue complète périodique du plan',
      ],
      [
        'كل ما في التدريب + التغذية',
        'أولوية في الرسائل',
        'مكالمات فيديو فردية مجدولة',
        'مراجعة الأداء من الفيديوهات المرسلة',
        'تدريب على العادات ونمط الحياة',
        'مراجعة شاملة دورية للخطة',
      ],
    ),
    excludes: L(
      ['A guarantee of results', 'Medical or dietetic care', 'Unlimited calls at any hour'],
      ['Une garantie de résultats', 'Des soins médicaux ou diététiques', 'Des appels illimités à toute heure'],
      ['ضمان النتائج', 'رعاية طبية أو تغذوية', 'مكالمات غير محدودة في أي وقت'],
    ),
  },
];

export const billingTerms = {
  title: L('Billing, cancellation and what is included', 'Facturation, annulation et inclusions', 'الفوترة والإلغاء وما هو مشمول'),
  items: L(
    [
      'Prices are in US dollars (USD) and billed monthly in advance.',
      'There is no minimum term. Cancel before the next renewal date to stop the following charge.',
      'Payment is arranged only after the application and fit check. No payment is collected on this website.',
      'Coaching is delivered online through written plans, documents and messaging. No mobile app is provided.',
      'Medical care, physiotherapy, diagnostic tests and registered-dietitian services are not included.',
      'Prices may change with reasonable notice; an active subscription is not changed without telling you first.',
      'Refunds are handled according to the terms agreed before payment and any mandatory consumer rights that apply.',
    ],
    [
      'Les prix sont en dollars américains (USD) et facturés mensuellement à l’avance.',
      'Aucune durée minimale. Annulez avant la prochaine date de renouvellement pour éviter le prélèvement suivant.',
      'Le paiement est organisé après la candidature et la vérification de compatibilité. Aucun paiement n’est collecté sur ce site.',
      'Le coaching est assuré en ligne via des plans écrits, des documents et la messagerie. Aucune application mobile n’est fournie.',
      'Les soins médicaux, la kinésithérapie, les examens diagnostiques et les services de diététicien diplômé ne sont pas inclus.',
      'Les prix peuvent évoluer avec un préavis raisonnable ; un abonnement actif n’est pas modifié sans vous en informer.',
      'Les remboursements sont traités selon les conditions convenues avant paiement et les droits impératifs du consommateur applicables.',
    ],
    [
      'الأسعار بالدولار الأمريكي (USD) وتُفوتر شهرياً مقدماً.',
      'لا توجد مدة دنيا. ألغِ قبل تاريخ التجديد التالي لإيقاف الخصم التالي.',
      'يُرتَّب الدفع فقط بعد الطلب والتحقق من الملاءمة. لا يتم تحصيل أي دفع على هذا الموقع.',
      'يُقدَّم التدريب عبر الإنترنت من خلال خطط مكتوبة ومستندات ورسائل. لا يُوفَّر تطبيق جوال.',
      'الرعاية الطبية والعلاج الطبيعي والفحوصات التشخيصية وخدمات أخصائي التغذية المعتمد غير مشمولة.',
      'قد تتغير الأسعار بإشعار معقول؛ ولا يُغيّر اشتراك نشط دون إبلاغك أولاً.',
      'تُعالج المبالغ المستردة وفق الشروط المتفق عليها قبل الدفع وأي حقوق إلزامية للمستهلك تنطبق.',
    ],
  ),
  note: L(
    'This summary is not a substitute for the terms of service. Read the terms before paying.',
    'Ce résumé ne remplace pas les conditions d’utilisation. Lisez-les avant de payer.',
    'هذا الملخص لا يُغني عن شروط الخدمة. اقرأها قبل الدفع.',
  ),
};
