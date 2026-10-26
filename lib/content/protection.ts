import { L } from './types';

/**
 * Personal protection content is deliberately gated and noindexed. It must not
 * be presented as an available service until licensing, insurance, staffing and
 * operating procedures have been verified by the owner and reviewed locally.
 */
export const protection = {
  metaTitle: L(
    'Personal Protection — Service Status',
    'Protection personnelle — statut du service',
    'الحماية الشخصية — حالة الخدمة',
  ),
  metaDescription: L(
    'Status and planned scope of the personal protection enquiry service. Not currently offered for public booking.',
    'Statut et périmètre prévu du service de protection personnelle. Non proposé à la réservation publique actuellement.',
    'حالة ونطاق خدمة الحماية الشخصية المزمعة. غير متاحة للحجز العام حالياً.',
  ),
  eyebrow: L('Private service enquiry', 'Demande de service privé', 'استفسار خدمة خاصة'),
  h1: L('Personal protection services', 'Services de protection personnelle', 'خدمات الحماية الشخصية'),
  statusLabel: L('Current status', 'Statut actuel', 'الحالة الحالية'),
  statusOff: L(
    'Not available for public booking. Licensing, insurance, staffing and operating procedures have not been verified, so this service is not being offered and no enquiry is being accepted through this page.',
    'Non disponible à la réservation publique. Les licences, l’assurance, le personnel et les procédures opérationnelles n’ont pas été vérifiés ; ce service n’est donc pas proposé et aucune demande n’est acceptée via cette page.',
    'غير متاحة للحجز العام. لم يتم التحقق من التراخيص والتأمين والموظفين وإجراءات التشغيل، لذا لا تُقدَّم هذه الخدمة ولا تُقبل أي استفسارات عبر هذه الصفحة.',
  ),
  statusOn: L(
    'Enquiries only. Every engagement is subject to written scope, availability, local licensing and insurance verification. No protection service is confirmed until those checks are complete.',
    'Demandes uniquement. Chaque mission est soumise à un périmètre écrit, à la disponibilité, aux licences locales et à la vérification de l’assurance. Aucun service de protection n’est confirmé avant ces vérifications.',
    'استفسارات فقط. كل مهمة تخضع لنطاق مكتوب وللتوفر وللتراخيص المحلية والتحقق من التأمين. ولا يُؤكَّد أي خدمة حماية قبل إتمام هذه الفحوص.',
  ),
  intro: L(
    'This page is not linked from the public navigation and is excluded from the sitemap. It exists to document a proposed service line separately from the coaching business, without presenting an unverified service as available.',
    'Cette page n’est pas liée depuis la navigation publique et est exclue du sitemap. Elle documente une ligne de service proposée, séparément de l’activité de coaching, sans présenter comme disponible un service non vérifié.',
    'هذه الصفحة غير مرتبطة بالتنقل العام ومستبعدة من خريطة الموقع. وهي توثق خط خدمة مقترحاً بشكل منفصل عن نشاط التدريب، دون تقديم خدمة غير موثقة كأنها متاحة.',
  ),
  scopeTitle: L('Planned scope, subject to verification', 'Périmètre prévu, sous réserve de vérification', 'النطاق المزمع، رهناً بالتحقق'),
  scopeNote: L(
    'The items below describe the intended enquiry areas only. They are not a promise of service, capability or geographic coverage.',
    'Les éléments ci-dessous décrivent uniquement les domaines d’enquête envisagés. Ils ne constituent ni une promesse de service, ni de capacité, ni de couverture géographique.',
    'تصف البنود أدناه مجالات الاستفسار المزمعة فقط. وهي ليست وعداً بخدمة أو قدرة أو تغطية جغرافية.',
  ),
  scope: L(
    [
      'Personal risk and movement review for individuals and families',
      'Travel and event security planning, coordinated with local providers',
      'Close protection coordination where legally licensed and insured',
      'Residential and workplace security recommendations',
      'Discreet liaison with vetted local security partners',
      'Crisis-response planning and rehearsed procedures',
    ],
    [
      'Revue des risques personnels et des déplacements pour particuliers et familles',
      'Planification de la sécurité lors de voyages et d’événements, coordonnée avec des prestataires locaux',
      'Coordination de protection rapprochée là où elle est légalement autorisée et assurée',
      'Recommandations de sécurité pour le domicile et le lieu de travail',
      'Liaison discrète avec des partenaires de sécurité locaux vérifiés',
      'Planification de réponse aux crises et procédures testées',
    ],
    [
      'مراجعة المخاطر الشخصية والتنقل للأفراد والعائلات',
      'تخطيط أمن السفر والفعاليات بالتنسيق مع مزودين محليين',
      'تنسيق الحماية القريبة حيث يكون مرخصاً ومؤمَّناً قانوناً',
      'توصيات أمن المنزل ومكان العمل',
      'تنسيق سري مع شركاء أمن محليين موثوقين',
      'تخطيط الاستجابة للأزمات وإجراءات مجرّبة',
    ],
  ),
  gateTitle: L('What must be verified before launch', 'Ce qui doit être vérifié avant le lancement', 'ما يجب التحقق منه قبل الإطلاق'),
  gate: L(
    [
      'The legal entity, permits and licence required in each country of operation',
      'Professional indemnity and public liability insurance that cover the stated activities',
      'Vetted personnel, training standards and background-check procedures',
      'A written operations plan, escalation path and incident-reporting process',
      'Local legal review of contracts, data handling and use of force policy where relevant',
      'A separate privacy notice and consent process for sensitive security information',
    ],
    [
      'L’entité juridique, les autorisations et la licence exigées dans chaque pays d’opération',
      'Une assurance responsabilité civile professionnelle couvrant les activités annoncées',
      'Un personnel vérifié, des normes de formation et des procédures de contrôle des antécédents',
      'Un plan opérationnel écrit, une chaîne d’escalade et un processus de déclaration d’incident',
      'Une revue juridique locale des contrats, du traitement des données et de la politique d’usage de la force le cas échéant',
      'Une notice de confidentialité et un processus de consentement distincts pour les informations de sécurité sensibles',
    ],
    [
      'الكيان القانوني والتصاريح والتراخيص المطلوبة في كل بلد تشغيل',
      'تأمين المسؤولية المهنية والمسؤولية العامة يغطي الأنشطة المعلنة',
      'موظفون موثوقون ومعايير تدريب وإجراءات فحص خلفيات',
      'خطة تشغيل مكتوبة ومسار تصعيد وعملية الإبلاغ عن الحوادث',
      'مراجعة قانونية محلية للعقود ومعالجة البيانات وسياسة استخدام القوة عند الاقتضاء',
      'إشعار خصوصية منفصل وعملية موافقة للمعلومات الأمنية الحساسة',
    ],
  ),
  notOfferedTitle: L('What is not offered', 'Ce qui n’est pas proposé', 'ما لا يُقدَّم'),
  notOffered: L(
    [
      'Armed services of any kind',
      'Services that require a licence the provider does not hold',
      'Emergency response or a replacement for police, ambulance or military services',
      'Guarantees of absolute safety or prevention of all incidents',
      'Surveillance or investigation of individuals',
    ],
    [
      'Des services armés de quelque nature que ce soit',
      'Des services exigeant une licence que le prestataire ne détient pas',
      'Une réponse d’urgence ou un remplacement des services de police, d’ambulance ou militaires',
      'Une garantie de sécurité absolue ou de prévention de tout incident',
      'La surveillance ou l’enquête sur des personnes',
    ],
    [
      'خدمات مسلحة من أي نوع',
      'خدمات تتطلب ترخيصاً لا يملكه المزود',
      'استجابة طارئة أو بديلاً عن الشرطة أو الإسعاف أو الخدمات العسكرية',
      'ضمانات أمان مطلق أو منع كل الحوادث',
      'مراقبة الأفراد أو التحقيق معهم',
    ],
  ),
  enquiryTitle: L('Make an enquiry', 'Envoyer une demande', 'أرسل استفساراً'),
  enquiryBody: L(
    'If the service is enabled, enquiries are reviewed individually. Do not send sensitive security details, identity documents or medical information through this form. An initial reply will confirm whether the request can be considered.',
    'Si le service est activé, les demandes sont examinées individuellement. N’envoyez pas de détails de sécurité sensibles, de pièces d’identité ou d’informations médicales via ce formulaire. Une première réponse confirmera si la demande peut être étudiée.',
    'إذا كانت الخدمة مفعّلة، تُراجع الطلبات فردياً. لا ترسل تفاصيل أمنية حساسة أو وثائق هوية أو معلومات طبية عبر هذا النموذج. وسيؤكد رد أولي ما إذا كان يمكن النظر في الطلب.',
  ),
  enquiryNote: L(
    'This is not an emergency channel. If you are in immediate danger, contact local emergency services.',
    'Ce n’est pas un canal d’urgence. En cas de danger immédiat, contactez les services d’urgence locaux.',
    'هذه ليست قناة طوارئ. وإذا كنت في خطر فوري فاتصل بخدمات الطوارئ المحلية.',
  ),
  returnToCoaching: L('Return to coaching', 'Retour au coaching', 'العودة إلى التدريب'),
};
