import { L } from './types';

export const about = {
  metaTitle: L('About Coach Ayman', 'À propos du Coach Ayman', 'عن الكوتش أيمن'),
  metaDescription: L(
    'Mohamed Ayman Yakhmim is an online fitness and nutrition coach based in Morocco, coaching in English, French and Arabic.',
    'Mohamed Ayman Yakhmim est coach sportif et nutritionnel en ligne, basé au Maroc, et coache en français, anglais et arabe.',
    'محمد أيمن يخميم مدرب لياقة وتغذية عبر الإنترنت من المغرب، يدرب بالعربية والفرنسية والإنجليزية.',
  ),
  eyebrow: L('About', 'À propos', 'عن المدرب'),
  h1: L('A coach, not a template library', 'Un coach, pas une bibliothèque de modèles', 'مدرب، لا مكتبة قوالب'),
  intro: L(
    'I am Mohamed Ayman Yakhmim. I coach adults online in English, French and Arabic, and I build the plan around the week you actually have.',
    'Je suis Mohamed Ayman Yakhmim. Je coache des adultes en ligne en français, en anglais et en arabe, et je construis le plan autour de la semaine que vous avez réellement.',
    'أنا محمد أيمن يخميم. أدرب البالغين عبر الإنترنت بالعربية والفرنسية والإنجليزية، وأبني الخطة حول أسبوعك الحقيقي.',
  ),
  story: {
    title: L('Why the plan starts with an assessment', 'Pourquoi le plan commence par un bilan', 'لماذا تبدأ الخطة بتقييم'),
    paragraphs: L(
      [
        'Most people do not need another generic programme. They need someone to look at their training history, equipment, schedule and food routine, and then write something that fits.',
        'That is the part I care about. The first conversation is not a sales pitch; it is a review of whether coaching is appropriate and what the realistic starting point is.',
        'My academic background is in exercise science, and I have completed NASM Nutrition Essentials. I list qualifications as they were supplied to me, without inflating them into a clinical licence I do not hold.',
      ],
      [
        "La plupart des gens n'ont pas besoin d'un programme générique de plus. Ils ont besoin de quelqu'un qui examine leur historique d'entraînement, leur matériel, leur emploi du temps et leur routine alimentaire, puis écrive quelque chose qui leur convient.",
        "C'est cette partie qui m'importe. La première conversation n'est pas un argumentaire de vente ; c'est un examen de la pertinence du coaching et du point de départ réaliste.",
        "Ma formation académique est en sciences du sport et j'ai suivi NASM Nutrition Essentials. Je présente mes qualifications telles qu'elles m'ont été fournies, sans les transformer en autorisation clinique que je ne possède pas.",
      ],
      [
        'لا يحتاج معظم الناس إلى برنامج عام آخر. بل يحتاجون إلى من ينظر في تاريخهم التدريبي ومعداتهم وجدولهم وروتينهم الغذائي، ثم يكتب شيئاً يناسبهم.',
        'هذا هو الجزء الذي يهمني. المحادثة الأولى ليست عرضاً بيعياً، بل مراجعة لمدى ملاءمة التدريب ونقطة البداية الواقعية.',
        'خلفيتي الأكاديمية في علوم الرياضة، وأكملت أساسيات التغذية من NASM. أذكر المؤهلات كما وُزّدت لي، دون تحويلها إلى ترخيص سريري لا أملكه.',
      ],
    ),
  },
  credentials: {
    title: L('Qualifications, stated accurately', 'Des qualifications présentées avec exactitude', 'مؤهلات مذكورة بدقة'),
    note: L(
      'Qualification details are supplied by the coach. Certificates are not independently verified on this website. NASM Nutrition Essentials is a course, not a personal-training certification or a clinical licence.',
      'Les détails des qualifications sont fournis par le coach. Les certificats ne sont pas vérifiés indépendamment sur ce site. NASM Nutrition Essentials est un cours, pas une certification d’entraîneur personnel ni une autorisation clinique.',
      'تفاصيل المؤهلات مقدَّمة من المدرب. لا يتم التحقق من الشهادات بشكل مستقل على هذا الموقع. أساسيات التغذية من NASM دورة، وليست شهادة تدريب شخصي أو ترخيصاً سريرياً.',
    ),
  },
  languages: {
    title: L('Coaching languages', 'Langues de coaching', 'لغات التدريب'),
    body: L(
      'Coaching is available in English, French and Arabic. Arabic sessions use Modern Standard Arabic with Moroccan Arabic where that is clearer for the client.',
      'Le coaching est disponible en français, en anglais et en arabe. Les séances en arabe utilisent l’arabe standard, avec l’arabe marocain lorsque c’est plus clair pour le client.',
      'التدريب متاح بالعربية والفرنسية والإنجليزية. تستخدم الجلسات العربية الفصحى مع الدارجة المغربية حين تكون أوضح للعميل.',
    ),
  },
  areas: {
    title: L('What I can help with', 'Ce que je peux aider à travailler', 'ما يمكنني المساعدة فيه'),
    items: L(
      [
        'Fat loss with strength training and sustainable nutrition',
        'Muscle gain with progressive resistance training',
        'Building consistency around a demanding schedule',
        'Structuring nutrition for people who already train',
        'Returning to training after a break, within your reported limitations',
      ],
      [
        'Perte de gras avec renforcement musculaire et nutrition durable',
        'Prise de muscle avec entraînement progressif',
        'Construire de la régularité malgré un emploi du temps chargé',
        'Structurer la nutrition de ceux qui s’entraînent déjà',
        'Reprendre après une pause, dans les limites que vous signalez',
      ],
      [
        'خسارة الدهون مع تدريب القوة وتغذية مستدامة',
        'بناء العضلات مع تدريب مقاومة تدريجي',
        'بناء الانتظام مع جدول مزدحم',
        'تنظيم التغذية لمن يتدربون بالفعل',
        'العودة إلى التدريب بعد انقطاع، ضمن القيود التي تذكرها',
      ],
    ),
  },
  limits: {
    title: L('What I will not do', 'Ce que je ne ferai pas', 'ما لن أفعله'),
    items: L(
      [
        'Diagnose or treat a medical condition',
        'Replace a doctor, physiotherapist or registered dietitian',
        'Promise a specific amount of fat loss, muscle gain or a timeline',
        'Sell supplements or claim that they are required',
        'Publish a client story without a record and written consent',
      ],
      [
        'Diagnostiquer ou traiter une maladie',
        'Remplacer un médecin, un kinésithérapeute ou un diététicien diplômé',
        'Promettre une quantité précise de perte de gras, de prise de muscle ou un délai',
        'Vendre des compléments ou affirmer qu’ils sont nécessaires',
        'Publier l’histoire d’un client sans dossier ni consentement écrit',
      ],
      [
        'تشخيص أو علاج حالة طبية',
        'استبدال الطبيب أو أخصائي العلاج الطبيعي أو أخصائي التغذية المعتمد',
        'الوعد بمقدار محدد من خسارة الدهون أو بناء العضلات أو بمدة زمنية',
        'بيع المكملات أو الادعاء بأنها ضرورية',
        'نشر قصة عميل دون سجل وموافقة خطية',
      ],
    ),
  },
  cta: L('Read the full coaching options', 'Voir toutes les formules', 'اطّلع على خيارات التدريب'),
};

export const coaching = {
  metaTitle: L('Online Coaching Services', 'Services de coaching en ligne', 'خدمات التدريب عبر الإنترنت'),
  metaDescription: L(
    'Online fitness coaching, weight-loss coaching, muscle-building coaching and nutrition coaching with written plans and scheduled reviews.',
    'Coaching sportif en ligne, perte de poids, prise de muscle et nutrition, avec plans écrits et bilans planifiés.',
    'تدريب لياقة عبر الإنترنت وخسارة الوزن وبناء العضلات والتغذية، بخطط مكتوبة ومراجعات مجدولة.',
  ),
  eyebrow: L('Coaching', 'Coaching', 'التدريب'),
  h1: L('One coach, four focused services', 'Un coach, quatre services ciblés', 'مدرب واحد وأربع خدمات مركزة'),
  intro: L(
    'Every service starts with an assessment and is delivered online. Choose the problem that matches yours; if another option fits better, I will say so.',
    'Chaque service commence par un bilan et se déroule en ligne. Choisissez le problème qui correspond au vôtre ; si une autre option convient mieux, je vous le dirai.',
    'تبدأ كل خدمة بتقييم وتُقدَّم عبر الإنترنت. اختر المشكلة التي تناسبك؛ وإن كانت خيارات أخرى أنسب فسأوضح ذلك.',
  ),
  includesTitle: L('What every service has in common', 'Ce que tous les services ont en commun', 'ما تشترك فيه كل الخدمات'),
  includes: L(
    [
      'A written plan you keep',
      'An assessment before programming',
      'Scheduled reviews rather than vague promises',
      'Direct messaging support within an agreed window',
      'Honest referral when your situation needs clinical care',
    ],
    [
      'Un plan écrit que vous conservez',
      'Un bilan avant toute programmation',
      'Des bilans planifiés plutôt que des promesses vagues',
      'Un suivi par messagerie directe dans un délai convenu',
      'Une orientation honnête lorsque votre situation nécessite des soins cliniques',
    ],
    [
      'خطة مكتوبة تحتفظ بها',
      'تقييم قبل البرمجة',
      'مراجعات مجدولة بدل وعود غامضة',
      'دعم مباشر عبر الرسائل ضمن مدة متفق عليها',
      'إحالة صادقة عندما تحتاج حالتك رعاية سريرية',
    ],
  ),
  deliveryTitle: L('How coaching is delivered', 'Comment le coaching est assuré', 'كيف يُقدَّم التدريب'),
  deliveryBody: L(
    'Plans are delivered as documents and explained through messaging. Check-ins are scheduled. There is no mobile app, no group chat and no automated plan generator. You deal with one coach.',
    'Les plans sont transmis sous forme de documents et expliqués par messagerie. Les bilans sont planifiés. Il n’y a ni application mobile, ni groupe de discussion, ni générateur automatique de plan. Vous traitez avec un seul coach.',
    'تُسلَّم الخطط كمستندات وتُشرح عبر الرسائل. المتابعات مجدولة. لا يوجد تطبيق جوال ولا مجموعة دردشة ولا مولّد خطط آلي. تتعامل مع مدرب واحد.',
  ),
  cta: L('See plans and pricing', 'Voir les formules et tarifs', 'اطّلع على الخطط والأسعار'),
};

export const results = {
  metaTitle: L('Results and Evidence Policy', 'Résultats et politique de preuve', 'النتائج وسياسة الأدلة'),
  metaDescription: L(
    'How this coaching practice handles results, client stories, consent and evidence. No unverified transformations are published.',
    'Comment cette pratique traite les résultats, les témoignages, le consentement et les preuves. Aucune transformation non vérifiée n’est publiée.',
    'كيف تتعامل هذه الممارسة مع النتائج وقصص العملاء والموافقة والأدلة. لا تُنشر أي تحولات غير موثقة.',
  ),
  eyebrow: L('Results', 'Résultats', 'النتائج'),
  h1: L('Results without borrowed proof', 'Des résultats sans preuve empruntée', 'نتائج دون أدلة مستعارة'),
  intro: L(
    'Fitness marketing is full of numbers nobody can check. This page sets out what will be published, what will not, and why the difference matters.',
    'Le marketing fitness regorge de chiffres invérifiables. Cette page précise ce qui sera publié, ce qui ne le sera pas, et pourquoi la différence compte.',
    'تزخر تسويق اللياقة بأرقام لا يمكن التحقق منها. توضح هذه الصفحة ما سيُنشر وما لن يُنشر ولماذا يهم الفرق.',
  ),
  statusTitle: L('Current status', 'Situation actuelle', 'الوضع الحالي'),
  statusBody: L(
    'No client transformation, before-and-after image, testimonial or star rating is published on this site at the time of writing. That is deliberate. The previous version of this site displayed unverified stories and placeholder images, and they were removed.',
    'Aucune transformation de client, image avant/après, témoignage ou note par étoiles n’est publié sur ce site à la date de rédaction. C’est délibéré. La version précédente affichait des histoires non vérifiées et des images de remplacement ; elles ont été retirées.',
    'لا يُنشر على هذا الموقع أي تحول لعميل أو صورة قبل/بعد أو شهادة أو تقييم بالنجوم وقت كتابة هذا النص. وهذا مقصود. عرضت النسخة السابقة قصصاً غير موثقة وصوراً مؤقتة، وقد أُزيلت.',
  ),
  standardsTitle: L('The standard for publishing a client story', 'La norme pour publier l’histoire d’un client', 'معيار نشر قصة عميل'),
  standards: L(
    [
      'A real client record exists and the details can be checked against it.',
      'The client gives specific, written consent for the text and images used.',
      'Consent covers the channels where the story will appear and can be withdrawn.',
      'Before-and-after images are the client’s own, taken with consistent conditions where possible.',
      'Results are described with context: starting point, timeframe, adherence and limitations.',
      'No result is presented as typical, guaranteed or achievable by everyone.',
    ],
    [
      'Un dossier client réel existe et les détails peuvent être vérifiés.',
      'Le client donne un consentement écrit et spécifique pour le texte et les images utilisés.',
      'Le consentement couvre les canaux de publication et peut être retiré.',
      'Les images avant/après appartiennent au client, prises dans des conditions aussi cohérentes que possible.',
      'Les résultats sont décrits avec leur contexte : point de départ, durée, adhérence et limites.',
      'Aucun résultat n’est présenté comme typique, garanti ou reproductible par tous.',
    ],
    [
      'يوجد سجل عميل حقيقي ويمكن التحقق من التفاصيل مقارنةً به.',
      'يمنح العميل موافقة خطية محددة للنص والصور المستخدمة.',
      'تشمل الموافقة قنوات النشر ويمكن سحبها.',
      'صور قبل/بعد مملوكة للعميل، وتُلتقط بظروف متسقة قدر الإمكان.',
      'تُوصف النتائج بسياقها: نقطة البداية والمدة والالتزام والقيود.',
      'لا تُعرض أي نتيجة كنموذجية أو مضمونة أو قابلة للتحقيق من الجميع.',
    ],
  ),
  wontTitle: L('What will never be published', 'Ce qui ne sera jamais publié', 'ما لن يُنشر أبداً'),
  wontList: L(
    [
      'Invented client names, ages, quotations or results',
      'Stock photos presented as a client transformation',
      '“Guaranteed” kilograms, timelines or star ratings without a review source',
      'Scarcity claims (“3 spots left”) that cannot be verified',
      'Medical outcomes or claims that coaching treats a condition',
    ],
    [
      'Des noms, âges, citations ou résultats de clients inventés',
      'Des photos de banque d’images présentées comme une transformation',
      'Des kilogrammes « garantis », des délais ou des notes sans source d’avis',
      'Des affirmations de rareté (« 3 places restantes ») invérifiables',
      'Des résultats médicaux ou l’affirmation que le coaching traite une maladie',
    ],
    [
      'أسماء أو أعمار أو اقتباسات أو نتائج عملاء مختلقة',
      'صوراً من مخزون تُعرض كتحول عميل',
      'كيلوغرامات «مضمونة» أو مدداً أو تقييمات نجوم دون مصدر',
      'ادعاءات ندرة («بقيت 3 أماكن») لا يمكن التحقق منها',
      'نتائج طبية أو ادعاء أن التدريب يعالج حالة',
    ],
  ),
  ownerTitle: L('The one figure that is shown', 'Le seul chiffre affiché', 'الرقم الوحيد المعروض'),
  ownerBody: L(
    'The site shows “220+ clients coached” because the coach supplied that figure in the brand profile. It is labelled as owner-reported, is not independently audited, and no derivative numbers (kilograms lost, transformations, countries, years) are inferred from it.',
    'Le site affiche « 220+ clients accompagnés » car le coach a fourni ce chiffre dans son profil de marque. Il est identifié comme déclaré par le coach, non vérifié indépendamment, et aucun chiffre dérivé (kilos perdus, transformations, pays, années) n’en est déduit.',
    'يعرض الموقع «أكثر من 220 عميلاً» لأن المدرب قدّم هذا الرقم في ملف العلامة. ويُوسم بأنه مقدَّم من المدرب وغير مدقق بشكل مستقل، ولا تُستنتج منه أرقام مشتقة (كيلوغرامات مفقودة أو تحولات أو دول أو سنوات).',
  ),
  ctaTitle: L('Want your story considered?', 'Vous souhaitez partager votre histoire ?', 'تريد أن تُنظر في قصتك؟'),
  ctaBody: L(
    'Clients can ask for the consent form and review exactly what would be published before agreeing. There is no obligation to participate.',
    'Les clients peuvent demander le formulaire de consentement et vérifier exactement ce qui serait publié avant d’accepter. Aucune obligation de participer.',
    'يمكن للعملاء طلب نموذج الموافقة ومراجعة ما سيُنشر بالضبط قبل الموافقة. لا يوجد إلزام بالمشاركة.',
  ),
};

export const pricing = {
  metaTitle: L('Coaching Prices and Plans', 'Tarifs et formules de coaching', 'أسعار وخطط التدريب'),
  metaDescription: L(
    'Monthly online coaching plans from $99: nutrition only, training plus nutrition, and VIP. USD billing, no minimum term, apply before payment.',
    'Formules de coaching en ligne à partir de 99 $/mois : nutrition seule, entraînement + nutrition, VIP. Facturation en USD, sans durée minimale, candidature avant paiement.',
    'خطط تدريب عبر الإنترنت من 99 دولاراً شهرياً: تغذية فقط، تدريب وتغذية، وVIP. فوترة بالدولار، دون مدة دنيا، والطلب قبل الدفع.',
  ),
  eyebrow: L('Pricing', 'Tarifs', 'الأسعار'),
  h1: L('Plans priced per month, not per promise', 'Des formules au mois, pas à la promesse', 'خطط شهرية لا وعود'),
  intro: L(
    'Three plans, all delivered online. The right plan depends on whether you need nutrition only, a full training programme, or closer one-to-one access.',
    'Trois formules, toutes en ligne. La bonne formule dépend de votre besoin : nutrition seule, programme complet ou accès individuel plus rapproché.',
    'ثلاث خطط، جميعها عبر الإنترنت. تعتمد الخطة المناسبة على حاجتك: تغذية فقط، برنامج تدريبي كامل، أو وصول فردي أقرب.',
  ),
  comparisonTitle: L('What is not included in any plan', 'Ce qui n’est inclus dans aucune formule', 'ما لا تشمله أي خطة'),
  comparison: L(
    [
      'Medical diagnosis, treatment or medication',
      'Physiotherapy and injury rehabilitation',
      'Registered-dietitian or clinical nutrition services',
      'Laboratory tests or body-composition scans',
      'A guarantee of a specific result or timeline',
      'A mobile app or group programme',
    ],
    [
      'Diagnostic, traitement ou médicaments',
      'Kinésithérapie et rééducation de blessure',
      'Services de diététicien diplômé ou de nutrition clinique',
      'Analyses de laboratoire ou scanners de composition corporelle',
      'Une garantie de résultat précis ou de délai',
      'Une application mobile ou un programme de groupe',
    ],
    [
      'التشخيص الطبي أو العلاج أو الأدوية',
      'العلاج الطبيعي وإعادة تأهيل الإصابات',
      'خدمات أخصائي التغذية المعتمد أو التغذية السريرية',
      'تحاليل المختبر أو فحوصات تكوين الجسم',
      'ضمان نتيجة أو مدة محددة',
      'تطبيق جوال أو برنامج جماعي',
    ],
  ),
  paymentTitle: L('How payment works', 'Comment se déroule le paiement', 'كيف يتم الدفع'),
  paymentSteps: L(
    [
      'You apply and complete the fit check.',
      'If coaching is appropriate, you receive the plan, scope and price in writing.',
      'You confirm and arrange the first monthly payment directly with the coach.',
      'Coaching starts after payment and the completed assessment.',
    ],
    [
      'Vous postulez et complétez la vérification de compatibilité.',
      'Si le coaching est approprié, vous recevez le plan, le périmètre et le prix par écrit.',
      'Vous confirmez et organisez le premier paiement mensuel directement avec le coach.',
      'Le coaching commence après paiement et bilan complété.',
    ],
    [
      'تتقدم وتكمل التحقق من الملاءمة.',
      'إذا كان التدريب مناسباً، تستلم الخطة والنطاق والسعر كتابياً.',
      'تؤكد وترتب الدفعة الشهرية الأولى مباشرة مع المدرب.',
      'يبدأ التدريب بعد الدفع واستكمال التقييم.',
    ],
  ),
  faqTitle: L('Pricing questions', 'Questions sur les tarifs', 'أسئلة الأسعار'),
};

export const faqPage = {
  metaTitle: L('Frequently Asked Questions', 'Questions fréquentes', 'الأسئلة الشائعة'),
  metaDescription: L(
    'Answers about online coaching, pricing, medical limitations, languages, data privacy and what happens after you apply.',
    'Réponses sur le coaching en ligne, les tarifs, les limitations médicales, les langues, la confidentialité et la suite de la candidature.',
    'أجوبة عن التدريب عبر الإنترنت والأسعار والقيود الطبية واللغات وخصوصية البيانات وما يحدث بعد الطلب.',
  ),
  eyebrow: L('FAQ', 'FAQ', 'الأسئلة الشائعة'),
  h1: L('Straight answers before you commit', 'Des réponses franches avant de vous engager', 'إجابات واضحة قبل الالتزام'),
  intro: L(
    'If a question is missing, send it. The answer will be added here if it is useful to other people too.',
    'Si une question manque, envoyez-la. La réponse sera ajoutée ici si elle est utile à d’autres.',
    'إن لم تجد سؤالك فأرسله. وستُضاف الإجابة هنا إن كانت مفيدة للآخرين.',
  ),
  categories: [
    {
      id: 'coaching',
      title: L('Coaching', 'Coaching', 'التدريب'),
      items: [
        {
          q: L('Do I need a gym?', 'Ai-je besoin d’une salle de sport ?', 'هل أحتاج إلى صالة رياضية؟'),
          a: L(
            'No. The plan can be written for a commercial gym, a home set-up or minimal equipment. Tell me what you have during the assessment, and the plan will be built around it.',
            'Non. Le plan peut être écrit pour une salle commerciale, un espace à domicile ou un matériel minimal. Indiquez ce que vous avez lors du bilan ; le plan sera construit autour.',
            'لا. يمكن كتابة الخطة لصالة تجارية أو مساحة منزلية أو معدات بسيطة. أخبرني بما لديك أثناء التقييم وستُبنى الخطة عليه.',
          ),
        },
        {
          q: L('How much time do I need each week?', 'Combien de temps faut-il par semaine ?', 'كم من الوقت أحتاج أسبوعياً؟'),
          a: L(
            'Most plans are built around two to five training sessions per week. The programme is matched to the time you can realistically commit, not an ideal schedule.',
            'La plupart des plans s’articulent autour de deux à cinq séances par semaine. Le programme est adapté au temps que vous pouvez réellement consacrer, pas à un emploi du temps idéal.',
            'تُبنى معظم الخطط حول حصتين إلى خمس حصص أسبوعياً. يُطابق البرنامج الوقت الذي يمكنك الالتزام به فعلاً، لا جدولاً مثالياً.',
          ),
        },
        {
          q: L('Can I start as a complete beginner?', 'Puis-je commencer en étant débutant complet ?', 'هل يمكنني البدء وأنا مبتدئ تماماً؟'),
          a: L(
            'Yes. Beginners are assessed the same way and start with a plan that teaches the movements and builds a base. You do not need previous gym experience.',
            'Oui. Les débutants sont évalués de la même manière et commencent par un plan qui enseigne les mouvements et construit une base. Aucune expérience en salle n’est nécessaire.',
            'نعم. يُقيَّم المبتدئون بالطريقة نفسها ويبدأون بخطة تعليم الحركات وبناء الأساس. لا تحتاج خبرة سابقة في الصالة.',
          ),
        },
        {
          q: L('Can I continue while travelling?', 'Puis-je continuer en voyage ?', 'هل يمكنني الاستمرار أثناء السفر؟'),
          a: L(
            'Yes, travel is planned for where possible. Tell me the dates and available equipment, and the training and nutrition guidance will be adjusted. It will not be identical to your home routine.',
            'Oui, les déplacements sont pris en compte lorsque c’est possible. Indiquez les dates et le matériel disponible ; l’entraînement et la nutrition seront ajustés. Ce ne sera pas identique à votre routine habituelle.',
            'نعم، يُراعى السفر حيثما أمكن. أخبرني بالتواريخ والمعدات المتاحة وستُعدّل إرشادات التدريب والتغذية. ولن تكون مطابقة لروتينك في المنزل.',
          ),
        },
      ],
    },
    {
      id: 'pricing',
      title: L('Plans and payment', 'Formules et paiement', 'الخطط والدفع'),
      items: [
        {
          q: L('How much does coaching cost?', 'Combien coûte le coaching ?', 'كم تكلفة التدريب؟'),
          a: L(
            'The published plans are $99, $169 and $249 per month in US dollars. The plan comparison on the pricing page sets out what each includes and excludes. Prices are confirmed in writing before payment.',
            'Les formules publiées sont de 99 $, 169 $ et 249 $ par mois en dollars américains. La comparaison sur la page tarifs précise ce que chacune inclut et exclut. Les prix sont confirmés par écrit avant paiement.',
            'الخطط المنشورة هي 99 و169 و249 دولاراً شهرياً بالدولار الأمريكي. توضح المقارنة في صفحة الأسعار ما تشمله كل خطة وما تستثنيه. ويُؤكَّد السعر كتابياً قبل الدفع.',
          ),
        },
        {
          q: L('Is there a contract or minimum term?', 'Y a-t-il un engagement ou une durée minimale ?', 'هل يوجد عقد أو مدة دنيا؟'),
          a: L(
            'No minimum term is stated. Billing is monthly in advance, and you cancel before the next renewal date to stop the following charge. The terms page sets out the full conditions.',
            'Aucune durée minimale n’est indiquée. La facturation est mensuelle à l’avance ; annulez avant la prochaine date de renouvellement pour éviter le prélèvement suivant. La page conditions détaille les modalités.',
            'لا توجد مدة دنيا معلنة. تُفوتر الخدمة شهرياً مقدماً، وتلغي قبل تاريخ التجديد التالي لإيقاف الخصم التالي. توضح صفحة الشروط الأحكام الكاملة.',
          ),
        },
        {
          q: L('Do you guarantee results?', 'Garantissez-vous des résultats ?', 'هل تضمن النتائج؟'),
          a: L(
            'No. Individual outcomes vary with starting point, health, adherence and circumstances. Coaching is designed to give you a structured, reviewed process — not a promised number.',
            'Non. Les résultats varient selon le point de départ, la santé, l’adhérence et les circonstances. Le coaching fournit un processus structuré et révisé — pas un chiffre promis.',
            'لا. تختلف النتائج الفردية حسب نقطة البداية والصحة والالتزام والظروف. صُمم التدريب ليمنحك عملية منظمة ومراجعة، لا رقماً موعوداً.',
          ),
        },
        {
          q: L('Do I need to buy supplements?', 'Dois-je acheter des compléments ?', 'هل يجب شراء مكملات؟'),
          a: L(
            'No. No supplement is required to follow a plan, and none is prescribed or sold through this site. Food comes first.',
            'Non. Aucun complément n’est nécessaire pour suivre un plan, et aucun n’est prescrit ou vendu via ce site. L’alimentation passe d’abord.',
            'لا. لا يُشترط أي مكمل لاتباع خطة، ولا يُوصف أو يُباع أي منها عبر هذا الموقع. الطعام أولاً.',
          ),
        },
      ],
    },
    {
      id: 'health',
      title: L('Health and safety', 'Santé et sécurité', 'الصحة والسلامة'),
      items: [
        {
          q: L('Can I join with an injury or medical condition?', 'Puis-je participer avec une blessure ou une maladie ?', 'هل يمكنني المشاركة مع إصابة أو حالة طبية؟'),
          a: L(
            'Tell me during the application. Some conditions require medical clearance or supervision before exercise or nutrition changes. If that applies, I will ask you to consult an appropriate professional and may decline coaching until it is safe to proceed.',
            'Indiquez-le lors de la candidature. Certaines conditions nécessitent un avis médical ou une supervision avant de modifier l’exercice ou l’alimentation. Le cas échéant, je vous demanderai de consulter un professionnel approprié et pourrai refuser le coaching jusqu’à ce qu’il soit sûr de continuer.',
            'اذكر ذلك في الطلب. بعض الحالات تتطلب إذناً أو إشرافاً طبياً قبل تغيير التمرين أو الطعام. وإذا انطبق ذلك، سأطلب منك مراجعة مختص مناسب وقد أرفض التدريب حتى يصبح آمناً.',
          ),
        },
        {
          q: L('Is this medical or dietetic care?', 'S’agit-il de soins médicaux ou diététiques ?', 'هل هذه رعاية طبية أو تغذوية؟'),
          a: L(
            'No. Coaching is educational. It does not diagnose or treat conditions and does not replace a doctor, physiotherapist or registered dietitian. If you need clinical care, you will be referred.',
            'Non. Le coaching est éducatif. Il ne diagnostique ni ne traite les maladies et ne remplace pas un médecin, un kinésithérapeute ou un diététicien diplômé. Si vous avez besoin de soins cliniques, vous serez orienté.',
            'لا. التدريب خدمة توعوية. لا يشخّص الأمراض ولا يعالجها ولا يُغني عن الطبيب أو أخصائي العلاج الطبيعي أو أخصائي التغذية المعتمد. وإذا احتجت رعاية سريرية فستتم إحالتك.',
          ),
        },
        {
          q: L('What if I am pregnant or breastfeeding?', 'Et si je suis enceinte ou allaitante ?', 'ماذا لو كنت حاملاً أو مرضعة؟'),
          a: L(
            'Consult your clinician first. Coaching may continue only with appropriate medical guidance, and nutrition guidance will not be framed as treatment.',
            'Consultez d’abord votre médecin. Le coaching ne peut continuer qu’avec un avis médical approprié, et les conseils nutritionnels ne seront pas présentés comme un traitement.',
            'استشيري مختصك أولاً. قد يستمر التدريب فقط بإرشاد طبي مناسب، ولن تُعرض الإرشادات الغذائية كعلاج.',
          ),
        },
      ],
    },
    {
      id: 'data',
      title: L('Languages and privacy', 'Langues et confidentialité', 'اللغات والخصوصية'),
      items: [
        {
          q: L('In which languages can I be coached?', 'Dans quelles langues puis-je être coaché ?', 'بأي لغات يمكنني التدرب؟'),
          a: L(
            'English, French and Arabic. Tell me your preference in the application so the assessment and plan are written in the language you understand best.',
            'Français, anglais et arabe. Indiquez votre préférence dans la candidature afin que le bilan et le plan soient rédigés dans la langue que vous comprenez le mieux.',
            'بالعربية والفرنسية والإنجليزية. أخبرني بتفضيلك في الطلب لتُكتب التقييم والخطة باللغة التي تفهمها أفضل.',
          ),
        },
        {
          q: L('What happens to the information I submit?', 'Que deviennent les informations envoyées ?', 'ماذا يحدث للمعلومات التي أرسلها؟'),
          a: L(
            'It is used to review your application and respond to you. The privacy policy explains the legal basis, retention period, processors and your rights. Do not submit medical records through the form.',
            'Elles servent à examiner votre candidature et à vous répondre. La politique de confidentialité explique la base légale, la durée de conservation, les sous-traitants et vos droits. N’envoyez pas de dossiers médicaux via le formulaire.',
            'تُستخدم لمراجعة طلبك والرد عليك. توضح سياسة الخصوصية الأساس القانوني ومدة الاحتفاظ والمعالجين وحقوقك. لا ترسل سجلات طبية عبر النموذج.',
          ),
        },
        {
          q: L('Why are there no testimonials on the site?', 'Pourquoi n’y a-t-il pas de témoignages sur le site ?', 'لماذا لا توجد شهادات على الموقع؟'),
          a: L(
            'Because none have been verified with a client record and written consent yet. The results page explains the standard that will be applied before publishing any client story.',
            'Parce qu’aucun n’a encore été vérifié avec un dossier client et un consentement écrit. La page résultats explique la norme appliquée avant toute publication.',
            'لأن أي شهادة لم تُوثَّق بعد بسجل عميل وموافقة خطية. توضح صفحة النتائج المعيار الذي سيُطبَّق قبل نشر أي قصة عميل.',
          ),
        },
      ],
    },
  ],
  ctaTitle: L('Still unsure?', 'Encore hésitant ?', 'ما زلت غير متأكد؟'),
  ctaBody: L(
    'Send the question you need answered. A straight answer is better than a sales call.',
    'Envoyez la question à laquelle vous avez besoin d’une réponse. Une réponse franche vaut mieux qu’un appel commercial.',
    'أرسل السؤال الذي تحتاج إجابته. الإجابة الصريحة أفضل من مكالمة بيع.',
  ),
};

export const contactPage = {
  metaTitle: L('Contact Coach Ayman', 'Contacter le Coach Ayman', 'تواصل مع الكوتش أيمن'),
  metaDescription: L(
    'Contact Coach Ayman about online fitness and nutrition coaching. Email, WhatsApp or send a message through the site.',
    'Contactez le Coach Ayman au sujet du coaching sportif et nutritionnel en ligne. E-mail, WhatsApp ou message via le site.',
    'تواصل مع الكوتش أيمن بشأن التدريب الرياضي والتغذية عبر الإنترنت. بريد إلكتروني أو واتساب أو رسالة عبر الموقع.',
  ),
  eyebrow: L('Contact', 'Contact', 'تواصل'),
  h1: L('Ask a direct question', 'Posez une question directe', 'اطرح سؤالاً مباشراً'),
  intro: L(
    'Use the form, email or WhatsApp. Messages go directly to Coach Ayman; they are not routed to a call centre.',
    'Utilisez le formulaire, l’e-mail ou WhatsApp. Les messages vont directement au Coach Ayman ; ils ne sont pas traités par un centre d’appels.',
    'استخدم النموذج أو البريد أو واتساب. تصل الرسائل مباشرة إلى الكوتش أيمن، ولا تُحوَّل إلى مركز اتصال.',
  ),
  formTitle: L('Send a message', 'Envoyer un message', 'أرسل رسالة'),
  directTitle: L('Prefer to write directly?', 'Vous préférez écrire directement ?', 'تفضل الكتابة مباشرة؟'),
  directBody: L(
    'Email and WhatsApp are monitored by the coach. Include your goal and the language you prefer.',
    'L’e-mail et WhatsApp sont relevés par le coach. Indiquez votre objectif et votre langue préférée.',
    'يتابع المدرب البريد وواتساب. اذكر هدفك واللغة التي تفضلها.',
  ),
  responseNote: L(
    'Response times vary with coaching hours and time zone. If you do not receive a reply, check your spam folder before resending.',
    'Les délais de réponse varient selon les heures de coaching et le fuseau horaire. Sans réponse, vérifiez vos courriers indésirables avant de renvoyer.',
    'تختلف أوقات الرد حسب ساعات التدريب والمنطقة الزمنية. وإن لم تستلم رداً فتحقق من مجلد الرسائل غير المرغوب فيها قبل إعادة الإرسال.',
  ),
  privacyNote: L(
    'Do not send medical records, identity documents or payment details through this form.',
    'N’envoyez pas de dossiers médicaux, de pièces d’identité ou de données de paiement via ce formulaire.',
    'لا ترسل سجلات طبية أو وثائق هوية أو بيانات دفع عبر هذا النموذج.',
  ),
};

export const applyPage = {
  metaTitle: L('Apply for Coaching', 'Demander un accompagnement', 'تقدّم للتدريب'),
  metaDescription: L(
    'Apply for online fitness and nutrition coaching. Tell Coach Ayman your goal, schedule and experience. No payment is collected on this site.',
    'Demandez un coaching sportif et nutritionnel en ligne. Indiquez votre objectif, votre emploi du temps et votre expérience. Aucun paiement sur ce site.',
    'تقدّم لتدريب لياقة وتغذية عبر الإنترنت. أخبر الكوتش أيمن بهدفك وجدولك وخبرتك. لا يتم تحصيل أي دفع على هذا الموقع.',
  ),
  eyebrow: L('Application', 'Candidature', 'الطلب'),
  h1: L('Start with an honest conversation', 'Commencez par une conversation honnête', 'ابدأ بمحادثة صادقة'),
  intro: L(
    'This is not a checkout. It is a short application so I can see whether coaching is appropriate and what the realistic starting point is.',
    'Ce n’est pas un paiement. C’est une courte candidature pour voir si le coaching est approprié et quel est le point de départ réaliste.',
    'هذا ليس دفعاً. إنه طلب قصير لأرى ما إذا كان التدريب مناسباً وما نقطة البداية الواقعية.',
  ),
  nextTitle: L('What happens next', 'Ce qui se passe ensuite', 'ما يحدث بعد ذلك'),
  nextSteps: L(
    [
      'I read the application personally.',
      'If it looks like a fit, I reply with the next questions and the full assessment.',
      'If it is not appropriate, I tell you and refer you where I can.',
      'Pricing and scope are confirmed in writing before any payment.',
    ],
    [
      'Je lis personnellement la candidature.',
      'Si elle semble adaptée, je réponds avec les questions suivantes et le bilan complet.',
      'Si elle ne l’est pas, je vous le dis et vous oriente lorsque je le peux.',
      'Le tarif et le périmètre sont confirmés par écrit avant tout paiement.',
    ],
    [
      'أقرأ الطلب شخصياً.',
      'إذا بدا مناسباً، أرد بالأسئلة التالية والتقييم الكامل.',
      'وإن لم يكن مناسباً، أوضح ذلك وأحيلك حيث أستطيع.',
      'يُؤكَّد السعر والنطاق كتابياً قبل أي دفع.',
    ],
  ),
  noteTitle: L('Before you submit', 'Avant d’envoyer', 'قبل الإرسال'),
  noteBody: L(
    'Tell me about known injuries or medical conditions, but do not attach medical records. If your situation needs clinical care, say so in the message.',
    'Signalez les blessures ou maladies connues, mais ne joignez pas de dossiers médicaux. Si votre situation nécessite des soins cliniques, indiquez-le dans le message.',
    'اذكر الإصابات أو الحالات الطبية المعروفة، لكن لا ترفق سجلات طبية. وإن كانت حالتك تحتاج رعاية سريرية فاذكر ذلك في الرسالة.',
  ),
  fallbackTitle: L('If the form cannot be delivered', 'Si le formulaire ne peut pas être envoyé', 'إذا تعذّر إرسال النموذج'),
  fallbackBody: L(
    'You will be shown the WhatsApp and email options with your message ready to copy. Nothing is claimed as received until it has actually been delivered.',
    'Les options WhatsApp et e-mail s’afficheront avec votre message prêt à copier. Rien n’est déclaré reçu tant que ce n’est pas réellement livré.',
    'ستظهر لك خيارات واتساب والبريد مع رسالتك جاهزة للنسخ. ولا يُعلن استلام شيء قبل تسليمه فعلاً.',
  ),
};
