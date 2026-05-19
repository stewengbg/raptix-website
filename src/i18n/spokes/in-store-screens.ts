import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/skarmar/',
  en: '/en/retail/in-store-screens/',
};

export const meta = {
  sv: {
    title: 'In-store skärmar — Reveal för din butik',
    description:
      'TV-redo dashboards för personalrum och kassan. Bygg en gång, dela med länk — ingen inloggning på TV:n. Live-besökare, kö och sensor-status.',
  },
  en: {
    title: 'In-store screens — Reveal for your store',
    description:
      'TV-ready dashboards for the break room and front of house. Build once, share by link — no login on the TV. Live visitors, queue and sensor status.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Skärmen i personalrummet',
    titleHighlight: 'som alltid är uppdaterad',
    subtitle:
      'Bygg en TV-redo dashboard på minuter. Dela med URL och lösenord — ingen inloggning krävs på TV:n. Live-besökare, kö, sensor-status och larm — alltid i blickfånget.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Personalen ser inte hur det går.',
    body: [
      'Säljarna är på golvet. Kassörerna står vid registret. Butikschefen rusar fram och tillbaka mellan kontoret och kassan för att kolla siffror.',
      'En skärm bakom kassan eller i personalrummet löser det — om bara den vore lätt att sätta upp. Och inte krävde en inloggning som låser ut alla efter två minuter.',
      'Reveals skärmar är byggda för det här: en dashboard du delar med en länk, som inte loggar ut, och som ingen behöver inloggning för att se.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från drag-drop till TV:n bakom kassan',
    steps: [
      {
        title: 'Bygg din dashboard med drag-drop',
        body: 'Välj från 8 widgets — besökarantal, hourly chart, kö-mätare, sensor-status, larmkolumn, mer. Snäpp dem på rätt plats. Förhandsgranska på vilken upplösning som helst.',
      },
      {
        title: 'Dela med URL och lösenord',
        body: 'Skapa en delningslänk. Sätt ett lösenord. Skicka till TV:n eller copy-paste på iPaden. Du behöver inte logga in i Reveal för att titta.',
      },
      {
        title: 'Skärmen uppdateras själv',
        body: 'Var 30:e sekund hämtar TV:n nya värden. Inga sidor som timeoutar. Inget som behöver klickas. Bara live-data.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt du behöver för en TV bakom kassan',
    items: [
      {
        title: 'Drag-drop editor',
        body: 'Bygg layouten i ditt eget tempo. 8 widgets täcker 90% av användningsfallen — besökare, kö, hourly chart, sensor-status, larmkolumn, sajthuvud, dagstotaler, sensor-grid.',
      },
      {
        title: 'Färdiga mallar',
        body: 'Front-of-house (för kunder), personalrum (för säljarna), butikschefskontor (mer detalj). Välj en, anpassa, dela.',
      },
      {
        title: 'Delning utan inloggning',
        body: 'URL + lösenord = klart. Den som har länken kan se dashboarden, ingen mer. Bra för iPader och kioskskärmar utan användarhantering.',
        bullets: [
          'Mörkt eller ljust tema',
          'Auto-refresh var 30:e sekund',
          'Skalas från iPad till 4K-TV',
          'Anonym åtkomst — inga konton att skapa',
        ],
      },
      {
        title: 'En per butik eller flera',
        body: 'En skärm per plats är gratis i Starter-planen. Vill du ha personalrum + kassa + matsal? Bygg så många du vill — samma dashboard eller helt olika.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Vad krävs på TV:n?',
        a: 'Bara en webbläsare. Vilken modern Smart-TV, Chromecast, Apple TV eller en gammal Mac/PC med Chrome räcker. Pekplattor som iPad funkar också perfekt.',
      },
      {
        q: 'Kan kunder se skärmen?',
        a: 'Ja — du kan bygga en "front-of-house"-version som bara visar publika siffror (typ "1 247 besökare idag"), och en "staff"-version med kö-larm och temperatur. Olika lösenord, olika dashboards.',
      },
      {
        q: 'Hur ofta uppdateras data?',
        a: 'Var 30:e sekund som standard. Du kan sätta intervallet till 60s, 120s eller längre om du vill spara på bandbredd. Skärmen pingar Reveal — Reveal trycker inte ut data.',
      },
      {
        q: 'Vad händer om internet går ned?',
        a: 'Skärmen visar senaste värdena med en discreet "frånkopplad" markering. När anslutningen kommer tillbaka uppdateras allt automatiskt — du behöver inte ladda om sidan.',
      },
      {
        q: 'Kan jag ha samma skärm i flera butiker?',
        a: 'Ja, men varje butik ser sin egen data. Skärmen är knuten till en butik åt gången — eller, om du sätter upp den som "fleet"-vy, en kombination av flera.',
      },
      {
        q: 'Funkar det i Starter-planen?',
        a: 'Ja. En skärm per butik ingår. Behöver du flera (personalrum + kassa + osv.) kan du bygga så många du vill — de räknas tillsammans mot Starter-planens gräns.',
      },
    ],
  },
  finalCta: {
    title: 'Sätt upp din första skärm idag',
    body: 'Bygg dashboarden, dela med länk, öppna på TV:n. Tre minuter från start till live.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Köhantering & larm',
        href: '/butik/kohantering-larm/',
        body: 'Mät kassakön i realtid och få push-larm innan kunder lämnar.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Schemalagda HACCP- och handelsrapporter via mejl.',
      },
      {
        title: 'Alla funktioner',
        href: '/butik/',
        body: 'Se hela Reveal-paketet för din butik.',
      },
    ],
  },
};

export const en: SpokeContent = {
  eyebrow: 'For your store',
  hero: {
    title: 'The break-room screen',
    titleHighlight: "that's always live",
    subtitle:
      "Build a TV-ready dashboard in minutes. Share by URL and password — no login on the TV. Live visitors, queue, sensor status and alerts — always in view.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'Your staff can’t see how the day is going.',
    body: [
      "Floor staff are with customers. Cashiers are at the till. The store manager runs between the back office and the front to check numbers.",
      "A screen behind the till or in the break room solves it — if only it were easy to set up. And didn't require a login that times out after two minutes.",
      "Reveal's screens are built for exactly this: a dashboard you share with a link, that doesn't log out, that no one needs an account for.",
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From drag-drop to the TV behind the till',
    steps: [
      {
        title: 'Build your dashboard with drag-drop',
        body: 'Pick from 8 widgets — visitor count, hourly chart, queue gauge, sensor status, alert column, more. Snap them into place. Preview at any resolution.',
      },
      {
        title: 'Share by URL and password',
        body: "Generate a share link. Set a password. Open it on the TV or iPad. No Reveal login needed to view.",
      },
      {
        title: 'The screen refreshes itself',
        body: "Every 30 seconds the TV fetches new values. No pages that time out. Nothing to click. Just live data.",
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need for a TV behind the till',
    items: [
      {
        title: 'Drag-drop editor',
        body: "Build your layout at your own pace. 8 widgets cover 90% of use cases — visitors, queue, hourly chart, sensor status, alert column, site header, daily totals, sensor grid.",
      },
      {
        title: 'Ready-made templates',
        body: 'Front-of-house (for customers), break room (for staff), manager office (more detail). Pick one, customise, share.',
      },
      {
        title: 'Share without login',
        body: "URL + password = done. Anyone with the link sees the dashboard, no one else. Perfect for iPads and kiosk screens without user management.",
        bullets: [
          'Dark or light theme',
          'Auto-refresh every 30 seconds',
          'Scales from iPad to 4K TV',
          'Anonymous access — no accounts to create',
        ],
      },
      {
        title: 'One per site, or many',
        body: "One screen per site is included in the Starter plan. Need break room + till + canteen? Build as many as you like — same dashboard or completely different.",
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'What do I need on the TV?',
        a: 'Just a browser. Any modern Smart TV, Chromecast, Apple TV, or an old Mac/PC with Chrome will work. iPads and other tablets work great too.',
      },
      {
        q: 'Can customers see the screen?',
        a: 'Yes — you can build a "front-of-house" version that only shows public numbers (like "1,247 visitors today"), and a "staff" version with queue alerts and temperatures. Different passwords, different dashboards.',
      },
      {
        q: 'How often does the data refresh?',
        a: 'Every 30 seconds by default. You can set it to 60s, 120s or longer if you want to save bandwidth. The screen pings Reveal — Reveal does not push.',
      },
      {
        q: 'What happens if the internet goes down?',
        a: "The screen shows the last values with a small \"disconnected\" marker. When the connection comes back, everything updates automatically — you don't need to reload.",
      },
      {
        q: 'Can I use the same screen across multiple sites?',
        a: 'Yes, but each site sees its own data. The screen is bound to one site at a time — or, if you set it up as a "fleet" view, a combination of several.',
      },
      {
        q: 'Is it included in the Starter plan?',
        a: 'Yes. One screen per site is included. Need more (break room + till + ...)? Build as many as you like — they share the Starter plan allowance.',
      },
    ],
  },
  finalCta: {
    title: 'Set up your first screen today',
    body: 'Build the dashboard, share by link, open it on the TV. Three minutes from start to live.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Queue management & alerts',
        href: '/en/retail/queue-alerts/',
        body: 'Live queue measurement and push alerts before customers leave.',
      },
      {
        title: 'Reports',
        href: '/en/retail/reports/',
        body: 'Scheduled HACCP and trading reports by email.',
      },
      {
        title: 'All features',
        href: '/en/retail/',
        body: 'See the full Reveal package for your store.',
      },
    ],
  },
};
