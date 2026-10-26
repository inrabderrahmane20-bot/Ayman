import { L } from './types';

export const legalUpdated = '2026-10-26';

export type LegalSection = {
  title: ReturnType<typeof L<string>>;
  body: ReturnType<typeof L<string[]>>;
  bullets?: ReturnType<typeof L<string[]>>;
};

export const privacy = {
  metaTitle: L('Privacy Policy', 'Politique de confidentialité', 'سياسة الخصوصية'),
  metaDescription: L(
    'How Coach Ayman collects, uses, stores and protects personal data submitted through this website.',
    'Comment le Coach Ayman collecte, utilise, conserve et protège les données personnelles envoyées via ce site.',
    'كيف يجمع الكوتش أيمن البيانات الشخصية المرسلة عبر هذا الموقع ويستخدمها ويحفظها ويحميها.',
  ),
  eyebrow: L('Legal', 'Informations légales', 'قانوني'),
  h1: L('Privacy policy', 'Politique de confidentialité', 'سياسة الخصوصية'),
  intro: L(
    'This policy explains what happens to the information you submit through this website. It is written to be readable, not to hide behind legal language.',
    'Cette politique explique ce qu’il advient des informations envoyées via ce site. Elle est rédigée pour être lisible, pas pour se cacher derrière un langage juridique.',
    'توضح هذه السياسة ما يحدث للمعلومات التي ترسلها عبر هذا الموقع. وقد كُتبت لتكون مفهومة، لا للتخفيف خلف لغة قانونية.',
  ),
  sections: [
    {
      title: L('Who is responsible', 'Qui est responsable', 'من المسؤول'),
      body: L(
        [
          'The data controller is Mohamed Ayman Yakhmim, an independent online fitness and nutrition coach based in Morocco, trading as AYMAN Coaching. Contact: aymanyakhmim1@gmail.com.',
          'If you need a postal address for a formal request, contact the email above and one will be provided.',
        ],
        [
          'Le responsable du traitement est Mohamed Ayman Yakhmim, coach sportif et nutritionnel indépendant basé au Maroc, exerçant sous le nom AYMAN Coaching. Contact : aymanyakhmim1@gmail.com.',
          'Si vous avez besoin d’une adresse postale pour une demande formelle, contactez l’adresse ci-dessus et elle vous sera communiquée.',
        ],
        [
          'المسؤول عن البيانات هو محمد أيمن يخميم، مدرب لياقة وتغذية مستقل مقيم في المغرب، يعمل باسم AYMAN Coaching. التواصل: aymanyakhmim1@gmail.com.',
          'إذا احتجت عنواناً بريدياً لطلب رسمي، فتواصل عبر البريد أعلاه وسيُقدَّم لك.',
        ],
      ),
    },
    {
      title: L('What is collected', 'Ce qui est collecté', 'ما يتم جمعه'),
      body: L(
        [
          'When you submit the application or contact form, the site collects the name, email address, optional phone number, country, goal, training experience, availability, equipment, preferred language, plan interest and the message you write.',
          'The server also processes your IP address and request time to apply rate limits and prevent abuse. The IP address is held in memory for a short period and is not written to a customer record.',
        ],
        [
          'Lorsque vous envoyez la candidature ou le formulaire de contact, le site collecte le nom, l’adresse e-mail, le numéro de téléphone facultatif, le pays, l’objectif, l’expérience d’entraînement, les disponibilités, le matériel, la langue préférée, la formule envisagée et le message rédigé.',
          'Le serveur traite aussi votre adresse IP et l’heure de la requête pour appliquer des limites de débit et prévenir les abus. L’adresse IP est conservée brièvement en mémoire et n’est pas enregistrée dans un dossier client.',
        ],
        [
          'عند إرسال نموذج الطلب أو التواصل، يجمع الموقع الاسم والبريد الإلكتروني ورقم الهاتف الاختياري والبلد والهدف والخبرة التدريبية والتوفر والمعدات واللغة المفضلة والخطة المهتم بها والرسالة التي تكتبها.',
          'يعالج الخادم أيضاً عنوان IP ووقت الطلب لتطبيق حدود المعدل ومنع الإساءة. يُحفظ عنوان IP في الذاكرة لمدة قصيرة ولا يُسجَّل في ملف عميل.',
        ],
      ),
    },
    {
      title: L('Why it is used', 'Pourquoi c’est utilisé', 'لماذا تُستخدم'),
      body: L(
        [
          'Your information is used to read and answer your enquiry, assess whether coaching is appropriate, provide coaching if you become a client, and keep the records needed to run the service.',
          'The legal basis is your consent when you submit the form, and — if you become a client — the performance of the coaching agreement. You may withdraw consent at any time, but that does not affect processing already carried out.',
          'Your details are not sold, rented or used for unrelated advertising.',
        ],
        [
          'Vos informations servent à lire et répondre à votre demande, évaluer la pertinence du coaching, fournir le coaching si vous devenez client, et tenir les dossiers nécessaires au service.',
          'La base légale est votre consentement lors de l’envoi du formulaire et — si vous devenez client — l’exécution du contrat de coaching. Vous pouvez retirer votre consentement à tout moment, sans affecter les traitements déjà effectués.',
          'Vos données ne sont ni vendues, ni louées, ni utilisées pour de la publicité sans rapport.',
        ],
        [
          'تُستخدم معلوماتك لقراءة طلبك والرد عليه، وتقييم مدى ملاءمة التدريب، وتقديم التدريب إذا أصبحت عميلاً، والاحتفاظ بالسجلات اللازمة لتشغيل الخدمة.',
          'الأساس القانوني هو موافقتك عند إرسال النموذج، وإذا أصبحت عميلاً فتنفيذ اتفاقية التدريب. ويمكنك سحب الموافقة في أي وقت دون المساس بالمعالجة التي تمت بالفعل.',
          'لا تُباع بياناتك أو تُؤجَّر أو تُستخدم لإعلانات غير ذات صلة.',
        ],
      ),
    },
    {
      title: L('Who can see it', 'Qui peut y accéder', 'من يمكنه رؤيتها'),
      body: L(
        [
          'Access is limited to Coach Ayman and the service providers needed to run the site and deliver messages. Depending on configuration, these may include Vercel (hosting), Resend or a webhook provider (email delivery), and Google Analytics 4 (aggregated usage measurement, only with consent).',
          'Each provider processes data under its own terms and data-protection commitments. Where a provider processes data outside Morocco, appropriate safeguards are required by that provider’s terms. A current list of active processors can be requested by email.',
        ],
        [
          'L’accès est limité au Coach Ayman et aux prestataires nécessaires au fonctionnement du site et à l’acheminement des messages. Selon la configuration, il peut s’agir de Vercel (hébergement), Resend ou un prestataire de webhook (livraison e-mail), et Google Analytics 4 (mesure agrégée, uniquement avec consentement).',
          'Chaque prestataire traite les données selon ses propres conditions et engagements de protection. Lorsqu’un prestataire traite des données hors du Maroc, des garanties appropriées sont exigées par ses conditions. Une liste à jour des sous-traitants actifs peut être demandée par e-mail.',
        ],
        [
          'يقتصر الوصول على الكوتش أيمن ومزوّدي الخدمة اللازمين لتشغيل الموقع وتسليم الرسائل. وحسب الإعداد، قد يشمل ذلك Vercel (الاستضافة)، وResend أو مزوّد webhook (تسليم البريد)، وGoogle Analytics 4 (قياس استخدام مجمّع، بموافقة فقط).',
          'يعالج كل مزوّد البيانات وفق شروطه والتزاماته بحماية البيانات. وحين يعالج مزوّد بيانات خارج المغرب، تتطلب شروطه ضمانات مناسبة. ويمكن طلب قائمة محدثة بالمعالجين النشطين عبر البريد.',
        ],
      ),
    },
    {
      title: L('How long it is kept', 'Combien de temps c’est conservé', 'مدة الاحتفاظ'),
      body: L(
        [
          'Enquiries that do not become coaching relationships are kept for up to 24 months, then deleted or anonymised.',
          'Client coaching records are kept for the duration of the coaching relationship and up to 12 months afterwards, unless a longer period is required for legal, accounting or dispute-resolution purposes.',
          'Analytics data, if enabled, is retained according to the Google Analytics property settings. This site does not send names, email addresses or message content to analytics.',
        ],
        [
          'Les demandes qui ne deviennent pas des relations de coaching sont conservées jusqu’à 24 mois, puis supprimées ou anonymisées.',
          'Les dossiers de coaching client sont conservés pendant la relation et jusqu’à 12 mois après, sauf obligation légale, comptable ou de règlement de litige plus longue.',
          'Les données analytiques, si activées, sont conservées selon les paramètres de la propriété Google Analytics. Ce site n’envoie ni noms, ni adresses e-mail, ni contenu des messages à l’analytique.',
        ],
        [
          'تُحفظ الطلبات التي لا تتحول إلى علاقة تدريب لمدة تصل إلى 24 شهراً، ثم تُحذف أو تُجهَّل.',
          'تُحفظ سجلات تدريب العملاء طوال العلاقة وحتى 12 شهراً بعدها، ما لم تتطلب فترة أطول أغراضاً قانونية أو محاسبية أو لتسوية نزاع.',
          'تُحفظ البيانات التحليلية، إن فُعّلت، وفق إعدادات خاصية Google Analytics. ولا يرسل هذا الموقع الأسماء أو عناوين البريد أو محتوى الرسائل إلى التحليلات.',
        ],
      ),
    },
    {
      title: L('Your rights', 'Vos droits', 'حقوقك'),
      body: L(
        [
          'You can ask for access to your data, correction of inaccurate data, deletion, restriction of processing, or object to processing. You can also withdraw consent for future processing.',
          'Send requests to aymanyakhmim1@gmail.com. A response will be provided within the period required by applicable law. You may also complain to the Moroccan data-protection authority (CNDP) or, where applicable, your local supervisory authority.',
        ],
        [
          'Vous pouvez demander l’accès à vos données, la correction de données inexactes, leur suppression, la limitation du traitement ou vous opposer au traitement. Vous pouvez aussi retirer votre consentement pour l’avenir.',
          'Envoyez vos demandes à aymanyakhmim1@gmail.com. Une réponse sera fournie dans le délai exigé par la loi applicable. Vous pouvez aussi saisir l’autorité marocaine de protection des données (CNDP) ou, le cas échéant, votre autorité de contrôle locale.',
        ],
        [
          'يمكنك طلب الوصول إلى بياناتك أو تصحيح البيانات غير الدقيقة أو حذفها أو تقييد المعالجة أو الاعتراض عليها. ويمكنك أيضاً سحب الموافقة للمعالجة المستقبلية.',
          'أرسل الطلبات إلى aymanyakhmim1@gmail.com. وسيُقدَّم الرد خلال المدة التي يفرضها القانون المعمول به. ويمكنك أيضاً تقديم شكوى إلى السلطة المغربية لحماية البيانات (CNDP) أو إلى سلطة الإشراف المحلية عند الاقتضاء.',
        ],
      ),
    },
    {
      title: L('Security and children', 'Sécurité et enfants', 'الأمن والأطفال'),
      body: L(
        [
          'The site uses HTTPS, server-side validation, rate limiting and restricted access to reduce risk. No system is perfectly secure; do not send medical records, identity documents or payment details through the forms.',
          'Coaching is intended for adults aged 18 or over. The site is not directed at children, and data about a child should not be submitted without appropriate parental or guardian consent.',
        ],
        [
          'Le site utilise HTTPS, une validation côté serveur, une limitation de débit et un accès restreint pour réduire les risques. Aucun système n’est parfaitement sûr ; n’envoyez pas de dossiers médicaux, de pièces d’identité ou de données de paiement via les formulaires.',
          'Le coaching s’adresse aux adultes de 18 ans ou plus. Le site ne vise pas les enfants, et aucune donnée concernant un enfant ne doit être envoyée sans le consentement approprié du parent ou du tuteur.',
        ],
        [
          'يستخدم الموقع HTTPS والتحقق من جانب الخادم وتحديد المعدل والوصول المقيّد لتقليل المخاطر. لا يوجد نظام آمن تماماً؛ لا ترسل سجلات طبية أو وثائق هوية أو بيانات دفع عبر النماذج.',
          'التدريب مخصص للبالغين من 18 عاماً أو أكثر. الموقع غير موجّه للأطفال، ولا ينبغي إرسال بيانات عن طفل دون موافقة مناسبة من الوالد أو الوصي.',
        ],
      ),
    },
    {
      title: L('Cookies and analytics', 'Cookies et analytique', 'ملفات تعريف الارتباط والتحليلات'),
      body: L(
        [
          'The site stores a consent choice in your browser’s local storage. If you accept analytics, Google Analytics 4 may set cookies and process usage data. If you decline, the analytics script is not loaded and no analytics cookies are set.',
          'The cookie policy explains the categories, names and how to change your choice.',
        ],
        [
          'Le site conserve votre choix de consentement dans le stockage local de votre navigateur. Si vous acceptez l’analytique, Google Analytics 4 peut déposer des cookies et traiter des données d’usage. Si vous refusez, le script analytique n’est pas chargé et aucun cookie analytique n’est déposé.',
          'La politique de cookies explique les catégories, les noms et comment modifier votre choix.',
        ],
        [
          'يخزّن الموقع اختيار الموافقة في التخزين المحلي لمتصفحك. وإذا قبلت التحليلات، فقد تضع Google Analytics 4 ملفات تعريف ارتباط وتعاجل بيانات الاستخدام. وإذا رفضت، فلا يُحمَّل نص التحليلات ولا تُوضع ملفات تحليلية.',
          'توضح سياسة ملفات تعريف الارتباط الفئات والأسماء وكيفية تغيير اختيارك.',
        ],
      ),
    },
    {
      title: L('Changes to this policy', 'Modifications de cette politique', 'تغييرات هذه السياسة'),
      body: L(
        [
          'This policy may be updated when the service or legal requirements change. The effective date at the top of the page shows the current version. Material changes will be communicated where appropriate.',
        ],
        [
          'Cette politique peut être mise à jour lorsque le service ou les exigences légales changent. La date d’effet en haut de page indique la version actuelle. Les changements importants seront communiqués lorsque nécessaire.',
        ],
        [
          'قد تُحدَّث هذه السياسة عندما تتغير الخدمة أو المتطلبات القانونية. ويظهر تاريخ السريان أعلى الصفحة النسخة الحالية. وستُبلَّغ التغييرات الجوهرية حيث يلزم.',
        ],
      ),
    },
  ] as LegalSection[],
};

export const terms = {
  metaTitle: L('Terms of Service', 'Conditions d’utilisation', 'شروط الخدمة'),
  metaDescription: L(
    'The terms that apply to this website and to online coaching provided by Coach Ayman.',
    'Les conditions applicables à ce site et au coaching en ligne fourni par le Coach Ayman.',
    'الشروط التي تنطبق على هذا الموقع وعلى التدريب عبر الإنترنت المقدم من الكوتش أيمن.',
  ),
  eyebrow: L('Legal', 'Informations légales', 'قانوني'),
  h1: L('Terms of service', 'Conditions d’utilisation', 'شروط الخدمة'),
  intro: L(
    'These terms apply to the website and to coaching services. Read them before paying. They do not limit any mandatory consumer rights that apply to you.',
    'Ces conditions s’appliquent au site et aux services de coaching. Lisez-les avant de payer. Elles ne limitent aucun droit impératif du consommateur qui vous serait applicable.',
    'تنطبق هذه الشروط على الموقع وخدمات التدريب. اقرأها قبل الدفع. ولا تحدّ من أي حقوق إلزامية للمستهلك تنطبق عليك.',
  ),
  sections: [
    {
      title: L('Who the service is for', 'À qui s’adresse le service', 'لمن الخدمة'),
      body: L(
        [
          'Coaching is provided to adults aged 18 or over. By applying, you confirm that the information you provide is accurate and that you are able to enter into an agreement.',
          'The service is educational fitness and nutrition coaching. It is not medical care, physiotherapy, psychotherapy, registered-dietitian care or a diagnostic service.',
        ],
        [
          'Le coaching est fourni aux adultes de 18 ans ou plus. En postulant, vous confirmez que les informations fournies sont exactes et que vous pouvez conclure un accord.',
          'Le service est un coaching éducatif de fitness et de nutrition. Il ne s’agit pas de soins médicaux, de kinésithérapie, de psychothérapie, de soins de diététicien diplômé ni d’un service de diagnostic.',
        ],
        [
          'يُقدَّم التدريب للبالغين من 18 عاماً أو أكثر. بالتقديم، تؤكد أن المعلومات التي قدمتها دقيقة وأنك قادر على إبرام اتفاق.',
          'الخدمة تدريب تعليمي للياقة والتغذية. وليست رعاية طبية أو علاجاً طبيعياً أو علاجاً نفسياً أو رعاية أخصائي تغذية معتمد أو خدمة تشخيص.',
        ],
      ),
    },
    {
      title: L('Applications and acceptance', 'Candidatures et acceptation', 'الطلبات والقبول'),
      body: L(
        [
          'Submitting an application does not create a coaching agreement and does not guarantee acceptance. Coaching begins only after the fit check, written confirmation of scope and price, and payment.',
          'The coach may decline an application where the requested service is not appropriate, where medical clearance is needed, or where the request cannot be safely or honestly delivered.',
        ],
        [
          'L’envoi d’une candidature ne crée pas d’accord de coaching et ne garantit pas l’acceptation. Le coaching commence seulement après la vérification de compatibilité, la confirmation écrite du périmètre et du prix, et le paiement.',
          'Le coach peut refuser une candidature lorsque le service demandé n’est pas approprié, lorsqu’un avis médical est nécessaire, ou lorsque la demande ne peut être assurée de manière sûre et honnête.',
        ],
        [
          'إرسال الطلب لا يُنشئ اتفاقية تدريب ولا يضمن القبول. يبدأ التدريب فقط بعد التحقق من الملاءمة والتأكيد الكتابي للنطاق والسعر والدفع.',
          'يمكن للمدرب رفض طلب إذا كانت الخدمة المطلوبة غير مناسبة أو إذا لزم إذن طبي أو إذا تعذّر تقديم الطلب بأمان وصدق.',
        ],
      ),
    },
    {
      title: L('Scope of coaching', 'Périmètre du coaching', 'نطاق التدريب'),
      body: L(
        [
          'The scope, number of check-ins, response window and deliverables depend on the plan selected and are confirmed in writing before payment. Plans are delivered as documents and messaging; no mobile app is provided.',
          'You are responsible for reporting injuries, medical conditions, medication and changes in your health that may affect training or nutrition. You must obtain medical clearance where it is needed.',
        ],
        [
          'Le périmètre, le nombre de bilans, le délai de réponse et les livrables dépendent de la formule choisie et sont confirmés par écrit avant paiement. Les plans sont fournis sous forme de documents et par messagerie ; aucune application mobile n’est fournie.',
          'Vous êtes responsable de signaler les blessures, maladies, médicaments et changements de santé pouvant affecter l’entraînement ou la nutrition. Vous devez obtenir un avis médical lorsqu’il est nécessaire.',
        ],
        [
          'يعتمد النطاق وعدد المتابعات ومدة الاستجابة والمخرجات على الخطة المختارة ويُؤكَّد كتابياً قبل الدفع. تُسلَّم الخطط كمستندات ورسائل؛ ولا يُوفَّر تطبيق جوال.',
          'أنت مسؤول عن الإبلاغ عن الإصابات والحالات الطبية والأدوية والتغيرات الصحية التي قد تؤثر في التدريب أو التغذية. ويجب الحصول على إذن طبي حيث يلزم.',
        ],
      ),
    },
    {
      title: L('Prices, billing and cancellation', 'Prix, facturation et annulation', 'الأسعار والفوترة والإلغاء'),
      body: L(
        [
          'Published prices are in US dollars, per month, and may be updated with reasonable notice. The price applicable to you is the one confirmed in writing before payment.',
          'Billing is monthly in advance. There is no stated minimum term. To stop the next charge, cancel before the next renewal date. Cancellation stops future billing; it does not automatically refund the current period.',
          'Refunds are provided where required by mandatory consumer law or where the agreed service was not delivered. Any additional refund terms are confirmed in writing before payment.',
        ],
        [
          'Les prix publiés sont en dollars américains, par mois, et peuvent être mis à jour avec un préavis raisonnable. Le prix applicable est celui confirmé par écrit avant paiement.',
          'La facturation est mensuelle à l’avance. Aucune durée minimale n’est indiquée. Pour arrêter le prochain prélèvement, annulez avant la prochaine date de renouvellement. L’annulation arrête la facturation future ; elle ne rembourse pas automatiquement la période en cours.',
          'Les remboursements sont accordés lorsque la loi impérative sur la consommation l’exige ou lorsque le service convenu n’a pas été fourni. Toute condition de remboursement supplémentaire est confirmée par écrit avant paiement.',
        ],
        [
          'الأسعار المنشورة بالدولار الأمريكي شهرياً، وقد تُحدَّث بإشعار معقول. السعر المطبق عليك هو المؤكد كتابياً قبل الدفع.',
          'الفوترة شهرية مقدماً. لا توجد مدة دنيا معلنة. لإيقاف الخصم التالي ألغِ قبل تاريخ التجديد التالي. ويوقف الإلغاء الفوترة المستقبلية ولا يسترد تلقائياً الفترة الحالية.',
          'تُقدَّم المبالغ المستردة حيث يفرضها قانون المستهلك الإلزامي أو حيث لم تُقدَّم الخدمة المتفق عليها. وتُؤكَّد أي شروط استرداد إضافية كتابياً قبل الدفع.',
        ],
      ),
    },
    {
      title: L('Your responsibilities', 'Vos responsabilités', 'مسؤولياتك'),
      body: L(
        [
          'Follow the plan within your own limits, stop any activity that causes pain or concerning symptoms, and seek medical advice when needed. Report progress and difficulties honestly so the plan can be adjusted.',
          'Do not share paid coaching materials publicly or resell them. Do not misuse the website, attempt to bypass security, or submit another person’s information without their permission.',
        ],
        [
          'Suivez le plan dans vos propres limites, arrêtez toute activité qui provoque une douleur ou des symptômes inquiétants, et demandez un avis médical si nécessaire. Signalez honnêtement les progrès et les difficultés afin que le plan puisse être ajusté.',
          'Ne partagez pas publiquement les documents de coaching payants et ne les revendez pas. N’utilisez pas le site de manière abusive, ne tentez pas de contourner la sécurité et ne transmettez pas les informations d’une autre personne sans son accord.',
        ],
        [
          'اتبع الخطة ضمن حدودك، وأوقف أي نشاط يسبب ألماً أو أعراضاً مقلقة، واطلب المشورة الطبية عند الحاجة. وأبلغ بصدق عن التقدم والصعوبات لتعديل الخطة.',
          'لا تشارك مواد التدريب المدفوعة علناً ولا تبعها. ولا تسئ استخدام الموقع أو تحاول تجاوز الأمان أو ترسل معلومات شخص آخر دون إذنه.',
        ],
      ),
    },
    {
      title: L('Intellectual property', 'Propriété intellectuelle', 'الملكية الفكرية'),
      body: L(
        [
          'Website text, design, brand elements and coaching materials remain the property of Mohamed Ayman Yakhmim or the relevant licensor. You receive a personal, non-transferable licence to use materials provided to you for your own coaching.',
        ],
        [
          'Les textes, le design, les éléments de marque et les documents de coaching du site restent la propriété de Mohamed Ayman Yakhmim ou du concédant concerné. Vous recevez une licence personnelle et non transférable pour utiliser les documents fournis dans le cadre de votre coaching.',
        ],
        [
          'نصوص الموقع وتصميمه وعناصر العلامة ومواد التدريب مملوكة لمحمد أيمن يخميم أو المرخّص ذي الصلة. وتحصل على ترخيص شخصي غير قابل للتحويل لاستخدام المواد المقدمة لك في تدريبك.',
        ],
      ),
    },
    {
      title: L('Liability', 'Responsabilité', 'المسؤولية'),
      body: L(
        [
          'Coaching is provided with reasonable care, but no specific physical, health or performance outcome is guaranteed. To the extent permitted by law, the coach is not liable for indirect or consequential loss arising from reliance on general website content.',
          'Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence, or mandatory consumer rights.',
        ],
        [
          'Le coaching est fourni avec un soin raisonnable, mais aucun résultat physique, de santé ou de performance précis n’est garanti. Dans la mesure permise par la loi, le coach n’est pas responsable des pertes indirectes ou consécutives résultant de la confiance accordée au contenu général du site.',
          'Rien dans ces conditions n’exclut une responsabilité qui ne peut légalement être exclue, notamment en cas de décès ou de dommage corporel causé par une négligence, ou les droits impératifs du consommateur.',
        ],
        [
          'يُقدَّم التدريب بعناية معقولة، لكن لا تُضمن نتيجة جسدية أو صحية أو أداء محدد. وبالقدر الذي يسمح به القانون، لا يتحمل المدرب مسؤولية الخسائر غير المباشرة أو التبعية الناشئة عن الاعتماد على محتوى الموقع العام.',
          'لا يستثني أي شيء في هذه الشروط المسؤولية التي لا يجوز استبعادها قانوناً، بما في ذلك المسؤولية عن الوفاة أو الإصابة الشخصية الناتجة عن الإهمال أو حقوق المستهلك الإلزامية.',
        ],
      ),
    },
    {
      title: L('Privacy, changes and law', 'Confidentialité, modifications et droit', 'الخصوصية والتغييرات والقانون'),
      body: L(
        [
          'The privacy policy explains how personal data is handled and forms part of these terms. These terms may be updated; the effective date shows the current version. Material changes apply to new agreements and will be communicated to active clients where relevant.',
          'These terms are governed by Moroccan law, without removing any protection given to you by mandatory consumer law in your country of residence. Disputes should first be raised directly at aymanyakhmim1@gmail.com so they can be resolved in good faith.',
        ],
        [
          'La politique de confidentialité explique le traitement des données personnelles et fait partie de ces conditions. Ces conditions peuvent être mises à jour ; la date d’effet indique la version actuelle. Les changements importants s’appliquent aux nouveaux accords et seront communiqués aux clients actifs le cas échéant.',
          'Ces conditions sont régies par le droit marocain, sans supprimer la protection que vous accorde le droit impératif de la consommation de votre pays de résidence. Les litiges doivent d’abord être signalés directement à aymanyakhmim1@gmail.com afin d’être résolus de bonne foi.',
        ],
        [
          'توضح سياسة الخصوصية كيفية معالجة البيانات الشخصية وتشكل جزءاً من هذه الشروط. وقد تُحدَّث هذه الشروط؛ ويظهر تاريخ السريان النسخة الحالية. وتُطبَّق التغييرات الجوهرية على الاتفاقيات الجديدة وتُبلَّغ للعملاء النشطين حيث يلزم.',
          'تخضع هذه الشروط للقانون المغربي، دون إزالة أي حماية يمنحها لك قانون المستهلك الإلزامي في بلد إقامتك. وينبغي رفع النزاعات أولاً مباشرة إلى aymanyakhmim1@gmail.com لتسويتها بحسن نية.',
        ],
      ),
    },
  ] as LegalSection[],
};

export const cookies = {
  metaTitle: L('Cookie Policy', 'Politique de cookies', 'سياسة ملفات تعريف الارتباط'),
  metaDescription: L(
    'Which cookies and local storage this site uses, and how to accept, decline or change analytics consent.',
    'Quels cookies et stockages locaux ce site utilise, et comment accepter, refuser ou modifier le consentement analytique.',
    'ملفات تعريف الارتباط والتخزين المحلي التي يستخدمها الموقع، وكيفية قبول التحليلات أو رفضها أو تغيير الموافقة.',
  ),
  eyebrow: L('Legal', 'Informations légales', 'قانوني'),
  h1: L('Cookie policy', 'Politique de cookies', 'سياسة ملفات تعريف الارتباط'),
  intro: L(
    'This site is designed to work without advertising or tracking cookies. Analytics is optional and only loads after you accept it.',
    'Ce site est conçu pour fonctionner sans cookies publicitaires ni de suivi. L’analytique est facultative et ne se charge qu’après votre acceptation.',
    'صُمم هذا الموقع ليعمل دون إعلانات أو ملفات تعريف ارتباط للتتبع. والتحليلات اختيارية ولا تُحمَّل إلا بعد موافقتك.',
  ),
  sections: [
    {
      title: L('Essential storage', 'Stockage essentiel', 'التخزين الأساسي'),
      body: L(
        [
          'The site stores your consent choice in local storage under the key ayman-consent-v1. This is not a tracking cookie and is not sent to third parties. It exists so the banner does not reappear on every page.',
          'The site may also store your language preference in a NEXT_LOCALE cookie when you switch language, so future visits can use the language you selected.',
        ],
        [
          'Le site conserve votre choix de consentement dans le stockage local sous la clé ayman-consent-v1. Ce n’est pas un cookie de suivi et il n’est pas transmis à des tiers. Il évite que la bannière réapparaisse à chaque page.',
          'Le site peut aussi conserver votre préférence de langue dans un cookie NEXT_LOCALE lorsque vous changez de langue, afin que vos visites suivantes utilisent la langue choisie.',
        ],
        [
          'يخزّن الموقع اختيار موافقتك في التخزين المحلي تحت المفتاح ayman-consent-v1. وليس ملف تتبع ولا يُرسل إلى أطراف ثالثة. ووجوده يمنع تكرار ظهور الشريط في كل صفحة.',
          'قد يخزّن الموقع أيضاً تفضيل اللغة في ملف NEXT_LOCALE عند تغيير اللغة، لتستخدم الزيارات التالية اللغة التي اخترتها.',
        ],
      ),
    },
    {
      title: L('Analytics (optional)', 'Analytique (facultatif)', 'التحليلات (اختياري)'),
      body: L(
        [
          'If the owner configures a Google Analytics 4 measurement ID and you accept analytics, Google Analytics may set cookies such as _ga and _ga_* to measure page views and interactions. Data is aggregated for understanding site usage.',
          'No names, email addresses, phone numbers or message content are sent to analytics. IP anonymisation and consent mode are expected to be configured in the GA4 property.',
          'If you decline, the analytics script is not loaded at all.',
        ],
        [
          'Si le propriétaire configure un identifiant de mesure Google Analytics 4 et que vous acceptez l’analytique, Google Analytics peut déposer des cookies tels que _ga et _ga_* pour mesurer les pages vues et les interactions. Les données sont agrégées pour comprendre l’usage du site.',
          'Aucun nom, adresse e-mail, numéro de téléphone ou contenu de message n’est envoyé à l’analytique. L’anonymisation IP et le mode consentement doivent être configurés dans la propriété GA4.',
          'Si vous refusez, le script analytique n’est pas chargé du tout.',
        ],
        [
          'إذا أعدّ المالك معرّف قياس Google Analytics 4 وقبلت التحليلات، فقد تضع Google Analytics ملفات مثل _ga و_ga_* لقياس مشاهدات الصفحات والتفاعلات. وتُجمَّع البيانات لفهم استخدام الموقع.',
          'لا تُرسل الأسماء أو عناوين البريد أو أرقام الهاتف أو محتوى الرسائل إلى التحليلات. ويُتوقع إعداد إخفاء IP ووضع الموافقة في خاصية GA4.',
          'وإذا رفضت، فلا يُحمَّل نص التحليلات إطلاقاً.',
        ],
      ),
    },
    {
      title: L('Advertising', 'Publicité', 'الإعلانات'),
      body: L(
        [
          'This site does not run advertising pixels, retargeting tags or social-media tracking. If that changes, this policy and the consent banner will be updated before any such tool is loaded.',
        ],
        [
          'Ce site n’utilise pas de pixels publicitaires, de balises de reciblage ni de suivi de réseaux sociaux. Si cela change, cette politique et la bannière de consentement seront mises à jour avant le chargement d’un tel outil.',
        ],
        [
          'لا يستخدم هذا الموقع بكسلات إعلانية أو وسوم إعادة استهداف أو تتبع شبكات اجتماعية. وإذا تغير ذلك، فستُحدَّث هذه السياسة وشريط الموافقة قبل تحميل أي أداة من هذا النوع.',
        ],
      ),
    },
    {
      title: L('Changing your choice', 'Modifier votre choix', 'تغيير اختيارك'),
      body: L(
        [
          'Use the “Cookie settings” link in the footer to reopen the consent choices. You can also clear site data in your browser, which removes the stored choice and causes the banner to appear again.',
          'Declining analytics does not prevent you from using the site or contacting the coach.',
        ],
        [
          'Utilisez le lien « Paramètres des cookies » dans le pied de page pour rouvrir les choix de consentement. Vous pouvez aussi effacer les données du site dans votre navigateur, ce qui supprime le choix enregistré et fait réapparaître la bannière.',
          'Refuser l’analytique ne vous empêche pas d’utiliser le site ni de contacter le coach.',
        ],
        [
          'استخدم رابط «إعدادات ملفات تعريف الارتباط» في التذييل لإعادة فتح خيارات الموافقة. ويمكنك أيضاً مسح بيانات الموقع من متصفحك، ما يزيل الاختيار المحفوظ ويعيد ظهور الشريط.',
          'رفض التحليلات لا يمنعك من استخدام الموقع أو التواصل مع المدرب.',
        ],
      ),
    },
  ] as LegalSection[],
};
