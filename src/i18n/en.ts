import type { sv } from './sv';

export const en: typeof sv = {
  meta: {
    title: 'Reveal — Visitor analytics & HACCP reports for Avigilon Alta',
    description:
      'Turn your Avigilon Alta cameras into a retail insight engine: live visitors, queue, HACCP reports and forecasts — no new hardware. 30-day free trial.',
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
    screenshotUrl: 'reveal.raptix.se/overview',
    caption: 'Live data from your existing Avigilon Alta cameras. No extra hardware. No second sign-in.',
    kpi: {
      sites: 'Sites',
      visitors: 'Visitors today',
      inStore: 'In store now',
      sensors: 'Sensor health',
      healthy: 'Healthy',
    },
    siteBreakdown: 'Per site · today',
    sites: [
      ['Demo Store 1', '1,023'],
      ['Demo Store 2', '715'],
    ],
    history: 'Last 30 days · imported on connect',
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
    history: {
      title: "Don't start from zero — your history is already here",
      body: 'When you connect your Alta account, Reveal imports historic counter data. You log in on day one and see weeks of visitor trends — not an empty chart waiting to fill up.',
      bullets: [
        'Counter history pulled from Alta on connect',
        'Hour-of-week heatmap works from day one',
        "Compare today against a real typical pattern, not a guess",
        'No manual exports or CSV uploads',
      ],
      mock: {
        label: 'Visitors · last 8 weeks',
        badge: 'Imported',
        live: 'Live',
        caption: 'Week 11 — Reveal connected',
      },
    },
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
    insights: {
      title: 'Insights and forecasting',
      body: "Understand your store's patterns — not just today's numbers. Hour-of-week heatmap shows exactly when you're busiest. Weather correlation helps you staff for next Friday, not next month.",
      bullets: [
        'Hour-of-week activity heatmap — last 7, 28 or 90 days',
        'Queue analysis: when checkout lines build, and why',
        'Weather correlation via SMHI — see how rain and cold drive footfall',
        'Occupancy distribution to find your normal',
      ],
      mock: {
        label: 'Hourly activity · last 28 days',
        legend: ['Quiet', 'Average', 'Busy'],
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    },
    f2: {
      title: 'HACCP temperature monitoring on autopilot',
      body: 'Every fridge, freezer and ambient sensor on your Alta devices logged 24/7. Breaches alert immediately and roll up into a HACCP-ready PDF — perfect for daily food-safety records and inspector visits.',
      bullets: [
        'Role-based thresholds (Fridge / Freezer / Ambient / Custom) — set once',
        "Hysteresis and escalation so you don't get pinged for a 30-second blip",
        'Episode log with start, peak, duration, resolution — full audit trail',
        'HACCP-ready PDF report, scheduled or on demand',
        'Data retained to industry standards — meets food-safety record-keeping rules',
      ],
      mock: {
        alertTitle: '1 sensor above critical limit',
        alertBody: 'Eggs · Temperature 20.4°C > 17.0°C · logged 14:32',
        tiles: [
          ['Fridge — meat', '4.2 °C'],
          ['Freezer', '-19 °C'],
          ['Ambient', '22.5 °C'],
          ['Humidity', '47%'],
        ],
      },
    },
    reports: {
      title: 'Reports you can actually file',
      body: 'Scheduled trading and HACCP reports land in the right inbox every week or month. No paper log books, no pre-inspection panic — just a PDF to forward on.',
      bullets: [
        'HACCP temperature report — every sensor, every breach, every action',
        'Trading report — visitors, queue, peak hours per site',
        'Scheduled weekly or monthly delivery by email',
        'Custom periods for auditors or head office',
        'All archived in-app — download whenever',
      ],
      mock: {
        title: 'HACCP report · Week 18',
        subtitle: 'Demo Store 1 · Generated 2026-05-05',
        rows: [
          ['Fridge — meat', 'In range', '2-6°C'],
          ['Fridge — dairy', 'In range', '2-6°C'],
          ['Freezer', 'In range', '< -18°C'],
          ['Fridge — eggs', '1 breach', '2-6°C'],
        ],
        footer: '0 open breaches · ready to file',
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
    f5: { title: 'Reseller branding', body: 'White-label the top bar with your logo. Customers see your brand, not ours. Per reseller, one click.' },
    f6: { title: 'Role-based access', body: 'Owner / admin / viewer per tenant. Reseller and vendor scopes on top. Stripe-backed trial and billing.' },
    f7: { title: 'SMHI weather data', body: "Real-time weather for each site's location — correlated with footfall so you know why Friday was quiet (or busy)." },
  },
  partners: {
    eyebrow: 'For partners',
    title: 'Sell Reveal as your own.',
    body: "If you're an Avigilon Alta integrator, Reveal is your add-on. White-label the UI with your logo and manage your customer tenants from one console.",
    bullets: [
      'Reseller-scoped admin console — see only your customers',
      "Your logo replaces Reveal's wordmark in every customer's UI",
      'Direct-bill or reseller-bill, your choice',
      'First-line support tooling for your team',
    ],
    cta: 'Become a partner',
    portalDomain: 'partner.reseller.example/overview',
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
    annualSave: 'save 25%',
    starter: {
      name: 'Starter',
      priceMonthly: '$50',
      perMonth: '/month',
      priceAnnual: '$38',
      annualNote: '$450 billed yearly — save $150',
      features: [
        'One site, up to 50 counters & 50 sensors',
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
