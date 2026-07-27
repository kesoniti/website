// English content — the reference language. `tr.ts` and `es.ts` are typed
// against this file's shape, so adding/removing a field here forces the
// translations to stay in sync.
//
// Deliberately no `as const`: literal types would make every translated
// string a type error rather than a valid alternative value.

export const en = {
  locale: 'en',
  langLabel: 'English',

  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    methodology: 'Methodology',
    industries: 'Industries',
    contact: 'Contact',
    cta: 'Start a conversation',
  },

  footer: {
    tagline:
      'Boutique SAP consulting for production planning, detailed scheduling, quality and maintenance — for manufacturers running on S/4HANA.',
    colNavigate: 'Navigate',
    colModules: 'Module coverage',
    colContact: 'Contact',
    address: '30 N Gould St # 11590, Sheridan, WY 82801, USA',
    email: 'info@kesoniti.com',
    linkedin: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/company/kesoniti-llc',
    rights: 'Kesoniti LLC. All rights reserved.',
  },

  home: {
    metaTitle: 'Kesoniti — SAP PP / PP-DS Consulting for Manufacturing',
    metaDescription:
      'Boutique SAP consulting firm specializing in Production Planning (PP), Detailed Scheduling (PP/DS), Quality Management (QM) and Plant Maintenance (PM) for manufacturers on S/4HANA.',
    hero: {
      eyebrow: 'SAP PP · PP/DS · QM · PM',
      heading: 'We make SAP plan the way your factory actually runs.',
      sub: 'Kesoniti is a boutique SAP consultancy focused on production planning and detailed scheduling. We help manufacturing enterprises design, implement and stabilize the planning core of their S/4HANA landscape — from demand signal to shop floor.',
      ctaPrimary: 'Discuss your project',
      ctaSecondary: 'Explore our services',
      diagramAlt:
        'Schematic diagram of a manufacturing planning flow: demand feeds production planning and detailed scheduling, which drives shop-floor execution; quality and maintenance signals feed back into planning.',
      diagramLabels: {
        demand: 'Demand',
        planning: 'PP / PP-DS',
        execution: 'Shop floor',
        quality: 'QM',
        maintenance: 'PM',
        feedback: 'Feedback loop',
      },
    },
    tiers: {
      eyebrow: 'Service model',
      heading: 'Three tiers, one planning core',
      intro:
        'Every engagement is built around a deep production planning core, extended where it creates value, and delivered through a repeatable method.',
      items: [
        {
          num: '01',
          name: 'Core competency — SAP PP & PP/DS',
          desc: 'Master data architecture, MRP strategy, heuristics and optimizer configuration, planning board design, capacity leveling and scheduling logic. This is the center of gravity of everything we do.',
        },
        {
          num: '02',
          name: 'Expansion services — QM, PM & IBP',
          desc: 'Quality inspection integrated into production flow, maintenance planning aligned with capacity, and IBP connectivity for tactical-to-operational planning handover. Extensions that inherit the discipline of the core.',
        },
        {
          num: '03',
          name: 'Delivery methodology',
          desc: 'A structured path from assessment to hypercare, built for lean teams and fast decision cycles — designed to put working planning logic in front of your planners early, not at the end.',
        },
      ],
    },
    credibility: {
      eyebrow: 'At a glance',
      items: [
        { value: '12+', label: 'Years in production planning and industrial engineering' },
        { value: '20+', label: 'Manufacturing organizations supported' },
        { value: '6', label: 'Countries with plant-level roll-out experience' },
        { value: '4+1', label: 'Modules covered: PP, PP/DS, QM, PM + IBP' },
      ],
    },
    modulesStrip: {
      heading: 'Where we work in your landscape',
      items: [
        { code: 'PP', name: 'Production Planning', blurb: 'MRP, master data, order management, backflush and confirmation logic.' },
        { code: 'PP/DS', name: 'Detailed Scheduling', blurb: 'Heuristics, optimizer, planning board, finite capacity scheduling.' },
        { code: 'QM', name: 'Quality Management', blurb: 'In-process inspection, quality gates, usage decisions in the production flow.' },
        { code: 'PM', name: 'Plant Maintenance', blurb: 'Maintenance planning that respects — and informs — production capacity.' },
      ],
    },
    cta: {
      heading: 'Planning problems are specific. So are we.',
      sub: 'Tell us where your planning process breaks down — master data, scheduling logic, shop-floor feedback — and we will tell you honestly whether and how we can help.',
      button: 'Contact Kesoniti',
    },
  },

  about: {
    metaTitle: 'About — Kesoniti',
    metaDescription:
      'Kesoniti is a boutique, senior-led SAP consultancy specialized in production planning and detailed scheduling for manufacturing enterprises.',
    hero: {
      eyebrow: 'About Kesoniti',
      heading: 'A specialist firm, deliberately small.',
      sub: 'Kesoniti exists because production planning is the part of an SAP program where generalist capacity fails. We chose depth over breadth — and structure the whole firm around it.',
    },
    story: {
      heading: 'Why we exist',
      paragraphs: [
        'Most S/4HANA programs treat production planning as one workstream among many. The result is familiar: MRP runs nobody trusts, planning boards nobody uses, and planners who quietly go back to spreadsheets. The planning core — the reason a manufacturer runs SAP in the first place — becomes the weakest part of the system.',
        'Kesoniti was founded to be the counterweight. We do not staff programs; we solve planning problems. Every engagement is led by a senior consultant whose entire career is anchored in SAP PP and PP/DS, with an industrial engineering foundation that keeps the work honest: the system model has to match the physics of the factory, not the other way around.',
      ],
    },
    mission: {
      heading: 'Mission',
      text: 'To give manufacturing enterprises a planning core they actually trust — SAP planning logic that reflects real constraints, produces schedules planners defend, and improves measurably after go-live rather than eroding.',
    },
    model: {
      eyebrow: 'Operating model',
      heading: 'How we work',
      items: [
        {
          name: 'Senior-consultant-led',
          desc: 'The person who scopes your engagement is the person who configures your system. No leverage pyramid, no hand-off to a bench of juniors.',
        },
        {
          name: 'Remote-first, on-site where it matters',
          desc: 'Design and configuration are delivered remotely with disciplined cadence. Shop-floor walkthroughs, integration tests and go-live support happen where the work is.',
        },
        {
          name: 'Lean by design',
          desc: 'Small teams, short decision paths, and documentation that a client team can actually maintain after we leave. We measure success by how little you need us later.',
        },
      ],
    },
    leadership: {
      eyebrow: 'Leadership',
      heading: 'Founder & Principal Consultant',
      name: 'Eyup Aydemir',
      role: 'Founder & Principal Consultant, Kesoniti LLC',
      bio: [
        'Eyup Aydemir is an industrial engineer and SAP Production Planning specialist with more than twelve years in manufacturing planning. He holds a Bachelor’s degree in Industrial Engineering from Dumlupınar University, and his career began on the shop floor rather than in a consulting office — as a method engineer applying SMED, Kaizen and Heijunka to reduce changeover losses, then as a planning engineer running MRP and capacity planning in high-pressure aluminium die casting.',
        'He spent three and a half years as a planning specialist and SAP PP key user at a Tier-1 automotive supplier, responsible for JIT planning across a multi-plant group and acting as the business-side lead on an international ECC roll-out. That combination — planner first, consultant second — is the foundation of how Kesoniti works: the system model has to match the physics of the factory, because he has been the person who lives with the plan when it does not.',
        'From 2020 he moved into full-time SAP consulting, advancing from consultant to senior consultant to team lead for PP, PP/DS, QM and PM. He has led multi-country S/4HANA and ECC programs across six countries, with deep work in constraint-based finite capacity scheduling, PP/DS heuristics and pegging, variant configuration and MRP with configurable materials, Kanban design, and ERP-to-MES integration via CIF, IDoc and RFC. He founded Kesoniti LLC to bring that specialization to U.S. manufacturers directly, without a delivery pyramid in between.',
      ],
      credentialsLabel: 'Credentials & recognition',
      credentials: [
        'SAP Certified Associate — SAP S/4HANA Cloud Private Edition, Production Planning and Manufacturing (issued November 2024)',
        'Discovering SAP Digital Manufacturing — Record of Achievement (SAP, 2025)',
        'B.Sc. Industrial Engineering, Dumlupınar University',
        'IEEE Senior Member — a grade granted on review to experienced professionals with demonstrated achievement',
        'Raptors Fellowship — Fellow Member',
        'Author of three peer-reviewed conference papers on PP/DS scheduling optimization, Kanban logic in S/4HANA, and ERP–MES integration frameworks',
        'Peer reviewer for academic journals and international industrial engineering conferences',
      ],
    },
  },

  services: {
    metaTitle: 'Services — SAP PP, PP/DS, QM, PM Consulting | Kesoniti',
    metaDescription:
      'Engagement scope, problems solved and outcomes for SAP Production Planning, PP/DS Detailed Scheduling, Quality Management and Plant Maintenance consulting.',
    hero: {
      eyebrow: 'Services',
      heading: 'Deep module expertise, framed by the whole production flow.',
      sub: 'We work module by module, but never in isolation: planning quality is determined at the interfaces — between demand and MRP, between the schedule and the shop floor, between production and quality and maintenance.',
    },
    scopeLabel: 'Typical engagement scope',
    problemsLabel: 'Problems we solve',
    outcomesLabel: 'What good looks like',
    modules: [
      {
        id: 'pp',
        code: 'PP',
        name: 'SAP Production Planning',
        tagline: 'The backbone: master data, MRP and order execution that reflect how you actually manufacture.',
        scope: [
          'Production master data architecture: material masters, BOMs, routings, work centers, production versions',
          'MRP strategy design: planning strategies, lot-sizing, safety mechanisms, MRP areas',
          'Order management: production/process orders, confirmation and backflush design, goods movement logic',
          'S/4HANA migration of planning processes, including simplification-item impact on PP',
        ],
        problems: [
          'MRP outputs planners override daily because parameters never matched reality',
          'Master data inconsistencies that make every planning result untrustworthy',
          'Confirmation and backflush designs that distort inventory and WIP visibility',
          'Legacy ECC planning logic carried into S/4HANA without redesign',
        ],
        outcomes: [
          'An MRP run planners act on instead of second-guessing',
          'Master data with clear ownership and rules that keep it clean',
          'Order execution that gives management a true picture of WIP and output',
        ],
      },
      {
        id: 'ppds',
        code: 'PP/DS',
        name: 'Production Planning & Detailed Scheduling',
        tagline: 'Our deepest specialization: finite scheduling that planners trust enough to stop maintaining shadow spreadsheets.',
        scope: [
          'PP/DS activation and integration model in S/4HANA (embedded PP/DS)',
          'Heuristic selection, sequencing and tuning; optimizer setup where it genuinely pays off',
          'Planning board design: layouts, strategies, alerts and exception-driven working',
          'Finite capacity scheduling, setup matrix design, block planning and campaign planning',
          'Pegging, fixing and stability logic so schedules survive contact with reality',
        ],
        problems: [
          'Scheduling done in Excel because the planning board was never made usable',
          'Heuristics applied as installed defaults rather than engineered to the production system',
          'Optimizer projects that consumed budgets without producing accepted schedules',
          'Sequence-dependent setups and campaign constraints that standard MRP cannot see',
        ],
        outcomes: [
          'A finite schedule generated in the system and executed on the floor',
          'Planners working by exception through alerts instead of rebuilding plans daily',
          'Setup time and changeover logic captured in the model, not in tribal knowledge',
        ],
      },
      {
        id: 'qm',
        code: 'QM',
        name: 'SAP Quality Management',
        tagline: 'Quality embedded in the production flow — not a parallel bureaucracy beside it.',
        scope: [
          'Inspection planning integrated with production: in-process, goods receipt and final inspection',
          'Quality info records, inspection plans, catalogs and usage decision design',
          'Quality gates in the order flow: stock postings, blocked stock handling, batch release',
          'QM integration with PP master data and with batch management',
        ],
        problems: [
          'Inspection lots that pile up and block material flow instead of protecting it',
          'Quality data captured on paper or in parallel tools, invisible to planning',
          'Usage decisions that lag production and distort available-to-promise stock',
        ],
        outcomes: [
          'Inspection steps that run in takt with production instead of against it',
          'Quality results visible where planning decisions are made',
          'A defensible, auditable release process without manual workarounds',
        ],
      },
      {
        id: 'pm',
        code: 'PM',
        name: 'SAP Plant Maintenance',
        tagline: 'Maintenance planning that negotiates with production capacity instead of colliding with it.',
        scope: [
          'Technical object structures: functional locations, equipment, task lists',
          'Preventive and planned maintenance strategy, maintenance plans and scheduling',
          'Work order management, notification flows, and integration with capacity planning',
          'Coordination of maintenance windows with the production schedule (PM–PP/DS interplay)',
        ],
        problems: [
          'Maintenance scheduled blind to the production plan — or ignored until breakdown',
          'Equipment downtime that surprises the planning team every time',
          'Notification and order data too unstructured to learn anything from',
        ],
        outcomes: [
          'Maintenance windows that appear in the production schedule as real capacity constraints',
          'A preventive program grounded in equipment history, not guesswork',
          'Downtime that is planned, bounded and visible in advance',
        ],
      },
    ],
    expansion: {
      eyebrow: 'Adjacent capability',
      heading: 'SAP IBP connectivity',
      text: 'For clients running or evaluating SAP Integrated Business Planning, we design the tactical-to-operational handover: how IBP supply plans translate into executable PP/PP-DS planning, and how execution reality flows back. We scope IBP work strictly around this planning interface — it extends the core, it does not replace it.',
    },
    note: 'Engagement descriptions above are framed generically. Specific references, case studies and quantified results are shared in conversation, subject to client confidentiality.',
  },

  methodology: {
    metaTitle: 'Methodology — How Kesoniti Delivers',
    metaDescription:
      'A five-phase delivery approach for SAP production planning engagements: assessment, design, realization, deployment and hypercare — built for lean, senior-led teams.',
    hero: {
      eyebrow: 'Methodology',
      heading: 'Structured enough to trust. Lean enough to move.',
      sub: 'Every engagement follows the same five-phase spine. What varies is depth and duration — decided openly with you at assessment, not discovered mid-project.',
    },
    phasesHeading: 'The five phases',
    phases: [
      {
        num: '01',
        name: 'Assessment',
        desc: 'We map your planning reality: master data quality, current MRP behavior, scheduling practice (including the unofficial spreadsheets), and the constraints that actually govern your shop floor. Output: a findings report and a scoped, sequenced proposal — including what we advise you not to do.',
      },
      {
        num: '02',
        name: 'Design',
        desc: 'Planning model design decisions made explicit and written down: strategies, heuristics, master data rules, integration points, exception handling. Design workshops are run with your planners in the room — they are the users whose trust decides success.',
      },
      {
        num: '03',
        name: 'Realization',
        desc: 'Configuration and build in short cycles, each ending with your planners exercising the system on your data. Planning logic is validated against real orders and real constraints long before any cutover conversation.',
      },
      {
        num: '04',
        name: 'Deployment',
        desc: 'Cutover planning, data migration validation for planning-relevant objects, dress rehearsals, and go-live support with defined decision authority — so issues are resolved in hours, not steering meetings.',
      },
      {
        num: '05',
        name: 'Hypercare & handover',
        desc: 'Stabilization with measured exit criteria, structured knowledge transfer to your key users, and documentation your team can maintain. We define hypercare end at the start, and we leave when the system — and your team — stand on their own.',
      },
    ],
    diffs: {
      eyebrow: 'What differentiates us',
      heading: 'Three convictions we build every engagement on',
      items: [
        {
          name: 'Heuristics are engineering, not settings',
          desc: 'PP/DS heuristics and optimizer profiles are treated as engineered artifacts: selected, sequenced and tuned against your production system’s actual behavior, with test evidence — not activated from defaults and hoped for.',
        },
        {
          name: 'Working software early',
          desc: 'A rapid-deployment posture: a functioning planning slice on your data within the first cycles of realization. Early contact with reality is the cheapest form of risk management an SAP program can buy.',
        },
        {
          name: 'Shop-floor-to-ERP integrity',
          desc: 'A plan is only as good as the feedback that corrects it. We design the full loop — confirmations, quality results, maintenance events — so the schedule reflects the floor, and the floor can rely on the schedule.',
        },
      ],
    },
  },

  industries: {
    metaTitle: 'Industries — Manufacturing Sectors Kesoniti Serves',
    metaDescription:
      'SAP production planning consulting for automotive, FMCG, energy and renewables, textiles and packaging manufacturers.',
    hero: {
      eyebrow: 'Industries',
      heading: 'Different physics, same discipline.',
      sub: 'Every production system has its own constraints — sequence-dependent setups, shelf life, campaign logic, seasonal demand. We bring the same planning discipline to each, shaped to the physics of the industry.',
    },
    sectors: [
      {
        name: 'Automotive & Tier-1 suppliers',
        desc: 'Takted, sequence-driven production with demanding just-in-time and just-in-sequence call-off logic toward global OEMs. Planning here lives or dies on stable schedules, accurate capacity models and disciplined change management between plan freezes.',
        tags: ['Sequencing', 'JIT / JIS call-off', 'Capacity leveling'],
      },
      {
        name: 'Food, beverage & FMCG',
        desc: 'High-volume, short-cycle production where shelf life, batch logic and changeover matrices dominate. Multi-country template roll-outs are common, and the real work is reconciling a global process template with what a local plant can physically do.',
        tags: ['Shelf life & batches', 'Campaign planning', 'Global template roll-out'],
      },
      {
        name: 'Textiles & apparel',
        desc: 'Deep multi-stage BOMs, variant-rich master data and strong seasonality, from technical and nonwoven textiles through to fashion and hosiery. The challenge is keeping variant logic manageable while scheduling across stages with very different lot-size behavior.',
        tags: ['Variant handling', 'Multi-stage planning', 'Seasonality'],
      },
      {
        name: 'Energy & renewables',
        desc: 'Photovoltaic and energy systems manufacturing, plus project-influenced production with long procurement lead times and engineering changes flowing into open orders. Planning must reconcile project milestones with plant capacity across sites.',
        tags: ['Multi-plant unification', 'Engineering change', 'Kanban replenishment'],
      },
      {
        name: 'Metals & heavy industry',
        desc: 'Integrated steel, special steel and aluminium extrusion, where throughput, sequencing and continuous-process constraints govern everything. Engineer-to-order profile production adds configurable product structures on top of the scheduling problem.',
        tags: ['Throughput scheduling', 'Engineer-to-order', 'Variant configuration'],
      },
      {
        name: 'Machinery & commercial vehicles',
        desc: 'Trailers, drive shafts, power transmission and agricultural machinery: configurable products, multi-country plants and long assembly chains. Constraint-based finite scheduling with characteristic-dependent routings is typically where the value sits.',
        tags: ['Configurable products', 'Multi-country roll-out', 'Finite scheduling'],
      },
      {
        name: 'Home appliances & electronics',
        desc: 'High-volume, multi-variant assembly with strong export delivery commitments. Mid- and short-term planning accuracy determines line flexibility, and demand-supply alignment with tactical planning becomes a first-class concern.',
        tags: ['Multi-variant assembly', 'Mid-term planning', 'Demand-supply alignment'],
      },
      {
        name: 'Pharmaceuticals & life sciences',
        desc: 'Regulated manufacturing where batch management, traceability and quality gates are not optional features but the operating constraint. Planning and quality have to be designed together, with an auditable release path.',
        tags: ['Batch traceability', 'GMP-aligned processes', 'Quality gates'],
      },
      {
        name: 'Building materials & wood panels',
        desc: 'High-capacity continuous manufacturing where production sequencing directly drives yield and waste. Planning improvements here show up quickly in material utilization and changeover losses.',
        tags: ['Continuous production', 'Sequence optimization', 'Waste reduction'],
      },
    ],
    beyond: {
      heading: 'Not on this list?',
      text: 'These are the sectors where we have direct project experience, but the discipline transfers. If your production system has capacity constraints, sequence dependencies and a planning process people do not trust, the problem is one we recognize — regardless of what comes off the line. Tell us about it and we will say honestly whether we are the right fit.',
    },
    note: 'Sector descriptions are generic by design. We do not publish client names. References are shared in conversation, with client approval, under confidentiality.',
  },

  contact: {
    metaTitle: 'Contact — Kesoniti',
    metaDescription:
      'Contact Kesoniti to discuss SAP PP, PP/DS, QM or PM consulting for your manufacturing enterprise.',
    hero: {
      eyebrow: 'Contact',
      heading: 'Tell us where planning hurts.',
      sub: 'Describe your situation in a few sentences — system landscape, module area, what is not working. You will get a substantive reply from a consultant, not a sales sequence.',
    },
    form: {
      name: 'Full name',
      email: 'Work email',
      company: 'Company',
      module: 'Module of interest',
      modulePlaceholder: 'Select a module…',
      moduleOptions: ['SAP PP — Production Planning', 'SAP PP/DS — Detailed Scheduling', 'SAP QM — Quality Management', 'SAP PM — Plant Maintenance', 'SAP IBP integration', 'Not sure yet — general inquiry'],
      message: 'Your message',
      messagePlaceholder: 'Current system landscape, the planning problem you are facing, and rough timeline…',
      submit: 'Send inquiry',
      privacyNote: 'We use your details solely to respond to your inquiry. No newsletters, no lists.',
      configNote: '[FORM ENDPOINT NOT CONFIGURED — connect Formspree, Netlify Forms or a mail backend before launch.]',
    },
    info: {
      heading: 'Direct',
      addressLabel: 'Address',
      address: '30 N Gould St # 11590\nSheridan, WY 82801\nUnited States',
      emailLabel: 'Email',
      email: 'info@kesoniti.com',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/company/kesoniti-llc',
      linkedinUrl: 'https://www.linkedin.com/company/kesoniti-llc',
    },
  },
};

export type Content = typeof en;
