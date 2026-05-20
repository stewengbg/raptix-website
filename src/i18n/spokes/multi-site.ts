import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/kedjor/',
  en: '/en/multi-site/',
};

export const meta = {
  sv: {
    title: 'Reveal för butikskedjor — multi-site analytics',
    description:
      'Multi-butiksvy med live KPI:er, kö-larm och efterlevnad över hela kedjan. En instrumentpanel för distriktschefer, kvalitetsansvariga och ops-direktörer.',
  },
  en: {
    title: 'Reveal for retail chains — multi-site analytics',
    description:
      'Multi-site fleet view with live KPIs, queue alerts and compliance across the whole chain. One dashboard for district managers, quality leads and ops directors.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För kedjor',
  hero: {
    title: 'Alla dina butiker.',
    titleHighlight: 'En instrumentpanel.',
    subtitle:
      'Multi-butiksvy med live besökare, kö-status, peak-prognoser och HACCP-efterlevnad — för hela kedjan. Distriktschefer ser var det brinner. Ops-direktörer ser var det fungerar.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · volymrabatt vid 3+ butiker',
  },
  problem: {
    title: 'Fjorton butiker, fjorton inloggningar, ingen helhetsbild.',
    body: [
      'Distriktschefen kan inte stå vid kassan i fjorton butiker samtidigt. Och hen kan inte logga in i fjorton olika appar var fredag eftermiddag för att se hur det går.',
      'Manuella veckorapporter från varje butikschef kommer i fjorton olika format — om de kommer alls. Excel-export från Avigilon är jobbig per butik och omöjlig att jämföra över kedjan.',
      'Reveal samlar allt: en multi-butiksvy där alla butiker syns sida vid sida, samma KPI:er, samma rapportformat, samma larm. En blick — och du vet vilken butik som behöver attention.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från en butik till hela kedjan',
    steps: [
      {
        title: 'Koppla in en butik',
        body: 'Börja med en pilot. Reveal hittar räknarna, importerar historiken, sätter upp standard-KPI:er. 15 minuter från noll till live.',
      },
      {
        title: 'Rulla ut på resten',
        body: 'Varje ny butik följer samma mönster. Kopiera KPI-konfigurationen från piloten istället för att börja om. 5 minuter per ny butik.',
      },
      {
        title: 'Distriktschefen ser allt',
        body: 'Multi-butiksvyn visar varje butik med busy level, kö-status, dagstakt, 7-dagars trend. Klick in på en butik för full detalj.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt en kedja behöver',
    items: [
      {
        title: 'Multi-butiksvy',
        body: 'Alla butiker bredvid varandra. Live besökarantal, kö-status, beläggning, 7-dagars trend. Rangordnad efter busy level eller "needs attention" först.',
      },
      {
        title: 'Per-butik larm + central översikt',
        body: 'Lokala larm går till butikschefen. Distriktschefen får sammanfattning — "tre butiker över tröskel just nu" — utan att drunkna i varje enskilt push.',
        bullets: [
          'Roll-baserad åtkomst — ops-direktör, distriktschef, butikschef',
          'Per-butik trösklar och regler',
          'Eskalering om butikschefen inte agerar',
        ],
      },
      {
        title: 'HACCP-efterlevnad över kedjan',
        body: 'Vilka butiker är compliant? Vilka har återkommande breaches? Kvalitetsansvarig ser efterlevnaden i en vy istället för fjorton separata pärmar.',
      },
      {
        title: 'Aggregerade rapporter',
        body: 'Veckorapport för hela kedjan eller per region. Jämför butiker. Hitta best practice. Schemalägg per stakeholder — ops, ekonomi, kvalitet får sina egna versioner.',
      },
      {
        title: 'White-label för franchisesystem',
        body: 'Är du en franchise-kedja? Reveal kan branda gränssnittet med din logga så det blir "din" plattform — utan att du behöver bygga den själv.',
      },
      {
        title: 'Volymrabatt vid 3+ butiker',
        body: 'Starter-planen är $50/butik/månad. Vid 3+ butiker börjar volymrabatten — kontakta oss för exakt pris för din kedja.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Hur snabbt kan jag rulla ut på 20 butiker?',
        a: 'Praktiskt taget på 2-3 dagar. Första butiken tar 15-30 minuter för konfiguration. Varje efterföljande butik tar 5-10 minuter eftersom KPI-mappningen är samma.',
      },
      {
        q: 'Funkar det om butikerna har olika Alta-konton?',
        a: 'Ja. Reveal kan koppla in flera Alta-konton (ett per butik om varje franchise-tagare har eget) eller ett gemensamt konto om kedjan har en gemensam Alta-prenumeration.',
      },
      {
        q: 'Kan butikschefer bara se sin egen butik?',
        a: 'Ja. Roll-baserad åtkomst innebär att butikschefen ser sin butik (med larm + rapporter), distriktschefen ser sina butiker, ops-direktören ser allt.',
      },
      {
        q: 'Vad kostar det för en kedja?',
        a: 'Starter-planen är $50/butik/månad eller $450/butik/år. Vid 3+ butiker börjar volymrabatten. Kontakta oss för exakt offert till din kedja.',
      },
      {
        q: 'Får vi support för utrullningen?',
        a: 'Ja. För kedjor med 5+ butiker ingår onboarding-stöd — vi hjälper dig sätta upp första 2-3 butikerna och säkerställer att KPI-mappningen är optimal innan ni rullar ut på resten.',
      },
      {
        q: 'Kan vi exportera all data?',
        a: 'Ja. CSV-export av all underliggande data, JSON via API om ni vill bygga egna BI-dashboards ovanpå Reveals data.',
      },
    ],
  },
  finalCta: {
    title: 'Sluta logga in i fjorton appar',
    body: 'En instrumentpanel för hela kedjan. Börja med en pilot, rulla ut på resten på två veckor.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'HACCP & egenkontroll',
        href: '/haccp/',
        body: 'Multi-butiks-efterlevnad i en vy för kvalitetsansvariga.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Schemalagda PDF-rapporter över hela kedjan.',
      },
      {
        title: 'Reveal för din butik',
        href: '/butik/',
        body: 'Funktioner per butik — besökare, kö, skärmar.',
      },
    ],
  },
};

export const en: SpokeContent = {
  eyebrow: 'For chains',
  hero: {
    title: 'All your stores.',
    titleHighlight: 'One dashboard.',
    subtitle:
      "Multi-site fleet view with live visitors, queue status, peak forecasts and HACCP compliance — across the whole chain. District managers see where it's burning. Ops directors see where it's working.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · volume discount at 3+ sites',
  },
  problem: {
    title: 'Fourteen sites, fourteen logins, no overview.',
    body: [
      "The district manager can't stand at fourteen checkouts at once. And they can't log into fourteen different apps every Friday afternoon to see how things are going.",
      "Manual weekly reports from each store manager arrive in fourteen different formats — if they arrive at all. Excel exports from Avigilon are tedious per site and impossible to compare across the chain.",
      "Reveal gathers it all: a multi-site view where every store sits side by side, same KPIs, same report format, same alerts. One glance — and you know which store needs attention.",
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From one site to the whole chain',
    steps: [
      {
        title: 'Connect one store',
        body: 'Start with a pilot. Reveal discovers counters, imports history, sets up standard KPIs. 15 minutes from zero to live.',
      },
      {
        title: 'Roll out to the rest',
        body: 'Every new site follows the same pattern. Copy the KPI configuration from the pilot instead of starting from scratch. 5 minutes per new site.',
      },
      {
        title: 'The district manager sees everything',
        body: 'The multi-site view shows each store with busy level, queue status, day pace, 7-day trend. Click into a store for full detail.',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything a chain needs',
    items: [
      {
        title: 'Multi-site fleet view',
        body: 'Every store side by side. Live visitor count, queue status, occupancy, 7-day trend. Sorted by busy level or "needs attention" first.',
      },
      {
        title: 'Per-site alerts + central overview',
        body: 'Local alerts go to the store manager. The district manager gets a summary — "three sites over threshold right now" — without drowning in every individual push.',
        bullets: [
          'Role-based access — ops director, district manager, store manager',
          'Per-site thresholds and rules',
          'Escalation if the store manager doesn\'t act',
        ],
      },
      {
        title: 'HACCP compliance across the chain',
        body: 'Which sites are compliant? Which have recurring breaches? Quality lead sees compliance in one view instead of fourteen separate folders.',
      },
      {
        title: 'Aggregated reports',
        body: 'Weekly report for the whole chain or per region. Compare sites. Find best practice. Schedule per stakeholder — ops, finance, quality get their own versions.',
      },
      {
        title: 'White-label for franchise systems',
        body: "Are you a franchise chain? Reveal can brand the UI with your logo so it becomes \"your\" platform — without you having to build it.",
      },
      {
        title: 'Volume discount at 3+ sites',
        body: 'Starter plan is $50/site/month. At 3+ sites the volume discount kicks in — contact us for exact pricing for your chain.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'How quickly can I roll out to 20 sites?',
        a: 'Practically in 2–3 days. The first site takes 15–30 minutes to configure. Each subsequent site takes 5–10 minutes since the KPI mapping is the same.',
      },
      {
        q: 'Does it work if sites have different Alta accounts?',
        a: 'Yes. Reveal can connect multiple Alta accounts (one per site if each franchisee has their own) or a shared account if the chain has a common Alta subscription.',
      },
      {
        q: 'Can store managers only see their own store?',
        a: 'Yes. Role-based access means the store manager sees their store (with alerts + reports), the district manager sees their stores, the ops director sees everything.',
      },
      {
        q: 'What does it cost for a chain?',
        a: 'The Starter plan is $50/site/month or $450/site/year. Volume discounts kick in at 3+ sites. Contact us for an exact quote for your chain.',
      },
      {
        q: 'Do we get rollout support?',
        a: "Yes. For chains with 5+ sites, onboarding support is included — we help you set up the first 2–3 sites and ensure the KPI mapping is optimal before you roll out to the rest.",
      },
      {
        q: 'Can we export all the data?',
        a: 'Yes. CSV export of all underlying data, JSON via API if you want to build your own BI dashboards on top of Reveal data.',
      },
    ],
  },
  finalCta: {
    title: 'Stop logging into fourteen apps',
    body: 'One dashboard for the whole chain. Start with a pilot, roll out to the rest in two weeks.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'HACCP & food safety',
        href: '/en/haccp/',
        body: 'Multi-site compliance in one view for quality leads.',
      },
      {
        title: 'Reports',
        href: '/en/retail/reports/',
        body: 'Scheduled PDF reports across the whole chain.',
      },
      {
        title: 'Reveal for your store',
        href: '/en/retail/',
        body: 'Per-store features — visitors, queue, screens.',
      },
    ],
  },
};
