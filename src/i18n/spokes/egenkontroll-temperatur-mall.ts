import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/haccp/egenkontroll-temperatur-mall/',
  en: '/en/',
};

export const meta = {
  sv: {
    title: 'Egenkontroll temperatur — automatisk mall & logg',
    description:
      'Ersätt papperspärmen med automatisk temperaturloggning från Alta-sensorerna. Färdig PDF som uppfyller Livsmedelsverkets krav — mejlas varje vecka.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'HACCP & egenkontroll',
  hero: {
    title: 'Egenkontroll för temperatur',
    titleHighlight: 'utan pärm, utan handskrivning',
    subtitle:
      'De flesta livsmedelsverksamheter använder fortfarande en papperspärm med handskrivna temperaturvärden. Reveal ersätter den med automatisk loggning från dina Avigilon Alta-sensorer och en färdig PDF-rapport som mejlas varje vecka — redo att visa inspektören.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se mallen som skrivs automatiskt',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Manuella temperaturmallar misslyckas där det spelar mest roll',
    body: [
      'Enligt Livsmedelsverkets regelverk är egenkontroll av kyl- och frystemperaturer obligatoriskt. Standardimplementeringen är fortfarande en pärm som hänger på sidan av kylen där personalen ska skriva in värden ett par gånger per dag.',
      'Det systemet fungerar sällan i praktiken. Värden glöms bort på helger. Handskriften är oläslig efter tre månader. Pärmen ligger på fel plats när inspektören dyker upp. Och när en kyl faktiskt går sönder klockan tre på natten står det ingen där för att notera det.',
      'Reveal ersätter hela mallen. Alta-sensorerna loggar värdet var 60:e sekund dygnet runt. Alla avvikelser hamnar i en händelselogg med start, peak, varaktighet och åtgärd. En färdig PDF-rapport genereras varje vecka och mejlas till butikschef och kvalitetsansvarig — samma format inspektören förväntar sig.',
    ],
  },
  howItWorks: {
    eyebrow: 'Så funkar det',
    title: 'Från papper till automatiserad egenkontroll',
    steps: [
      {
        title: 'Anslut Alta-sensorerna',
        body: 'Reveal upptäcker automatiskt alla temperatursensorer inkopplade till din Avigilon Alta-installation — kylar, frysar, rumstemperatur, luftfuktighet.',
      },
      {
        title: 'Sätt gränser en gång',
        body: 'Välj mall (Kyl / Frys / Rum / Anpassad) eller sätt egna trösklar. Reveal använder hysteres så du slipper falsklarm från en 30-sekunders strömspik.',
      },
      {
        title: 'PDF-mallen skrivs automatiskt',
        body: 'Varje vecka mejlas en färdig HACCP-rapport till mottagarlistan. Alla värden, alla avvikelser, alla åtgärder — i formatet Livsmedelsverkets inspektörer känner igen.',
      },
    ],
  },
  features: {
    eyebrow: 'Vad du får',
    title: 'Allt egenkontrollen kräver, minus arbetet',
    items: [
      {
        title: 'Dygnet-runt-loggning per sensor',
        body: 'Ingen ska behöva komma ihåg att skriva ner värden. Sensorerna rapporterar var 60:e sekund. Datan sparas oförändrad i minst 3 år (branschstandard för spårbarhet).',
      },
      {
        title: 'Automatisk avvikelselogg',
        body: 'När en sensor går över kritisk gräns skapas en händelse: start, peak-värde, varaktighet, vem som fick larmet och vem som åtgärdade. Fullt revisionsspår.',
      },
      {
        title: 'Färdig PDF varje vecka',
        body: 'Rapporten innehåller sensorer, gränsvärden, status per sensor och en sammanfattning av veckans avvikelser. "Klar för egenkontroll"-status om allt är inom gräns.',
      },
      {
        title: 'Anpassade perioder på begäran',
        body: 'Inspektören vill ha förra kvartalet? En specifik månad? Exportera vilken period som helst från appen — utan att vänta på nästa schemalagda rapport.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Frågor om egenkontroll av temperatur',
    items: [
      {
        q: 'Uppfyller den automatiska rapporten Livsmedelsverkets krav?',
        a: 'Ja, mallen är designad för att uppfylla kraven för egenkontroll av kyl-, frys- och rumstemperatur enligt Livsmedelsverkets riktlinjer. Rapporten visar sensor, gränsvärde, status, avvikelsehistorik och åtgärder. Slutansvaret för egenkontrollen ligger dock alltid hos verksamhetsutövaren — Reveal producerar underlaget.',
      },
      {
        q: 'Hur ofta läses värdena av?',
        a: 'Var 60:e sekund. Det är tätare än vad manuella pärmar någonsin klarar och räcker med god marginal för alla vanliga inspektionsformer.',
      },
      {
        q: 'Behöver jag byta ut mina temperatursensorer?',
        a: 'Nej — förutsatt att du redan har temperatursensorer inkopplade till din Avigilon Alta-installation. Alta stödjer flera vanliga sensor-typer (Anviz, Axis, ACRE m.fl.). Om du saknar sensor i en kyl behöver du komplettera, men annars använder Reveal det som redan finns.',
      },
      {
        q: 'Vilken retention gäller för temperatur-loggen?',
        a: 'Reveal sparar den strukturerade loggen i minst 3 år — vilket är branschstandarden för HACCP-spårbarhet. Kontakta oss om verksamheten behöver längre retention (t.ex. kött- och fiskbranschen kan ha särskilda krav).',
      },
      {
        q: 'Vem får rapporten mejlad?',
        a: 'Du väljer själv mottagarna — vanligtvis butikschef och kvalitetsansvarig. Du kan sätta flera mottagare per rapport och olika mottagare för olika rapporttyper (t.ex. veckorapport till butiken, månadsrapport till huvudkontoret).',
      },
      {
        q: 'Vad händer om internetuppkopplingen går ned?',
        a: 'Sensorerna fortsätter mäta och lagras lokalt på Alta-enheten. När uppkopplingen kommer tillbaka synkas allt till Reveal och luckan syns i händelseloggen. Du får en notis om en sensor är offline längre än en tröskel du själv sätter.',
      },
    ],
  },
  finalCta: {
    title: 'Slut på egenkontroll-pärmen',
    body: 'Anslut sensorerna, sätt gränser en gång, och rapporten skrivs sig själv varje vecka. 30 dagar gratis.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Temperaturlarm för kyl och frys',
        href: '/haccp/temperaturlarm-kyl-frys/',
        body: 'Larm direkt när en sensor går över kritisk gräns — utan falsklarm.',
      },
      {
        title: 'HACCP & egenkontroll — översikt',
        href: '/haccp/',
        body: 'Hela HACCP-lösningen, funktioner och prisbild.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Se hur schemalagda rapporter mejlas till rätt person.',
      },
    ],
  },
};
