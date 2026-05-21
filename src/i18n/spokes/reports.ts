import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/rapporter/',
  en: '/en/retail/reports/',
};

export const meta = {
  sv: {
    title: 'Rapporter — Reveal för din butik',
    description:
      'Schemalagda handels- och HACCP-rapporter mejlas till rätt person varje vecka. Inga manuella sammanställningar, ingen panik före revisionen.',
  },
  en: {
    title: 'Reports — Reveal for your store',
    description:
      'Scheduled trading and HACCP reports land in the right inbox every week. No manual summaries, no pre-inspection panic.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Rapporten skrivs själv.',
    titleHighlight: 'Du vidarebefordrar bara.',
    subtitle:
      'Reveal mejlar besökarstatistik, beläggning, HACCP-temperaturer och alla dina sensorer till rätt person på rätt dag. Inga manuella sammanställningar, ingen pärm, ingen panik på fredag eftermiddag.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'En timme. Varje vecka. Per butik.',
    body: [
      'Manuella veckorapporter äter en timme av varje butikschefs vecka. Besökarsiffrorna ska sammanställas. Beläggningen ska jämföras med förra månaden. HACCP-pärmen ska uppdateras. Multiplicera med fjorton butiker — det är två arbetsdagar per månad som försvinner i Excel.',
      'Och rapporten är fortfarande bara ett ögonblick. Nästa vecka börjar samma jobb om.',
      'Allt löses av samma sak: rapporter som skriver sig själva — för varje räknare, varje sensor — och hamnar i rätt persons inkorg utan att någon behöver komma ihåg.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Sätt upp en rapport på två minuter',
    steps: [
      {
        title: 'Välj rapport-typ',
        body: 'Besöksrapport, beläggning, kö, HACCP-temperaturer, miljösensorer eller en anpassad sammanställning. Per butik eller över hela kedjan.',
      },
      {
        title: 'Sätt mottagare och frekvens',
        body: 'En mottagare eller flera. Varje måndag morgon, första veckan i månaden, eller på datum du själv väljer.',
      },
      {
        title: 'Reveal mejlar PDF:en automatiskt',
        body: 'Allt arkiveras också i appen så du kan ladda ned tidigare rapporter när som helst. Inget glöms, inget tappas.',
      },
    ],
  },
  features: {
    eyebrow: 'Rapport-typer',
    title: 'En rapport för varje sensor och räknare',
    items: [
      {
        title: 'Besöks- och kö-rapport',
        body: 'Räknardata sammanställd per dag, vecka eller månad. Det enklaste sättet att svara på "hur går det?" — utan att logga in.',
        bullets: [
          'Besöksantal per butik med jämförelse mot typisk vecka',
          'Köhändelser, varaktighet och åtgärd',
          'Topp-timmar och peak-dagar',
          'Multi-butiksvy aggregerar hela kedjan',
        ],
      },
      {
        title: 'Beläggningsrapport',
        body: 'Hur fullt är det i butiken över dygnet och veckan? Reveal sammanställer beläggningen mot din kapacitet och visar var och när du toppar.',
        bullets: [
          'Genomsnittlig och peak-beläggning per period',
          'Kapacitetsutnyttjande i %',
          'Distribution: hur ofta du har 20, 40, 60 personer',
          'Tröskel-överskridanden tidsstämplade',
        ],
      },
      {
        title: 'HACCP-temperaturrapport',
        body: 'Klar för Livsmedelsverkets revision — alla kylar och frysar, alla avvikelser, alla åtgärder. PDF som du laddar ned eller mejlar vidare.',
        bullets: [
          'Tidsstämplad temperaturlogg per kyl/frys',
          'Avvikelser med start, peak, varaktighet och åtgärd',
          '"Klart för egenkontroll"-status om allt är inom gräns',
          'Lagras enligt branschpraxis för spårbarhet',
        ],
      },
      {
        title: 'Miljö- och sensorrapport',
        body: 'Allt utanför HACCP — rumstemperatur, luftfuktighet, anpassade sensorer. Användbart för facility management och arbetsmiljö-uppföljning.',
        bullets: [
          'Per sensor och per butik',
          'Tröskel-överskridanden och stale-händelser',
          'Mätarens uptime — vilka sensorer rapporterar och vilka inte',
        ],
      },
      {
        title: 'Anpassade perioder och format',
        body: 'Revisorn vill ha Q1? Chefen vill ha 90 dagar bakåt? Välj sektioner, period och butiker — exportera vad som helst, när som helst.',
      },
      {
        title: 'Arkiv i appen',
        body: 'Alla genererade rapporter sparas så du kan gå tillbaka och hämta dem. Ingen rapport försvinner i ett gammalt mejlskåp.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Vilka format finns?',
        a: 'PDF för delning och inspektion, och en strukturerad sammanställning i appen för djupare analys. Du kan också exportera underliggande data som CSV vid behov.',
      },
      {
        q: 'Kan jag skicka till flera mottagare?',
        a: 'Ja. Varje rapport kan ha flera mottagare — t.ex. butikschef, distriktschef och kvalitetsansvarig. Du kan också sätta separata rapporter för olika team.',
      },
      {
        q: 'Vad innehåller HACCP-rapporten?',
        a: 'En tidsstämplad temperaturlogg per kyl, frys och ambient-sensor, med alla avvikelser ovanför kritiska gränser. Varje avvikelse har start, peak, varaktighet och vem som åtgärdade. Designad för att kunna lämnas in direkt till en livsmedelsinspektör.',
      },
      {
        q: 'Hur långt tillbaka i tiden kan jag exportera?',
        a: 'Hela din historik så långt tillbaka som ditt Avigilon Alta-konto sträcker sig. När du kopplar in Reveal importerar vi historisk räknardata så du har trender från dag ett.',
      },
      {
        q: 'Kostar rapporterna extra?',
        a: 'Nej. Obegränsat antal rapporter ingår i Starter-planen. Schemalagda, ad hoc, vilka som helst — samma pris.',
      },
      {
        q: 'Kan jag uppdatera mall eller layout?',
        a: 'Ja, för anpassade rapporter. Du väljer vilka sektioner som ingår, vilken period och vilka butiker. Standardrapporterna har en fast layout som passar 90% av användarna.',
      },
      {
        q: 'Får alla sensorer en egen rapport?',
        a: 'Ja. Räknare (besökare, kö, beläggning), miljösensorer (temperatur, luftfuktighet) och anpassade sensorer kan alla rapporteras separat eller bakas in i en samlad rapport. Du väljer per rapport vad som ingår.',
      },
      {
        q: 'Är beläggningsrapporten relevant för andra än livsmedelsbutiker?',
        a: 'Absolut. Vilken plats med kapacitetstak — köpcenter, museum, gym, restaurang — använder samma siffror för säkerhet, planering och bemanning.',
      },
    ],
  },
  finalCta: {
    title: 'Schemalägg din första rapport idag',
    body: 'Två minuter att sätta upp, och rapporten landar i inkorgen varje vecka. Aldrig mer Excel-helgen.',
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
        title: 'HACCP & egenkontroll',
        href: '/haccp/',
        body: 'Automatisk temperaturövervakning med audit-trail.',
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
    title: 'The report writes itself.',
    titleHighlight: 'You just forward it on.',
    subtitle:
      'Reveal emails visitor stats, occupancy, HACCP temperatures and every sensor to the right person on the right day. No manual summaries, no paper folder, no panic on Friday afternoon.',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'One hour. Every week. Per site.',
    body: [
      "Manual weekly reports eat an hour of every store manager's week. Visitor numbers need totaling. Occupancy compared with last month. The HACCP folder updated. Multiply by fourteen sites — that's two working days a month gone to Excel.",
      "And the report is still just a snapshot. Next week the same job starts over.",
      'All of it is solved by the same thing: reports that write themselves — for every counter, every sensor — and land in the right inbox without anyone needing to remember.',
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'Set up a report in two minutes',
    steps: [
      {
        title: 'Pick a report type',
        body: 'Visitor report, occupancy, queue, HACCP temperatures, environmental sensors, or a custom summary. Per site or across the whole chain.',
      },
      {
        title: 'Set recipients and frequency',
        body: 'One recipient or several. Every Monday morning, the first week of the month, or on a date you choose.',
      },
      {
        title: 'Reveal emails the PDF automatically',
        body: 'Everything is also archived in the app so you can download past reports anytime. Nothing forgotten, nothing lost.',
      },
    ],
  },
  features: {
    eyebrow: 'Report types',
    title: 'A report for every sensor and counter',
    items: [
      {
        title: 'Visitor & queue report',
        body: 'Counter data summarised by day, week or month. The simplest way to answer "how are we doing?" without logging in.',
        bullets: [
          'Visitor counts per site compared against a typical week',
          'Queue events, duration and action taken',
          'Peak hours and busiest days',
          'Multi-site view aggregates the whole chain',
        ],
      },
      {
        title: 'Occupancy report',
        body: 'How full is the store across the day and week? Reveal summarises occupancy against your capacity and shows where and when you peak.',
        bullets: [
          'Average and peak occupancy per period',
          'Capacity utilisation in %',
          'Distribution: how often you have 20, 40, 60 people',
          'Threshold breaches timestamped',
        ],
      },
      {
        title: 'HACCP temperature report',
        body: "Ready for food-safety inspection — every fridge and freezer, every breach, every action. A PDF you download or forward on.",
        bullets: [
          'Timestamped temperature log per fridge / freezer',
          'Breaches with start, peak, duration, resolution',
          '"Ready to file" status when everything is in range',
          'Retained to industry standards for traceability',
        ],
      },
      {
        title: 'Environmental & sensor report',
        body: 'Everything outside HACCP — ambient temperature, humidity, custom sensors. Useful for facility management and workplace-environment follow-up.',
        bullets: [
          'Per sensor and per site',
          'Threshold breaches and stale events',
          'Sensor uptime — which ones are reporting and which are not',
        ],
      },
      {
        title: 'Custom periods and formats',
        body: 'Auditor wants Q1? Head office wants 90 days back? Pick sections, period and sites — export anything, anytime.',
      },
      {
        title: 'Archive in the app',
        body: "Every generated report is saved so you can come back for it. No report buried in someone's old inbox.",
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'Which formats are available?',
        a: 'PDF for sharing and inspection, plus a structured view in the app for deeper analysis. You can also export the underlying data as CSV when needed.',
      },
      {
        q: 'Can I send to multiple recipients?',
        a: 'Yes. Every report can have several recipients — store manager, district manager, quality lead. You can also set up separate reports for different teams.',
      },
      {
        q: 'What does the HACCP report contain?',
        a: 'A timestamped temperature log per fridge, freezer and ambient sensor, with every breach above critical limits. Each breach shows start, peak, duration and who acted. Designed to be handed directly to a food-safety inspector.',
      },
      {
        q: 'How far back can I export?',
        a: 'Your full history, as far back as your Avigilon Alta account goes. When you connect Reveal, we import historic counter data so you have trends from day one.',
      },
      {
        q: 'Do reports cost extra?',
        a: 'No. Unlimited reports are included in the Starter plan. Scheduled, ad-hoc, any number — same price.',
      },
      {
        q: 'Can I customise the template?',
        a: "Yes, for custom reports. You pick the sections, the period and the sites. The standard reports have a fixed layout that fits 90% of users.",
      },
      {
        q: 'Does every sensor get its own report?',
        a: 'Yes. Counters (visitors, queue, occupancy), environmental sensors (temperature, humidity) and custom sensors can each be reported separately or rolled into a combined report. You choose per report what to include.',
      },
      {
        q: 'Is the occupancy report relevant outside grocery?',
        a: 'Absolutely. Any venue with a capacity cap — shopping centres, museums, gyms, restaurants — uses the same numbers for safety, planning and staffing.',
      },
    ],
  },
  finalCta: {
    title: 'Schedule your first report today',
    body: 'Two minutes to set up, and the report lands in the inbox every week. No more Excel weekends.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Queue management & alerts',
        href: '/en/retail/queue-alerts/',
        body: 'Measure the checkout queue live and get push alerts before customers leave.',
      },
      {
        title: 'HACCP & food safety',
        href: '/en/haccp/',
        body: 'Automatic temperature monitoring with full audit trail.',
      },
      {
        title: 'All features',
        href: '/en/retail/',
        body: 'See the full Reveal package for your store.',
      },
    ],
  },
};
