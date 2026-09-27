export const site = {
  name: "CivilCity Engineering Consultants",
  domain: "https://civilcity.com.au",
  email: "hello@civilcity.com.au",
  phone: "+61 0481 436 002",
  region: "Sunshine Coast",
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

export type ProjectType = {
  slug: string;
  title: string;
  summary: string;
  primaryKeyword: string;
  metaDescription: string;
  audience: string;
  commonConstraints: string[];
  civilInputs: string[];
  relatedServices: string[];
  relatedInsights: string[];
};

export const projectTypes: ProjectType[] = [
  {
    slug: "subdivision-engineering-sunshine-coast",
    title: "Subdivision Engineering Sunshine Coast",
    summary:
      "Civil engineering support for Sunshine Coast subdivision projects, including access, stormwater, levels, servicing, operational works and plan sealing readiness.",
    primaryKeyword: "subdivision engineering Sunshine Coast",
    metaDescription:
      "Subdivision engineering support on the Sunshine Coast for access, stormwater, levels, servicing, operational works and development feasibility.",
    audience:
      "Developers, landowners, town planners and surveyors assessing small and medium subdivision projects.",
    commonConstraints: [
      "Access handle geometry",
      "Stormwater discharge",
      "Slope and earthworks",
      "Service connections",
      "Operational works conditions",
    ],
    civilInputs: [
      "Feasibility advice",
      "ROL engineering input",
      "Stormwater and access review",
      "Operational works documentation",
      "Construction-phase support",
    ],
    relatedServices: [
      "reconfiguration-of-a-lot-engineering",
      "stormwater-drainage-design",
      "operational-works-applications",
    ],
    relatedInsights: [
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "battle-axe-subdivision-on-the-sunshine-coast-access-services-and-stormwater-risks",
      "plan-sealing-sunshine-coast-what-developers-need-to-know",
    ],
  },
  {
    slug: "townhouse-development-engineering-sunshine-coast",
    title: "Townhouse Development Engineering Sunshine Coast",
    summary:
      "Civil input for townhouse and multi-unit sites where access, parking, stormwater, levels, waste servicing and operational works can affect feasibility.",
    primaryKeyword: "townhouse development engineering Sunshine Coast",
    metaDescription:
      "Civil engineering support for Sunshine Coast townhouse developments, including access, parking, stormwater, levels and approval risk.",
    audience:
      "Developers, architects and planners testing townhouse or medium-density residential sites.",
    commonConstraints: [
      "Parking layout",
      "Waste vehicle access",
      "Overland flow",
      "Driveway grades",
      "Finished floor levels",
    ],
    civilInputs: [
      "Preliminary civil advice",
      "Access and parking review",
      "Stormwater strategy",
      "Operational works support",
      "RPEQ review",
    ],
    relatedServices: [
      "preliminary-civil-engineering-reporting-and-design",
      "car-parking-planning-and-investigations",
      "stormwater-drainage-design",
    ],
    relatedInsights: [
      "townhouse-development-sunshine-coast-civil-engineering-checklist",
      "medium-density-residential-zone-sunshine-coast-townhouse-feasibility",
      "transport-and-parking-code-sunshine-coast-small-development-checks",
    ],
  },
  {
    slug: "dual-occupancy-secondary-dwelling-engineering-sunshine-coast",
    title: "Dual Occupancy and Secondary Dwelling Engineering Sunshine Coast",
    summary:
      "Civil engineering checks for dual occupancy and secondary dwelling projects where access, parking, stormwater and overlays can decide the approval path.",
    primaryKeyword: "dual occupancy engineering Sunshine Coast",
    metaDescription:
      "Civil engineering checks for Sunshine Coast dual occupancy and secondary dwelling projects, including access, parking, stormwater and overlays.",
    audience:
      "Homeowners, small investors, designers and planners assessing compact residential development options.",
    commonConstraints: [
      "Second access",
      "Parking and manoeuvring",
      "Stormwater discharge",
      "Flood or slope overlays",
      "Service upgrades",
    ],
    civilInputs: [
      "Early feasibility advice",
      "Driveway and access review",
      "Stormwater constraints review",
      "Planning-stage engineering support",
    ],
    relatedServices: [
      "civil-engineering-advice",
      "sight-distance-assessments",
      "stormwater-drainage-design",
    ],
    relatedInsights: [
      "dual-occupancy-sunshine-coast-approval-and-civil-design-risks",
      "secondary-dwelling-sunshine-coast-civil-engineering-checks-before-you-build",
      "secondary-driveways-on-the-sunshine-coast-can-you-add-another-access",
    ],
  },
  {
    slug: "commercial-industrial-civil-engineering-sunshine-coast",
    title: "Commercial and Industrial Civil Engineering Sunshine Coast",
    summary:
      "Civil engineering support for commercial and industrial development sites involving parking, access, stormwater, earthworks and approval conditions.",
    primaryKeyword: "commercial civil engineer Sunshine Coast",
    metaDescription:
      "Commercial and industrial civil engineering support on the Sunshine Coast for access, parking, stormwater, earthworks and approvals.",
    audience:
      "Commercial developers, builders, architects, planners and project managers.",
    commonConstraints: [
      "Heavy vehicle access",
      "Parking compliance",
      "Stormwater quality",
      "Earthworks and levels",
      "Frontage works",
    ],
    civilInputs: [
      "MCU engineering input",
      "Car parking and access review",
      "Stormwater design",
      "Detailed civil documentation",
      "Construction support",
    ],
    relatedServices: [
      "material-change-of-use-engineering",
      "car-parking-planning-and-investigations",
      "detailed-civil-engineering-design-and-documentation",
    ],
    relatedInsights: [
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
      "stormwater-management-plan-sunshine-coast-when-development-needs-one",
      "common-reasons-sunshine-coast-development-applications-get-delayed",
    ],
  },
  {
    slug: "driveway-access-engineering-sunshine-coast",
    title: "Driveway and Access Engineering Sunshine Coast",
    summary:
      "Engineering support for driveway grades, sight distance, second access points, swept paths, frontage works and vehicle movement issues.",
    primaryKeyword: "driveway access engineering Sunshine Coast",
    metaDescription:
      "Driveway and access engineering on the Sunshine Coast for sight distance, grades, swept paths, second driveways and frontage constraints.",
    audience:
      "Homeowners, designers, planners, developers and builders dealing with access constraints.",
    commonConstraints: [
      "Sight distance",
      "Driveway grade",
      "Crossover location",
      "Service vehicle movement",
      "Road frontage constraints",
    ],
    civilInputs: [
      "Driveway review",
      "Sight distance assessment",
      "Swept path review",
      "Long section advice",
      "Council-response support",
    ],
    relatedServices: [
      "sight-distance-assessments",
      "car-parking-planning-and-investigations",
      "civil-engineering-advice",
    ],
    relatedInsights: [
      "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
      "driveway-long-sections-and-cross-sections-explained",
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
    ],
  },
  {
    slug: "pre-purchase-development-site-due-diligence-sunshine-coast",
    title: "Pre-Purchase Development Site Due Diligence Sunshine Coast",
    summary:
      "Civil engineering due diligence for buyers assessing subdivision, townhouse, dual occupancy or commercial development potential before committing to a site.",
    primaryKeyword: "development site due diligence Sunshine Coast",
    metaDescription:
      "Civil engineering due diligence for Sunshine Coast development site buyers checking access, stormwater, services, slope, overlays and hidden civil costs.",
    audience:
      "Property buyers, developers, investors and planners screening a site before purchase or design commitment.",
    commonConstraints: [
      "Easements",
      "Stormwater discharge",
      "Slope",
      "Flood or overlay constraints",
      "Access and frontage limitations",
    ],
    civilInputs: [
      "Site constraints review",
      "Civil risk notes",
      "Development feasibility advice",
      "Pre-purchase engineering questions",
      "Consultant coordination",
    ],
    relatedServices: [
      "engineering-due-diligence",
      "civil-engineering-advice",
      "preliminary-civil-engineering-reporting-and-design",
    ],
    relatedInsights: [
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "subdivision-feasibility-checklist-for-sunshine-coast-property-buyers",
      "how-to-read-a-sunshine-coast-council-site-report",
    ],
  },
  {
    slug: "operational-works-civil-infrastructure-sunshine-coast",
    title: "Operational Works Civil Infrastructure Sunshine Coast",
    summary:
      "Civil engineering documentation and support for approval-conditioned infrastructure, road frontage works, stormwater, earthworks and construction readiness.",
    primaryKeyword: "operational works civil infrastructure Sunshine Coast",
    metaDescription:
      "Operational works civil infrastructure support on the Sunshine Coast for road frontage works, stormwater, earthworks and construction documentation.",
    audience:
      "Developers, planners, project managers and builders moving from approval conditions to construction documentation.",
    commonConstraints: [
      "Approval conditions",
      "Civil drawing requirements",
      "Stormwater details",
      "Earthworks",
      "Construction sequencing",
    ],
    civilInputs: [
      "Operational works application support",
      "Detailed civil design",
      "RPEQ review",
      "Tender preparation",
      "Construction supervision",
    ],
    relatedServices: [
      "operational-works-applications",
      "detailed-civil-engineering-design-and-documentation",
      "rpeq-certification",
    ],
    relatedInsights: [
      "operational-works-approval-sunshine-coast-a-developers-guide",
      "common-reasons-sunshine-coast-development-applications-get-delayed",
      "plan-sealing-sunshine-coast-what-developers-need-to-know",
    ],
  },
];

export function getProjectType(slug: string) {
  return projectTypes.find((projectType) => projectType.slug === slug);
}

export { blogPosts, getBlogPost, latestBlogPosts } from "./insights";
export type { BlogPost, BlogResource, BlogSection } from "./insights";

export function getBlogImage(category: string, slug?: string) {
  const bySlug: Record<string, string> = {
    "development-application-costs-sunshine-coast-small-developers": "/insight-sunshine-coast-infrastructure-charges-budget-review.png",
    "can-i-subdivide-my-land-on-the-sunshine-coast": "/project-type-subdivision-infill.webp",
    "subdivision-feasibility-checklist-for-sunshine-coast-property-buyers": "/insight-due-diligence-development-site-selection.webp",
    "operational-works-approval-sunshine-coast-a-developers-guide": "/insight-operational-works-application-package.webp",
    "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks": "/insight-car-parking-access-design.webp",
    "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it": "/insight-car-parking-access-swept-path-review.webp",
    "how-overlays-affect-your-sunshine-coast-property": "/insight-sunshine-coast-overlays-property-assessment.png",
    "how-can-i-see-easements-on-my-property": "/insight-sunshine-coast-easement-check.png",
    "stormwater-design-on-the-sunshine-coast-what-developers-need-to-know": "/service-hero-stormwater-drainage.webp",
    "lawful-point-of-discharge-why-it-can-make-or-break-a-development": "/insight-erosion-sediment-control-small-site.webp",
    "plan-sealing-sunshine-coast-what-developers-need-to-know": "/insight-operational-works-after-da-conditions.webp",
    "driveway-long-sections-and-cross-sections-explained": "/insight-sunshine-coast-driveway-sections-review.png",
    "secondary-driveways-on-the-sunshine-coast-can-you-add-another-access": "/insight-sunshine-coast-secondary-driveway-assessment.png",
    "before-you-buy-a-development-site-civil-engineering-checks-that-matter": "/civilcity-subdivision-hero.png",
    "common-reasons-sunshine-coast-development-applications-get-delayed": "/insight-operational-works-delays-review.webp",
    "development-i-sunshine-coast-how-developers-can-research-nearby-approvals": "/insight-sunshine-coast-development-i-research.png",
    "how-to-read-a-sunshine-coast-council-site-report": "/insight-sunshine-coast-council-site-report-review.png",
    "flood-overlays-and-development-risk-on-the-sunshine-coast": "/insight-sunshine-coast-flood-overlay-drainage-risk.png",
    "battle-axe-subdivision-on-the-sunshine-coast-access-services-and-stormwater-risks": "/insight-sunshine-coast-battle-axe-access-assessment.png",
    "townhouse-development-sunshine-coast-civil-engineering-checklist": "/contact-hero-townhouses.webp",
    "development-infrastructure-charges-on-the-sunshine-coast-what-to-allow-for": "/insight-sunshine-coast-infrastructure-charges-budget-review.png",
    "what-consultants-do-you-need-for-a-sunshine-coast-subdivision": "/about-hero-subdivision-team.webp",
    "how-civil-engineering-supports-a-development-application": "/service-hero-design-documentation.webp",
    "referral-agencies-and-sara-sunshine-coast-development": "/insight-original-planning-overlays.webp",
    "public-notification-sunshine-coast-developments-what-it-means": "/about-hero-subdivision-team.webp",
    "negotiating-development-conditions-sunshine-coast-civil-items-to-watch": "/insight-operational-works-delays-review.webp",
    "how-long-does-a-sunshine-coast-subdivision-approval-take": "/insight-operational-works-delays-review.webp",
    "when-does-a-subdivision-need-operational-works": "/insight-operational-works-application-package.webp",
    "what-civil-drawings-are-needed-for-operational-works-sunshine-coast": "/service-hero-design-documentation.webp",
    "as-constructed-drawings-sunshine-coast-subdivision-closeout": "/insight-operational-works-after-da-conditions.webp",
    "subdivision-sunshine-coast": "/project-type-subdivision-infill.webp",
    "low-density-residential-subdivision-sunshine-coast-minimum-lot-size-checks": "/service-hero-advice-office-plans.webp",
    "secondary-dwelling-sunshine-coast-civil-engineering-checks-before-you-build": "/service-hero-approvals-subdivision.webp",
    "dual-occupancy-sunshine-coast-approval-and-civil-design-risks": "/service-hero-due-diligence-rpeq.webp",
    "medium-density-residential-zone-sunshine-coast-townhouse-feasibility": "/project-type-commercial-industrial.webp",
    "stormwater-management-plan-sunshine-coast-when-development-needs-one": "/insight-rpeq-signing-civil-plan.webp",
    "landslide-hazard-and-steep-land-overlay-sunshine-coast-development": "/project-type-conditioned-infrastructure.webp",
    "bushfire-hazard-overlay-sunshine-coast-subdivision-development-checks": "/about-hero-subdivision-team.webp",
    "acid-sulfate-soils-overlay-sunshine-coast-earthworks-development-risk": "/civilcity-earthworks-bulldozer.png",
    "transport-and-parking-code-sunshine-coast-small-development-checks": "/insight-sight-distance-road-access-assessment.webp",
    "small-lot-housing-sunshine-coast-planning-civil-feasibility-checks": "/service-hero-design-documentation.webp",
    "operational-works-application-sunshine-coast": "/insight-operational-works-application-package.webp",
    "stormwater-engineer-sunshine-coast": "/service-hero-stormwater-drainage.webp",
    "civil-engineer-development-application-sunshine-coast": "/service-hero-design-documentation.webp",
    "rpeq-civil-engineer-sunshine-coast": "/insight-rpeq-signing-civil-plan.webp",
    "development-site-due-diligence-sunshine-coast": "/insight-due-diligence-development-site-selection.webp",
  };

  if (slug && bySlug[slug]) return bySlug[slug];

  const byCategory: Record<string, string> = {
    Approvals: imagery.construction,
    RPEQ: "/insight-rpeq-signing-civil-plan.webp",
    Stormwater: "/service-hero-stormwater-drainage.webp",
    "Due diligence": "/insight-due-diligence-development-site-selection.webp",
    Access: "/project-type-road-access.webp",
    Construction: imagery.construction,
    Earthworks: "/civilcity-earthworks-bulldozer.png",
    Planning: "/service-hero-advice-office-plans.webp",
    Subdivision: "/project-type-subdivision-infill.webp",
    Tendering: "/insight-tender-earthworks-quantity-surveying.webp",
  };

  return byCategory[category] ?? imagery.field;
}
