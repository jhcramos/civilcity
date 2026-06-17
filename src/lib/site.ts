export const site = {
  name: "CivilCity Engineering Consultants",
  domain: "https://civilcity.com.au",
  email: "hello@civilcity.com.au",
  phone: "+61 422 723 400",
  region: "Sunshine Coast, Noosa, Moreton Bay and South East Queensland",
  shortRegion: "Sunshine Coast",
  description:
    "CivilCity Engineering Consultants is a Sunshine Coast civil engineering consultancy for development value, approvals, RPEQ certification, stormwater, civil design and construction-phase support.",
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Project Types" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const serviceAreas = [
  "Sunshine Coast",
  "Noosa",
  "Maroochydore",
  "Caloundra",
  "Buderim",
  "Nambour",
  "Moreton Bay",
  "South East Queensland",
];

export const imagery = {
  hero: "/civilcity-subdivision-hero.png",
  plans: "/civilcity-plan-premium.png",
  field:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=82",
  road:
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1800&q=82",
  stormwater:
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=82",
  construction: "/civilcity-earthworks-bulldozer.png",
  coast:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82",
  documentation:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=82",
};

export const serviceImageBySlug: Record<string, string> = {
  "civil-engineering-advice": "/service-hero-advice-office-plans.webp",
  "preliminary-civil-engineering-reporting-and-design": "/service-hero-approvals-subdivision.webp",
  "material-change-of-use-engineering": "/service-hero-design-documentation.webp",
  "reconfiguration-of-a-lot-engineering": "/service-hero-approvals-subdivision.webp",
  "detailed-civil-engineering-design-and-documentation": "/service-hero-design-documentation.webp",
  "operational-works-applications": "/service-hero-approvals-subdivision.webp",
  "rpeq-certification": "/service-hero-due-diligence-rpeq.webp",
  "stormwater-drainage-design": "/service-hero-stormwater-drainage.webp",
  "erosion-and-sediment-control-design-and-inspections": "/service-hero-stormwater-drainage.webp",
  "engineering-due-diligence": "/service-hero-due-diligence-rpeq.webp",
  "car-parking-planning-and-investigations": "/service-hero-access-sight-distance.webp",
  "sight-distance-assessments": "/service-hero-access-sight-distance.webp",
  "tender-preparation-and-assessment": "/service-hero-design-documentation.webp",
  "contract-administration": "/service-hero-construction-supervision.webp",
  "project-management": "/service-hero-construction-supervision.webp",
  "construction-supervision": "/service-hero-construction-supervision.webp",
  "fast-track-engineering-support": "/service-hero-advice-office-plans.webp",
};

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  approvalContext: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaDescription: string;
  deliverables: string[];
  outcomes: string[];
  faqs: Faq[];
  related: string[];
};

const standardFaqs = (service: string): Faq[] => [
  {
    question: `Can CivilCity help with ${service} before a Sunshine Coast development application is lodged?`,
    answer:
      "Yes. Early civil engineering input can identify servicing, access, stormwater, earthworks and constructability issues before they become council information requests, approval delays or redesign costs.",
  },
  {
    question: "Does CivilCity work with town planners, architects and surveyors?",
    answer:
      "Yes. The service is set up for developer, planner and architect-led projects where civil engineering needs to support material change of use, reconfiguration of a lot, operational works, condition responses or construction documentation.",
  },
];

export const services: Service[] = [
  {
    slug: "civil-engineering-advice",
    title: "Civil Engineering Advice",
    eyebrow: "Early project guidance",
    summary:
      "Practical civil engineering advice for development feasibility, approvals strategy, design risk and project coordination.",
    approvalContext:
      "Use this service early in a Sunshine Coast project when a site has access, stormwater, earthworks, frontage works, servicing or approval-condition questions that need civil input before the planning team commits to a pathway.",
    primaryKeyword: "civil engineering advice Sunshine Coast",
    secondaryKeywords: [
      "civil engineer Sunshine Coast",
      "development engineering advice Sunshine Coast",
      "civil engineering advice for development applications",
    ],
    metaDescription:
      "Civil engineering advice on the Sunshine Coast for developers, planners and project teams needing practical RPEQ-led guidance.",
    deliverables: [
      "Site constraints review",
      "Civil engineering advice notes",
      "Approval pathway input",
      "Coordination with planners, architects and surveyors",
    ],
    outcomes: [
      "Clearer design decisions before lodgement",
      "Earlier visibility of servicing and stormwater constraints",
      "Reduced risk of avoidable approval delays",
    ],
    faqs: standardFaqs("civil engineering advice"),
    related: ["engineering-due-diligence", "preliminary-civil-engineering-reporting-and-design"],
  },
  {
    slug: "preliminary-civil-engineering-reporting-and-design",
    title: "Preliminary Civil Engineering Reporting and Design",
    eyebrow: "Planning-stage engineering",
    summary:
      "Preliminary civil reports and concept-level design input for material change of use, reconfiguration of a lot and other town planning applications.",
    approvalContext:
      "This is the planning-stage civil engineering page for MCU, ROL and early development applications. It helps planners and applicants explain likely access, stormwater, servicing, earthworks and infrastructure constraints before detailed design or operational works starts.",
    primaryKeyword: "preliminary civil engineering report Sunshine Coast",
    secondaryKeywords: [
      "material change of use civil engineer Sunshine Coast",
      "reconfiguration of a lot civil engineering report",
      "town planning civil engineering report Sunshine Coast",
    ],
    metaDescription:
      "Preliminary civil engineering reports and concept design for Sunshine Coast material change of use, reconfiguration of a lot and other planning applications.",
    deliverables: [
      "Preliminary civil engineering report",
      "Material change of use civil input",
      "Reconfiguration of a lot civil input",
      "Concept earthworks, access and drainage input",
      "Servicing and infrastructure constraints review",
      "Council condition risk notes",
    ],
    outcomes: [
      "Better material change of use and reconfiguration of a lot submissions",
      "Sharper project budgets",
      "A clearer bridge from concept to detailed design",
    ],
    faqs: standardFaqs("preliminary civil engineering reporting"),
    related: ["material-change-of-use-engineering", "reconfiguration-of-a-lot-engineering"],
  },
  {
    slug: "material-change-of-use-engineering",
    title: "Material Change of Use Engineering",
    eyebrow: "MCU civil input",
    summary:
      "Civil engineering support for Material Change of Use applications, including access, stormwater, servicing, earthworks and infrastructure constraints.",
    approvalContext:
      "Material Change of Use applications often need early civil engineering to show that a proposed use can be serviced, accessed, drained and delivered without creating avoidable council information requests. CivilCity supports planners and applicants with practical engineering input before detailed design is locked in.",
    primaryKeyword: "material change of use engineering Sunshine Coast",
    secondaryKeywords: [
      "MCU civil engineer Sunshine Coast",
      "material change of use civil engineering report",
      "civil engineering for town planning applications Sunshine Coast",
    ],
    metaDescription:
      "Civil engineering support for Sunshine Coast Material Change of Use applications, including access, stormwater, servicing and earthworks advice.",
    deliverables: [
      "MCU civil engineering advice note",
      "Access, parking and frontage constraints review",
      "Stormwater and lawful discharge input",
      "Earthworks, levels and servicing observations",
      "Coordination with town planner, architect and surveyor",
    ],
    outcomes: [
      "Planning submissions with clearer civil engineering support",
      "Earlier visibility of servicing and stormwater risks",
      "A stronger bridge from approval strategy to detailed design",
    ],
    faqs: [
      {
        question: "When should civil engineering be included in a Material Change of Use application?",
        answer:
          "Civil input is most useful before lodgement, while the layout and planning strategy can still respond to access, stormwater, levels, servicing and frontage constraints.",
      },
      ...standardFaqs("material change of use engineering"),
    ],
    related: ["preliminary-civil-engineering-reporting-and-design", "stormwater-drainage-design"],
  },
  {
    slug: "reconfiguration-of-a-lot-engineering",
    title: "Reconfiguration of a Lot Engineering",
    eyebrow: "ROL civil input",
    summary:
      "Civil engineering support for Reconfiguration of a Lot applications, including subdivision access, stormwater, levels, road frontage and servicing advice.",
    approvalContext:
      "Reconfiguration of a Lot applications need civil thinking early because lot layout, road frontage, access, stormwater discharge, levels and servicing can all affect yield, conditions and future operational works. CivilCity helps the planning team test those issues before the project becomes expensive to redesign.",
    primaryKeyword: "reconfiguration of a lot engineering Sunshine Coast",
    secondaryKeywords: [
      "ROL civil engineer Sunshine Coast",
      "subdivision civil engineering Sunshine Coast",
      "civil engineering for reconfiguration of a lot",
    ],
    metaDescription:
      "Civil engineering support for Sunshine Coast Reconfiguration of a Lot applications, including subdivision access, stormwater, levels and servicing advice.",
    deliverables: [
      "ROL civil engineering advice note",
      "Subdivision access and road frontage review",
      "Stormwater and overland flow constraints input",
      "Servicing, earthworks and levels observations",
      "Operational works readiness notes",
    ],
    outcomes: [
      "Subdivision layouts shaped around practical civil constraints",
      "Earlier understanding of likely approval conditions",
      "Cleaner transition from planning approval to operational works",
    ],
    faqs: [
      {
        question: "Does a Reconfiguration of a Lot application need civil engineering before operational works?",
        answer:
          "Often yes. Early engineering input can help identify access, stormwater, servicing and levels constraints before the project reaches detailed operational works design.",
      },
      ...standardFaqs("reconfiguration of a lot engineering"),
    ],
    related: ["operational-works-applications", "engineering-due-diligence"],
  },
  {
    slug: "detailed-civil-engineering-design-and-documentation",
    title: "Detailed Civil Engineering Design and Documentation",
    eyebrow: "Design documentation",
    summary:
      "Detailed civil design and documentation for roads, access, stormwater, earthworks and development infrastructure.",
    approvalContext:
      "Detailed design turns approval conditions and planning concepts into coordinated drawings and calculations for roads, car parking, pedestrian and vehicle access, cycle infrastructure, stormwater, sewer, water and earthworks packages.",
    primaryKeyword: "civil engineering design Sunshine Coast",
    secondaryKeywords: [
      "detailed civil design Sunshine Coast",
      "stormwater road sewer water civil design",
      "civil documentation for operational works",
    ],
    metaDescription:
      "Detailed civil engineering design and documentation for Sunshine Coast development projects, access, stormwater and earthworks.",
    deliverables: [
      "Civil design drawings",
      "Stormwater and earthworks documentation",
      "Technical notes and design calculations",
      "RPEQ review and certification where applicable",
    ],
    outcomes: [
      "Coordinated documentation for approval and tender",
      "Designs aligned with approval conditions",
      "Clearer construction-phase information",
    ],
    faqs: standardFaqs("detailed civil engineering design"),
    related: ["stormwater-drainage-design", "tender-preparation-and-assessment"],
  },
  {
    slug: "operational-works-applications",
    title: "Operational Works Applications",
    eyebrow: "Council approval packages",
    summary:
      "Civil engineering support for operational works applications, including drawings, technical responses, RPEQ review and lodgement coordination.",
    approvalContext:
      "Operational works is where approval conditions become detailed civil engineering documentation. CivilCity prepares and coordinates civil drawings, responses and RPEQ review for infrastructure, access, stormwater, earthworks and frontage works needed before construction.",
    primaryKeyword: "operational works application Sunshine Coast",
    secondaryKeywords: [
      "operational works engineer Sunshine Coast",
      "civil operational works drawings Sunshine Coast",
      "RPEQ operational works Sunshine Coast",
    ],
    metaDescription:
      "Civil engineering support for Sunshine Coast operational works applications, including civil drawings, responses and RPEQ review.",
    deliverables: [
      "Operational works drawing package",
      "Condition response support",
      "Coordination with town planners and council processes",
      "RPEQ certification where required",
    ],
    outcomes: [
      "A tighter path from development approval to construction",
      "Fewer avoidable information requests",
      "Documentation shaped around approval conditions",
    ],
    faqs: [
      {
        question: "Can CivilCity help before operational works?",
        answer:
          "Yes. CivilCity can provide early civil engineering input for Material Change of Use and Reconfiguration of a Lot applications, then prepare operational works documentation when the project reaches detailed approval.",
      },
      ...standardFaqs("planning and operational works applications"),
    ],
    related: ["reconfiguration-of-a-lot-engineering", "detailed-civil-engineering-design-and-documentation"],
  },
  {
    slug: "rpeq-certification",
    title: "RPEQ Certification",
    eyebrow: "Queensland engineering assurance",
    summary:
      "RPEQ certification for civil engineering work that requires registered professional engineering review and sign-off in Queensland.",
    approvalContext:
      "RPEQ review may be needed where Queensland engineering work requires professional certification, design verification or a clear engineering sign-off trail for council, project consultants or construction stakeholders.",
    primaryKeyword: "RPEQ civil engineer Sunshine Coast",
    secondaryKeywords: [
      "RPEQ certification Sunshine Coast",
      "registered professional engineer Queensland civil",
      "civil engineering certification Queensland",
    ],
    metaDescription:
      "RPEQ civil engineer on the Sunshine Coast for certification, design review and Queensland engineering compliance support.",
    deliverables: [
      "RPEQ review of civil design packages",
      "Certification letters and forms where applicable",
      "Design compliance notes",
      "Coordination with project consultants",
    ],
    outcomes: [
      "Professional engineering sign-off for Queensland projects",
      "Clearer compliance trail",
      "Reduced uncertainty around certification requirements",
    ],
    faqs: [
      {
        question: "Can CivilCity certify Unitywater connection applications?",
        answer:
          "CivilCity is planned to launch with RPEQ capability only. Unitywater Accredited Entity or Registered Certifier services should only be advertised if that accreditation is later obtained and verified.",
      },
      ...standardFaqs("RPEQ certification"),
    ],
    related: ["civil-engineering-advice", "detailed-civil-engineering-design-and-documentation"],
  },
  {
    slug: "stormwater-drainage-design",
    title: "Stormwater Drainage Design",
    eyebrow: "Drainage and runoff",
    summary:
      "Stormwater drainage design for development sites, including runoff management, drainage layouts and coordination with approval requirements.",
    approvalContext:
      "Stormwater design is a common approval risk for Sunshine Coast infill, subdivision, commercial and industrial sites. This page supports searchers who need runoff, detention, drainage layout and downstream-discharge issues resolved before lodgement, operational works or construction.",
    primaryKeyword: "stormwater design Sunshine Coast",
    secondaryKeywords: [
      "stormwater drainage engineer Sunshine Coast",
      "development stormwater design Sunshine Coast",
      "stormwater detention design civil engineer",
    ],
    metaDescription:
      "Stormwater drainage design on the Sunshine Coast for developers, planners and project teams needing civil engineering support.",
    deliverables: [
      "Stormwater drainage layouts",
      "Runoff and detention design input",
      "Drainage calculations and technical notes",
      "Coordination with civil drawings and approval conditions",
    ],
    outcomes: [
      "Better managed stormwater risk",
      "Documentation aligned with council expectations",
      "Fewer late-stage drainage redesigns",
    ],
    faqs: standardFaqs("stormwater drainage design"),
    related: ["operational-works-applications", "erosion-and-sediment-control-design-and-inspections"],
  },
  {
    slug: "erosion-and-sediment-control-design-and-inspections",
    title: "Erosion and Sediment Control Design and Inspections",
    eyebrow: "Construction-phase controls",
    summary:
      "Erosion and sediment control planning and inspections to help construction works protect downstream environments and meet approval requirements.",
    approvalContext:
      "Erosion and sediment control content targets builders, developers and project managers preparing for site works, especially where approval conditions, disturbed areas, drainage paths or inspections need practical civil engineering input.",
    primaryKeyword: "erosion sediment control Sunshine Coast",
    secondaryKeywords: [
      "erosion and sediment control plan Sunshine Coast",
      "ESC inspections Sunshine Coast",
      "construction sediment control civil engineer",
    ],
    metaDescription:
      "Erosion and sediment control design and inspections for Sunshine Coast civil construction and development sites.",
    deliverables: [
      "Erosion and sediment control plans",
      "Inspection checklists and site notes",
      "Construction staging input",
      "Practical control recommendations",
    ],
    outcomes: [
      "Cleaner construction-phase compliance",
      "Reduced environmental and approval risk",
      "Controls that suit actual site staging",
    ],
    faqs: standardFaqs("erosion and sediment control"),
    related: ["construction-supervision", "stormwater-drainage-design"],
  },
  {
    slug: "engineering-due-diligence",
    title: "Engineering Due Diligence",
    eyebrow: "Before you commit",
    summary:
      "Civil engineering due diligence for development sites before acquisition, design commitment or planning lodgement.",
    approvalContext:
      "Due diligence catches developers and buyers before they commit to a site. The focus is on civil risks that can affect feasibility: stormwater discharge, access, frontage works, servicing, earthworks, levels, easements and likely approval constraints.",
    primaryKeyword: "engineering due diligence Sunshine Coast",
    secondaryKeywords: [
      "development site due diligence Sunshine Coast",
      "civil engineering feasibility Sunshine Coast",
      "pre purchase civil engineering review",
    ],
    metaDescription:
      "Civil engineering due diligence for Sunshine Coast development sites, covering stormwater, access, servicing and approval risks.",
    deliverables: [
      "Site engineering risk review",
      "Servicing and stormwater constraints notes",
      "Access and constructability observations",
      "Recommended next-step actions",
    ],
    outcomes: [
      "Better acquisition decisions",
      "Earlier awareness of costly constraints",
      "A practical brief for the planning team",
    ],
    faqs: standardFaqs("engineering due diligence"),
    related: ["civil-engineering-advice", "car-parking-planning-and-investigations"],
  },
  {
    slug: "car-parking-planning-and-investigations",
    title: "Car Parking Planning and Investigations",
    eyebrow: "Access and movement",
    summary:
      "Car parking, access and movement investigations for development applications and site planning.",
    approvalContext:
      "This service supports planning applications where parking supply, access geometry, vehicle movement, pedestrian access or internal circulation could affect council assessment, design coordination or site yield.",
    primaryKeyword: "car parking planning Sunshine Coast",
    secondaryKeywords: [
      "car parking assessment Sunshine Coast",
      "vehicle access design Sunshine Coast",
      "parking and access civil engineer",
    ],
    metaDescription:
      "Car parking planning and access investigations for Sunshine Coast development sites and planning applications.",
    deliverables: [
      "Parking layout review",
      "Access and manoeuvring advice",
      "Planning-stage investigation notes",
      "Coordination with civil and architectural drawings",
    ],
    outcomes: [
      "More efficient site layouts",
      "Earlier resolution of access issues",
      "Planning submissions with stronger technical support",
    ],
    faqs: standardFaqs("car parking planning"),
    related: ["sight-distance-assessments", "engineering-due-diligence"],
  },
  {
    slug: "sight-distance-assessments",
    title: "Sight Distance Assessments",
    eyebrow: "Access safety",
    summary:
      "Sight distance assessments for driveways, access points and development interfaces with road networks.",
    approvalContext:
      "Sight distance assessment pages target development applications, driveway upgrades, new access points and road-interface questions where safe visibility may affect planning support or design changes.",
    primaryKeyword: "sight distance assessment Sunshine Coast",
    secondaryKeywords: [
      "driveway sight distance Sunshine Coast",
      "access sight distance assessment",
      "road access civil engineer Sunshine Coast",
    ],
    metaDescription:
      "Sight distance assessments on the Sunshine Coast for development access, driveways and planning-stage civil advice.",
    deliverables: [
      "Sight distance assessment notes",
      "Access constraint review",
      "Drawing markups where useful",
      "Recommendations for design coordination",
    ],
    outcomes: [
      "Clearer access feasibility",
      "Stronger planning responses",
      "Earlier identification of road-interface risks",
    ],
    faqs: standardFaqs("sight distance assessments"),
    related: ["car-parking-planning-and-investigations", "civil-engineering-advice"],
  },
  {
    slug: "tender-preparation-and-assessment",
    title: "Tender Preparation and Assessment",
    eyebrow: "Procurement support",
    summary:
      "Tender documentation and assessment support for civil works packages, helping project teams compare scope, risk and value.",
    approvalContext:
      "Tender support speaks to project teams moving from approval or design documentation into contractor pricing, scope clarification, tender comparison and award recommendations for civil works.",
    primaryKeyword: "civil tender preparation Sunshine Coast",
    secondaryKeywords: [
      "civil works tender documentation",
      "tender assessment civil engineering",
      "civil contractor tender evaluation",
    ],
    metaDescription:
      "Tender preparation and tender assessment support for civil engineering works on the Sunshine Coast and SEQ.",
    deliverables: [
      "Tender-ready drawing and scope inputs",
      "Technical schedules",
      "Tender clarification support",
      "Tender assessment notes",
    ],
    outcomes: [
      "Clearer pricing information",
      "More comparable contractor submissions",
      "Better alignment between design intent and delivery",
    ],
    faqs: standardFaqs("tender preparation"),
    related: ["contract-administration", "detailed-civil-engineering-design-and-documentation"],
  },
  {
    slug: "contract-administration",
    title: "Contract Administration",
    eyebrow: "Delivery governance",
    summary:
      "Civil contract administration support for construction works, documentation, contractor queries and project controls.",
    approvalContext:
      "Contract administration pages capture construction-stage searches from developers and project managers who need civil engineering support for claims, variations, RFIs, progress checks, records and technical issues during delivery.",
    primaryKeyword: "civil contract administration Sunshine Coast",
    secondaryKeywords: [
      "civil construction contract administration",
      "civil works RFI support",
      "construction contract engineer Sunshine Coast",
    ],
    metaDescription:
      "Civil contract administration support for Sunshine Coast development infrastructure and civil construction projects.",
    deliverables: [
      "Contractor query support",
      "Progress and documentation review",
      "Variation and technical advice",
      "Project meeting input",
    ],
    outcomes: [
      "Better control during construction",
      "Faster technical responses",
      "Clearer record keeping for project teams",
    ],
    faqs: standardFaqs("contract administration"),
    related: ["project-management", "construction-supervision"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    eyebrow: "Civil delivery support",
    summary:
      "Civil engineering project management support for approvals, design coordination, tendering and construction-phase delivery.",
    approvalContext:
      "Project management copy connects the approval pathway with delivery: consultant coordination, civil design inputs, operational works tasks, tender programme and site-phase engineering decisions.",
    primaryKeyword: "civil project management Sunshine Coast",
    secondaryKeywords: [
      "civil engineering project manager Sunshine Coast",
      "development project management civil engineering",
      "civil design coordination Sunshine Coast",
    ],
    metaDescription:
      "Civil engineering project management support on the Sunshine Coast for approvals, design coordination and construction delivery.",
    deliverables: [
      "Design and consultant coordination",
      "Approval and delivery programme input",
      "Technical risk tracking",
      "Stakeholder communication support",
    ],
    outcomes: [
      "Less friction between design and delivery",
      "Clearer accountability for next steps",
      "Practical engineering leadership through the project",
    ],
    faqs: standardFaqs("civil project management"),
    related: ["contract-administration", "operational-works-applications"],
  },
  {
    slug: "construction-supervision",
    title: "Construction Supervision",
    eyebrow: "Site-phase support",
    summary:
      "Construction supervision support for civil works, inspections, technical queries and quality-focused delivery.",
    approvalContext:
      "Construction supervision pages are written for approved projects moving into earthworks, drainage, roadworks, access, erosion and sediment controls, contractor queries and practical site decisions.",
    primaryKeyword: "civil construction supervision Sunshine Coast",
    secondaryKeywords: [
      "civil works supervision Sunshine Coast",
      "construction phase civil engineer",
      "civil site inspections Sunshine Coast",
    ],
    metaDescription:
      "Civil construction supervision on the Sunshine Coast for development works, inspections and engineering support during delivery.",
    deliverables: [
      "Site inspections and observation notes",
      "Technical query responses",
      "Defect and quality observations",
      "Coordination with contractor and project team",
    ],
    outcomes: [
      "Better construction quality control",
      "Earlier resolution of site issues",
      "A stronger link between design intent and built outcome",
    ],
    faqs: standardFaqs("construction supervision"),
    related: ["erosion-and-sediment-control-design-and-inspections", "contract-administration"],
  },
  {
    slug: "fast-track-engineering-support",
    title: "Fast-Track Engineering Support",
    eyebrow: "Responsive help",
    summary:
      "Responsive civil engineering support for urgent design questions, approval responses, site issues and consultant coordination.",
    approvalContext:
      "Fast-track engineering is useful when a council information request, consultant deadline, design clash, tender query or site issue needs focused civil engineering input without waiting for a full project engagement to be scoped from scratch.",
    primaryKeyword: "fast track civil engineering Sunshine Coast",
    secondaryKeywords: [
      "urgent civil engineer Sunshine Coast",
      "fast approval response civil engineer",
      "civil engineering information request support",
    ],
    metaDescription:
      "Fast-track civil engineering support on the Sunshine Coast for urgent approval, design and construction-phase issues.",
    deliverables: [
      "Rapid technical review",
      "Priority advice notes",
      "Focused design markups",
      "Short-turnaround consultant coordination",
    ],
    outcomes: [
      "Faster movement on blocked project tasks",
      "Focused advice without unnecessary process",
      "Clear next steps for the broader project team",
    ],
    faqs: standardFaqs("fast-track civil engineering support"),
    related: ["civil-engineering-advice", "operational-works-applications"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  keywords: string[];
  faqs: Faq[];
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-an-operational-works-application-in-queensland",
    title: "What is an operational works application in Queensland?",
    description:
      "A practical explanation of operational works applications for Queensland development projects.",
    date: "2026-06-11",
    category: "Approvals",
    keywords: ["operational works application Queensland", "operational works Sunshine Coast"],
    faqs: [
      {
        question: "Is operational works the same as a development application?",
        answer:
          "No. Operational works commonly follows a development approval and deals with the detailed engineering works needed before construction can proceed.",
      },
    ],
    sections: [
      {
        heading: "The short version",
        body: "Operational works is the approval pathway for specific physical works that affect a property or its use, such as civil infrastructure, access, earthworks and stormwater works.",
      },
      {
        heading: "Why it matters",
        body: "A development approval may set the planning permission, but operational works often turns approval conditions into detailed engineering documentation for construction.",
      },
      {
        heading: "How CivilCity helps",
        body: "CivilCity can prepare civil drawings, coordinate technical responses and help project teams move from approval conditions toward construction readiness.",
      },
    ],
  },
  {
    slug: "when-do-you-need-an-rpeq-civil-engineer-on-the-sunshine-coast",
    title: "When do you need an RPEQ civil engineer on the Sunshine Coast?",
    description:
      "Understand when RPEQ involvement is needed for Queensland civil engineering projects.",
    date: "2026-06-11",
    category: "RPEQ",
    keywords: ["RPEQ civil engineer Sunshine Coast", "Queensland engineering certification"],
    faqs: [
      {
        question: "Can any engineer sign off Queensland civil engineering work?",
        answer:
          "Professional engineering services for Queensland projects generally need to be carried out by, or directly supervised by, an RPEQ.",
      },
    ],
    sections: [
      {
        heading: "RPEQ means registered engineering accountability",
        body: "RPEQ registration gives project teams a recognised professional engineering pathway for design review, certification and technical accountability in Queensland.",
      },
      {
        heading: "Common civil triggers",
        body: "Civil design drawings, stormwater calculations, operational works packages and engineering certification forms are common moments where RPEQ involvement may be required.",
      },
      {
        heading: "Use it early",
        body: "Early RPEQ input helps reduce rework by identifying standards, assumptions and compliance requirements before documents are issued.",
      },
    ],
  },
  {
    slug: "operational-works-after-development-approval-what-happens-next",
    title: "Operational works after development approval: what happens next?",
    description:
      "What project teams should expect after a development approval includes civil engineering conditions.",
    date: "2026-06-11",
    category: "Approvals",
    keywords: ["development approval operational works", "civil engineering approval conditions"],
    faqs: [
      {
        question: "Can construction start straight after development approval?",
        answer:
          "Not always. If the approval requires operational works or other conditioned approvals, those steps usually need to be completed before construction starts.",
      },
    ],
    sections: [
      {
        heading: "Read the approval conditions carefully",
        body: "The first task is to identify which conditions need civil design, certification, council approval or construction-phase evidence.",
      },
      {
        heading: "Build the documentation package",
        body: "The project team then prepares the drawings, calculations, forms and supporting technical material needed for assessment.",
      },
      {
        heading: "Keep consultants aligned",
        body: "Town planning, architecture, landscape, survey and civil design often need to move together so one discipline does not create avoidable delays for another.",
      },
    ],
  },
  {
    slug: "stormwater-design-requirements-for-sunshine-coast-developments",
    title: "Stormwater design requirements for Sunshine Coast developments",
    description:
      "Key stormwater design issues for Sunshine Coast development planning and approvals.",
    date: "2026-06-11",
    category: "Stormwater",
    keywords: ["stormwater design Sunshine Coast", "stormwater drainage design"],
    faqs: [
      {
        question: "Should stormwater be reviewed during feasibility?",
        answer:
          "Yes. Stormwater constraints can influence yield, levels, infrastructure costs and approval risk, so early review is usually worthwhile.",
      },
    ],
    sections: [
      {
        heading: "Stormwater is rarely just a pipe size",
        body: "Development stormwater design can involve lawful points of discharge, overland flow, detention, water quality and impacts on neighbouring land.",
      },
      {
        heading: "Local context matters",
        body: "Sunshine Coast sites can involve coastal rainfall patterns, constrained infill lots, steep sites, flood overlays and sensitive downstream environments.",
      },
      {
        heading: "Better inputs, better approvals",
        body: "Survey, planning conditions, proposed levels and architectural layouts all influence whether drainage can be resolved cleanly.",
      },
    ],
  },
  {
    slug: "civil-engineering-due-diligence-before-buying-a-development-site",
    title: "Civil engineering due diligence before buying a development site",
    description:
      "Civil engineering checks to consider before committing to a Sunshine Coast development site.",
    date: "2026-06-11",
    category: "Due diligence",
    keywords: ["engineering due diligence Sunshine Coast", "development site due diligence"],
    faqs: [
      {
        question: "What can due diligence reveal?",
        answer:
          "It can reveal access, stormwater, servicing, earthworks and constructability constraints that may affect cost, programme or yield.",
      },
    ],
    sections: [
      {
        heading: "Look for hidden infrastructure costs",
        body: "Civil constraints can sit outside the architectural footprint but still drive the feasibility of a site.",
      },
      {
        heading: "Check access early",
        body: "Driveway location, road frontage, sight distance and parking can materially affect the planning strategy.",
      },
      {
        heading: "Turn risks into decisions",
        body: "Good due diligence does not eliminate every unknown. It gives decision-makers a clearer view of what needs further investigation.",
      },
    ],
  },
  {
    slug: "common-causes-of-operational-works-delays",
    title: "Common causes of operational works delays",
    description:
      "Where operational works applications often lose time and how project teams can reduce avoidable delays.",
    date: "2026-06-11",
    category: "Approvals",
    keywords: ["operational works delays", "civil approval delays"],
    faqs: [
      {
        question: "Can operational works delays be avoided completely?",
        answer:
          "Not always, but good scoping, coordinated drawings and early condition review can reduce many avoidable delays.",
      },
    ],
    sections: [
      {
        heading: "Incomplete condition responses",
        body: "Approval conditions need to be translated into specific documentation requirements. Missing one can trigger an information request.",
      },
      {
        heading: "Unresolved consultant coordination",
        body: "Landscape, civil, survey, architecture and planning documents need to tell the same project story.",
      },
      {
        heading: "Late stormwater changes",
        body: "Drainage and levels affect many parts of a site. Solving them late can force broad redesign.",
      },
    ],
  },
  {
    slug: "sight-distance-assessments-explained",
    title: "Sight distance assessments explained",
    description:
      "A clear guide to sight distance assessments for development access and driveway planning.",
    date: "2026-06-11",
    category: "Access",
    keywords: ["sight distance assessment", "driveway access civil engineer"],
    faqs: [
      {
        question: "Why does sight distance matter?",
        answer:
          "Sight distance helps assess whether drivers have enough visibility to safely enter, exit or interact with the road environment.",
      },
    ],
    sections: [
      {
        heading: "It is about safe movement",
        body: "Sight distance considers visibility, road geometry, vehicle speeds and access positioning.",
      },
      {
        heading: "It can shape site layout",
        body: "A constrained frontage may affect driveway position, car park layout or whether access needs redesign.",
      },
      {
        heading: "Assess early",
        body: "Early sight distance review gives planners and designers more room to adjust the layout before lodgement.",
      },
    ],
  },
  {
    slug: "erosion-and-sediment-control-plans-for-small-developments",
    title: "Erosion and sediment control plans for small developments",
    description:
      "Why small development sites still need practical erosion and sediment control thinking.",
    date: "2026-06-11",
    category: "Construction",
    keywords: ["erosion sediment control plan Sunshine Coast", "civil construction controls"],
    faqs: [
      {
        question: "Do small sites need erosion and sediment control?",
        answer:
          "Often yes. The control approach should match the site risk, staging, soil exposure and downstream environment.",
      },
    ],
    sections: [
      {
        heading: "Small sites can still create runoff risk",
        body: "Short construction windows, tight boundaries and exposed soil can create practical compliance challenges.",
      },
      {
        heading: "Controls should suit staging",
        body: "A useful plan considers how the site will actually be built, not just how it looks at completion.",
      },
      {
        heading: "Inspection closes the loop",
        body: "Plans need site follow-through, especially after rainfall or changes to construction sequencing.",
      },
    ],
  },
  {
    slug: "car-parking-and-access-design-considerations",
    title: "Car parking and access design considerations",
    description:
      "Civil engineering considerations for car parking, access and movement on development sites.",
    date: "2026-06-11",
    category: "Access",
    keywords: ["car parking planning Sunshine Coast", "access design civil engineer"],
    faqs: [
      {
        question: "When should parking layouts be checked?",
        answer:
          "Parking and access should be reviewed while the site layout is still flexible, especially where frontage or levels are constrained.",
      },
    ],
    sections: [
      {
        heading: "Parking is a civil and planning issue",
        body: "Parking layouts affect vehicle movement, pedestrian safety, stormwater, levels and approval compliance.",
      },
      {
        heading: "Access geometry matters",
        body: "Entry points, grades and manoeuvring areas need to work for the intended users and service vehicles.",
      },
      {
        heading: "Coordinate the edges",
        body: "Civil design should align with architectural layouts, landscaping, waste collection and frontage works.",
      },
    ],
  },
  {
    slug: "preliminary-civil-engineering-reports-for-town-planning-applications",
    title: "Preliminary civil engineering reports for town planning applications",
    description:
      "How preliminary civil reports help planning teams identify design and approval issues earlier.",
    date: "2026-06-11",
    category: "Planning",
    keywords: ["preliminary civil engineering report", "town planning civil engineer"],
    faqs: [
      {
        question: "What should a preliminary civil report cover?",
        answer:
          "It usually covers the civil issues most relevant to planning, such as access, earthworks, drainage, servicing and approval constraints.",
      },
    ],
    sections: [
      {
        heading: "A planning report should be decision-useful",
        body: "The best preliminary advice helps the team understand what is feasible, risky or likely to need further design.",
      },
      {
        heading: "Keep it proportionate",
        body: "The report should match the stage of the project. It should not over-design the site before key planning decisions are made.",
      },
      {
        heading: "Make the next step obvious",
        body: "A good report sets up detailed design by naming the assumptions, gaps and coordination items that matter.",
      },
    ],
  },
  {
    slug: "tender-documentation-for-civil-works",
    title: "Tender documentation for civil works",
    description:
      "How clear civil tender documentation helps developers compare contractor pricing and project risk.",
    date: "2026-06-11",
    category: "Tendering",
    keywords: ["civil tender documentation", "tender preparation civil works"],
    faqs: [
      {
        question: "Why does tender documentation quality matter?",
        answer:
          "Clear documentation helps contractors price the same scope, reducing ambiguity, provisional assumptions and disputes.",
      },
    ],
    sections: [
      {
        heading: "Tenderers price what they understand",
        body: "Ambiguous drawings or scope gaps often return as exclusions, qualifications or inflated risk allowances.",
      },
      {
        heading: "Technical schedules help comparison",
        body: "A structured tender package makes it easier to compare submissions on more than headline price.",
      },
      {
        heading: "Assessment is part of value",
        body: "Engineering review can identify whether a contractor has misunderstood the scope or proposed a practical alternative.",
      },
    ],
  },
  {
    slug: "construction-supervision-versus-contract-administration",
    title: "Construction supervision versus contract administration",
    description:
      "Understand the difference between civil construction supervision and contract administration support.",
    date: "2026-06-11",
    category: "Construction",
    keywords: ["construction supervision civil engineer", "civil contract administration"],
    faqs: [
      {
        question: "Do projects need both services?",
        answer:
          "Some do. Construction supervision focuses on site observation and technical delivery, while contract administration supports the contract process and project records.",
      },
    ],
    sections: [
      {
        heading: "Supervision is site-facing",
        body: "Construction supervision helps observe the works, identify technical issues and connect the built outcome back to the design intent.",
      },
      {
        heading: "Contract administration is process-facing",
        body: "Contract administration supports queries, records, variations, progress and formal project communication.",
      },
      {
        heading: "The overlap is where projects benefit",
        body: "Civil projects often need both technical judgement and clear process control when site conditions change.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogImage(category: string) {
  const byCategory: Record<string, string> = {
    Approvals: imagery.construction,
    RPEQ: imagery.field,
    Stormwater: imagery.stormwater,
    "Due diligence": imagery.coast,
    Access: imagery.road,
    Construction: imagery.construction,
    Planning: imagery.documentation,
    Tendering: "/insight-tender-earthworks-quantity-surveying.webp",
  };

  return byCategory[category] ?? imagery.plans;
}
