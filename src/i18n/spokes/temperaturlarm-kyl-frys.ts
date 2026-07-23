import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/haccp/temperaturlarm-kyl-frys/',
  en: '/en/',
};

export const meta = {
  sv: {
    title: 'Temperaturlarm för kyl & frys — direkt vid avvikelse',
    description:
      'Push-larm och mejl när kylen eller frysen går över gräns — med hysteres och eskalering så du slipper falsklarm men fångar riktiga fel i tid.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'HACCP & egenkontroll',
  hero: {
    title: 'Temperaturlarm för kyl och frys',
    titleHighlight: 'utan falsklarm',
    subtitle:
      'När kylen börjar dra iväg vill du veta det inom minuter — inte nästa morgon när stocken är förlorad. Reveal skickar push-notis och mejl direkt när en Alta-sensor går över kritisk gräns, med hysteres och eskalering så personalen slipper drunkna i falsklarm.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur larmen funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Ett trasigt kylsystem klockan tre på natten kostar tusenlappar',
    body: [
      'Enkla temperaturlarm har funnits länge — men de flesta är antingen för känsliga (larmar när dörren öppnats i tio sekunder och när ingen är där för att åtgärda) eller för blinda (upptäcker felet först vid morgonrutinen när stocken redan är kastad).',
      'Det man vill ha är ett larm som skickas när felet är verkligt, till rätt person, snabbt nog att kunden fortfarande kan agera. Och en logg som visar exakt vad som hände så att kassationen inte behöver diskuteras.',
      'Reveals larmsystem sitter ovanpå Alta-sensorerna du redan har. Trösklarna är rollbaserade (Kyl / Frys / Rum / Anpassad) och sätts en gång. Hysteres och eskalering är inbyggt — du blir inte pingad för en 30-sekunders temperaturspik när kylen öppnades, men du får push-notisen inom en minut när kylen faktiskt börjar bli varm på riktigt.',
    ],
  },
  howItWorks: {
    eyebrow: 'Så funkar det',
    title: 'Från sensor till åtgärdad avvikelse på tre steg',
    steps: [
      {
        title: 'Sensorerna loggar var 60:e sekund',
        body: 'Alta-sensorerna på dina kylar och frysar samplar temperatur, luftfuktighet och andra miljövärden. Reveal läser av datan kontinuerligt via Altas API.',
      },
      {
        title: 'Reveal filtrerar bort brus',
        body: 'Hysteres innebär att ett värde måste ligga över gränsen en definierad tid innan larmet triggas. Ett kort öppningsglapp när personalen tar ut varor räcker inte — men en trend uppåt över 5 minuter gör det.',
      },
      {
        title: 'Larmet når rätt person, i tid',
        body: 'Push-notis till butikschefen inom en minut. Mejl som backup. Om huvudmottagaren inte agerar inom en tröskeltid eskaleras larmet till nästa person i kedjan.',
      },
    ],
  },
  features: {
    eyebrow: 'Vad du får',
    title: 'Larm som personalen faktiskt tar på allvar',
    items: [
      {
        title: 'Hysteres — inga larm för snabba glapp',
        body: 'Reveal larmar bara när temperaturen ligger över gränsen tillräckligt länge. Personalen slipper 20 falsklarm om dagen från vanliga kylöppningar och tar därför larmen på allvar när de kommer.',
      },
      {
        title: 'Eskalering till backup',
        body: 'Om huvudmottagaren inte öppnar notisen inom X minuter skickas larmet vidare till backup-personen. Ingen enskild frånvarande medarbetare kan tysta ett kritiskt larm.',
      },
      {
        title: 'Rollbaserade tröskelvärden',
        body: 'Färdiga mallar för Kyl, Frys, Rum och Anpassad — så du sätter rätt gränsvärden en gång och applicerar dem över hela sensorparken. Ingen kalibrering per enhet.',
      },
      {
        title: 'Full händelselogg i rapporten',
        body: 'Varje avvikelse loggas med start, peak-värde, varaktighet, vem som fick larmet och vem som åtgärdade. Perfekt för egenkontrollen — och för att slippa diskutera om felet ens hände.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Om temperaturlarm för kyl och frys',
    items: [
      {
        q: 'Skickar Reveal SMS?',
        a: 'I nuläget skickar Reveal push-notiser till mobilen (via appen på iOS/Android) och mejl som backup. SMS är på färdplanen för 2026. Push når mobilen typiskt inom sekunder — snabbare än SMS i praktiken — och du kan lägga till fler mottagare kostnadsfritt.',
      },
      {
        q: 'Hur snabbt får jag larmet efter en avvikelse?',
        a: 'Reveal läser sensorvärden var 60:e sekund. När tröskeln överskrids (efter hysteresens buffert) går push-notisen ut inom samma minut. Mejl går parallellt. Eskalering till backup sker typiskt inom 5–10 minuter om ingen agerar.',
      },
      {
        q: 'Vad är hysteres och varför är det viktigt?',
        a: 'Hysteres betyder att ett värde måste ligga över gränsen under en viss tid innan larmet triggas — och även falla tillbaka under en lägre "återställningsgräns" för att larmet ska släppas. Det förhindrar att korta glapp (t.ex. när kylen öppnas) skapar konstant larmande. Utan hysteres blir larmen så många att personalen börjar ignorera dem, vilket dödar hela poängen med systemet.',
      },
      {
        q: 'Kan olika personer få olika larm?',
        a: 'Ja. Butikschefen kan ta kritiska larm, kvalitetsansvarig kan få både kritiska och mindre allvarliga. Larmroller sätts per butik och kan variera per sensor-typ. Eskalering går till nästa mottagare i kedjan om huvudmottagaren inte agerar.',
      },
      {
        q: 'Vilka sensorer stödjer Reveal?',
        a: 'Alla temperatur-, luftfuktighet- och luftkvalitetssensorer som är inkopplade till din Avigilon Alta-installation. Alta stödjer flera vanliga sensor-typer och Reveal läser bara ut värdena via Altas API. Ingen ytterligare integration krävs.',
      },
      {
        q: 'Vad händer om internet går ned?',
        a: 'Sensorerna fortsätter mäta och Alta lagrar värdena lokalt. När uppkopplingen kommer tillbaka synkas allt till Reveal. Om en sensor är offline längre än en tröskel du själv sätter (t.ex. 15 minuter) får du också en notis om det — så du fångar upp avbrott.',
      },
    ],
  },
  finalCta: {
    title: 'Sätt upp ditt första temperaturlarm idag',
    body: 'Anslut Alta, välj sensor, sätt gräns. Larmen börjar fungera direkt — 30 dagar gratis provperiod.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Egenkontroll temperatur — automatisk mall',
        href: '/haccp/egenkontroll-temperatur-mall/',
        body: 'Ersätter papperspärmen med automatisk loggning och färdig veckorapport.',
      },
      {
        title: 'HACCP & egenkontroll — översikt',
        href: '/haccp/',
        body: 'Hela HACCP-lösningen med funktioner och prisbild.',
      },
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Se hur avvikelser hamnar i veckorapporten som mejlas automatiskt.',
      },
    ],
  },
};
