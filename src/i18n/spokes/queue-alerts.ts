import type { SpokeContent } from '../../components/SpokeTemplate.astro';

export const paths = {
  sv: '/butik/kohantering-larm/',
  en: '/en/retail/queue-alerts/',
};

export const meta = {
  sv: {
    title: 'Köhantering & larm — Reveal för din butik',
    description:
      'Mät kassakön i realtid och få push-larm när den växer. Reveal stoppar köbildning innan kunderna lämnar — utan ny hårdvara.',
  },
  en: {
    title: 'Queue management & alerts — Reveal for your store',
    description:
      'Live checkout queue measurement and push alerts when it builds. Reveal stops queues before customers walk out — without new hardware.',
  },
};

export const sv: SpokeContent = {
  eyebrow: 'För din butik',
  hero: {
    title: 'Sätt stopp för köbildningen',
    titleHighlight: 'innan kunden lämnar',
    subtitle:
      'Reveal mäter kassakön i realtid och pingar dig direkt när den växer över din gräns. Du hinner agera medan kunden fortfarande står kvar.',
    ctaPrimary: 'Starta gratis provperiod',
    ctaSecondary: 'Se hur det funkar',
    trialNote: '30 dagars gratis provperiod · ingen ny hårdvara · avsluta när du vill',
  },
  problem: {
    title: 'Sju personer i kassakön. Du står två rum bort.',
    body: [
      'En kund som ser åtta personer framför sig vänder ofta i dörren. Det förlorade köpet syns aldrig i kassan — det syns bara i månadens totalsumma.',
      'I flerbutiksdrift är problemet värre. Distriktschefen kan inte stå vid kassan i fjorton butiker samtidigt. Och manuell incheckning kommer alltid för sent.',
      'Det du behöver är en mätare som inte sover och ett larm som når dig var du än är.',
    ],
  },
  howItWorks: {
    eyebrow: 'Tre steg',
    title: 'Från Alta-kamera till push-larm',
    steps: [
      {
        title: 'Reveal hittar dina kö-räknare automatiskt',
        body: 'Vi läser ut räknarna från ditt Avigilon Alta-konto vid anslutning. Du pekar ut vilken som mäter kön — det är hela installationen.',
      },
      {
        title: 'Du sätter din tröskel',
        body: 'Fem personer? Tre minuter genomsnittlig väntan? Olika tröskel per butik och per veckodag. Du bestämmer.',
      },
      {
        title: 'Reveal larmar när tröskeln överskrids',
        body: 'Push-notis till mobilen, mejl till backup-personen, och händelsen loggas. Inget falsklarm för en kund som råkar stå still i tio sekunder.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktioner',
    title: 'Allt du behöver för att stoppa köer',
    items: [
      {
        title: 'Realtidsmätning per kassa',
        body: 'Se exakt hur många personer som står i varje kö just nu, hur länge de väntat och hur det jämför med en typisk dag.',
      },
      {
        title: 'Smart-larm utan falsklarm',
        body: 'Hysteres och eskalering inbyggt — larmet kommer först när problemet är verkligt, inte vid varje liten topp.',
        bullets: [
          'Tröskel i antal personer eller väntetid',
          'Olika regler för helger och vardagar',
          'Eskalering till backup om huvudmottagaren inte agerar',
        ],
      },
      {
        title: 'Händelselogg för analys',
        body: 'Varje köhändelse loggas med start, peak, varaktighet och åtgärd. Få svar på "när är vi som mest pressade?" från riktiga data — inte gissningar.',
      },
      {
        title: 'Förutsäg topptimmar',
        body: 'Reveal lär sig din normala fredag och säger till när dagen tippar mot något ovanligt. Bemanna upp innan kön ens hunnit bildas.',
      },
    ],
  },
  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Det vi får frågor om',
    items: [
      {
        q: 'Vilka kameror behövs?',
        a: 'Vilken Avigilon Alta-kamera som helst med people-counting eller line-crossing-analys aktiverad. Reveal hittar dem automatiskt — du behöver inte installera ny hårdvara.',
      },
      {
        q: 'Hur snabbt får jag larmet?',
        a: 'Reveal hämtar sensorvärden var 60:e sekund. När tröskeln överskrids går push-notisen ut inom samma minut. Mejl-eskalering inom ett par minuter om huvudmottagaren inte öppnar notisen.',
      },
      {
        q: 'Kan jag sätta olika tröskel per butik?',
        a: 'Ja. Varje butik har egna tröskelvärden, mottagare och regler. Du kan också skilja på vardag och helg — eller på "öppning", "rusningstid" och "stängning".',
      },
      {
        q: 'Loggas alla händelser?',
        a: 'Ja. Varje gång tröskeln överskrids skapas en händelse med tidsstämpel, max-värde, varaktighet och vem som fick larmet. Logiken syns både i appen och i veckorapporten.',
      },
      {
        q: 'Funkar det med flera kassor samtidigt?',
        a: 'Ja, du kan mäta upp till 50 räknare per butik på Starter-planen. Varje kassa har egen tröskel om du vill — eller en sammanslagen siffra för hela kassaområdet.',
      },
      {
        q: 'Behövs ny hårdvara?',
        a: 'Nej. Allt körs på de kameror du redan har via Avigilon Alta. Ingen ny installation, inga extra licenser från Avigilon, ingen kabeldragning.',
      },
    ],
  },
  finalCta: {
    title: 'Sätt upp ditt första kölarm idag',
    body: 'Koppla in ditt Avigilon Alta-konto, peka ut dina kö-räknare, sätt din tröskel — 30 dagar gratis.',
    cta: 'Starta gratis provperiod',
  },
  related: {
    eyebrow: 'Utforska mer',
    items: [
      {
        title: 'Rapporter',
        href: '/butik/rapporter/',
        body: 'Schemalagda PDF-rapporter via mejl. Inga manuella sammanställningar.',
      },
      {
        title: 'HACCP & egenkontroll',
        href: '/haccp/',
        body: 'Temperaturövervakning, audit-trail och färdiga rapporter.',
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
    title: 'Stop the checkout queue',
    titleHighlight: 'before the customer walks out',
    subtitle:
      "Reveal measures your checkout queue in real time and pings you the moment it grows past your threshold. You act while the customer is still standing there.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · no new hardware · cancel anytime',
  },
  problem: {
    title: 'Seven people in the checkout queue. You’re two rooms away.',
    body: [
      "A customer who sees eight people in front of them often turns around at the door. The lost sale never shows up in your till — only in the monthly totals.",
      "Multi-site makes it worse. A district manager can’t stand at fourteen checkouts at once. Manual check-ins always arrive late.",
      'What you need is a meter that doesn’t sleep and an alert that reaches you wherever you are.',
    ],
  },
  howItWorks: {
    eyebrow: 'Three steps',
    title: 'From Alta camera to push alert',
    steps: [
      {
        title: 'Reveal finds your queue counters automatically',
        body: 'We pull counters from your Avigilon Alta account on connect. You point at the one that measures the queue — that’s the whole install.',
      },
      {
        title: 'You set your threshold',
        body: 'Five people? Three minutes of average wait? Different thresholds per site and per weekday. Your call.',
      },
      {
        title: 'Reveal alerts when the threshold breaks',
        body: 'Push notification to mobile, email to your backup, and the event is logged. No false alarms for a customer who happens to stand still for ten seconds.',
      },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to stop queues',
    items: [
      {
        title: 'Real-time measurement per till',
        body: 'See exactly how many people are in each queue right now, how long they’ve waited, and how it compares to a typical day.',
      },
      {
        title: 'Smart alerts, no false alarms',
        body: 'Hysteresis and escalation built in — the alert only fires when the problem is real, not on every minor spike.',
        bullets: [
          'Threshold by number of people or wait time',
          'Different rules for weekends vs. weekdays',
          'Escalates to backup if the primary recipient doesn’t act',
        ],
      },
      {
        title: 'Event log for analysis',
        body: 'Every queue event is logged with start, peak, duration and resolution. Get a real answer to "when are we under most pressure?" — from data, not guesses.',
      },
      {
        title: 'Predict peak hours',
        body: 'Reveal learns your typical Friday and flags when the day tips toward something unusual. Staff up before the queue forms.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'Which cameras are needed?',
        a: 'Any Avigilon Alta camera with people-counting or line-crossing analytics enabled. Reveal discovers them automatically — no new hardware required.',
      },
      {
        q: 'How fast does the alert arrive?',
        a: 'Reveal polls sensor values every 60 seconds. When your threshold is crossed, the push notification goes out within the same minute. Email escalation kicks in a few minutes later if the primary recipient hasn’t opened it.',
      },
      {
        q: 'Can I set different thresholds per site?',
        a: 'Yes. Each site has its own thresholds, recipients and rules. You can also split by weekday vs. weekend — or by "opening", "rush hour" and "closing".',
      },
      {
        q: 'Is everything logged?',
        a: 'Yes. Every threshold breach creates an event with timestamp, peak value, duration and who received the alert. Visible both in the app and in the weekly report.',
      },
      {
        q: 'Does it work with multiple tills at once?',
        a: 'Yes — up to 50 counters per site on the Starter plan. Each till can have its own threshold if you want, or a combined number for the entire checkout area.',
      },
      {
        q: 'Do I need new hardware?',
        a: 'No. Everything runs on the cameras you already have via Avigilon Alta. No new install, no extra Avigilon licences, no cable runs.',
      },
    ],
  },
  finalCta: {
    title: 'Set up your first queue alert today',
    body: 'Connect your Avigilon Alta account, point at your queue counters, set your threshold — 30 days free.',
    cta: 'Start free trial',
  },
  related: {
    eyebrow: 'Explore more',
    items: [
      {
        title: 'Reports',
        href: '/en/retail/reports/',
        body: 'Scheduled PDF reports by email. No manual summaries.',
      },
      {
        title: 'HACCP & food safety',
        href: '/en/haccp/',
        body: 'Temperature monitoring, audit trail and ready-to-file reports.',
      },
      {
        title: 'All features',
        href: '/en/retail/',
        body: 'See the full Reveal package for your store.',
      },
    ],
  },
};
