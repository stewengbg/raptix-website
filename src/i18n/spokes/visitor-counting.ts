import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/besoksstatistik/',
  en: '/en/retail/visitor-counting/',
};

export const meta = {
  sv: {
    title: 'Besöksstatistik live — Reveal för din butik',
    description:
      'Timvis besöksflöde live, jämfört med en typisk vecka. Multi-butiksvy från en skärm. Historisk data importeras vid anslutning — börja med veckors trender.',
  },
  en: {
    title: 'Live visitor analytics — Reveal for your store',
    description:
      'Hourly footfall live, compared to a typical week. Multi-site fleet view from a single screen. Historic data imported on connect — start with weeks of trends.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Förstå dina besökare',
    titleHighlight: 'från första timmen',
    subtitle:
      'Timvis besöksflöde live, jämfört med en typisk vecka. Multi-butiksvy från en skärm. Historisk data importeras vid anslutning så du börjar med veckors trender — inte en tom graf.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Magkänsla räcker inte längre.',
    body: [
      'Du vet att fredagen är livlig. Men hur livlig jämfört med förra fredagen? Hur livlig jämfört med samma fredag förra året?',
      'Manuell räkning är opålitlig. Excel-export från Avigilon är jobbig. Och ingen vet vad "typiskt" är — för "typiskt" beror på veckodag, väder, månad, och fyra andra saker.',
      'Reveal räknar åt dig, jämför mot fyra veckors median för exakt samma veckodag och tidpunkt, och säger "ja, det här är ovanligt" eller "nej, det här är normalt".',
      'Samma anslutning driver också resten av butikens vardag. Reveal är <a href="/en/retail/">hela produktpaketet för butik</a>: <a href="/en/retail/queue-alerts/">kölarm i kassan</a> när kön växer, <a href="/en/retail/in-store-screens/">TV-skärmar i personalrummet</a> som visar dagens takt live, <a href="/en/retail/reports/">automatiska veckorapporter</a> som mejlas till rätt person, och <a href="/en/multi-site/">multi-butiksvyn för kedjor</a> för distriktschefen.',
      'Om butiken också hanterar livsmedel driver samma Alta-anslutning även <a href="/haccp/egenkontroll-temperatur-mall/">egenkontroll temperatur mall livsmedel</a> — automatisk loggning av kyl- och frystemperaturer med färdig PDF varje vecka.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från Alta-räknare till insikt',
    steps: [
      {
        title: 'Koppla in ditt Alta-konto',
        body: 'Reveal hittar alla räknare — entré, kassa, avdelningar — och importerar din historiska data direkt. Inga manuella CSV-uppladdningar.',
      },
      {
        title: 'Mappa räknare till KPI:er',
        body: 'Peka ut vilken räknare som mäter besökare (vanligtvis entrén), vilken som mäter beläggning, vilken som mäter kö. Drag-drop. Klart på 2 minuter.',
      },
      {
        title: 'Live från dag ett',
        body: 'Hourly chart för idag, jämförelse mot typisk fredag, peak-prognoser. Du behöver inte vänta tre månader på att samla baseline-data — den är redan där.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt du behöver för att förstå dina besökare',
    items: [
      {
        title: 'Realtidsräkning med jämförelse',
        body: 'Hourly besöksflöde med en streckad referenslinje som visar din typiska fredag. Är du över? Under? Reveal säger det direkt — "Idag är +24% mot typisk fredag".',
      },
      {
        title: 'Multi-butiksvy från en skärm',
        body: 'Distriktschefen ser alla butiker bredvid varandra med busy level, kö-status, dagstakt och 7-dagars trend. Behöver bara titta en gång — och vet vilken butik som behöver attention.',
      },
      {
        title: 'Hour-of-week aktivitetsheatmap',
        body: 'Vilka timmar varje veckodag är dina mest pressade? Reveal visar det som ett färgkodat raster — senaste 7, 28 eller 90 dagarna. Bemanning på data, inte gissning.',
        bullets: [
          'Heatmap per timme och veckodag',
          'Filtrera på sajt och datumintervall',
          'Jämför med samma vecka föregående år',
          'Exportera bild eller CSV',
        ],
      },
      {
        title: 'Historisk data importerad vid start',
        body: 'När du kopplar in Alta importerar Reveal räknardata bakåt i tiden. Hour-of-week-mönstret funkar dag ett. Du startar inte från noll.',
      },
      {
        title: 'Aisle activity (per hylla)',
        body: 'Om dina Alta-kameror räknar passager per gång eller hylla, surfar Reveal upp datan. Vilka avdelningar dominerar besöksflödet? Var hänger folk?',
      },
      {
        title: 'Handelstid-medveten',
        body: 'Reveal vet när du har öppet. Mätvärdena visas bara under handelstid — ingen brus från nattens städning eller leveranser.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Vilka kameror behövs?',
        a: 'Vilken Avigilon Alta-kamera som helst med people-counting eller line-crossing-analys aktiverad. Vanligtvis är det redan på på entré-kameror. Reveal hittar dem automatiskt.',
      },
      {
        q: 'Hur exakt är räkningen?',
        a: 'Beror på Alta-kamerans noggrannhet, vinkeln och belysningen. På standardentré-installation är noggrannheten typiskt 95-98%. Reveal räknar inte själv — den läser de värden Alta redan beräknar.',
      },
      {
        q: 'Hur långt tillbaka i tiden ser jag data?',
        a: 'Så långt tillbaka som ditt Avigilon Alta-konto håller datan. Vid första anslutning importerar Reveal allt — kan vara veckor, månader, ibland år beroende på din Alta-konfiguration.',
      },
      {
        q: 'Räknas anställda och leveranser också?',
        a: 'Tekniskt sett ja — Alta-räknare gör inte skillnad. Du kan dock filtrera bort tid utanför öppettider, och du kan markera vissa räknare som "personal-entré" så att huvudsiffrorna inte blandar in dem.',
      },
      {
        q: 'Kan jag jämföra olika butiker?',
        a: 'Ja, multi-butiksvyn lägger butikerna sida vid sida med samma KPI:er. Du ser direkt vilka som är livligare och lugnare än normalt — utan att jämföra manuellt.',
      },
      {
        q: 'Vad är "typisk" baserat på?',
        a: 'Reveal räknar typ-värdet som medianen av samma veckodag och samma timme under de senaste fyra veckorna. Det är robust mot enstaka avvikande dagar (helgdag, brandlarm, etc.) och uppdateras automatiskt.',
      },
    ],
  },
  finalCta: {
    title: 'Se dina riktiga besökarmönster idag',
    body: 'Koppla in Alta, peka ut entré-räknaren, öppna översikten. Veckor av trend, sekunder att sätta upp.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Personräknare butik',
        href: '/butik/personraknare/',
        body: 'Räkna besökare med dina befintliga Alta-kameror — jämförelse mot fristående räknare och kostnad.',
      },
      {
        title: 'Konverteringsgrad butik — mäta',
        href: '/butik/konverteringsgrad/',
        body: 'Koppla besöksdatan mot försäljningen och räkna ut konvertering per timme, dag och butik.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Schemalagda PDF-rapporter via mejl.',
      },
    ],
  },
};

export const en: SpokeContent = {
  eyebrow: 'For your store',
  hero: {
    title: 'Understand your visitors',
    titleHighlight: 'from the first hour',
    subtitle:
      "Hourly footfall live, compared to a typical week. Multi-site fleet view from a single screen. Historic data imported on connect so you start with weeks of trends — not an empty chart.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: "Gut feel isn't enough anymore.",
    body: [
      "You know Friday is busy. But how busy compared to last Friday? Compared to the same Friday last year?",
      "Manual counting isn't reliable. Excel exports from Avigilon are tedious. And no one really knows what \"typical\" means — because \"typical\" depends on weekday, weather, month and four other things.",
      "Reveal counts for you, compares against a four-week median for the exact same weekday and hour, and tells you \"this is unusual\" or \"this is normal\".",
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From Alta counter to insight',
    steps: [
      {
        title: 'Connect your Alta account',
        body: 'Reveal finds all your counters — entrance, checkout, sections — and imports your historic data on the spot. No manual CSV uploads.',
      },
      {
        title: 'Map counters to KPIs',
        body: 'Point at which counter measures visitors (usually the entrance), which measures occupancy, which measures the queue. Drag-drop. Done in 2 minutes.',
      },
      {
        title: 'Live from day one',
        body: 'Hourly chart for today, comparison vs. typical Friday, peak forecasts. No need to wait three months to build a baseline — it’s already there.',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to understand visitors',
    items: [
      {
        title: 'Real-time counting with comparison',
        body: 'Hourly footfall with a dashed reference line showing your typical Friday. Above? Below? Reveal tells you instantly — "Today is +24% vs. typical Friday".',
      },
      {
        title: 'Multi-site fleet view',
        body: "District manager sees every store side by side with busy level, queue status, day pace and 7-day trend. One glance — and you know which store needs attention.",
      },
      {
        title: 'Hour-of-week activity heatmap',
        body: "Which hours of which weekday are your busiest? Reveal shows it as a colour-coded grid — last 7, 28 or 90 days. Staff on data, not guesses.",
        bullets: [
          'Heatmap by hour and weekday',
          'Filter by site and date range',
          'Compare against the same week last year',
          'Export as image or CSV',
        ],
      },
      {
        title: 'Historic data imported on connect',
        body: "When you connect Alta, Reveal imports counter data backwards. The hour-of-week pattern works day one. You don't start from zero.",
      },
      {
        title: 'Aisle activity (per section)',
        body: 'If your Alta cameras count passages per aisle or section, Reveal surfaces that. Which departments dominate the foot traffic? Where do people linger?',
      },
      {
        title: 'Trading-hours aware',
        body: "Reveal knows when you're open. Metrics show only during trading hours — no noise from overnight cleaning or deliveries.",
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'Which cameras do I need?',
        a: 'Any Avigilon Alta camera with people-counting or line-crossing analytics enabled. Usually this is already on for entrance cameras. Reveal discovers them automatically.',
      },
      {
        q: 'How accurate is the counting?',
        a: "It depends on the Alta camera's accuracy, angle and lighting. For a standard entrance install, accuracy is typically 95–98%. Reveal doesn't count itself — it reads the values Alta already calculates.",
      },
      {
        q: 'How far back does the data go?',
        a: "As far back as your Avigilon Alta account keeps it. On first connect, Reveal imports everything — could be weeks, months, sometimes years depending on your Alta configuration.",
      },
      {
        q: 'Do staff and deliveries get counted too?',
        a: 'Technically yes — Alta counters don\'t distinguish. You can filter out time outside trading hours, and you can mark certain counters as "staff entrance" so the main numbers don\'t mix them in.',
      },
      {
        q: 'Can I compare across sites?',
        a: 'Yes, the multi-site view places stores side by side with the same KPIs. You see immediately which are busier or quieter than normal — without comparing manually.',
      },
      {
        q: 'What is "typical" based on?',
        a: 'Reveal computes typical as the median of the same weekday and hour across the last four weeks. It\'s robust against one-off outliers (bank holiday, fire alarm, etc.) and updates automatically.',
      },
    ],
  },
  finalCta: {
    title: 'See your real visitor patterns today',
    body: 'Connect Alta, point at your entrance counter, open the overview. Weeks of trend, seconds to set up.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Queue management & alerts',
        href: '/en/retail/queue-alerts/',
        body: 'Live queue measurement and push alerts.',
      },
      {
        title: 'In-store screens',
        href: '/en/retail/in-store-screens/',
        body: 'TV-ready dashboards with no login required.',
      },
      {
        title: 'Reports',
        href: '/en/retail/reports/',
        body: 'Scheduled PDF reports by email.',
      },
    ],
  },
};
