import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/anvand-sakerhetskameror-besoksanalys/',
  en: '/en/',
};

export const meta = {
  sv: {
    title: 'Använd säkerhetskameror till besöksanalys',
    description:
      'Dina Avigilon Alta-kameror räknar redan besökare, kö och temperatur. Reveal läser av datan och gör den till affärsvärde — ingen ny sensor krävs.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'Utnyttja din befintliga installation',
  hero: {
    title: 'Använd säkerhetskamerorna',
    titleHighlight: 'till besöksanalys',
    subtitle:
      'Dina Avigilon Alta-kameror producerar redan värdefull metadata — besöksräkning, line-crossing, beläggning och miljösensor-värden. Reveal läser av datan via Altas API och gör den tillgänglig som live-dashboards och rapporter. Inga nya sensorer, ingen håltagning.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se vad kamerorna redan mäter',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Kamerorna är där. Datan är där. Ingen tittar på den.',
    body: [
      'Avigilon Alta-installationen kostar pengar varje månad. Den betalas för säkerheten — men samma kameror producerar hela tiden metadata som skulle vara värdefull för butiks- eller anläggningsdriften. Antal personer som passerar, hur länge kön är, hur beläggningen ser ut, vilka temperaturer sensorerna registrerar.',
      'Den datan går normalt bara till videohanteringssystemet där ingen förutom säkerhetsvakten öppnar den. Butikschefen, distriktschefen och kvalitetsansvarig har ingen vy in i värden som Alta redan räknar ut åt dem.',
      'Reveal fixar exakt det gapet. Vi läser inte om videon — vi läser bara ut Altas färdiga analys-värden via API och paketerar dem som live-dashboards, larm och rapporter för de personer som fattar butiksbeslut.',
    ],
  },
  howItWorks: {
    eyebrow: 'Så funkar det',
    title: 'Från installerad kamera till affärsdata på 15 minuter',
    steps: [
      {
        title: 'Anslut ditt Alta-konto',
        body: 'Logga in en gång via Reveal. Vi använder Altas officiella API — inga videoströmmar behandlas, bara metadata och sensor-värden.',
      },
      {
        title: 'Reveal upptäcker vad kamerorna kan mäta',
        body: 'Vi läser av alla kameror i kontot och listar deras aktiva analyser: people-counting, line-crossing, occupancy, environmental sensors. Du väljer vilka som ska ingå i dina dashboards.',
      },
      {
        title: 'Live-data direkt — plus historik',
        body: 'Nya värden strömmar in var 60:e sekund. Din historik från Alta importeras samtidigt så du börjar med veckor eller månader av trend — inte en tom instrumentpanel.',
      },
    ],
  },
  features: {
    eyebrow: 'Vad kamerorna redan mäter',
    title: 'Fyra datakällor du redan äger — men inte använder',
    items: [
      {
        title: 'Besöksräkning per entré',
        body: 'Alta-kameror med people-counting räknar hur många som går in och ut. Reveal visar timme-för-timme och jämför mot en typisk vecka så du ser om dagen är över eller under normalt.',
      },
      {
        title: 'Köbildning och passagelinjer',
        body: 'Line-crossing kan mäta kassakön eller flödet mellan avdelningar. Reveal sätter larm på tröskelvärden och skickar push-notis när kön växer utom kontroll.',
      },
      {
        title: 'Beläggning och kapacitet',
        body: 'Vissa kameror mäter antalet personer i ett område samtidigt. Perfekt för att övervaka trängsel, kapacitetsgränser eller mötesrum.',
      },
      {
        title: 'Miljösensorer på Alta-enheter',
        body: 'Alta stödjer inkopplade temperatur-, luftfuktighet- och luftkvalitetssensorer. Reveal loggar värdena dygnet runt och skapar HACCP-redo rapporter för livsmedelsverksamheter.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Att utnyttja säkerhetskameror till besöksanalys',
    items: [
      {
        q: 'Måste jag byta ut kamerorna?',
        a: 'Nej. Reveal fungerar med den Avigilon Alta-installation du redan har. Om dina kameror har people-counting eller line-crossing aktiverat i Alta läser vi ut siffrorna direkt. Om vissa analyser inte är aktiverade kan de slås på i Alta utan att kameran byts ut.',
      },
      {
        q: 'Behandlar ni videoströmmar eller sparar bilder?',
        a: 'Nej. Reveal läser bara ut de färdiga analys-värdena (siffror och sensorvärden) via Altas API. Ingen video, inga bilder, inga personuppgifter om enskilda besökare passerar Reveals servrar.',
      },
      {
        q: 'Vad krävs av mina kameror rent tekniskt?',
        a: 'Att de är anslutna till ett Avigilon Alta-konto (Motorolas molnbaserade Alta) och att de har minst en analys aktiverad — vanligtvis people-counting på entré-kameror. Miljösensorer kräver att sensorn är inkopplad till en Alta-enhet.',
      },
      {
        q: 'Vad händer om jag har både Alta och andra kameror?',
        a: 'Reveal fokuserar på Alta i dagsläget. Om ni har en blandad park (t.ex. Axis eller Hikvision utan Alta) täcker Reveal Alta-delen — de övriga kamerorna kräver deras egna analys-verktyg. Vi utvärderar stöd för fler plattformar utifrån efterfrågan.',
      },
      {
        q: 'Hur mycket kostar det att komma igång?',
        a: 'Ingen engångskostnad. Reveals Starter-plan är 50 USD/månad per butik eller anläggning (cirka 500 SEK). 30 dagars gratis provperiod, ingen bindningstid. Ingen ny hårdvara att köpa.',
      },
      {
        q: 'Hur snabbt är setup?',
        a: 'Cirka 15 minuter från kontoskapande till live-data. Anslut Alta-uppgifterna, välj vilka räknare och sensorer som ska ingå, öppna översikten. Historisk data importeras samtidigt så du ser trender direkt.',
      },
    ],
  },
  finalCta: {
    title: 'Låt kamerorna göra jobbet de redan gör',
    body: 'Kamerorna sitter där. Datan finns. Anslut Reveal och sätt igång värdet — 15 minuter, 30 dagar gratis.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Personräknare butik',
        href: '/butik/personraknare/',
        body: 'Djupdykning i just besöksräkningen — jämförelse mot fristående räknare.',
      },
      {
        title: 'HACCP & egenkontroll',
        href: '/haccp/',
        body: 'Automatisk temperaturövervakning via samma Alta-installation.',
      },
      {
        title: 'Alla funktioner för butiken',
        href: '/butik/',
        body: 'Se hela paketet — besökare, kö, skärmar, rapporter.',
      },
    ],
  },
};
