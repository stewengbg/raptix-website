import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/haccp/',
  en: '/en/haccp/',
};

export const meta = {
  sv: {
    title: 'HACCP-temperaturövervakning & egenkontroll — Reveal',
    description:
      'Automatisk HACCP-temperaturövervakning för dina kylar och frysar via Avigilon Alta-sensorer. Full revisionsspår, klara PDF-rapporter för Livsmedelsverkets inspektion.',
  },
  en: {
    title: 'HACCP temperature monitoring — Reveal',
    description:
      'Automatic HACCP temperature monitoring for fridges and freezers via Avigilon Alta sensors. Full audit trail, ready-to-file PDF reports for food-safety inspections.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'HACCP & egenkontroll',
  hero: {
    title: 'HACCP-egenkontrollen som',
    titleHighlight: 'sköter sig själv',
    subtitle:
      'Reveal övervakar dina kylar, frysar och rumstemperaturer dygnet runt via Avigilon Alta-sensorer. Avvikelser larmas direkt och samlas i en HACCP-redo PDF — klar att lämna till inspektören.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Pärmen ligger på golvet. Inspektören står i dörren.',
    body: [
      'HACCP-egenkontrollen kräver att du loggar temperaturer flera gånger om dagen, per kyl, per frys. För hand. På en blankett som ligger i en pärm bakom kassan.',
      'I praktiken: någon glömmer en logg. Vid avvikelse skrivs ingen åtgärd ned. När Livsmedelsverket kommer på besök är pärmen halvtom och du har en obekväm konversation framför dig.',
      'Reveal löser hela cykeln — loggar dygnet runt, larmar vid avvikelse, dokumenterar åtgärden, levererar PDF:en som inspektören vill se.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från Alta-sensor till revisor-redo PDF',
    steps: [
      {
        title: 'Reveal hittar dina miljösensorer',
        body: 'Avigilon Alta-kameror som mäter temperatur och luftfuktighet upptäcks automatiskt. Inga nya enheter, ingen kabeldragning.',
      },
      {
        title: 'Sätt rollbaserade gränsvärden',
        body: 'Kyl: 2-6°C. Frys: under -18°C. Rumstemp: 18-22°C. Anpassad: dina egna gränser. Sätt en gång, gäller alltid.',
      },
      {
        title: 'Rapporten skriver sig själv',
        body: 'Veckans HACCP-rapport landar i butikschefens inkorg på måndag morgon. Avvikelser, åtgärder, sammanfattning — klar att vidarebefordras.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt din egenkontroll behöver',
    items: [
      {
        title: '24/7 temperaturlogg',
        body: 'Var 60:e sekund läses sensorvärdet och sparas tidsstämplat. Du behöver inte logga manuellt — Reveal loggar bättre än någon människa kan.',
      },
      {
        title: 'Rollbaserade gränsvärden',
        body: 'Kyl / Frys / Rumstemp / Anpassad. Varje roll har förinställda kritiska gränser baserat på branschpraxis. Du kan finjustera per sensor.',
        bullets: [
          'Hysteres och eskalering — inga falsklarm',
          'Push-notis vid avvikelse, mejl-eskalering',
          'Olika gränser för dag och natt om du vill',
        ],
      },
      {
        title: 'Händelselogg med revisionsspår',
        body: 'Varje avvikelse loggas med start, peak, varaktighet och åtgärd. Du dokumenterar inte själv — Reveal frågar "vad gjorde du?" och sparar svaret.',
      },
      {
        title: 'HACCP-rapport som PDF',
        body: 'Veckorapport eller månadsrapport, schemalagd via mejl. Innehåller temperaturlogg, alla avvikelser, alla åtgärder, "klar för egenkontroll"-status — designad för Livsmedelsverkets inspektion.',
        bullets: [
          'Per butik eller över hela kedjan',
          'Anpassade perioder för revisor',
          'Allt arkiverat i appen — laddas ner när som helst',
          'Lagras enligt branschpraxis för spårbarhet',
        ],
      },
      {
        title: 'Aktivitetshetta per sensor',
        body: 'Vilka kylar är mest avvikelsetunga? När på dagen sker breaches? Reveal visar mönstren så du kan åtgärda root cause, inte bara symptom.',
      },
      {
        title: 'Multi-butiksvy för kedjor',
        body: 'Kvalitetsansvarig ser efterlevnaden över hela kedjan i en vy. Vilka butiker är compliant? Vilka har återkommande breaches?',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Är detta godkänt för Livsmedelsverkets egenkontroll?',
        a: 'Reveal genererar dokumentation som är designad för att uppfylla HACCP-krav på temperaturlogg och avvikelsehantering. Det slutgiltiga godkännandet ligger hos din kommunala miljö- och hälsoskyddsinspektör — men datan, formatet och revisionsspåret är på rätt nivå för deras inspektion.',
      },
      {
        q: 'Vilka sensorer behövs?',
        a: 'Avigilon Alta-kameror eller -enheter med temperatur- och luftfuktighetssensorer. Många nya Alta-enheter har dessa inbyggda. Reveal hittar dem automatiskt när du kopplar in ditt konto.',
      },
      {
        q: 'Hur ofta sparas värden?',
        a: 'Var 60:e sekund läses sensorvärdet. Avvikelser markeras och loggas direkt. Alla värden sparas tidsstämplat för full historik.',
      },
      {
        q: 'Vad räknas som "avvikelse"?',
        a: 'En sensor som ligger utanför dina inställda kritiska gränser i mer än 30 sekunder (för att undvika falsklarm vid kortvariga upp-/nedgångar). Du kan justera tröskeln per sensor.',
      },
      {
        q: 'Hur länge lagras datan?',
        a: 'Reveal håller historik enligt branschpraxis för spårbarhet — typiskt minst 3 år. Du kan exportera och arkivera offline om du vill ha längre retention.',
      },
      {
        q: 'Kan jag dela rapporten med min revisor?',
        a: 'Ja. Rapporten är en PDF — vidarebefordra mejlet, ladda upp i din egenkontrollpärm (digital eller fysisk), eller skicka direkt till inspektören.',
      },
      {
        q: 'Vad händer om en sensor slutar fungera?',
        a: 'Reveal larmar direkt. "Stale" eller "offline" sensorer markeras tydligt så de inte ger en falsk trygghet om att allt är okej.',
      },
    ],
  },
  finalCta: {
    title: 'Sluta logga temperaturer för hand',
    body: 'Koppla in dina Alta-sensorer, sätt gränserna, vänta på första veckorapporten — på en eftermiddag.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Schemalagda handels- och HACCP-rapporter via mejl.',
      },
      {
        title: 'Flera butiker / kedjor',
        href: '/kedjor/',
        body: 'Multi-butiks-efterlevnad i en vy för kvalitetsansvariga.',
      },
      {
        title: 'Reveal för din butik',
        href: '/butik/',
        body: 'Se hela paketet — besökare, kö, skärmar, rapporter.',
      },
    ],
  },
};

export const en: SpokeContent = {
  eyebrow: 'HACCP & food safety',
  hero: {
    title: 'HACCP compliance',
    titleHighlight: 'that runs itself',
    subtitle:
      "Reveal monitors your fridges, freezers and ambient temperatures 24/7 via Avigilon Alta sensors. Breaches alert immediately and roll up into a HACCP-ready PDF — handed straight to the inspector.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'The folder is on the floor. The inspector is at the door.',
    body: [
      'HACCP compliance requires temperature logs several times a day, per fridge, per freezer. By hand. On a form in a folder behind the till.',
      "In practice: someone forgets a log. When a breach happens, no action is recorded. When the inspector arrives, the folder is half-empty and you're in for an awkward conversation.",
      "Reveal solves the whole cycle — logs 24/7, alerts on breach, documents the action, delivers the PDF the inspector wants.",
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From Alta sensor to audit-ready PDF',
    steps: [
      {
        title: 'Reveal finds your environmental sensors',
        body: 'Avigilon Alta cameras and devices that measure temperature and humidity are discovered automatically. No new hardware, no cabling.',
      },
      {
        title: 'Set role-based thresholds',
        body: 'Fridge: 2–6°C. Freezer: below -18°C. Ambient: 18–22°C. Custom: your own limits. Set once, always applies.',
      },
      {
        title: 'The report writes itself',
        body: "The week's HACCP report lands in the store manager's inbox on Monday morning. Breaches, actions, summary — ready to forward.",
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything your compliance needs',
    items: [
      {
        title: '24/7 temperature log',
        body: "Every 60 seconds the sensor value is read and stored with timestamp. You don't log manually — Reveal logs better than any human can.",
      },
      {
        title: 'Role-based thresholds',
        body: 'Fridge / Freezer / Ambient / Custom. Each role has pre-set critical limits based on industry standards. You can fine-tune per sensor.',
        bullets: [
          'Hysteresis and escalation — no false alarms',
          'Push alerts on breach, email escalation',
          'Different limits for day and night if you want',
        ],
      },
      {
        title: 'Event log with audit trail',
        body: 'Every breach is logged with start, peak, duration and action taken. You don\'t self-document — Reveal asks "what did you do?" and saves the answer.',
      },
      {
        title: 'HACCP report as PDF',
        body: 'Weekly or monthly report, scheduled by email. Contains temperature log, every breach, every action, "ready to file" status — designed for food-safety inspections.',
        bullets: [
          'Per site or across the whole chain',
          'Custom periods for auditors',
          'All archived in the app — download anytime',
          'Retained to industry standards for traceability',
        ],
      },
      {
        title: 'Activity heatmap per sensor',
        body: "Which fridges are most breach-prone? When during the day do breaches happen? Reveal shows the patterns so you can fix root cause, not just symptoms.",
      },
      {
        title: 'Multi-site view for chains',
        body: 'Quality lead sees compliance across the whole chain in one view. Which sites are compliant? Which have recurring breaches?',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'Is this acceptable for HACCP food-safety inspections?',
        a: "Reveal produces documentation designed to meet HACCP requirements for temperature logging and breach handling. Final acceptance is with your local environmental health inspector — but the data, format and audit trail are at the level they look for.",
      },
      {
        q: 'Which sensors do I need?',
        a: 'Avigilon Alta cameras or devices with temperature and humidity sensors. Many newer Alta devices have these built in. Reveal discovers them automatically when you connect your account.',
      },
      {
        q: 'How often are values stored?',
        a: 'The sensor is read every 60 seconds. Breaches are flagged and logged instantly. All values are stored timestamped for full history.',
      },
      {
        q: 'What counts as a "breach"?',
        a: 'A sensor outside your set critical limits for more than 30 seconds (to avoid false alarms on short blips). You can adjust the threshold per sensor.',
      },
      {
        q: 'How long is data retained?',
        a: 'Reveal keeps history to industry traceability standards — typically at least 3 years. You can export and archive offline if you need longer retention.',
      },
      {
        q: 'Can I share the report with my auditor?',
        a: "Yes. The report is a PDF — forward the email, upload to your compliance folder (digital or physical), or send directly to the inspector.",
      },
      {
        q: 'What happens if a sensor stops working?',
        a: 'Reveal alerts immediately. "Stale" or "offline" sensors are clearly marked so they don\'t give a false sense of everything being fine.',
      },
    ],
  },
  finalCta: {
    title: 'Stop logging temperatures by hand',
    body: 'Connect your Alta sensors, set the limits, wait for the first weekly report — in one afternoon.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Reports',
        href: '/en/retail/reports/',
        body: 'Scheduled trading and HACCP reports by email.',
      },
      {
        title: 'Multi-site & chains',
        href: '/en/multi-site/',
        body: 'Multi-site compliance in one view for quality leads.',
      },
      {
        title: 'Reveal for your store',
        href: '/en/retail/',
        body: 'See the full package — visitors, queue, screens, reports.',
      },
    ],
  },
};
