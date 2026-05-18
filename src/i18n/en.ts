import type { sv } from './sv';

export const en: typeof sv = {
  meta: {
    title: 'Reveal — Visitor analytics for Avigilon Alta',
    description:
      'Reveal turns Avigilon Alta Video Security metadata into live visitor statistics, sensor monitoring and reports — without installing a single new camera.',
  },
  nav: {
    how: 'How it works',
    features: 'Features',
    partners: 'Partners',
    pricing: 'Pricing',
    signin: 'Sign in',
    cta: 'Start free trial',
  },
  hero: {
    badge: 'Built for Avigilon Alta',
    titleA: 'Turn your Alta cameras into',
    titleHighlight: 'a retail insight engine',
    subtitle:
      "Reveal plugs into the Avigilon Alta platform you already use for security and surfaces live visitor counts, queue alerts, environmental sensor data and trading-day reports — without installing a single new camera.",
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'See how it works',
    trialNote: '30-day free trial · cancel anytime',
    screenshotUrl: 'app.raptix.se/overview',
    caption: 'Live data from your existing Avigilon Alta cameras. No extra hardware. No second sign-in.',
    kpi: {
      sites: 'Sites',
      visitors: 'Visitors today',
      inStore: 'In store now',
      sensors: 'Sensor health',
      healthy: 'Healthy',
    },
  },
  trust: {
    heading: 'Trusted by retailers running Avigilon Alta',
  },
  how: {
    eyebrow: 'How it works',
    title: 'Three steps from camera to insight.',
    subtitle:
      "Reveal is the analytics layer on top of Avigilon Alta — it doesn't replace your security platform, it makes it pay for itself a second time.",
    step1: {
      title: 'Connect your Alta account',
      body: 'Add your Avigilon Alta credentials once. Reveal discovers every counter and environmental sensor on every device. No site visits, no agents to install.',
    },
    step2: {
      title: 'Pick what matters to your stores',
      body: 'Map cameras to KPIs: visitors, occupancy, checkout queue, car park, fridge temperature. Set trading hours and role policies once — they apply across every site.',
    },
    step3: {
      title: 'Insight, all day',
      body: 'A live overview tells you whether each store is busier or quieter than typical, flags queue and temperature breaches, and emails the trading-day report at the cadence you choose.',
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything an Alta site needs to run on numbers.',
    f1: {
      title: 'Live visitors and occupancy',
      body: "Hourly footfall against a four-week typical baseline. A real-time pace bar shows whether you're on track for an average day, or on for a quiet/busy one — at a glance.",
      bullets: [
        "Today's standout moments — busiest, quietest, peak ahead",
        'Multi-site fleet view rolls every store into one screen',
        'Trading-hours aware so the chart matches when you are open',
      ],
      mock: {
        label: 'Today — hourly footfall',
        pill: 'Steady',
        text: 'On pace for ~1,834 visitors by close',
      },
    },
    f2: {
      title: 'Environmental sensor monitoring',
      body: 'Every fridge, freezer and ambient sensor on your Alta devices, with role-based thresholds (Fridge / Freezer / Ambient / Custom). Breaches surface immediately and land in the trading-day compliance report.',
      bullets: [
        "Hysteresis and escalation so you don't get pinged for a 30-second blip",
        'Episode log with start, peak, duration, resolution',
        'Environmental compliance PDF, scheduled or on demand',
      ],
      mock: {
        alertTitle: '1 sensor above critical limit',
        alertBody: 'Eggs · Temperature 20.4°C > 17.0°C',
        tiles: [
          ['Fridge — meat', '4.2 °C'],
          ['Freezer', '-19 °C'],
          ['Ambient', '22.5 °C'],
          ['Humidity', '47%'],
        ],
      },
    },
    f3: {
      title: 'In-store screens, share by link',
      body: 'Build a TV-ready dashboard once, share it by URL + password — no Reveal login required. Mount a screen behind the counter and your team sees live visitor count, queue and sensor status.',
      mock: {
        visitors: 'Visitors today',
        inStore: 'In store now',
        queue: 'Checkout queue',
        normal: '— normal',
      },
    },
    f4: { title: 'Reports', body: 'Weekly and monthly footfall and environmental compliance — scheduled by email, archived in-app.' },
    f5: { title: 'Reseller branding', body: 'White-label the top bar with your logo. Customers see your brand, not ours. Per reseller, one click.' },
    f6: { title: 'Role-based access', body: 'Owner / admin / viewer per tenant. Reseller and vendor scopes on top. Stripe-backed trial and billing.' },
  },
  partners: {
    eyebrow: 'For partners',
    title: 'Sell Reveal as your own.',
    body: "If you're an Avigilon Alta integrator, Reveal is your add-on. White-label the UI with your logo, manage your customer tenants from one console, and earn margin on every seat.",
    bullets: [
      'Reseller-scoped admin console — see only your customers',
      "Your logo replaces Reveal's wordmark in every customer's UI",
      'Direct-bill or reseller-bill, your choice',
      'First-line support tooling for your team',
    ],
    cta: 'Become a partner',
    portalDomain: 'partner.cloudsec.example/overview',
    poweredBy: 'Powered by Reveal',
    portalKpis: [
      ['Tenants', '12', 'text-gray-900'],
      ['Healthy', '11', 'text-emerald-600'],
      ['Attention', '1', 'text-amber-600'],
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'One plan. Per site. Cancel anytime.',
    subtitle: '30-day free trial. Billed in USD via Stripe. Volume discounts for multi-site and reseller portfolios.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualSave: 'save 30%',
    starter: {
      name: 'Starter',
      priceMonthly: '$30',
      perMonth: '/month',
      priceAnnual: '$21',
      annualNote: '$250 billed yearly — save $110',
      features: [
        'One site, unlimited counters and sensors',
        'Live overview, sensor monitoring, reports',
        'One in-store screen',
        'Email support',
      ],
      cta: 'Start free trial',
    },
    partner: {
      name: 'Multi-site & Partner',
      price: 'Custom',
      note: 'Resellers and chains',
      features: [
        'Fleet view across every site',
        'White-label branding',
        'Reseller console',
        'Volume pricing',
      ],
      cta: 'Talk to us',
    },
  },
  finalCta: {
    titleA: 'Already running',
    titleHighlight: 'Avigilon Alta',
    titleB: '?',
    body: "You're 60 seconds from your first visitor chart.",
    cta: 'Start free trial',
  },
  footer: {
    tagline: 'A Raptix AB product',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'hello@raptix.se',
  },
};
