import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/konverteringsgrad/',
  en: '/en/',
};

export const meta = {
  sv: {
    title: 'Mät konverteringsgrad i butik — besök mot köp',
    description:
      'Räkna ut hur många besökare som blir kunder — per timme, dag och butik. Kombinera besöksdata från Alta-kameror med försäljningen från kassasystemet.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Mät konverteringsgraden i butiken',
    titleHighlight: 'utan gissningar',
    subtitle:
      'Konverteringsgrad = kunder ÷ besökare. Enkelt att räkna ut om du har båda siffrorna. Reveal ger dig besökssiffrorna live per timme och butik — koppla på ditt kassasystem för att se hur många av besökarna som faktiskt köper.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur mätningen funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Utan besöksdata är konverteringsgraden bara en gissning',
    body: [
      'Konverteringsgrad är ett av de starkaste nyckeltalen en butik har. Två butiker med samma försäljning kan ha helt olika konvertering — och det säger dig var problemet finns. Låg konvertering vid många besök betyder att något stoppar kunden från att köpa. Hög konvertering vid få besök betyder att marknadsföring och skyltfönster inte drar in folk.',
      'Problemet är att de flesta butiker bara har halva ekvationen. Kassan vet exakt hur många köp som gjordes. Men hur många personer var i butiken? Den siffran finns inte om ingen räknar dem — eller om räkningen görs för hand vid slumpvisa tider.',
      'Med Reveal räknar dina befintliga Avigilon Alta-kameror besökarna automatiskt, dygnet runt. När siffran finns är konverteringsgraden en enkel division. Jämför per timme, dag, veckodag och butik — och du ser mönstren du inte kunde se innan.',
    ],
  },
  howItWorks: {
    eyebrow: 'Så funkar det',
    title: 'Tre steg till att mäta konverteringen',
    steps: [
      {
        title: 'Räkna besökarna automatiskt',
        body: 'Anslut ditt Avigilon Alta-konto — Reveal läser ut besöksräknarna på dina entré-kameror och visar dem i realtid per butik och timme.',
      },
      {
        title: 'Koppla på försäljningen',
        body: 'Exportera transaktioner från ditt kassasystem eller kör dem via API. Reveal räknar sedan konverteringsgraden per timme och dag — kunder ÷ besökare.',
      },
      {
        title: 'Analysera per timme, dag och butik',
        body: 'Jämför konvertering över veckodagar, timmar och butiker. Se när personalen bemästrar merförsäljning bäst — och när skyltfönstret driver in fel målgrupp.',
      },
    ],
  },
  features: {
    eyebrow: 'Vad du får',
    title: 'Konvertering på riktig data, inte magkänsla',
    items: [
      {
        title: 'Konverteringsgrad per timme',
        body: 'Se hur konverteringen förändras över dagen. Öppningstimmen kan ligga på 40% medan lunchtoppen med spontanbesök drar ner till 15%. Utan timmes-upplösning missar du det helt.',
      },
      {
        title: 'Konvertering per butik och veckodag',
        body: 'Jämför två butiker med samma besöksflöde men olika konvertering — då vet du att skillnaden ligger i personal, layout eller sortiment, inte i traffic.',
      },
      {
        title: 'Historisk baslinje från dag ett',
        body: 'När du kopplar in Alta importerar Reveal historisk besöksdata direkt. Du kan räkna konvertering bakåt i tiden så snart kassafilen finns — ingen väntetid på att bygga upp underlaget.',
      },
      {
        title: 'Konverteringsgrad i veckorapporten',
        body: 'Reveals veckorapport tar med konverteringsgraden och jämför mot förra veckan och samma vecka förra året. Distriktschefen får en färdig PDF varje måndag.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Frågor om att mäta konverteringsgrad',
    items: [
      {
        q: 'Vad är en normal konverteringsgrad i butik?',
        a: 'Beror mycket på bransch. Livsmedelsbutik ligger ofta på 80–95% eftersom folk kommer för att handla. Klädbutik ligger typiskt på 15–25%. Elektronikkedjor kring 20–30%. Ditt eget värde jämfört med dig själv över tid är mer intressant än branschgenomsnittet.',
      },
      {
        q: 'Vad räknas som en besökare?',
        a: 'En unik person som passerar entrén in. Alta-kamerans people-counting-analys gör själva räkningen; Reveal läser bara ut siffran. Om samma person går in och ut flera gånger räknas de flera gånger — det är standardpraxis i branschen.',
      },
      {
        q: 'Måste jag ha ett kassasystem som kan exportera transaktioner?',
        a: 'Ja, eller ett CSV-underlag per dag/timme. Nästan alla moderna kassasystem (BR, Sitoo, Extenda, Winbags, iZettle m.fl.) exporterar detta. Om du bara har försäljning per dag kan du fortfarande räkna daglig konverteringsgrad — men du missar timmes-upplösningen.',
      },
      {
        q: 'Räknar Reveal även säsongspersonal och leveranser?',
        a: 'Alta-räknarna gör inte skillnad, men du kan filtrera bort tider utanför öppettider. Personalen som går in på morgonen räknas alltså inte in i besökssiffrorna om öppettider är satta i Reveal.',
      },
      {
        q: 'Hur snabbt kan jag komma igång?',
        a: 'Cirka 15 minuter för besöksdatan. Kassa-integrationen tar lite längre — beror på ditt kassasystem. Ett engångs-CSV kan importeras direkt, en API-integration typiskt en dag med teknisk resurs.',
      },
      {
        q: 'Vad kostar det?',
        a: 'Reveals Starter-plan är 50 USD/månad per butik (cirka 500 SEK). Årspris 450 USD (~38 USD/mån). Konverteringsmätning ingår tillsammans med besöksstatistik, kölarm, HACCP, skärmar och rapporter — inga tillägg per funktion.',
      },
    ],
  },
  finalCta: {
    title: 'Börja mäta konverteringen i din butik',
    body: 'Anslut Alta, se besökssiffrorna live inom 15 minuter. Kombinera med din försäljning och konverteringen räknas ut åt dig.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Besöksstatistik & analys',
        href: '/butik/besoksstatistik/',
        body: 'Djupare titt på hur besöksdatan visualiseras — hourly chart, jämförelser, peak-prognoser.',
      },
      {
        title: 'Bemanningsplanering utifrån besök',
        href: '/butik/bemanningsplanering/',
        body: 'Använd samma besöksmönster för att schemalägga personal på rätt timmar.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Veckorapporter med konverteringsgrad, mejlas automatiskt.',
      },
    ],
  },
};
