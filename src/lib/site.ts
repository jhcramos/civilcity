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

export type BlogSection = {
  heading: string;
  body: string | string[];
};

export type BlogResource = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  keywords: string[];
  sourceLinks?: { label: string; href: string }[];
  faqs: Faq[];
  sections: BlogSection[];
  resources?: BlogResource[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "can-i-subdivide-my-land-on-the-sunshine-coast",
    title: "Can I subdivide my land on the Sunshine Coast?",
    description: "A practical Sunshine Coast subdivision guide for owners and small developers checking whether a property is worth investigating.",
    date: "2026-06-24",
    category: "Subdivision",
    keywords: [
      "subdivide land Sunshine Coast",
      "subdivision Sunshine Coast",
      "can I subdivide my land Sunshine Coast",
      "subdivision feasibility Sunshine Coast",
      "civil engineer subdivision Sunshine Coast"
    ],
    faqs: [
      {
        question: "Is subdivision always possible if the block is large enough?",
        answer: "No. Lot size helps, but subdivision also depends on planning controls, overlays, access, stormwater, slope, services, easements and whether the new lots can be practically constructed and serviced.",
      },
      {
        question: "What should I check before paying for a full subdivision design?",
        answer: "Start with zoning, minimum lot outcomes, overlays, title constraints, road frontage, driveway access, stormwater discharge, sewer and water availability, and likely earthworks or retaining needs.",
      },
      {
        question: "When should I speak with a civil engineer?",
        answer: "Early. A short civil feasibility review can identify access, stormwater and servicing risks before a planner, surveyor or architect invests time in a layout that may be hard to approve or build.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "You may be able to subdivide land on the Sunshine Coast, but the real answer depends on more than block size. Sunshine Coast Council planning controls, overlays, lot layout, access, stormwater, sewer, water and earthworks all shape whether a subdivision is practical.",
          "The best first step is not a full design. It is a feasibility check that tests the planning pathway and the civil engineering constraints together."
        ],
      },
      {
        heading: "What council information tells you",
        body: [
          "Sunshine Coast Council's Development.i site report can show general town planning details for a property, including planning scheme zoning, overlays, application information, mapping links, water and sewer information links, and flooding overlay information. That makes it a useful first screen for owners, purchasers and consultants.",
          "The Sunshine Coast Planning Scheme 2014 is the current local planning framework and Council encourages users to check for amendments because the scheme changes over time. Treat the report and mapping as a starting point, then confirm the specific development pathway before spending heavily."
        ],
      },
      {
        heading: "Civil issues that decide feasibility",
        body: [
          "A subdivision that looks good on a sketch can fail commercially when civil constraints are tested. Common issues include a narrow frontage, a steep driveway, no practical lawful point of discharge, existing sewer through the middle of the site, flood or overland flow constraints, retaining walls, service clashes, and access that does not suit waste or emergency vehicle movement.",
          "For small developers, these items matter because they affect yield and margin. One extra retaining wall, service relocation or stormwater easement can shift a site from attractive to marginal."
        ],
      },
      {
        heading: "A practical first-pass checklist",
        body: [
          "Check the current zoning and local plan area. Check overlays, especially flood, environmental, bushfire, coastal and steep land constraints. Review road frontage and likely driveway position. Look for easements, sewer, water, stormwater and drainage infrastructure. Test where stormwater can discharge. Look at slope and likely retaining. Compare nearby approvals through Development.i.",
          "If those checks do not reveal a clear blocker, the next step is usually a concept subdivision layout supported by civil input, planning advice and survey information."
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "The most common mistake is assuming that a big block equals an easy subdivision. The second is testing planning controls but leaving stormwater, access and services until later. The third is relying on a simple aerial image without checking title, mapping and infrastructure information.",
          "Good early advice does not guarantee approval. It does help you decide whether the site deserves more money, more time or a polite walk-away."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review the property, identify the early civil risks, coordinate with your planner or surveyor, and help shape a subdivision concept around access, stormwater, services and buildability.",
          "If you are buying, selling or testing a Sunshine Coast property, send the address, title plan if available, and your rough development idea. The useful first question is simple: what could make this site hard or expensive?"
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "subdivision-feasibility-checklist-for-sunshine-coast-property-buyers",
    title: "Subdivision feasibility checklist for Sunshine Coast property buyers",
    description: "A buyer-focused Sunshine Coast subdivision feasibility checklist covering planning, overlays, access, stormwater, services and hidden civil costs.",
    date: "2026-06-24",
    category: "Due diligence",
    keywords: [
      "subdivision feasibility Sunshine Coast",
      "property due diligence Sunshine Coast",
      "development site due diligence Sunshine Coast",
      "subdivision checklist Sunshine Coast",
      "civil due diligence Sunshine Coast"
    ],
    faqs: [
      {
        question: "Why do buyers need a subdivision feasibility checklist?",
        answer: "Because a property can look developable in a listing but carry hidden constraints in access, stormwater, easements, services, overlays or earthworks that affect cost, yield and approval risk.",
      },
      {
        question: "Can this checklist replace town planning advice?",
        answer: "No. It helps you ask better early questions. A subdivision should still be checked by the right consultant team, including planning, survey and civil engineering input.",
      },
      {
        question: "What is the biggest hidden civil risk?",
        answer: "Stormwater discharge and access are often the big ones. If water cannot leave the site lawfully, or vehicles cannot enter and exit safely, the layout may need a major rethink.",
      },
    ],
    sections: [
      {
        heading: "Use the checklist before you fall in love with the site",
        body: [
          "Subdivision feasibility is easiest to assess before emotion, sunk cost and purchase pressure take over. The goal is not to prove the site works. The goal is to find the constraints early enough that you can price them properly or walk away.",
          "On the Sunshine Coast, the first screen should combine planning controls with civil engineering reality: zoning and overlays on one side; access, stormwater, services and levels on the other."
        ],
      },
      {
        heading: "Planning and mapping checks",
        body: [
          "Start with Sunshine Coast Council's Development.i site report and current planning scheme information. The report can help surface zoning, overlay information, applications and links to mapping layers. Nearby approvals in Development.i can also show how similar sites have been treated.",
          "Look for minimum lot size expectations, local plan provisions, overlays, mapped infrastructure and any obvious history on or near the property. If the site has multiple overlays, do not treat them separately. Constraint stacking is often where feasibility gets tight."
        ],
      },
      {
        heading: "Civil checks that change the numbers",
        body: [
          "Review the frontage, likely driveway location, sight distance, slope from road to building area, stormwater discharge, sewer and water availability, existing easements and any apparent need for retaining walls. These items affect both approval risk and construction budget.",
          "For rear lots and battle-axe concepts, access width, driveway grade, service corridors and drainage paths deserve extra attention. A long access handle can consume land area while also concentrating cost."
        ],
      },
      {
        heading: "Documents to collect early",
        body: [
          "Useful early documents include the address, lot and plan details, title search, registered plan, any easement documents, survey if available, service records, previous approvals, flood or overlay mapping, and a rough sketch of the intended outcome.",
          "You do not need a perfect design to start a feasibility discussion. You need enough information to test the most expensive assumptions."
        ],
      },
      {
        heading: "Red flags for buyers",
        body: [
          "Be cautious with steep blocks, land below road level, sites without obvious drainage outlets, lots crossed by services or easements, narrow frontages, difficult intersections, flood overlay areas, and sites where nearby approvals show heavy conditions.",
          "None of these issues automatically kill a project, but each can shift the negotiation. A site with known constraints may still work if the purchase price and development strategy reflect the risk."
        ],
      },
      {
        heading: "How CivilCity can support due diligence",
        body: [
          "CivilCity can provide early engineering input for subdivision feasibility, including access, stormwater, servicing, earthworks and constructability observations. The aim is to give buyers a clearer risk picture before they commit.",
          "For small and medium developers, this can be the difference between buying a site with eyes open and inheriting a problem that was visible from the start."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "operational-works-approval-sunshine-coast-a-developers-guide",
    title: "Operational works approval Sunshine Coast: a developer's guide",
    description: "A developer-focused guide to Sunshine Coast operational works approval, civil drawings, conditions, stormwater, access and construction readiness.",
    date: "2026-06-24",
    category: "Approvals",
    keywords: [
      "operational works Sunshine Coast",
      "operational works approval Sunshine Coast",
      "operational works drawings Sunshine Coast",
      "civil operational works engineer",
      "subdivision operational works Sunshine Coast"
    ],
    faqs: [
      {
        question: "What is operational work?",
        answer: "Sunshine Coast Council describes operational work as the construction of infrastructure that affects a property or its use, commonly associated with material change of use or reconfiguration of a lot approvals.",
      },
      {
        question: "When do developers usually need operational works approval?",
        answer: "It is commonly needed after development approval where conditions require detailed civil works such as access, earthworks, stormwater, roadworks, frontage works or development infrastructure.",
      },
      {
        question: "Can construction start before operational works is approved?",
        answer: "Do not assume so. If approval conditions require operational works or other clearances, those steps may need to be completed before relevant construction starts.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Operational works is the step where planning approval conditions become detailed civil engineering documentation. For Sunshine Coast developers, it is often the bridge between development approval and construction.",
          "Council notes that operational work is normally work associated with a material change of use or reconfiguration of a lot development approval. In practical terms, this is where access, stormwater, earthworks, frontage works and infrastructure details need to become buildable drawings."
        ],
      },
      {
        heading: "Why operational works matters commercially",
        body: [
          "A development approval can feel like the finish line, but it often only starts the next technical stage. Conditions may require drawings, calculations, certifications, clearances, prestart processes, inspections and as-constructed information.",
          "If the operational works package is under-scoped, the project can lose time through information requests, consultant mismatches, late stormwater changes or construction details that were never properly resolved."
        ],
      },
      {
        heading: "What the package usually needs to resolve",
        body: [
          "The scope depends on the approval, but common civil items include road frontage works, driveway access, car parking levels, stormwater drainage, detention or quality treatment, earthworks, retaining interfaces, service coordination, erosion and sediment control, construction notes and condition responses.",
          "For subdivisions, the package also needs to support the pathway toward construction completion, as-constructed records and plan sealing."
        ],
      },
      {
        heading: "Where delays usually start",
        body: [
          "Delays often start when the planning layout, survey, civil design, landscape plan and architectural drawings do not match. Another common problem is treating stormwater as a late calculation rather than a site-shaping design issue.",
          "Operational works should be scoped from the approval conditions, but it should also be tested against buildability. Drawings that pass assessment but leave contractors guessing can still hurt the programme."
        ],
      },
      {
        heading: "Developer checklist before lodging",
        body: [
          "Confirm the current approval conditions. Gather survey, approved plans, service information and relevant reports. Confirm whether access, stormwater discharge, levels and services have changed since approval. Check whether external authority inputs are needed. Make sure drawings across disciplines tell the same story.",
          "Before lodgement, ask whether a contractor could price and build the package with reasonable confidence. If the answer is no, the documentation likely needs more work."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity prepares and coordinates civil engineering documentation for operational works, with attention to conditions, stormwater, access, services, earthworks and construction readiness.",
          "The aim is not just a lodged package. The aim is a package that helps the development move cleanly from approval to construction and then toward closeout."
        ],
      },
    ],
    resources: [
      {
        label: "Operational work",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work",
      },
      {
        label: "Development application forms and checklists",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms",
      },
      {
        label: "Fees and charges",
        href: "https://www.sunshinecoast.qld.gov.au/pay-and-apply/fees-and-charges",
      },
    ],
  },
  {
    slug: "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
    title: "Driveway design on the Sunshine Coast: what a civil engineer checks",
    description: "A practical Sunshine Coast driveway design guide covering grades, crossovers, sight distance, long sections, drainage and development approval risk.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "driveway design Sunshine Coast",
      "driveway engineer Sunshine Coast",
      "driveway long section Sunshine Coast",
      "driveway crossover Sunshine Coast",
      "steep driveway Sunshine Coast"
    ],
    faqs: [
      {
        question: "What makes a driveway difficult to design?",
        answer: "Slope, road levels, boundary levels, sight distance, stormwater, footpath interfaces, crossover location, garage levels and the vehicle type all affect the design.",
      },
      {
        question: "Why would a driveway need a long section?",
        answer: "A long section shows the driveway profile from the road to the parking or garage area, making grades and transitions visible in a way a plan view cannot.",
      },
      {
        question: "Should driveway design be checked before lodging a development application?",
        answer: "Yes, especially on steep, narrow or rear-access sites. Driveway constraints can affect the whole site layout.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Driveway design on the Sunshine Coast is not just drawing a line from the road to the garage. A civil engineer checks whether the driveway can be safely accessed, practically graded, drained, constructed and coordinated with the road frontage and site layout.",
          "This matters for ordinary homeowners, duplex projects, rear lots, battle-axe subdivisions and townhouse sites."
        ],
      },
      {
        heading: "What a civil engineer checks",
        body: [
          "A driveway review usually looks at road level, boundary level, finished garage or parking level, maximum and minimum grades, transition grades, cross-fall, sight distance, vehicle turning, crossover position, stormwater flow, footpath or verge impacts, services and retaining edges.",
          "On development sites, the driveway also needs to work with parking layout, waste collection, pedestrian movement and emergency or service vehicle access where relevant."
        ],
      },
      {
        heading: "Why Sunshine Coast sites can be tricky",
        body: [
          "Many local sites have slope, constrained frontages, older road formations, infill development pressure, coastal drainage constraints or rear-lot access. A driveway that looks simple in plan can become awkward once the long section is drawn.",
          "Steep driveway grades can create scraping, visibility, drainage and construction problems. Flat driveways can create ponding or poor discharge. The workable solution is often in the level transitions."
        ],
      },
      {
        heading: "Long sections and cross sections",
        body: [
          "A driveway long section follows the driveway along its length so levels, grades and transitions can be checked. Cross sections show width, cross-fall, edge treatment, retaining needs and how the driveway sits relative to adjoining ground.",
          "These drawings help prevent late surprises. They also give planners, certifiers, builders and council a clearer view of whether the driveway is actually buildable."
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "The common mistakes are setting the garage level before the driveway is tested, assuming the road frontage is flat, ignoring stormwater flow across the driveway, leaving sight distance until late, and forgetting that service vehicles may need to enter or turn on the site.",
          "For subdivision and townhouse projects, driveway geometry should be tested before the lot layout or building footprint is locked in."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can prepare or review driveway geometry, long sections, cross sections and access layouts for Sunshine Coast projects. The value is early clarity: can the access work, what needs to change, and what is likely to cost money?",
          "For a first review, send the address, survey if available, proposed layout and any known council or approval condition requirements."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
    title: "Swept path analysis on the Sunshine Coast: when does development need it?",
    description: "A developer-friendly guide to swept path analysis for Sunshine Coast driveways, townhouse sites, rear lots, parking layouts and service vehicle access.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "swept path analysis Sunshine Coast",
      "swept path engineer Sunshine Coast",
      "vehicle access design Sunshine Coast",
      "turning template Sunshine Coast",
      "waste truck access Sunshine Coast"
    ],
    faqs: [
      {
        question: "What is swept path analysis?",
        answer: "It is a vehicle movement test that shows the space a vehicle needs to enter, turn, pass through or exit a site using a particular vehicle template.",
      },
      {
        question: "When is swept path analysis usually needed?",
        answer: "It is most useful where access is tight, a site has rear lots or townhouses, a waste truck or service vehicle must enter, or parking and turning areas are constrained.",
      },
      {
        question: "Can swept path analysis change a development layout?",
        answer: "Yes. It can affect driveway width, aisle layout, turning heads, parking bay positions, waste collection areas and sometimes building footprint.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Swept path analysis checks whether vehicles can actually move through a proposed access layout. On the Sunshine Coast, it is especially useful for townhouse developments, rear lots, battle-axe subdivisions, small commercial sites, waste collection access and tight driveways.",
          "It is best done before a layout is frozen, because the result can change the shape of the site."
        ],
      },
      {
        heading: "What the analysis shows",
        body: [
          "A swept path drawing shows the body path and wheel path of a selected design vehicle. That could be a passenger car, service vehicle, waste vehicle, delivery van, small rigid truck or another vehicle relevant to the project.",
          "The purpose is simple: prove the vehicle can enter, move, turn and exit without unrealistic manoeuvres or clashes with buildings, kerbs, fences, parking bays or landscape areas."
        ],
      },
      {
        heading: "Where it matters most",
        body: [
          "Swept paths are particularly valuable for shared driveways, basement or podium entries, rear-lot access handles, visitor parking, townhouse courtyards, waste collection points and constrained commercial car parks.",
          "Small sites are often the hardest because every metre is already competing with yield, landscaping, stormwater and private open space."
        ],
      },
      {
        heading: "What can go wrong if it is left late",
        body: [
          "Late swept path checks can force bay removals, wider driveways, different bin storage, changed building corners, revised retaining walls or awkward turning areas. For developers, that can mean lost yield or a redraw after consultants thought the layout was settled.",
          "Early swept path analysis is cheap compared with redesigning a lodged or approved layout."
        ],
      },
      {
        heading: "What to provide for a swept path review",
        body: [
          "Useful inputs include the proposed site plan, survey, driveway grades if available, intended vehicle types, waste collection assumptions, parking layout and any council conditions or planning advice already received.",
          "If the vehicle type is uncertain, CivilCity can help identify which vehicle movements are worth testing first."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can test access layouts, prepare swept path diagrams and advise on practical design changes before the project loses flexibility.",
          "For small and medium developers, this is a targeted way to protect the layout from access problems that would otherwise appear late in assessment or construction documentation."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "how-overlays-affect-your-sunshine-coast-property",
    title: "How overlays affect your Sunshine Coast property",
    description: "A plain-English Sunshine Coast overlay guide explaining how flood, environmental, bushfire, coastal and other overlays can affect development feasibility.",
    date: "2026-06-24",
    category: "Planning",
    keywords: [
      "overlays Sunshine Coast",
      "property overlays Sunshine Coast",
      "how overlays affect property Sunshine Coast",
      "Sunshine Coast planning scheme overlays",
      "check property overlays Sunshine Coast"
    ],
    faqs: [
      {
        question: "Do overlays stop development completely?",
        answer: "Not always. Overlays often add assessment triggers, design requirements or technical evidence rather than banning development outright.",
      },
      {
        question: "Where can I check Sunshine Coast overlays?",
        answer: "Sunshine Coast Council's Development.i site report, planning scheme mapping and MyMaps tools can help identify mapped overlays and related property information.",
      },
      {
        question: "Why should a civil engineer care about overlays?",
        answer: "Overlays can affect stormwater, flood levels, access, earthworks, buildable area, environmental constraints and the cost of proving a design response.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Overlays can change what you can build, where you can build it, what studies you need and how much risk sits in the project. They are one of the first things to check before buying, subdividing or redesigning a Sunshine Coast property.",
          "An overlay does not automatically mean no development. It means the site has a mapped constraint or value that must be considered."
        ],
      },
      {
        heading: "What overlays are",
        body: [
          "Sunshine Coast planning scheme overlay information identifies areas affected by biophysical constraints, natural resources or valuable features. In plain language, overlays flag issues such as flooding, bushfire, environmental values, coastal hazards, steep land, heritage or infrastructure constraints.",
          "Council's Development.i site report can show planning scheme zoning and overlay information, mapping links, application information and other general development information for a property."
        ],
      },
      {
        heading: "How overlays affect feasibility",
        body: [
          "Overlays can affect the project in different ways. A flood overlay may change levels, access or stormwater design. An environmental overlay may change clearing, building location or approvals strategy. A steep land constraint may change earthworks and retaining. A coastal hazard overlay may change assumptions near the coast.",
          "The commercial issue is not just whether the site can be approved. It is whether the response costs more than the project can carry."
        ],
      },
      {
        heading: "What to check before you buy",
        body: [
          "Check the site report, mapping layers, planning scheme information, title documents and nearby approvals. Look for multiple overlays on the same part of the land, because overlapping constraints can reduce usable area or trigger extra technical work.",
          "Also check whether the overlay affects the same area needed for access, stormwater discharge, building footprint or services. That is where civil design can become difficult."
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "A common mistake is treating overlays as a legal issue only. They are also design and cost issues. Another mistake is looking at the building footprint but ignoring the driveway, stormwater route, service corridor or retaining walls.",
          "A development can be delayed when the overlay response is discovered after the concept has already been sold to investors, buyers or internal stakeholders."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review mapped constraints and explain how they may affect access, stormwater, earthworks, service coordination and subdivision layout.",
          "For early due diligence, the aim is to turn overlay mapping into practical next steps: what needs checking, what might cost money, and what should not be assumed yet."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "how-can-i-see-easements-on-my-property",
    title: "How can I see easements on my property?",
    description: "A Sunshine Coast property due diligence guide explaining where to find easements and why they matter for subdivision, driveways, drainage and services.",
    date: "2026-06-24",
    category: "Due diligence",
    keywords: [
      "how to see easements Sunshine Coast",
      "easements Sunshine Coast property",
      "property easement check Sunshine Coast",
      "build over easement Sunshine Coast",
      "drainage easement Sunshine Coast"
    ],
    faqs: [
      {
        question: "Where are easements usually shown?",
        answer: "They are commonly shown on title documents, registered survey plans and sometimes utility or council mapping, depending on the type of easement.",
      },
      {
        question: "Can I build over an easement?",
        answer: "Do not assume so. It depends on the easement purpose, beneficiary, asset location and approval pathway. Get site-specific advice before designing over an easement.",
      },
      {
        question: "Why do easements matter for subdivision?",
        answer: "They can affect lot layout, access handles, service corridors, stormwater discharge, building envelopes and the ability to create new titles cleanly.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "To see easements on a property, start with the title search, registered plan and any easement documents. Then compare that legal information with council mapping, utility information, survey and what is physically visible on site.",
          "For development, the key question is not just whether an easement exists. It is what the easement protects and how it affects the design."
        ],
      },
      {
        heading: "Where to look first",
        body: [
          "A title search and registered survey plan are usually the first documents to check. They can show whether an easement is registered over the land, where it sits and what instrument or dealing may explain its purpose.",
          "Sunshine Coast Council's Development.i site report can also link to general property information, mapping layers, application information and water or sewer infrastructure information links. Use these together, because one source rarely tells the whole story."
        ],
      },
      {
        heading: "Common types of easements",
        body: [
          "Development sites commonly encounter drainage easements, sewer easements, water easements, access easements and easements benefiting a neighbour or authority. Some protect underground assets. Others protect legal access or overland drainage.",
          "The same strip of land may look unused on the ground but be critical to a future subdivision layout."
        ],
      },
      {
        heading: "How easements affect design",
        body: [
          "An easement can restrict building location, driveway position, retaining walls, landscaping, excavation, service installation and stormwater discharge. It can also consume the same area a developer wanted for access or private open space.",
          "For battle-axe and rear lot subdivisions, easements and access handles often need to be considered together because services, vehicles and drainage may all compete for the same narrow corridor."
        ],
      },
      {
        heading: "Mistakes to avoid",
        body: [
          "Do not rely only on a real estate plan or aerial image. Do not assume that because an easement is old it no longer matters. Do not assume the visible pipe or pit is exactly where the legal easement sits.",
          "Before buying or designing, line up the legal plan, survey information and civil constraints. That is where many hidden problems become obvious."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can help interpret how easements affect access, drainage, services and subdivision feasibility. Where legal interpretation is needed, that should sit with the relevant legal or surveying advice; CivilCity's role is to translate the easement into practical design risk.",
          "For a first review, provide the title plan, easement documents if available, address and the intended development outcome."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "stormwater-design-on-the-sunshine-coast-what-developers-need-to-know",
    title: "Stormwater design on the Sunshine Coast: what developers need to know",
    description: "A practical Sunshine Coast stormwater design guide for developers covering lawful discharge, overland flow, detention, flooding, levels and approval risk.",
    date: "2026-06-24",
    category: "Stormwater",
    keywords: [
      "stormwater design Sunshine Coast",
      "stormwater drainage Sunshine Coast",
      "stormwater engineer Sunshine Coast",
      "lawful point of discharge Sunshine Coast",
      "development stormwater design Sunshine Coast"
    ],
    faqs: [
      {
        question: "Should stormwater be checked during feasibility?",
        answer: "Yes. Stormwater can affect yield, levels, driveway design, building placement, easements, detention requirements and whether a site is commercially workable.",
      },
      {
        question: "What is a lawful point of discharge?",
        answer: "It is the practical and legal point where stormwater from the site can discharge. If it is unclear, the whole site strategy may need more investigation.",
      },
      {
        question: "Does every development need stormwater detention?",
        answer: "Not necessarily. Requirements depend on the site, catchment, downstream conditions, proposed development and applicable approval or design requirements.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Stormwater design is one of the biggest feasibility issues for Sunshine Coast development sites. It affects where water goes, how levels are set, whether detention is needed, how driveways grade, and whether neighbouring land or downstream infrastructure may be affected.",
          "For developers, stormwater should be checked early, not after the architectural layout is finished."
        ],
      },
      {
        heading: "Why stormwater shapes the site",
        body: [
          "Stormwater is not just pipe sizing. It includes lawful discharge, overland flow, flood constraints, detention, water quality treatment, roofwater, surface grading, pits, pipes, easements and downstream impacts.",
          "A project can lose yield if stormwater needs a drainage easement, detention tank, basin, level change or larger service corridor than expected."
        ],
      },
      {
        heading: "Local Sunshine Coast context",
        body: [
          "Sunshine Coast sites can include steep land, coastal conditions, flood overlays, older infill drainage, sensitive downstream environments and constrained road frontages. Council mapping and Development.i site report information can help identify flooding overlays, general property information and links to relevant mapping.",
          "The key is to confirm what applies to the actual site, not assume that a nearby project had the same drainage answer."
        ],
      },
      {
        heading: "Questions to answer early",
        body: [
          "Where can stormwater lawfully discharge? Does water currently flow through or across the site? Is there an overland flow path? Are there existing drainage easements or pits? Does the road frontage have usable drainage infrastructure? Will levels allow gravity drainage? Could detention or treatment be required?",
          "If these questions are unanswered, the layout is still carrying stormwater risk."
        ],
      },
      {
        heading: "Common developer mistakes",
        body: [
          "The common mistake is leaving stormwater until the end and expecting it to fit around a fixed layout. Another is assuming the lowest corner of the site is a lawful outlet. A third is missing the connection between driveway grade, building levels and drainage falls.",
          "Good stormwater design starts with levels and discharge, then coordinates with access, services and buildability."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review stormwater feasibility, prepare drainage concepts, support development applications and develop detailed stormwater design for operational works or construction.",
          "For early advice, send the site address, survey if available, proposed layout, any known flood or drainage constraints and the development outcome you are testing."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Operational work",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work",
      },
    ],
  },
  {
    slug: "lawful-point-of-discharge-why-it-can-make-or-break-a-development",
    title: "Lawful point of discharge: why it can make or break a development",
    description: "A practical guide to lawful point of discharge on Sunshine Coast development sites and why it can affect feasibility, stormwater design and approvals.",
    date: "2026-06-24",
    category: "Stormwater",
    keywords: [
      "lawful point of discharge Sunshine Coast",
      "stormwater discharge Sunshine Coast",
      "development stormwater drainage",
      "stormwater easement Sunshine Coast",
      "civil engineer stormwater Sunshine Coast"
    ],
    faqs: [
      {
        question: "What is a lawful point of discharge?",
        answer: "It is the point where stormwater from a site can reasonably and lawfully discharge without causing unacceptable impacts. The answer depends on site levels, downstream infrastructure, easements and council requirements.",
      },
      {
        question: "Why can lawful discharge affect feasibility?",
        answer: "If water cannot reach an accepted outlet by gravity, the project may need detention, easements, redesign, level changes or more expensive drainage works.",
      },
      {
        question: "Should it be checked before buying a site?",
        answer: "Yes. Lawful discharge is one of the first civil engineering checks for subdivision, townhouse and infill development sites.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Lawful point of discharge is one of the quiet issues that can make or break a development site. If stormwater cannot leave the property in a practical and accepted way, the layout, levels, cost and approval pathway may all change.",
          "For Sunshine Coast developers, lawful discharge should be tested during feasibility, not after the design is finished."
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Every development changes runoff in some way. Roofs, driveways, parking areas and paved surfaces can increase flow and concentrate water. The project team needs to understand where that water goes and whether the downstream path is suitable.",
          "A site may appear easy until levels show that water cannot reach the street, pipe network, easement or drainage reserve without major works."
        ],
      },
      {
        heading: "What to check early",
        body: [
          "Check site survey, road levels, existing pits and pipes, overland flow paths, flood mapping, easements, downstream land, roofwater routes and whether gravity drainage is possible. Council mapping and site report information can help identify relevant property and overlay information, but survey and engineering review are still important.",
          "On sloping land, the lowest point of the site is not automatically an acceptable outlet. On infill lots, the most convenient direction may be through another property, which raises easement and consent questions."
        ],
      },
      {
        heading: "Common warning signs",
        body: [
          "Be careful with sites below road level, rear lots with no clear drainage corridor, older areas with limited pipe infrastructure, lots crossed by overland flow, and properties where the proposed building area sits between water and its natural outlet.",
          "If the drainage route is uncertain, do not treat stormwater as a late design item. It may need to shape the entire layout."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review lawful discharge options, identify drainage constraints, advise on early feasibility and coordinate stormwater design with access, levels and subdivision layout.",
          "The goal is to know whether the site has a workable drainage story before the project commits to a layout or purchase price."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Operational work",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work",
      },
    ],
  },
  {
    slug: "plan-sealing-sunshine-coast-what-developers-need-to-know",
    title: "Plan sealing Sunshine Coast: what developers need to know",
    description: "A Sunshine Coast developer guide to plan sealing, subdivision closeout, survey plans, easements, covenants, clearances and civil works documentation.",
    date: "2026-06-24",
    category: "Approvals",
    keywords: [
      "plan sealing Sunshine Coast",
      "subdivision plan sealing Sunshine Coast",
      "survey plan sealing Sunshine Coast",
      "subdivision closeout Sunshine Coast",
      "civil works plan sealing"
    ],
    faqs: [
      {
        question: "What is plan sealing?",
        answer: "Sunshine Coast Council describes plan sealing as the process of lodging a survey plan with council for approval to finalise a subdivision or multiple dwelling development.",
      },
      {
        question: "Why do developers need a sealed plan?",
        answer: "Council notes that a sealed plan is needed to create new land titles, easements and/or covenants, and to transfer land to council for purposes such as drainage reserves and parks.",
      },
      {
        question: "Why does plan sealing get delayed?",
        answer: "Common causes include unresolved approval conditions, missing clearances, incomplete as-constructed information, civil works defects, bonds, easement issues or consultant documentation gaps.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Plan sealing is the final council approval step that allows new lots, easements, covenants or land transfers to be legally created. For developers, it is where planning approval, civil works, survey, clearances and condition compliance all come together.",
          "If plan sealing is not planned for during delivery, it can become a painful late-stage delay."
        ],
      },
      {
        heading: "What council says plan sealing does",
        body: [
          "Sunshine Coast Council states that to finalise a subdivision or multiple dwelling development, you must lodge a survey plan with council for approval. Council also notes that a sealed plan is needed to create new land titles, easements and/or covenants and to transfer land to council for drainage reserves and parks.",
          "That means plan sealing is not just administration. It is the legal closeout of the development outcome."
        ],
      },
      {
        heading: "Civil items that affect sealing",
        body: [
          "Civil works can affect plan sealing through completed infrastructure, inspections, as-constructed drawings, contributed asset acceptance, stormwater, access, roadworks, easements, bonding and condition compliance.",
          "If a condition required operational works, construction evidence or clearance from another party, those items need to be managed before the sealed plan can move smoothly."
        ],
      },
      {
        heading: "How to reduce delays",
        body: [
          "Create a plan sealing checklist early. Track approval conditions, construction hold points, inspections, defects, as-constructed records, survey plan requirements, easement documents and any required council or authority clearances.",
          "The best time to solve plan sealing issues is during design and construction, not after contractors have left site."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can support the civil engineering side of subdivision closeout by helping align approval conditions, operational works documentation, construction evidence and as-constructed information.",
          "For small developers, this helps protect the final step where delays can hold up settlement, finance or release of titles."
        ],
      },
    ],
    resources: [
      {
        label: "Plan sealing",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing",
      },
      {
        label: "Development application forms and checklists",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms",
      },
      {
        label: "Operational work",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work",
      },
    ],
  },
  {
    slug: "driveway-long-sections-and-cross-sections-explained",
    title: "Driveway long sections and cross sections explained",
    description: "A practical guide to driveway long sections and cross sections for Sunshine Coast homeowners, designers and developers.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "driveway long section Sunshine Coast",
      "driveway cross section Sunshine Coast",
      "driveway design Sunshine Coast",
      "steep driveway Sunshine Coast",
      "civil driveway drawings"
    ],
    faqs: [
      {
        question: "What is a driveway long section?",
        answer: "It is a drawing that follows the driveway along its length, showing levels, grades and transitions from the road to the parking or garage area.",
      },
      {
        question: "What is a driveway cross section?",
        answer: "It cuts across the driveway width to show cross-fall, edges, retaining, drainage and how the driveway sits against adjoining ground.",
      },
      {
        question: "Why do these drawings matter?",
        answer: "They reveal whether the driveway can actually be built, drained and used safely, especially on sloping or constrained sites.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Driveway long sections and cross sections are the drawings that prove a driveway works in three dimensions. A plan view shows where the driveway goes. The sections show whether it can actually climb, fall, drain and meet the road or garage properly.",
          "For Sunshine Coast sites with slope, narrow frontage or rear access, these drawings can be the difference between a workable access and a redesign."
        ],
      },
      {
        heading: "What the long section shows",
        body: [
          "The long section shows the driveway profile from the road frontage through to the parking area or garage. It sets out road levels, boundary levels, grade changes, transitions, crests, sags and finished levels.",
          "This is where scraping risk, excessive slope, poor transitions and awkward garage levels become visible."
        ],
      },
      {
        heading: "What the cross section shows",
        body: [
          "The cross section shows driveway width, cross-fall, pavement shape, retaining needs, edge conditions, drainage channels and the relationship to adjoining ground.",
          "It is especially useful where the driveway cuts across a slope or sits close to boundaries, buildings, fences or landscape areas."
        ],
      },
      {
        heading: "When to request them",
        body: [
          "Request sections early for steep sites, rear lots, battle-axe access, townhouse projects, basement or podium access, or any site where road level and building level are not close.",
          "They should be prepared before garage levels, finished floor levels or subdivision access handles are treated as fixed."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can prepare and review driveway long sections and cross sections to test grades, levels, drainage and buildability.",
          "For homeowners and small developers, this gives a clear answer to a practical question: will the driveway actually work once it leaves the paper?"
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "secondary-driveways-on-the-sunshine-coast-can-you-add-another-access",
    title: "Secondary driveways on the Sunshine Coast: can you add another access?",
    description: "A Sunshine Coast guide to secondary driveways, second access points, crossovers, sight distance, frontage constraints and development design risk.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "secondary driveway Sunshine Coast",
      "second driveway Sunshine Coast",
      "driveway crossover Sunshine Coast",
      "additional driveway access",
      "driveway sight distance Sunshine Coast"
    ],
    faqs: [
      {
        question: "Can a property have a second driveway?",
        answer: "Sometimes, but it depends on road frontage, safety, sight distance, services, drainage, parking layout, street trees, footpaths and council or road authority requirements.",
      },
      {
        question: "Why would a developer want a secondary driveway?",
        answer: "It can help separate vehicle movements, improve service access, support construction staging, create better internal circulation or make a rear lot layout work.",
      },
      {
        question: "What can make a second driveway difficult?",
        answer: "Narrow frontage, poor visibility, existing services, steep grades, drainage conflicts, street trees, kerb infrastructure and conflicts with parking or landscaping.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "A secondary driveway may be possible on a Sunshine Coast property, but it should be tested early. The question is not only whether another crossover physically fits. It is whether the access is safe, practical, drainable and consistent with the site layout.",
          "For developments, a second access can solve one problem while creating several new ones."
        ],
      },
      {
        heading: "Why owners ask for one",
        body: [
          "A second driveway may help with dual occupancy layouts, rear lots, service access, separate tenant access, construction staging, turning movements or safer internal circulation.",
          "It can also improve usability on larger properties where one driveway forces awkward manoeuvring or conflicts between residents, visitors and service vehicles."
        ],
      },
      {
        heading: "What must be checked",
        body: [
          "Check road frontage, sight distance, driveway spacing, crossover location, footpath and verge conditions, kerb and channel, stormwater, service pits, street trees, parking impacts, driveway grade and vehicle swept paths.",
          "If the driveway connects to a busier road or constrained frontage, the access review becomes more important."
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "A common mistake is drawing a second driveway late to fix a parking problem. Another is ignoring the verge, where services, footpaths, street trees and drainage often decide whether the access is practical.",
          "Secondary access should be tested as part of the whole layout, not treated as a simple add-on."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review second driveway options, sight distance, grades, swept paths and frontage constraints. If the access has merit, the civil design can then support the planning or approval pathway.",
          "The aim is to find the access arrangement that works for both approval and real use."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
    title: "Before you buy a development site: civil engineering checks that matter",
    description: "A Sunshine Coast development site due diligence guide covering access, stormwater, services, easements, slope, overlays and hidden civil costs.",
    date: "2026-06-24",
    category: "Due diligence",
    keywords: [
      "development site due diligence Sunshine Coast",
      "civil engineering due diligence Sunshine Coast",
      "property development feasibility Sunshine Coast",
      "development site checklist Sunshine Coast",
      "civil engineer before buying development site"
    ],
    faqs: [
      {
        question: "What should a civil due diligence review cover?",
        answer: "It should consider access, stormwater, levels, earthworks, services, easements, overlays, road frontage, constructability and obvious approval-condition risk.",
      },
      {
        question: "Can civil due diligence confirm a site will be approved?",
        answer: "No. It is not an approval guarantee. It helps identify practical risks and cost drivers before purchase or major design spend.",
      },
      {
        question: "When should I do it?",
        answer: "Before going unconditional where possible, or at least before committing to a fixed layout, purchase price or development feasibility model.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Before buying a Sunshine Coast development site, check the civil issues that can affect yield, cost and timing. The most important early checks are access, stormwater, services, easements, overlays, slope and constructability.",
          "These are the issues that often sit outside the real estate brochure but inside the developer's margin."
        ],
      },
      {
        heading: "Start with the site information",
        body: [
          "Use council's Development.i tools, site report, mapping, planning scheme information and nearby approvals to understand the public record. Then compare that with title documents, registered plans, survey and what is visible on site.",
          "A quick map review is helpful, but civil risk usually becomes clearer when levels, services and access are considered together."
        ],
      },
      {
        heading: "The checks that matter most",
        body: [
          "Review where vehicles can enter, whether sight distance is practical, how stormwater discharges, whether sewer and water can be connected, whether easements cross the site, how much earthworks may be required, and whether overlays affect the same area needed for access or buildings.",
          "For small developers, focus on constraints that change yield or require expensive works."
        ],
      },
      {
        heading: "How to use the findings",
        body: [
          "A due diligence review should produce decisions, not just observations. It should tell you what appears workable, what needs more investigation, what could cost money and what assumptions should go into the offer price.",
          "Sometimes the best outcome is confidence. Sometimes it is a renegotiation. Sometimes it is walking away before a bad site becomes your problem."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can provide early civil engineering due diligence for Sunshine Coast development sites, including subdivision, townhouse, duplex, commercial and infill opportunities.",
          "Send the address, proposed outcome, title or survey information if available, and your key commercial question."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "common-reasons-sunshine-coast-development-applications-get-delayed",
    title: "Common reasons Sunshine Coast development applications get delayed",
    description: "A practical guide to common Sunshine Coast development application delays and how civil engineering, planning and documentation can reduce risk.",
    date: "2026-06-24",
    category: "Approvals",
    keywords: [
      "development application delays Sunshine Coast",
      "DA delays Sunshine Coast",
      "development application Sunshine Coast",
      "well made application Sunshine Coast",
      "civil engineering development application"
    ],
    faqs: [
      {
        question: "What causes development application delays?",
        answer: "Common causes include incomplete information, unresolved civil constraints, inconsistent consultant drawings, unclear stormwater strategy, access issues, referral requirements and late changes.",
      },
      {
        question: "Can every delay be avoided?",
        answer: "No, but many avoidable delays can be reduced by lodging a coordinated, well-made application with the right technical information upfront.",
      },
      {
        question: "Why does civil engineering matter before lodgement?",
        answer: "Access, stormwater, levels, services and earthworks can all affect whether the planning layout is credible and easy to assess.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Development applications are often delayed when the proposal is not clear enough, the supporting information is incomplete, or key civil constraints are left unresolved. Sunshine Coast Council's application guidance points to forms, checklists and well-made application expectations, but the practical issue is coordination.",
          "A good application should tell one coherent story across planning, survey, architecture, landscape and civil engineering."
        ],
      },
      {
        heading: "Civil issues that trigger delays",
        body: [
          "Stormwater, lawful discharge, driveway access, sight distance, earthworks, retaining, services and infrastructure conditions are common technical pressure points. If these are vague at lodgement, the application may need further information or redesign.",
          "A concept that works visually but cannot drain, be accessed or be serviced cleanly will usually slow down."
        ],
      },
      {
        heading: "Documentation mismatches",
        body: [
          "Delays also happen when drawings do not match: civil levels do not align with architectural plans, landscape conflicts with drainage, survey levels are outdated, or parking layouts do not support vehicle movement.",
          "Before lodgement, the consultant team should check whether the same driveway, retaining wall, basin, service corridor and lot boundaries appear consistently across the package."
        ],
      },
      {
        heading: "How to reduce the risk",
        body: [
          "Use council checklists, confirm the assessment pathway, identify referral risks, prepare the right technical reports, and review civil constraints before the layout is fixed. If operational works is likely later, think ahead to the detail that will be required.",
          "The best DA strategy is often to solve the hard site questions early, then lodge with confidence."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can support development applications with early access, stormwater, services, levels and constructability advice. This helps planners and designers avoid avoidable information requests and late redesign.",
          "For developers, the value is momentum: fewer surprises, cleaner coordination and a clearer path to the next approval stage."
        ],
      },
    ],
    resources: [
      {
        label: "Development application forms and checklists",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms",
      },
      {
        label: "Lodging development applications",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/lodging-a-development-application",
      },
      {
        label: "Development.i",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i",
      },
    ],
  },
  {
    slug: "development-i-sunshine-coast-how-developers-can-research-nearby-approvals",
    title: "Development.i Sunshine Coast: how developers can research nearby approvals",
    description: "How Sunshine Coast developers can use Development.i to research nearby approvals, property information, precedent, conditions and civil design clues.",
    date: "2026-06-24",
    category: "Planning",
    keywords: [
      "Development.i Sunshine Coast",
      "development approvals search Sunshine Coast",
      "Sunshine Coast development applications search",
      "research nearby approvals Sunshine Coast",
      "property information Sunshine Coast"
    ],
    faqs: [
      {
        question: "What is Development.i?",
        answer: "Sunshine Coast Council says Development.i provides access to past and current application details and basic property information for the Sunshine Coast local government area.",
      },
      {
        question: "Why should developers research nearby approvals?",
        answer: "Nearby approvals can reveal common conditions, assessment issues, drainage constraints, access expectations and local development patterns.",
      },
      {
        question: "Can Development.i prove my project will be approved?",
        answer: "No. It helps with context and precedent, but each site still needs current planning, engineering and approval advice.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Development.i is one of the most useful early research tools for Sunshine Coast development sites. It lets you search development and building applications, property information, nearby proposals and approval history.",
          "For developers, it is not just a planning tool. It can also reveal civil engineering clues."
        ],
      },
      {
        heading: "What to look for",
        body: [
          "Search the subject site and surrounding streets. Look for reconfiguring a lot approvals, material change of use approvals, operational works, plan sealing, conditions, decision notices, supporting reports and drawings where available.",
          "Nearby applications can show how council has treated access, stormwater, parking, frontage works, flooding, easements and servicing issues in the same local context."
        ],
      },
      {
        heading: "How to read approvals like a developer",
        body: [
          "Do not only ask what was approved. Ask what conditions were attached, what information was requested, what changed between lodgement and approval, and whether operational works or plan sealing steps followed.",
          "A nearby approval with heavy civil conditions may be a signal that your site needs similar allowances."
        ],
      },
      {
        heading: "Mistakes to avoid",
        body: [
          "Do not assume that a nearby approval creates an automatic right for your site. Controls change, site constraints differ, and one approval may have depended on specific facts.",
          "Use Development.i to identify questions, then test those questions against your own site."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review nearby approvals for civil engineering clues and help translate them into feasibility risk for your site.",
          "This can be especially useful before buying a property, preparing a subdivision concept or responding to approval conditions."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Development.i what information is available",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i-what-information-is-available/",
      },
    ],
  },
  {
    slug: "how-to-read-a-sunshine-coast-council-site-report",
    title: "How to read a Sunshine Coast Council site report",
    description: "A plain-English guide to Sunshine Coast Council site reports for zoning, overlays, mapping, property information and early development due diligence.",
    date: "2026-06-24",
    category: "Due diligence",
    keywords: [
      "Sunshine Coast Council site report",
      "Development.i site report Sunshine Coast",
      "property report Sunshine Coast",
      "Sunshine Coast zoning report",
      "check property overlays Sunshine Coast"
    ],
    faqs: [
      {
        question: "What does a Development.i site report show?",
        answer: "Council describes it as a convenient way to access general town planning details for a property, including planning scheme zoning and overlay information, application information and links to mapping and service information.",
      },
      {
        question: "Is the site report enough for development due diligence?",
        answer: "No. It is a strong starting point, but you still need site-specific planning, survey, title, infrastructure and civil engineering review.",
      },
      {
        question: "What should I check first?",
        answer: "Start with zoning, overlays, lot details, mapped constraints, nearby applications, service information links and any obvious flooding or infrastructure information.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "A Sunshine Coast Council Development.i site report is a useful first screen for property development due diligence. It helps you identify zoning, overlays, application history and links to other mapping or property information.",
          "It should not be treated as the final answer. It should be used to decide what needs checking next."
        ],
      },
      {
        heading: "What to read first",
        body: [
          "Start with the property details, zone, local plan area, overlays and any mapped development constraints. Then look for current or past applications on the property and nearby sites.",
          "If the report points to flooding, environmental constraints, infrastructure, water, sewer or mapping layers, follow those links and note what may affect the civil design."
        ],
      },
      {
        heading: "How civil engineers use it",
        body: [
          "CivilCity uses site reports to frame early questions about access, stormwater, services, easements, flood risk, slope, earthworks and construction practicality.",
          "For example, a flood overlay may trigger questions about levels and access. A service corridor may trigger questions about building location or subdivision layout."
        ],
      },
      {
        heading: "What the report will not solve",
        body: [
          "A site report does not replace a survey, title review, services investigation, flood assessment, stormwater design or planning advice. It also may not show the practical impact of a constraint on your proposed layout.",
          "Use it as a map of likely issues, then test the commercial and technical consequences."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review a site report with the development idea in mind and identify the civil engineering questions that should be answered before purchase, lodgement or detailed design.",
          "That turns a long report into a short action list."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Development.i",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i",
      },
    ],
  },
  {
    slug: "flood-overlays-and-development-risk-on-the-sunshine-coast",
    title: "Flood overlays and development risk on the Sunshine Coast",
    description: "A Sunshine Coast developer guide to flood overlays, overland flow, levels, access, stormwater and feasibility risk.",
    date: "2026-06-24",
    category: "Stormwater",
    keywords: [
      "flood overlay Sunshine Coast",
      "development risk flooding Sunshine Coast",
      "overland flow path Sunshine Coast",
      "stormwater design flood overlay",
      "flood mapping Sunshine Coast development"
    ],
    faqs: [
      {
        question: "Does a flood overlay stop development?",
        answer: "Not automatically. It can change the design response, required evidence, finished levels, access strategy, stormwater approach and development feasibility.",
      },
      {
        question: "Why does flooding affect civil design?",
        answer: "Flooding can affect site levels, driveways, evacuation or access assumptions, stormwater discharge, earthworks, retaining and where buildings or services should be located.",
      },
      {
        question: "When should flood overlays be checked?",
        answer: "Before buying the site or fixing the layout. Flood and overland flow issues can change the entire development strategy.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Flood overlays do not always stop development, but they can change the cost, layout and approval risk of a Sunshine Coast project. They are one of the first mapping layers to check during due diligence.",
          "A flood issue is rarely only about water depth. It can affect levels, access, drainage, earthworks and whether the project is commercially sensible."
        ],
      },
      {
        heading: "What to investigate",
        body: [
          "Check council mapping, Development.i site report information, flood and overlay layers, existing drainage paths, road levels, finished floor level assumptions, downstream infrastructure and any visible overland flow routes.",
          "If the site is low, flat, near waterways or crossed by mapped flow, get technical advice before assuming a standard layout will work."
        ],
      },
      {
        heading: "Civil design impacts",
        body: [
          "Flood constraints may require higher building platforms, changed driveway grades, more earthworks, adjusted stormwater design, revised building positions, different access arrangements or more detailed assessment.",
          "Sometimes the issue is not the building footprint. It is the driveway or service corridor that sits in the constrained area."
        ],
      },
      {
        heading: "Commercial risk",
        body: [
          "Flood-related redesign can reduce yield, add engineering reports, increase construction cost and lengthen the approval programme. It can also affect finance and buyer confidence if the issue appears late.",
          "The right response is not panic. It is early clarity."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review flood and drainage constraints, coordinate stormwater and access implications, and help identify what further technical work is needed.",
          "For developers, the useful output is a practical risk picture: what appears manageable, what needs specialist assessment and what may change the feasibility."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "battle-axe-subdivision-on-the-sunshine-coast-access-services-and-stormwater-risks",
    title: "Battle-axe subdivision on the Sunshine Coast: access, services and stormwater risks",
    description: "A practical Sunshine Coast battle-axe subdivision guide covering access handles, driveway grades, services, stormwater, easements and feasibility.",
    date: "2026-06-24",
    category: "Subdivision",
    keywords: [
      "battle-axe subdivision Sunshine Coast",
      "rear lot subdivision Sunshine Coast",
      "battle axe driveway design",
      "shared driveway subdivision Sunshine Coast",
      "subdivision access design Sunshine Coast"
    ],
    faqs: [
      {
        question: "Why is battle-axe subdivision difficult?",
        answer: "The access handle has to work for vehicles, services, drainage, grades, easements and future residents, often in a narrow strip of land.",
      },
      {
        question: "What should be checked first?",
        answer: "Check access width, driveway grade, turning, service corridors, stormwater discharge, easements, frontage constraints and whether the rear lot can be practically serviced.",
      },
      {
        question: "Can stormwater stop a rear lot subdivision?",
        answer: "It can make it difficult or expensive if there is no practical lawful discharge path or drainage corridor.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Battle-axe subdivision can work well on the Sunshine Coast, but it is easy to underestimate. The access handle is not just a driveway. It often needs to carry vehicles, services, drainage, easements and construction access.",
          "If that narrow corridor does not work, the rear lot may not be practical."
        ],
      },
      {
        heading: "Access is the first test",
        body: [
          "Review frontage width, driveway grade, turning space, sight distance, shared access requirements and whether vehicles can enter and exit safely. Swept paths may be needed where turning is tight.",
          "A rear lot should not rely on awkward reverse movements or a driveway grade that becomes difficult to build or use."
        ],
      },
      {
        heading: "Services compete for space",
        body: [
          "Sewer, water, stormwater, electrical and telecommunications services may all need to reach the rear lot. Existing services may also cross the proposed access handle.",
          "That means the access corridor must be checked as a service corridor, not only as a traffic route."
        ],
      },
      {
        heading: "Stormwater is often decisive",
        body: [
          "Rear lots can be difficult where stormwater needs to discharge back toward the street, through another lot or through a constrained easement. If the site slopes away from the frontage, lawful discharge needs very early attention.",
          "This is where a simple subdivision sketch often becomes a real engineering question."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can test battle-axe access, servicing and stormwater feasibility before the layout advances too far.",
          "For owners and small developers, this helps answer the question that matters most: does the rear lot actually work as a buildable, serviceable lot?"
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
    ],
  },
  {
    slug: "townhouse-development-sunshine-coast-civil-engineering-checklist",
    title: "Townhouse development Sunshine Coast: civil engineering checklist",
    description: "A civil engineering checklist for Sunshine Coast townhouse developments covering access, parking, stormwater, waste, levels, services and approval risk.",
    date: "2026-06-24",
    category: "Subdivision",
    keywords: [
      "townhouse development Sunshine Coast",
      "townhouse civil engineer Sunshine Coast",
      "medium density development Sunshine Coast",
      "townhouse stormwater design",
      "townhouse access design"
    ],
    faqs: [
      {
        question: "What civil issues matter most for townhouse projects?",
        answer: "Access, parking, stormwater, waste collection, levels, services, earthworks, retaining and how all of those fit within a tight site layout.",
      },
      {
        question: "When should civil engineering be involved?",
        answer: "Before the layout is fixed. Civil constraints can affect unit yield, garage levels, driveway geometry, drainage and waste collection.",
      },
      {
        question: "Why are townhouse sites high risk for redesign?",
        answer: "Because small level, access or drainage changes can ripple through parking, private open space, building footprints and landscaping.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Townhouse developments on the Sunshine Coast need civil engineering input early because access, parking, stormwater, waste, levels and services all compete for space. A layout that looks efficient can become difficult once grades and drainage are tested.",
          "The goal is to protect yield without ignoring buildability."
        ],
      },
      {
        heading: "Access and parking checklist",
        body: [
          "Check driveway grades, garage thresholds, visitor parking, manoeuvring, swept paths, sight distance, shared aisles, waste vehicle access and pedestrian safety. If the site has slope, long sections should be prepared early.",
          "Parking and access should be coordinated with architecture before the plan is treated as fixed."
        ],
      },
      {
        heading: "Stormwater and levels checklist",
        body: [
          "Check lawful discharge, overland flow, detention, surface grading, roofwater, driveway drainage, flood overlays and whether the site can drain by gravity. Levels can affect every dwelling, garage and courtyard.",
          "Late stormwater changes are one of the fastest ways to disturb a townhouse layout."
        ],
      },
      {
        heading: "Services and construction checklist",
        body: [
          "Check sewer, water, stormwater, electrical and telecommunications service corridors, retaining walls, earthworks, staging and contractor access. Tight townhouse sites often need more coordination than larger subdivisions because there is less room for adjustment.",
          "A good civil review should identify what needs to move before the project is lodged or priced."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can support townhouse feasibility, development applications, operational works and detailed civil design by coordinating access, levels, stormwater and services.",
          "For developers, the value is a layout that can move from approval to construction with fewer avoidable surprises."
        ],
      },
    ],
    resources: [
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      },
      {
        label: "Operational work",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work",
      },
      {
        label: "Development application forms and checklists",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms",
      },
    ],
  },
  {
    slug: "development-infrastructure-charges-on-the-sunshine-coast-what-to-allow-for",
    title: "Development infrastructure charges on the Sunshine Coast: what to allow for",
    description: "A developer guide to Sunshine Coast infrastructure charges, LGIP context, fees, feasibility allowances and civil cost risk.",
    date: "2026-06-24",
    category: "Planning",
    keywords: [
      "infrastructure charges Sunshine Coast",
      "development charges Sunshine Coast",
      "Sunshine Coast LGIP",
      "development feasibility costs Sunshine Coast",
      "development application fees Sunshine Coast"
    ],
    faqs: [
      {
        question: "What is the LGIP?",
        answer: "Sunshine Coast Council says the local government infrastructure plan identifies council's plans for trunk infrastructure needed to service urban development at the desired standard of service.",
      },
      {
        question: "Why do infrastructure charges matter to feasibility?",
        answer: "They affect project cost, cash flow, margin and sometimes whether the intended yield is commercially worthwhile.",
      },
      {
        question: "Are infrastructure charges the only development cost to allow for?",
        answer: "No. Developers should also consider application fees, consultant costs, civil works, service upgrades, frontage works, bonds, construction costs and holding costs.",
      },
    ],
    sections: [
      {
        heading: "Short answer",
        body: [
          "Infrastructure charges and related development costs should be allowed for early in a Sunshine Coast feasibility model. They are not the only cost, but they can materially affect whether a subdivision, townhouse project or small commercial development stacks up.",
          "Good developers do not wait for approval to think about these numbers."
        ],
      },
      {
        heading: "What council's infrastructure planning means",
        body: [
          "Sunshine Coast Council explains that the local government infrastructure plan identifies plans for trunk infrastructure necessary to service urban development at the desired standard of service. This sits behind how growth is supported and funded across the region.",
          "For a developer, the practical takeaway is that infrastructure is part of the development cost story, not an optional extra."
        ],
      },
      {
        heading: "What to include in feasibility",
        body: [
          "Allow for infrastructure charges, application fees, consultant fees, survey, civil design, operational works, stormwater, access works, service connections or upgrades, frontage works, construction costs, bonds, plan sealing and contingency.",
          "The exact items depend on the project, but missing one can distort the purchase price or margin."
        ],
      },
      {
        heading: "Civil costs that sit beside charges",
        body: [
          "Infrastructure charges are one line item. Civil works can be another major cost: driveways, stormwater, drainage easements, roadworks, retaining, earthworks, sewer, water and construction-phase requirements.",
          "That is why charges should be considered alongside the civil design risk, not separately."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review early civil constraints and help developers understand where design and construction costs may sit before they overpay for a site or under-allow in a feasibility model.",
          "For small and medium developers, this is about protecting margin before the project gathers speed."
        ],
      },
    ],
    resources: [
      {
        label: "Local government infrastructure plan and charges",
        href: "https://www.sunshinecoast.qld.gov.au/development/local-government-infrastructure-plan",
      },
      {
        label: "Fees and charges",
        href: "https://www.sunshinecoast.qld.gov.au/pay-and-apply/fees-and-charges",
      },
      {
        label: "Development incentives and charges information",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-process/development-incentives",
      },
    ],
  },
  {
    slug: "low-density-residential-subdivision-sunshine-coast-minimum-lot-size-checks",
    title: "Low density residential subdivision Sunshine Coast: minimum lot size checks",
    description: "How to read low density residential subdivision potential on the Sunshine Coast, including minimum lot size, slope, frontage, overlays and servicing risks.",
    date: "2026-06-29",
    category: "Subdivision",
    keywords: [
      "low density residential subdivision Sunshine Coast",
      "minimum lot size Sunshine Coast",
      "Sunshine Coast subdivision lot size",
      "reconfiguring a lot Sunshine Coast",
      "civil engineer subdivision feasibility"
    ],
    faqs: [
      {
        question: "Is 600m² always enough for a new lot in the Low density residential zone?",
        answer: "No. It may be a useful first benchmark for some low-slope sites, but slope, frontage, overlays, local plan provisions, access, services, stormwater and lot geometry must also be checked.",
      },
      {
        question: "Why does slope change subdivision feasibility?",
        answer: "Steeper land can trigger larger lot-size outcomes, geotechnical considerations, driveway grade issues, retaining walls and higher construction cost.",
      },
      {
        question: "Should I get civil input before a town planning report?",
        answer: "Yes, especially for constrained infill sites. Civil input can shape the concept plan so planning advice is based on a layout that can actually be serviced and built.",
      }
    ],
    sections: [
      {
        heading: "Why lot size is only the first question",
        body: [
          "Owners often search for a simple lot-size answer: can this low density residential block be split? The useful answer is more specific. Under the Sunshine Coast Planning Scheme material, lot size is only one input. A development still needs to work against zoning, local plan provisions, overlays, access, slope, stormwater discharge and services.",
          "The Sunshine Coast Planning Scheme includes Reconfiguring a Lot provisions and minimum lot-size guidance that can vary with slope and zone. Those details matter because a simple lot-size number rarely tells the whole feasibility story."
        ],
      },
      {
        heading: "Minimum lot size is a first filter, not a permission slip",
        body: [
          "For standard Reconfiguring a Lot checks, the planning scheme identifies minimum lot-size outcomes for different zones and slopes. For Low density residential zone lots, the table indicates 600m² on slopes up to 15%, 1,000m² where slope is above 15% and up to 20%, and 1,500m² where slope is above 20%. It also indicates a 15m by 20m minimum rectangle and 15m frontage for the low density residential zone.",
          "Those figures help screen a site quickly, but they do not replace a proper assessment. Local plans, overlays, frontage shape, easements, access geometry and stormwater often decide whether the theoretical yield survives contact with the real world."
        ],
      },
      {
        heading: "The civil checks that change the answer",
        body: [
          "CivilCity normally looks beyond the planning headline. The practical questions are: can each lot obtain safe vehicle access, is there a lawful point of discharge, can sewer and water be extended without expensive clashes, does the driveway work on grade, and will earthworks or retaining make the project commercially silly?",
          "A site can meet a lot-size number and still be a bad subdivision candidate if the only stormwater path needs a downstream easement, the driveway is too steep, or a service crosses the best building envelope."
        ],
      },
      {
        heading: "What to prepare before asking for advice",
        body: [
          "Collect the address, title plan, survey if available, recent Development.i site report, sewer and water information, and any sketch showing the split you have in mind. If the land is sloping, include contour information or a feature survey.",
          "A short feasibility review can then separate three things: what the scheme appears to allow, what council may scrutinise, and what civil design will actually have to solve."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can prepare early subdivision feasibility input, support the planner and surveyor, and test the civil constraints before the project commits to detailed design. The goal is not to sell optimism. The goal is to find the expensive problems while they are still cheap to discuss."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Interactive mapping",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "secondary-dwelling-sunshine-coast-civil-engineering-checks-before-you-build",
    title: "Secondary dwelling Sunshine Coast: civil engineering checks before you build",
    description: "A practical guide to secondary dwelling checks on the Sunshine Coast, covering parking, access, stormwater, services, slope and planning scheme constraints.",
    date: "2026-06-29",
    category: "Planning",
    keywords: [
      "secondary dwelling Sunshine Coast",
      "granny flat Sunshine Coast approval",
      "secondary dwelling civil engineer",
      "Sunshine Coast dwelling house code",
      "stormwater secondary dwelling"
    ],
    faqs: [
      {
        question: "Do secondary dwellings need stormwater design?",
        answer: "They often need at least a stormwater check, because added roof, driveway and paved area can change discharge, detention and nuisance-flow issues.",
      },
      {
        question: "Can I rely on the existing driveway?",
        answer: "Sometimes, but driveway width, grade, sight distance, turning and parking layout should be checked before assuming the existing access is suitable.",
      },
      {
        question: "What information should I send CivilCity?",
        answer: "Send the address, site plan, proposed layout, contours or survey if available, and any Development.i or planning report you already have.",
      }
    ],
    sections: [
      {
        heading: "Why secondary dwellings deserve early civil checks",
        body: [
          "Secondary dwellings attract high-intent searches from owners who are close to action: they want to know if they can add a small dwelling, what approvals apply and what could blow out cost. The planning answer matters, but civil constraints often decide the budget.",
          "The Sunshine Coast Planning Scheme includes secondary dwelling provisions, parking outcomes and relevant schedule definitions. For owners, the important point is that a small dwelling can still create real access, parking, drainage and servicing questions."
        ],
      },
      {
        heading: "Planning permission is only half the question",
        body: [
          "A secondary dwelling may appear simple because it sits on an existing lot. In practice, the project still has to work with access, parking, stormwater, sewer, water, earthworks, retaining, building location and any mapped overlays.",
          "The planning scheme includes access and car parking outcomes in Part 9, with on-site car parking expectations for dwelling-house related development. The exact pathway depends on zone, lot size, overlays and the proposed design."
        ],
      },
      {
        heading: "Civil engineering checks that matter early",
        body: [
          "Start with stormwater. A new roof and driveway area can increase impervious area and change discharge behaviour. If there is no clear lawful point of discharge, the cheapest design option may disappear quickly.",
          "Then check driveway grades, turning, pedestrian access, retaining walls, sewer connection, water connection and whether construction access is realistic. Backyard projects can be more constrained than greenfield work because the easiest alignment was usually used by the original house."
        ],
      },
      {
        heading: "When overlays complicate a small project",
        body: [
          "Flood, bushfire, steep land, waterways and acid sulfate soils overlays can change the information required or the design response. A small building footprint does not automatically mean small approval risk.",
          "If the site is in a mapped constraint area, the practical question is what supporting material is needed and whether the civil design can demonstrate the expected outcome without over-engineering the project."
        ],
      },
      {
        heading: "What CivilCity can do first",
        body: [
          "CivilCity can review the site report, mapping, levels and concept layout, then flag the likely civil design issues before building design becomes locked. That early review is usually cheaper than redesigning a secondary dwelling after access, drainage or services object to being ignored."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "dual-occupancy-sunshine-coast-approval-and-civil-design-risks",
    title: "Dual occupancy Sunshine Coast: approval and civil design risks",
    description: "What Sunshine Coast owners and developers should check before pursuing a dual occupancy, from planning assessment to parking, access, drainage and flood constraints.",
    date: "2026-06-29",
    category: "Approvals",
    keywords: [
      "dual occupancy Sunshine Coast",
      "duplex approval Sunshine Coast",
      "dual occupancy civil design",
      "Sunshine Coast dual occupancy parking",
      "duplex stormwater Sunshine Coast"
    ],
    faqs: [
      {
        question: "Is a dual occupancy the same as a subdivision?",
        answer: "No. Dual occupancy usually involves two dwellings on one lot or within a particular title arrangement, while subdivision or reconfiguring a lot creates new lots. The planning pathway and civil requirements differ.",
      },
      {
        question: "What is the biggest civil risk for a duplex?",
        answer: "Stormwater and access are common risks, especially on sloping sites, narrow frontages or lots affected by flood, easements or limited lawful discharge options.",
      },
      {
        question: "Should CivilCity review the architect concept?",
        answer: "Yes. A quick civil review can catch driveway, parking, drainage and service problems before the design is too developed to change cheaply.",
      }
    ],
    sections: [
      {
        heading: "Why dual occupancy deserves its own article",
        body: [
          "Dual occupancy searches are commercially useful because they sit near the decision point: can one lot support two dwellings and is the risk worth paying consultants to test? Existing CivilCity content covers subdivision and townhouses, but dual occupancy sits between those categories.",
          "The Sunshine Coast Planning Scheme includes assessment-table references for dual occupancy, along with flood-related material that can affect floor levels and car parking for dual occupancy and dwelling-house uses. Those checks matter before a concept layout becomes fixed."
        ],
      },
      {
        heading: "Start with the assessment pathway",
        body: [
          "In the Sunshine Coast Planning Scheme, the category of assessment can vary by zone, precinct, local plan and overlay. Low density residential zone provisions may allow dual occupancy in some circumstances, but not in protected housing areas, with the Dual occupancy code and other benchmarks becoming relevant where assessable.",
          "That means the first check is not “can I build a duplex?” It is “what does this exact property trigger?” The difference matters because code assessment, impact assessment, local plan provisions and overlays all change time, cost and documentation."
        ],
      },
      {
        heading: "Civil risks that make or break the layout",
        body: [
          "Dual occupancy designs frequently run into parking, driveway width, turning, stormwater discharge, bin collection, frontage constraints and service-connection clashes. A building layout that maximises floor area can accidentally leave no sensible civil solution.",
          "Flood overlays add another layer. Sunshine Coast flood provisions can reference flood immunity requirements for floor levels and car parking for dual occupancy and dwelling-house development. If flood constraints apply, levels and access should be tested early."
        ],
      },
      {
        heading: "What to check before design gets pretty",
        body: [
          "Before investing in polished architectural plans, check zone, local plan, overlays, frontage width, existing services, easements, slope, driveway grade and where stormwater can lawfully discharge. Also check whether the proposal creates a practical address, parking arrangement and construction sequence.",
          "The boring checks are the money checks. Nice render, terrible driveway is still terrible. Architecture cannot mood-board its way out of a non-compliant access grade."
        ],
      },
      {
        heading: "How CivilCity supports dual occupancy projects",
        body: [
          "CivilCity can review the early concept, identify likely access and stormwater constraints, coordinate with the planner and architect, and prepare civil design inputs for the application or operational works stage if required."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "medium-density-residential-zone-sunshine-coast-townhouse-feasibility",
    title: "Medium density residential zone Sunshine Coast: townhouse feasibility checks",
    description: "How to screen medium density residential sites on the Sunshine Coast before committing to townhouse or multi-unit development design.",
    date: "2026-06-29",
    category: "Due diligence",
    keywords: [
      "medium density residential Sunshine Coast",
      "townhouse feasibility Sunshine Coast",
      "multi unit development Sunshine Coast",
      "Sunshine Coast townhouse civil engineer",
      "medium density site due diligence"
    ],
    faqs: [
      {
        question: "Does Medium density residential zoning guarantee townhouse approval?",
        answer: "No. It suggests the use may be contemplated, but the proposal still has to satisfy assessment benchmarks, local plan provisions, overlays and practical civil design requirements.",
      },
      {
        question: "What usually reduces townhouse yield?",
        answer: "Driveway and parking geometry, stormwater detention, flood constraints, retaining walls, service corridors and waste collection often reduce theoretical yield.",
      },
      {
        question: "When should civil feasibility happen?",
        answer: "Before the concept plan is treated as fixed. Early civil testing can prevent expensive redesign later.",
      }
    ],
    sections: [
      {
        heading: "The opportunity and the trap",
        body: [
          "Medium density residential land attracts developers because the zoning appears to support more intensive housing. The trap is assuming the zone label does the feasibility work. It does not. The scheme, local plan, overlays and civil design constraints still decide whether the yield is practical.",
          "The Sunshine Coast Planning Scheme sets out Medium density residential zone purposes and assessment material. It also includes minimum lot-size guidance where medium density residential lots can have slope-sensitive outcomes, which is useful for developers screening sites."
        ],
      },
      {
        heading: "What the scheme material points toward",
        body: [
          "The Sunshine Coast Planning Scheme describes the Medium density residential zone as a place where medium density residential activities are contemplated, subject to the applicable zone code, local plan code and prescribed development codes. That is a starting point, not a feasibility conclusion.",
          "For reconfiguring-a-lot style checks, the planning scheme table shows Medium density residential zone lot-size outcomes of 800m² on slopes up to 15%, 1,000m² where slope is above 15% and up to 20%, and 1,500m² where slope is above 20%, with rectangle and frontage outcomes also relevant."
        ],
      },
      {
        heading: "Civil constraints that reduce townhouse yield",
        body: [
          "Townhouse feasibility is sensitive to driveway geometry, internal manoeuvring, waste collection, visitor parking, stormwater detention, flood levels, retaining walls, service corridors and construction staging. A site may hold six dwellings in theory and four dwellings once civil reality joins the meeting.",
          "Early civil input should test driveway grade, vehicle swept paths, finished floor levels, retaining heights, drainage path, detention location and whether the design leaves room for infrastructure instead of treating it like an annoying afterthought."
        ],
      },
      {
        heading: "A better first-pass process",
        body: [
          "Start with a planning and civil screen: zoning, local plan, overlays, nearby approvals, title constraints, levels, services and access. Then prepare a concept that reserves space for drainage, waste, parking and constructability before the building footprint hardens.",
          "This sequence avoids the classic developer faceplant: paying for a high-yield concept that later has to be dismantled by stormwater, parking or retaining requirements."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can work with town planners, architects and surveyors to test medium-density development constraints early, then support the DA and operational works pathway with civil design, stormwater, access and documentation."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "stormwater-management-plan-sunshine-coast-when-development-needs-one",
    title: "Stormwater management plan Sunshine Coast: when development needs one",
    description: "A developer-focused guide to stormwater management plans on the Sunshine Coast, including lawful discharge, detention, flooding, water quality and council expectations.",
    date: "2026-06-29",
    category: "Stormwater",
    keywords: [
      "stormwater management plan Sunshine Coast",
      "Sunshine Coast stormwater code",
      "lawful point of discharge Sunshine Coast",
      "stormwater detention Sunshine Coast",
      "civil engineer stormwater plan"
    ],
    faqs: [
      {
        question: "Is stormwater only needed at operational works stage?",
        answer: "No. Stormwater constraints should be checked during feasibility and DA design because they can affect layout, yield, levels and approval risk.",
      },
      {
        question: "What is lawful point of discharge?",
        answer: "It is the lawful and practical location or system where site stormwater can discharge without causing nuisance or unacceptable impacts. It is often central to feasibility.",
      },
      {
        question: "Can detention be solved later?",
        answer: "Sometimes, but leaving detention until late can force redesign if there is no space, level difference or maintenance access for the preferred solution.",
      }
    ],
    sections: [
      {
        heading: "Why this is a priority topic",
        body: [
          "Stormwater is one of the earliest practical constraints developers should test because it can change layout, levels, cost and approval risk. Many owners only look closely after someone mentions detention, lawful point of discharge or a council information request.",
          "Sunshine Coast stormwater guidance includes flooding and stormwater management expectations, Stormwater Management Code references, PSPDW SC6.14 drainage-design notes and detention implementation guidance. The practical question is how those requirements affect the actual site layout."
        ],
      },
      {
        heading: "What a stormwater management plan has to answer",
        body: [
          "A stormwater management plan needs to explain how the development handles quantity, quality, lawful discharge, flooding, overland flow and ongoing maintenance. For many projects, the key question is whether post-development runoff can be managed without worsening impacts on other land or creating infrastructure Council does not want to inherit.",
          "Council stormwater guidance expects stormwater assets to be effective and responsive over their design life, avoid becoming a burden or liability for Council, and be informed by current models, mapping and datasets. In plain English: do the drainage properly, prove it, and do not donate a future headache."
        ],
      },
      {
        heading: "Lawful point of discharge comes first",
        body: [
          "A lawful point of discharge is the practical anchor for the stormwater strategy. If there is no clear discharge path, the rest of the design becomes harder. Detention, easements, inter-allotment drainage, pump systems or redesign may all enter the conversation.",
          "PSPDW SC6.14.3.3 addresses drainage design requirements, while SC6.14.3.5 deals with detention basin requirements. Those references show stormwater is not just a pipe-size exercise. It is about system behaviour, ownership, maintenance and risk."
        ],
      },
      {
        heading: "When detention or water quality may matter",
        body: [
          "Detention may be required where development increases runoff or where council policy expects peak-flow management. Water quality controls may also be relevant depending on development type, site size and receiving environment.",
          "The early feasibility question is where the stormwater infrastructure can physically go. A detention basin, tank, bio-retention area or proprietary treatment device still needs space, levels, access and a maintenance story. If the concept leaves no room for it, the concept is not finished."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review stormwater constraints, identify lawful discharge options, prepare stormwater management plans, coordinate with planners and architects, and support operational works or condition-response packages."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "landslide-hazard-and-steep-land-overlay-sunshine-coast-development",
    title: "Landslide hazard and steep land overlay Sunshine Coast: development checks",
    description: "What developers should check when a Sunshine Coast site is affected by the landslide hazard and steep land overlay, including slope, geotechnical risk, access and earthworks.",
    date: "2026-06-30",
    category: "Planning",
    keywords: [
      "landslide hazard overlay Sunshine Coast",
      "steep land overlay Sunshine Coast",
      "Sunshine Coast steep site development",
      "geotechnical assessment Sunshine Coast",
      "civil engineer steep land"
    ],
    faqs: [
      {
        question: "What slope can trigger steep land concern?",
        answer: "The scheme material references steep land as slopes of 15% or greater on the Landslide Hazard and Steep Land Overlay Maps, but site-specific mapping and assessment should be checked.",
      },
      {
        question: "Do I always need a geotechnical report?",
        answer: "Not always for every early conversation, but mapped steep land or landslide risk may require geotechnical input for assessment and design.",
      },
      {
        question: "What is the biggest civil issue on steep sites?",
        answer: "Driveway grade, retaining, stormwater velocity and safe construction access are common issues that can materially change feasibility.",
      }
    ],
    sections: [
      {
        heading: "Why steep land is a separate feasibility problem",
        body: [
          "Steep land can quietly destroy a development budget. It changes driveway grades, earthworks, retaining, drainage, construction access and sometimes minimum lot-size outcomes. On the Sunshine Coast, it can also trigger the Landslide hazard and steep land overlay.",
          "The Sunshine Coast Planning Scheme identifies landslide hazard areas and steep land through the Landslide Hazard and Steep Land Overlay Maps. Steep land can include slopes of 15% or greater, and mapped sites may require planning scheme policy guidance and site-specific geotechnical assessment."
        ],
      },
      {
        heading: "What the overlay is trying to avoid",
        body: [
          "The overlay is about risk to people, property and infrastructure. The planning scheme points to avoiding development on steep land where risk is unacceptable and ensuring any necessary stabilisation measures identified by site-specific geotechnical assessment are implemented.",
          "For developers, this means slope is not just a contour-line inconvenience. It can determine whether the layout, access and earthworks are acceptable."
        ],
      },
      {
        heading: "Civil issues to check early",
        body: [
          "Check driveway grade, road tie-in levels, retaining wall heights, cut and fill, building-pad levels, stormwater velocity, scour, construction access and whether the site can be drained without concentrating flow onto neighbours.",
          "The more the design fights the landform, the more the project pays in walls, reports, redesign and construction risk. Civil feasibility should happen before the architectural concept becomes a concrete poem to gravity."
        ],
      },
      {
        heading: "What information helps",
        body: [
          "A feature and level survey is extremely valuable. Add the Development.i site report, overlay mapping, any geotechnical information, photos of the site and surrounding roads, and the proposed development yield.",
          "With those inputs, CivilCity can quickly flag whether the site needs deeper geotechnical advice, a different access strategy, or a lower-impact layout."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can test steep-site feasibility, coordinate with geotechnical consultants, review access and drainage constraints, and shape civil documentation so the design responds to the site instead of pretending the Sunshine Coast is flat. Bold strategy. Usually false."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "bushfire-hazard-overlay-sunshine-coast-subdivision-development-checks",
    title: "Bushfire hazard overlay Sunshine Coast: subdivision and development checks",
    description: "How the Sunshine Coast bushfire hazard overlay can affect subdivision, access, building envelopes, setbacks and development application material.",
    date: "2026-06-30",
    category: "Planning",
    keywords: [
      "bushfire hazard overlay Sunshine Coast",
      "Sunshine Coast bushfire development",
      "bushfire overlay subdivision Sunshine Coast",
      "building envelope bushfire Sunshine Coast",
      "civil engineer bushfire access"
    ],
    faqs: [
      {
        question: "Does bushfire mapping mean a site cannot be developed?",
        answer: "Not automatically. It means the hazard and relevant assessment benchmarks need to be checked and the design may need a specific response.",
      },
      {
        question: "Why does a civil engineer care about bushfire?",
        answer: "Because bushfire responses can affect access, road layout, turnarounds, water supply, building envelopes and earthworks.",
      },
      {
        question: "Should bushfire be checked before subdivision layout?",
        answer: "Yes. It can affect lot layout and access strategy, so it should be reviewed before the concept plan is treated as fixed.",
      }
    ],
    sections: [
      {
        heading: "Why bushfire belongs in the civil feasibility conversation",
        body: [
          "Bushfire is often treated as a specialist planning or bushfire-consultant topic, but it affects civil layout. Access, road design, lot layout, building envelopes, vegetation retention, water supply and emergency movement can all become relevant.",
          "The Sunshine Coast Planning Scheme includes Part 8 Bushfire hazard overlay code material, Part 5 assessment triggers and SC6.7 planning scheme policy guidance. Biodiversity overlay provisions can also interact with bushfire constraints and may require greater setbacks in some circumstances."
        ],
      },
      {
        heading: "The overlay can change the project shape",
        body: [
          "For subdivision, bushfire constraints can influence where lots and building envelopes sit, how access roads are designed, whether vegetation is retained or cleared, and what supporting reports are needed. A layout that looks efficient on paper may become awkward if bushfire separation, access and ecological constraints pull in different directions.",
          "SC6.7 planning scheme policy material includes advice about achieving outcomes in the Bushfire hazard overlay code and guidance about information that may be required to support a development application. That is a polite planning-scheme way of saying: bring evidence, not vibes."
        ],
      },
      {
        heading: "Civil checks to run with bushfire advice",
        body: [
          "Check whether the access arrangement supports emergency movement, whether road widths and turnarounds are practical, whether water supply arrangements are clear, and whether building envelopes can sit outside the most constrained parts of the site.",
          "If biodiversity, waterways, steep land or flood overlays also apply, the design needs a coordinated response. Moving a driveway to solve bushfire access can create stormwater, earthworks or ecological impacts elsewhere."
        ],
      },
      {
        heading: "When to involve consultants",
        body: [
          "For mapped bushfire hazard sites, involve the planner, bushfire consultant and civil engineer early. The team can then test whether the lot layout, access, services and stormwater strategy are compatible with the bushfire response.",
          "That is cheaper than each consultant solving their own problem in isolation and leaving the developer with a Frankenstein layout nobody wants to build."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can work with bushfire and planning consultants to test access, road geometry, stormwater, services and construction constraints for Sunshine Coast subdivision and development sites affected by bushfire mapping."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "acid-sulfate-soils-overlay-sunshine-coast-earthworks-development-risk",
    title: "Acid sulfate soils overlay Sunshine Coast: earthworks and development risk",
    description: "A plain-English guide to acid sulfate soils overlay checks on the Sunshine Coast, including excavation, filling, low-lying land and development application risk.",
    date: "2026-06-30",
    category: "Earthworks",
    keywords: [
      "acid sulfate soils overlay Sunshine Coast",
      "Sunshine Coast acid sulfate soils",
      "earthworks acid sulfate soils",
      "ASS investigation report Sunshine Coast",
      "development earthworks Sunshine Coast"
    ],
    faqs: [
      {
        question: "What is Area 1 in the acid sulfate soils overlay?",
        answer: "The Sunshine Coast Planning Scheme refers to Area 1 as land at or below 5 metres AHD. Always check the current overlay mapping for the specific site.",
      },
      {
        question: "Can a small project trigger acid sulfate soils assessment?",
        answer: "It can if excavation, filling, trenching or other disturbance meets relevant triggers or occurs in sensitive mapped areas.",
      },
      {
        question: "Who should check this before construction?",
        answer: "A planner, civil engineer and, where needed, geotechnical or environmental specialist should review the overlay and proposed earthworks.",
      }
    ],
    sections: [
      {
        heading: "The hidden risk below the nice flat site",
        body: [
          "Flat coastal land can look easy until earthworks, filling or service trenches trigger acid sulfate soils considerations. On the Sunshine Coast, the Acid sulfate soils overlay is one of those constraints buyers and small developers often notice too late.",
          "The Sunshine Coast Planning Scheme includes Part 8 Acid sulfate soils overlay material and Part 5 assessment triggers. The overlay mapping references Area 1 land at or below 5m AHD and Area 2 land above 5m AHD and below 20m AHD."
        ],
      },
      {
        heading: "What can trigger concern",
        body: [
          "Part 5 material references code assessment triggers involving excavation or removal of 100m³ or more of soil or sediment in Area 1, and filling of 500m³ or more with an average depth of 0.5m or greater. It also refers to relevant checks in Area 2.",
          "Those numbers are not a substitute for a current planning assessment, but they are useful screening flags. If the project involves bulk earthworks, trenches, basements, retaining or imported fill on mapped land, check the overlay early."
        ],
      },
      {
        heading: "Why civil design matters",
        body: [
          "Acid sulfate soils can affect earthworks methodology, site levels, trenching, dewatering, treatment, construction cost and reporting. The civil design should understand the likely cut and fill volumes before the project assumes the overlay is a minor paperwork item.",
          "A design that minimises unnecessary disturbance can reduce risk. A design that discovers the issue during construction has chosen the expensive tutorial mode."
        ],
      },
      {
        heading: "What to check before purchase or DA",
        body: [
          "Review the Development.i report, overlay mapping, approximate AHD levels, proposed earthworks volumes, service routes and whether the development needs deep excavation. If the site sits in low-lying coastal areas, do not skip the check just because the land looks simple.",
          "If triggers are likely, the project may need specialist soil investigation and an acid sulfate soils management approach."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can test early earthworks implications, coordinate with geotechnical or environmental specialists, and shape civil design to reduce avoidable excavation, filling and construction risk."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "transport-and-parking-code-sunshine-coast-small-development-checks",
    title: "Transport and parking code Sunshine Coast: small development checks",
    description: "How Sunshine Coast developers should think about parking, service vehicles, access, road hierarchy and transport code issues before lodging a small development application.",
    date: "2026-06-30",
    category: "Access",
    keywords: [
      "transport and parking code Sunshine Coast",
      "Sunshine Coast parking requirements development",
      "service vehicle access Sunshine Coast",
      "road hierarchy Sunshine Coast",
      "swept path Sunshine Coast"
    ],
    faqs: [
      {
        question: "Do small developments need swept path checks?",
        answer: "Often yes, especially where access is constrained, service vehicles are needed, or council needs confidence vehicles can enter and exit safely.",
      },
      {
        question: "Is parking just a town planning issue?",
        answer: "No. Planning sets requirements, but civil and traffic design determine whether the spaces and manoeuvring actually work.",
      },
      {
        question: "When should access be checked?",
        answer: "At concept stage, before the building footprint, landscaping and services lock out the best access solution.",
      }
    ],
    sections: [
      {
        heading: "Parking is not a spreadsheet-only problem",
        body: [
          "Parking ratios matter, but the civil issue is whether vehicles can enter, turn, park, service the site and leave safely. On constrained Sunshine Coast sites, transport compliance often lives or dies in the geometry.",
          "The Sunshine Coast Transport and Parking Code section 9.4.8 includes service vehicle requirements, public transport and cycling references, and links to SC6.17 road hierarchy standards. Those details can affect access design even on smaller projects."
        ],
      },
      {
        heading: "What the code is trying to achieve",
        body: [
          "The Transport and Parking Code refers to providing parking and service vehicle arrangements in accordance with the planning scheme policy. It includes development involving residential, business, community, industrial, sport and recreation and other activity groups.",
          "For developers, that means the access design should be tested by use, vehicle type, intensity and site context. A small commercial tenancy, townhouse project and childcare centre can have very different vehicle problems."
        ],
      },
      {
        heading: "Road hierarchy changes the design context",
        body: [
          "Table SC6.17B includes urban transport corridor data such as street types, typical catchments, traffic volumes, design speeds and reserve widths. Road context matters because driveway location, sight distance, manoeuvring and frontage works are not judged in a vacuum.",
          "If the site fronts a busier road or constrained street, early access advice is valuable before the building layout consumes the only workable driveway location."
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Common mistakes include counting parking spaces without checking swept paths, ignoring service vehicles, assuming tandem parking will be acceptable, placing bin storage where collection cannot work, and leaving accessible parking or pedestrian paths to the last minute.",
          "These mistakes are boring. They are also excellent at creating information requests and redesign costs, because bureaucracy apparently hates magical thinking."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can review access, parking layout, swept paths, driveway grades, frontage constraints and service vehicle needs, then coordinate with traffic engineers or planners where a formal transport response is needed."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "small-lot-housing-sunshine-coast-planning-civil-feasibility-checks",
    title: "Small lot housing Sunshine Coast: planning and civil feasibility checks",
    description: "What to check before pursuing small lot housing on the Sunshine Coast, including lot dimensions, slope, access, parking, services and stormwater.",
    date: "2026-06-30",
    category: "Subdivision",
    keywords: [
      "small lot housing Sunshine Coast",
      "Sunshine Coast small lot subdivision",
      "small lot civil design Sunshine Coast",
      "minimum lot dimensions Sunshine Coast",
      "small lot housing code Sunshine Coast"
    ],
    faqs: [
      {
        question: "Can a local plan change minimum lot requirements?",
        answer: "It can vary some minimum lot-size and dimension outcomes, but the planning scheme notes this does not override larger lot-size requirements on sloping sites where those apply.",
      },
      {
        question: "Why are small lots harder civil-design projects?",
        answer: "Because access, parking, services, stormwater and retaining have less room to work, so small layout errors create bigger consequences.",
      },
      {
        question: "Should small-lot feasibility include levels?",
        answer: "Yes. Levels are critical for driveway grades, retaining, drainage and building-pad design.",
      }
    ],
    sections: [
      {
        heading: "Small lots need more discipline, not less",
        body: [
          "Small lot housing can improve yield, but it removes tolerance. Driveways, parking, bin storage, services, stormwater and building envelopes all compete for the same limited space. The smaller the lot, the less room there is for sloppy assumptions.",
          "Sunshine Coast Part 9 development-code material notes that local plans or structure plans may vary minimum lot-size requirements, but do not override larger lot-size requirements on sloping sites where relevant. That is an important warning for small-lot feasibility."
        ],
      },
      {
        heading: "Lot size and dimensions are only the opening move",
        body: [
          "Table 9.4.4.3.2 includes minimum lot-size and dimension concepts, with slope categories affecting outcomes. It also points out that local plans or structure plans can vary some requirements.",
          "That means the same apparent yield may behave differently depending on local plan area, slope, frontage, road context and overlay mapping. A spreadsheet can say “six lots”; the driveway, stormwater and retaining wall may vote for fewer. Democracy is harsh."
        ],
      },
      {
        heading: "Civil design pressure points",
        body: [
          "Small lots are sensitive to driveway grades, garage levels, pedestrian access, retaining, inter-allotment drainage, roofwater discharge, service alignments and waste collection. A minor level change can cascade into wall heights, driveway non-compliance and awkward drainage.",
          "The civil strategy should be tested before the subdivision plan is treated as final. Early engineering can often rescue yield by setting sensible pad levels, access locations and drainage corridors."
        ],
      },
      {
        heading: "What to review before lodging",
        body: [
          "Check the local plan, zone, overlays, slope, lot dimensions, rectangle requirements, frontage, access type, servicing path and stormwater route. Also compare nearby approvals, but do not assume a neighbouring approval means your site has the same constraints.",
          "Good small-lot design is not about squeezing every centimetre. It is about leaving enough room for the unglamorous infrastructure that makes the project approvable and buildable."
        ],
      },
      {
        heading: "How CivilCity helps",
        body: [
          "CivilCity can work with surveyors, planners and designers to test small-lot layouts, levels, access, drainage, services and operational works requirements for Sunshine Coast projects."
        ],
      }
    ],
    resources: [
      {
        label: "Sunshine Coast Planning Scheme 2014",
        href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014",
      },
      {
        label: "Development.i site report",
        href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report",
      }
    ],
  },
  {
    slug: "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
    title: "Swept path analysis on the Sunshine Coast: when does development need it?",
    description:
      "A practical guide to swept path analysis for Sunshine Coast driveways, turning areas, service vehicles and tight-access sites.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "swept path analysis Sunshine Coast",
      "swept path engineer Sunshine Coast",
      "vehicle access design Sunshine Coast",
    ],
    faqs: [
      {
        question: "When is swept path analysis usually needed?",
        answer:
          "It is often useful when access is tight, turning space is constrained, a development must fit service vehicles, or council wants proof that vehicles can enter, manoeuvre and exit safely.",
      },
    ],
    sections: [
      {
        heading: "What the analysis is testing",
        body:
          "Swept path analysis checks the actual vehicle movement through a site layout, not just whether a car park or driveway looks wide enough on paper.",
      },
      {
        heading: "Why it matters for Sunshine Coast sites",
        body:
          "Many Sunshine Coast developments deal with narrow frontages, steeper ground, rear access, townhouse layouts or service access constraints that can affect approval and constructability.",
      },
      {
        heading: "How Civil City uses it",
        body:
          "CivilCity can test turning templates, access geometry and vehicle paths early so the layout can respond before the project becomes expensive to redesign.",
      },
    ],
  },
  {
    slug: "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
    title: "Driveway design on the Sunshine Coast: what a civil engineer checks",
    description:
      "Driveway gradients, widths, visibility, drainage and access geometry explained for Sunshine Coast sites.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "driveway design Sunshine Coast",
      "driveway engineer Sunshine Coast",
      "residential driveway access design",
    ],
    faqs: [
      {
        question: "What makes a driveway design difficult?",
        answer:
          "Slope, level differences, sight lines, site width, cross-fall, stormwater and the type of vehicle using the driveway all influence how practical the design will be.",
      },
    ],
    sections: [
      {
        heading: "Driveway design is not just a width check",
        body:
          "A workable driveway needs to suit grades, turning movements, drainage, visibility and the relationship between the road, footpath, boundary and building platform.",
      },
      {
        heading: "Common Sunshine Coast constraints",
        body:
          "Steep blocks, infill lots, flood-prone land and narrow frontages often force more careful driveway design than owners first expect.",
      },
      {
        heading: "Best time to review it",
        body:
          "Driveway design should be checked while the site layout is still flexible, because it often affects garage placement, car park count and even lot yield.",
      },
    ],
  },
  {
    slug: "driveway-long-sections-and-cross-sections-explained",
    title: "Driveway long sections and cross sections explained",
    description:
      "What driveway long sections and cross sections show, and why they matter for approval and buildability.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "driveway long section Sunshine Coast",
      "driveway cross section Sunshine Coast",
      "civil driveway drawings",
    ],
    faqs: [
      {
        question: "Why does council or a consultant ask for driveway sections?",
        answer:
          "Sections show the slope, transitions and finished levels in a way a plan view cannot, which helps confirm whether the driveway can actually work on site.",
      },
    ],
    sections: [
      {
        heading: "The long section shows the profile",
        body:
          "A long section follows the driveway from the road to the building or parking area so levels, grades and transitions can be checked against the site geometry.",
      },
      {
        heading: "The cross section shows the width and shape",
        body:
          "Cross sections help confirm the driveway can be built with the right cross-fall, retaining edges and drainage outcomes for the project.",
      },
      {
        heading: "Why developers should care",
        body:
          "These drawings can reveal hidden issues early, especially on sloping blocks where a driveway that looks simple in plan may be difficult to construct in reality.",
      },
    ],
  },
  {
    slug: "secondary-driveways-on-the-sunshine-coast-can-you-add-another-access",
    title: "Secondary driveways on the Sunshine Coast: can you add another access?",
    description:
      "When an extra driveway or second access point can help a Sunshine Coast development, and when it can create trouble.",
    date: "2026-06-24",
    category: "Access",
    keywords: [
      "secondary driveway Sunshine Coast",
      "second driveway Sunshine Coast",
      "additional access driveway",
    ],
    faqs: [
      {
        question: "Can a property have more than one driveway?",
        answer:
          "Sometimes yes, but it depends on frontage width, road safety, access spacing, services, visibility and how the site is intended to function.",
      },
    ],
    sections: [
      {
        heading: "A second driveway is often about function",
        body:
          "Secondary access can help with construction staging, car movement, service access or separating different uses on the one site.",
      },
      {
        heading: "It can also create approval issues",
        body:
          "Extra access points may create conflict with parking layout, tree removal, drainage, street character, or road authority expectations.",
      },
      {
        heading: "Check it before the layout is fixed",
        body:
          "If an additional driveway might improve the project, it is best tested while lot layout and architectural planning are still fluid.",
      },
    ],
  },
  {
    slug: "how-overlays-affect-your-sunshine-coast-property",
    title: "How overlays affect your Sunshine Coast property",
    description:
      "A plain-English guide to how overlays can change what you can build, subdivide or approve on a Sunshine Coast site.",
    date: "2026-06-24",
    category: "Planning",
    keywords: [
      "overlays Sunshine Coast",
      "property overlays Sunshine Coast",
      "how overlays affect property",
    ],
    faqs: [
      {
        question: "Do overlays stop all development?",
        answer:
          "Not always. Overlays usually do not stop a project outright, but they can change design rules, trigger extra assessments or increase technical evidence requirements.",
      },
    ],
    sections: [
      {
        heading: "What an overlay usually means",
        body:
          "An overlay marks a planning or environmental constraint on the land that needs to be considered when you design, subdivide or lodge a development application.",
      },
      {
        heading: "Why it matters for feasibility",
        body:
          "Flooding, bushfire, coastal, environmental, slope, heritage and infrastructure overlays can all affect yield, access, drainage, building areas and approval cost.",
      },
      {
        heading: "Check the mapping early",
        body:
          "Overlay mapping should be part of due diligence before purchase, because it can change the way a site is valued and the way Civil City approaches the design brief.",
      },
    ],
  },
  {
    slug: "how-can-i-see-easements-on-my-property",
    title: "How can I see easements on my property?",
    description:
      "Where to look for easements, what they mean and why they matter for Sunshine Coast development sites.",
    date: "2026-06-24",
    category: "Due diligence",
    keywords: [
      "how to see easements Sunshine Coast",
      "easements on title",
      "property easement check",
    ],
    faqs: [
      {
        question: "Where are easements usually shown?",
        answer:
          "They are commonly shown on title documents, survey plans, cadastral information or council and utility records, depending on the type of easement.",
      },
    ],
    sections: [
      {
        heading: "Easements are not just paperwork",
        body:
          "An easement is a legal corridor that can limit where you build, landscape or excavate, especially if it protects drainage, sewer, water, access or infrastructure assets.",
      },
      {
        heading: "Why developers check them early",
        body:
          "Easements can affect lot layout, building envelopes, driveway placement, stormwater discharge and the ability to subdivide a site efficiently.",
      },
      {
        heading: "What Civil City looks for",
        body:
          "CivilCity can help interpret how easements interact with the physical design of the site so the project team understands the practical constraints, not just the legal ones.",
      },
    ],
  },
  {
    slug: "development-infrastructure-charges-on-the-sunshine-coast-what-to-allow-for",
    title: "Development infrastructure charges on the Sunshine Coast: what to allow for",
    description:
      "How infrastructure charges and other site contributions can affect feasibility for small and medium Sunshine Coast developers.",
    date: "2026-06-24",
    category: "Planning",
    keywords: [
      "infrastructure charges Sunshine Coast",
      "development charges Sunshine Coast",
      "development feasibility costs",
    ],
    faqs: [
      {
        question: "Why do infrastructure charges matter so early?",
        answer:
          "Because they can change project feasibility, cash flow and yield before the site is purchased or the layout is locked in.",
      },
    ],
    sections: [
      {
        heading: "Charges belong in the feasibility model",
        body:
          "Developers should treat infrastructure charges as a core project cost, not a last-minute admin item after the design is finished.",
      },
      {
        heading: "They can shape the project structure",
        body:
          "The final numbers may influence whether a project is worth pursuing, whether the yield is large enough, or whether the design needs to change.",
      },
      {
        heading: "Get the engineering and planning view together",
        body:
          "CivilCity can help frame the likely civil consequences of a site so the charge discussion is not separated from access, drainage, servicing and delivery risk.",
      },
    ],
  },
  {
    slug: "what-consultants-do-you-need-for-a-sunshine-coast-subdivision",
    title: "What consultants do you need for a Sunshine Coast subdivision?",
    description: "A practical guide to the consultant team for Sunshine Coast subdivision projects, including planning, survey, civil engineering, geotechnical and specialist advice.",
    date: "2026-09-17",
    category: "Subdivision",
    keywords: ["consultants for subdivision Sunshine Coast", "subdivision consultant team Sunshine Coast", "civil engineer subdivision Sunshine Coast", "subdivision planning survey civil engineering", "reconfiguring a lot consultants Sunshine Coast"],
    faqs: [
      { question: "Do I need every consultant before I buy a site?", answer: "No. Start with a proportionate feasibility review. Planning, survey and civil input are often the first useful combination; geotechnical, traffic, bushfire, environmental or other specialists can be added when the site or approval pathway requires them." },
      { question: "Can a town planner design the subdivision layout?", answer: "A planner can lead the planning pathway and coordinate the application, but the layout still needs accurate survey information and civil testing for access, stormwater, services, earthworks and constructability." },
      { question: "When should I involve a civil engineer?", answer: "Before the concept is fixed or the property is unconditionally purchased if possible. Early civil advice can identify a failed access, drainage, slope or servicing assumption while the design can still change cheaply." },
      { question: "Who prepares the final survey plan for plan sealing?", answer: "The cadastral surveyor prepares the survey and plan-sealing documentation, while the civil engineer helps close out the infrastructure, drainage, access and construction requirements that may be conditions of the approval." },
    ],
    sections: [
      { heading: "Short answer", body: ["Most Sunshine Coast subdivisions need a coordinated team rather than one all-purpose consultant. The core team is usually a town planner, cadastral surveyor and civil engineer. Depending on the site, you may also need a geotechnical engineer, hydraulic or stormwater specialist, traffic consultant, bushfire consultant, ecologist, environmental consultant, arborist or solicitor.", "The right question is not ‘which consultants are cheapest?’ It is ‘which risks can change the yield, approval pathway or construction cost?’ Engage the specialists that test those risks before the layout becomes expensive to change."] },
      { heading: "The core three for most projects", body: ["A town planner interprets the Sunshine Coast Planning Scheme 2014, identifies the likely development pathway, checks relevant codes and coordinates the planning application. They help answer whether the proposed reconfiguration of a lot is likely to be assessable and what planning information will be needed.", "A cadastral surveyor establishes the legal and physical starting point: boundaries, levels, existing improvements, services visible on site, easements and the survey information needed for a reliable concept. Aerial imagery is not a substitute for a boundary and feature survey.", "A civil engineer tests whether the proposed lots can actually work. That includes frontage and driveway access, grades, sight distance, stormwater and lawful discharge, sewer and water servicing, earthworks, retaining, road or frontage works, erosion control and the detail likely to be required for operational works."] },
      { heading: "Specialists triggered by the site", body: ["A geotechnical engineer may be needed where slope, fill, reactive or weak soils, landslide hazard, retaining or significant earthworks affect the design. A traffic or access specialist may be relevant for constrained frontage, shared access, higher traffic generation or a connection to a busy road.", "Bushfire, ecological, coastal, flood, environmental or arboricultural advice can become important when mapping, vegetation, waterways, hazards or a site-specific planning requirement triggers it. A hydraulic specialist may support complex stormwater or flood modelling, while a utilities consultant may help where water, sewer, electricity or telecommunications upgrades are difficult.", "These specialists should be added because of a defined risk, not because a large consultant list looks professional. The planner should coordinate the approval pathway, while the project lead keeps one consistent base plan so every report is solving the same site."] },
      { heading: "A practical engagement sequence", body: ["First, obtain the title, survey information if available, site address, proposed yield and any purchase deadline. Check the Development.i site report, the Planning Scheme mapping and nearby development decisions. This gives the team a common starting point, but it does not replace site-specific design or formal advice.", "Second, ask the planner, surveyor and civil engineer to test the concept together. Confirm lot dimensions, access, driveway grades, stormwater discharge, sewer and water, easements, slope, flood or environmental constraints and likely operational works. Record assumptions and unknowns instead of allowing them to disappear into a coloured concept plan.", "Third, commission triggered specialist reports and update the concept before lodgement. Finally, agree who owns responses to information requests, condition compliance, detailed civil design, construction inspections, as-constructed records and plan-sealing closeout."] },
      { heading: "Mistakes that cost time and margin", body: ["The expensive mistake is engaging consultants in silos. A planner may show a yield that cannot drain; a designer may place a driveway over a service; or a civil concept may rely on a boundary that has not been surveyed. Each late discovery creates redesign, additional reports, holding costs or a weaker negotiation position.", "Another mistake is treating council information as a guarantee. Mapping, site reports and application guidance are important official starting points, but the actual outcome depends on the proposal, assessment pathway, conditions and evidence submitted. Budget for survey, consultant coordination, application costs, civil works, services, bonds and contingency."] },
      { heading: "When to involve a civil engineer", body: ["Involve a civil engineer before committing to a layout when the site has a narrow frontage, steep slope, flood or overland flow risk, existing drainage or sewer, shared access, retaining, limited discharge options or a proposed yield that depends on tight dimensions. These are not ‘later detailing’ issues; they can decide whether the project works at all.", "CivilCity can provide early subdivision feasibility input, coordinate with the planner and surveyor, test access and levels, develop stormwater and servicing strategies, prepare civil documentation and support the project through operational works and construction closeout. Send the address, title plan, survey if available and target outcome for a focused first review."] },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Council Development.i site report", href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report" },
      { label: "Sunshine Coast Planning Scheme 2014", href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014" },
      { label: "Sunshine Coast Council development application forms", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms" },
      { label: "Sunshine Coast Council operational work applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work" },
    ],
  },
  {
    slug: "how-civil-engineering-supports-a-development-application",
    title: "How civil engineering supports a Sunshine Coast development application",
    description: "Where civil engineering fits in a Sunshine Coast development application, what it should test and how early engineering can reduce redesign and approval risk.",
    date: "2026-09-18",
    category: "Approvals",
    keywords: ["civil engineering development application Sunshine Coast", "development application civil engineer Sunshine Coast", "civil report development application", "Sunshine Coast development approval engineering"],
    faqs: [
      { question: "Does every development application need a civil engineering report?", answer: "No. The need depends on the proposal, site constraints, assessment pathway and information requested by Council or another referral agency. A civil review is still valuable where access, drainage, servicing, earthworks or frontage works could affect feasibility." },
      { question: "Can civil engineering be added after the planning application is lodged?", answer: "Sometimes, but late input can force layout changes, information-request responses or redesign. It is usually more efficient to test the civil constraints while the concept can still change." },
      { question: "What does a civil engineer provide for a development application?", answer: "Depending on the project, civil input may include a feasibility note, concept access and parking, levels and earthworks, stormwater and lawful discharge strategy, servicing advice, erosion and sediment control, or responses to conditions and information requests." },
      { question: "Does civil engineering guarantee development approval?", answer: "No. Civil advice supports the application; it does not replace planning assessment or guarantee an outcome. The proposal still needs to satisfy the applicable planning scheme, codes, conditions and other statutory requirements." },
    ],
    sections: [
      { heading: "Short answer", body: ["Civil engineering helps a development application demonstrate that the proposal can be accessed, drained, serviced and constructed on the actual Sunshine Coast site. It connects the planning concept to physical evidence: levels, grades, stormwater paths, utilities, earthworks, road interfaces and construction obligations.", "The best time to involve a civil engineer is before the layout is fixed. Early engineering can expose a fatal or expensive assumption while the planner, architect and surveyor can still respond without reworking the whole application."] },
      { heading: "What civil engineering adds to the application", body: ["A planning application may explain the proposed use, yield and planning response, but the approving authority also needs confidence that the site works in practice. Civil engineering tests the physical consequences of the proposal and identifies what must be shown now versus what can be resolved at operational works or detailed design stage.", "Typical questions include: Can vehicles enter and leave safely? Are driveway grades and sight lines workable? Where does stormwater go, and is the discharge point lawful? Can water and sewer services reach the proposed lots or buildings? Will cut, fill or retaining alter adjoining land? Are frontage, road, footpath or drainage works likely to be conditioned?"] },
      { heading: "Sunshine Coast issues that need early testing", body: ["Local sites vary sharply between coastal infill, established urban areas, hinterland land and sloping suburbs such as Buderim. Flood and overland flow mapping, steep land, narrow frontages, existing easements, older services and constrained lawful discharge can all change the viable layout.", "For a reconfiguration of a lot, the civil review should test proposed lot dimensions, access and turning, road frontage, stormwater, sewer and water, levels and likely operational works. For a townhouse or commercial proposal, add parking geometry, swept paths, loading or waste access, pavement and construction staging where relevant.", "Council mapping and Development.i are useful starting points, not site guarantees. The concept still needs reliable survey information and project-specific engineering judgment; aerial imagery or a coloured yield plan is not enough evidence for a buildable outcome."] },
      { heading: "A practical civil review process", body: ["1. Define the proposal: address, target yield or use, concept plan, title information, survey, known services and the intended approval pathway. Record the assumptions that the feasibility depends on.", "2. Screen the constraints: review the Planning Scheme mapping and Development.i information, then check access, levels, flood or overland flow, easements, discharge options, sewer and water, earthworks and interfaces with Council infrastructure.", "3. Test the concept: use the survey to check grades, turning, building or lot envelopes, drainage paths and service corridors. Identify constraints that can be solved and those that reduce yield or require specialist advice.", "4. Package the evidence: prepare the proportionate civil drawings, report, calculations or advice needed for the application. Clearly separate concept assumptions from matters to be confirmed during detailed design.", "5. Carry the thread forward: track civil conditions, operational works triggers, construction inspections, as-constructed information and plan-sealing requirements so approval does not become a false finish line."] },
      { heading: "Mistakes that create delay and cost", body: ["The common mistake is treating civil engineering as a compliance attachment commissioned after the planner has finished the layout. If the access is too steep, the discharge is unavailable or a retaining solution consumes the building area, the application may need redesign rather than a quick report.", "Other costly errors include using an unverified boundary, ignoring easements, assuming a nearby pit is an automatic lawful discharge point, underestimating service upgrades, and failing to distinguish a development approval from approval to construct civil works. Poor coordination also creates conflicting plans, duplicated surveys and unanswered information requests.", "A proportional early review is cheaper than discovering these issues after purchase, lodgement or construction pricing. It also gives the developer a clearer contingency and a more credible conversation with the planning and project team."] },
      { heading: "When to involve a civil engineer", body: ["Bring civil engineering in before purchase where the deal depends on yield, before a concept is presented as feasible, and before lodgement where access, stormwater, servicing, slope, flood, retaining or frontage works are material. Involve the engineer again when conditions are issued, detailed design begins or construction closeout is approaching.", "CivilCity supports Sunshine Coast developers, landowners, planners, architects and builders with early feasibility reviews, planning-stage civil advice, access and stormwater strategy, servicing and earthworks input, detailed documentation, condition responses and construction-phase support. Send the address, concept plan and target outcome for a focused first review."] },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Council Development.i", href: "https://developmenti.sunshinecoast.qld.gov.au/" },
      { label: "Sunshine Coast Planning Scheme 2014", href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014" },
      { label: "Sunshine Coast Council development applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications" },
      { label: "Sunshine Coast Council development application forms", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms" },
    ],
  },
  {
    slug: "referral-agencies-and-sara-sunshine-coast-development",
    title: "Referral agencies and SARA: when state assessment may affect a Sunshine Coast project",
    description: "A practical guide to referral agency risk, SARA triggers and the civil information Sunshine Coast developers should check before lodging.",
    date: "2026-09-19",
    category: "Approvals",
    keywords: ["SARA Sunshine Coast development", "referral agency Sunshine Coast", "state referral development application Queensland", "civil engineering referral agency assessment"],
    faqs: [
      { question: "Does every Sunshine Coast development need SARA referral?", answer: "No. Referral depends on the proposal, site location, triggering mapping and applicable Queensland planning rules. Confirm the actual trigger for the project with the planning team." },
      { question: "What civil issues can create referral risk?", answer: "Access to a state-controlled road, stormwater or flooding impacts, waterways, coastal hazards, earthworks, environmental constraints and infrastructure interfaces can require early checking or specialist input." },
      { question: "When should I check referral agencies?", answer: "Before buying a site unconditionally or fixing the concept, while access, drainage, servicing, levels and the site layout can still change." },
    ],
    sections: [
      { heading: "Short answer", body: ["A Sunshine Coast development may need assessment by a referral agency when a state interest or mapped trigger is engaged. SARA is Queensland's central referral agency, but the exact pathway depends on the proposal, site and applicable planning rules.", "Treat referral risk as a feasibility issue, not end-of-process form filling. Check the trigger early, identify the information needed, and make sure the civil concept does not create avoidable access, drainage, flood, earthworks or road-interface problems."] },
      { heading: "What referral agency assessment means", body: ["A development application can involve more than Sunshine Coast Council's local planning assessment. Where a state planning interest is affected, it may be referred to the relevant agency for assessment, advice or conditions. The referral agency responds to matters within its jurisdiction; it is not a general second opinion on the whole project.", "Examples can include proposals near state-controlled roads, waterways or coastal areas, mapped environmental or hazard constraints, infrastructure corridors or other regulated interests. The trigger is site- and proposal-specific, so a nearby project is not proof that another application will follow the same pathway."] },
      { heading: "Sunshine Coast checks before lodgement", body: ["Start with the address, proposed use or reconfiguration, site plan, title information and survey. Review the Sunshine Coast Planning Scheme 2014 and relevant mapping, then use Council's development application information to understand the local pathway. Ask the planner to confirm whether a state trigger needs to be checked through the Queensland planning framework.", "Then test the physical consequences. Is access close to a state-controlled road? Does the site drain toward a waterway or constrained corridor? Are cut, fill or retaining likely to affect adjoining land? Will the concept need a new connection, service crossing, frontage work or traffic response? These questions determine whether civil evidence or specialist reports should be commissioned early.", "Do not rely on a desktop map alone. Mapping is a screening tool; a current survey, site inspection, levels, title review and project-specific design are needed to understand the actual impact."] },
      { heading: "A practical referral-risk process", body: ["1. Define the proposal and record the address, intended use or lot outcome, access arrangement, footprint, known services and deadlines.", "2. Screen the triggers: review Council's planning scheme and mapping, identify state-road, waterway, coastal, environmental, hazard or infrastructure interfaces, and confirm the likely pathway.", "3. Test the civil concept: check access geometry, sight distance, grades, stormwater and lawful discharge, overland flow, earthworks, retaining, services and construction access.", "4. Match evidence to the trigger by coordinating the planner, surveyor, civil engineer and any required specialist on one base plan.", "5. Track conditions through delivery: referral conditions can affect detailed design, operational works, construction sequencing, inspections, as-constructed information and closeout."] },
      { heading: "Mistakes that cost money and delay", body: ["The first mistake is assuming a Council development application is automatically the complete approval pathway. A state referral trigger can change the information needed, design response and programme.", "The second is treating referral as a planning-only problem. An access may be too close to a road interface, drainage may not demonstrate safe discharge, or earthworks may create an adjoining-property issue. If those matters appear after lodgement, redesign and another round of consultant work may follow.", "The third is designing to a map pin rather than verified site information. Old survey data, unconfirmed boundaries, incomplete service records and optimistic levels can undermine a polished submission."] },
      { heading: "When to involve a civil engineer", body: ["Bring civil engineering in before the concept is fixed when the site interfaces with a state road, waterway, flood or coastal constraint, major drainage path, steep land, retaining, service corridor or constrained access. Civil input is also valuable when a referral condition could affect yield, frontage works, stormwater infrastructure or construction cost.", "CivilCity can work with the planner and surveyor to screen referral-related civil constraints, test access and levels, develop stormwater and servicing strategies, prepare proportionate civil documentation, respond to conditions and support operational works and construction closeout. Send the address, concept plan and approval target for a focused first review."] },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Council development applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications" },
      { label: "Sunshine Coast Planning Scheme 2014", href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014" },
      { label: "Queensland planning framework", href: "https://www.planning.qld.gov.au/planning-framework" },
      { label: "Queensland Development Assessment", href: "https://planning.dsdmip.qld.gov.au/" },
    ],
  },
  {
    slug: "public-notification-sunshine-coast-developments-what-it-means",
    title: "Public notification for Sunshine Coast developments: what it means",
    description: "A practical guide to public notification, neighbour submissions and civil design risks for Sunshine Coast development applications.",
    date: "2026-09-21",
    category: "Approvals",
    keywords: ["public notification Sunshine Coast development", "development application notification Queensland", "Sunshine Coast neighbour submissions", "development approval civil engineering"],
    faqs: [
      { question: "Does every Sunshine Coast development need public notification?", answer: "No. Whether notification is required depends on the application, the category of assessment and the applicable Queensland and local planning rules. Confirm the pathway for the specific proposal with the planner." },
      { question: "Can a neighbour's submission stop a development?", answer: "A submission does not automatically stop an application. It can identify matters the assessment manager must consider, and may expose design, access, drainage, amenity or compliance issues that need a response." },
      { question: "What civil information should be ready before notification?", answer: "At minimum, the concept should have a credible access, parking, earthworks, retaining, stormwater and servicing strategy. If the notified plans change materially, the programme and consultation risk can grow." },
      { question: "When should I involve a civil engineer?", answer: "Before the notified design is locked when the project has constrained access, flood or overland flow, steep land, retaining, drainage, road works or service conflicts." },
    ],
    sections: [
      { heading: "Short answer", body: ["Public notification gives affected or interested people an opportunity to inspect a development application and make a properly made submission where the applicable assessment pathway requires it. It is part of the planning process, not a vote on whether a project is popular.", "For a Sunshine Coast project, the practical risk is not simply receiving objections. It is notifying a concept before its access, stormwater, earthworks, servicing or built-form assumptions are mature, then discovering that a submission or assessment issue requires redesign. Treat notification as a design-readiness checkpoint." ] },
      { heading: "What public notification changes", body: ["The application becomes visible to the community through the prescribed notification process. People may raise concerns about matters such as traffic, driveway location, flooding, drainage, overlooking, noise, earthworks, vegetation or the perceived fit of the proposal with the neighbourhood. The assessment manager must consider relevant submissions under the applicable rules, but not every concern is a planning ground or a reason for refusal.", "The exact notification requirements depend on the application type and Queensland development assessment framework. Sunshine Coast Council's development application guidance and the Planning Scheme 2014 should be checked for the current local process. Do not assume a nearby application used the same notification pathway." ] },
      { heading: "Civil issues that attract avoidable attention", body: ["Civil design often sits behind the issues people notice first. A driveway that appears too close to a bend, a steep shared access, a retaining wall near a boundary, stormwater directed toward a neighbour, an unclear overland flow path or a service connection across another property can create legitimate questions about how the project will work.", "These matters are easier to explain when the application includes a coherent site plan, levels, access geometry, drainage strategy and earthworks response. They are harder to defend when the drawings show only a building footprint and leave infrastructure for a later stage." ] },
      { heading: "A practical pre-notification checklist", body: ["1. Confirm the planning pathway and whether public notification applies. Record the relevant assessment rules and any referral or information requirements.", "2. Freeze the project assumptions that affect neighbours: access points, parking and manoeuvring, finished levels, retaining, cut and fill, stormwater discharge, construction access and service routes.", "3. Check the physical evidence. Use a current survey where levels, boundaries, trees, kerbs, pits or existing infrastructure matter. Review Council mapping, title information and available service records.", "4. Stress-test the concept. Ask whether runoff, retaining, vehicle movements, construction activity or changes in finished level could affect adjoining land. Resolve what can be resolved before notification and clearly identify what belongs to detailed design.", "5. Coordinate the response team. The planner should lead the planning narrative, while the civil engineer provides concise, evidence-based responses to access, drainage, earthworks and servicing matters." ] },
      { heading: "Common mistakes that cost time", body: ["The first mistake is treating public notification as a communications exercise only. A friendly letter cannot fix a driveway grade, an unsupported stormwater assumption or an unexplained retaining wall.", "The second is overpromising in the application. If the drawings imply that civil works are solved but the details are not feasible, later conditions or redesign can undermine the programme. Show enough engineering to make the proposal credible, without pretending preliminary plans are construction documentation.", "The third is reacting defensively to every submission. Separate valid design risks from issues outside the assessment framework, then respond with measurements, plans and a clear commitment to the next design stage. Emotional replies are expensive and rarely improve an approval." ] },
      { heading: "When to involve a civil engineer", body: ["Bring civil engineering in before notification where access is constrained, the site is sloping or flood-affected, stormwater cannot obviously discharge to the street, retaining is close to a boundary, a new crossover or frontage work is proposed, or shared services are involved. Early input can also identify whether a proposed condition may trigger operational works, bonding, inspection or as-constructed requirements later.", "CivilCity helps Sunshine Coast developers, planners, architects and builders test the civil story behind a development application: access and swept paths, levels, earthworks, retaining, stormwater, lawful discharge, services and likely approval-condition responses. We can review an early concept, prepare proportionate civil information and support the team through conditions and detailed design." ] },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Council development applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications" },
      { label: "Sunshine Coast Planning Scheme 2014", href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014" },
      { label: "Queensland Development Assessment", href: "https://planning.dsdmip.qld.gov.au/" },
      { label: "Queensland Planning Act 2016", href: "https://www.legislation.qld.gov.au/view/html/inforce/current/act-2016-005" },
    ],
  },
  {
    slug: "negotiating-development-conditions-sunshine-coast-civil-items-to-watch",
    title: "Negotiating development conditions: Sunshine Coast civil items to watch",
    description: "A practical guide for Sunshine Coast developers reviewing approval conditions affecting access, stormwater, services, earthworks and delivery.",
    date: "2026-09-22",
    category: "Approvals",
    keywords: ["development conditions Sunshine Coast", "negotiate development conditions", "civil conditions development approval", "Sunshine Coast subdivision conditions"],
    faqs: [
      { question: "Can a developer negotiate a development condition?", answer: "Sometimes. The available response depends on the approval, condition wording, legal framework and evidence supporting the proposed change. Have the planner lead the formal process and use civil evidence to test technical conditions." },
      { question: "Which conditions most often need civil review?", answer: "Access and frontage works, stormwater and lawful discharge, flood or overland flow, earthworks and retaining, services, operational works, inspections, bonds, as-constructed information and plan sealing." },
      { question: "When should a civil engineer review the conditions?", answer: "As soon as the decision notice arrives, especially before accepting a tender, lodging operational works or committing to a construction sequence." },
    ],
    sections: [
      { heading: "Short answer", body: ["Do not treat development conditions as boilerplate. Read each condition against the approved plans, the site and the delivery programme, then identify which items need clarification, technical evidence or a formal planning response. Conditions covering access, stormwater, earthworks, services and operational works can materially change cost and timing.", "The practical sequence is: understand the condition, check whether it is consistent with the approval and physically achievable, quantify its consequence, and have the planner coordinate the appropriate response. CivilCity can test the engineering implications before a condition becomes a construction surprise."] },
      { heading: "Start with the decision notice and approved plans", body: ["Create a condition register as soon as the approval is issued. Record the condition number, responsible consultant, required evidence, dependency, likely cost and target date. Read the conditions together with the stamped plans and any referral agency requirements; a condition cannot be understood reliably in isolation.", "Check for contradictions between the approved layout and the conditions. Examples include an access arrangement that differs from the civil concept, a stormwater requirement that assumes a discharge point not confirmed during design, or a frontage-work obligation missing from the cost plan."] },
      { heading: "Civil conditions that can change the project", body: ["Access conditions may require a crossover, road widening, verge works, sight-distance response, shared driveway upgrades or vehicle movement evidence. Stormwater conditions may require lawful discharge, detention, quality treatment, overland flow management, easements or maintenance arrangements. Test the point of discharge, levels and downstream interface rather than assuming they work.", "Earthworks, retaining and servicing conditions can create hidden cost. Cut and fill may alter adjoining levels; retaining can require geotechnical input; and water, sewer, power or telecommunications interfaces may require coordination beyond the civil drawing set. Operational works, inspection, bonding and as-constructed requirements affect closeout as well as construction."] },
      { heading: "A practical condition-review process", body: ["1. Copy the exact wording into a condition register and identify the trigger: prior to approval, construction, plan sealing or another milestone. 2. Map each condition to the approved design and mark whether it is satisfied, needs normal detail, conflicts with the concept or requires another specialist. 3. Use current survey and site information to check access grades, turning, sight distance, drainage levels, discharge, overland flow, earthworks, retaining and service corridors. 4. Update budget, programme, bond allowance, consultant scope and construction sequence. 5. Have the planner choose the formal response pathway, supported by concise civil evidence and an achievable alternative. 6. Track the register through operational works, prestart, inspections, as-constructed records and plan sealing."] },
      { heading: "Mistakes that cost money and delay", body: ["The expensive mistake is accepting a condition without checking its interaction with the design. Developers then discover during detailed drawings or tendering that the approved yield, driveway, drainage or retaining strategy cannot meet it without redesign.", "Another mistake is arguing that a condition is unreasonable without evidence. A useful response identifies the specific conflict, explains the engineering consequence and proposes a measurable alternative that still addresses the planning or infrastructure objective. Finally, keep one controlled base plan: conflicting survey, architectural, landscape and civil drawings create avoidable information requests."] },
      { heading: "When to involve a civil engineer", body: ["Ask for civil review immediately after approval where conditions affect access, stormwater, flood or overland flow, earthworks, retaining, services, frontage works, operational works, bonding or plan sealing. Bring the engineer back before tendering if the response changes quantities, levels, materials or construction staging.", "CivilCity helps Sunshine Coast developers translate conditions into a coordinated delivery plan: condition registers, access and level checks, stormwater and lawful-discharge strategy, servicing and earthworks advice, operational works documentation, construction support and closeout evidence. Send the decision notice, approved plans and target programme for a focused review."] },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Council development applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications" },
      { label: "Sunshine Coast Council operational work applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work" },
      { label: "Sunshine Coast Council plan sealing", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing" },
      { label: "Queensland Development Assessment", href: "https://planning.dsdmip.qld.gov.au/" },
      { label: "Queensland Planning Act 2016", href: "https://www.legislation.qld.gov.au/view/html/inforce/current/act-2016-005" },
    ],
  },
  {
    slug: "how-long-does-a-sunshine-coast-subdivision-approval-take",
    title: "How long does a Sunshine Coast subdivision approval take?",
    description: "A practical Sunshine Coast subdivision programme guide covering planning, survey, civil design, information requests, operational works and plan sealing.",
    date: "2026-09-23",
    category: "Subdivision",
    keywords: ["how long subdivision approval Sunshine Coast", "subdivision approval timeframe Sunshine Coast", "subdivision timeline Queensland", "civil engineering subdivision programme"],
    faqs: [
      { question: "How long does a Sunshine Coast subdivision approval take?", answer: "There is no single reliable duration. The programme depends on the assessment pathway, application quality, information requests, referral requirements, conditions, civil complexity and whether operational works and plan sealing are also included in the delivery programme." },
      { question: "Does the council assessment period equal the whole subdivision programme?", answer: "No. The statutory assessment period is only one part. Survey, concept design, reports, lodgement, information responses, detailed civil design, operational works, construction, inspections and plan sealing can all sit before or after the decision." },
      { question: "What commonly delays a subdivision?", answer: "Incomplete information, unresolved access or stormwater, unclear servicing, revised layouts, referral responses, conditions that conflict with the concept, construction closeout and missing as-constructed evidence are common causes." },
      { question: "When should a civil engineer be involved?", answer: "Before the layout is fixed and before the approval programme is promised. Early civil input can test access, levels, stormwater, services, earthworks and operational works triggers that otherwise create redesign later." },
    ],
    sections: [
      { heading: "Short answer", body: ["A Sunshine Coast subdivision can take months from first feasibility to sealed plan, and the approval decision is only one milestone. The actual programme depends on the planning pathway, the quality of the first submission, information requests, referrals, civil complexity, conditions and the time needed to construct and close out infrastructure.", "For a developer, the useful question is not simply ‘how many days will council take?’ It is ‘which steps control my critical path, and what can I resolve before lodgement?’"] },
      { heading: "The programme has several separate stages", body: ["A realistic programme usually includes: site and title due diligence; survey and concept layout; planning and civil reports; application preparation and lodgement; assessment and any information request; decision notice and conditions; detailed civil and operational works design; construction and inspections; as-constructed documentation; and plan sealing or other closeout steps.", "These stages can overlap, but they cannot all be compressed by asking for a faster assessment. A project may receive a decision and still be unable to start civil works because the operational works package, approvals, construction details or service coordination are not ready."] },
      { heading: "What controls the assessment period", body: ["The applicable Queensland development assessment pathway controls the formal process. Confirm the current pathway, information requirements, referral agencies and notification obligations for the specific proposal rather than applying a timeframe from another subdivision.", "Application quality matters. A concept that clearly explains lot layout, access, stormwater, earthworks, services and relevant constraints gives the assessment manager a more coherent basis for review. Missing or contradictory information can lead to requests, redesign and a programme reset.", "Sunshine Coast conditions also vary by site. A steep hinterland block, a flood-affected infill site, a battle-axe layout or a subdivision requiring frontage works will not have the same risk profile as a straightforward flat site with existing services."] },
      { heading: "Civil dependencies that create hidden delay", body: ["Access is often a critical dependency. Check driveway grades, sight distance, turning, crossover requirements, road frontage and construction access early. If the access geometry changes, the lot layout, retaining, drainage and building envelopes may change with it.", "Stormwater is another programme driver. Confirm the lawful discharge strategy, levels, overland flow response, detention or treatment requirements, easements and downstream interface before promising a lodgement date. ‘We will solve drainage during detailed design’ is not a programme; it is a risk transfer to the future.", "Services, earthworks and retaining can also affect yield and conditions. Sewer and water connections, service clashes, cut and fill, retaining near boundaries and operational works triggers may require other consultants, approvals or revised cost allowances."] },
      { heading: "A practical way to build the programme", body: ["1. Define the end point: approval only, construction-ready package, completed civil works, or sealed lots. 2. List every dependency and owner, including survey, planning, civil, geotechnical, service authorities, construction and Council milestones. 3. Mark assumptions that must be verified, such as point of discharge, service capacity, access grades and retaining limits. 4. Add a response allowance for information requests and redesign rather than presenting a best-case promise. 5. Track approval conditions separately from the application, because conditions can create new operational works, bonding, inspection or plan-sealing tasks. 6. Update the programme after each decision, not only when something goes wrong."] },
      { heading: "Mistakes that cost time and money", body: ["The biggest mistake is quoting a single end-to-end timeframe based on the statutory assessment period. That ignores design, procurement, construction and closeout. Another is lodging before the civil concept is credible, then discovering that access or drainage requires a new layout.", "Developers also lose time when consultants work from different surveys or uncontrolled drawing versions. Use one current base plan and a condition register. Confirm who owns each response and what evidence is needed before the next milestone.", "Finally, do not leave plan sealing until the end. As-constructed records, inspection evidence, practical completion and outstanding conditions should be tracked during construction, because recreating evidence after contractors leave is slow and expensive."] },
      { heading: "When to involve a civil engineer", body: ["Involve civil engineering before land purchase where possible, before fixing the subdivision concept, and immediately after approval if conditions affect access, stormwater, earthworks, retaining, services or operational works. The earlier review is proportionate: a feasibility screen may be enough initially, followed by detailed design once the planning pathway is clear.", "CivilCity helps Sunshine Coast developers build a defensible programme around the actual civil work: site feasibility, concept layouts, access and levels, stormwater and lawful discharge, servicing, operational works documentation, construction support, as-constructed records and plan sealing closeout. Send the site address, proposed yield and target milestone for a focused programme-risk review."] },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Council development applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications" },
      { label: "Sunshine Coast Council operational work applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work" },
      { label: "Sunshine Coast Council plan sealing", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing" },
      { label: "Queensland Development Assessment", href: "https://planning.dsdmip.qld.gov.au/" },
    ],
  },
  {
    slug: "subdivision-sunshine-coast",
    title: "Subdivision Sunshine Coast: the practical approval and feasibility guide",
    description: "A detailed Sunshine Coast subdivision guide covering lot size, assessment pathway, access, stormwater, services, overlays, operational works and plan sealing.",
    date: "2026-09-23",
    category: "Subdivision",
    keywords: [
      "subdivision Sunshine Coast",
      "Sunshine Coast subdivision",
      "subdivide land Sunshine Coast",
      "subdivision feasibility Sunshine Coast",
      "reconfiguring a lot Sunshine Coast",
      "subdivision civil engineer Sunshine Coast",
      "Sunshine Coast subdivision approval",
    ],
    faqs: [
      { question: "What is the minimum lot size for subdivision on the Sunshine Coast?", answer: "It depends on the zone, slope and any local plan or structure plan provisions. The Sunshine Coast Planning Scheme Reconfiguring a lot code lists 600m² for Low density residential land where slope is 15% or less, increasing to 1,000m² where slope is over 15% and up to 20%, and 1,500m² where slope is over 20%. Local plan or structure plan provisions can vary some lot-size requirements, so the site must be checked specifically." },
      { question: "Is a Sunshine Coast subdivision code assessable or impact assessable?", answer: "Many reconfiguring-a-lot applications are code assessable, but the pathway can change. For example, creating additional lots in the Low density residential zone may become impact assessable if the proposal does not comply with the relevant minimum lot size specified in the local plan or Table 9.4.4.3.2 of the Reconfiguring a lot code. Always confirm the current assessment pathway for the exact site and proposal." },
      { question: "Can a large block automatically be subdivided?", answer: "No. Area is only the first screen. A subdivision also needs workable frontage or rear-lot access, slope, stormwater discharge, sewer and water servicing, overlays, easements, earthworks, construction access and a path through operational works and plan sealing." },
      { question: "When should a civil engineer review a Sunshine Coast subdivision?", answer: "Before the layout is fixed and ideally before purchase conditions go unconditional. Early civil review can test access, driveway grades, stormwater, services, earthworks, retaining, operational works triggers and plan-sealing risks while the concept can still change cheaply." },
    ],
    sections: [
      {
        heading: "Quick answer",
        body: [
          "A Sunshine Coast subdivision is feasible only when the planning controls and the civil engineering both work. The useful first test is not simply whether the block is big enough. It is whether the site can create compliant lots with practical access, lawful stormwater discharge, services, manageable slope, acceptable overlays and a realistic path from approval to plan sealing.",
          "For Low density residential land, the Reconfiguring a lot code is a critical starting point: the planning scheme identifies minimum lot-size and dimension requirements, including 600m² where slope is 15% or less, 1,000m² where slope is over 15% and up to 20%, and 1,500m² where slope is over 20%. That is a starting benchmark, not a guarantee of approval or buildability."
        ],
      },
      {
        heading: "The real search intent behind subdivision Sunshine Coast",
        body: [
          "Most people searching for subdivision on the Sunshine Coast are not trying to read planning theory. They want to know whether a specific property can be split, what could stop it, how long it might take, who they need, and whether the numbers still work after civil works, infrastructure charges and plan sealing.",
          "That is why a good subdivision feasibility review should join the planner's question and the engineer's question. The planner asks whether the proposal fits the planning scheme and assessment pathway. The engineer asks whether the resulting lots can be accessed, drained, serviced, constructed and closed out without blowing up the budget."
        ],
      },
      {
        heading: "Start with the assessment pathway",
        body: [
          "Under the Sunshine Coast Planning Scheme 2014, reconfiguring a lot is assessed through the tables of assessment and the relevant benchmarks. The Reconfiguring a lot table identifies when subdivision is code assessable or impact assessable and points the applicant back to the applicable local plan code, zone code, Reconfiguring a lot code and prescribed other development codes.",
          "For Low density residential land, the pathway becomes more serious where additional lots are created and the proposal does not comply with the minimum lot size specified in the applicable local plan code or Table 9.4.4.3.2 of the Reconfiguring a lot code. In plain English: a non-compliant lot-size outcome can change the approval risk materially."
        ],
      },
      {
        heading: "Lot size is the first filter, not the decision",
        body: [
          "The Reconfiguring a lot code does more than state a headline area. Table 9.4.4.3.2 deals with minimum lot size, minimum square or rectangle dimensions and frontage. For Low density residential land, the extracted scheme data identifies 600m² for slope up to 15%, 1,000m² for slope over 15% and up to 20%, 1,500m² for slope over 20%, a 15m x 20m minimum square or rectangle, and 15m frontage.",
          "The trap is assuming that 1,200m² automatically means two 600m² lots. A site can fail because it is too narrow, too steep, constrained by an easement, affected by flood or overland flow, dependent on a rear access handle, missing a lawful discharge route, or unable to fit services and building envelopes without expensive retaining."
        ],
      },
      {
        heading: "Rear lots and battle-axe subdivisions need extra testing",
        body: [
          "Rear lots can be useful on deep Sunshine Coast blocks, but they are not a shortcut around proper design. The Reconfiguring a lot code sets expectations for rear lots, including that the lot area excluding the access strip should comply with the minimum lot-size requirements, that the access-strip gradient does not exceed 10%, that rear-lot arrangements do not prejudice adjoining land, and that access-handle impacts such as noise, light, dust and stormwater runoff are managed.",
          "The scheme material also identifies access strip requirements. For residential zones, the extracted table shows a minimum single access strip width of 5m, combined access strips with reciprocal easement of 6m, minimum driveway width of 3.5m, maximum driveway length of 40m, and sealed or concreted pavement. Those numbers matter because a battle-axe idea that looks simple in plan can fail on grade, width, stormwater, turning or neighbour impact."
        ],
      },
      {
        heading: "Stormwater can decide the yield",
        body: [
          "Stormwater is often the civil constraint that decides whether a Sunshine Coast subdivision works. Each new lot needs a lawful and constructible drainage strategy. A nearby pit, gully or watercourse is not enough. The design must check levels, overland flow, downstream route, easements, maintenance access, detention or treatment requirements and whether the outlet can actually be used.",
          "The ingested Sunshine Coast development works and code material repeatedly points to stormwater quality, quantity, infrastructure design and easements as subdivision issues. For feasibility, the right question is: can every proposed lot drain by a practical route that Council or the asset owner is likely to accept, without forcing a redesign of access, retaining, building pads or lot boundaries?"
        ],
      },
      {
        heading: "Services and infrastructure are not admin details",
        body: [
          "The Reconfiguring a lot code includes infrastructure and services outcomes. The ingested scheme material identifies that, in urban areas, new lots are expected to connect to reticulated water, reticulated sewer, electricity and, where available, high-speed telecommunications infrastructure. Stormwater management and sustainable design provisions also sit around those servicing questions.",
          "That means a subdivision feasibility check should look at more than planning maps. Confirm sewer and water location, depth and capacity; likely connection points; service clashes; whether extensions or easements are required; whether road frontage works are likely; and whether operational works will be needed before construction and plan sealing."
        ],
      },
      {
        heading: "Overlays and local plans can change the answer",
        body: [
          "A site may meet a broad zone-based lot-size benchmark and still carry a serious approval risk because of overlays or local plan provisions. Flood, overland flow, biodiversity, waterways and wetlands, bushfire hazard, steep land, landslide, coastal hazards, acid sulfate soils, heritage, transport corridors and local character provisions can all change design, reporting and conditions.",
          "This is where Sunshine Coast subdivision work becomes local. The useful first screen is Development.i, the site report, planning scheme mapping and nearby approvals. The useful professional review then asks how those mapped constraints interact with the actual layout: where vehicles enter, where water flows, where services run, where retaining sits and what conditions are likely to appear after approval."
        ],
      },
      {
        heading: "A practical Sunshine Coast subdivision feasibility process",
        body: [
          "1. Gather the property address, title, survey if available, easements, current services information and any purchase deadline. 2. Check zoning, local plan area, overlays, nearby approvals and whether the proposal is likely to be code or impact assessable. 3. Test lot size, frontage, slope, rear-lot access, driveway grades, sight distance and service corridors. 4. Confirm stormwater discharge, overland flow and any drainage easement requirement. 5. Estimate infrastructure charges, frontage works, operational works, survey, planning, civil design, construction and contingency. 6. Decide whether to proceed, redesign, negotiate the purchase price or walk away.",
          "The sequence matters. If you test civil issues after the planner has already sold the client on a yield, everyone is stuck defending a fragile concept. If civil, planning and survey input happen early, the project can move around the constraints before those constraints become sunk cost."
        ],
      },
      {
        heading: "Worked example: why two 600m² lots may still fail",
        body: [
          "Assume a 1,240m² Low density residential block appears to support two 600m² lots on area alone. The optimistic answer is yes. The professional answer is: check slope, frontage, stormwater, services, overlays, building envelopes and the access arrangement before trusting the yield.",
          "If the site has 15m frontage, a steep crossfall and the existing house sits across the best access route, the rear lot may need a long access handle, retaining beside the driveway and a stormwater easement to the rear. If the rear discharge route crosses private land or needs a pumped solution that Council is unlikely to accept, the lot yield may be technically possible but commercially poor. The feasibility decision changes from 'can we subdivide?' to 'can we subdivide without creating a bad lot and an expensive civil package?'"
        ],
      },
      {
        heading: "Common mistakes that cost money",
        body: [
          "The first mistake is using lot size as the whole feasibility test. The second is relying on a concept layout without survey levels. The third is assuming stormwater can be solved later. The fourth is ignoring the difference between a planning approval and completed, sealed lots. The fifth is forgetting that approval conditions can create operational works, bonding, inspections, as-constructed records and plan-sealing evidence.",
          "A smaller, cleaner subdivision can be worth more than a stretched layout that creates retaining, drainage easements, access conflicts, information requests and slow plan sealing. Margin is often protected by deleting the risky lot, not by forcing one more lot onto a drawing."
        ],
      },
      {
        heading: "When CivilCity should be involved",
        body: [
          "Bring in civil engineering when the site has slope, narrow frontage, rear access, possible flood or overland flow, uncertain stormwater discharge, easements, sewer through the site, retaining risk, road frontage works, or a purchase decision that depends on yield. Those are the points where a quick civil review can save a bad acquisition or sharpen the offer price.",
          "CivilCity can support Sunshine Coast subdivision projects from early feasibility through concept civil input, access and stormwater strategy, operational works documentation, RPEQ review where required, construction support, as-constructed records and plan sealing closeout. Send the address, proposed yield, title plan, survey if available and the decision you need to make."
        ],
      },
    ],
    sourceLinks: [
      { label: "Sunshine Coast Planning Scheme 2014", href: "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014" },
      { label: "Sunshine Coast Council Development.i site report", href: "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report" },
      { label: "Sunshine Coast Council development applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications" },
      { label: "Sunshine Coast Council operational work applications", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work" },
      { label: "Sunshine Coast Council plan sealing", href: "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing" },
      { label: "Queensland Development Assessment", href: "https://planning.dsdmip.qld.gov.au/" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const latestBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogImage(category: string, slug?: string) {
  const bySlug: Record<string, string> = {
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
