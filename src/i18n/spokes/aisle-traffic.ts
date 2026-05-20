import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/hyllaktivitet/',
  en: '/en/retail/aisle-traffic/',
};

export const meta = {
  sv: {
    title: 'Hyll- & gångtrafik — Reveal för din butik',
    description:
      'Vilka hyllor och avdelningar får mest besök? Reveal mäter passager per gång från dina Avigilon Alta-kameror — använd datan för bättre layout och merchandising.',
  },
  en: {
    title: 'Aisle traffic — Reveal for your store',
    description:
      'Which aisles and sections get the most visits? Reveal measures passages per aisle from your Avigilon Alta cameras — use the data for better layout and merchandising.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Vilka hyllor jobbar hårdast?',
    titleHighlight: 'Och vilka står tomma?',
    subtitle:
      'Reveal mäter passager per gång och avdelning från dina Avigilon Alta-kameror. Använd datan för smartare merchandising, bättre layout och beslut om var kampanjmaterialet ska sitta.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Du ser besökarna gå in. Sen försvinner de.',
    body: [
      'Två tusen kunder kommer in på en fredag. Vart går de? Vilka gångar är populärast? Vilka hyllor missar alla? Magkänsla, mest.',
      'Merchandisers fattar layoutbeslut på POS-data — men POS säger bara vad som blev köpt, inte vad som blev sett. En hylla med noll försäljning kan ha tusen besök (och fel produkt), eller noll besök (och fel placering).',
      'Reveal mäter den fattande hälften — gångtrafiken — så du faktiskt vet varför något säljer eller inte säljer.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från kamera över gången till data du kan agera på',
    steps: [
      {
        title: 'Aktivera passage-räkning per gång i Alta',
        body: 'Lägg en line-crossing eller occupancy zone i Alta vid varje viktig gång eller avdelning. Reveal hittar de räknarna automatiskt.',
      },
      {
        title: 'Namnge gångarna',
        body: 'Mappa varje räknare till sin avdelning — Ägg, Chips, Kaffe, etc. Då blir rapporterna läsbara istället för "räknare-3847".',
      },
      {
        title: 'Se rangordningen',
        body: 'Reveal visar dagens, veckans och månadens passager per gång — staplade och sorterade. Du ser direkt vilka som dominerar och vilka som lever i skuggan.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt du behöver för att förstå dina gångar',
    items: [
      {
        title: 'Passages per gång, idag och historiskt',
        body: 'Stapeldiagram med dagens passager per gång — sorterat högst till lägst. Klicka in på en gång för 7-, 28- eller 90-dagarsvy.',
      },
      {
        title: 'Avdelnings-rangordning',
        body: 'Vilka 5 avdelningar har högst besöksflöde? Vilka 5 har lägst? Reveal visar topp och botten — bra för att hitta layout-problem på minuter.',
      },
      {
        title: 'Före/efter kampanj',
        body: 'Flyttade ni kampanjmaterialet från ingången till Hylla 12? Se direkt om Hylla 12:s besök ökade — och med hur mycket.',
        bullets: [
          'Jämför valfri period mot baseline',
          'Per dag, vecka eller månad',
          'Exportera som CSV för djupare analys',
        ],
      },
      {
        title: 'Stale-räknare-larm',
        body: 'Om en avdelnings-räknare slutar rapportera, larmar Reveal. Du behöver inte upptäcka det i nästa rapport — du vet samma dag.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Behöver jag en kamera per gång?',
        a: 'Inte nödvändigtvis — en kamera kan täcka flera gångar om vinkeln är rätt. För högsta noggrannhet rekommenderar Avigilon en line-crossing-zon per gång du vill mäta.',
      },
      {
        q: 'Räknar Reveal också tid spenderad i en gång?',
        a: 'Just nu mäter Reveal passager (passerar/inte passerar). Tid-spenderad ("dwell time") är på roadmappen — säger till om du vill prioriteras som beta-tester.',
      },
      {
        q: 'Funkar det med occupancy zones också?',
        a: 'Ja. Om du har Alta occupancy zones aktiverade per avdelning kan Reveal läsa dem som ett komplement till line-crossings.',
      },
      {
        q: 'Hur skiljer jag personal från kunder?',
        a: 'Det går inte automatiskt — Alta-räknare ser inte skillnad. Praktisk lösning: mät under öppettider (där kund-andelen är hög) och jämför mot stängt-tid om du vill ha en ungefärlig personal-baseline.',
      },
      {
        q: 'Hur ofta uppdateras datan?',
        a: 'Reveal hämtar varje 60:e sekund. Stapeldiagrammet ändras under dagen som passager räknas. Historiska sammanställningar görs nattetid.',
      },
      {
        q: 'Kan jag bryta ner per kvinna/man eller åldersgrupp?',
        a: 'Nej — Reveal får inte den datan från Alta (av integritetsskäl). Räkningarna är anonyma.',
      },
    ],
  },
  finalCta: {
    title: 'Vad jobbar dina gångar med just nu?',
    body: 'Aktivera passage-räkning, sätt namnen, se rangordningen — på en eftermiddag.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Live besökarstatistik',
        href: '/butik/besoksstatistik/',
        body: 'Timvis besöksflöde och historiska trender.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Schemalagda PDF-rapporter via mejl.',
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
    title: 'Which aisles work hardest?',
    titleHighlight: 'And which sit empty?',
    subtitle:
      "Reveal measures passages per aisle and section from your Avigilon Alta cameras. Use the data for smarter merchandising, better layout, and decisions about where promotional material belongs.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'You see customers walk in. Then they disappear.',
    body: [
      "Two thousand customers come in on a Friday. Where do they go? Which aisles are popular? Which shelves does everyone miss? Mostly gut feel.",
      "Merchandisers make layout decisions on POS data — but POS only says what was bought, not what was seen. A shelf with zero sales could have a thousand visits (wrong product) or zero visits (wrong placement).",
      "Reveal measures the missing half — aisle traffic — so you actually know why something sells or doesn't.",
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From cameras over the aisles to actionable data',
    steps: [
      {
        title: 'Enable passage counting per aisle in Alta',
        body: 'Place a line-crossing or occupancy zone in Alta at each key aisle or section. Reveal discovers those counters automatically.',
      },
      {
        title: 'Name the aisles',
        body: 'Map each counter to its section — Eggs, Chips, Coffee, etc. The reports become readable instead of "counter-3847".',
      },
      {
        title: 'See the ranking',
        body: "Reveal shows today's, this week's and this month's passages per aisle — stacked and sorted. You see immediately which dominate and which live in the shadow.",
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to understand your aisles',
    items: [
      {
        title: 'Passages per aisle, today and historic',
        body: "Bar chart of today's passages per aisle — sorted high to low. Click into an aisle for a 7-, 28- or 90-day view.",
      },
      {
        title: 'Section ranking',
        body: 'Which 5 sections have the highest foot traffic? Which 5 the lowest? Reveal shows top and bottom — useful for spotting layout problems in minutes.',
      },
      {
        title: 'Before/after campaigns',
        body: 'Moved the promo display from the entrance to Shelf 12? See instantly whether Shelf 12 visits went up — and by how much.',
        bullets: [
          'Compare any period against a baseline',
          'By day, week or month',
          'Export as CSV for deeper analysis',
        ],
      },
      {
        title: 'Stale-counter alerts',
        body: "If a section's counter stops reporting, Reveal alerts you. You don't have to discover it in the next report — you know the same day.",
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'Do I need one camera per aisle?',
        a: 'Not necessarily — one camera can cover several aisles if the angle is right. For maximum accuracy, Avigilon recommends one line-crossing zone per aisle you want to measure.',
      },
      {
        q: 'Does Reveal also measure time spent in an aisle?',
        a: 'Right now Reveal measures passages (passes / does not pass). Dwell time is on the roadmap — let us know if you want early access.',
      },
      {
        q: 'Does it work with occupancy zones too?',
        a: 'Yes. If you have Alta occupancy zones enabled per section, Reveal can read them as a supplement to line-crossings.',
      },
      {
        q: 'How do I separate staff from customers?',
        a: "It can't be done automatically — Alta counters don't distinguish. Practical solution: measure during trading hours (where customer share is high) and compare against closed hours to get an approximate staff baseline.",
      },
      {
        q: 'How often does the data refresh?',
        a: "Reveal polls every 60 seconds. The bar chart updates during the day as passages count. Historic summaries are computed overnight.",
      },
      {
        q: 'Can I break down by male/female or age?',
        a: "No — Reveal doesn't receive that data from Alta (for privacy reasons). The counts are anonymous.",
      },
    ],
  },
  finalCta: {
    title: 'What are your aisles doing right now?',
    body: 'Enable passage counting, set the names, see the ranking — in one afternoon.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Live visitor analytics',
        href: '/en/retail/visitor-counting/',
        body: 'Hourly footfall and historic trends.',
      },
      {
        title: 'Reports',
        href: '/en/retail/reports/',
        body: 'Scheduled PDF reports by email.',
      },
      {
        title: 'All features',
        href: '/en/retail/',
        body: 'See the full Reveal package for your store.',
      },
    ],
  },
};
