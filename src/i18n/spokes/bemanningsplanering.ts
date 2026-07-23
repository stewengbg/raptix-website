import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/bemanningsplanering/',
  en: '/en/',
};

export const meta = {
  sv: {
    title: 'Bemanningsplanering i butik med besöksdata',
    description:
      'Schemalägg personal efter riktiga besöksmönster — hour-of-week-heatmap och väderkorrelation från dina Alta-kameror. Sluta gissa, planera på data.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Bemanna butiken på riktig data',
    titleHighlight: 'inte gissningar',
    subtitle:
      'Reveals hour-of-week-heatmap visar exakt vilka timmar och veckodagar dina besökare faktiskt kommer — inte vad du tror. Kombinera med väderkorrelation och du kan planera personalen med samma säkerhet som du planerar dina inköp.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur heatmap:en fungerar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Schema baserat på förra veckan är oftast redan fel vecka',
    body: [
      'De flesta butikschefer bygger schemat utifrån vad de "tror" händer — kompletterat med förra veckans försäljning. Problemet är att både magkänsla och försäljningssiffror är trubbiga verktyg. Försäljningen säger inget om timmar utan köp, och magkänslan färgas av senaste tre kunderna du pratade med.',
      'Resultatet blir underbemanning vid oväntade toppar (kunder lämnar för att de inte får hjälp) och överbemanning vid lugna perioder (dyr personaltid utan intäkt). Båda kostar direkt i marginalen.',
      'Reveals besöksdata från Alta-kamerorna visar det verkliga mönstret. Hour-of-week-heatmap visar exakt vilka 168 timmar i veckan som är dina livligaste. Väderkorrelation via SMHI säger dig om nästa fredag ska bemanas som en "normal fredag" eller som en "regnig fredag med kunder som väntar". Sen är schemat en fråga om data — inte gissningar.',
    ],
  },
  howItWorks: {
    eyebrow: 'Så funkar det',
    title: 'Från besöksmönster till rätt schema på tre steg',
    steps: [
      {
        title: 'Reveal räknar dina besökare automatiskt',
        body: 'Anslut ditt Avigilon Alta-konto. Besöksdatan strömmar in i realtid och historiken från Alta importeras direkt så du får veckor av mönster från dag ett.',
      },
      {
        title: 'Studera hour-of-week-heatmap',
        body: 'Se vilka timmar som konsekvent är livligast per veckodag. Ofta är mönstret annorlunda än vad butikschefen intuit — särskilt runt lunch, stängning och helger.',
      },
      {
        title: 'Justera schemat efter datan',
        body: 'Bemanna upp där heatmap:en är mörk (mycket besök) och ner där den är ljus (få besök). Använd väderprognosen från SMHI-integrationen för att förutspå avvikelser från det typiska mönstret.',
      },
    ],
  },
  features: {
    eyebrow: 'Vad du får',
    title: 'Verktygen som gör bemanningen till datadriven verksamhet',
    items: [
      {
        title: 'Hour-of-week aktivitetsheatmap',
        body: 'Färgkodad grid — 7 dagar × 24 timmar. Mörkare = mer aktivitet. Baserat på median av senaste 7, 28 eller 90 dagarna. Robust mot enstaka avvikande dagar.',
      },
      {
        title: 'Väderkorrelation via SMHI',
        body: 'Reveal hämtar väderdata för din butiks plats och visar hur nederbörd, temperatur och solighet påverkar besöken historiskt. Nästa regniga fredag vet du vad du kan förvänta dig.',
      },
      {
        title: 'Peak-prognos för idag',
        body: 'Baserat på pace mot en typisk dag flaggar Reveal när kvällens peak-timme förväntas — så du kan flytta in extra personal från lagret innan trycket kommer.',
      },
      {
        title: 'Jämförelser mellan butiker',
        body: 'Multi-butiksvyn låter distriktschefen jämföra heatmaps mellan butiker. Om två stora butiker har olika mönster är det ofta ett tecken på lokala händelser eller sortimentsförändringar värda att gräva i.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Om bemanning utifrån besöksdata',
    items: [
      {
        q: 'Vad är en hour-of-week-heatmap?',
        a: 'En rutgrid med 7 dagar och 24 timmar där färgen visar hur livligt det brukar vara vid varje timme och veckodag. Mörkare fält = fler besökare. Reveal räknar värdet som medianen av samma timme och veckodag under de senaste 28 dagarna (justerbart till 7 eller 90).',
      },
      {
        q: 'Hur långt tillbaka behöver jag data för att mönstret ska bli tillförlitligt?',
        a: 'Ungefär 4 veckor för att en säsongsjusterad median ska bli stabil. Reveal importerar din historiska Alta-data vid anslutning så du har mönstret klart direkt — ingen väntetid.',
      },
      {
        q: 'Kan jag jämföra flera butiker samtidigt?',
        a: 'Ja. Multi-butiksvyn visar upp till alla dina butiker med samma heatmap-format. Praktiskt för distriktschefer som schemalägger centralt eller vill sätta bemanningsprinciper som gäller alla butiker.',
      },
      {
        q: 'Hur påverkar vädret besöken?',
        a: 'Beroende på bransch. Livsmedelsbutiker påverkas mindre (folk måste handla mat oavsett). Kläd- och specialbutiker påverkas mer, särskilt sena eftermiddagar och lördagar. Reveals SMHI-integration visar korrelationen för just din butik över tid — du behöver inte gissa.',
      },
      {
        q: 'Fungerar det med schemasystem som Quinyx, Timeplan eller Winbags?',
        a: 'Reveal ger dig underlaget (besöksmönstret). Schemaläggningen sker sedan i ditt vanliga schemasystem. Om ni har API-integration mellan systemen kan besöksdatan flyttas automatiskt — annars fungerar det som en manuell överföring från heatmap till schema.',
      },
      {
        q: 'Hur mycket kan man spara med bättre bemanning?',
        a: 'Konservativa uppskattningar landar på 3–8% av personalkostnaden när schemat matchar faktiska besök istället för gissningar. För en butik med 2 mkr i personalkostnad per år blir det 60–160 000 SEK — Reveals årsprenumeration på cirka 5 000 SEK betalar sig snabbt.',
      },
    ],
  },
  finalCta: {
    title: 'Sluta gissa när personalen behövs som mest',
    body: 'Anslut Alta, öppna heatmap:en och se ditt riktiga mönster inom 15 minuter. 30 dagars gratis provperiod.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Besöksstatistik & analys',
        href: '/butik/besoksstatistik/',
        body: 'Djupare titt på visualisering — heatmap, jämförelser, peak-prognos.',
      },
      {
        title: 'Konverteringsgrad butik',
        href: '/butik/konverteringsgrad/',
        body: 'Kombinera besöksdatan med kassafilen och räkna ut konvertering.',
      },
      {
        title: 'Köhantering & larm',
        href: '/butik/kohantering-larm/',
        body: 'Push-larm när kön växer — så du kan flytta personal på studs.',
      },
    ],
  },
};
