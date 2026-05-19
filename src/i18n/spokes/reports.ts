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
      'Reveal mejlar veckans handels- och HACCP-rapport till rätt person på rätt dag. Inga manuella sammanställningar, ingen pärm, ingen panik på fredag eftermiddag.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'En timme. Varje vecka. Per butik.',
    body: [
      'Manuella veckorapporter äter en timme av varje butikschefs vecka. Multiplicera med fjorton butiker — det är två arbetsdagar per månad som försvinner i Excel.',
      'HACCP-pärmen är värre. När inspektören står i dörren ska du visa tre månaders temperaturlogg per kyl. Är pärmen uppdaterad? Ligger den ens på rätt plats?',
      'Båda problemen löses av samma sak: rapporter som skriver sig själva och hamnar i inkorgen utan att någon behöver komma ihåg.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Sätt upp en rapport på två minuter',
    steps: [
      {
        title: 'Välj rapport-typ',
        body: 'Handelsrapport, HACCP-temperaturrapport eller en anpassad sammanställning. Per butik eller över hela kedjan.',
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
    eyebrow: 'Funktioner',
    title: 'Allt din rapportering behöver',
    items: [
      {
        title: 'Handelsrapport — vecko eller månad',
        body: 'Besökare, kö, peak-tider, jämförelse mot förra perioden. Sammanställd per butik eller över hela kedjan.',
        bullets: [
          'Besöksantal med jämförelse mot typisk vecka',
          'Topp-timmar och dagar',
          'Köhändelser och deras varaktighet',
          'Per butik eller aggregerat över kedjan',
        ],
      },
      {
        title: 'HACCP-rapport för egenkontrollen',
        body: 'Klar för Livsmedelsverkets revision — alla sensorer, alla avvikelser, alla åtgärder. PDF som du laddar ned eller mejlar vidare.',
        bullets: [
          'Tidsstämplad temperaturlogg per kyl/frys',
          'Avvikelser med start, peak, varaktighet och åtgärd',
          '"Klart för egenkontroll"-status om allt är inom gräns',
          'Lagras enligt branschpraxis för spårbarhet',
        ],
      },
      {
        title: 'Anpassade perioder och format',
        body: 'Revisorn vill ha Q1? Chefen vill ha 90 dagar bakåt? Exportera vad som helst, när som helst — utan att vänta på nästa schemalagda runda.',
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
        a: 'Ja, för anpassade rapporter. Du väljer vilka sektioner som ingår, vilken period och vilka butiker. Standardrapporterna (handel + HACCP) har en fast layout som passar 90% av användarna.',
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
      "Reveal emails your weekly trading and HACCP reports to the right person on the right day. No manual summaries, no paper folder, no panic on Friday afternoon.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'One hour. Every week. Per site.',
    body: [
      "Manual weekly reports eat an hour of every store manager's week. Multiply by fourteen sites — that's two working days a month gone to Excel.",
      "The HACCP folder is worse. When the inspector walks in, you need three months of temperature logs per fridge. Is the folder up to date? Is it even in the right place?",
      'Both problems are solved by the same thing: reports that write themselves and land in your inbox without anyone needing to remember.',
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'Set up a report in two minutes',
    steps: [
      {
        title: 'Pick a report type',
        body: 'Trading report, HACCP temperature report or a custom summary. Per site or across the whole chain.',
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
    eyebrow: 'Features',
    title: 'Everything your reporting needs',
    items: [
      {
        title: 'Trading report — weekly or monthly',
        body: 'Visitors, queue, peak hours, comparison vs. the previous period. Per site or aggregated across the chain.',
        bullets: [
          'Visitor counts compared against a typical week',
          'Peak hours and days',
          'Queue events and their duration',
          'Per site or aggregated across the chain',
        ],
      },
      {
        title: 'HACCP report for food-safety compliance',
        body: "Ready for inspection — every sensor, every breach, every action. A PDF you download or forward on.",
        bullets: [
          'Timestamped temperature log per fridge / freezer',
          'Breaches with start, peak, duration, resolution',
          '"Ready to file" status when everything is in range',
          'Retained to industry standards for traceability',
        ],
      },
      {
        title: 'Custom periods and formats',
        body: 'Auditor wants Q1? Head office wants 90 days back? Export anything, anytime — without waiting for the next scheduled run.',
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
        a: "Yes, for custom reports. You pick the sections, the period and the sites. The standard reports (trading + HACCP) have a fixed layout that fits 90% of users.",
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
