import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/belaggning/',
  en: '/en/retail/occupancy/',
};

export const meta = {
  sv: {
    title: 'Beläggning & kapacitet — Reveal för din butik',
    description:
      'Hur många är i butiken just nu? Hur nära kapaciteten? Reveal mäter live från dina Avigilon Alta-kameror och larmar när det blir trångt.',
  },
  en: {
    title: 'Occupancy & capacity — Reveal for your store',
    description:
      'How many people are in store right now? How close to capacity? Reveal measures live from your Avigilon Alta cameras and alerts when it gets crowded.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Vet exakt hur mycket folk',
    titleHighlight: 'som är i butiken just nu',
    subtitle:
      'Reveal mäter beläggning live från dina Avigilon Alta-kameror. Se hur nära kapaciteten du ligger, identifiera peak-timmar, och få larm när det blir för trångt.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Är det 20 eller 80 i butiken just nu?',
    body: [
      'Manuell huvudräkning är opålitlig och avtar efter klockan 12. Och frågan är inte bara "hur många" — det är "hur nära kapaciteten".',
      'För butiker med kapacitetstak (covid-restriktioner, brandsäkerhet, säkerhetspolicy) är skillnaden mellan 60% och 110% av kapacitet kritisk. Du behöver veta i sekunden — inte i efterhand.',
      'Reveal räknar in och ut via dina entré-kameror, håller en löpande siffra och säger till när du närmar dig taket.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från entré-räknare till live beläggning',
    steps: [
      {
        title: 'Reveal räknar entréer och utgångar',
        body: 'Line-crossing-analytics i Alta gör jobbet — Reveal läser värdena. In minus ut = nuvarande beläggning. Uppdaterat var 60:e sekund.',
      },
      {
        title: 'Du sätter din kapacitet',
        body: 'Hur många får vara i butiken samtidigt? Sätt taket en gång per butik. Reveal beräknar % automatiskt.',
      },
      {
        title: 'Larm när du närmar dig taket',
        body: 'Push-notis vid 80% kapacitet, högre alert vid 95%. Du hinner styra köbildning eller stänga insläpp innan brandsäkerheten blir ett problem.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt du behöver för att hålla koll på beläggningen',
    items: [
      {
        title: 'Live beläggning med kapacitetsring',
        body: 'Visuell ring som fylls upp när folk strömmar in. Grön under 70%, gul 70-90%, röd över 90%. På översikten, på TV:n, i mobilen.',
      },
      {
        title: 'Peak-tid-igenkänning',
        body: 'Reveal lär sig dina mönster och säger "expected peak: 16:00-17:00, baserat på senaste fyra fredagarna". Bemanna upp innan, inte efter.',
      },
      {
        title: 'Beläggningsfördelning över tid',
        body: 'Histogram som visar hur ofta du har 20, 40, 60 personer i butiken. Vad är "vanligt"? Vad är peak? Reveal svarar.',
        bullets: [
          'Median, p90 och max-värden',
          'Per veckodag och tidsintervall',
          'Senaste 7, 28 eller 90 dagarna',
        ],
      },
      {
        title: 'Säkerhetsmedveten',
        body: 'För butiker med brandsäkerhetsregler eller kapacitetspolicy: Reveal håller dokumenterade tidsstämplade värden. Bra om det någonsin behövs som bevis.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Vad krävs av Alta-kamerorna?',
        a: 'Line-crossing analytics aktiverat på entré-kameror (vanligtvis standardinställning). Reveal behöver en räknare för "in" och en för "ut" — eller en bi-directional räknare som ger båda i en.',
      },
      {
        q: 'Hur exakt är räkningen över tid?',
        a: 'Mycket exakt korttidigt (95-98% noggrannhet per passage). Men över en hel dag kan små fel ackumulera. Reveal nollställer automatiskt vid stängning så driftet inte sprider sig till nästa dag.',
      },
      {
        q: 'Vad räknas som "kapacitet"?',
        a: 'Du sätter det själv — kan vara brandsäkerhetsgräns, försäljnings-erfarenhetsmässig "trångt-gräns", eller en regulatorisk gräns. Reveal har ingen åsikt; den jämför mot ditt tak.',
      },
      {
        q: 'Kan jag sätta olika tak för helger vs vardag?',
        a: 'Ja. Olika tak per veckodag eller per öppettider-segment om du vill ha "rusningstid"-policy.',
      },
      {
        q: 'Räknas personal med?',
        a: 'Tekniskt sett ja om de går genom samma räknare. Du kan dock markera personal-entrén som separat så de inte ingår i kundsiffran.',
      },
      {
        q: 'Vad händer om kamerorna stoppar?',
        a: 'Reveal visar "stale" och larmar dig. Beläggningen "fryses" på senaste värdet och blir en uppskattning tills kamerorna är igång igen.',
      },
    ],
  },
  finalCta: {
    title: 'Sätt ditt kapacitetstak idag',
    body: 'Koppla in entré-räknarna, sätt taket, få första larm — på under 5 minuter.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Köhantering & larm',
        href: '/butik/kohantering-larm/',
        body: 'Mät kassakön i realtid och få push-larm.',
      },
      {
        title: 'Live besökarstatistik',
        href: '/butik/besoksstatistik/',
        body: 'Timvis besöksflöde och historiska trender.',
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
    title: 'Know exactly how many people',
    titleHighlight: 'are in your store right now',
    subtitle:
      "Reveal measures occupancy live from your Avigilon Alta cameras. See how close to capacity you are, spot peak hours, and get alerts when it's getting crowded.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'Is there 20 or 80 in the store right now?',
    body: [
      'Manual head counts are unreliable and tail off after lunchtime. And the question isn\'t just "how many" — it\'s "how close to capacity".',
      'For stores with capacity caps (COVID-style limits, fire safety, security policy), the difference between 60% and 110% of capacity is critical. You need to know to the second — not after the fact.',
      'Reveal counts in and out via your entrance cameras, keeps a running total and tells you when you approach the limit.',
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From entrance counter to live occupancy',
    steps: [
      {
        title: 'Reveal counts entries and exits',
        body: 'Line-crossing analytics in Alta does the work — Reveal reads the values. In minus out = current occupancy. Updated every 60 seconds.',
      },
      {
        title: 'You set your capacity',
        body: 'How many people can be in store at once? Set the limit once per site. Reveal computes the % automatically.',
      },
      {
        title: 'Alerts when you approach the limit',
        body: 'Push notification at 80% capacity, higher alert at 95%. You have time to manage queues or pause entry before fire-safety becomes an issue.',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to track occupancy',
    items: [
      {
        title: 'Live occupancy with capacity ring',
        body: 'Visual ring that fills up as people stream in. Green under 70%, yellow 70–90%, red above 90%. On the overview, on the TV, in your pocket.',
      },
      {
        title: 'Peak-hour recognition',
        body: "Reveal learns your patterns and tells you \"expected peak: 16:00–17:00, based on the last four Fridays\". Staff up before, not after.",
      },
      {
        title: 'Occupancy distribution over time',
        body: "Histogram showing how often you have 20, 40, 60 people in store. What's normal? What's peak? Reveal answers.",
        bullets: [
          'Median, p90 and max values',
          'Per weekday and time band',
          'Last 7, 28 or 90 days',
        ],
      },
      {
        title: 'Safety-aware',
        body: "For sites with fire-safety rules or capacity policies: Reveal keeps documented, timestamped values. Useful if it's ever needed as evidence.",
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'What do my Alta cameras need?',
        a: 'Line-crossing analytics enabled on entrance cameras (typically the default). Reveal needs an "in" counter and an "out" counter — or a bi-directional counter that provides both in one.',
      },
      {
        q: 'How accurate is the count over time?',
        a: 'Very accurate short-term (95–98% per passage). But over a full day, small errors can accumulate. Reveal resets automatically at closing time so drift doesn\'t carry over.',
      },
      {
        q: 'What counts as "capacity"?',
        a: "You set it yourself — could be fire-safety limit, a sales-experience \"crowded\" line, or a regulatory cap. Reveal has no opinion; it compares against your limit.",
      },
      {
        q: 'Can I set different limits for weekends vs. weekdays?',
        a: "Yes. Different caps by weekday or by trading-hours segment if you want a \"rush-hour\" policy.",
      },
      {
        q: 'Does staff get counted?',
        a: "Technically yes if they walk through the same counter. You can mark a separate staff entrance so they're excluded from the customer number.",
      },
      {
        q: 'What if the cameras go down?',
        a: 'Reveal marks the sensor as "stale" and alerts you. Occupancy "freezes" on the last value and becomes an estimate until the cameras are back.',
      },
    ],
  },
  finalCta: {
    title: 'Set your capacity limit today',
    body: 'Connect entrance counters, set the cap, get your first alert — in under 5 minutes.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Queue management & alerts',
        href: '/en/retail/queue-alerts/',
        body: 'Measure the checkout queue live and get push alerts.',
      },
      {
        title: 'Live visitor analytics',
        href: '/en/retail/visitor-counting/',
        body: 'Hourly footfall and historic trends.',
      },
      {
        title: 'All features',
        href: '/en/retail/',
        body: 'See the full Reveal package for your store.',
      },
    ],
  },
};
