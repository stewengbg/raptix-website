import type { SpokeContent } from '../../components/SpokeTemplate.astro';

// Swedish-language landing page targeting "personräknare butik".
// No English equivalent — pathEn falls back to the EN homepage so the
// language switcher still works for anyone who lands here from an EN
// referrer.
export const paths = {
  sv: '/butik/personraknare/',
  en: '/en/',
};

export const meta = {
  sv: {
    title: 'Personräknare för butik — räkna besökare med Alta',
    description:
      'Räkna besökare i butik med dina befintliga Avigilon Alta-kameror — ingen ny hårdvara, ingen installation. Så jämför det mot fristående räknare.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Personräknare för butik',
    titleHighlight: 'utan ny hårdvara',
    subtitle:
      'De flesta butiker har redan kamerorna som behövs. Reveal läser ut Avigilon Altas inbyggda besöksräkning och gör siffrorna tillgängliga live — utan takmonterade räknare, håltagning eller kalibrering.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det jämför',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Vad är en personräknare — och varför behöver butiken en?',
    body: [
      'En personräknare mäter hur många personer som passerar en viss punkt, oftast entrén till butiken. Datan används för att bemanna rätt, jämföra dagar och veckor, och räkna ut konverteringsgrad — hur många av besökarna som faktiskt blir kunder.',
      'Traditionellt har det krävt fristående räknare: infraröda strålar eller stereoskopiska kameror monterade i taket vid varje entré. Priset landar oftast på 500–2 000 EUR per entré i hårdvara, plus installation, kalibrering och årliga licenser.',
      'Men om butiken redan har Avigilon Alta-kameror vid entrén är räknarna redan där. Alta har inbyggd analys för människoräkning och line-crossing. Reveal läser bara ut siffrorna via API och visar dem i realtid — utan att en enda ny sensor behöver installeras.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från kamera till besökssiffra på 15 minuter',
    steps: [
      {
        title: 'Anslut ditt Alta-konto',
        body: 'Logga in en gång. Reveal upptäcker automatiskt alla kameror med people-counting eller line-crossing aktiverat — vanligtvis är det entré-kamerorna.',
      },
      {
        title: 'Peka ut dina räknare',
        body: 'Markera vilken räknare som räknar besökare vid vilken entré. Klart på två minuter. Ingen ny installation, inget som ska monteras.',
      },
      {
        title: 'Live-data direkt — plus historiken',
        body: 'Timvis besöksflöde börjar strömma inom 60 sekunder. Din historiska Alta-data importeras samtidigt så du startar med veckor av trend, inte en tom graf.',
      },
    ],
  },
  features: {
    eyebrow: 'Fördelar',
    title: 'Varför kamera-baserad räkning slår fristående räknare för de flesta butiker',
    items: [
      {
        title: 'Ingen ny hårdvara att köpa',
        body: 'Kamerorna sitter redan på plats för säkerhet. Alta-licensen betalas redan. Reveal använder den befintliga infrastrukturen — inget att köpa, ingenting att skruva upp i taket.',
      },
      {
        title: 'Ingen installation, ingen kalibrering',
        body: 'Fristående räknare kräver håltagning, kabeldragning och kalibrering vid varje entré. Med Reveal ansluter du ditt Alta-konto — och räkningen fungerar direkt.',
      },
      {
        title: 'Historisk data från dag ett',
        body: 'När du startar en fristående räknare börjar den på noll. Reveal importerar Altas befintliga historik vid anslutning — du får månader eller år av trend på en gång.',
      },
      {
        title: 'Mycket mer än bara räkning',
        body: 'Samma anslutning ger dig live-översikt, kölarm, HACCP-temperaturövervakning, in-store TV-skärmar och automatiska rapporter — utan tilläggskostnad per funktion.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Frågor vi ofta får om personräknare',
    items: [
      {
        q: 'Vad är en personräknare och hur fungerar den?',
        a: 'En personräknare räknar hur många personer som passerar en viss punkt — oftast entrén till en butik. Fristående räknare använder IR-strålar eller takmonterade stereokameror. Reveals variant läser istället ut de räknare som redan finns inbyggda i dina Avigilon Alta-kameror, via Altas API — utan ny hårdvara.',
      },
      {
        q: 'Behöver jag installera ny hårdvara?',
        a: 'Nej — förutsatt att butiken redan har Avigilon Alta-kameror vid entrén. Alta har inbyggd analys för människoräkning och Reveal läser bara ut den. Om entrén inte täcks av en Alta-kamera behöver du komplettera kameraparken, men det är fortfarande billigare än en separat räknare plus installation.',
      },
      {
        q: 'Hur exakt är räkningen?',
        a: 'Beror på Alta-kamerans vinkel och belysning. Vid en standard entré-installation ligger noggrannheten typiskt på 95–98%. Reveal räknar inte själv — det är Alta som gör räkningen. Vi visar bara upp siffrorna på ett användbart sätt.',
      },
      {
        q: 'Vad kostar det per månad?',
        a: 'Reveals Starter-plan är 50 USD/månad per butik (ungefär 500 SEK). En årsprenumeration kostar 450 USD — motsvarar cirka 38 USD/månad. Alla funktioner ingår: besöksräkning, kölarm, HACCP-temperaturövervakning, TV-skärmar och rapporter. Provperioden är 30 dagar gratis utan bindning.',
      },
      {
        q: 'När passar en fristående räknare bättre?',
        a: 'Om butiken inte kör Avigilon Alta, eller om Alta-kameran inte täcker entrén med rätt vinkel. Fristående räknare kan också vara bättre om du behöver mycket exakt räkning med specialteknik som LiDAR för folkmassor. För de flesta vanliga butiker som redan kör Alta är kamera-baserad räkning både snabbare och billigare.',
      },
      {
        q: 'Hur snabbt kan jag komma igång?',
        a: 'Från beslut till live-data — cirka 15 minuter. Skapa konto, anslut ditt Alta-konto, peka ut dina räknare. Historisk data importeras automatiskt så du ser trender direkt — ingen väntetid på att bygga upp en baseline.',
      },
    ],
  },
  finalCta: {
    title: 'Räkna dina besökare utan att köpa hårdvara',
    body: 'Anslut ditt Alta-konto, se dina räkningar live inom 15 minuter. 30 dagar gratis.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Besöksstatistik & analys',
        href: '/butik/besoksstatistik/',
        body: 'Djupare vy på hur besöksdatan visualiseras — heatmaps, jämförelser och prognoser.',
      },
      {
        title: 'Köhantering & larm',
        href: '/butik/kohantering-larm/',
        body: 'Mät kassakön i realtid och få push-larm innan kunder lämnar.',
      },
      {
        title: 'Alla funktioner för butiken',
        href: '/butik/',
        body: 'Se hela Reveal-paketet.',
      },
    ],
  },
};
