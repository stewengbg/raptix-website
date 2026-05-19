export const paths = {
  sv: '/butik/',
  en: '/en/retail/',
};

export const meta = {
  sv: {
    title: 'Reveal för din butik — besöksanalys, kö, rapporter & skärmar',
    description:
      'Sex sätt att förvandla dina Avigilon Alta-kameror till data du faktiskt använder — besöksstatistik, köhantering, in-store skärmar, rapporter och mer.',
  },
  en: {
    title: 'Reveal for your store — visitor analytics, queue, reports & screens',
    description:
      'Six ways to turn your Avigilon Alta cameras into data you actually use — visitor counts, queue management, in-store screens, reports and more.',
  },
};

export type HubCard = {
  title: string;
  body: string;
  href: string;
  icon: string;
  soon?: boolean;
};

export type HubContent = {
  eyebrow: string;
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    trialNote: string;
  };
  gridTitle: string;
  gridSubtitle: string;
  cards: HubCard[];
  finalCta: { title: string; body: string; cta: string };
};

export const sv: HubContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Sex sätt att få mer av',
    titleHighlight: 'dina Alta-kameror',
    subtitle:
      'Reveal förvandlar dina Avigilon Alta-kameror till en daglig insiktsplattform — besökare, kö, beläggning, hyllaktivitet, in-store skärmar och rapporter. Allt på samma data, ingen ny hårdvara.',
    ctaPrimary: 'Starta gratis provperiod',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  gridTitle: 'Välj det område du vill veta mer om',
  gridSubtitle: 'Varje sida går på djupet — funktioner, prisbild, vanliga frågor och hur du kommer igång.',
  cards: [
    {
      title: 'Köhantering & larm',
      body: 'Mät kassakön i realtid. Push-larm när tröskeln överskrids. Smart-larm utan falsklarm.',
      href: '/butik/kohantering-larm/',
      icon: '⚡',
    },
    {
      title: 'Rapporter',
      body: 'Schemalagda handels- och HACCP-rapporter mejlas till rätt person. Ingen pärm, ingen panik.',
      href: '/butik/rapporter/',
      icon: '📄',
    },
    {
      title: 'Live besökarstatistik',
      body: 'Timvis besöksflöde jämfört med en typisk vecka. Multi-butiksvy från en skärm.',
      href: '/butik/besoksstatistik/',
      icon: '📊',
      soon: true,
    },
    {
      title: 'Beläggning & kapacitet',
      body: 'Hur många är i butiken nu? Hur nära kapaciteten? Larm när det blir trångt.',
      href: '/butik/belaggning/',
      icon: '👥',
      soon: true,
    },
    {
      title: 'Hyll- & gångtrafik',
      body: 'Vilka hyllor får mest besök? Använd datan för bättre layout och merchandising.',
      href: '/butik/hyllaktivitet/',
      icon: '🛒',
      soon: true,
    },
    {
      title: 'In-store skärmar',
      body: 'TV-redo dashboards för personalrum och kassan. Dela via länk — ingen inloggning krävs.',
      href: '/butik/skarmar/',
      icon: '📺',
      soon: true,
    },
  ],
  finalCta: {
    title: 'Kom igång på en kväll',
    body: 'Koppla in ditt Avigilon Alta-konto, peka ut dina räknare, sätt upp första rapporten. Klart.',
    cta: 'Starta gratis provperiod',
  },
};

export const en: HubContent = {
  eyebrow: 'For your store',
  hero: {
    title: 'Six ways to get more out of',
    titleHighlight: 'your Alta cameras',
    subtitle:
      'Reveal turns your Avigilon Alta cameras into a daily insight platform — visitors, queue, occupancy, aisle activity, in-store screens and reports. All on the same data, no new hardware.',
    ctaPrimary: 'Start free trial',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  gridTitle: 'Pick the area you want to know more about',
  gridSubtitle: 'Each page goes deep — features, pricing, common questions, and how to get started.',
  cards: [
    {
      title: 'Queue management & alerts',
      body: 'Live checkout queue measurement. Push alerts when the threshold breaks. Smart alerts, no false alarms.',
      href: '/en/retail/queue-alerts/',
      icon: '⚡',
    },
    {
      title: 'Reports',
      body: 'Scheduled trading and HACCP reports emailed to the right person. No folder, no panic.',
      href: '/en/retail/reports/',
      icon: '📄',
    },
    {
      title: 'Live visitor analytics',
      body: 'Hourly footfall compared to a typical week. Multi-site fleet view from a single screen.',
      href: '/en/retail/visitor-counting/',
      icon: '📊',
      soon: true,
    },
    {
      title: 'Occupancy & capacity',
      body: 'How many people are in store right now? How close to capacity? Alerts when it gets crowded.',
      href: '/en/retail/occupancy/',
      icon: '👥',
      soon: true,
    },
    {
      title: 'Aisle traffic',
      body: 'Which aisles get the most visits? Use the data for better layout and merchandising.',
      href: '/en/retail/aisle-traffic/',
      icon: '🛒',
      soon: true,
    },
    {
      title: 'In-store screens',
      body: "TV-ready dashboards for break rooms and the front of house. Share by link — no login required.",
      href: '/en/retail/in-store-screens/',
      icon: '📺',
      soon: true,
    },
  ],
  finalCta: {
    title: 'Up and running in an evening',
    body: 'Connect your Avigilon Alta account, point at your counters, schedule your first report. Done.',
    cta: 'Start free trial',
  },
};
