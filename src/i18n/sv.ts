export const sv = {
  meta: {
    title: 'Reveal — Besöksanalys för Avigilon Alta',
    description:
      'Reveal omvandlar metadata från Avigilon Alta Video Security till besöksstatistik, sensorövervakning och rapporter i realtid — utan ny hårdvara.',
  },
  nav: {
    how: 'Så fungerar det',
    features: 'Funktioner',
    partners: 'Partner',
    pricing: 'Pris',
    signin: 'Logga in',
    cta: 'Starta gratis provperiod',
  },
  hero: {
    badge: 'Byggt för Avigilon Alta',
    titleA: 'Förvandla dina Alta-kameror till',
    titleHighlight: 'en analysplattform för butik',
    subtitle:
      'Reveal kopplas in på den Avigilon Alta-plattform du redan använder för säkerhet och visar live besökare, köbildning, miljödata och handelsrapporter — utan att en enda ny kamera behöver installeras.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det fungerar',
    trialNote: '30 dagars gratis provperiod · avsluta när du vill',
    screenshotUrl: 'app.raptix.se/overview',
    caption: 'Live data från dina befintliga Avigilon Alta-kameror. Ingen extra hårdvara. Ingen extra inloggning.',
    kpi: {
      sites: 'Butiker',
      visitors: 'Besökare idag',
      inStore: 'I butik nu',
      sensors: 'Sensorstatus',
      healthy: 'Allt grönt',
    },
  },
  how: {
    eyebrow: 'Så fungerar det',
    title: 'Från kamera till insikt på tre steg.',
    subtitle:
      'Reveal är analyslagret ovanpå Avigilon Alta — vi ersätter inte din säkerhetsplattform, vi får den att betala sig en gång till.',
    step1: {
      title: 'Koppla in ditt Alta-konto',
      body: 'Lägg in dina Avigilon Alta-uppgifter en gång. Reveal hittar varenda räknare och miljösensor på varje enhet. Inga platsbesök, inga agenter att installera.',
    },
    step2: {
      title: 'Välj vad som spelar roll',
      body: 'Koppla kameror till mätvärden: besökare, beläggning, kö i kassan, parkering, kyltemperatur. Sätt öppettider och rollpolicy en gång — de gäller alla butiker.',
    },
    step3: {
      title: 'Insikt, hela dagen',
      body: 'En live-översikt visar om varje butik är livligare eller lugnare än normalt, larmar vid kö- och temperaturavvikelser, och mejlar handelsrapporten enligt det schema du valt.',
    },
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt en Alta-butik behöver för att drivas på siffror.',
    f1: {
      title: 'Live besökare och beläggning',
      body: 'Timvis besöksflöde mot en typisk fyraveckorsbaseline. En live-takmätare visar om du är på väg mot en vanlig dag — eller en lugn/livlig.',
      bullets: [
        'Dagens "höjdpunkter" — livligast, lugnast, peak framöver',
        'Multi-butiksvyn samlar alla butiker på en skärm',
        'Anpassar sig till öppettider så grafen matchar när du har öppet',
      ],
      mock: {
        label: 'Idag — besökare per timme',
        pill: 'Stabilt',
        text: 'På väg mot ~1 834 besökare till stängning',
      },
    },
    f2: {
      title: 'Miljö- och sensorövervakning',
      body: 'Varje kyl, frys och rumssensor på dina Alta-enheter, med rollbaserade gränsvärden (Kyl / Frys / Rum / Anpassad). Avvikelser visas direkt och hamnar i handelsdagens efterlevnadsrapport.',
      bullets: [
        'Hysteres och eskalering — du blir inte pingad för ett 30-sekunders glapp',
        'Händelselogg med start, peak, varaktighet och åtgärd',
        'Efterlevnadsrapport som PDF, schemalagd eller på begäran',
      ],
      mock: {
        alertTitle: '1 sensor över kritisk gräns',
        alertBody: 'Ägg · Temperatur 20,4°C > 17,0°C',
        tiles: [
          ['Kyl — kött', '4,2 °C'],
          ['Frys', '-19 °C'],
          ['Rumstemp', '22,5 °C'],
          ['Luftfuktighet', '47%'],
        ],
      },
    },
    f3: {
      title: 'Skärmar i butik, delas via länk',
      body: 'Bygg en TV-vänlig instrumentpanel en gång, dela med URL + lösenord — ingen Reveal-inloggning krävs. Sätt upp en skärm bakom kassan så ser personalen besökarantal, kö och sensorstatus live.',
      mock: {
        visitors: 'Besökare idag',
        inStore: 'I butik nu',
        queue: 'Kassakö',
        normal: '— normalt',
      },
    },
    f4: { title: 'Rapporter', body: 'Vecko- och månadsrapporter för besökare och miljöefterlevnad — schemalagda via mejl, arkiverade i appen.' },
    f5: { title: 'Återförsäljarbranding', body: 'White-labela toppmenyn med din logga. Dina kunder ser ditt varumärke, inte vårt. Per återförsäljare, ett klick.' },
    f6: { title: 'Roll-baserad behörighet', body: 'Ägare / admin / läsare per kund. Återförsäljar- och leverantörsroller ovanpå. Stripe-stödd provperiod och fakturering.' },
  },
  partners: {
    eyebrow: 'För partner',
    title: 'Sälj Reveal som din egen.',
    body: 'Är du Avigilon Alta-integratör? Reveal är ditt tilläggserbjudande. White-labela gränssnittet med din logga, hantera dina kunders konton från en konsol och tjäna marginal på varje plats.',
    bullets: [
      'Återförsäljar-konsol — du ser bara dina kunder',
      'Din logga ersätter Reveals i varje kunds gränssnitt',
      'Faktureras direkt eller via dig — du väljer',
      'Förstalinjesupport-verktyg för ditt team',
    ],
    cta: 'Bli partner',
    portalDomain: 'partner.reseller.example/overview',
    poweredBy: 'Drivs av Reveal',
    portalKpis: [
      ['Kunder', '12', 'text-gray-900'],
      ['Friska', '11', 'text-emerald-600'],
      ['Att åtgärda', '1', 'text-amber-600'],
    ],
  },
  pricing: {
    eyebrow: 'Pris',
    title: 'En plan. Per butik. Avsluta när du vill.',
    subtitle: '30 dagars gratis provperiod. Faktureras i USD via Stripe. Volymrabatter för flera butiker och återförsäljare.',
    monthly: 'Månad',
    annual: 'Årligen',
    annualSave: 'spara 30%',
    starter: {
      name: 'Starter',
      priceMonthly: '$30',
      perMonth: '/månad',
      priceAnnual: '$21',
      annualNote: '$250 per år — du sparar $110',
      features: [
        'En butik, obegränsat antal räknare och sensorer',
        'Live-översikt, sensorövervakning, rapporter',
        'En skärm i butik',
        'Mejlsupport',
      ],
      cta: 'Starta gratis provperiod',
    },
    partner: {
      name: 'Multi-butik & Partner',
      price: 'Skräddarsytt',
      note: 'Återförsäljare och kedjor',
      features: [
        'Multi-butiksvy över alla platser',
        'White-label-branding',
        'Återförsäljarkonsol',
        'Volympris',
      ],
      cta: 'Prata med oss',
    },
  },
  finalCta: {
    titleA: 'Kör du redan',
    titleHighlight: 'Avigilon Alta',
    titleB: '?',
    body: 'Du är 60 sekunder från ditt första besöksdiagram.',
    cta: 'Starta gratis provperiod',
  },
  footer: {
    tagline: 'En produkt från Raptix AB',
    privacy: 'Integritet',
    terms: 'Villkor',
    contact: 'hello@raptix.se',
  },
} as const;
