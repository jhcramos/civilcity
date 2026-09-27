export type BlogResource = { label: string; href: string };
export type BlogSection = {
  heading: string;
  body: string | string[];
  list?: string[];
  ordered?: boolean;
  links?: BlogResource[];
  table?: { columns: string[]; rows: string[][] };
};
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  category: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
  sections: BlogSection[];
  resources?: BlogResource[];
  sourceLinks?: BlogResource[];
  serviceSlug: string;
  cta: { label: string; body: string };
  relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    "slug": "development-application-costs-sunshine-coast-small-developers",
    "title": "Development application costs on the Sunshine Coast: what small developers should budget for",
    "description": "A practical Sunshine Coast development cost checklist covering application fees, consultants, civil works, infrastructure charges and contingency.",
    "date": "2026-09-24",
    "category": "Development feasibility",
    "keywords": [
      "development application costs Sunshine Coast",
      "development fees Sunshine Coast",
      "development feasibility costs Sunshine Coast",
      "civil engineering costs development application",
      "small developer project costs Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "How much does a Sunshine Coast development application cost?",
        "answer": "There is no single reliable number. The council application fee depends on the application type and current fee schedule, while the total project cost also includes planning, survey, civil engineering, specialist reports, infrastructure charges, construction and possible conditions. Confirm current statutory fees with Council before lodging."
      },
      {
        "question": "Are civil engineering fees part of the council application fee?",
        "answer": "No. Civil engineering is a separate consultant cost. It may cover feasibility, concept design, stormwater, access, earthworks, servicing, operational works documentation, certification or construction support depending on the project stage."
      },
      {
        "question": "What cost is most often missed by small developers?",
        "answer": "The commonly missed items are not always the application fee. Service connections or upgrades, frontage works, retaining, stormwater discharge, operational works, bonds, plan sealing closeout and redesign after an information request can have a greater effect on feasibility."
      },
      {
        "question": "Should I get a civil estimate before buying the site?",
        "answer": "Yes, when the project depends on a particular yield or access arrangement. A proportionate civil feasibility review can identify cost drivers before the purchase becomes unconditional."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "A Sunshine Coast development application has more than one cost. The council fee is only the statutory starting point; the real feasibility allowance may also include planning, survey, civil engineering, specialist reports, infrastructure charges, service connections, construction, bonds and contingency.",
          "For a small developer, the useful question is not ‘what is the application fee?’ It is ‘what must I spend to get from this site to an approvable, constructible and closeable project?’ That answer depends on the proposal, site constraints and approval pathway."
        ]
      },
      {
        "heading": "Build the budget in layers",
        "body": [
          "Start with the current Council application requirements and fee information for the exact application type. A Reconfiguration of a Lot, Material Change of Use, operational works application or other pathway can involve different documentation and statutory charges. Do not copy a fee from an old project or a different assessment pathway.",
          "Then separate consultant costs from delivery costs. Planning, cadastral survey, civil engineering, geotechnical, traffic, bushfire, environmental, hydraulic or other specialist advice may be triggered by the site. After approval, detailed design, construction, inspections, as-constructed records and plan sealing can create a second cost phase rather than one single consultant invoice."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "A practical cost map",
        "body": [],
        "table": {
          "columns": [
            "Cost group",
            "What to check",
            "Why it can move"
          ],
          "rows": [
            [
              "Statutory and application",
              "Current Council fee, referral or assessment requirements",
              "Application type and fee schedule"
            ],
            [
              "Consultants",
              "Planner, surveyor, civil and triggered specialists",
              "Site constraints and evidence required"
            ],
            [
              "Civil delivery",
              "Access, drainage, earthworks, retaining, services and frontage",
              "Levels, discharge, existing infrastructure and conditions"
            ],
            [
              "Contributions and closeout",
              "Infrastructure charges, bonds, inspections and plan sealing",
              "Approval conditions and final constructed outcome"
            ],
            [
              "Risk allowance",
              "Redesign, information requests, escalation and holding costs",
              "Unknown site conditions and programme delay"
            ]
          ]
        }
      },
      {
        "heading": "Sunshine Coast civil costs that change the answer",
        "body": [
          "Coastal infill and established urban sites can have tight frontages, older services, constrained drainage and little room for construction staging. Buderim and hinterland sites may add slope, retaining, driveway grades and difficult stormwater paths. Low-lying sites may need flood and overland-flow testing rather than relying on a desktop assumption. A site that looks inexpensive to acquire can be expensive to make serviceable.",
          "The civil review should test the proposed yield against access, sight distance, driveway grades, turning, stormwater and lawful discharge, sewer and water, easements, cut and fill, retaining, erosion controls and likely frontage works. These items can affect both the consultant budget and the amount of physical work the project must fund."
        ]
      },
      {
        "heading": "A decision process before you commit",
        "body": [],
        "list": [
          "Define the outcome: extra lot, townhouse, secondary dwelling, commercial use or another development.",
          "Obtain the address, title, survey if available and proposed concept.",
          "Check Council's Development.i information, Planning Scheme mapping and nearby approvals.",
          "Ask the planner and civil engineer to list known, likely and unknown costs.",
          "Price triggered specialist reports and service authority investigations.",
          "Add construction, charges, bonds, closeout and a realistic contingency.",
          "Re-run the feasibility model after the concept and approval conditions change."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that cost more than the fee",
        "body": [
          "The first mistake is treating the statutory fee as the project budget. The second is choosing the cheapest consultant package without checking what deliverables are excluded. A low initial quote that excludes stormwater calculations, condition responses, operational works or construction support may simply move the cost later.",
          "Another mistake is designing for a best-case point of discharge or service connection without confirming it. If that assumption fails, the project may need an easement, pump, upgrade, redesign or a different layout. Finally, allow for time: holding costs and lost contractor windows can outweigh the original application fee."
        ]
      },
      {
        "heading": "Compare consultant proposals on the same deliverables",
        "body": "A price comparison is useful only when the scope is comparable. One civil proposal may cover a planning-stage report; another may include detailed drawings, authority responses and construction inspections. Ask for stage boundaries, assumptions, revision allowances and exclusions. Keep a separate allowance for authority charges and contractor work. Where a critical input is missing, request an investigation scope before expecting a reliable construction allowance. Record the date and basis of each cost estimate so the feasibility model can be updated when the concept changes.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Planning-stage advice",
              "Concept testing and supporting report.",
              "Does it resolve the feasibility question you are paying to answer?"
            ],
            [
              "Detailed design",
              "Specified drawings, calculations and authority submissions.",
              "Are disciplines, revisions and response allowances clear?"
            ],
            [
              "Construction support",
              "Inspections, queries, changes and closeout evidence.",
              "Is the engineer’s role funded beyond design issue?"
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development infrastructure charges on the Sunshine Coast: what to allow for",
            "href": "/insights/development-infrastructure-charges-on-the-sunshine-coast-what-to-allow-for"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Send the same brief and information to consultants being compared. Separate deliverables included in the base fee from optional or provisional services.",
          "Ask what would trigger a fee variation: changed yield, new conditions, missing survey, additional authority requests or construction changes.",
          "Reconcile design assumptions with the cost plan at each approval stage. A provisional drainage route should not be priced as a confirmed solution."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Involve CivilCity before purchase or before the concept is fixed when the project depends on yield, constrained access, slope, flood or overland flow, stormwater discharge, existing services, retaining or frontage works. The first engagement can be a focused feasibility review rather than a full construction package.",
          "CivilCity helps Sunshine Coast developers turn a broad cost question into a site-specific risk list: access and levels, stormwater, servicing, earthworks, retaining, operational works triggers, construction support and plan-sealing closeout. Send the site address, proposed outcome, available survey and purchase or lodgement deadline for a practical first review."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Share the intended outcome and the assumptions you need to test before committing."
    },
    "relatedSlugs": [
      "development-infrastructure-charges-on-the-sunshine-coast-what-to-allow-for",
      "development-site-due-diligence-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council development application forms",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Queensland development infrastructure charges",
        "href": "https://www.planning.qld.gov.au/planning-framework/infrastructure-planning/infrastructure-charges"
      }
    ]
  },
  {
    "slug": "can-i-subdivide-my-land-on-the-sunshine-coast",
    "title": "Can I subdivide my land on the Sunshine Coast?",
    "description": "A practical Sunshine Coast subdivision guide for owners and small developers checking whether a property is worth investigating.",
    "date": "2026-06-24",
    "category": "Subdivision",
    "keywords": [
      "subdivide land Sunshine Coast",
      "subdivision Sunshine Coast",
      "can I subdivide my land Sunshine Coast",
      "subdivision feasibility Sunshine Coast",
      "civil engineer subdivision Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Is subdivision always possible if the block is large enough?",
        "answer": "No. Lot size helps, but subdivision also depends on planning controls, overlays, access, stormwater, slope, services, easements and whether the new lots can be practically constructed and serviced."
      },
      {
        "question": "What should I check before paying for a full subdivision design?",
        "answer": "Start with zoning, minimum lot outcomes, overlays, title constraints, road frontage, driveway access, stormwater discharge, sewer and water availability, and likely earthworks or retaining needs."
      },
      {
        "question": "When should I speak with a civil engineer?",
        "answer": "Early. A short civil feasibility review can identify access, stormwater and servicing risks before a planner, surveyor or architect invests time in a layout that may be hard to approve or build."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "You may be able to subdivide land on the Sunshine Coast, but the real answer depends on more than block size. Sunshine Coast Council planning controls, overlays, lot layout, access, stormwater, sewer, water and earthworks all shape whether a subdivision is practical.",
          "The best first step is not a full design. It is a feasibility check that tests the planning pathway and the civil engineering constraints together."
        ]
      },
      {
        "heading": "What council information tells you",
        "body": [
          "Sunshine Coast Council's Development.i site report can show general town planning details for a property, including planning scheme zoning, overlays, application information, mapping links, water and sewer information links, and flooding overlay information. That makes it a useful first screen for owners, purchasers and consultants.",
          "The Sunshine Coast Planning Scheme 2014 is the current local planning framework and Council encourages users to check for amendments because the scheme changes over time. Treat the report and mapping as a starting point, then confirm the specific development pathway before spending heavily."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil issues that decide feasibility",
        "body": [
          "A subdivision that looks good on a sketch can fail commercially when civil constraints are tested. Common issues include a narrow frontage, a steep driveway, no practical lawful point of discharge, existing sewer through the middle of the site, flood or overland flow constraints, retaining walls, service clashes, and access that does not suit waste or emergency vehicle movement.",
          "For small developers, these items matter because they affect yield and margin. One extra retaining wall, service relocation or stormwater easement can shift a site from attractive to marginal."
        ]
      },
      {
        "heading": "A practical first-pass checklist",
        "body": [
          "Check the current zoning and local plan area. Check overlays, especially flood, environmental, bushfire, coastal and steep land constraints. Review road frontage and likely driveway position. Look for easements, sewer, water, stormwater and drainage infrastructure. Test where stormwater can discharge. Look at slope and likely retaining. Compare nearby approvals through Development.i.",
          "If those checks do not reveal a clear blocker, the next step is usually a concept subdivision layout supported by civil input, planning advice and survey information."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "The most common mistake is assuming that a big block equals an easy subdivision. The second is testing planning controls but leaving stormwater, access and services until later. The third is relying on a simple aerial image without checking title, mapping and infrastructure information.",
          "Good early advice does not guarantee approval. It does help you decide whether the site deserves more money, more time or a decision not to proceed."
        ]
      },
      {
        "heading": "Compare subdivision options before selecting a yield",
        "body": "Illustrative scenario: an owner wants to keep an existing house and create a rear lot. The sketch fits the nominal lot areas, but the house blocks the most direct access route and the rear land is below the street. Compare retaining the house, removing it and changing the lot arrangement before paying for detailed drawings. Each option needs a drainage route and a serviceable building area. A feasibility report should explain which option remains credible, what evidence is missing and which costs could change that recommendation. A favourable desktop screen is permission to investigate further, not a promise of approval.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Retain the house",
              "Survey building position, driveway levels and service connections.",
              "Can the house remain usable while both lots receive compliant access and services?"
            ],
            [
              "Change the lot arrangement",
              "Sketch the access, drainage corridor and building envelopes together.",
              "Does the revised arrangement reduce expensive retaining or third-party dependence?"
            ],
            [
              "Stop or defer",
              "Identify an unresolved outlet, land right or critical access constraint.",
              "Resolve that dependency before treating the extra lot as a saleable outcome."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Ask for a marked-up constraints plan, not only a statement that the block is large enough. Show existing buildings and the proposed boundaries on one base.",
          "Record whether the concept relies on neighbour consent, a service extension or a change to the existing house. Assign an owner to each investigation.",
          "Compare options using total delivery cost, including works, charges, survey, consultant fees and closeout, rather than comparing the extra lot’s sale price alone."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review the property, identify the early civil risks, coordinate with your planner or surveyor, and help shape a subdivision concept around access, stormwater, services and buildability.",
          "If you are buying, selling or testing a Sunshine Coast property, send the address, title plan if available, and your rough development idea. The useful first question is simple: what could make this site hard or expensive?"
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "what-consultants-do-you-need-for-a-sunshine-coast-subdivision",
      "how-long-does-a-sunshine-coast-subdivision-approval-take"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "subdivision-feasibility-checklist-for-sunshine-coast-property-buyers",
    "title": "Subdivision feasibility checklist for Sunshine Coast property buyers",
    "description": "A buyer-focused Sunshine Coast subdivision feasibility checklist covering planning, overlays, access, stormwater, services and hidden civil costs.",
    "date": "2026-06-24",
    "category": "Due diligence",
    "keywords": [
      "subdivision feasibility Sunshine Coast",
      "property due diligence Sunshine Coast",
      "development site due diligence Sunshine Coast",
      "subdivision checklist Sunshine Coast",
      "civil due diligence Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Why do buyers need a subdivision feasibility checklist?",
        "answer": "Because a property can look developable in a listing but carry hidden constraints in access, stormwater, easements, services, overlays or earthworks that affect cost, yield and approval risk."
      },
      {
        "question": "Can this checklist replace town planning advice?",
        "answer": "No. It helps you ask better early questions. A subdivision should still be checked by the right consultant team, including planning, survey and civil engineering input."
      },
      {
        "question": "What is the biggest hidden civil risk?",
        "answer": "Stormwater discharge and access are often the big ones. If water cannot leave the site lawfully, or vehicles cannot enter and exit safely, the layout may need a major rethink."
      }
    ],
    "sections": [
      {
        "heading": "Use the checklist before you fall in love with the site",
        "body": [
          "Subdivision feasibility is easiest to assess before emotion, sunk cost and purchase pressure take over. The goal is not to prove the site works. The goal is to find the constraints early enough that you can price them properly or walk away.",
          "On the Sunshine Coast, the first screen should combine planning controls with civil engineering reality: zoning and overlays on one side; access, stormwater, services and levels on the other."
        ]
      },
      {
        "heading": "Planning and mapping checks",
        "body": [
          "Start with Sunshine Coast Council's Development.i site report and current planning scheme information. The report can help surface zoning, overlay information, applications and links to mapping layers. Nearby approvals in Development.i can also show how similar sites have been treated.",
          "Look for minimum lot size expectations, local plan provisions, overlays, mapped infrastructure and any obvious history on or near the property. If the site has multiple overlays, do not treat them separately. Constraint stacking is often where feasibility gets tight."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil checks that change the numbers",
        "body": [
          "Review the frontage, likely driveway location, sight distance, slope from road to building area, stormwater discharge, sewer and water availability, existing easements and any apparent need for retaining walls. These items affect both approval risk and construction budget.",
          "For rear lots and battle-axe concepts, access width, driveway grade, service corridors and drainage paths deserve extra attention. A long access handle can consume land area while also concentrating cost."
        ]
      },
      {
        "heading": "Documents to collect early",
        "body": [
          "Useful early documents include the address, lot and plan details, title search, registered plan, any easement documents, survey if available, service records, previous approvals, flood or overlay mapping, and a rough sketch of the intended outcome.",
          "You do not need a perfect design to start a feasibility discussion. You need enough information to test the most expensive assumptions."
        ]
      },
      {
        "heading": "Red flags for buyers",
        "body": [
          "Be cautious with steep blocks, land below road level, sites without obvious drainage outlets, lots crossed by services or easements, narrow frontages, difficult intersections, flood overlay areas, and sites where nearby approvals show heavy conditions.",
          "None of these issues automatically kill a project, but each can shift the negotiation. A site with known constraints may still work if the purchase price and development strategy reflect the risk."
        ]
      },
      {
        "heading": "Turn the checklist into a purchase decision register",
        "body": "A useful buyer’s checklist separates a missing document from a design problem. If a drainage easement has not been obtained, the status is unknown, not acceptable. If the route exists but the levels have not been surveyed, feasibility is still conditional. For a rear-lot purchase, for example, ask the engineer to test the outlet and the surveyor to plot the rights before relying on the proposed yield. Keep the technical decision register separate from the purchase contract; your solicitor should advise how unresolved investigations affect contractual deadlines and protections.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Confirmed",
              "Document and date supporting the conclusion.",
              "Carry the verified assumption into the concept."
            ],
            [
              "Conditional",
              "Specific evidence or agreement still needed.",
              "Price the investigation and identify a decision deadline."
            ],
            [
              "Unresolved blocker",
              "No demonstrated drainage, access or service solution.",
              "Compare an alternative concept before committing further funds."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development site due diligence Sunshine Coast: civil checks before you buy",
            "href": "/insights/development-site-due-diligence-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "For each finding, record the lot and plan, source document, consultant responsible and consequence for yield, cost or timing. Avoid an unexplained traffic-light score.",
          "Ask which conclusions are based only on public mapping and which were checked using survey or authority information. A desktop review cannot locate buried services.",
          "Finish with an explicit recommendation: proceed to the next investigation, change the layout, revise the feasibility allowance or do not rely on the assumed yield."
        ]
      },
      {
        "heading": "How CivilCity can support due diligence",
        "body": [
          "CivilCity can provide early engineering input for subdivision feasibility, including access, stormwater, servicing, earthworks and constructability observations. The aim is to give buyers a clearer risk picture before they commit.",
          "For small and medium developers, this can be the difference between buying a site with eyes open and inheriting a problem that was visible from the start."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Send the address, intended outcome and decision deadline for a focused engineering scope."
    },
    "relatedSlugs": [
      "development-site-due-diligence-sunshine-coast",
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "how-to-read-a-sunshine-coast-council-site-report"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "operational-works-approval-sunshine-coast-a-developers-guide",
    "title": "Operational works approval Sunshine Coast: a developer's guide",
    "description": "A developer-focused guide to Sunshine Coast operational works approval, civil drawings, conditions, stormwater, access and construction readiness.",
    "date": "2026-06-24",
    "category": "Approvals",
    "keywords": [
      "operational works Sunshine Coast",
      "operational works approval Sunshine Coast",
      "operational works drawings Sunshine Coast",
      "civil operational works engineer",
      "subdivision operational works Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is operational work?",
        "answer": "Sunshine Coast Council describes operational work as the construction of infrastructure that affects a property or its use, commonly associated with material change of use or reconfiguration of a lot approvals."
      },
      {
        "question": "When do developers usually need operational works approval?",
        "answer": "It is commonly needed after development approval where conditions require detailed civil works such as access, earthworks, stormwater, roadworks, frontage works or development infrastructure."
      },
      {
        "question": "Can construction start before operational works is approved?",
        "answer": "Do not assume so. If approval conditions require operational works or other clearances, those steps may need to be completed before relevant construction starts."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Operational works is the step where planning approval conditions become detailed civil engineering documentation. For Sunshine Coast developers, it is often the bridge between development approval and construction.",
          "Council notes that operational work is normally work associated with a material change of use or reconfiguration of a lot development approval. In practical terms, this is where access, stormwater, earthworks, frontage works and infrastructure details need to become buildable drawings."
        ]
      },
      {
        "heading": "Why operational works matters commercially",
        "body": [
          "A development approval can feel like the finish line, but it often only starts the next technical stage. Conditions may require drawings, calculations, certifications, clearances, prestart processes, inspections and as-constructed information.",
          "If the operational works package is under-scoped, the project can lose time through information requests, consultant mismatches, late stormwater changes or construction details that were never properly resolved."
        ],
        "links": [
          {
            "label": "Council operational work requirements",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
          }
        ]
      },
      {
        "heading": "What the package usually needs to resolve",
        "body": [
          "The scope depends on the approval, but common civil items include road frontage works, driveway access, car parking levels, stormwater drainage, detention or quality treatment, earthworks, retaining interfaces, service coordination, erosion and sediment control, construction notes and condition responses.",
          "For subdivisions, the package also needs to support the pathway toward construction completion, as-constructed records and plan sealing."
        ]
      },
      {
        "heading": "Where delays usually start",
        "body": [
          "Delays often start when the planning layout, survey, civil design, landscape plan and architectural drawings do not match. Another common problem is treating stormwater as a late calculation rather than a site-shaping design issue.",
          "Operational works should be scoped from the approval conditions, but it should also be tested against buildability. Drawings that pass assessment but leave contractors guessing can still hurt the programme."
        ]
      },
      {
        "heading": "Developer checklist before lodging",
        "body": [
          "Confirm the current approval conditions. Gather survey, approved plans, service information and relevant reports. Confirm whether access, stormwater discharge, levels and services have changed since approval. Check whether external authority inputs are needed. Make sure drawings across disciplines tell the same story.",
          "Before lodgement, ask whether a contractor could price and build the package with reasonable confidence. If the answer is no, the documentation likely needs more work."
        ]
      },
      {
        "heading": "Keep approval, permission to start and closeout separate",
        "body": "An operational works approval is a development approval for the specified works. It is distinct from the material change of use or reconfiguration approval and from construction readiness. A contractor also needs the applicable prestart arrangements, permits, accepted drawings and inspection requirements. For water and sewer, confirm the Unitywater pathway separately. A Council decision should not be assumed to authorise a network connection. This guide concerns those handovers; the application-package guide linked below deals with what to brief and lodge.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Approval received",
              "Read conditions against the accepted drawing revisions.",
              "Identify changes needed before construction."
            ],
            [
              "Ready to commence",
              "Confirm required permits, prestart matters and inspection bookings.",
              "Give the contractor a controlled construction set."
            ],
            [
              "Ready for closeout",
              "Reconcile inspections, tests, variations and as-constructed survey.",
              "Demonstrate completion of the relevant conditions."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore operational works applications",
            "href": "/services/operational-works-applications"
          },
          {
            "label": "When does a Sunshine Coast subdivision need operational works?",
            "href": "/insights/when-does-a-subdivision-need-operational-works"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Nominate who will answer contractor queries and who can approve a design change; an informal site conversation is not a controlled revision.",
          "Set hold points before buried drainage, pavement layers or other concealed work becomes inaccessible. Agree the evidence the engineer and authority will require.",
          "Keep a condition register with deliverable, responsible party and acceptance status. A lodged document and an accepted document are different milestones."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity prepares and coordinates civil engineering documentation for operational works, with attention to conditions, stormwater, access, services, earthworks and construction readiness.",
          "The aim is not just a lodged package. The aim is a package that helps the development move cleanly from approval to construction and then toward closeout."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "operational-works-applications",
    "cta": {
      "label": "Operational works applications",
      "body": "Send the decision notice, approved plans and survey to define the engineering package."
    },
    "relatedSlugs": [
      "when-does-a-subdivision-need-operational-works",
      "operational-works-application-sunshine-coast",
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Council operational work requirements",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Development application forms and checklists",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Fees and charges",
        "href": "https://www.sunshinecoast.qld.gov.au/pay-and-apply/fees-and-charges"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      }
    ]
  },
  {
    "slug": "stormwater-design-on-the-sunshine-coast-what-developers-need-to-know",
    "title": "Stormwater design on the Sunshine Coast: what developers need to know",
    "description": "A practical Sunshine Coast stormwater design guide for developers covering lawful discharge, overland flow, detention, flooding, levels and approval risk.",
    "date": "2026-06-24",
    "category": "Stormwater",
    "keywords": [
      "stormwater design Sunshine Coast",
      "stormwater drainage Sunshine Coast",
      "stormwater engineer Sunshine Coast",
      "lawful point of discharge Sunshine Coast",
      "development stormwater design Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Should stormwater be checked during feasibility?",
        "answer": "Yes. Stormwater can affect yield, levels, driveway design, building placement, easements, detention requirements and whether a site is commercially workable."
      },
      {
        "question": "What is a lawful point of discharge?",
        "answer": "It is the practical and legal point where stormwater from the site can discharge. If it is unclear, the whole site strategy may need more investigation."
      },
      {
        "question": "Does every development need stormwater detention?",
        "answer": "Not necessarily. Requirements depend on the site, catchment, downstream conditions, proposed development and applicable approval or design requirements."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Stormwater design is one of the biggest feasibility issues for Sunshine Coast development sites. It affects where water goes, how levels are set, whether detention is needed, how driveways grade, and whether neighbouring land or downstream infrastructure may be affected.",
          "For developers, stormwater should be checked early, not after the architectural layout is finished."
        ]
      },
      {
        "heading": "Why stormwater shapes the site",
        "body": [
          "Stormwater is not just pipe sizing. It includes lawful discharge, overland flow, flood constraints, detention, water quality treatment, roofwater, surface grading, pits, pipes, easements and downstream impacts.",
          "A project can lose yield if stormwater needs a drainage easement, detention tank, basin, level change or larger service corridor than expected."
        ],
        "links": [
          {
            "label": "Council flooding and stormwater guidance and updates",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
          }
        ]
      },
      {
        "heading": "Local Sunshine Coast context",
        "body": [
          "Sunshine Coast sites can include steep land, coastal conditions, flood overlays, older infill drainage, sensitive downstream environments and constrained road frontages. Council mapping and Development.i site report information can help identify flooding overlays, general property information and links to relevant mapping.",
          "The key is to confirm what applies to the actual site, not assume that a nearby project had the same drainage answer."
        ]
      },
      {
        "heading": "Questions to answer early",
        "body": [
          "Where can stormwater lawfully discharge? Does water currently flow through or across the site? Is there an overland flow path? Are there existing drainage easements or pits? Does the road frontage have usable drainage infrastructure? Will levels allow gravity drainage? Could detention or treatment be required?",
          "If these questions are unanswered, the layout is still carrying stormwater risk."
        ]
      },
      {
        "heading": "Common developer mistakes",
        "body": [
          "The common mistake is leaving stormwater until the end and expecting it to fit around a fixed layout. Another is assuming the lowest corner of the site is a lawful outlet. A third is missing the connection between driveway grade, building levels and drainage falls.",
          "Good stormwater design starts with levels and discharge, then coordinates with access, services and buildability."
        ]
      },
      {
        "heading": "Compare drainage options before allocating building space",
        "body": "For an infill project, the lowest point on the land may be at the rear while the public drainage is in the street. That can affect the whole development layout. Before choosing a tank or pipe size, establish the receiving system, connection levels and rights along the route. Then test ordinary drainage and the route for larger flows or system blockage. Council’s flooding and stormwater guidance includes updates and supporting material; the design basis should identify the applicable version rather than reuse calculations from an unrelated site.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Discharge route",
              "Outlet location, level, rights and downstream conditions.",
              "Confirm the strategy can physically and lawfully work."
            ],
            [
              "Storage and treatment",
              "Space, levels, access and maintenance responsibilities.",
              "Reserve the footprint before fixing buildings and parking."
            ],
            [
              "Exceedance flow",
              "Surface route if capacity is exceeded or an inlet blocks.",
              "Check buildings, boundaries and neighbouring land."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore stormwater and drainage design",
            "href": "/services/stormwater-drainage-design"
          },
          {
            "label": "Stormwater engineer Sunshine Coast: when development needs drainage advice",
            "href": "/insights/stormwater-engineer-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide survey, concept layout and available drainage records. Identify changes in roof, paving and catchment areas, including external flows entering the property.",
          "Ask the engineer to explain the assumptions controlling the solution, such as receiving levels or an unverified existing pipe. Resolve critical assumptions early.",
          "Include maintenance access and ownership in option comparisons. A compact device can have operating obligations that should be understood before selection."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review stormwater feasibility, prepare drainage concepts, support development applications and develop detailed stormwater design for operational works or construction.",
          "For early advice, send the site address, survey if available, proposed layout, any known flood or drainage constraints and the development outcome you are testing."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "stormwater-drainage-design",
    "cta": {
      "label": "Stormwater and drainage design",
      "body": "Send the survey, concept and relevant conditions so the drainage question can be scoped."
    },
    "relatedSlugs": [
      "stormwater-engineer-sunshine-coast",
      "lawful-point-of-discharge-why-it-can-make-or-break-a-development",
      "stormwater-management-plan-sunshine-coast-when-development-needs-one"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Operational work",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Council flooding and stormwater guidance and updates",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
      }
    ]
  },
  {
    "slug": "lawful-point-of-discharge-why-it-can-make-or-break-a-development",
    "title": "Lawful point of discharge: why it can make or break a development",
    "description": "A practical guide to lawful point of discharge on Sunshine Coast development sites and why it can affect feasibility, stormwater design and approvals.",
    "date": "2026-06-24",
    "category": "Stormwater",
    "keywords": [
      "lawful point of discharge Sunshine Coast",
      "stormwater discharge Sunshine Coast",
      "development stormwater drainage",
      "stormwater easement Sunshine Coast",
      "civil engineer stormwater Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is a lawful point of discharge?",
        "answer": "It is the point where stormwater from a site can reasonably and lawfully discharge without causing unacceptable impacts. The answer depends on site levels, downstream infrastructure, easements and council requirements."
      },
      {
        "question": "Why can lawful discharge affect feasibility?",
        "answer": "If water cannot reach an accepted outlet by gravity, the project may need detention, easements, redesign, level changes or more expensive drainage works."
      },
      {
        "question": "Should it be checked before buying a site?",
        "answer": "Yes. Lawful discharge is one of the first civil engineering checks for subdivision, townhouse and infill development sites."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Lawful point of discharge is one of the quiet issues that can make or break a development site. If stormwater cannot leave the property in a practical and accepted way, the layout, levels, cost and approval pathway may all change.",
          "For Sunshine Coast developers, lawful discharge should be tested during feasibility, not after the design is finished."
        ]
      },
      {
        "heading": "Why it matters",
        "body": [
          "Every development changes runoff in some way. Roofs, driveways, parking areas and paved surfaces can increase flow and concentrate water. The project team needs to understand where that water goes and whether the downstream path is suitable.",
          "A site may appear easy until levels show that water cannot reach the street, pipe network, easement or drainage reserve without major works."
        ],
        "links": [
          {
            "label": "Council flooding and stormwater guidance and updates",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
          }
        ]
      },
      {
        "heading": "What to check early",
        "body": [
          "Check site survey, road levels, existing pits and pipes, overland flow paths, flood mapping, easements, downstream land, roofwater routes and whether gravity drainage is possible. Council mapping and site report information can help identify relevant property and overlay information, but survey and engineering review are still important.",
          "On sloping land, the lowest point of the site is not automatically an acceptable outlet. On infill lots, the most convenient direction may be through another property, which raises easement and consent questions."
        ]
      },
      {
        "heading": "Common warning signs",
        "body": [
          "Be careful with sites below road level, rear lots with no clear drainage corridor, older areas with limited pipe infrastructure, lots crossed by overland flow, and properties where the proposed building area sits between water and its natural outlet.",
          "If the drainage route is uncertain, do not treat stormwater as a late design item. It may need to shape the entire layout."
        ]
      },
      {
        "heading": "Four questions to answer before relying on an outlet",
        "body": "Water flowing towards a neighbour today does not establish a right to build a new drainage connection across that property. Equally, a pipe visible near the boundary does not prove that the proposed development can connect to it. The strategy needs engineering evidence, any required land rights and the relevant authority acceptance. If the only apparent solution relies on another owner, treat that as an acquisition risk until investigated. Detention can change the runoff response, but does not by itself create a lawful route for the water.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Can water reach it?",
              "Survey surface and pipe levels along the proposed route.",
              "Test gravity drainage and major flow paths."
            ],
            [
              "Can it receive the discharge?",
              "Investigate the receiving asset and downstream constraints.",
              "Confirm the connection and assessment requirements."
            ],
            [
              "Can you use and maintain it?",
              "Check ownership, easements and permissions.",
              "Resolve the rights before relying on the route."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore stormwater and drainage design",
            "href": "/services/stormwater-drainage-design"
          },
          {
            "label": "Stormwater engineer Sunshine Coast: when development needs drainage advice",
            "href": "/insights/stormwater-engineer-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Ask for an outlet options sketch showing routes across public and private land. Mark every dependency on consent or further investigation.",
          "Compare an alternative layout if the preferred outlet is unavailable. Pumping should not be assumed acceptable simply because gravity drainage is difficult.",
          "Carry the chosen route into the survey, civil drawings and legal documents. Recheck the strategy if boundary locations or finished levels change."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review lawful discharge options, identify drainage constraints, advise on early feasibility and coordinate stormwater design with access, levels and subdivision layout.",
          "The goal is to know whether the site has a workable drainage story before the project commits to a layout or purchase price."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "stormwater-drainage-design",
    "cta": {
      "label": "Stormwater and drainage design",
      "body": "Send the survey, concept and relevant conditions so the drainage question can be scoped."
    },
    "relatedSlugs": [
      "stormwater-engineer-sunshine-coast",
      "stormwater-management-plan-sunshine-coast-when-development-needs-one",
      "flood-overlays-and-development-risk-on-the-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Operational work",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Council flooding and stormwater guidance and updates",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
      }
    ]
  },
  {
    "slug": "plan-sealing-sunshine-coast-what-developers-need-to-know",
    "title": "Plan sealing Sunshine Coast: what developers need to know",
    "description": "A Sunshine Coast developer guide to plan sealing, subdivision closeout, survey plans, easements, covenants, clearances and civil works documentation.",
    "date": "2026-06-24",
    "category": "Approvals",
    "keywords": [
      "plan sealing Sunshine Coast",
      "subdivision plan sealing Sunshine Coast",
      "survey plan sealing Sunshine Coast",
      "subdivision closeout Sunshine Coast",
      "civil works plan sealing"
    ],
    "faqs": [
      {
        "question": "What is plan sealing?",
        "answer": "Sunshine Coast Council describes plan sealing as the process of lodging a survey plan with council for approval to finalise a subdivision or multiple dwelling development."
      },
      {
        "question": "Why do developers need a sealed plan?",
        "answer": "Council notes that a sealed plan is needed to create new land titles, easements and/or covenants, and to transfer land to council for purposes such as drainage reserves and parks."
      },
      {
        "question": "Why does plan sealing get delayed?",
        "answer": "Common causes include unresolved approval conditions, missing clearances, incomplete as-constructed information, civil works defects, bonds, easement issues or consultant documentation gaps."
      }
    ],
    "sections": [
      {
        "heading": "Plan sealing and title registration are separate steps",
        "body": [
          "Plan sealing is Council approval of a survey plan after the relevant requirements have been addressed. For a subdivision, it brings together the approved layout, conditions, survey and evidence of completed or otherwise accepted works. It does not itself create the new titles.",
          "The approved plan and associated documents must then be lodged with Titles Queensland for registration. Build both stages into the programme; a sealed plan should not be treated as confirmation that registration or settlement has occurred."
        ]
      },
      {
        "heading": "Work backwards from the registration package",
        "body": [
          "Ask the surveyor and conveyancing solicitor to identify the plan, easements and other instruments needed for the intended titles. Ask the project manager to map the conditions and clearances required for Council approval of that plan. The engineering team supplies evidence for the civil items within its scope.",
          "Where an early sealing or bonding arrangement may be available, confirm eligibility and acceptance with Council. Do not assume unfinished works can be bonded, or that a bond removes the obligation to complete and document those works."
        ],
        "links": [
          {
            "label": "Council operational work requirements",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
          }
        ]
      },
      {
        "heading": "Civil items that affect sealing",
        "body": [
          "Civil works can affect plan sealing through completed infrastructure, inspections, as-constructed drawings, contributed asset acceptance, stormwater, access, roadworks, easements, bonding and condition compliance.",
          "If a condition required operational works, construction evidence or clearance from another party, those items need to be managed before the sealed plan can move smoothly."
        ]
      },
      {
        "heading": "How to reduce delays",
        "body": [
          "Create a plan sealing checklist early. Track approval conditions, construction hold points, inspections, defects, as-constructed records, survey plan requirements, easement documents and any required council or authority clearances.",
          "The best time to solve plan sealing issues is during design and construction, not after contractors have left site."
        ]
      },
      {
        "heading": "Build a closeout evidence register before construction",
        "body": "Illustrative scenario: a two-lot subdivision reaches practical completion but the drainage contractor has not supplied final pipe levels and a service clearance is outstanding. The physical works may appear complete, yet the plan-sealing submission cannot demonstrate every relevant requirement. Recovering evidence after backfill can take additional survey, testing or investigation. Work backwards from the intended submission date and arrange inspections and survey pickup while the work is accessible. Use a register to distinguish contractor completion, engineering verification, authority acceptance and title registration.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Civil works",
              "Accepted design, inspection and test evidence, as-constructed information.",
              "Engineer and contractor reconcile actual works with the approved scope."
            ],
            [
              "Survey and rights",
              "Survey plan and required easement or other instruments.",
              "Surveyor and solicitor coordinate the legal and spatial documents."
            ],
            [
              "Authority requirements",
              "Condition responses, clearances, fees and accepted arrangements.",
              "Project coordinator confirms what remains before submission."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore construction and closeout support",
            "href": "/services/construction-supervision"
          },
          {
            "label": "When does a Sunshine Coast subdivision need operational works?",
            "href": "/insights/when-does-a-subdivision-need-operational-works"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "At prestart, list the records required for each relevant condition and identify who will collect them. Include concealed assets and changed work.",
          "Before submitting, check that lot numbers, boundaries, easements and infrastructure locations agree across drawings, survey and supporting certificates.",
          "Keep a separate registration and settlement programme after plan sealing. Confirm lodgement requirements and timing with the surveyor and solicitor rather than assuming instant titles."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can support the civil engineering side of subdivision closeout by helping align approval conditions, operational works documentation, construction evidence and as-constructed information.",
          "For small developers, this helps protect the final step where delays can hold up settlement, finance or release of titles."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "construction-supervision",
    "cta": {
      "label": "Construction and closeout support",
      "body": "Send the conditions, approved plans and outstanding records to identify the civil closeout tasks."
    },
    "relatedSlugs": [
      "when-does-a-subdivision-need-operational-works",
      "operational-works-application-sunshine-coast",
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Council plan sealing process",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Development application forms and checklists",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Council operational work requirements",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      },
      {
        "label": "Titles Queensland: plans and associated documents",
        "href": "https://www.titlesqld.com.au/wp-content/uploads/2021/11/ltpm-part-21.pdf"
      }
    ]
  },
  {
    "slug": "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
    "title": "Before you buy a development site: civil engineering checks that matter",
    "description": "A Sunshine Coast development site due diligence guide covering access, stormwater, services, easements, slope, overlays and hidden civil costs.",
    "date": "2026-06-24",
    "category": "Due diligence",
    "keywords": [
      "development site due diligence Sunshine Coast",
      "civil engineering due diligence Sunshine Coast",
      "property development feasibility Sunshine Coast",
      "development site checklist Sunshine Coast",
      "civil engineer before buying development site"
    ],
    "faqs": [
      {
        "question": "What should a civil due diligence review cover?",
        "answer": "It should consider access, stormwater, levels, earthworks, services, easements, overlays, road frontage, constructability and obvious approval-condition risk."
      },
      {
        "question": "Can civil due diligence confirm a site will be approved?",
        "answer": "No. It is not an approval guarantee. It helps identify practical risks and cost drivers before purchase or major design spend."
      },
      {
        "question": "When should I do it?",
        "answer": "Before going unconditional where possible, or at least before committing to a fixed layout, purchase price or development feasibility model."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Before buying a Sunshine Coast development site, check the civil issues that can affect yield, cost and timing. The most important early checks are access, stormwater, services, easements, overlays, slope and constructability.",
          "These are the issues that often sit outside the real estate brochure but inside the developer's margin."
        ]
      },
      {
        "heading": "Start with the site information",
        "body": [
          "Use council's Development.i tools, site report, mapping, planning scheme information and nearby approvals to understand the public record. Then compare that with title documents, registered plans, survey and what is visible on site.",
          "A quick map review is helpful, but civil risk usually becomes clearer when levels, services and access are considered together."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "The checks that matter most",
        "body": [
          "Review where vehicles can enter, whether sight distance is practical, how stormwater discharges, whether sewer and water can be connected, whether easements cross the site, how much earthworks may be required, and whether overlays affect the same area needed for access or buildings.",
          "For small developers, focus on constraints that change yield or require expensive works."
        ]
      },
      {
        "heading": "How to use the findings",
        "body": [
          "A due diligence review should produce decisions, not just observations. It should tell you what appears workable, what needs more investigation, what could cost money and what assumptions should go into the offer price.",
          "Sometimes the best outcome is confidence. Sometimes it is a renegotiation. Sometimes it is walking away before a bad site becomes your problem."
        ]
      },
      {
        "heading": "Choose investigations around the decision deadline",
        "body": "An initial review can identify obvious constraints quickly, but it cannot prove every site assumption. If the purchase depends on retaining an existing dwelling, prioritise survey and access geometry. If it depends on a rear lot, prioritise drainage and services. A short investigation targeted at the controlling risk is often more useful than a broad report that leaves that risk unresolved. Ask the consultant to describe what can realistically be established before your decision date, and what would remain conditional if you proceed.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Yield depends on access",
              "Survey frontage and test driveway geometry.",
              "Check the proposed lots can be reached and used."
            ],
            [
              "Yield depends on drainage",
              "Investigate outlet levels, route and rights.",
              "Do not rely on an unconfirmed neighbour connection."
            ],
            [
              "Cost depends on services",
              "Obtain records and identify authority investigations.",
              "Separate nearby infrastructure from confirmed servicing capacity."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development site due diligence Sunshine Coast: civil checks before you buy",
            "href": "/insights/development-site-due-diligence-sunshine-coast"
          }
        ]
      },
      {
        "heading": "If the decision deadline arrives before the evidence",
        "body": "Suppose a buyer has a short investigation period and the engineer cannot confirm the rear drainage outlet from public records. The report should state exactly what remains unknown: pipe level, connection rights, downstream capacity or all three. Ask what investigation would resolve each issue and whether a different layout avoids the dependency. Give that information to the buyer’s solicitor and financial adviser as appropriate. A provisional engineering view should not silently become a confirmed acquisition assumption. The next decision is whether to investigate further or assess the purchase on a different development scenario, with the uncertainty visible."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Brief the intended outcome and the decision you need to make. An engineer reviewing a single new dwelling needs a different scope from one testing a townhouse yield.",
          "Request a clear list of exclusions, unresolved assumptions and follow-up investigations. Ask which finding is most likely to change the purchase decision.",
          "Share the technical findings with your planner, surveyor and solicitor. Engineering advice informs feasibility; the solicitor should advise on the purchase terms and rights."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can provide early civil engineering due diligence for Sunshine Coast development sites, including subdivision, townhouse, duplex, commercial and infill opportunities.",
          "Send the address, proposed outcome, title or survey information if available, and your key commercial question."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Send the address, intended outcome and decision deadline for a focused engineering scope."
    },
    "relatedSlugs": [
      "development-site-due-diligence-sunshine-coast",
      "how-to-read-a-sunshine-coast-council-site-report",
      "how-can-i-see-easements-on-my-property"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "common-reasons-sunshine-coast-development-applications-get-delayed",
    "title": "Common reasons Sunshine Coast development applications get delayed",
    "description": "A practical guide to common Sunshine Coast development application delays and how civil engineering, planning and documentation can reduce risk.",
    "date": "2026-06-24",
    "category": "Approvals",
    "keywords": [
      "development application delays Sunshine Coast",
      "DA delays Sunshine Coast",
      "development application Sunshine Coast",
      "well made application Sunshine Coast",
      "civil engineering development application"
    ],
    "faqs": [
      {
        "question": "What causes development application delays?",
        "answer": "Common causes include incomplete information, unresolved civil constraints, inconsistent consultant drawings, unclear stormwater strategy, access issues, referral requirements and late changes."
      },
      {
        "question": "Can every delay be avoided?",
        "answer": "No, but many avoidable delays can be reduced by lodging a coordinated, well-made application with the right technical information upfront."
      },
      {
        "question": "Why does civil engineering matter before lodgement?",
        "answer": "Access, stormwater, levels, services and earthworks can all affect whether the planning layout is credible and easy to assess."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Development applications are often delayed when the proposal is not clear enough, the supporting information is incomplete, or key civil constraints are left unresolved. Sunshine Coast Council's application guidance points to forms, checklists and well-made application expectations, but the practical issue is coordination.",
          "A good application should tell one coherent story across planning, survey, architecture, landscape and civil engineering."
        ]
      },
      {
        "heading": "Civil issues that trigger delays",
        "body": [
          "Stormwater, lawful discharge, driveway access, sight distance, earthworks, retaining, services and infrastructure conditions are common technical pressure points. If these are vague at lodgement, the application may need further information or redesign.",
          "A concept that works visually but cannot drain, be accessed or be serviced cleanly will usually slow down."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Documentation mismatches",
        "body": [
          "Delays also happen when drawings do not match: civil levels do not align with architectural plans, landscape conflicts with drainage, survey levels are outdated, or parking layouts do not support vehicle movement.",
          "Before lodgement, the consultant team should check whether the same driveway, retaining wall, basin, service corridor and lot boundaries appear consistently across the package."
        ]
      },
      {
        "heading": "How to reduce the risk",
        "body": [
          "Use council checklists, confirm the assessment pathway, identify referral risks, prepare the right technical reports, and review civil constraints before the layout is fixed. If operational works is likely later, think ahead to the detail that will be required.",
          "The best DA strategy is often to solve the hard site questions early, then lodge with confidence."
        ]
      },
      {
        "heading": "Use an information-request response register",
        "body": "When an information request arrives, do not send each consultant away with only their own paragraph. A drainage response may move a retaining wall, which affects landscaping, building levels and the survey plan. Nominate a lead to track the affected documents and coordinate one consistent response. The aim is to answer the actual request with traceable evidence. A longer report is not necessarily a better response if it leaves the requested level, calculation or design outcome unclear.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Unclear request",
              "Confirm the issue and the evidence needed with the assessment team.",
              "Avoid solving the wrong problem."
            ],
            [
              "Design change",
              "Identify every drawing and report affected by the revision.",
              "Keep architecture, civil and landscape aligned."
            ],
            [
              "Submission",
              "Provide a response schedule with references to revised material.",
              "Make each answer easy to locate and assess."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "Civil engineer for a Sunshine Coast development application: what they check",
            "href": "/insights/civil-engineer-development-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Example: a drainage revision affects three disciplines",
        "body": "Consider an information request asking the applicant to demonstrate a workable drainage outlet. The revised civil strategy moves a storage area into the landscape zone and raises an adjacent driveway. The response now affects landscape provision, vehicle grades and garage levels as well as stormwater. Have the lead consultant circulate a marked-up interface plan and identify every drawing that must change. Before submitting, compare the final revisions against the request and the proposal description. Resolving the pipe design while leaving the old landscape and architectural plans in the package creates a new inconsistency for the assessor to resolve."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Record the request item, responsible consultant, dependencies and agreed response date. Keep statutory process deadlines separate from internal production dates.",
          "Ask the engineer whether the proposed fix changes an approval assumption, cost or constructability. Tell the client before revising the package.",
          "Check revision numbers and superseded drawings before resubmission. An updated calculation paired with an old plan can generate another round of questions."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can support development applications with early access, stormwater, services, levels and constructability advice. This helps planners and designers avoid avoidable information requests and late redesign.",
          "For developers, the value is momentum: fewer surprises, cleaner coordination and a clearer path to the next approval stage."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "civil-engineer-development-application-sunshine-coast",
      "how-civil-engineering-supports-a-development-application",
      "operational-works-application-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Development application forms and checklists",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Lodging development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/lodging-a-development-application"
      },
      {
        "label": "Development.i",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "development-i-sunshine-coast-how-developers-can-research-nearby-approvals",
    "title": "Development.i Sunshine Coast: how developers can research nearby approvals",
    "description": "How Sunshine Coast developers can use Development.i to research nearby approvals, property information, precedent, conditions and civil design clues.",
    "date": "2026-06-24",
    "category": "Planning",
    "keywords": [
      "Development.i Sunshine Coast",
      "development approvals search Sunshine Coast",
      "Sunshine Coast development applications search",
      "research nearby approvals Sunshine Coast",
      "property information Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is Development.i?",
        "answer": "Sunshine Coast Council says Development.i provides access to past and current application details and basic property information for the Sunshine Coast local government area."
      },
      {
        "question": "Why should developers research nearby approvals?",
        "answer": "Nearby approvals can reveal common conditions, assessment issues, drainage constraints, access expectations and local development patterns."
      },
      {
        "question": "Can Development.i prove my project will be approved?",
        "answer": "No. It helps with context and precedent, but each site still needs current planning, engineering and approval advice."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Development.i is one of the most useful early research tools for Sunshine Coast development sites. It lets you search development and building applications, property information, nearby proposals and approval history.",
          "For developers, it is not just a planning tool. It can also reveal civil engineering clues."
        ]
      },
      {
        "heading": "What to look for",
        "body": [
          "Search the subject site and surrounding streets. Look for reconfiguring a lot approvals, material change of use approvals, operational works, plan sealing, conditions, decision notices, supporting reports and drawings where available.",
          "Nearby applications can show how council has treated access, stormwater, parking, frontage works, flooding, easements and servicing issues in the same local context."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "How to read approvals like a developer",
        "body": [
          "Do not only ask what was approved. Ask what conditions were attached, what information was requested, what changed between lodgement and approval, and whether operational works or plan sealing steps followed.",
          "A nearby approval with heavy civil conditions may be a signal that your site needs similar allowances."
        ]
      },
      {
        "heading": "Mistakes to avoid",
        "body": [
          "Do not assume that a nearby approval creates an automatic right for your site. Controls change, site constraints differ, and one approval may have depended on specific facts.",
          "Use Development.i to identify questions, then test those questions against your own site."
        ]
      },
      {
        "heading": "Build a comparable-approval note that can be checked",
        "body": "Start with the subject property and record the application reference, type, status and decision documents. Then select nearby applications because their constraints resemble yours, not simply because they show a desirable dwelling count. A flat corner site with two road frontages is a weak comparison for a sloping rear lot. Read the approved plans and conditions together, and check whether later changes altered the outcome. Development.i provides research leads; your team still needs to assess the current controls and your particular proposal.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Application status",
              "Decision and any later change documents.",
              "A lodged proposal is not an approved outcome."
            ],
            [
              "Comparable constraints",
              "Frontage, slope, drainage and intended use.",
              "Record the differences that limit the comparison."
            ],
            [
              "Delivery obligations",
              "Civil conditions and associated applications where available.",
              "Identify likely investigations and cost categories."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore early civil engineering advice",
            "href": "/services/civil-engineering-advice"
          },
          {
            "label": "How overlays affect your Sunshine Coast property",
            "href": "/insights/how-overlays-affect-your-sunshine-coast-property"
          }
        ]
      },
      {
        "heading": "A research note should show why an approval is comparable",
        "body": "For each useful application, write a short note with its reference, decision date, approved use or lot outcome, access arrangement and drainage conditions. Add one sentence explaining what differs from your site. For example, the neighbouring project may discharge to a different street or may have secured an easement that your property lacks. Read related amendments before relying on the original plan. Give the consultant team a small set of relevant examples with these notes, rather than a large folder of undifferentiated downloads. This makes the research useful for scoping investigations without presenting another owner’s approval as a precedent that guarantees yours."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Keep application references and links with a short note explaining why each is relevant. A screenshot without context is hard for the consultant team to evaluate.",
          "Read conditions for drainage, access and frontage works as well as the approved yield. These obligations can explain why a superficially similar project costs more.",
          "Mark unavailable or unclear information as unknown. Absence of a public document is not evidence that a requirement was waived or that work was completed."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review nearby approvals for civil engineering clues and help translate them into feasibility risk for your site.",
          "This can be especially useful before buying a property, preparing a subdivision concept or responding to approval conditions."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "civil-engineering-advice",
    "cta": {
      "label": "Early civil engineering advice",
      "body": "Share the site report and concept to identify the civil investigations that matter."
    },
    "relatedSlugs": [
      "how-overlays-affect-your-sunshine-coast-property",
      "subdivision-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Development.i",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Development.i what information is available",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i-what-information-is-available/"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "how-to-read-a-sunshine-coast-council-site-report",
    "title": "How to read a Sunshine Coast Council site report",
    "description": "A plain-English guide to Sunshine Coast Council site reports for zoning, overlays, mapping, property information and early development due diligence.",
    "date": "2026-06-24",
    "category": "Due diligence",
    "keywords": [
      "Sunshine Coast Council site report",
      "Development.i site report Sunshine Coast",
      "property report Sunshine Coast",
      "Sunshine Coast zoning report",
      "check property overlays Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What does a Development.i site report show?",
        "answer": "Council describes it as a convenient way to access general town planning details for a property, including planning scheme zoning and overlay information, application information and links to mapping and service information."
      },
      {
        "question": "Is the site report enough for development due diligence?",
        "answer": "No. It is a strong starting point, but you still need site-specific planning, survey, title, infrastructure and civil engineering review."
      },
      {
        "question": "What should I check first?",
        "answer": "Start with zoning, overlays, lot details, mapped constraints, nearby applications, service information links and any obvious flooding or infrastructure information."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "A Sunshine Coast Council Development.i site report is a useful first screen for property development due diligence. It helps you identify zoning, overlays, application history and links to other mapping or property information.",
          "It should not be treated as the final answer. It should be used to decide what needs checking next."
        ]
      },
      {
        "heading": "What to read first",
        "body": [
          "Start with the property details, zone, local plan area, overlays and any mapped development constraints. Then look for current or past applications on the property and nearby sites.",
          "If the report points to flooding, environmental constraints, infrastructure, water, sewer or mapping layers, follow those links and note what may affect the civil design."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "How civil engineers use it",
        "body": [
          "CivilCity uses site reports to frame early questions about access, stormwater, services, easements, flood risk, slope, earthworks and construction practicality.",
          "For example, a flood overlay may trigger questions about levels and access. A service corridor may trigger questions about building location or subdivision layout."
        ]
      },
      {
        "heading": "What the report will not solve",
        "body": [
          "A site report does not replace a survey, title review, services investigation, flood assessment, stormwater design or planning advice. It also may not show the practical impact of a constraint on your proposed layout.",
          "Use it as a map of likely issues, then test the commercial and technical consequences."
        ]
      },
      {
        "heading": "Convert the report into questions for the right consultant",
        "body": "Check the address and lot-and-plan details before interpreting the results, particularly where a property spans multiple parcels. Save the report date and follow the linked mapping at a useful scale. Then overlay your proposed buildings, access and works concept on a surveyed base. A constraint remote from the proposed works may have a different effect from one crossing the only practical driveway. The report helps direct the investigation; it cannot show that the intended layout is buildable.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Zone and local plan",
              "Ask the planner which provisions apply to the intended use.",
              "Confirm the pathway before detailed design."
            ],
            [
              "Mapped hazard or value",
              "Locate the proposal relative to the mapped extent.",
              "Scope the appropriate specialist assessment."
            ],
            [
              "Infrastructure information",
              "Compare available records with the proposed works.",
              "Investigate location, levels, capacity and authority requirements."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development site due diligence Sunshine Coast: civil checks before you buy",
            "href": "/insights/development-site-due-diligence-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Example: mapping becomes an investigation brief",
        "body": "A report may identify a flood overlay and show infrastructure information near the rear boundary. The next step is not simply to label the property high risk. Locate the intended building, driveway and earthworks relative to those features. Ask what survey levels and flood information are needed to test the proposal, and whether the mapped service position needs field verification. The resulting brief might prioritise a frontage-to-rear level survey and an outlet investigation before a detailed concept. That is a more useful response than either abandoning the site on the map alone or assuming the mapped constraints can be designed around later."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Bring the full report and linked map references, not just a zoning screenshot. Identify the proposed use and any assumptions about lot or dwelling yield.",
          "Ask for an action list assigning each issue to planning, survey, engineering, legal or a specialist discipline. Avoid treating every map layer as a civil-design task.",
          "Update the screen if the concept or relevant planning material changes. Retain the earlier report as a record of what the original decision relied on."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review a site report with the development idea in mind and identify the civil engineering questions that should be answered before purchase, lodgement or detailed design.",
          "That turns a long report into a short action list."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Send the address, intended outcome and decision deadline for a focused engineering scope."
    },
    "relatedSlugs": [
      "development-site-due-diligence-sunshine-coast",
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "how-can-i-see-easements-on-my-property"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Development.i",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i/development-i"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "flood-overlays-and-development-risk-on-the-sunshine-coast",
    "title": "Flood overlays and development risk on the Sunshine Coast",
    "description": "A Sunshine Coast developer guide to flood overlays, overland flow, levels, access, stormwater and feasibility risk.",
    "date": "2026-06-24",
    "category": "Stormwater",
    "keywords": [
      "flood overlay Sunshine Coast",
      "development risk flooding Sunshine Coast",
      "overland flow path Sunshine Coast",
      "stormwater design flood overlay",
      "flood mapping Sunshine Coast development"
    ],
    "faqs": [
      {
        "question": "Does a flood overlay stop development?",
        "answer": "Not automatically. It can change the design response, required evidence, finished levels, access strategy, stormwater approach and development feasibility."
      },
      {
        "question": "Why does flooding affect civil design?",
        "answer": "Flooding can affect site levels, driveways, evacuation or access assumptions, stormwater discharge, earthworks, retaining and where buildings or services should be located."
      },
      {
        "question": "When should flood overlays be checked?",
        "answer": "Before buying the site or fixing the layout. Flood and overland flow issues can change the entire development strategy."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Flood overlays do not always stop development, but they can change the cost, layout and approval risk of a Sunshine Coast project. They are one of the first mapping layers to check during due diligence.",
          "A flood issue is rarely only about water depth. It can affect levels, access, drainage, earthworks and whether the project is commercially sensible."
        ]
      },
      {
        "heading": "What to investigate",
        "body": [
          "Check council mapping, Development.i site report information, flood and overlay layers, existing drainage paths, road levels, finished floor level assumptions, downstream infrastructure and any visible overland flow routes.",
          "If the site is low, flat, near waterways or crossed by mapped flow, get technical advice before assuming a standard layout will work."
        ],
        "links": [
          {
            "label": "Council flooding and stormwater guidance and updates",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
          }
        ]
      },
      {
        "heading": "Civil design impacts",
        "body": [
          "Flood constraints may require higher building platforms, changed driveway grades, more earthworks, adjusted stormwater design, revised building positions, different access arrangements or more detailed assessment.",
          "Sometimes the issue is not the building footprint. It is the driveway or service corridor that sits in the constrained area."
        ]
      },
      {
        "heading": "Commercial risk",
        "body": [
          "Flood-related redesign can reduce yield, add engineering reports, increase construction cost and lengthen the approval programme. It can also affect finance and buyer confidence if the issue appears late.",
          "The right response is not panic. It is early clarity."
        ]
      },
      {
        "heading": "Check access and off-site effects alongside floor levels",
        "body": "Raising a building pad may improve one part of a proposal while displacing flow or making access harder elsewhere. A flood response should consider the proposed works as a system, including boundaries and neighbouring land. Illustrative scenario: a low-lying site has a possible elevated building area, but the only driveway crosses a flow path. The feasibility question includes access performance and the effect of filling, not merely the height of the finished floor. Obtain site-specific assessment before concluding that extra fill resolves the risk.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Building and pad",
              "Relevant flood information, levels and proposed filling.",
              "Test the development response against the applicable criteria."
            ],
            [
              "Access route",
              "Road and driveway levels along the whole route.",
              "Identify where inundation or flow affects access."
            ],
            [
              "Neighbouring land",
              "Existing and proposed flow paths and storage.",
              "Assess whether works alter off-site flood behaviour."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore stormwater and drainage design",
            "href": "/services/stormwater-drainage-design"
          },
          {
            "label": "Stormwater engineer Sunshine Coast: when development needs drainage advice",
            "href": "/insights/stormwater-engineer-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Questions to ask about the assessment scope",
        "body": "Ask which flood mechanisms and scenarios are relevant to the property, what information is already available and what additional analysis is needed. Confirm whether the work addresses building levels, access, off-site impacts and the proposed earthworks, or only one of those matters. Distinguish mapped screening information from a site-specific conclusion. If a proposal is revised, ask whether changed fill, walls or drainage invalidate earlier assumptions. The commercial output should identify which layout options remain supportable and what evidence is needed next. This helps the developer avoid buying additional design work before the controlling flood question has been resolved."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Identify the flood information, model version and assumptions used. Council publishes guidance and updates that need to be considered in the assessment scope.",
          "Ask whether the concept needs specialist flood modelling in addition to ordinary site drainage design. A stormwater pipe calculation does not answer every flood question.",
          "Compare alternatives before fixing levels: relocating buildings, reducing fill or changing access may be preferable to adding more retaining and drainage infrastructure."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review flood and drainage constraints, coordinate stormwater and access implications, and help identify what further technical work is needed.",
          "For developers, the useful output is a practical risk picture: what appears manageable, what needs specialist assessment and what may change the feasibility."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "stormwater-drainage-design",
    "cta": {
      "label": "Stormwater and drainage design",
      "body": "Send the survey, concept and relevant conditions so the drainage question can be scoped."
    },
    "relatedSlugs": [
      "stormwater-engineer-sunshine-coast",
      "lawful-point-of-discharge-why-it-can-make-or-break-a-development",
      "stormwater-management-plan-sunshine-coast-when-development-needs-one"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Council flooding and stormwater guidance and updates",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
      }
    ]
  },
  {
    "slug": "battle-axe-subdivision-on-the-sunshine-coast-access-services-and-stormwater-risks",
    "title": "Battle-axe subdivision on the Sunshine Coast: access, services and stormwater risks",
    "description": "A practical Sunshine Coast battle-axe subdivision guide covering access handles, driveway grades, services, stormwater, easements and feasibility.",
    "date": "2026-06-24",
    "category": "Subdivision",
    "keywords": [
      "battle-axe subdivision Sunshine Coast",
      "rear lot subdivision Sunshine Coast",
      "battle axe driveway design",
      "shared driveway subdivision Sunshine Coast",
      "subdivision access design Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Why is battle-axe subdivision difficult?",
        "answer": "The access handle has to work for vehicles, services, drainage, grades, easements and future residents, often in a narrow strip of land."
      },
      {
        "question": "What should be checked first?",
        "answer": "Check access width, driveway grade, turning, service corridors, stormwater discharge, easements, frontage constraints and whether the rear lot can be practically serviced."
      },
      {
        "question": "Can stormwater stop a rear lot subdivision?",
        "answer": "It can make it difficult or expensive if there is no practical lawful discharge path or drainage corridor."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Battle-axe subdivision can work well on the Sunshine Coast, but it is easy to underestimate. The access handle is not just a driveway. It often needs to carry vehicles, services, drainage, easements and construction access.",
          "If that narrow corridor does not work, the rear lot may not be practical."
        ]
      },
      {
        "heading": "Access is the first test",
        "body": [
          "Review frontage width, driveway grade, turning space, sight distance, shared access requirements and whether vehicles can enter and exit safely. Swept paths may be needed where turning is tight.",
          "A rear lot should not rely on awkward reverse movements or a driveway grade that becomes difficult to build or use."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Services compete for space",
        "body": [
          "Sewer, water, stormwater, electrical and telecommunications services may all need to reach the rear lot. Existing services may also cross the proposed access handle.",
          "That means the access corridor must be checked as a service corridor, not only as a traffic route."
        ]
      },
      {
        "heading": "Stormwater is often decisive",
        "body": [
          "Rear lots can be difficult where stormwater needs to discharge back toward the street, through another lot or through a constrained easement. If the site slopes away from the frontage, lawful discharge needs very early attention.",
          "This is where a simple subdivision sketch often becomes a real engineering question."
        ]
      },
      {
        "heading": "Draw a section through the access handle before fixing it",
        "body": "A rear-lot corridor must accommodate the actual works, not just the nominal driveway width. Retaining foundations, drainage, utility clearances, boundary fences and construction access can compete for the same space. On a sloping site, a cross section may reveal that a retaining solution consumes the corridor reserved for services. Test alternative alignments and the ownership arrangement with the surveyor before setting the new boundary. Treat the rear lot’s future building access and drainage as part of feasibility, even if its house is not being designed yet.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Vehicle corridor",
              "Grades, transitions, turning and clearances.",
              "Establish usable access to the rear building area."
            ],
            [
              "Service corridor",
              "Routes, separation, connection levels and authority requirements.",
              "Avoid promising incompatible service alignments."
            ],
            [
              "Rights and maintenance",
              "Ownership, easements and shared infrastructure obligations.",
              "Coordinate the physical design with the legal arrangement."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Compare two arrangements for the same rear lot",
        "body": "One concept may keep all vehicle access within the rear lot’s own handle; another may rely on a shared arrangement. Compare the surveyed corridor, retaining, service routes, turning and drainage for both. Then have the surveyor and solicitor explain the boundary and rights implications. An apparently cheaper shared driveway may create different maintenance and access obligations, while a separate corridor may leave less space beside the retained house. Document the choice on a combined plan and cost it as a complete arrangement. The decision should follow the physical and legal requirements together, rather than selecting the narrowest strip first."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Ask for a combined corridor plan and cross section showing driveway edges, drainage, retaining and services. Separate discipline drawings can conceal conflicts.",
          "Confirm how the retained front dwelling will remain serviced and accessible during construction. Temporary arrangements belong in the budget and programme.",
          "Identify what evidence is needed before accepting rear-lot yield: surveyed levels, outlet investigation, service advice and a workable boundary or easement arrangement."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can test battle-axe access, servicing and stormwater feasibility before the layout advances too far.",
          "For owners and small developers, this helps answer the question that matters most: does the rear lot actually work as a buildable, serviceable lot?"
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "what-consultants-do-you-need-for-a-sunshine-coast-subdivision"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "townhouse-development-sunshine-coast-civil-engineering-checklist",
    "title": "Townhouse development Sunshine Coast: civil engineering checklist",
    "description": "A civil engineering checklist for Sunshine Coast townhouse developments covering access, parking, stormwater, waste, levels, services and approval risk.",
    "date": "2026-06-24",
    "category": "Subdivision",
    "keywords": [
      "townhouse development Sunshine Coast",
      "townhouse civil engineer Sunshine Coast",
      "medium density development Sunshine Coast",
      "townhouse stormwater design",
      "townhouse access design"
    ],
    "faqs": [
      {
        "question": "What civil issues matter most for townhouse projects?",
        "answer": "Access, parking, stormwater, waste collection, levels, services, earthworks, retaining and how all of those fit within a tight site layout."
      },
      {
        "question": "When should civil engineering be involved?",
        "answer": "Before the layout is fixed. Civil constraints can affect unit yield, garage levels, driveway geometry, drainage and waste collection."
      },
      {
        "question": "Why are townhouse sites high risk for redesign?",
        "answer": "Because small level, access or drainage changes can ripple through parking, private open space, building footprints and landscaping."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Townhouse developments on the Sunshine Coast need civil engineering input early because access, parking, stormwater, waste, levels and services all compete for space. A layout that looks efficient can become difficult once grades and drainage are tested.",
          "The goal is to protect yield without ignoring buildability."
        ]
      },
      {
        "heading": "Access and parking checklist",
        "body": [
          "Check driveway grades, garage thresholds, visitor parking, manoeuvring, swept paths, sight distance, shared aisles, waste vehicle access and pedestrian safety. If the site has slope, long sections should be prepared early.",
          "Parking and access should be coordinated with architecture before the plan is treated as fixed."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Stormwater and levels checklist",
        "body": [
          "Check lawful discharge, overland flow, detention, surface grading, roofwater, driveway drainage, flood overlays and whether the site can drain by gravity. Levels can affect every dwelling, garage and courtyard.",
          "Late stormwater changes are one of the fastest ways to disturb a townhouse layout."
        ]
      },
      {
        "heading": "Services and construction checklist",
        "body": [
          "Check sewer, water, stormwater, electrical and telecommunications service corridors, retaining walls, earthworks, staging and contractor access. Tight townhouse sites often need more coordination than larger subdivisions because there is less room for adjustment.",
          "A good civil review should identify what needs to move before the project is lodged or priced."
        ]
      },
      {
        "heading": "Coordinate the interfaces that consume townhouse yield",
        "body": "Illustrative scenario: a six-dwelling concept places visitor parking at the lowest corner. The drainage strategy also needs that area for infrastructure and safe surface flow. Moving the bays changes turning movements and the waste-collection arrangement. Compare layouts on a shared base before the architectural design is finalised. A useful civil checklist names the conflict and the decision required, rather than marking stormwater, traffic and landscaping as independently complete.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Garage thresholds",
              "Driveway long sections and building levels.",
              "Agree levels before fixing slabs and entry arrangements."
            ],
            [
              "Parking and waste",
              "Vehicle paths, collection position and occupied bays.",
              "Check the layout works in its normal operating state."
            ],
            [
              "Drainage and landscape",
              "Treatment footprint, overland flow and maintenance access.",
              "Avoid allocating the same area twice."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Run a coordinated concept review before lodgement",
        "body": "Bring the architect, planner, civil engineer and relevant specialists to the same concept review. Walk through a resident arriving, a visitor parking, bins being collected and runoff leaving the site. Check the levels and spaces each activity uses. Then discuss the construction sequence: where deliveries stop, how earthworks are accessed and which existing services remain live. Record each unresolved interface with an owner and a drawing reference. The meeting should conclude with a defined set of changes or investigations and a revised concept date. This gives the developer a practical basis for deciding whether the layout is ready to progress."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "At concept review, put architecture, civil, landscape and servicing on the same revision and mark unresolved interfaces. Nominate who will close each one.",
          "Compare retained yield with total civil cost and usable outdoor space. An extra dwelling can require disproportionate retaining, drainage or access work.",
          "Include construction staging and future maintenance in the brief. Tight access can affect both the initial build and replacement of shared infrastructure later."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can support townhouse feasibility, development applications, operational works and detailed civil design by coordinating access, levels, stormwater and services.",
          "For developers, the value is a layout that can move from approval to construction with fewer avoidable surprises."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "what-consultants-do-you-need-for-a-sunshine-coast-subdivision"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Operational work",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Development application forms and checklists",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "low-density-residential-subdivision-sunshine-coast-minimum-lot-size-checks",
    "title": "Low density residential subdivision Sunshine Coast: minimum lot size checks",
    "description": "How to read low density residential subdivision potential on the Sunshine Coast, including minimum lot size, slope, frontage, overlays and servicing risks.",
    "date": "2026-06-29",
    "category": "Subdivision",
    "keywords": [
      "low density residential subdivision Sunshine Coast",
      "minimum lot size Sunshine Coast",
      "Sunshine Coast subdivision lot size",
      "reconfiguring a lot Sunshine Coast",
      "civil engineer subdivision feasibility"
    ],
    "faqs": [
      {
        "question": "Is 600m² always enough for a new lot in the Low density residential zone?",
        "answer": "No. It may be a useful first benchmark for some low-slope sites, but slope, frontage, overlays, local plan provisions, access, services, stormwater and lot geometry must also be checked."
      },
      {
        "question": "Why does slope change subdivision feasibility?",
        "answer": "Steeper land can trigger larger lot-size outcomes, geotechnical considerations, driveway grade issues, retaining walls and higher construction cost."
      },
      {
        "question": "Should I get civil input before a town planning report?",
        "answer": "Yes, especially for constrained infill sites. Civil input can shape the concept plan so planning advice is based on a layout that can actually be serviced and built."
      }
    ],
    "sections": [
      {
        "heading": "Why lot size is only the first question",
        "body": [
          "Owners often search for a simple lot-size answer: can this low density residential block be split? The useful answer is more specific. Under the Sunshine Coast Planning Scheme material, lot size is only one input. A development still needs to work against zoning, local plan provisions, overlays, access, slope, stormwater discharge and services.",
          "The Sunshine Coast Planning Scheme includes Reconfiguring a Lot provisions and minimum lot-size guidance that can vary with slope and zone. Those details matter because a simple lot-size number rarely tells the whole feasibility story."
        ]
      },
      {
        "heading": "How to verify the applicable lot dimensions",
        "body": [
          "Ask the planner to identify the current Reconfiguring a lot code, relevant local plan and overlays for the property. Record the applicable area, dimensions, frontage and slope provisions separately. A broad zone label is not a substitute for that assessment, and a proposal departing from an acceptable outcome needs a considered planning response.",
          "Then ask the surveyor to draw each proposed lot, including access arrangements and easements. Check the usable building area, rather than simply dividing the parent area by a nominal minimum. An access handle, constrained land or existing building can make that calculation misleading."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "The civil checks that change the answer",
        "body": [
          "CivilCity normally looks beyond the planning headline. The practical questions are: can each lot obtain safe vehicle access, is there a lawful point of discharge, can sewer and water be extended without expensive clashes, does the driveway work on grade, and will earthworks or retaining make the project commercially unviable?",
          "A site can meet a lot-size number and still be a bad subdivision candidate if the only stormwater path needs a downstream easement, the driveway is too steep, or a service crosses the best building envelope."
        ]
      },
      {
        "heading": "What to prepare before asking for advice",
        "body": [
          "Collect the address, title plan, survey if available, recent Development.i site report, sewer and water information, and any sketch showing the split you have in mind. If the land is sloping, include contour information or a feature survey.",
          "A short feasibility review can then separate three things: what the scheme appears to allow, what council may scrutinise, and what civil design will actually have to solve."
        ]
      },
      {
        "heading": "Test dimensions and building usability together",
        "body": "Illustrative scenario: a parent parcel appears large enough for two lots, but the retained house occupies the only practical frontage arrangement. The surveyor’s boundary sketch should be checked against access, services and a usable building envelope on both lots. Slope may affect the applicable planning provisions and the civil cost at the same time. Ask the planner to document the relevant controls and the engineer to show where the proposed geometry depends on retaining, drainage or service relocation.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Area and dimensions",
              "Applicable provisions checked by the planner.",
              "Avoid treating one zone-wide number as a complete assessment."
            ],
            [
              "Existing development",
              "Surveyed house, access and service locations.",
              "Check both retained and new lots function after subdivision."
            ],
            [
              "Usable envelope",
              "Slope, easements, overlays and drainage.",
              "Confirm a practical area remains for the intended use."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Request a lot-by-lot schedule of area, frontage, dimensions and constraints with the source of the planning criteria.",
          "Show driveway transitions and drainage routes before locking the boundary plan; these may alter the useful width or depth of a lot.",
          "Treat a layout relying on removal of a house or relocation of a service as a different cost scenario, rather than an unnoticed assumption."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can prepare early subdivision feasibility input, support the planner and surveyor, and test the civil constraints before the project commits to detailed design. The review should identify the work needed to support the proposed yield and the costs that need investigation before commitment."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "what-consultants-do-you-need-for-a-sunshine-coast-subdivision"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "secondary-dwelling-sunshine-coast-civil-engineering-checks-before-you-build",
    "title": "Secondary dwelling Sunshine Coast: civil engineering checks before you build",
    "description": "A practical guide to secondary dwelling checks on the Sunshine Coast, covering parking, access, stormwater, services, slope and planning scheme constraints.",
    "date": "2026-06-29",
    "category": "Planning",
    "keywords": [
      "secondary dwelling Sunshine Coast",
      "granny flat Sunshine Coast approval",
      "secondary dwelling civil engineer",
      "Sunshine Coast dwelling house code",
      "stormwater secondary dwelling"
    ],
    "faqs": [
      {
        "question": "Do secondary dwellings need stormwater design?",
        "answer": "They often need at least a stormwater check, because added roof, driveway and paved area can change discharge, detention and nuisance-flow issues."
      },
      {
        "question": "Can I rely on the existing driveway?",
        "answer": "Sometimes, but driveway width, grade, sight distance, turning and parking layout should be checked before assuming the existing access is suitable."
      },
      {
        "question": "What information should I send CivilCity?",
        "answer": "Send the address, site plan, proposed layout, contours or survey if available, and any Development.i or planning report you already have."
      }
    ],
    "sections": [
      {
        "heading": "Why secondary dwellings deserve early civil checks",
        "body": [
          "Adding a secondary dwelling can require changes to drainage, access and services even when the building is small. Test the existing property and the proposed dwelling together before agreeing a building footprint or construction price.",
          "The Sunshine Coast Planning Scheme includes secondary dwelling provisions, parking outcomes and relevant schedule definitions. For owners, the important point is that a small dwelling can still create real access, parking, drainage and servicing questions."
        ]
      },
      {
        "heading": "Planning permission is only half the question",
        "body": [
          "A secondary dwelling may appear simple because it sits on an existing lot. In practice, the project still has to work with access, parking, stormwater, sewer, water, earthworks, retaining, building location and any mapped overlays.",
          "The planning scheme includes access and car parking outcomes in Part 9, with on-site car parking expectations for dwelling-house related development. The exact pathway depends on zone, lot size, overlays and the proposed design."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil engineering checks that matter early",
        "body": [
          "Start with stormwater. A new roof and driveway area can increase impervious area and change discharge behaviour. If there is no clear lawful point of discharge, the cheapest design option may disappear quickly.",
          "Then check driveway grades, turning, pedestrian access, retaining walls, sewer connection, water connection and whether construction access is realistic. Backyard projects can be more constrained than greenfield work because the easiest alignment was usually used by the original house."
        ]
      },
      {
        "heading": "When overlays complicate a small project",
        "body": [
          "Flood, bushfire, steep land, waterways and acid sulfate soils overlays can change the information required or the design response. A small building footprint does not automatically mean small approval risk.",
          "If the site is in a mapped constraint area, the practical question is what supporting material is needed and whether the civil design can demonstrate the expected outcome without over-engineering the project."
        ]
      },
      {
        "heading": "Protect the existing house while adding the second building",
        "body": "A backyard build may share existing access and services, but that does not establish that the old infrastructure can support the new arrangement. Check pipe routes, levels and construction access before placing the dwelling. A crane, delivery truck or trench may need space the finished building plan does not show. Confirm the proposal’s planning classification with the planner or building certifier; calling a building a secondary dwelling does not decide its approval pathway or allow it to be separately titled.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Existing services",
              "Records, survey and targeted investigation where needed.",
              "Avoid placing slabs or excavations over critical infrastructure."
            ],
            [
              "New runoff",
              "Roof and paved-area drainage strategy.",
              "Connect the addition without creating ponding at the existing house."
            ],
            [
              "Construction route",
              "Vehicle access, storage and temporary service needs.",
              "Include enabling works in the builder’s scope."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore early civil engineering advice",
            "href": "/services/civil-engineering-advice"
          },
          {
            "label": "How overlays affect your Sunshine Coast property",
            "href": "/insights/how-overlays-affect-your-sunshine-coast-property"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide plans for both buildings and the full property, including existing drainage, retaining, parking and access.",
          "Ask who is responsible for plumbing, civil drainage and authority approvals; identify the interface between scopes before accepting separate quotes.",
          "Check the impact of new levels and runoff on the retained dwelling and neighbours. A small footprint can still change the site’s drainage behaviour."
        ]
      },
      {
        "heading": "What CivilCity can do first",
        "body": [
          "CivilCity can review the site report, mapping, levels and concept layout, then flag the likely civil design issues before building design becomes locked. That early review is usually cheaper than redesigning a secondary dwelling after access, drainage or services object to being ignored."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "civil-engineering-advice",
    "cta": {
      "label": "Early civil engineering advice",
      "body": "Share the site report and concept to identify the civil investigations that matter."
    },
    "relatedSlugs": [
      "how-overlays-affect-your-sunshine-coast-property",
      "development-i-sunshine-coast-how-developers-can-research-nearby-approvals",
      "subdivision-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "dual-occupancy-sunshine-coast-approval-and-civil-design-risks",
    "title": "Dual occupancy Sunshine Coast: approval and civil design risks",
    "description": "What Sunshine Coast owners and developers should check before pursuing a dual occupancy, from planning assessment to parking, access, drainage and flood constraints.",
    "date": "2026-06-29",
    "category": "Approvals",
    "keywords": [
      "dual occupancy Sunshine Coast",
      "duplex approval Sunshine Coast",
      "dual occupancy civil design",
      "Sunshine Coast dual occupancy parking",
      "duplex stormwater Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Is a dual occupancy the same as a subdivision?",
        "answer": "No. Dual occupancy usually involves two dwellings on one lot or within a particular title arrangement, while subdivision or reconfiguring a lot creates new lots. The planning pathway and civil requirements differ."
      },
      {
        "question": "What is the biggest civil risk for a duplex?",
        "answer": "Stormwater and access are common risks, especially on sloping sites, narrow frontages or lots affected by flood, easements or limited lawful discharge options."
      },
      {
        "question": "Should CivilCity review the architect concept?",
        "answer": "Yes. A quick civil review can catch driveway, parking, drainage and service problems before the design is too developed to change cheaply."
      }
    ],
    "sections": [
      {
        "heading": "Can this property support two dwellings?",
        "body": [
          "A dual occupancy proposal needs a planning pathway and a workable layout for two dwellings. Shared access, separate services, private open space and drainage must fit alongside the buildings. Approval to build two dwellings does not by itself create two separately saleable titles.",
          "The Sunshine Coast Planning Scheme includes assessment-table references for dual occupancy, along with flood-related material that can affect floor levels and car parking for dual occupancy and dwelling-house uses. Those checks matter before a concept layout becomes fixed."
        ]
      },
      {
        "heading": "Start with the assessment pathway",
        "body": [
          "In the Sunshine Coast Planning Scheme, the category of assessment can vary by zone, precinct, local plan and overlay. Low density residential zone provisions may allow dual occupancy in some circumstances, but not in protected housing areas, with the Dual occupancy code and other benchmarks becoming relevant where assessable.",
          "That means the first check is not “can I build a duplex?” It is “what does this exact property trigger?” The difference matters because code assessment, impact assessment, local plan provisions and overlays all change time, cost and documentation."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil risks that make or break the layout",
        "body": [
          "Dual occupancy designs frequently run into parking, driveway width, turning, stormwater discharge, bin collection, frontage constraints and service-connection clashes. A building layout that maximises floor area can accidentally leave no sensible civil solution.",
          "Flood overlays add another layer. Sunshine Coast flood provisions can reference flood immunity requirements for floor levels and car parking for dual occupancy and dwelling-house development. If flood constraints apply, levels and access should be tested early."
        ]
      },
      {
        "heading": "What to check before detailed building design",
        "body": [
          "Before investing in polished architectural plans, check zone, local plan, overlays, frontage width, existing services, easements, slope, driveway grade and where stormwater can lawfully discharge. Also check whether the proposal creates a practical address, parking arrangement and construction sequence.",
          "Set garage levels with the driveway designer, and reserve space for drainage and services before the architectural layout is finalised."
        ]
      },
      {
        "heading": "Agree access, servicing and intended tenure before design",
        "body": "Two buildings on one lot and two independently owned properties can require different legal and servicing arrangements. Confirm the intended outcome with the planner, surveyor and solicitor. The civil design should then test how vehicles, drainage and utilities operate under that arrangement. Illustrative scenario: shared parking looks efficient, but one dwelling depends on passing through space intended for the other. Resolve access rights and operating space before treating the layout as ready for approval or separate sale.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Shared or separate access",
              "Turning, parking and entry geometry.",
              "Check each dwelling can function under the intended arrangement."
            ],
            [
              "Drainage and services",
              "Connection routes, capacity investigations and maintenance access.",
              "Identify shared assets and any required rights."
            ],
            [
              "Future titles",
              "Planning and cadastral advice on the intended tenure.",
              "Do not equate building approval with separate saleable titles."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "Civil engineer for a Sunshine Coast development application: what they check",
            "href": "/insights/civil-engineer-development-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "State whether you intend to retain, rent or separately sell the dwellings. Ask the relevant advisers to test that outcome rather than infer it.",
          "Coordinate garage levels, bins and visitor access on the same layout as the buildings and landscape areas.",
          "Compare shared-infrastructure savings with the maintenance and rights they require. Document the chosen arrangement before detailed design."
        ]
      },
      {
        "heading": "How CivilCity supports dual occupancy projects",
        "body": [
          "CivilCity can review the early concept, identify likely access and stormwater constraints, coordinate with the planner and architect, and prepare civil design inputs for the application or operational works stage if required."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "civil-engineer-development-application-sunshine-coast",
      "how-civil-engineering-supports-a-development-application",
      "operational-works-application-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "medium-density-residential-zone-sunshine-coast-townhouse-feasibility",
    "title": "Medium density residential zone Sunshine Coast: townhouse feasibility checks",
    "description": "How to screen medium density residential sites on the Sunshine Coast before committing to townhouse or multi-unit development design.",
    "date": "2026-06-29",
    "category": "Due diligence",
    "keywords": [
      "medium density residential Sunshine Coast",
      "townhouse feasibility Sunshine Coast",
      "multi unit development Sunshine Coast",
      "Sunshine Coast townhouse civil engineer",
      "medium density site due diligence"
    ],
    "faqs": [
      {
        "question": "Does Medium density residential zoning guarantee townhouse approval?",
        "answer": "No. It suggests the use may be contemplated, but the proposal still has to satisfy assessment benchmarks, local plan provisions, overlays and practical civil design requirements."
      },
      {
        "question": "What usually reduces townhouse yield?",
        "answer": "Driveway and parking geometry, stormwater detention, flood constraints, retaining walls, service corridors and waste collection often reduce theoretical yield."
      },
      {
        "question": "When should civil feasibility happen?",
        "answer": "Before the concept plan is treated as fixed. Early civil testing can prevent expensive redesign later."
      }
    ],
    "sections": [
      {
        "heading": "The opportunity and the trap",
        "body": [
          "Medium density residential land attracts developers because the zoning appears to support more intensive housing. The trap is assuming the zone label does the feasibility work. It does not. The scheme, local plan, overlays and civil design constraints still decide whether the yield is practical.",
          "The Sunshine Coast Planning Scheme sets out Medium density residential zone purposes and assessment material. It also includes minimum lot-size guidance where medium density residential lots can have slope-sensitive outcomes, which is useful for developers screening sites."
        ]
      },
      {
        "heading": "Separate dwelling yield from lot subdivision",
        "body": [
          "The zone indicates the planning context; it does not establish a dwelling count. Have the planner check the use, density, height, site cover, local plan and overlay provisions applicable to the proposal. Test those controls alongside access, parking, services and stormwater.",
          "Do not use minimum areas for reconfiguring land as a formula for townhouse yield. Building multiple dwellings and creating separate titles are different questions. Confirm the intended tenure and approval pathway with the planner and cadastral surveyor before using a per-dwelling sale assumption in the feasibility model."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil constraints that reduce townhouse yield",
        "body": [
          "Townhouse feasibility is sensitive to driveway geometry, internal manoeuvring, waste collection, visitor parking, stormwater detention, flood levels, retaining walls, service corridors and construction staging. A site may hold six dwellings in theory and four dwellings once civil reality joins the meeting.",
          "Early civil input should test driveway grade, vehicle swept paths, finished floor levels, retaining heights, drainage path, detention location and whether the design leaves room for infrastructure before the building footprint is fixed."
        ]
      },
      {
        "heading": "A better first-pass process",
        "body": [
          "Start with a planning and civil screen: zoning, local plan, overlays, nearby approvals, title constraints, levels, services and access. Then prepare a concept that reserves space for drainage, waste, parking and constructability before the building footprint hardens.",
          "Comparing a higher-yield and a lower-yield concept at this stage can reveal whether an extra dwelling justifies the additional retaining, drainage and parking works."
        ]
      },
      {
        "heading": "Compare yield scenarios before selecting the preferred scheme",
        "body": "Ask the team to test at least one alternative to the maximum nominal dwelling count where the site is constrained. The comparison should show civil works, servicing, usable open space and construction access as well as floor area. A higher count may still be worthwhile, but the decision needs a costed design basis. An untested six-dwelling sketch and a coordinated five-dwelling layout do not carry the same level of certainty.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Higher-yield option",
              "Parking, waste, drainage and retaining interfaces.",
              "Identify the extra works needed to retain the additional dwelling."
            ],
            [
              "Alternative layout",
              "Reduced footprint or different access and levels.",
              "Test whether simplification improves delivery certainty."
            ],
            [
              "Preferred concept",
              "Planning advice and coordinated civil assumptions.",
              "Record remaining investigations before committing to detailed design."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development site due diligence Sunshine Coast: civil checks before you buy",
            "href": "/insights/development-site-due-diligence-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Record the cost of the additional dwelling",
        "body": "When comparing layouts, separate costs common to both options from costs caused by the extra dwelling. Additional retaining, a changed drainage system, more complex access or different servicing may be the deciding items. Ask for the assumptions and confidence level behind each allowance. Where a cost cannot yet be established, identify the investigation required instead of inserting an unsupported precise figure. The preferred concept should be selected with planning, design and commercial advice using the same scope and evidence."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Use the same site survey and constraint information for each scenario so the comparison is meaningful.",
          "Ask which infrastructure element controls the layout and what would have to change to increase yield.",
          "Carry unresolved servicing or drainage assumptions into the cost model explicitly, with a next investigation and responsible consultant."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can work with town planners, architects and surveyors to test medium-density development constraints early, then support the DA and operational works pathway with civil design, stormwater, access and documentation."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Send the address, intended outcome and decision deadline for a focused engineering scope."
    },
    "relatedSlugs": [
      "development-site-due-diligence-sunshine-coast",
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "how-to-read-a-sunshine-coast-council-site-report"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "stormwater-management-plan-sunshine-coast-when-development-needs-one",
    "title": "Stormwater management plan Sunshine Coast: when development needs one",
    "description": "A developer-focused guide to stormwater management plans on the Sunshine Coast, including lawful discharge, detention, flooding, water quality and council expectations.",
    "date": "2026-06-29",
    "category": "Stormwater",
    "keywords": [
      "stormwater management plan Sunshine Coast",
      "Sunshine Coast stormwater code",
      "lawful point of discharge Sunshine Coast",
      "stormwater detention Sunshine Coast",
      "civil engineer stormwater plan"
    ],
    "faqs": [
      {
        "question": "Is stormwater only needed at operational works stage?",
        "answer": "No. Stormwater constraints should be checked during feasibility and DA design because they can affect layout, yield, levels and approval risk."
      },
      {
        "question": "What is lawful point of discharge?",
        "answer": "It is the lawful and practical location or system where site stormwater can discharge without causing nuisance or unacceptable impacts. It is often central to feasibility."
      },
      {
        "question": "Can detention be solved later?",
        "answer": "Sometimes, but leaving detention until late can force redesign if there is no space, level difference or maintenance access for the preferred solution."
      }
    ],
    "sections": [
      {
        "heading": "When to resolve the stormwater strategy",
        "body": [
          "Stormwater is one of the earliest practical constraints developers should test because it can change layout, levels, cost and approval risk. Many owners only look closely after someone mentions detention, lawful point of discharge or a council information request.",
          "Sunshine Coast stormwater guidance includes flooding and stormwater management expectations, Stormwater Management Code references, PSPDW SC6.14 drainage-design notes and detention implementation guidance. The practical question is how those requirements affect the actual site layout."
        ]
      },
      {
        "heading": "What a stormwater management plan has to answer",
        "body": [
          "A stormwater management plan needs to explain how the development handles quantity, quality, lawful discharge, flooding, overland flow and ongoing maintenance. For many projects, the key question is whether post-development runoff can be managed without worsening impacts on other land or creating infrastructure Council does not want to inherit.",
          "Council stormwater guidance expects stormwater assets to be effective and responsive over their design life, avoid becoming a burden or liability for Council, and be informed by current models, mapping and datasets. The report should demonstrate performance, ownership and a practical maintenance arrangement."
        ],
        "links": [
          {
            "label": "Council flooding and stormwater guidance and updates",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
          }
        ]
      },
      {
        "heading": "Lawful point of discharge comes first",
        "body": [
          "A lawful point of discharge is the practical anchor for the stormwater strategy. If there is no clear discharge path, the rest of the design becomes harder. Detention, easements, inter-allotment drainage, pump systems or redesign may all enter the conversation.",
          "PSPDW SC6.14.3.3 addresses drainage design requirements, while SC6.14.3.5 deals with detention basin requirements. Those references show stormwater is not just a pipe-size exercise. It is about system behaviour, ownership, maintenance and risk."
        ]
      },
      {
        "heading": "When detention or water quality may matter",
        "body": [
          "Detention may be required where development increases runoff or where council policy expects peak-flow management. Water quality controls may also be relevant depending on development type, site size and receiving environment.",
          "The early feasibility question is where the stormwater infrastructure can physically go. A detention basin, tank, bio-retention area or proprietary treatment device still needs space, levels, access and a maintenance story. If the concept leaves no room for it, the concept is not finished."
        ]
      },
      {
        "heading": "What to look for when reviewing the report",
        "body": "A stormwater management plan should connect the proposed layout to an understandable drainage strategy. The reader should be able to locate catchments, outlets, storage or treatment and major flow paths on the drawings. Supporting calculations need a stated design basis and inputs appropriate to the site. The plan should also explain who maintains the infrastructure and how it can be accessed. If the layout changes after the report is written, check whether its assumptions still match the development being lodged or built.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Design basis",
              "Applicable guidance, survey, catchments and assessment assumptions.",
              "Make the calculation inputs traceable."
            ],
            [
              "Proposed system",
              "Outlet, drainage, quantity and quality measures as applicable.",
              "Show the physical space and levels required."
            ],
            [
              "Operation and change",
              "Maintenance responsibilities and effects of revised layouts.",
              "Keep the strategy usable beyond the application stage."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore stormwater and drainage design",
            "href": "/services/stormwater-drainage-design"
          },
          {
            "label": "Stormwater engineer Sunshine Coast: when development needs drainage advice",
            "href": "/insights/stormwater-engineer-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Ask for an explanation of the controlling constraint in plain language: outlet level, discharge rights, storage space, treatment or flood interaction.",
          "Check the latest Council guidance and updates are considered. Do not accept a model solely because it was used successfully on another site.",
          "Agree which design details are resolved now and which follow at operational works. Deferring detail should not leave feasibility unproven."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review stormwater constraints, identify lawful discharge options, prepare stormwater management plans, coordinate with planners and architects, and support operational works or condition-response packages."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "stormwater-drainage-design",
    "cta": {
      "label": "Stormwater and drainage design",
      "body": "Send the survey, concept and relevant conditions so the drainage question can be scoped."
    },
    "relatedSlugs": [
      "stormwater-engineer-sunshine-coast",
      "lawful-point-of-discharge-why-it-can-make-or-break-a-development",
      "flood-overlays-and-development-risk-on-the-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Council flooding and stormwater guidance and updates",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
      }
    ]
  },
  {
    "slug": "landslide-hazard-and-steep-land-overlay-sunshine-coast-development",
    "title": "Landslide hazard and steep land overlay Sunshine Coast: development checks",
    "description": "What developers should check when a Sunshine Coast site is affected by the landslide hazard and steep land overlay, including slope, geotechnical risk, access and earthworks.",
    "date": "2026-06-30",
    "category": "Planning",
    "keywords": [
      "landslide hazard overlay Sunshine Coast",
      "steep land overlay Sunshine Coast",
      "Sunshine Coast steep site development",
      "geotechnical assessment Sunshine Coast",
      "civil engineer steep land"
    ],
    "faqs": [
      {
        "question": "What slope can trigger steep land concern?",
        "answer": "The Sunshine Coast Planning Scheme references steep land as slopes of 15% or greater on the Landslide Hazard and Steep Land Overlay Maps, but site-specific mapping and assessment should be checked."
      },
      {
        "question": "Do I always need a geotechnical report?",
        "answer": "Not always for every early conversation, but mapped steep land or landslide risk may require geotechnical input for assessment and design."
      },
      {
        "question": "What is the biggest civil issue on steep sites?",
        "answer": "Driveway grade, retaining, stormwater velocity and safe construction access are common issues that can materially change feasibility."
      }
    ],
    "sections": [
      {
        "heading": "Why steep land is a separate feasibility problem",
        "body": [
          "Steep land can quietly destroy a development budget. It changes driveway grades, earthworks, retaining, drainage, construction access and sometimes minimum lot-size outcomes. On the Sunshine Coast, it can also trigger the Landslide hazard and steep land overlay.",
          "The Sunshine Coast Planning Scheme identifies landslide hazard areas and steep land through the Landslide Hazard and Steep Land Overlay Maps. Steep land can include slopes of 15% or greater, and mapped sites may require planning scheme policy guidance and site-specific geotechnical assessment."
        ]
      },
      {
        "heading": "What the overlay is trying to avoid",
        "body": [
          "The overlay is about risk to people, property and infrastructure. The planning scheme points to avoiding development on steep land where risk is unacceptable and ensuring any necessary stabilisation measures identified by site-specific geotechnical assessment are implemented.",
          "For developers, this means slope is not just a contour-line inconvenience. It can determine whether the layout, access and earthworks are acceptable."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil issues to check early",
        "body": [
          "Check driveway grade, road tie-in levels, retaining wall heights, cut and fill, building-pad levels, stormwater velocity, scour, construction access and whether the site can be drained without concentrating flow onto neighbours.",
          "Compare layouts that follow the contours with layouts requiring major excavation. Record retaining, temporary works and drainage implications before selecting the building levels."
        ]
      },
      {
        "heading": "What information helps",
        "body": [
          "A feature and level survey is extremely valuable. Add the Development.i site report, overlay mapping, any geotechnical information, photos of the site and surrounding roads, and the proposed development yield.",
          "With those inputs, CivilCity can quickly flag whether the site needs deeper geotechnical advice, a different access strategy, or a lower-impact layout."
        ]
      },
      {
        "heading": "Coordinate geotechnical advice with the actual earthworks",
        "body": "A geotechnical assessment is most useful when it tests the proposed layout and works, rather than an outdated sketch. Moving a building pad or increasing a cut can change the assumptions that were assessed. The civil and geotechnical teams should agree the information needed for access, retaining, surface water and subsurface drainage. Temporary excavation and construction access also matter; a finished retaining-wall arrangement does not describe how the slope will be managed during the build.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Concept levels",
              "Survey, proposed cuts and fills, access alignment.",
              "Scope site investigation around the intended works."
            ],
            [
              "Retaining and drainage",
              "Geotechnical recommendations and coordinated design.",
              "Avoid directing water into an unsuitable slope or structure."
            ],
            [
              "Construction method",
              "Temporary works, access and staging constraints.",
              "Include practical delivery requirements in tendering."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore early civil engineering advice",
            "href": "/services/civil-engineering-advice"
          },
          {
            "label": "How overlays affect your Sunshine Coast property",
            "href": "/insights/how-overlays-affect-your-sunshine-coast-property"
          }
        ]
      },
      {
        "heading": "A slope-responsive option can change the scope",
        "body": "Consider two concepts for a sloping parcel: one uses a broad level pad with substantial cut and retaining, while the other steps the development with the land. Compare driveway transitions, drainage, retaining interfaces and construction access before choosing between them. The geotechnical consultant needs the proposed works for each option to assess the relevant risks. A lower earthworks volume alone does not establish an acceptable design, but it can change the investigation and construction questions. Record which option needs temporary support, difficult access or ongoing drainage maintenance so those obligations remain visible in the feasibility model."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide the geotechnical consultant with the latest civil concept and advise of later changes to levels or footprint.",
          "Compare a contour-responsive layout with a heavily benched option before selecting building levels. Record earthworks and retaining implications.",
          "Clarify the boundary between civil design, structural retaining design and geotechnical advice, including who reviews construction changes."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can test steep-site feasibility, coordinate with geotechnical consultants, review access and drainage constraints, and shape civil documentation so the access, earthworks and drainage respond to the surveyed landform."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "civil-engineering-advice",
    "cta": {
      "label": "Early civil engineering advice",
      "body": "Share the site report and concept to identify the civil investigations that matter."
    },
    "relatedSlugs": [
      "how-overlays-affect-your-sunshine-coast-property",
      "development-i-sunshine-coast-how-developers-can-research-nearby-approvals",
      "subdivision-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "bushfire-hazard-overlay-sunshine-coast-subdivision-development-checks",
    "title": "Bushfire hazard overlay Sunshine Coast: subdivision and development checks",
    "description": "How the Sunshine Coast bushfire hazard overlay can affect subdivision, access, building envelopes, setbacks and development application material.",
    "date": "2026-06-30",
    "category": "Planning",
    "keywords": [
      "bushfire hazard overlay Sunshine Coast",
      "Sunshine Coast bushfire development",
      "bushfire overlay subdivision Sunshine Coast",
      "building envelope bushfire Sunshine Coast",
      "civil engineer bushfire access"
    ],
    "faqs": [
      {
        "question": "Does bushfire mapping mean a site cannot be developed?",
        "answer": "Not automatically. It means the hazard and relevant assessment benchmarks need to be checked and the design may need a specific response."
      },
      {
        "question": "Why does a civil engineer care about bushfire?",
        "answer": "Because bushfire responses can affect access, road layout, turnarounds, water supply, building envelopes and earthworks."
      },
      {
        "question": "Should bushfire be checked before subdivision layout?",
        "answer": "Yes. It can affect lot layout and access strategy, so it should be reviewed before the concept plan is treated as fixed."
      }
    ],
    "sections": [
      {
        "heading": "Why bushfire belongs in the civil feasibility conversation",
        "body": [
          "Bushfire is often treated as a specialist planning or bushfire-consultant topic, but it affects civil layout. Access, road design, lot layout, building envelopes, vegetation retention, water supply and emergency movement can all become relevant.",
          "The Sunshine Coast Planning Scheme includes Part 8 Bushfire hazard overlay code material, Part 5 assessment triggers and SC6.7 planning scheme policy guidance. Biodiversity overlay provisions can also interact with bushfire constraints and may require greater setbacks in some circumstances."
        ]
      },
      {
        "heading": "The overlay can change the project shape",
        "body": [
          "For subdivision, bushfire constraints can influence where lots and building envelopes sit, how access roads are designed, whether vegetation is retained or cleared, and what supporting reports are needed. A layout that looks efficient on paper may become awkward if bushfire separation, access and ecological constraints pull in different directions.",
          "SC6.7 planning scheme policy material includes advice about achieving outcomes in the Bushfire hazard overlay code and guidance about information that may be required to support a development application. Use the specialist assessment to define constraints on a shared site plan."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil checks to run with bushfire advice",
        "body": [
          "Check whether the access arrangement supports emergency movement, whether road widths and turnarounds are practical, whether water supply arrangements are clear, and whether building envelopes can sit outside the most constrained parts of the site.",
          "If biodiversity, waterways, steep land or flood overlays also apply, the design needs a coordinated response. Moving a driveway to solve bushfire access can create stormwater, earthworks or ecological impacts elsewhere."
        ]
      },
      {
        "heading": "When to involve consultants",
        "body": [
          "For mapped bushfire hazard sites, involve the planner, bushfire consultant and civil engineer early. The team can then test whether the lot layout, access, services and stormwater strategy are compatible with the bushfire response.",
          "A shared constraints plan helps identify conflicts between emergency access, vegetation retention, drainage and building envelopes before separate reports are finalised."
        ]
      },
      {
        "heading": "Check the civil layout against the specialist response",
        "body": "The bushfire consultant establishes the site-specific assessment and recommendations within their scope. The civil team then needs to test whether access, turning, water-supply arrangements and earthworks can accommodate that response. On a vegetated sloping property, widening an access route may affect clearing, retaining and drainage. Bring ecological and planning advice into the same discussion where relevant. Do not treat one discipline’s recommended line on a plan as proof that it can be built or approved.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Building envelope",
              "Bushfire advice and vegetation constraints.",
              "Agree an area that can also be accessed and serviced."
            ],
            [
              "Emergency access",
              "Required operating arrangement and surveyed geometry.",
              "Test grades, turning and construction implications."
            ],
            [
              "Water and maintenance",
              "Specialist requirements and service strategy.",
              "Clarify access and ongoing responsibilities."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore early civil engineering advice",
            "href": "/services/civil-engineering-advice"
          },
          {
            "label": "How overlays affect your Sunshine Coast property",
            "href": "/insights/how-overlays-affect-your-sunshine-coast-property"
          }
        ]
      },
      {
        "heading": "Resolve competing spatial requirements before final reports",
        "body": "A concept can appear to satisfy individual requirements while allocating the same area to vegetation retention, access and another purpose. Ask the consultant team to mark these requirements on one plan with clear dimensions and ownership assumptions. If an access route changes, check whether the change affects the specialist assessment or requires additional clearing and earthworks. Resolve that conflict before lodging final reports. The coordinated plan becomes the reference for the subsequent engineering design rather than a collection of separate recommendations that the contractor must reconcile."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Use a shared base plan for vegetation, buildings, roads, services and drainage so conflicts are visible early.",
          "Ask specialists to state the assumptions they need the civil design to satisfy, rather than leaving those interfaces implicit.",
          "Recheck the coordinated response when the lot layout changes. A new boundary or building envelope can alter the feasibility of the original measures."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can work with bushfire and planning consultants to test access, road geometry, stormwater, services and construction constraints for Sunshine Coast subdivision and development sites affected by bushfire mapping."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "civil-engineering-advice",
    "cta": {
      "label": "Early civil engineering advice",
      "body": "Share the site report and concept to identify the civil investigations that matter."
    },
    "relatedSlugs": [
      "how-overlays-affect-your-sunshine-coast-property",
      "development-i-sunshine-coast-how-developers-can-research-nearby-approvals",
      "subdivision-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "acid-sulfate-soils-overlay-sunshine-coast-earthworks-development-risk",
    "title": "Acid sulfate soils overlay Sunshine Coast: earthworks and development risk",
    "description": "A plain-English guide to acid sulfate soils overlay checks on the Sunshine Coast, including excavation, filling, low-lying land and development application risk.",
    "date": "2026-06-30",
    "category": "Earthworks",
    "keywords": [
      "acid sulfate soils overlay Sunshine Coast",
      "Sunshine Coast acid sulfate soils",
      "earthworks acid sulfate soils",
      "ASS investigation report Sunshine Coast",
      "development earthworks Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is Area 1 in the acid sulfate soils overlay?",
        "answer": "The Sunshine Coast Planning Scheme refers to Area 1 as land at or below 5 metres AHD. Always check the current overlay mapping for the specific site."
      },
      {
        "question": "Can a small project trigger acid sulfate soils assessment?",
        "answer": "It can if excavation, filling, trenching or other disturbance meets relevant triggers or occurs in sensitive mapped areas."
      },
      {
        "question": "Who should check this before construction?",
        "answer": "A planner, civil engineer and, where needed, geotechnical or environmental specialist should review the overlay and proposed earthworks."
      }
    ],
    "sections": [
      {
        "heading": "The hidden risk below the nice flat site",
        "body": [
          "Flat coastal land can look easy until earthworks, filling or service trenches trigger acid sulfate soils considerations. On the Sunshine Coast, the Acid sulfate soils overlay is one of those constraints buyers and small developers often notice too late.",
          "The Sunshine Coast Planning Scheme includes Part 8 Acid sulfate soils overlay material and Part 5 assessment triggers. The overlay mapping references Area 1 land at or below 5m AHD and Area 2 land above 5m AHD and below 20m AHD."
        ]
      },
      {
        "heading": "Check the disturbance, not just the map",
        "body": [
          "Ask the planner and soil specialist to check the current overlay provisions against the proposed excavation, filling and dewatering. Location, elevation, disturbance volume and depth can all matter. A site-wide bulk earthworks figure may overlook deep local trenches or drainage structures.",
          "Prepare an earthworks sketch identifying where material will be excavated, stockpiled, reused or taken off site. This lets the specialist scope investigation around the actual works instead of a generic description of the property."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Why civil design matters",
        "body": [
          "Acid sulfate soils can affect earthworks methodology, site levels, trenching, dewatering, treatment, construction cost and reporting. The civil design should understand the likely cut and fill volumes before the project assumes the overlay is a minor paperwork item.",
          "Consider shallower service routes or revised levels where feasible. Obtain specialist advice before disturbing suspect material, so treatment, testing and disposal can be included in the tender scope."
        ]
      },
      {
        "heading": "What to check before purchase or DA",
        "body": [
          "Review the Development.i report, overlay mapping, approximate AHD levels, proposed earthworks volumes, service routes and whether the development needs deep excavation. If the site sits in low-lying coastal areas, do not skip the check just because the land looks simple.",
          "If triggers are likely, the project may need specialist soil investigation and an acid sulfate soils management approach."
        ]
      },
      {
        "heading": "Bring investigation findings into the contractor’s scope",
        "body": "A soil investigation has limited value if the construction package does not explain how its findings affect excavation, stockpiling, water management and disposal. Ask the environmental or geotechnical specialist to define the appropriate management and verification requirements. The civil team can then coordinate levels and trench routes with that advice. A shallow overall cut does not rule out a deeper local disturbance at a drainage pit or sewer connection. Identify those locations before tender rather than discovering the scope during excavation.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Investigation",
              "Proposed disturbance locations and depths.",
              "Target the assessment to actual construction activity."
            ],
            [
              "Design response",
              "Possible level or alignment changes.",
              "Compare options that reduce avoidable disturbance."
            ],
            [
              "Construction controls",
              "Specialist management, testing and disposal requirements.",
              "Make responsibilities and allowances visible in the tender."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore civil design and documentation",
            "href": "/services/detailed-civil-engineering-design-and-documentation"
          },
          {
            "label": "Landslide hazard and steep land overlay Sunshine Coast: development checks",
            "href": "/insights/landslide-hazard-and-steep-land-overlay-sunshine-coast-development"
          }
        ]
      },
      {
        "heading": "Check local excavations within an otherwise shallow project",
        "body": "A development with modest overall earthworks may still include deeper pits, connections or trenches. Ask the civil designer to identify those local depths for the specialist, along with likely groundwater interaction and temporary excavations. The investigation and management scope should follow the actual disturbance. If a service connection moves after the assessment, notify the specialist rather than assuming the earlier advice applies unchanged. Capture any revised requirements in the contractor’s instructions and closeout records so the final evidence reflects the work actually carried out."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide preliminary earthworks quantities and service trench information to the specialist, with assumptions clearly marked.",
          "Ask how suspect material and water will be managed if encountered outside the investigated area. Include the escalation process in the works scope.",
          "Keep verification records with the closeout file. Confirm the specialist’s required evidence before material is moved or covered."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can test early earthworks implications, coordinate with geotechnical or environmental specialists, and shape civil design to reduce avoidable excavation, filling and construction risk."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "detailed-civil-engineering-design-and-documentation",
    "cta": {
      "label": "Civil design and documentation",
      "body": "Send survey, proposed levels and specialist reports to coordinate the civil design."
    },
    "relatedSlugs": [
      "landslide-hazard-and-steep-land-overlay-sunshine-coast-development",
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "transport-and-parking-code-sunshine-coast-small-development-checks",
    "title": "Transport and parking code Sunshine Coast: small development checks",
    "description": "How Sunshine Coast developers should think about parking, service vehicles, access, road hierarchy and transport code issues before lodging a small development application.",
    "date": "2026-06-30",
    "category": "Access",
    "keywords": [
      "transport and parking code Sunshine Coast",
      "Sunshine Coast parking requirements development",
      "service vehicle access Sunshine Coast",
      "road hierarchy Sunshine Coast",
      "swept path Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Do small developments need swept path checks?",
        "answer": "Often yes, especially where access is constrained, service vehicles are needed, or council needs confidence vehicles can enter and exit safely."
      },
      {
        "question": "Is parking just a town planning issue?",
        "answer": "No. Planning sets requirements, but civil and traffic design determine whether the spaces and manoeuvring actually work."
      },
      {
        "question": "When should access be checked?",
        "answer": "At concept stage, before the building footprint, landscaping and services lock out the best access solution."
      }
    ],
    "sections": [
      {
        "heading": "Parking is not a spreadsheet-only problem",
        "body": [
          "Parking ratios matter, but the civil issue is whether vehicles can enter, turn, park, service the site and leave safely. On constrained Sunshine Coast sites, transport compliance often lives or dies in the geometry.",
          "The Sunshine Coast Transport and Parking Code section 9.4.8 includes service vehicle requirements, public transport and cycling references, and links to SC6.17 road hierarchy standards. Those details can affect access design even on smaller projects."
        ]
      },
      {
        "heading": "What the code is trying to achieve",
        "body": [
          "The Transport and Parking Code refers to providing parking and service vehicle arrangements in accordance with the planning scheme policy. It includes development involving residential, business, community, industrial, sport and recreation and other activity groups.",
          "For developers, that means the access design should be tested by use, vehicle type, intensity and site context. A small commercial tenancy, townhouse project and childcare centre can have very different vehicle problems."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Road hierarchy changes the design context",
        "body": [
          "Table SC6.17B includes urban transport corridor data such as street types, typical catchments, traffic volumes, design speeds and reserve widths. Road context matters because driveway location, sight distance, manoeuvring and frontage works are not judged in a vacuum.",
          "If the site fronts a busier road or constrained street, early access advice is valuable before the building layout consumes the only workable driveway location."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "Common mistakes include counting parking spaces without checking swept paths, ignoring service vehicles, assuming tandem parking will be acceptable, placing bin storage where collection cannot work, and leaving accessible parking or pedestrian paths to the last minute.",
          "Resolve these interfaces on the same drawing revision before lodging; a parking count alone does not demonstrate a usable layout."
        ]
      },
      {
        "heading": "Test the operating layout after counting spaces",
        "body": "A parking schedule is one part of the assessment. The plan should also show how drivers reach spaces, turn, encounter pedestrians and receive deliveries or waste collection. Different uses can need different operating scenarios even on the same site. Ask the planner or traffic specialist to confirm the applicable parking and servicing requirements, then coordinate geometry with civil levels. Avoid quoting a single ratio without its use classification, assessment context and any relevant local provisions.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Parking supply",
              "Applicable requirements and proposed allocation.",
              "Check use, visitor and accessible-parking needs."
            ],
            [
              "Vehicle movement",
              "Design vehicles, occupied bays and access geometry.",
              "Demonstrate the operating scenario, not an empty car park."
            ],
            [
              "People and levels",
              "Pedestrian routes, gradients and drainage.",
              "Coordinate safety, access and surface design."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore access and parking investigations",
            "href": "/services/car-parking-planning-and-investigations"
          },
          {
            "label": "Driveway design on the Sunshine Coast: what a civil engineer checks",
            "href": "/insights/driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks"
          }
        ]
      },
      {
        "heading": "Use an occupied-site scenario",
        "body": "For a small commercial site, test a delivery while customer spaces are occupied and pedestrians are using the entrance. Identify whether the delivery vehicle blocks parking, crosses a pedestrian route or relies on reversing into the road. Then coordinate the proposed response with the planner or traffic specialist and the civil designer. A revised bay allocation, servicing position or access arrangement can affect landscape, drainage and finished levels. Show the selected operating scenario on the final plan so the assessment and construction teams understand how the site is intended to function rather than interpreting a vehicle path in isolation."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Include delivery, waste and pedestrian movements in the design brief, not only the customer or resident vehicle.",
          "Check gates, columns, landscaping and bin enclosures on the swept-path drawing. These features can remove otherwise usable clearance.",
          "Identify where formal traffic advice is needed beyond civil geometry, particularly for road-network or access impacts."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review access, parking layout, swept paths, driveway grades, frontage constraints and service vehicle needs, then coordinate with traffic engineers or planners where a formal transport response is needed."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "car-parking-planning-and-investigations",
    "cta": {
      "label": "Access and parking investigations",
      "body": "Share the layout, survey and intended vehicle movements to define the access checks."
    },
    "relatedSlugs": [
      "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
      "driveway-long-sections-and-cross-sections-explained",
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "small-lot-housing-sunshine-coast-planning-civil-feasibility-checks",
    "title": "Small lot housing Sunshine Coast: planning and civil feasibility checks",
    "description": "What to check before pursuing small lot housing on the Sunshine Coast, including lot dimensions, slope, access, parking, services and stormwater.",
    "date": "2026-06-30",
    "category": "Subdivision",
    "keywords": [
      "small lot housing Sunshine Coast",
      "Sunshine Coast small lot subdivision",
      "small lot civil design Sunshine Coast",
      "minimum lot dimensions Sunshine Coast",
      "small lot housing code Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Can a local plan change minimum lot requirements?",
        "answer": "It can vary some minimum lot-size and dimension outcomes, but the planning scheme notes this does not override larger lot-size requirements on sloping sites where those apply."
      },
      {
        "question": "Why are small lots harder civil-design projects?",
        "answer": "Because access, parking, services, stormwater and retaining have less room to work, so small layout errors create bigger consequences."
      },
      {
        "question": "Should small-lot feasibility include levels?",
        "answer": "Yes. Levels are critical for driveway grades, retaining, drainage and building-pad design."
      }
    ],
    "sections": [
      {
        "heading": "Small lots need more discipline, not less",
        "body": [
          "Small lot housing can improve yield, but it removes tolerance. Driveways, parking, bin storage, services, stormwater and building envelopes all compete for the same limited space. Check these competing uses at the concept stage, when the lot boundaries can still move.",
          "Sunshine Coast Part 9 development-code material notes that local plans or structure plans may vary minimum lot-size requirements, but do not override larger lot-size requirements on sloping sites where relevant. That is an important warning for small-lot feasibility."
        ]
      },
      {
        "heading": "Lot size and dimensions are only the opening move",
        "body": [
          "Table 9.4.4.3.2 includes minimum lot-size and dimension concepts, with slope categories affecting outcomes. It also points out that local plans or structure plans can vary some requirements.",
          "That means the same apparent yield may behave differently depending on local plan area, slope, frontage, road context and overlay mapping. Compare the nominal yield with a serviced layout that includes driveway levels, drainage and retaining footprints."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil design pressure points",
        "body": [
          "Small lots are sensitive to driveway grades, garage levels, pedestrian access, retaining, inter-allotment drainage, roofwater discharge, service alignments and waste collection. A minor level change can cascade into wall heights, driveway non-compliance and awkward drainage.",
          "The civil strategy should be tested before the subdivision plan is treated as final. Early engineering can often rescue yield by setting sensible pad levels, access locations and drainage corridors."
        ]
      },
      {
        "heading": "What to review before lodging",
        "body": [
          "Check the local plan, zone, overlays, slope, lot dimensions, rectangle requirements, frontage, access type, servicing path and stormwater route. Also compare nearby approvals, but do not assume a neighbouring approval means your site has the same constraints.",
          "Good small-lot design is not about squeezing every centimetre. It is about leaving enough room for the unglamorous infrastructure that makes the project approvable and buildable."
        ]
      },
      {
        "heading": "Reserve infrastructure space before drawing the final boundaries",
        "body": "Small-lot feasibility should test the intended dwelling as well as the lot plan. A parcel may look efficient until parking, bin storage, drainage and a service corridor are added. On sloping land, retaining can consume more space and constrain later building work. Coordinate the subdivision concept with a plausible building envelope, without implying approval for an unassessed house design. The objective is a lot that can be used as intended, not simply a higher number of polygons on a plan.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Building and access",
              "Indicative envelope, driveway levels and parking.",
              "Check the lot’s intended use remains practical."
            ],
            [
              "Services and drainage",
              "Routes, easements and maintenance access.",
              "Prevent infrastructure from occupying the only usable building area."
            ],
            [
              "Boundaries and retaining",
              "Levels, wall footprint and ownership.",
              "Resolve interfaces before cadastral boundaries are fixed."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Check what happens when the future house is built",
        "body": "The subdivision should not rely on a future builder discovering a different driveway or drainage strategy. Test a plausible building location and levels against the proposed lot and service arrangement. If a retaining wall or easement limits that location, make the constraint visible in the feasibility output and relevant documentation. Ask the team which items are fixed by the subdivision works and which remain for the eventual building design. This distinction helps owners understand the lot they are creating and prevents assumed flexibility from disappearing after construction."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Show a credible house and access arrangement when testing constrained lots, while distinguishing feasibility sketches from approved building plans.",
          "Coordinate retaining-wall design responsibilities and any boundary rights with the surveyor and legal adviser.",
          "Compare the cost and usability of the proposed lots rather than treating nominal yield as the only measure of success."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can work with surveyors, planners and designers to test small-lot layouts, levels, access, drainage, services and operational works requirements for Sunshine Coast projects."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "what-consultants-do-you-need-for-a-sunshine-coast-subdivision"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      }
    ]
  },
  {
    "slug": "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
    "title": "Swept path analysis on the Sunshine Coast: when does development need it?",
    "description": "A developer-friendly guide to swept path analysis for Sunshine Coast driveways, townhouse sites, rear lots, parking layouts and service vehicle access.",
    "date": "2026-06-24",
    "category": "Access",
    "keywords": [
      "swept path analysis Sunshine Coast",
      "swept path engineer Sunshine Coast",
      "vehicle access design Sunshine Coast",
      "turning template Sunshine Coast",
      "waste truck access Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is swept path analysis?",
        "answer": "It is a vehicle movement test that shows the space a vehicle needs to enter, turn, pass through or exit a site using a particular vehicle template."
      },
      {
        "question": "When is swept path analysis usually needed?",
        "answer": "It is most useful where access is tight, a site has rear lots or townhouses, a waste truck or service vehicle must enter, or parking and turning areas are constrained."
      },
      {
        "question": "Can swept path analysis change a development layout?",
        "answer": "Yes. It can affect driveway width, aisle layout, turning heads, parking bay positions, waste collection areas and sometimes building footprint."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Swept path analysis checks whether vehicles can actually move through a proposed access layout. On the Sunshine Coast, it is especially useful for townhouse developments, rear lots, battle-axe subdivisions, small commercial sites, waste collection access and tight driveways.",
          "It is best done before a layout is frozen, because the result can change the shape of the site."
        ]
      },
      {
        "heading": "What the analysis shows",
        "body": [
          "A swept path drawing shows the body path and wheel path of a selected design vehicle. That could be a passenger car, service vehicle, waste vehicle, delivery van, small rigid truck or another vehicle relevant to the project.",
          "The purpose is simple: prove the vehicle can enter, move, turn and exit without unrealistic manoeuvres or clashes with buildings, kerbs, fences, parking bays or landscape areas."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Where it matters most",
        "body": [
          "Swept paths are particularly valuable for shared driveways, basement or podium entries, rear-lot access handles, visitor parking, townhouse courtyards, waste collection points and constrained commercial car parks.",
          "Small sites are often the hardest because every metre is already competing with yield, landscaping, stormwater and private open space."
        ]
      },
      {
        "heading": "What can go wrong if it is left late",
        "body": [
          "Late swept path checks can force bay removals, wider driveways, different bin storage, changed building corners, revised retaining walls or awkward turning areas. For developers, that can mean lost yield or a redraw after consultants thought the layout was settled.",
          "Early swept path analysis is cheap compared with redesigning a lodged or approved layout."
        ]
      },
      {
        "heading": "What to provide for a swept path review",
        "body": [
          "Useful inputs include the proposed site plan, survey, driveway grades if available, intended vehicle types, waste collection assumptions, parking layout and any council conditions or planning advice already received.",
          "If the vehicle type is uncertain, CivilCity can help identify which vehicle movements are worth testing first."
        ]
      },
      {
        "heading": "What makes a swept path useful for a decision?",
        "body": "A swept path should state the design vehicle and show the manoeuvre being tested. The coloured path is only useful when the underlying layout is reliable. A vehicle envelope passing through a future gate pier or landscape bed has not demonstrated workable access. On a townhouse site, test visitor parking with the neighbouring bays occupied and show how a collection vehicle approaches its stopping position. Horizontal movement also does not demonstrate clearance on a steep driveway; levels and transitions need their own check.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Vehicle selection",
              "Document dimensions and the service being tested.",
              "A passenger-car check cannot answer a waste-truck question."
            ],
            [
              "Operating scenario",
              "Show direction, turns, parked vehicles and gate positions.",
              "Make the actual manoeuvre repeatable and understandable."
            ],
            [
              "Physical envelope",
              "Coordinate walls, columns, landscaping and vertical geometry.",
              "Check more than the wheel path."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore access and parking investigations",
            "href": "/services/car-parking-planning-and-investigations"
          },
          {
            "label": "Driveway design on the Sunshine Coast: what a civil engineer checks",
            "href": "/insights/driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide the latest scaled site plan and identify the vehicle specified by a condition or servicing strategy. Explain any uncertainty before modelling starts.",
          "Ask the designer to report the changes required, not just provide a diagram. Lost parking, wider access or relocated bins may affect the planning proposal.",
          "Retest affected movements after material changes to walls, bays, gates or building corners. Keep the vehicle and drawing revision on the final sheet."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can test access layouts, prepare swept path diagrams and advise on practical design changes before the project loses flexibility.",
          "For small and medium developers, this is a targeted way to protect the layout from access problems that would otherwise appear late in assessment or construction documentation."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "car-parking-planning-and-investigations",
    "cta": {
      "label": "Access and parking investigations",
      "body": "Share the layout, survey and intended vehicle movements to define the access checks."
    },
    "relatedSlugs": [
      "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
      "driveway-long-sections-and-cross-sections-explained",
      "transport-and-parking-code-sunshine-coast-small-development-checks"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
    "title": "Driveway design on the Sunshine Coast: what a civil engineer checks",
    "description": "A practical Sunshine Coast driveway design guide covering grades, crossovers, sight distance, long sections, drainage and development approval risk.",
    "date": "2026-06-24",
    "category": "Access",
    "keywords": [
      "driveway design Sunshine Coast",
      "driveway engineer Sunshine Coast",
      "driveway long section Sunshine Coast",
      "driveway crossover Sunshine Coast",
      "steep driveway Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What makes a driveway difficult to design?",
        "answer": "Slope, road levels, boundary levels, sight distance, stormwater, footpath interfaces, crossover location, garage levels and the vehicle type all affect the design."
      },
      {
        "question": "Why would a driveway need a long section?",
        "answer": "A long section shows the driveway profile from the road to the parking or garage area, making grades and transitions visible in a way a plan view cannot."
      },
      {
        "question": "Should driveway design be checked before lodging a development application?",
        "answer": "Yes, especially on steep, narrow or rear-access sites. Driveway constraints can affect the whole site layout."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Driveway design on the Sunshine Coast is not just drawing a line from the road to the garage. A civil engineer checks whether the driveway can be safely accessed, practically graded, drained, constructed and coordinated with the road frontage and site layout.",
          "This matters for ordinary homeowners, duplex projects, rear lots, battle-axe subdivisions and townhouse sites."
        ]
      },
      {
        "heading": "What a civil engineer checks",
        "body": [
          "A driveway review usually looks at road level, boundary level, finished garage or parking level, maximum and minimum grades, transition grades, cross-fall, sight distance, vehicle turning, crossover position, stormwater flow, footpath or verge impacts, services and retaining edges.",
          "On development sites, the driveway also needs to work with parking layout, waste collection, pedestrian movement and emergency or service vehicle access where relevant."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Why Sunshine Coast sites can be tricky",
        "body": [
          "Many local sites have slope, constrained frontages, older road formations, infill development pressure, coastal drainage constraints or rear-lot access. A driveway that looks simple in plan can become awkward once the long section is drawn.",
          "Steep driveway grades can create scraping, visibility, drainage and construction problems. Flat driveways can create ponding or poor discharge. The workable solution is often in the level transitions."
        ]
      },
      {
        "heading": "Long sections and cross sections",
        "body": [
          "A driveway long section follows the driveway along its length so levels, grades and transitions can be checked. Cross sections show width, cross-fall, edge treatment, retaining needs and how the driveway sits relative to adjoining ground.",
          "These drawings help prevent late surprises. They also give planners, certifiers, builders and council a clearer view of whether the driveway is actually buildable."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "The common mistakes are setting the garage level before the driveway is tested, assuming the road frontage is flat, ignoring stormwater flow across the driveway, leaving sight distance until late, and forgetting that service vehicles may need to enter or turn on the site.",
          "For subdivision and townhouse projects, driveway geometry should be tested before the lot layout or building footprint is locked in."
        ]
      },
      {
        "heading": "Brief the driveway as a three-dimensional connection",
        "body": "Illustrative scenario: a sloping Buderim site has enough driveway length in plan, but the proposed garage level creates an abrupt change near the boundary. Extending a transition can move the garage, retaining wall or parking space. Test these changes together before selecting a finished floor level. The critical design vehicle also matters: checking a passenger car does not establish suitability for a waste truck or emergency vehicle. The design should identify the applicable requirements and show how the geometry was tested, without relying on a universal grade quoted out of context.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Road to boundary",
              "Survey kerb, road, verge, footpath and crossover levels.",
              "Avoid scraping, drainage obstruction and unsafe pedestrian interfaces."
            ],
            [
              "Boundary to garage",
              "Draw grades, transitions and vertical clearance.",
              "Test vehicle clearance and the effect on building levels."
            ],
            [
              "Driveway edges",
              "Check crossfall, retaining, drainage and adjoining ground.",
              "Allow space for support and runoff management."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore access and parking investigations",
            "href": "/services/car-parking-planning-and-investigations"
          },
          {
            "label": "Driveway long sections and cross sections explained",
            "href": "/insights/driveway-long-sections-and-cross-sections-explained"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Supply a feature and level survey extending far enough into the road frontage to design the tie-in. Identify which boundary and garage levels are fixed.",
          "Confirm vehicles, parking use and turning needs with the designer. A shared residential driveway may have different operating needs from a single-house access.",
          "Ask for the proposed long section and critical cross sections with the access layout. Review fences, gates, walls and landscaping on the same revision."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can prepare or review driveway geometry, long sections, cross sections and access layouts for Sunshine Coast projects. The value is early clarity: can the access work, what needs to change, and what is likely to cost money?",
          "For a first review, send the address, survey if available, proposed layout and any known council or approval condition requirements."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "car-parking-planning-and-investigations",
    "cta": {
      "label": "Access and parking investigations",
      "body": "Share the layout, survey and intended vehicle movements to define the access checks."
    },
    "relatedSlugs": [
      "driveway-long-sections-and-cross-sections-explained",
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
      "transport-and-parking-code-sunshine-coast-small-development-checks"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "driveway-long-sections-and-cross-sections-explained",
    "title": "Driveway long sections and cross sections explained",
    "description": "A practical guide to driveway long sections and cross sections for Sunshine Coast homeowners, designers and developers.",
    "date": "2026-06-24",
    "category": "Access",
    "keywords": [
      "driveway long section Sunshine Coast",
      "driveway cross section Sunshine Coast",
      "driveway design Sunshine Coast",
      "steep driveway Sunshine Coast",
      "civil driveway drawings"
    ],
    "faqs": [
      {
        "question": "What is a driveway long section?",
        "answer": "It is a drawing that follows the driveway along its length, showing levels, grades and transitions from the road to the parking or garage area."
      },
      {
        "question": "What is a driveway cross section?",
        "answer": "It cuts across the driveway width to show cross-fall, edges, retaining, drainage and how the driveway sits against adjoining ground."
      },
      {
        "question": "Why do these drawings matter?",
        "answer": "They reveal whether the driveway can actually be built, drained and used safely, especially on sloping or constrained sites."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Driveway long sections and cross sections are the drawings that prove a driveway works in three dimensions. A plan view shows where the driveway goes. The sections show whether it can actually climb, fall, drain and meet the road or garage properly.",
          "For Sunshine Coast sites with slope, narrow frontage or rear access, these drawings can be the difference between a workable access and a redesign."
        ]
      },
      {
        "heading": "What the long section shows",
        "body": [
          "The long section shows the driveway profile from the road frontage through to the parking area or garage. It sets out road levels, boundary levels, grade changes, transitions, crests, sags and finished levels.",
          "This is where scraping risk, excessive slope, poor transitions and awkward garage levels become visible."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "What the cross section shows",
        "body": [
          "The cross section shows driveway width, cross-fall, pavement shape, retaining needs, edge conditions, drainage channels and the relationship to adjoining ground.",
          "It is especially useful where the driveway cuts across a slope or sits close to boundaries, buildings, fences or landscape areas."
        ]
      },
      {
        "heading": "When to request them",
        "body": [
          "Request sections early for steep sites, rear lots, battle-axe access, townhouse projects, basement or podium access, or any site where road level and building level are not close.",
          "They should be prepared before garage levels, finished floor levels or subdivision access handles are treated as fixed."
        ]
      },
      {
        "heading": "How to read the drawing at a design meeting",
        "body": "Follow the driveway from the road to the destination using its chainages, the distances measured along the alignment. Compare existing ground with the proposed surface, then locate each grade change. The long section shows the vertical journey; a cross section explains what happens sideways at a particular location. If the drive is beside a boundary, the cross section may reveal retaining or drainage works that are not obvious in plan. Ask the designer to explain the critical vehicle-clearance check and the levels still awaiting confirmation.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Long section",
              "Existing and proposed levels, grades and transition lengths.",
              "Can the nominated vehicle negotiate the vertical changes?"
            ],
            [
              "Cross section",
              "Width, crossfall, wall or batter and adjoining ground.",
              "Where do runoff and structural support fit?"
            ],
            [
              "Plan view",
              "Alignment, boundaries, gates and parking.",
              "Does the three-dimensional design match the latest layout?"
            ]
          ]
        },
        "links": [
          {
            "label": "Explore access and parking investigations",
            "href": "/services/car-parking-planning-and-investigations"
          },
          {
            "label": "Driveway design on the Sunshine Coast: what a civil engineer checks",
            "href": "/insights/driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks"
          }
        ]
      },
      {
        "heading": "Use the sections to resolve a level conflict",
        "body": "If a proposed garage level produces an abrupt driveway transition, ask the designer to compare moving the garage level, changing the alignment and adjusting the transition length. Check each option against parking, drainage and boundary retaining. The plan and sections should be revised together: a workable vertical profile on an outdated alignment is not a coordinated design. Before construction, confirm that the survey and issued drawings use the same datum and that the contractor understands the setting-out levels. If actual frontage conditions differ, obtain design direction before adjusting levels on site, because a small local change may affect the remaining profile."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Check the datum, survey date and drawing revision. Mixing assumed garage levels with a different survey datum can make an apparently precise section misleading.",
          "Mark the road tie-in, boundary, gate and garage on the section. Ask which points are fixed and what moving them changes elsewhere in the design.",
          "Review sections through pinch points rather than only a typical detail. A retaining wall or service conflict may occur at one specific chainage."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can prepare and review driveway long sections and cross sections to test grades, levels, drainage and buildability.",
          "For homeowners and small developers, this gives a clear answer to a practical question: will the driveway actually work once it leaves the paper?"
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "car-parking-planning-and-investigations",
    "cta": {
      "label": "Access and parking investigations",
      "body": "Share the layout, survey and intended vehicle movements to define the access checks."
    },
    "relatedSlugs": [
      "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
      "transport-and-parking-code-sunshine-coast-small-development-checks"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "secondary-driveways-on-the-sunshine-coast-can-you-add-another-access",
    "title": "Secondary driveways on the Sunshine Coast: can you add another access?",
    "description": "A Sunshine Coast guide to secondary driveways, second access points, crossovers, sight distance, frontage constraints and development design risk.",
    "date": "2026-06-24",
    "category": "Access",
    "keywords": [
      "secondary driveway Sunshine Coast",
      "second driveway Sunshine Coast",
      "driveway crossover Sunshine Coast",
      "additional driveway access",
      "driveway sight distance Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Can a property have a second driveway?",
        "answer": "Sometimes, but it depends on road frontage, safety, sight distance, services, drainage, parking layout, street trees, footpaths and council or road authority requirements."
      },
      {
        "question": "Why would a developer want a secondary driveway?",
        "answer": "It can help separate vehicle movements, improve service access, support construction staging, create better internal circulation or make a rear lot layout work."
      },
      {
        "question": "What can make a second driveway difficult?",
        "answer": "Narrow frontage, poor visibility, existing services, steep grades, drainage conflicts, street trees, kerb infrastructure and conflicts with parking or landscaping."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "A secondary driveway may be possible on a Sunshine Coast property, but it should be tested early. The question is not only whether another crossover physically fits. It is whether the access is safe, practical, drainable and consistent with the site layout.",
          "For developments, a second access can solve one problem while creating several new ones."
        ]
      },
      {
        "heading": "Why owners ask for one",
        "body": [
          "A second driveway may help with dual occupancy layouts, rear lots, service access, separate tenant access, construction staging, turning movements or safer internal circulation.",
          "It can also improve usability on larger properties where one driveway forces awkward manoeuvring or conflicts between residents, visitors and service vehicles."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "What must be checked",
        "body": [
          "Check road frontage, sight distance, driveway spacing, crossover location, footpath and verge conditions, kerb and channel, stormwater, service pits, street trees, parking impacts, driveway grade and vehicle swept paths.",
          "If the driveway connects to a busier road or constrained frontage, the access review becomes more important."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "A common mistake is drawing a second driveway late to fix a parking problem. Another is ignoring the verge, where services, footpaths, street trees and drainage often decide whether the access is practical.",
          "Secondary access should be tested as part of the whole layout, not treated as a simple add-on."
        ]
      },
      {
        "heading": "Compare a second crossover with better use of the first",
        "body": "A second driveway can improve access to a rear building or parking area, but it also changes the road frontage. Test whether it would conflict with a street tree, service pit, drainage, footpath or the visibility of nearby traffic. A shared internal arrangement may solve the owner’s need without a second road connection. On a state-controlled road, identify the relevant road authority pathway as well as Council requirements. Existing neighbouring crossovers are useful context, but do not establish entitlement to another access on your property.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Second road connection",
              "Frontage constraints, sight distance and road authority requirements.",
              "Establish whether the location is supportable before detailed design."
            ],
            [
              "Shared existing access",
              "Internal turning, driveway capacity and conflicts between users.",
              "Test whether the existing crossover can serve the proposal."
            ],
            [
              "Changed parking layout",
              "Destination levels, manoeuvring and pedestrian movement.",
              "Resolve the underlying access need with less frontage work."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore access and parking investigations",
            "href": "/services/car-parking-planning-and-investigations"
          },
          {
            "label": "Driveway design on the Sunshine Coast: what a civil engineer checks",
            "href": "/insights/driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks"
          }
        ]
      },
      {
        "heading": "Example: the preferred opening conflicts with a frontage asset",
        "body": "An owner proposes a second driveway at the easiest point to reach a new shed, but the frontage survey shows a service pit and drainage inlet in that location. Compare shifting the crossover with using the existing access and changing the internal route. Identify whether either option changes sight distance, driveway grade, tree impacts or pedestrian movement. If asset relocation is being considered, obtain the relevant owner’s requirements and an appropriate cost basis before relying on it. The resulting comparison should show the whole access solution, including frontage work and internal levels, rather than just the cost of another concrete crossing."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide a frontage survey showing trees, poles, pits, kerb and footpath as well as proposed driveway locations. Include the intended use of each access.",
          "Explain vehicle types and frequency of use. Occasional trailer access and routine commercial servicing can present different design questions.",
          "Confirm approvals and any work-in-road requirements before arranging construction. A contractor’s ability to build a crossing does not establish approval to install it."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review second driveway options, sight distance, grades, swept paths and frontage constraints. If the access has merit, the civil design can then support the planning or approval pathway.",
          "The aim is to find the access arrangement that works for both approval and real use."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "car-parking-planning-and-investigations",
    "cta": {
      "label": "Access and parking investigations",
      "body": "Share the layout, survey and intended vehicle movements to define the access checks."
    },
    "relatedSlugs": [
      "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
      "driveway-long-sections-and-cross-sections-explained",
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "how-overlays-affect-your-sunshine-coast-property",
    "title": "How overlays affect your Sunshine Coast property",
    "description": "A plain-English Sunshine Coast overlay guide explaining how flood, environmental, bushfire, coastal and other overlays can affect development feasibility.",
    "date": "2026-06-24",
    "category": "Planning",
    "keywords": [
      "overlays Sunshine Coast",
      "property overlays Sunshine Coast",
      "how overlays affect property Sunshine Coast",
      "Sunshine Coast planning scheme overlays",
      "check property overlays Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Do overlays stop development completely?",
        "answer": "Not always. Overlays often add assessment triggers, design requirements or technical evidence rather than banning development outright."
      },
      {
        "question": "Where can I check Sunshine Coast overlays?",
        "answer": "Sunshine Coast Council's Development.i site report, planning scheme mapping and MyMaps tools can help identify mapped overlays and related property information."
      },
      {
        "question": "Why should a civil engineer care about overlays?",
        "answer": "Overlays can affect stormwater, flood levels, access, earthworks, buildable area, environmental constraints and the cost of proving a design response."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Overlays can change what you can build, where you can build it, what studies you need and how much risk sits in the project. They are one of the first things to check before buying, subdividing or redesigning a Sunshine Coast property.",
          "An overlay does not automatically mean no development. It means the site has a mapped constraint or value that must be considered."
        ]
      },
      {
        "heading": "What overlays are",
        "body": [
          "Sunshine Coast planning scheme overlay information identifies areas affected by biophysical constraints, natural resources or valuable features. In plain language, overlays flag issues such as flooding, bushfire, environmental values, coastal hazards, steep land, heritage or infrastructure constraints.",
          "Council's Development.i site report can show planning scheme zoning and overlay information, mapping links, application information and other general development information for a property."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "How overlays affect feasibility",
        "body": [
          "Overlays can affect the project in different ways. A flood overlay may change levels, access or stormwater design. An environmental overlay may change clearing, building location or approvals strategy. A steep land constraint may change earthworks and retaining. A coastal hazard overlay may change assumptions near the coast.",
          "The commercial issue is not just whether the site can be approved. It is whether the response costs more than the project can carry."
        ]
      },
      {
        "heading": "What to check before you buy",
        "body": [
          "Check the site report, mapping layers, planning scheme information, title documents and nearby approvals. Look for multiple overlays on the same part of the land, because overlapping constraints can reduce usable area or trigger extra technical work.",
          "Also check whether the overlay affects the same area needed for access, stormwater discharge, building footprint or services. That is where civil design can become difficult."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "A common mistake is treating overlays as a legal issue only. They are also design and cost issues. Another mistake is looking at the building footprint but ignoring the driveway, stormwater route, service corridor or retaining walls.",
          "A development can be delayed when the overlay response is discovered after the concept has already been sold to investors, buyers or internal stakeholders."
        ]
      },
      {
        "heading": "Test where constraints overlap on the same layout",
        "body": "Illustrative scenario: a sloping hinterland property has a bushfire constraint near vegetation and a drainage corridor along its lower edge. Moving the building away from vegetation may steepen the driveway; moving the driveway may increase earthworks beside the drainage corridor. The useful output is a coordinated constraints plan, rather than three independent reports recommending incompatible changes. Map coverage alone does not establish the severity of the site-specific risk. Ask what evidence is needed and whether an alternative layout could reduce the combined impact.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Mapped extent",
              "Current overlay and local plan mapping.",
              "Locate the affected land on the survey."
            ],
            [
              "Proposal interaction",
              "Buildings, access, works and clearing footprint.",
              "Identify which parts of the proposal need assessment."
            ],
            [
              "Design response",
              "Specialist advice coordinated on one concept.",
              "Resolve conflicts before consultants finalise separate reports."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore early civil engineering advice",
            "href": "/services/civil-engineering-advice"
          },
          {
            "label": "Development.i Sunshine Coast: how developers can research nearby approvals",
            "href": "/insights/development-i-sunshine-coast-how-developers-can-research-nearby-approvals"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Record the source and date of each map. Distinguish the current scheme from consultation material for a proposed scheme.",
          "Ask each specialist to show spatial requirements and any assumptions about other disciplines, including access widths, levels, vegetation and drainage.",
          "Compare the revised concept with the original commercial model. Additional reports, reduced usable area and construction constraints should be visible in the decision."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review mapped constraints and explain how they may affect access, stormwater, earthworks, service coordination and subdivision layout.",
          "For early due diligence, the aim is to turn overlay mapping into practical next steps: what needs checking, what might cost money, and what should not be assumed yet."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "civil-engineering-advice",
    "cta": {
      "label": "Early civil engineering advice",
      "body": "Share the site report and concept to identify the civil investigations that matter."
    },
    "relatedSlugs": [
      "development-i-sunshine-coast-how-developers-can-research-nearby-approvals",
      "subdivision-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "how-can-i-see-easements-on-my-property",
    "title": "How can I see easements on my property?",
    "description": "A Sunshine Coast property due diligence guide explaining where to find easements and why they matter for subdivision, driveways, drainage and services.",
    "date": "2026-06-24",
    "category": "Due diligence",
    "keywords": [
      "how to see easements Sunshine Coast",
      "easements Sunshine Coast property",
      "property easement check Sunshine Coast",
      "build over easement Sunshine Coast",
      "drainage easement Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Where are easements usually shown?",
        "answer": "They are commonly shown on title documents, registered survey plans and sometimes utility or council mapping, depending on the type of easement."
      },
      {
        "question": "Can I build over an easement?",
        "answer": "Do not assume so. It depends on the easement purpose, beneficiary, asset location and approval pathway. Get site-specific advice before designing over an easement."
      },
      {
        "question": "Why do easements matter for subdivision?",
        "answer": "They can affect lot layout, access handles, service corridors, stormwater discharge, building envelopes and the ability to create new titles cleanly."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "To see easements on a property, start with the title search, registered plan and any easement documents. Then compare that legal information with council mapping, utility information, survey and what is physically visible on site.",
          "For development, the key question is not just whether an easement exists. It is what the easement protects and how it affects the design."
        ]
      },
      {
        "heading": "Where to look first",
        "body": [
          "A title search and registered survey plan are usually the first documents to check. They can show whether an easement is registered over the land, where it sits and what instrument or dealing may explain its purpose.",
          "Sunshine Coast Council's Development.i site report can also link to general property information, mapping layers, application information and water or sewer infrastructure information links. Use these together, because one source rarely tells the whole story."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Common types of easements",
        "body": [
          "Development sites commonly encounter drainage easements, sewer easements, water easements, access easements and easements benefiting a neighbour or authority. Some protect underground assets. Others protect legal access or overland drainage.",
          "The same strip of land may look unused on the ground but be critical to a future subdivision layout."
        ]
      },
      {
        "heading": "How easements affect design",
        "body": [
          "An easement can restrict building location, driveway position, retaining walls, landscaping, excavation, service installation and stormwater discharge. It can also consume the same area a developer wanted for access or private open space.",
          "For battle-axe and rear lot subdivisions, easements and access handles often need to be considered together because services, vehicles and drainage may all compete for the same narrow corridor."
        ]
      },
      {
        "heading": "Mistakes to avoid",
        "body": [
          "Do not rely only on a real estate plan or aerial image. Do not assume that because an easement is old it no longer matters. Do not assume the visible pipe or pit is exactly where the legal easement sits.",
          "Before buying or designing, line up the legal plan, survey information and civil constraints. That is where many hidden problems become obvious."
        ]
      },
      {
        "heading": "From a line on a plan to a usable development constraint",
        "body": "An easement shown on a plan does not explain all the rights and restrictions affecting it. Obtain the registered instrument and have its legal meaning reviewed by your solicitor. The surveyor can locate the area, while the engineer tests the effect on access, services or drainage. An existing pipe and a legal right to use or maintain that pipe are separate questions. For example, a mapped rear drainage easement may look convenient, but the project still needs suitable levels, capacity and rights for the proposed use.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Registered plan",
              "Position and dimensions of the easement area.",
              "Plot it against the proposed building and lot boundaries."
            ],
            [
              "Easement instrument",
              "Purpose, parties, rights and restrictions.",
              "Obtain legal advice on use, maintenance and consent."
            ],
            [
              "Engineering investigation",
              "Actual asset position, levels and condition where relevant.",
              "Establish whether the intended connection or crossing is feasible."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development site due diligence Sunshine Coast: civil checks before you buy",
            "href": "/insights/development-site-due-diligence-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Use a current title search and registered plan, and collect the referenced easement instruments rather than relying on a real-estate sketch.",
          "Identify whether the concept needs new rights, altered rights or works within an existing corridor. Do not assume neighbouring owners will agree.",
          "Keep infrastructure protection and legal rights as separate items in the feasibility register. Solving one does not automatically resolve the other."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can help interpret how easements affect access, drainage, services and subdivision feasibility. Where legal interpretation is needed, that should sit with the relevant legal or surveying advice; CivilCity's role is to translate the easement into practical design risk.",
          "For a first review, provide the title plan, easement documents if available, address and the intended development outcome."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Send the address, intended outcome and decision deadline for a focused engineering scope."
    },
    "relatedSlugs": [
      "development-site-due-diligence-sunshine-coast",
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "how-to-read-a-sunshine-coast-council-site-report"
    ],
    "resources": [
      {
        "label": "Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Council plan sealing process",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Titles Queensland: plans and associated documents",
        "href": "https://www.titlesqld.com.au/wp-content/uploads/2021/11/ltpm-part-21.pdf"
      }
    ]
  },
  {
    "slug": "development-infrastructure-charges-on-the-sunshine-coast-what-to-allow-for",
    "title": "Development infrastructure charges on the Sunshine Coast: what to allow for",
    "description": "A developer guide to Sunshine Coast infrastructure charges, LGIP context, fees, feasibility allowances and civil cost risk.",
    "date": "2026-06-24",
    "category": "Planning",
    "keywords": [
      "infrastructure charges Sunshine Coast",
      "development charges Sunshine Coast",
      "Sunshine Coast LGIP",
      "development feasibility costs Sunshine Coast",
      "development application fees Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is the LGIP?",
        "answer": "Sunshine Coast Council says the local government infrastructure plan identifies council's plans for trunk infrastructure needed to service urban development at the desired standard of service."
      },
      {
        "question": "Why do infrastructure charges matter to feasibility?",
        "answer": "They affect project cost, cash flow, margin and sometimes whether the intended yield is commercially worthwhile."
      },
      {
        "question": "Are infrastructure charges the only development cost to allow for?",
        "answer": "No. Developers should also consider application fees, consultant costs, civil works, service upgrades, frontage works, bonds, construction costs and holding costs."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Infrastructure charges and related development costs should be allowed for early in a Sunshine Coast feasibility model. They are not the only cost, but they can materially affect whether a subdivision, townhouse project or small commercial development stacks up.",
          "Good developers do not wait for approval to think about these numbers."
        ]
      },
      {
        "heading": "What council's infrastructure planning means",
        "body": [
          "Sunshine Coast Council explains that the local government infrastructure plan identifies plans for trunk infrastructure necessary to service urban development at the desired standard of service. This sits behind how growth is supported and funded across the region.",
          "For a developer, the practical takeaway is that infrastructure is part of the development cost story, not an optional extra."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "What to include in feasibility",
        "body": [
          "Allow for infrastructure charges, application fees, consultant fees, survey, civil design, operational works, stormwater, access works, service connections or upgrades, frontage works, construction costs, bonds, plan sealing and contingency.",
          "The exact items depend on the project, but missing one can distort the purchase price or margin."
        ]
      },
      {
        "heading": "Civil costs that sit beside charges",
        "body": [
          "Infrastructure charges are one line item. Civil works can be another major cost: driveways, stormwater, drainage easements, roadworks, retaining, earthworks, sewer, water and construction-phase requirements.",
          "That is why charges should be considered alongside the civil design risk, not separately."
        ]
      },
      {
        "heading": "Keep charges separate from the cost of building infrastructure",
        "body": "A development can incur infrastructure charges and still need to fund physical works. Those are separate budget lines. Council and Unitywater may also have different charging and approval arrangements relevant to the proposal. Obtain the current assessment basis and any formal notices rather than multiplying a rate found in an old project file. Ask the planner or relevant authority how existing lawful use, demand, credits or offsets are treated in this case; do not assume an entitlement until it is supported.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Authority charges",
              "Current notice or advice for the actual proposal.",
              "Record the calculation basis and payment milestone."
            ],
            [
              "Conditioned works",
              "Approval conditions and civil design scope.",
              "Allow separately for contractor and consultant costs."
            ],
            [
              "Credits or offsets",
              "Written basis and any agreement required.",
              "Keep unconfirmed allowances out of the committed budget."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Development application costs on the Sunshine Coast: what small developers should budget for",
            "href": "/insights/development-application-costs-sunshine-coast-small-developers"
          }
        ]
      },
      {
        "heading": "Reconcile the approval with the feasibility allowance",
        "body": "Once notices and conditions are received, compare each line with the assumptions used before lodgement. Record the authority, amount or calculation basis, payment trigger and any outstanding confirmation. Separately list the physical works that the project must deliver, including design, supervision and closeout. If a credit or offset was assumed, check that its basis has actually been accepted and whether any agreement remains outstanding. The result should be a traceable cost and cash-flow update, not simply a new total. This allows the developer and financial advisers to understand which changes arise from charges and which arise from construction obligations."
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Build separate Council, water/sewer, construction and professional-fee lines in the feasibility model. This makes double counting and omissions easier to see.",
          "Identify when amounts become payable and what may change them. Ask about indexation or a changed development scope rather than assuming a quote remains fixed.",
          "After approval, reconcile the model with the actual notices and conditions before committing to construction funding or settlement assumptions."
        ]
      },
      {
        "heading": "How CivilCity helps",
        "body": [
          "CivilCity can review early civil constraints and help developers understand where design and construction costs may sit before they overpay for a site or under-allow in a feasibility model.",
          "For small and medium developers, this is about protecting margin before the project gathers speed."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Share the intended outcome and the assumptions you need to test before committing."
    },
    "relatedSlugs": [
      "development-application-costs-sunshine-coast-small-developers",
      "development-site-due-diligence-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Local government infrastructure plan and charges",
        "href": "https://www.sunshinecoast.qld.gov.au/development/local-government-infrastructure-plan"
      },
      {
        "label": "Fees and charges",
        "href": "https://www.sunshinecoast.qld.gov.au/pay-and-apply/fees-and-charges"
      },
      {
        "label": "Development incentives and charges information",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-process/development-incentives"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "what-consultants-do-you-need-for-a-sunshine-coast-subdivision",
    "title": "What consultants do you need for a Sunshine Coast subdivision?",
    "description": "A practical guide to the consultant team for Sunshine Coast subdivision projects, including planning, survey, civil engineering, geotechnical and specialist advice.",
    "date": "2026-09-17",
    "category": "Subdivision",
    "keywords": [
      "consultants for subdivision Sunshine Coast",
      "subdivision consultant team Sunshine Coast",
      "civil engineer subdivision Sunshine Coast",
      "subdivision planning survey civil engineering",
      "reconfiguring a lot consultants Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Do I need every consultant before I buy a site?",
        "answer": "No. Start with a proportionate feasibility review. Planning, survey and civil input are often the first useful combination; geotechnical, traffic, bushfire, environmental or other specialists can be added when the site or approval pathway requires them."
      },
      {
        "question": "Can a town planner design the subdivision layout?",
        "answer": "A planner can lead the planning pathway and coordinate the application, but the layout still needs accurate survey information and civil testing for access, stormwater, services, earthworks and constructability."
      },
      {
        "question": "When should I involve a civil engineer?",
        "answer": "Before the concept is fixed or the property is unconditionally purchased if possible. Early civil advice can identify a failed access, drainage, slope or servicing assumption while the design can still change cheaply."
      },
      {
        "question": "Who prepares the final survey plan for plan sealing?",
        "answer": "The cadastral surveyor prepares the survey and plan-sealing documentation, while the civil engineer helps close out the infrastructure, drainage, access and construction requirements that may be conditions of the approval."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Most Sunshine Coast subdivisions need a coordinated team rather than one all-purpose consultant. The core team is usually a town planner, cadastral surveyor and civil engineer. Depending on the site, you may also need a geotechnical engineer, hydraulic or stormwater specialist, traffic consultant, bushfire consultant, ecologist, environmental consultant, arborist or solicitor.",
          "The right question is not ‘which consultants are cheapest?’ It is ‘which risks can change the yield, approval pathway or construction cost?’ Engage the specialists that test those risks before the layout becomes expensive to change."
        ]
      },
      {
        "heading": "The core three for most projects",
        "body": [
          "A town planner interprets the Sunshine Coast Planning Scheme 2014, identifies the likely development pathway, checks relevant codes and coordinates the planning application. They help answer whether the proposed reconfiguration of a lot is likely to be assessable and what planning information will be needed.",
          "A cadastral surveyor establishes the legal and physical starting point: boundaries, levels, existing improvements, services visible on site, easements and the survey information needed for a reliable concept. Aerial imagery is not a substitute for a boundary and feature survey.",
          "A civil engineer tests whether the proposed lots can actually work. That includes frontage and driveway access, grades, sight distance, stormwater and lawful discharge, sewer and water servicing, earthworks, retaining, road or frontage works, erosion control and the detail likely to be required for operational works."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Specialists triggered by the site",
        "body": [
          "A geotechnical engineer may be needed where slope, fill, reactive or weak soils, landslide hazard, retaining or significant earthworks affect the design. A traffic or access specialist may be relevant for constrained frontage, shared access, higher traffic generation or a connection to a busy road.",
          "Bushfire, ecological, coastal, flood, environmental or arboricultural advice can become important when mapping, vegetation, waterways, hazards or a site-specific planning requirement triggers it. A hydraulic specialist may support complex stormwater or flood modelling, while a utilities consultant may help where water, sewer, electricity or telecommunications upgrades are difficult.",
          "These specialists should be added because of a defined risk, not because a large consultant list looks professional. The planner should coordinate the approval pathway, while the project lead keeps one consistent base plan so every report is solving the same site."
        ]
      },
      {
        "heading": "A practical engagement sequence",
        "body": [
          "First, obtain the title, survey information if available, site address, proposed yield and any purchase deadline. Check the Development.i site report, the Planning Scheme mapping and nearby development decisions. This gives the team a common starting point, but it does not replace site-specific design or formal advice.",
          "Second, ask the planner, surveyor and civil engineer to test the concept together. Confirm lot dimensions, access, driveway grades, stormwater discharge, sewer and water, easements, slope, flood or environmental constraints and likely operational works. Record assumptions and unknowns instead of allowing them to disappear into a coloured concept plan.",
          "Third, commission triggered specialist reports and update the concept before lodgement. Finally, agree who owns responses to information requests, condition compliance, detailed civil design, construction inspections, as-constructed records and plan-sealing closeout."
        ]
      },
      {
        "heading": "Mistakes that cost time and margin",
        "body": [
          "The expensive mistake is engaging consultants in silos. A planner may show a yield that cannot drain; a designer may place a driveway over a service; or a civil concept may rely on a boundary that has not been surveyed. Each late discovery creates redesign, additional reports, holding costs or a weaker negotiation position.",
          "Another mistake is treating council information as a guarantee. Mapping, site reports and application guidance are important official starting points, but the actual outcome depends on the proposal, assessment pathway, conditions and evidence submitted. Budget for survey, consultant coordination, application costs, civil works, services, bonds and contingency."
        ]
      },
      {
        "heading": "Appoint the team around deliverables and interfaces",
        "body": "Ask each consultant to identify the decisions they own, the information they need and the work excluded from their fee. The planner can coordinate the approval strategy, but engineering, cadastral survey and legal responsibilities remain distinct. Specialist involvement should follow the site constraints and proposal. A clear scope matrix prevents the client discovering that nobody has allowed for a drainage-rights investigation, authority response or construction record needed at closeout.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Early feasibility",
              "Planner, surveyor and civil input as required.",
              "Test the intended yield and identify specialist investigations."
            ],
            [
              "Application and design",
              "Coordinated discipline reports and drawings.",
              "Allocate authority responses and revision responsibilities."
            ],
            [
              "Delivery and titles",
              "Contractor, inspection, survey and legal inputs.",
              "Confirm closeout and registration tasks have an owner."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Use a single consultant interface register showing who supplies survey, services information, design assumptions and approved revisions.",
          "Confirm which specialist services are included directly and which you must appoint separately.",
          "Check the handover from design to construction; the person preparing drawings may not be engaged for inspections or completion certification."
        ]
      },
      {
        "heading": "When to involve a civil engineer",
        "body": [
          "Involve a civil engineer before committing to a layout when the site has a narrow frontage, steep slope, flood or overland flow risk, existing drainage or sewer, shared access, retaining, limited discharge options or a proposed yield that depends on tight dimensions. These are not ‘later detailing’ issues; they can decide whether the project works at all.",
          "CivilCity can provide early subdivision feasibility input, coordinate with the planner and surveyor, test access and levels, develop stormwater and servicing strategies, prepare civil documentation and support the project through operational works and construction closeout. Send the address, title plan, survey if available and target outcome for a focused first review."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "how-long-does-a-sunshine-coast-subdivision-approval-take"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Sunshine Coast Council development application forms",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      }
    ]
  },
  {
    "slug": "how-civil-engineering-supports-a-development-application",
    "title": "How civil engineering supports a Sunshine Coast development application",
    "description": "Where civil engineering fits in a Sunshine Coast development application, what it should test and how early engineering can reduce redesign and approval risk.",
    "date": "2026-09-18",
    "category": "Approvals",
    "keywords": [
      "civil engineering development application Sunshine Coast",
      "development application civil engineer Sunshine Coast",
      "civil report development application",
      "Sunshine Coast development approval engineering"
    ],
    "faqs": [
      {
        "question": "Does every development application need a civil engineering report?",
        "answer": "No. The need depends on the proposal, site constraints, assessment pathway and information requested by Council or another referral agency. A civil review is still valuable where access, drainage, servicing, earthworks or frontage works could affect feasibility."
      },
      {
        "question": "Can civil engineering be added after the planning application is lodged?",
        "answer": "Sometimes, but late input can force layout changes, information-request responses or redesign. It is usually more efficient to test the civil constraints while the concept can still change."
      },
      {
        "question": "What does a civil engineer provide for a development application?",
        "answer": "Depending on the project, civil input may include a feasibility note, concept access and parking, levels and earthworks, stormwater and lawful discharge strategy, servicing advice, erosion and sediment control, or responses to conditions and information requests."
      },
      {
        "question": "Does civil engineering guarantee development approval?",
        "answer": "No. Civil advice supports the application; it does not replace planning assessment or guarantee an outcome. The proposal still needs to satisfy the applicable planning scheme, codes, conditions and other statutory requirements."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Civil engineering helps a development application demonstrate that the proposal can be accessed, drained, serviced and constructed on the actual Sunshine Coast site. It connects the planning concept to physical evidence: levels, grades, stormwater paths, utilities, earthworks, road interfaces and construction obligations.",
          "The best time to involve a civil engineer is before the layout is fixed. Early engineering can expose a fatal or expensive assumption while the planner, architect and surveyor can still respond without reworking the whole application."
        ]
      },
      {
        "heading": "What civil engineering adds to the application",
        "body": [
          "A planning application may explain the proposed use, yield and planning response, but the approving authority also needs confidence that the site works in practice. Civil engineering tests the physical consequences of the proposal and identifies what must be shown now versus what can be resolved at operational works or detailed design stage.",
          "Typical questions include: Can vehicles enter and leave safely? Are driveway grades and sight lines workable? Where does stormwater go, and is the discharge point lawful? Can water and sewer services reach the proposed lots or buildings? Will cut, fill or retaining alter adjoining land? Are frontage, road, footpath or drainage works likely to be conditioned?"
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Sunshine Coast issues that need early testing",
        "body": [
          "Local sites vary sharply between coastal infill, established urban areas, hinterland land and sloping suburbs such as Buderim. Flood and overland flow mapping, steep land, narrow frontages, existing easements, older services and constrained lawful discharge can all change the viable layout.",
          "For a reconfiguration of a lot, the civil review should test proposed lot dimensions, access and turning, road frontage, stormwater, sewer and water, levels and likely operational works. For a townhouse or commercial proposal, add parking geometry, swept paths, loading or waste access, pavement and construction staging where relevant.",
          "Council mapping and Development.i are useful starting points, not site guarantees. The concept still needs reliable survey information and project-specific engineering judgment; aerial imagery or a coloured yield plan is not enough evidence for a buildable outcome."
        ]
      },
      {
        "heading": "A practical civil review process",
        "body": [
          "2. Screen the constraints: review the Planning Scheme mapping and Development.i information, then check access, levels, flood or overland flow, easements, discharge options, sewer and water, earthworks and interfaces with Council infrastructure.",
          "3. Test the concept: use the survey to check grades, turning, building or lot envelopes, drainage paths and service corridors. Identify constraints that can be solved and those that reduce yield or require specialist advice.",
          "4. Package the evidence: prepare the proportionate civil drawings, report, calculations or advice needed for the application. Clearly separate concept assumptions from matters to be confirmed during detailed design.",
          "5. Carry the thread forward: track civil conditions, operational works triggers, construction inspections, as-constructed information and plan-sealing requirements so approval does not become a false finish line."
        ],
        "list": [
          "Define the proposal: address, target yield or use, concept plan, title information, survey, known services and the intended approval pathway. Record the assumptions that the feasibility depends on."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that create delay and cost",
        "body": [
          "The common mistake is treating civil engineering as a compliance attachment commissioned after the planner has finished the layout. If the access is too steep, the discharge is unavailable or a retaining solution consumes the building area, the application may need redesign rather than a quick report.",
          "Other costly errors include using an unverified boundary, ignoring easements, assuming a nearby pit is an automatic lawful discharge point, underestimating service upgrades, and failing to distinguish a development approval from approval to construct civil works. Poor coordination also creates conflicting plans, duplicated surveys and unanswered information requests.",
          "A proportional early review is cheaper than discovering these issues after purchase, lodgement or construction pricing. It also gives the developer a clearer contingency and a more credible conversation with the planning and project team."
        ]
      },
      {
        "heading": "Define what the planning-stage report must demonstrate",
        "body": "A planning-stage civil report should establish that the proposal has a credible servicing, access and drainage strategy. It need not contain every construction detail, but it should not defer a constraint that could change the proposed layout or yield. Agree the boundary between feasibility evidence and later detailed design with the planner. If a strategy depends on a downstream right, unverified outlet or unavailable service information, make that dependency explicit before lodgement.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Feasibility evidence",
              "Access, levels, servicing and drainage concept.",
              "Show the proposal has a workable physical basis."
            ],
            [
              "Assessment response",
              "Relevant criteria and supporting technical material.",
              "Help the planner present a coordinated application."
            ],
            [
              "Later detail",
              "Items appropriately resolved at detailed design.",
              "Record dependencies without implying they are already confirmed."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "Civil engineer for a Sunshine Coast development application: what they check",
            "href": "/insights/civil-engineer-development-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Ask the engineer to identify the issue most likely to force a layout change and resolve it early.",
          "Use the same survey and concept revision across the planning report and engineering attachments.",
          "Before lodgement, review the assumptions that will become design obligations after approval and allow for them in the budget."
        ]
      },
      {
        "heading": "When to involve a civil engineer",
        "body": [
          "Bring civil engineering in before purchase where the deal depends on yield, before a concept is presented as feasible, and before lodgement where access, stormwater, servicing, slope, flood, retaining or frontage works are material. Involve the engineer again when conditions are issued, detailed design begins or construction closeout is approaching.",
          "CivilCity supports Sunshine Coast developers, landowners, planners, architects and builders with early feasibility reviews, planning-stage civil advice, access and stormwater strategy, servicing and earthworks input, detailed documentation, condition responses and construction-phase support. Send the address, concept plan and target outcome for a focused first review."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "civil-engineer-development-application-sunshine-coast",
      "operational-works-application-sunshine-coast",
      "common-reasons-sunshine-coast-development-applications-get-delayed"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council Development.i",
        "href": "https://developmenti.sunshinecoast.qld.gov.au/"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council development application forms",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      }
    ]
  },
  {
    "slug": "referral-agencies-and-sara-sunshine-coast-development",
    "title": "Referral agencies and SARA: when state assessment may affect a Sunshine Coast project",
    "description": "A practical guide to referral agency risk, SARA triggers and the civil information Sunshine Coast developers should check before lodging.",
    "date": "2026-09-19",
    "category": "Approvals",
    "keywords": [
      "SARA Sunshine Coast development",
      "referral agency Sunshine Coast",
      "state referral development application Queensland",
      "civil engineering referral agency assessment"
    ],
    "faqs": [
      {
        "question": "Does every Sunshine Coast development need SARA referral?",
        "answer": "No. Referral depends on the proposal, site location, triggering mapping and applicable Queensland planning rules. Confirm the actual trigger for the project with the planning team."
      },
      {
        "question": "What civil issues can create referral risk?",
        "answer": "Access to a state-controlled road, stormwater or flooding impacts, waterways, coastal hazards, earthworks, environmental constraints and infrastructure interfaces can require early checking or specialist input."
      },
      {
        "question": "When should I check referral agencies?",
        "answer": "Before buying a site unconditionally or fixing the concept, while access, drainage, servicing, levels and the site layout can still change."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "A Sunshine Coast development may need assessment by a referral agency when a state interest or mapped trigger is engaged. SARA is Queensland's central referral agency, but the exact pathway depends on the proposal, site and applicable planning rules.",
          "Treat referral risk as a feasibility issue, not end-of-process form filling. Check the trigger early, identify the information needed, and make sure the civil concept does not create avoidable access, drainage, flood, earthworks or road-interface problems."
        ]
      },
      {
        "heading": "What referral agency assessment means",
        "body": [
          "A development application can involve more than Sunshine Coast Council's local planning assessment. Where a state planning interest is affected, it may be referred to the relevant agency for assessment, advice or conditions. The referral agency responds to matters within its jurisdiction; it is not a general second opinion on the whole project.",
          "Examples can include proposals near state-controlled roads, waterways or coastal areas, mapped environmental or hazard constraints, infrastructure corridors or other regulated interests. The trigger is site- and proposal-specific, so a nearby project is not proof that another application will follow the same pathway."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Sunshine Coast checks before lodgement",
        "body": [
          "Start with the address, proposed use or reconfiguration, site plan, title information and survey. Review the Sunshine Coast Planning Scheme 2014 and relevant mapping, then use Council's development application information to understand the local pathway. Ask the planner to confirm whether a state trigger needs to be checked through the Queensland planning framework.",
          "Then test the physical consequences. Is access close to a state-controlled road? Does the site drain toward a waterway or constrained corridor? Are cut, fill or retaining likely to affect adjoining land? Will the concept need a new connection, service crossing, frontage work or traffic response? These questions determine whether civil evidence or specialist reports should be commissioned early.",
          "Do not rely on a desktop map alone. Mapping is a screening tool; a current survey, site inspection, levels, title review and project-specific design are needed to understand the actual impact."
        ]
      },
      {
        "heading": "A practical referral-risk process",
        "body": [
          "2. Screen the triggers: review Council's planning scheme and mapping, identify state-road, waterway, coastal, environmental, hazard or infrastructure interfaces, and confirm the likely pathway.",
          "3. Test the civil concept: check access geometry, sight distance, grades, stormwater and lawful discharge, overland flow, earthworks, retaining, services and construction access.",
          "4. Match evidence to the trigger by coordinating the planner, surveyor, civil engineer and any required specialist on one base plan.",
          "5. Track conditions through delivery: referral conditions can affect detailed design, operational works, construction sequencing, inspections, as-constructed information and closeout."
        ],
        "list": [
          "Define the proposal and record the address, intended use or lot outcome, access arrangement, footprint, known services and deadlines."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that cost money and delay",
        "body": [
          "The first mistake is assuming a Council development application is automatically the complete approval pathway. A state referral trigger can change the information needed, design response and programme.",
          "The second is treating referral as a planning-only problem. An access may be too close to a road interface, drainage may not demonstrate safe discharge, or earthworks may create an adjoining-property issue. If those matters appear after lodgement, redesign and another round of consultant work may follow.",
          "The third is designing to a map pin rather than verified site information. Old survey data, unconfirmed boundaries, incomplete service records and optimistic levels can undermine a polished submission."
        ]
      },
      {
        "heading": "Map the approval pathway before commissioning reports",
        "body": "The planner should check current referral triggers against the location and proposed works. Do not infer a trigger solely because a state asset appears nearby, or assume Council assessment covers every agency interest. Once the pathway is established, identify the technical evidence needed for each relevant matter. A revised access or drainage strategy can affect both the Council submission and a referral response, so keep consultant revisions coordinated.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Trigger check",
              "Current mapping, proposal and planning advice.",
              "Establish the applicable referral pathway."
            ],
            [
              "Technical evidence",
              "Defined agency matter and assessment requirements.",
              "Scope the report around the issue being assessed."
            ],
            [
              "Coordinated response",
              "Shared concept and revision register.",
              "Avoid conflicting solutions in separate submissions."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "Civil engineer for a Sunshine Coast development application: what they check",
            "href": "/insights/civil-engineer-development-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Record who is responsible for each submission, response and deadline. Keep authority advice with the project record.",
          "Ask whether proposed works near roads, waterways or other infrastructure need additional specialist input.",
          "Recheck the pathway when the proposal changes materially; the original screening may no longer describe the works being lodged."
        ]
      },
      {
        "heading": "When to involve a civil engineer",
        "body": [
          "Bring civil engineering in before the concept is fixed when the site interfaces with a state road, waterway, flood or coastal constraint, major drainage path, steep land, retaining, service corridor or constrained access. Civil input is also valuable when a referral condition could affect yield, frontage works, stormwater infrastructure or construction cost.",
          "CivilCity can work with the planner and surveyor to screen referral-related civil constraints, test access and levels, develop stormwater and servicing strategies, prepare proportionate civil documentation, respond to conditions and support operational works and construction closeout. Send the address, concept plan and approval target for a focused first review."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "civil-engineer-development-application-sunshine-coast",
      "how-civil-engineering-supports-a-development-application",
      "operational-works-application-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Queensland planning framework",
        "href": "https://www.planning.qld.gov.au/planning-framework"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Queensland State Assessment and Referral Agency",
        "href": "https://www.planning.qld.gov.au/planning-framework/state-assessment-and-referral-agency"
      }
    ]
  },
  {
    "slug": "public-notification-sunshine-coast-developments-what-it-means",
    "title": "Public notification for Sunshine Coast developments: what it means",
    "description": "A practical guide to public notification, neighbour submissions and civil design risks for Sunshine Coast development applications.",
    "date": "2026-09-21",
    "category": "Approvals",
    "keywords": [
      "public notification Sunshine Coast development",
      "development application notification Queensland",
      "Sunshine Coast neighbour submissions",
      "development approval civil engineering"
    ],
    "faqs": [
      {
        "question": "Does every Sunshine Coast development need public notification?",
        "answer": "No. Whether notification is required depends on the application, the category of assessment and the applicable Queensland and local planning rules. Confirm the pathway for the specific proposal with the planner."
      },
      {
        "question": "Can a neighbour's submission stop a development?",
        "answer": "A submission does not automatically stop an application. It can identify matters the assessment manager must consider, and may expose design, access, drainage, amenity or compliance issues that need a response."
      },
      {
        "question": "What civil information should be ready before notification?",
        "answer": "At minimum, the concept should have a credible access, parking, earthworks, retaining, stormwater and servicing strategy. If the notified plans change materially, the programme and consultation risk can grow."
      },
      {
        "question": "When should I involve a civil engineer?",
        "answer": "Before the notified design is locked when the project has constrained access, flood or overland flow, steep land, retaining, drainage, road works or service conflicts."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Public notification gives affected or interested people an opportunity to inspect a development application and make a properly made submission where the applicable assessment pathway requires it. It is part of the planning process, not a vote on whether a project is popular.",
          "For a Sunshine Coast project, the practical risk is not simply receiving objections. It is notifying a concept before its access, stormwater, earthworks, servicing or built-form assumptions are mature, then discovering that a submission or assessment issue requires redesign. Treat notification as a design-readiness checkpoint."
        ]
      },
      {
        "heading": "What public notification changes",
        "body": [
          "The application becomes visible to the community through the prescribed notification process. People may raise concerns about matters such as traffic, driveway location, flooding, drainage, overlooking, noise, earthworks, vegetation or the perceived fit of the proposal with the neighbourhood. The assessment manager must consider relevant submissions under the applicable rules, but not every concern is a planning ground or a reason for refusal.",
          "The exact notification requirements depend on the application type and Queensland development assessment framework. Sunshine Coast Council's development application guidance and the Planning Scheme 2014 should be checked for the current local process. Do not assume a nearby application used the same notification pathway."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil issues that attract avoidable attention",
        "body": [
          "Civil design often sits behind the issues people notice first. A driveway that appears too close to a bend, a steep shared access, a retaining wall near a boundary, stormwater directed toward a neighbour, an unclear overland flow path or a service connection across another property can create legitimate questions about how the project will work.",
          "These matters are easier to explain when the application includes a coherent site plan, levels, access geometry, drainage strategy and earthworks response. They are harder to defend when the drawings show only a building footprint and leave infrastructure for a later stage."
        ]
      },
      {
        "heading": "A practical pre-notification checklist",
        "body": [
          "2. Freeze the project assumptions that affect neighbours: access points, parking and manoeuvring, finished levels, retaining, cut and fill, stormwater discharge, construction access and service routes.",
          "3. Check the physical evidence. Use a current survey where levels, boundaries, trees, kerbs, pits or existing infrastructure matter. Review Council mapping, title information and available service records.",
          "4. Stress-test the concept. Ask whether runoff, retaining, vehicle movements, construction activity or changes in finished level could affect adjoining land. Resolve what can be resolved before notification and clearly identify what belongs to detailed design.",
          "5. Coordinate the response team. The planner should lead the planning narrative, while the civil engineer provides concise, evidence-based responses to access, drainage, earthworks and servicing matters."
        ],
        "list": [
          "Confirm the planning pathway and whether public notification applies. Record the relevant assessment rules and any referral or information requirements."
        ],
        "ordered": true
      },
      {
        "heading": "Common mistakes that cost time",
        "body": [
          "The first mistake is treating public notification as a communications exercise only. A friendly letter cannot fix a driveway grade, an unsupported stormwater assumption or an unexplained retaining wall.",
          "The second is overpromising in the application. If the drawings imply that civil works are solved but the details are not feasible, later conditions or redesign can undermine the programme. Show enough engineering to make the proposal credible, without pretending preliminary plans are construction documentation.",
          "The third is reacting defensively to every submission. Separate valid design risks from issues outside the assessment framework, then respond with measurements, plans and a clear commitment to the next design stage. Emotional replies are expensive and rarely improve an approval."
        ]
      },
      {
        "heading": "Keep notification concerns linked to technical evidence",
        "body": "Where public notification applies, the planner should manage the process and advise on the current requirements. Civil input can help explain drainage, access, earthworks or construction issues raised about the proposal. A useful response identifies the issue, supporting evidence and any resulting design change. It should not dismiss a concern because a drawing already exists; check whether the drawing actually addresses the situation described.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Drainage concern",
              "Existing and proposed flow behaviour.",
              "Explain the evidence and any design response."
            ],
            [
              "Access concern",
              "Vehicle movements, visibility and operating assumptions.",
              "Check the actual scenario raised."
            ],
            [
              "Earthworks concern",
              "Levels, retaining and boundary interfaces.",
              "Show how the proposal meets adjoining ground."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "Civil engineer for a Sunshine Coast development application: what they check",
            "href": "/insights/civil-engineer-development-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Have the planner separate process questions from technical matters requiring a consultant response.",
          "Keep explanations understandable, supported by a referenced plan or report rather than unsupported reassurance.",
          "If the response changes the proposal, coordinate all affected drawings and seek planning advice on the process implications."
        ]
      },
      {
        "heading": "When to involve a civil engineer",
        "body": [
          "Bring civil engineering in before notification where access is constrained, the site is sloping or flood-affected, stormwater cannot obviously discharge to the street, retaining is close to a boundary, a new crossover or frontage work is proposed, or shared services are involved. Early input can also identify whether a proposed condition may trigger operational works, bonding, inspection or as-constructed requirements later.",
          "CivilCity helps Sunshine Coast developers, planners, architects and builders test the civil story behind a development application: access and swept paths, levels, earthworks, retaining, stormwater, lawful discharge, services and likely approval-condition responses. We can review an early concept, prepare proportionate civil information and support the team through conditions and detailed design."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "civil-engineer-development-application-sunshine-coast",
      "how-civil-engineering-supports-a-development-application",
      "operational-works-application-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Queensland Planning Act 2016",
        "href": "https://www.legislation.qld.gov.au/view/html/inforce/current/act-2016-025"
      }
    ]
  },
  {
    "slug": "negotiating-development-conditions-sunshine-coast-civil-items-to-watch",
    "title": "Negotiating development conditions: Sunshine Coast civil items to watch",
    "description": "A practical guide for Sunshine Coast developers reviewing approval conditions affecting access, stormwater, services, earthworks and delivery.",
    "date": "2026-09-22",
    "category": "Approvals",
    "keywords": [
      "development conditions Sunshine Coast",
      "negotiate development conditions",
      "civil conditions development approval",
      "Sunshine Coast subdivision conditions"
    ],
    "faqs": [
      {
        "question": "Can a developer negotiate a development condition?",
        "answer": "Sometimes. The available response depends on the approval, condition wording, legal framework and evidence supporting the proposed change. Have the planner lead the formal process and use civil evidence to test technical conditions."
      },
      {
        "question": "Which conditions most often need civil review?",
        "answer": "Access and frontage works, stormwater and lawful discharge, flood or overland flow, earthworks and retaining, services, operational works, inspections, bonds, as-constructed information and plan sealing."
      },
      {
        "question": "When should a civil engineer review the conditions?",
        "answer": "As soon as the decision notice arrives, especially before accepting a tender, lodging operational works or committing to a construction sequence."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "Do not treat development conditions as boilerplate. Read each condition against the approved plans, the site and the delivery programme, then identify which items need clarification, technical evidence or a formal planning response. Conditions covering access, stormwater, earthworks, services and operational works can materially change cost and timing.",
          "The practical sequence is: understand the condition, check whether it is consistent with the approval and physically achievable, quantify its consequence, and have the planner coordinate the appropriate response. CivilCity can test the engineering implications before a condition becomes a construction surprise."
        ]
      },
      {
        "heading": "Start with the decision notice and approved plans",
        "body": [
          "Create a condition register as soon as the approval is issued. Record the condition number, responsible consultant, required evidence, dependency, likely cost and target date. Read the conditions together with the stamped plans and any referral agency requirements; a condition cannot be understood reliably in isolation.",
          "Check for contradictions between the approved layout and the conditions. Examples include an access arrangement that differs from the civil concept, a stormwater requirement that assumes a discharge point not confirmed during design, or a frontage-work obligation missing from the cost plan."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Civil conditions that can change the project",
        "body": [
          "Access conditions may require a crossover, road widening, verge works, sight-distance response, shared driveway upgrades or vehicle movement evidence. Stormwater conditions may require lawful discharge, detention, quality treatment, overland flow management, easements or maintenance arrangements. Test the point of discharge, levels and downstream interface rather than assuming they work.",
          "Earthworks, retaining and servicing conditions can create hidden cost. Cut and fill may alter adjoining levels; retaining can require geotechnical input; and water, sewer, power or telecommunications interfaces may require coordination beyond the civil drawing set. Operational works, inspection, bonding and as-constructed requirements affect closeout as well as construction."
        ]
      },
      {
        "heading": "A practical condition-review process",
        "body": [],
        "list": [
          "Copy the exact wording into a condition register and identify the trigger: prior to approval, construction, plan sealing or another milestone.",
          "Map each condition to the approved design and mark whether it is satisfied, needs normal detail, conflicts with the concept or requires another specialist.",
          "Use current survey and site information to check access grades, turning, sight distance, drainage levels, discharge, overland flow, earthworks, retaining and service corridors.",
          "Update budget, programme, bond allowance, consultant scope and construction sequence.",
          "Have the planner choose the formal response pathway, supported by concise civil evidence and an achievable alternative.",
          "Track the register through operational works, prestart, inspections, as-constructed records and plan sealing."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that cost money and delay",
        "body": [
          "The expensive mistake is accepting a condition without checking its interaction with the design. Developers then discover during detailed drawings or tendering that the approved yield, driveway, drainage or retaining strategy cannot meet it without redesign.",
          "Another mistake is arguing that a condition is unreasonable without evidence. A useful response identifies the specific conflict, explains the engineering consequence and proposes a measurable alternative that still addresses the planning or infrastructure objective. Finally, keep one controlled base plan: conflicting survey, architectural, landscape and civil drawings create avoidable information requests."
        ]
      },
      {
        "heading": "Assess the engineering consequence before seeking a change",
        "body": "A condition review should identify the required outcome, its design consequence and the evidence for any alternative. If a frontage requirement changes levels or drainage, ask the engineer to sketch the implications before framing a response. The planner should advise on the appropriate process and deadlines. A preferred contractor method or lower price alone does not establish that a different condition or design is acceptable.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Meaning",
              "Condition, approved plan and relevant correspondence.",
              "Confirm what outcome the requirement is addressing."
            ],
            [
              "Impact",
              "Design, cost, land rights and staging implications.",
              "Identify why clarification or an alternative is needed."
            ],
            [
              "Proposed response",
              "Evidence supporting a defined alternative.",
              "Allow the decision-maker to assess a concrete proposal."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "Civil engineer for a Sunshine Coast development application: what they check",
            "href": "/insights/civil-engineer-development-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Review conditions promptly with the planner and engineering team; do not wait for the contractor to discover the implications.",
          "Separate ambiguity from disagreement. A clarification may be sufficient where the required deliverable is unclear.",
          "Keep the accepted outcome and revised drawings in the condition register so construction follows the current requirement."
        ]
      },
      {
        "heading": "When to involve a civil engineer",
        "body": [
          "Ask for civil review immediately after approval where conditions affect access, stormwater, flood or overland flow, earthworks, retaining, services, frontage works, operational works, bonding or plan sealing. Bring the engineer back before tendering if the response changes quantities, levels, materials or construction staging.",
          "CivilCity helps Sunshine Coast developers translate conditions into a coordinated delivery plan: condition registers, access and level checks, stormwater and lawful-discharge strategy, servicing and earthworks advice, operational works documentation, construction support and closeout evidence. Send the decision notice, approved plans and target programme for a focused review."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "civil-engineer-development-application-sunshine-coast",
      "how-civil-engineering-supports-a-development-application",
      "operational-works-application-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Council plan sealing",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Queensland Planning Act 2016",
        "href": "https://www.legislation.qld.gov.au/view/html/inforce/current/act-2016-025"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "how-long-does-a-sunshine-coast-subdivision-approval-take",
    "title": "How long does a Sunshine Coast subdivision approval take?",
    "description": "A practical Sunshine Coast subdivision programme guide covering planning, survey, civil design, information requests, operational works and plan sealing.",
    "date": "2026-09-23",
    "category": "Subdivision",
    "keywords": [
      "how long subdivision approval Sunshine Coast",
      "subdivision approval timeframe Sunshine Coast",
      "subdivision timeline Queensland",
      "civil engineering subdivision programme"
    ],
    "faqs": [
      {
        "question": "How long does a Sunshine Coast subdivision approval take?",
        "answer": "There is no single reliable duration. The programme depends on the assessment pathway, application quality, information requests, referral requirements, conditions, civil complexity and whether operational works and plan sealing are also included in the delivery programme."
      },
      {
        "question": "Does the council assessment period equal the whole subdivision programme?",
        "answer": "No. The statutory assessment period is only one part. Survey, concept design, reports, lodgement, information responses, detailed civil design, operational works, construction, inspections and plan sealing can all sit before or after the decision."
      },
      {
        "question": "What commonly delays a subdivision?",
        "answer": "Incomplete information, unresolved access or stormwater, unclear servicing, revised layouts, referral responses, conditions that conflict with the concept, construction closeout and missing as-constructed evidence are common causes."
      },
      {
        "question": "When should a civil engineer be involved?",
        "answer": "Before the layout is fixed and before the approval programme is promised. Early civil input can test access, levels, stormwater, services, earthworks and operational works triggers that otherwise create redesign later."
      }
    ],
    "sections": [
      {
        "heading": "Short answer",
        "body": [
          "A Sunshine Coast subdivision can take months from first feasibility to sealed plan, and the approval decision is only one milestone. The actual programme depends on the planning pathway, the quality of the first submission, information requests, referrals, civil complexity, conditions and the time needed to construct and close out infrastructure.",
          "For a developer, the useful question is not simply ‘how many days will council take?’ It is ‘which steps control my critical path, and what can I resolve before lodgement?’"
        ]
      },
      {
        "heading": "The programme has several separate stages",
        "body": [
          "A realistic programme usually includes: site and title due diligence; survey and concept layout; planning and civil reports; application preparation and lodgement; assessment and any information request; decision notice and conditions; detailed civil and operational works design; construction and inspections; as-constructed documentation; and plan sealing or other closeout steps.",
          "These stages can overlap, but they cannot all be compressed by asking for a faster assessment. A project may receive a decision and still be unable to start civil works because the operational works package, approvals, construction details or service coordination are not ready."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "What controls the assessment period",
        "body": [
          "The applicable Queensland development assessment pathway controls the formal process. Confirm the current pathway, information requirements, referral agencies and notification obligations for the specific proposal rather than applying a timeframe from another subdivision.",
          "Application quality matters. A concept that clearly explains lot layout, access, stormwater, earthworks, services and relevant constraints gives the assessment manager a more coherent basis for review. Missing or contradictory information can lead to requests, redesign and a programme reset.",
          "Sunshine Coast conditions also vary by site. A steep hinterland block, a flood-affected infill site, a battle-axe layout or a subdivision requiring frontage works will not have the same risk profile as a straightforward flat site with existing services."
        ]
      },
      {
        "heading": "Civil dependencies that create hidden delay",
        "body": [
          "Access is often a critical dependency. Check driveway grades, sight distance, turning, crossover requirements, road frontage and construction access early. If the access geometry changes, the lot layout, retaining, drainage and building envelopes may change with it.",
          "Stormwater is another programme driver. Confirm the lawful discharge strategy, levels, overland flow response, detention or treatment requirements, easements and downstream interface before promising a lodgement date. ‘We will solve drainage during detailed design’ is not a programme; it is a risk transfer to the future.",
          "Services, earthworks and retaining can also affect yield and conditions. Sewer and water connections, service clashes, cut and fill, retaining near boundaries and operational works triggers may require other consultants, approvals or revised cost allowances."
        ]
      },
      {
        "heading": "A practical way to build the programme",
        "body": [],
        "list": [
          "Define the end point: approval only, construction-ready package, completed civil works, or sealed lots.",
          "List every dependency and owner, including survey, planning, civil, geotechnical, service authorities, construction and Council milestones.",
          "Mark assumptions that must be verified, such as point of discharge, service capacity, access grades and retaining limits.",
          "Add a response allowance for information requests and redesign rather than presenting a best-case promise.",
          "Track approval conditions separately from the application, because conditions can create new operational works, bonding, inspection or plan-sealing tasks.",
          "Update the programme after each decision, not only when something goes wrong."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that cost time and money",
        "body": [
          "The biggest mistake is quoting a single end-to-end timeframe based on the statutory assessment period. That ignores design, procurement, construction and closeout. Another is lodging before the civil concept is credible, then discovering that access or drainage requires a new layout.",
          "Developers also lose time when consultants work from different surveys or uncontrolled drawing versions. Use one current base plan and a condition register. Confirm who owns each response and what evidence is needed before the next milestone.",
          "Finally, do not leave plan sealing until the end. As-constructed records, inspection evidence, practical completion and outstanding conditions should be tracked during construction, because recreating evidence after contractors leave is slow and expensive."
        ]
      },
      {
        "heading": "Programme the dependencies, not just the assessment period",
        "body": "A subdivision programme needs separate allowances for investigations, application preparation, assessment, detailed design, construction, closeout and registration. Some activities can overlap; others depend on a confirmed design or authority response. For example, tendering against an unresolved drainage concept may save apparent calendar time but produce qualifications and repricing. Ask the team to show what can proceed responsibly in parallel and which decision controls the next stage.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Before lodgement",
              "Survey, investigations and coordinated concept.",
              "Resolve yield-changing assumptions."
            ],
            [
              "After planning approval",
              "Conditions, detailed design and relevant works approvals.",
              "Define the construction scope and prerequisites."
            ],
            [
              "After construction",
              "Evidence, clearances, plan sealing and registration.",
              "Allow for document completion as well as physical work."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
            "href": "/insights/subdivision-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Use a dependency-based programme with an owner for each outstanding input and decision.",
          "Distinguish statutory process periods from a project completion estimate. Pauses, responses and revisions can change the elapsed duration.",
          "Update the programme when conditions are issued and when construction changes occur, rather than preserving an obsolete settlement assumption."
        ]
      },
      {
        "heading": "When to involve a civil engineer",
        "body": [
          "Involve civil engineering before land purchase where possible, before fixing the subdivision concept, and immediately after approval if conditions affect access, stormwater, earthworks, retaining, services or operational works. The earlier review is proportionate: a feasibility screen may be enough initially, followed by detailed design once the planning pathway is clear.",
          "CivilCity helps Sunshine Coast developers build a defensible programme around the actual civil work: site feasibility, concept layouts, access and levels, stormwater and lawful discharge, servicing, operational works documentation, construction support, as-constructed records and plan sealing closeout. Send the site address, proposed yield and target milestone for a focused programme-risk review."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "subdivision-sunshine-coast",
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "what-consultants-do-you-need-for-a-sunshine-coast-subdivision"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Council plan sealing",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "subdivision-sunshine-coast",
    "title": "Subdivision Sunshine Coast: the practical approval and feasibility guide",
    "description": "A detailed Sunshine Coast subdivision guide covering lot size, assessment pathway, access, stormwater, services, overlays, operational works and plan sealing.",
    "date": "2026-09-23",
    "category": "Subdivision",
    "keywords": [
      "subdivision Sunshine Coast",
      "Sunshine Coast subdivision",
      "subdivide land Sunshine Coast",
      "subdivision feasibility Sunshine Coast",
      "reconfiguring a lot Sunshine Coast",
      "subdivision civil engineer Sunshine Coast",
      "Sunshine Coast subdivision approval"
    ],
    "faqs": [
      {
        "question": "What is the minimum lot size for subdivision on the Sunshine Coast?",
        "answer": "There is no single figure that establishes subdivision feasibility across the Sunshine Coast. Check the applicable zone, local plan, slope and Reconfiguring a lot provisions, including area, dimensions, frontage and treatment of any access strip. Then test access, drainage and servicing."
      },
      {
        "question": "Is a Sunshine Coast subdivision code assessable or impact assessable?",
        "answer": "The category of assessment depends on the current planning provisions, property and proposal. Ask the planner to identify the applicable tables of assessment, local plan and overlays, and how departures from relevant lot requirements affect the pathway."
      },
      {
        "question": "Can a large block automatically be subdivided?",
        "answer": "No. Area is only the first screen. A subdivision also needs workable frontage or rear-lot access, slope, stormwater discharge, sewer and water servicing, overlays, easements, earthworks, construction access and a path through operational works and plan sealing."
      },
      {
        "question": "When should a civil engineer review a Sunshine Coast subdivision?",
        "answer": "Before the layout is fixed and ideally before purchase conditions go unconditional. Early civil review can test access, driveway grades, stormwater, services, earthworks, retaining, operational works triggers and plan-sealing risks while the concept can still change cheaply."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "A Sunshine Coast subdivision is feasible only when the planning controls and the civil engineering both work. The useful first test is not simply whether the block is big enough. It is whether the site can create compliant lots with practical access, lawful stormwater discharge, services, manageable slope, acceptable overlays and a realistic path from approval to plan sealing.",
          "Check the current Reconfiguring a lot provisions for area, dimensions, frontage and slope alongside the local plan and overlays. Record the applicable criteria for the property; a nominal lot-area calculation cannot establish approval or buildability."
        ],
        "table": {
          "columns": [
            "Feasibility question",
            "What to check",
            "Why it matters"
          ],
          "rows": [
            [
              "Can the land be split?",
              "Zone, local plan, lot size, frontage and slope",
              "These decide whether the planning pathway starts cleanly or with risk."
            ],
            [
              "Can each lot work physically?",
              "Access, driveway grade, sight distance, stormwater, services and retaining",
              "A compliant planning layout can still fail when civil constraints are tested."
            ],
            [
              "Can the project be closed out?",
              "Operational works, construction, as-constructed records and plan sealing",
              "Allow for works acceptance, plan sealing and subsequent title registration."
            ]
          ]
        }
      },
      {
        "heading": "Decisions to make before committing to subdivision",
        "body": [
          "Before committing to subdivision, establish what lots are being proposed, whether they can be approved and serviced, what must be built, and what evidence is needed to obtain registered titles. A concept with unresolved access or drainage should not be treated as a confirmed development outcome.",
          "Have the planner, surveyor and civil engineer test the same layout. Record the assumptions behind the yield and the investigations needed to support the budget."
        ],
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Start with the assessment pathway",
        "body": [
          "Under the Sunshine Coast Planning Scheme 2014, reconfiguring a lot is assessed through the tables of assessment and the relevant benchmarks. The Reconfiguring a lot table identifies when subdivision is code assessable or impact assessable and points the applicant back to the applicable local plan code, zone code, Reconfiguring a lot code and prescribed other development codes.",
          "For Low density residential land, the pathway becomes more serious where additional lots are created and the proposal does not comply with the minimum lot size specified in the applicable local plan code or Table 9.4.4.3.2 of the Reconfiguring a lot code. In plain English: a non-compliant lot-size outcome can change the approval risk materially."
        ]
      },
      {
        "heading": "Check lot area, dimensions and usable land separately",
        "body": [
          "Ask the planner to identify the applicable current lot-size and dimension provisions, including slope, local plans and rear-lot access areas. Ask the surveyor to show those checks on the layout. Record which provisions are met and which need a considered planning response.",
          "A parent parcel can have sufficient total area yet lack practical access or a usable building envelope on each new lot. Show retaining, easements, drainage corridors and existing structures before relying on the nominal yield."
        ],
        "table": {
          "columns": [
            "Check",
            "Evidence",
            "Feasibility question"
          ],
          "rows": [
            [
              "Lot area",
              "Current provisions and surveyed boundaries.",
              "Is access and constrained land treated correctly?"
            ],
            [
              "Dimensions and frontage",
              "Lot geometry and applicable planning criteria.",
              "Can the intended use fit with access and services?"
            ],
            [
              "Slope and building area",
              "Feature survey, overlays and concept levels.",
              "What retaining, earthworks or specialist advice is needed?"
            ]
          ]
        }
      },
      {
        "heading": "Rear lots and battle-axe subdivisions need extra testing",
        "body": [
          "Check the current access-strip, driveway and lot-area provisions applicable to the proposal. Distinguish the cadastral corridor from usable paved width: the strip may also need services, drainage, retaining and maintenance access. Ownership and easement arrangements must support the actual use.",
          "Test the corridor in section as well as plan. Access beside an existing house may conflict with footing support, a service trench or drainage. Confirm the rear lot has a workable building area and outlet before finalising its boundaries."
        ],
        "table": {
          "columns": [
            "Interface",
            "What to establish",
            "Why it matters"
          ],
          "rows": [
            [
              "Access",
              "Applicable geometry, grades, turning and visibility.",
              "The rear lot needs usable vehicle access."
            ],
            [
              "Services",
              "Routes, authority requirements and physical separation.",
              "The corridor cannot be allocated independently by each discipline."
            ],
            [
              "Ownership",
              "Boundaries, rights and maintenance arrangements.",
              "Legal documents must support the shared infrastructure."
            ]
          ]
        }
      },
      {
        "heading": "Stormwater can decide the yield",
        "body": [
          "Stormwater is often the civil constraint that decides whether a Sunshine Coast subdivision works. Each new lot needs a lawful and constructible drainage strategy. A nearby pit, gully or watercourse is not enough. The design must check levels, overland flow, downstream route, easements, maintenance access, detention or treatment requirements and whether the outlet can actually be used.",
          "Sunshine Coast subdivision design has to deal with stormwater quantity, water quality, infrastructure layout and drainage easements. For feasibility, the right question is: can every proposed lot drain by a practical route that Council or the asset owner is likely to accept, without forcing a redesign of access, retaining, building pads or lot boundaries?"
        ],
        "table": {
          "columns": [
            "Stormwater check",
            "Evidence to look for",
            "Common surprise"
          ],
          "rows": [
            [
              "Discharge point",
              "Council drainage, lawful outlet, watercourse or approved connection point",
              "A visible pit is not automatically an approved outlet."
            ],
            [
              "Levels",
              "Survey levels, pit inverts, overland flow paths and pipe grades",
              "A low lot may not drain by gravity without redesign."
            ],
            [
              "Easements",
              "Title search, survey plan and likely drainage route",
              "A private downstream route can need a new easement."
            ],
            [
              "Capacity and treatment",
              "Detention, water quality treatment and downstream impact requirements",
              "Detention does not fix every downstream or tailwater problem."
            ]
          ]
        }
      },
      {
        "heading": "Services and infrastructure are not admin details",
        "body": [
          "The Reconfiguring a lot code includes infrastructure and services outcomes. In urban areas, new lots are generally expected to connect to reticulated water, reticulated sewer, electricity and, where available, high-speed telecommunications infrastructure. Stormwater management and sustainable design provisions also sit around those servicing questions.",
          "That means a subdivision feasibility check should look at more than planning maps. Confirm sewer and water location, depth and capacity; likely connection points; service clashes; whether extensions or easements are required; whether road frontage works are likely; and whether operational works will be needed before construction and plan sealing."
        ]
      },
      {
        "heading": "Overlays and local plans can change the answer",
        "body": [
          "A site may meet a broad zone-based lot-size benchmark and still carry a serious approval risk because of overlays or local plan provisions. Flood, overland flow, biodiversity, waterways and wetlands, bushfire hazard, steep land, landslide, coastal hazards, acid sulfate soils, heritage, transport corridors and local character provisions can all change design, reporting and conditions.",
          "This is where Sunshine Coast subdivision work becomes local. The useful first screen is Development.i, the site report, planning scheme mapping and nearby approvals. The useful professional review then asks how those mapped constraints interact with the actual layout: where vehicles enter, where water flows, where services run, where retaining sits and what conditions are likely to appear after approval."
        ]
      },
      {
        "heading": "A practical Sunshine Coast subdivision feasibility process",
        "body": [
          "The planner, surveyor and civil engineer should test the same concept. Agree the assumptions behind the yield and identify the evidence still needed before committing to purchase or detailed design."
        ],
        "table": {
          "columns": [
            "Stage",
            "Main question",
            "Useful output"
          ],
          "rows": [
            [
              "Desktop screen",
              "Does the site deserve more money and time?",
              "Zone, overlays, local plan, title and nearby approval notes"
            ],
            [
              "Concept test",
              "Can the proposed lots actually work?",
              "Sketch layout checked against access, drainage, services and slope"
            ],
            [
              "Cost and risk review",
              "Could hidden civil works kill the margin?",
              "Infrastructure charges, frontage works, retaining, stormwater and operational works allowance"
            ],
            [
              "Go or no-go",
              "Should you buy, redesign, negotiate or walk away?",
              "A short decision note with assumptions and red flags"
            ]
          ]
        },
        "list": [
          "Gather the property address, title, survey if available, easements, current services information and any purchase deadline.",
          "Check zoning, local plan area, overlays, nearby approvals and whether the proposal is likely to be code or impact assessable.",
          "Test lot size, frontage, slope, rear-lot access, driveway grades, sight distance and service corridors.",
          "Confirm stormwater discharge, overland flow and any drainage easement requirement.",
          "Estimate infrastructure charges, frontage works, operational works, survey, planning, civil design, construction and contingency.",
          "Decide whether to proceed, redesign, negotiate the purchase price or walk away."
        ],
        "ordered": true
      },
      {
        "heading": "Illustrative example: why area alone does not establish yield",
        "body": [
          "Consider an owner seeking to retain a house and create a rear lot on a deep residential parcel. The total area looks promising, but the house occupies the most direct access route and the land slopes away from the street.",
          "Compare access beside the house with an alternative layout, test retaining and service space, and investigate the rear drainage route. If that route requires rights over another property, it remains a dependency until resolved. The decision is whether a serviced, buildable layout can be delivered at an acceptable cost."
        ]
      },
      {
        "heading": "Common mistakes that cost money",
        "body": [
          "The first mistake is using lot size as the whole feasibility test. The second is relying on a concept layout without survey levels. The third is assuming stormwater can be solved later. The fourth is ignoring the difference between a planning approval and completed, sealed lots. The fifth is forgetting that approval conditions can create operational works, bonding, inspections, as-constructed records and plan-sealing evidence.",
          "A smaller, cleaner subdivision can be worth more than a stretched layout that creates retaining, drainage easements, access conflicts, information requests and slow plan sealing. Margin is often protected by deleting the risky lot, not by forcing one more lot onto a drawing."
        ]
      },
      {
        "heading": "Confirm the assessment authority and servicing pathway",
        "body": "First establish the authority and planning framework for the actual property. Sunshine Coast Council’s scheme is not a universal pathway for every development in the wider region. Caloundra South, for example, is a Priority Development Area with an EDQ development scheme. Water and sewer approvals also need their own check with Unitywater. Identifying these pathways early helps the planner and civil team scope the right submissions and distinguish Council infrastructure from network works.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Council-assessed land",
              "Current scheme, local plan and approval history.",
              "Confirm the subdivision pathway for the proposal."
            ],
            [
              "Priority Development Area",
              "Relevant PDA scheme and assessment arrangements.",
              "Do not assume the ordinary Council process applies."
            ],
            [
              "Water and sewer",
              "Unitywater requirements and network scope.",
              "Confirm connection and accreditation requirements separately."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore subdivision engineering",
            "href": "/services/reconfiguration-of-a-lot-engineering"
          },
          {
            "label": "Can I subdivide my land on the Sunshine Coast?",
            "href": "/insights/can-i-subdivide-my-land-on-the-sunshine-coast"
          },
          {
            "label": "EDQ: Caloundra South Priority Development Area",
            "href": "https://www.edq.qld.gov.au/our-work/priority-development-areas-pda/caloundra-south"
          },
          {
            "label": "Unitywater subdivision servicing pathway",
            "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Confirm the lot-and-plan details and authority before relying on general Sunshine Coast development advice.",
          "Ask the consultant team to identify separate Council, EDQ or service-authority submissions applicable to the site.",
          "Carry the relevant pathways into the programme, scope and closeout register; one approval does not replace the others."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Bring in civil engineering when the site has slope, narrow frontage, rear access, possible flood or overland flow, uncertain stormwater discharge, easements, sewer through the site, retaining risk, road frontage works, or a purchase decision that depends on yield. Those are the points where a quick civil review can save a bad acquisition or sharpen the offer price.",
          "CivilCity can support Sunshine Coast subdivision projects from early feasibility through concept civil input, access and stormwater strategy, operational works documentation, appropriate RPEQ responsibility, construction support, as-constructed records and plan sealing closeout. Send the address, proposed yield, title plan, survey if available and the decision you need to make."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "reconfiguration-of-a-lot-engineering",
    "cta": {
      "label": "Subdivision engineering",
      "body": "Test the proposed lots, access, drainage and services before fixing the layout."
    },
    "relatedSlugs": [
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "development-application-costs-sunshine-coast-small-developers",
      "how-long-does-a-sunshine-coast-subdivision-approval-take"
    ],
    "resources": [
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Sunshine Coast Council Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Council plan sealing process",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "EDQ: Caloundra South Priority Development Area",
        "href": "https://www.edq.qld.gov.au/our-work/priority-development-areas-pda/caloundra-south"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      }
    ]
  },
  {
    "slug": "operational-works-application-sunshine-coast",
    "title": "Operational works application Sunshine Coast: what developers need before construction",
    "description": "A practical guide to Sunshine Coast operational works applications, civil drawings, approval conditions, RPEQ review and construction readiness.",
    "date": "2026-09-23",
    "category": "Approvals",
    "keywords": [
      "operational works application Sunshine Coast",
      "operational works engineer Sunshine Coast",
      "civil operational works drawings Sunshine Coast",
      "Sunshine Coast operational works conditions",
      "RPEQ operational works Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "When does a project need an operational works application?",
        "answer": "Operational works is commonly needed when approved development requires detailed civil infrastructure, earthworks, stormwater, road, access or frontage works before construction can proceed. The exact trigger depends on the approval conditions and project scope."
      },
      {
        "question": "Is operational works the same as a development approval?",
        "answer": "Operational work is itself a type of development. An operational works approval is distinct from an approval for a material change of use or reconfiguring a lot; one does not automatically authorise all the other work."
      },
      {
        "question": "Who prepares operational works drawings?",
        "answer": "A civil engineer usually prepares the civil drawing package, technical notes and supporting information, with appropriate RPEQ responsibility for professional engineering services and any separately required certification."
      },
      {
        "question": "Can CivilCity help after conditions have already been issued?",
        "answer": "Yes. CivilCity can review the approval conditions, identify the civil deliverables, prepare or coordinate the engineering package and support responses through the operational works stage."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "If your Sunshine Coast development approval includes civil works, frontage works, stormwater, earthworks, access upgrades or infrastructure conditions, you may need an operational works application before construction can start.",
          "The practical question is not just whether you have an approval. It is whether the approval conditions can be turned into buildable civil drawings, technical responses and a construction-ready package without reopening the layout, levels or drainage strategy."
        ]
      },
      {
        "heading": "Why operational works matters",
        "body": [
          "Operational works is where optimistic planning drawings meet engineering detail. Driveway grades, stormwater pits, pipe levels, retaining, pavement, frontage works, erosion control and service clashes become real design decisions.",
          "For developers, this stage can either keep the project moving or expose gaps left during the development application. A vague condition can become a redesign if the site was not tested properly before approval."
        ],
        "table": {
          "columns": [
            "Trigger",
            "What to check",
            "Why it matters"
          ],
          "rows": [
            [
              "Stormwater works",
              "Discharge point, levels, detention and water quality",
              "Late drainage changes can affect lots, buildings and retaining."
            ],
            [
              "Access or frontage works",
              "Driveway grades, sight distance, kerb, road and footpath interfaces",
              "The approved layout still needs to work at construction detail."
            ],
            [
              "Earthworks",
              "Cut, fill, retaining, boundaries and adjoining land",
              "Small level changes can create expensive walls or drainage issues."
            ],
            [
              "Approval conditions",
              "Civil drawings, reports, certifications and staging",
              "Missing one condition can delay construction and closeout."
            ]
          ]
        },
        "links": [
          {
            "label": "Council operational work requirements",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
          }
        ]
      },
      {
        "heading": "What a strong package should include",
        "body": [
          "A useful operational works package normally starts with the approval conditions, stamped plans, current survey, civil concept, service information and any earlier stormwater or traffic advice. The civil drawings should then show enough detail for assessment, tendering and construction coordination.",
          "Depending on the project, the package may include stormwater layout, drainage long sections, earthworks, retaining interfaces, driveway or road details, pavement, erosion and sediment control, service coordination notes, construction staging and RPEQ certification where required."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "The expensive mistake is treating operational works as drafting. If the planning-stage concept did not test levels, drainage, access and services, the operational works engineer may inherit a drawing that cannot be built cleanly.",
          "Other common mistakes include relying on old survey, ignoring service clashes, underestimating stormwater treatment, assuming a condition can be handled later, and failing to coordinate the builder, planner, surveyor and engineer around the same drawing set."
        ]
      },
      {
        "heading": "Brief the engineer with a condition-to-deliverable schedule",
        "body": "This article focuses on appointing and briefing the civil designer for the application package. A useful proposal links each relevant condition to a drawing, report, calculation, certificate or authority interface. It should also identify exclusions and information needed from others. Do not assume the design fee includes construction inspections, contractor queries or as-constructed documentation. Agree those services before work starts so the evidence needed for closeout can be collected in time.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Input package",
              "Decision notice, approved plans, survey and existing reports.",
              "Give the designer a reliable starting point."
            ],
            [
              "Application scope",
              "Defined sheets, calculations and authority responses.",
              "Compare proposals on equivalent deliverables."
            ],
            [
              "Delivery support",
              "Inspections, changes and closeout records.",
              "Avoid an unfunded gap after drawings are issued."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore operational works applications",
            "href": "/services/operational-works-applications"
          },
          {
            "label": "When does a Sunshine Coast subdivision need operational works?",
            "href": "/insights/when-does-a-subdivision-need-operational-works"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Provide the complete decision notice, including referenced plans and amendments. Identify construction timing and unresolved conditions.",
          "Ask the engineer to list dependencies on geotechnical, structural, landscape, survey and service-authority inputs.",
          "Confirm revision allowances and who will respond to assessment queries. A lodged package is not the same milestone as an accepted construction design."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Bring CivilCity in as soon as approval conditions are issued, or earlier if the development application is likely to generate civil conditions. The best brief includes the approval, stamped plans, survey, title information, existing reports and the construction timing you are trying to protect.",
          "CivilCity can review the conditions, identify the operational works deliverables, prepare civil drawings, coordinate technical responses and support the project through construction-phase questions and closeout planning."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "operational-works-applications",
    "cta": {
      "label": "Operational works applications",
      "body": "Send the decision notice, approved plans and survey to define the engineering package."
    },
    "relatedSlugs": [
      "when-does-a-subdivision-need-operational-works",
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast",
      "as-constructed-drawings-sunshine-coast-subdivision-closeout"
    ],
    "resources": [
      {
        "label": "Council operational work requirements",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      }
    ]
  },
  {
    "slug": "stormwater-engineer-sunshine-coast",
    "title": "Stormwater engineer Sunshine Coast: when development needs drainage advice",
    "description": "When to involve a stormwater engineer on Sunshine Coast development sites, including lawful discharge, detention, overland flow, levels and approval risk.",
    "date": "2026-09-23",
    "category": "Stormwater",
    "keywords": [
      "stormwater engineer Sunshine Coast",
      "stormwater drainage engineer Sunshine Coast",
      "lawful point of discharge Sunshine Coast",
      "stormwater design Sunshine Coast",
      "development stormwater engineer Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "When should I contact a stormwater engineer?",
        "answer": "Contact a stormwater engineer before the layout is fixed if the site has slope, flood or overland flow risk, uncertain discharge, downstream constraints, a new lot layout or a development application that changes hardstand or roof area."
      },
      {
        "question": "Is a nearby pit always a lawful point of discharge?",
        "answer": "No. A visible pit or drain is not automatically an accepted connection point. The levels, asset ownership, capacity, approval pathway and discharge rights still need to be checked."
      },
      {
        "question": "Does every site need detention?",
        "answer": "Not every site, but detention or other controls may be needed depending on the development, catchment, downstream conditions, council requirements and approval conditions."
      },
      {
        "question": "Can stormwater change subdivision yield?",
        "answer": "Yes. Drainage routes, easements, detention areas and levels can change lot layout, building envelopes, retaining and the number of lots that remain commercially practical."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "A Sunshine Coast stormwater engineer helps test where water will go, whether the discharge route is lawful and practical, and what drainage works are needed for a development to be approved, built and maintained.",
          "Get stormwater advice early when a project depends on subdivision yield, new buildings, driveway grades, filling, retaining, detention, overland flow paths or a tight downstream outlet. Stormwater is not a tidy detail at the end; it can decide the layout."
        ]
      },
      {
        "heading": "The stormwater checks that matter",
        "body": [
          "A good drainage review joins levels, catchments, infrastructure and approval requirements. The engineer should test the existing flow path, proposed finished levels, roofwater, surface runoff, discharge point, easements, downstream impacts and whether treatment or detention is likely.",
          "This is especially important on infill sites, rear lots, sloping blocks and townhouse or commercial projects where more hardstand area can change the way water moves across the site."
        ],
        "table": {
          "columns": [
            "Stormwater issue",
            "Evidence to check",
            "Common commercial risk"
          ],
          "rows": [
            [
              "Lawful discharge",
              "Outlet location, levels, ownership and approval pathway",
              "The site may need an easement or redesign."
            ],
            [
              "Overland flow",
              "Council mapping, survey levels and visible flow routes",
              "Buildings or access may sit in the wrong place."
            ],
            [
              "Detention",
              "Catchment, impervious area and downstream constraints",
              "Storage can consume valuable developable area."
            ],
            [
              "Water quality",
              "Treatment requirements and maintenance access",
              "Small sites can run out of room for practical devices."
            ]
          ]
        },
        "links": [
          {
            "label": "Council flooding and stormwater guidance and updates",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
          }
        ]
      },
      {
        "heading": "Why Sunshine Coast sites need local judgement",
        "body": [
          "Coastal infill, older urban areas, hinterland slopes, low-lying land and greenfield edges create different drainage problems. Some sites have formal stormwater infrastructure. Others rely on overland routes, table drains, gullies, easements or downstream private land.",
          "Council information, mapping and nearby approvals are useful starting points, but the real answer comes from the project survey, site levels, discharge route, development footprint and proposed civil design."
        ]
      },
      {
        "heading": "Mistakes that delay approvals",
        "body": [
          "The most common mistake is assuming stormwater can be solved after the planner or architect has locked the concept. If the outlet is too high, the downstream route is unavailable or detention takes too much space, the layout may need to change.",
          "Other mistakes include ignoring tailwater, placing buildings across overland flow paths, forgetting maintenance access, underestimating water quality treatment, and treating roofwater separately from the full site grading strategy."
        ]
      },
      {
        "heading": "Choose a stormwater scope around the problem to solve",
        "body": "A buyer screening a site needs a different deliverable from a developer responding to an information request or a contractor resolving a site change. Explain the decision and provide the evidence already available. The engineer should define the investigation, calculations and documentation needed for that stage. If the outlet is unconfirmed, a fully detailed tank design may be premature. If the works have already been built, the review may need investigation of actual levels and records before any certification can be considered.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Before purchase",
              "Outlet options and layout constraints.",
              "Decide which assumptions need investigation before commitment."
            ],
            [
              "Application or design",
              "Strategy, calculations and coordinated drawings.",
              "Demonstrate the proposal against applicable requirements."
            ],
            [
              "Construction or review",
              "Actual works, approved design and change records.",
              "Assess the specific issue on an evidence-based scope."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore stormwater and drainage design",
            "href": "/services/stormwater-drainage-design"
          },
          {
            "label": "Lawful point of discharge: why it can make or break a development",
            "href": "/insights/lawful-point-of-discharge-why-it-can-make-or-break-a-development"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Send survey, site layout, relevant conditions and existing reports with the engineering question you need answered.",
          "Ask whether the fee covers flood assessment, water-quality modelling or authority responses where relevant; these should not be assumed.",
          "Request a clear explanation of assumptions, exclusions and further evidence needed. Compare the scope and deliverables as well as the price."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Send CivilCity the address, survey if available, concept plan, known drainage assets, approval stage and the decision you need to make. For purchase due diligence, the key output may be a short drainage risk note. For approval or construction, the output may be a stormwater strategy, drawings or calculations.",
          "CivilCity can support stormwater feasibility, drainage layouts, detention and treatment coordination, lawful discharge checks, operational works documentation and responses to approval conditions."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "stormwater-drainage-design",
    "cta": {
      "label": "Stormwater and drainage design",
      "body": "Send the survey, concept and relevant conditions so the drainage question can be scoped."
    },
    "relatedSlugs": [
      "lawful-point-of-discharge-why-it-can-make-or-break-a-development",
      "stormwater-management-plan-sunshine-coast-when-development-needs-one",
      "flood-overlays-and-development-risk-on-the-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Council flooding and stormwater guidance and updates",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/infrastructure-guidelines-and-standards/flooding-and-stormwater-management-guidelines"
      }
    ]
  },
  {
    "slug": "civil-engineer-development-application-sunshine-coast",
    "title": "Civil engineer for a Sunshine Coast development application: what they check",
    "description": "How a civil engineer supports Sunshine Coast development applications by testing access, stormwater, services, levels, earthworks and approval-condition risk.",
    "date": "2026-09-23",
    "category": "Approvals",
    "keywords": [
      "civil engineer development application Sunshine Coast",
      "development application civil engineer Sunshine Coast",
      "civil engineering report development application Sunshine Coast",
      "civil engineer for DA Sunshine Coast",
      "development approval civil engineering Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "Does every DA need a civil engineer?",
        "answer": "No. The need depends on the proposal and site constraints. Civil input is valuable where access, stormwater, services, earthworks, parking, frontage works or construction conditions could affect approval or feasibility."
      },
      {
        "question": "Should the civil engineer be involved before lodgement?",
        "answer": "Yes where civil constraints are material. Early input is usually cheaper than redesign after an information request, approval condition or construction pricing issue."
      },
      {
        "question": "What information should I send first?",
        "answer": "Send the address, concept plan, survey if available, title information, planning pathway if known and the decision the team needs to make."
      },
      {
        "question": "Can civil engineering guarantee approval?",
        "answer": "No. It supports the application with better evidence and fewer avoidable design gaps, but approval depends on the full planning assessment and applicable requirements."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "A civil engineer helps a Sunshine Coast development application prove that the project can be accessed, drained, serviced and constructed. Their role is to test the physical reality behind the planning concept.",
          "The best time to involve civil engineering is before lodgement if the project has tight access, stormwater uncertainty, slope, flood risk, service constraints, parking issues, frontage works or a layout that depends on optimistic levels."
        ]
      },
      {
        "heading": "What civil engineering adds to a DA",
        "body": [
          "A planner may lead the development application, but the planner should not be left carrying civil assumptions alone. The civil engineer checks the site mechanics: driveway grades, sight distance, turning, drainage, discharge, services, earthworks, retaining, pavement and interfaces with public infrastructure.",
          "The output should match the project. Sometimes it is a short feasibility note. Sometimes it is a civil engineering report, concept drawings, stormwater strategy, access sketch, levels review or response to an information request."
        ],
        "table": {
          "columns": [
            "Civil question",
            "What the engineer checks",
            "Why it matters for the DA"
          ],
          "rows": [
            [
              "Can vehicles access the site?",
              "Grades, sight distance, swept paths and frontage",
              "Access problems can force layout changes."
            ],
            [
              "Can the site drain?",
              "Lawful discharge, overland flow, detention and levels",
              "Stormwater often drives information requests."
            ],
            [
              "Can services reach the proposal?",
              "Water, sewer, easements and likely clashes",
              "Service upgrades can affect cost and staging."
            ],
            [
              "Can it be built?",
              "Earthworks, retaining, boundaries and construction access",
              "Buildability issues become approval conditions or tender shocks."
            ]
          ]
        },
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "Where DA teams get caught",
        "body": [
          "The trap is lodging a polished plan that has not been tested against survey levels, drainage paths or service corridors. It may look approvable, but the first technical review exposes a driveway that is too steep, a discharge point that does not work or a retaining solution that consumes the buildable area.",
          "This is why CivilCity treats DA support as a feasibility protection step, not paperwork. The point is to remove fragile assumptions before the application, consultant budget and client expectations are locked in."
        ]
      },
      {
        "heading": "A practical DA civil review process",
        "body": [
          "Start with the address, title, survey, concept plan and proposed use or lot yield. Screen the planning scheme mapping, Development.i information and known services, then test the physical constraints against the concept.",
          "The team should record what is confirmed, what is assumed and what needs specialist input. This gives the planner and client a cleaner basis for lodgement and avoids pretending that every civil issue can be deferred."
        ]
      },
      {
        "heading": "What to include when requesting a civil-engineering proposal",
        "body": "To obtain a useful proposal, describe the intended use or lot yield, approval stage, key constraints and decision deadline. Include the best available survey and planning advice. Ask for a staged scope where feasibility is not yet established: testing the controlling constraints first can avoid commissioning detailed work on an unsuitable layout. The proposal should explain what the civil deliverable will demonstrate and what remains with the planner, surveyor, architect or specialist consultants.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Feasibility appointment",
              "Site, intended outcome and known constraints.",
              "Resolve the decision before spending on detail."
            ],
            [
              "DA support",
              "Concept revision and planning assessment needs.",
              "Agree the civil evidence required for lodgement."
            ],
            [
              "Post-approval design",
              "Full conditions and accepted plans.",
              "Scope detailed design and construction support separately."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore planning-stage civil engineering",
            "href": "/services/preliminary-civil-engineering-reporting-and-design"
          },
          {
            "label": "How civil engineering supports a Sunshine Coast development application",
            "href": "/insights/how-civil-engineering-supports-a-development-application"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Identify any reliance on neighbour rights, uncertain drainage or unconfirmed services in the brief. These can change the scope materially.",
          "Ask how design responsibility, RPEQ involvement and consultant coordination will be managed throughout the work.",
          "Agree how findings will be communicated: annotated plan, report, meeting or drawings, with a clear list of next decisions."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Bring CivilCity in before lodgement where the project involves subdivision, townhouse development, dual occupancy, commercial works, stormwater constraints, difficult access, flood or slope risk, or possible operational works conditions.",
          "CivilCity can provide planning-stage civil advice, access and stormwater strategy, servicing checks, civil reports, concept design input, appropriate RPEQ responsibility and support through approval conditions and operational works."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "preliminary-civil-engineering-reporting-and-design",
    "cta": {
      "label": "Planning-stage civil engineering",
      "body": "Share the proposal, current plans and approval stage to identify the civil evidence needed."
    },
    "relatedSlugs": [
      "how-civil-engineering-supports-a-development-application",
      "operational-works-application-sunshine-coast",
      "common-reasons-sunshine-coast-development-applications-get-delayed"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council development application forms",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/development-application-forms"
      },
      {
        "label": "Sunshine Coast Council Development.i",
        "href": "https://developmenti.sunshinecoast.qld.gov.au/"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      }
    ]
  },
  {
    "slug": "rpeq-civil-engineer-sunshine-coast",
    "title": "RPEQ civil engineer Sunshine Coast: when certification and review matter",
    "description": "When Sunshine Coast development projects need RPEQ civil engineering review, certification, design checks or a clearer engineering compliance trail.",
    "date": "2026-09-23",
    "category": "RPEQ",
    "keywords": [
      "RPEQ civil engineer Sunshine Coast",
      "RPEQ certification Sunshine Coast",
      "civil engineering certification Queensland",
      "registered professional engineer Queensland civil",
      "RPEQ operational works Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What is an RPEQ civil engineer?",
        "answer": "An RPEQ is a Registered Professional Engineer of Queensland. Check the individual’s current registration and relevant area of engineering in the BPEQ register when appointing the person responsible for your project."
      },
      {
        "question": "Does every civil drawing need RPEQ certification?",
        "answer": "The professional-service obligation and a particular drawing certificate are separate matters. Professional engineering services require appropriate RPEQ responsibility or direct supervision; the format and scope of certification also depend on the approval and recipient requirements."
      },
      {
        "question": "Can RPEQ review fix a bad design at the end?",
        "answer": "Not reliably. RPEQ review is strongest when engineering assumptions, calculations and drawings are coordinated before the project is locked in."
      },
      {
        "question": "Can CivilCity provide RPEQ support?",
        "answer": "CivilCity can support RPEQ review and certification pathways where the requested scope fits its civil engineering capability and the necessary evidence is available."
      }
    ],
    "sections": [
      {
        "heading": "RPEQ responsibility starts with the engineering service",
        "body": [
          "In Queensland, professional engineering services must be provided by an appropriately registered RPEQ or under the direct supervision of one. This concerns how the work is carried out, not just whether Council asks for a certificate at the end. Work performed only in accordance with a prescriptive standard falls outside the statutory definition of professional engineering services.",
          "For a development project, agree who is responsible for the engineering design and who will provide any separately required certification. Check the engineer’s registration and relevant area of competence, then define the deliverables and evidence for the engagement."
        ]
      },
      {
        "heading": "Design responsibility and certification have different scopes",
        "body": [
          "Direct supervision means directing, overseeing and evaluating the engineering work. A last-minute review of independently completed drawings should not be represented as supervision of the original work. A new engineer may need to investigate, recalculate or redesign before accepting responsibility for a defined scope.",
          "A design certificate addresses a design. Construction certification depends on the built work and the evidence available. Neither automatically supplies planning approval, a service-authority clearance or confirmation of ownership rights. Ask the recipient what certificate and supporting records it requires before appointing the engineer."
        ],
        "links": [
          {
            "label": "BPEQ: direct supervision",
            "href": "https://bpeq.qld.gov.au/for-engineers/resources-for-engineers/practice-notes/direct-supervison"
          }
        ]
      },
      {
        "heading": "What RPEQ review is not",
        "body": [
          "An RPEQ must have an adequate basis for any engineering opinion or certificate. It does not replace planning approval, survey, geotechnical evidence, asset-owner acceptance or the need to resolve inconsistent drawings.",
          "It is also not a guarantee of approval. It is professional engineering involvement directed to the scope being reviewed. The stronger the project evidence, the cleaner the review process becomes."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "The most common mistake is asking for certification after the design has already been priced, lodged or built without giving the engineer enough time or evidence to review it properly.",
          "Other mistakes include unclear scope, missing survey, undocumented assumptions, inconsistent drawings, no calculation trail, late design changes and confusing planning compliance with engineering certification."
        ]
      },
      {
        "heading": "Agree the evidence before asking for a certificate",
        "body": "For a construction-related opinion, the engineer needs evidence relevant to the requested scope. Approved drawings alone describe the intended works; they do not establish what was installed. Agree inspections, tests and survey records before concealment. If another party completed the design or the work is already built, explain that at the outset. The engineer may need additional investigation and should define what can and cannot be concluded from the available records. Never present a limited review as certification of every aspect of the development.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Design scope",
              "Design basis, calculations and coordinated drawings.",
              "Identify the engineering work and responsibility being accepted."
            ],
            [
              "Construction scope",
              "Inspections, tests, changes and as-constructed survey.",
              "Support an opinion about the relevant built work."
            ],
            [
              "Recipient requirement",
              "Condition or request and required certificate form.",
              "Align the deliverable with the actual purpose."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore rpeq review and certification",
            "href": "/services/rpeq-certification"
          },
          {
            "label": "What civil drawings are needed for operational works on the Sunshine Coast?",
            "href": "/insights/what-civil-drawings-are-needed-for-operational-works-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Confirm the responsible individual and relevant registration with BPEQ. Company marketing does not replace checking the engineer’s status.",
          "Give the engineer the original request and full project history relevant to the scope, including changes and missing evidence.",
          "Agree limitations and further investigations in writing before relying on a review for construction, approval or closeout decisions."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Contact CivilCity when you receive a condition, request or project requirement that mentions RPEQ review, engineering certification, civil design verification or professional engineering input.",
          "Send the approval condition or request, drawings, survey, calculations if available, previous correspondence and the deadline. CivilCity can then confirm what is needed and whether the package is ready for review or needs design work first."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "rpeq-certification",
    "cta": {
      "label": "RPEQ review and certification",
      "body": "Send the requested scope, drawings and available evidence to define the review."
    },
    "relatedSlugs": [
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast",
      "as-constructed-drawings-sunshine-coast-subdivision-closeout"
    ],
    "resources": [
      {
        "label": "Board of Professional Engineers of Queensland",
        "href": "https://www.bpeq.qld.gov.au/"
      },
      {
        "label": "Sunshine Coast Council operational work applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "BPEQ: direct supervision",
        "href": "https://bpeq.qld.gov.au/for-engineers/resources-for-engineers/practice-notes/direct-supervison"
      }
    ]
  },
  {
    "slug": "development-site-due-diligence-sunshine-coast",
    "title": "Development site due diligence Sunshine Coast: civil checks before you buy",
    "description": "A buyer-focused civil engineering due diligence guide for Sunshine Coast development sites, covering access, stormwater, services, easements, slope and hidden costs.",
    "date": "2026-09-23",
    "category": "Due diligence",
    "keywords": [
      "development site due diligence Sunshine Coast",
      "civil engineering due diligence Sunshine Coast",
      "pre purchase civil engineering review Sunshine Coast",
      "development site checklist Sunshine Coast",
      "property development feasibility Sunshine Coast"
    ],
    "faqs": [
      {
        "question": "What should development site due diligence check?",
        "answer": "At minimum, check access, stormwater discharge, services, easements, slope, flood or overlays, road frontage, earthworks, retaining, constructability and likely approval-condition risk."
      },
      {
        "question": "Should due diligence happen before making an offer?",
        "answer": "Ideally yes, or at least before the contract becomes unconditional. The aim is to identify cost and yield risks while the buyer can still negotiate, redesign or walk away."
      },
      {
        "question": "Can a desktop review replace survey?",
        "answer": "No. A desktop review is useful for early screening, but survey and site-specific design evidence are needed before relying on levels, boundaries, drainage and buildability."
      },
      {
        "question": "What should I send CivilCity for a first review?",
        "answer": "Send the address, title or lot plan, listing or contract timing, proposed development outcome, survey if available and the specific decision you need to make."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "Before buying a Sunshine Coast development site, check the civil engineering issues that can change yield, approval risk, construction cost and programme. The big ones are access, stormwater, services, easements, slope, overlays and buildability.",
          "A site can look attractive in a listing and still be a poor development deal if the driveway cannot work, stormwater has no practical outlet, sewer is hard to reach, or the best building area is consumed by overlays, retaining or easements."
        ]
      },
      {
        "heading": "The due diligence checks that protect margin",
        "body": [
          "Good due diligence should produce a decision, not a folder of screenshots. It should tell you what appears workable, what needs further evidence, what could affect price and what assumptions should be written into the feasibility model.",
          "Start with council information, planning scheme mapping, title documents, nearby approvals and visible site constraints. Then test how those constraints affect the development outcome you actually want."
        ],
        "table": {
          "columns": [
            "Check",
            "Evidence to seek",
            "Decision it informs"
          ],
          "rows": [
            [
              "Access",
              "Frontage, sight distance, grades and existing driveway options",
              "Can the proposed use or lot layout function safely?"
            ],
            [
              "Stormwater",
              "Outlet, levels, overland flow, easements and downstream route",
              "Can the site drain without killing yield?"
            ],
            [
              "Services",
              "Water, sewer, electricity and likely extension points",
              "Will connections be simple or expensive?"
            ],
            [
              "Slope and earthworks",
              "Survey levels, retaining risk and building envelopes",
              "Will the site need costly walls, fill or redesign?"
            ],
            [
              "Overlays and easements",
              "Planning mapping, title, survey and site report",
              "What land is constrained before design starts?"
            ]
          ]
        },
        "links": [
          {
            "label": "Current Sunshine Coast Planning Scheme",
            "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
          }
        ]
      },
      {
        "heading": "What buyers often miss",
        "body": [
          "Buyers often focus on zone, lot size and headline yield. Those are important, but civil constraints decide whether the yield can be built at a price that still makes sense.",
          "The hidden risks are usually practical: a low rear lot that cannot drain by gravity, a narrow frontage that fails access, an easement through the best building pad, an old sewer crossing the site, or a retaining wall that was never in the agent's feasibility."
        ]
      },
      {
        "heading": "A practical pre-purchase process",
        "body": [
          "First, define the intended outcome: subdivision, townhouse, dual occupancy, commercial use or land banking. Second, screen the public planning and development information. Third, test access, drainage, services, slope and easements against that outcome. Fourth, identify what needs survey, planning, hydraulic, geotechnical or other specialist evidence.",
          "The best output is a short risk note that separates deal breakers from manageable design issues. That helps the buyer negotiate price, adjust the concept, extend due diligence or walk away before sunk cost takes over."
        ]
      },
      {
        "heading": "What a useful engineering due-diligence deliverable contains",
        "body": "This guide concerns commissioning the review. The output should explain the civil constraints against your intended development, rather than simply reproduce public mapping. Expect a clear distinction between observed facts, assumptions and matters requiring investigation. A desktop review may be appropriate for an initial screen; it is not equivalent to surveyed design or confirmation from a service authority. Choose the scope around the purchase decision, the available time and the consequence of being wrong about a critical assumption.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Risk finding",
              "Location, evidence and effect on the proposed outcome.",
              "Understand why the issue matters to this site."
            ],
            [
              "Investigation need",
              "Defined next task and responsible discipline.",
              "Resolve uncertainty with a purposeful scope."
            ],
            [
              "Decision summary",
              "Options, limitations and remaining dependencies.",
              "Inform the next commercial and professional advice."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore engineering due diligence",
            "href": "/services/engineering-due-diligence"
          },
          {
            "label": "Before you buy a development site: civil engineering checks that matter",
            "href": "/insights/before-you-buy-a-development-site-civil-engineering-checks-that-matter"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Brief the intended outcome, acquisition deadline and information available. Explain which assumption supports the purchase price.",
          "Ask the consultant to identify the highest-impact unresolved risk and the quickest credible way to investigate it.",
          "Share the report with the planner, surveyor and solicitor so technical assumptions are not mistaken for planning approval or legal rights."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Bring CivilCity in before going unconditional where the site value depends on development potential. A fast civil review can help you understand whether the project needs more investigation or whether the civil risk is already obvious enough to affect the offer.",
          "CivilCity can review Sunshine Coast development sites for access, stormwater, services, slope, easements, overlays, likely operational works and construction-cost risk, then coordinate with your planner, surveyor or designer on the next step."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "engineering-due-diligence",
    "cta": {
      "label": "Engineering due diligence",
      "body": "Send the address, intended outcome and decision deadline for a focused engineering scope."
    },
    "relatedSlugs": [
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "how-to-read-a-sunshine-coast-council-site-report",
      "how-can-i-see-easements-on-my-property"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council Development.i site report",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-tools-and-guidelines/development-i-site-report"
      },
      {
        "label": "Sunshine Coast Council interactive mapping",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014/interactive-mapping"
      },
      {
        "label": "Current Sunshine Coast Planning Scheme",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      }
    ]
  },
  {
    "slug": "when-does-a-subdivision-need-operational-works",
    "title": "When does a Sunshine Coast subdivision need operational works?",
    "description": "A practical guide to operational works triggers for Sunshine Coast subdivisions, including roads, stormwater, earthworks, services, documentation and plan-sealing risk.",
    "date": "2026-09-25",
    "category": "Operational works",
    "keywords": [
      "operational works subdivision Sunshine Coast",
      "when does subdivision need operational works",
      "Sunshine Coast operational works application",
      "subdivision civil engineering Sunshine Coast",
      "plan sealing operational works"
    ],
    "faqs": [
      {
        "question": "Does every Sunshine Coast subdivision need an operational works application?",
        "answer": "Not every proposal follows exactly the same pathway. The need depends on the approval conditions, the work proposed and whether development infrastructure such as roads, access, drainage, earthworks or services must be constructed or altered. Confirm the applicable pathway with Council and the approval documents for the site."
      },
      {
        "question": "Can I start subdivision construction after the reconfiguration approval?",
        "answer": "Do not assume so. A reconfiguration approval may be followed by conditions, operational works approvals, detailed civil documentation, bonds, inspections or other pre-start requirements. Construction should proceed against the approved documents and required permissions, not only the original concept plan."
      },
      {
        "question": "What civil works commonly trigger operational works?",
        "answer": "Common triggers include new roads or road widening, kerb and channel, frontage works, stormwater infrastructure, earthworks, retaining, access works, sewer or water infrastructure and works needed to satisfy development conditions. The exact trigger is site and approval specific."
      },
      {
        "question": "When should a civil engineer be involved?",
        "answer": "Before the subdivision concept is fixed and again as soon as approval conditions are issued. Early civil input tests whether the proposed lots can be accessed, drained, serviced and constructed; post-approval design translates conditions into coordinated, buildable documentation."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "A Sunshine Coast subdivision generally needs an operational works pathway when the approved development requires physical works to create compliant, serviceable lots. That can include new or altered access, roads, stormwater drainage, earthworks, retaining, frontage works, sewer, water or other infrastructure required by the approval conditions.",
          "The important distinction is between approving the land-use or reconfiguration proposal and approving or authorising the civil work needed to deliver it. A subdivision approval is not automatically a construction-ready civil package. Read the conditions, confirm the required application pathway with Council and have the civil design coordinated before work starts."
        ]
      },
      {
        "heading": "Why the trigger matters",
        "body": [
          "Operational works is where a planning concept becomes physical infrastructure. A layout that appears acceptable on a subdivision plan may still need detailed levels, grades, drainage calculations, service coordination, erosion and sediment controls, construction details and inspection points before it can be built and closed out.",
          "For developers, the risk is timing. If operational works is treated as a late administrative step, the project can lose months to redesign, information requests, missing survey data, service clashes, unpriced frontage works or incomplete records needed for plan sealing."
        ],
        "links": [
          {
            "label": "Council operational work requirements",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
          }
        ]
      },
      {
        "heading": "What to check after the subdivision approval",
        "body": [],
        "table": {
          "columns": [
            "Question",
            "Evidence to review",
            "Practical implication"
          ],
          "rows": [
            [
              "What works are conditioned?",
              "Decision notice, conditions and approved plans",
              "Create a condition register before detailed design."
            ],
            [
              "Is a separate operational works pathway required?",
              "Council application guidance and the specific approval",
              "Confirm the pathway before procurement or construction."
            ],
            [
              "Can the lots be accessed and drained?",
              "Survey, levels, driveway grades, stormwater and discharge",
              "A planning layout may need civil revision."
            ],
            [
              "Are services or frontage works affected?",
              "Existing services, road reserve and authority requirements",
              "Allow for coordination, protection or upgrades."
            ],
            [
              "What closes the project?",
              "Inspection, as-constructed and plan-sealing requirements",
              "Capture evidence during construction, not after the contractor leaves."
            ]
          ]
        }
      },
      {
        "heading": "Common operational works components",
        "body": [
          "On a small Sunshine Coast subdivision, the package may include civil drawings for access and driveways, road or frontage works, stormwater drainage, earthworks and retaining, erosion and sediment control, sewer and water servicing, and details for any conditioned infrastructure. Sloping Buderim or hinterland sites may need more attention to grades, retaining and overland flow. Coastal and low-lying sites can make lawful discharge, flood behaviour and construction levels the controlling issue.",
          "The drawings should be based on reliable survey information and coordinated with the planner, cadastral surveyor, architect, geotechnical engineer and relevant service authorities. The civil engineer should identify assumptions such as point of discharge, service connection location, retaining ownership and finished levels rather than burying them in a note that nobody checks."
        ]
      },
      {
        "heading": "A practical decision process",
        "body": [],
        "list": [
          "Read the development approval and mark every condition involving infrastructure, access, drainage, earthworks, services, inspection or plan sealing.",
          "Compare those conditions with the approved layout and identify work outside the original concept.",
          "Confirm the Council pathway and required forms, plans, calculations, reports and fees.",
          "Update the survey and civil base plan.",
          "Test grades, sight distance, turning, stormwater, services, earthworks and retaining.",
          "Coordinate the package with the planner, surveyor and contractor before lodging or starting work.",
          "Build an inspection and records schedule that leads to as-constructed information and plan sealing."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that cost money or delay closeout",
        "body": [
          "A common mistake is assuming the subdivision approval itself authorises every physical work. Another is designing from an old concept plan after conditions have changed the access, drainage or lot layout. Both mistakes create rework and can leave the contractor pricing the wrong scope.",
          "Developers also underestimate closeout. Missing inspection evidence, unapproved changes, incomplete as-constructed drawings, unresolved bonds or a service authority sign-off can hold up plan sealing even when the works look finished. Treat closeout as part of the construction package from day one."
        ]
      },
      {
        "heading": "Triage the conditions before commissioning the detailed package",
        "body": "This guide addresses the trigger question. Read the approval alongside the works being proposed and confirm the applicable pathway, including any works that are not simply part of the Council operational works submission. Water and sewer network works need separate consideration with Unitywater. Where the wording or extent is unclear, seek project-specific clarification before a contractor starts. An assumption that a small subdivision is exempt is not a reliable construction instruction.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Specified works",
              "Condition, location and physical scope.",
              "Identify the submission or authorisation required."
            ],
            [
              "Separate authority work",
              "Network connection or external infrastructure interface.",
              "Confirm the relevant owner’s process."
            ],
            [
              "Commencement conditions",
              "Prestart, permits and inspection requirements.",
              "Translate approval into a construction readiness list."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore operational works applications",
            "href": "/services/operational-works-applications"
          },
          {
            "label": "Operational works application Sunshine Coast: what developers need before construction",
            "href": "/insights/operational-works-application-sunshine-coast"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Mark conditions by when they must be satisfied, not just by discipline.",
          "Ask which inputs are needed to decide the pathway and which are needed later to design the works.",
          "Use the application-package and drawing-schedule guides for the next briefing stage after the trigger is confirmed."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Bring CivilCity in before purchase or before the subdivision layout is locked if the project depends on a narrow frontage, shared access, steep land, flood or overland flow, difficult discharge, existing services, retaining or frontage works. After approval, send the decision notice, conditions, approved plans, survey and target construction date so the required civil scope can be confirmed quickly.",
          "CivilCity helps Sunshine Coast developers translate approval conditions into coordinated operational works documentation, test access and levels, design stormwater and servicing solutions, coordinate construction support and maintain the evidence needed for practical completion and plan sealing. The goal is a buildable package with fewer surprises between approval and registered lots."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "operational-works-applications",
    "cta": {
      "label": "Operational works applications",
      "body": "Send the decision notice, approved plans and survey to define the engineering package."
    },
    "relatedSlugs": [
      "operational-works-application-sunshine-coast",
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast",
      "as-constructed-drawings-sunshine-coast-subdivision-closeout"
    ],
    "resources": [
      {
        "label": "Council operational work requirements",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Council development applications",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications"
      },
      {
        "label": "Sunshine Coast Council plan sealing",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      }
    ]
  },
  {
    "slug": "what-civil-drawings-are-needed-for-operational-works-sunshine-coast",
    "title": "What civil drawings are needed for operational works on the Sunshine Coast?",
    "description": "A practical guide to the civil drawing package for Sunshine Coast operational works, including access, stormwater, earthworks, services, erosion control and construction closeout.",
    "date": "2026-09-26",
    "category": "Operational works",
    "keywords": [
      "civil drawings operational works Sunshine Coast",
      "operational works plans Sunshine Coast",
      "subdivision civil drawings Sunshine Coast",
      "stormwater earthworks drawings development",
      "civil engineer operational works"
    ],
    "faqs": [
      {
        "question": "What drawings are commonly needed for Sunshine Coast operational works?",
        "answer": "The package depends on the approval and works, but commonly includes a cover or locality plan, existing conditions and demolition, earthworks and levels, access and roadworks, stormwater drainage, services, erosion and sediment control, details and notes. The approved conditions and Council requirements determine the final scope."
      },
      {
        "question": "Can the planning concept plan be used for construction?",
        "answer": "Usually not by itself. A planning concept may show the intended outcome, but construction needs coordinated levels, dimensions, details, calculations, service information, notes and certification appropriate to the works."
      },
      {
        "question": "Do operational works drawings need RPEQ certification?",
        "answer": "Some engineering work may require professional engineering services and certification by a registered professional engineer. Confirm the applicable requirement for the scope, approval conditions and submitting professionals."
      },
      {
        "question": "When should the civil drawings be prepared?",
        "answer": "Start after the development approval conditions are understood and before procurement or construction. Early coordination exposes survey, service, discharge and access issues while changes are still affordable."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "A Sunshine Coast operational works package normally needs coordinated civil drawings that show how the approved development will be built, drained, serviced and connected to existing infrastructure. Depending on the project, that can include access and roadworks, stormwater, earthworks and retaining, water and sewer, erosion and sediment control, construction details and survey information for closeout.",
          "The exact list is not a generic checklist. It follows the development approval, conditions, proposed works and Council's current application requirements. A useful package turns each relevant condition into a measurable, buildable drawing or supporting document rather than simply resubmitting the planning concept."
        ]
      },
      {
        "heading": "Why the drawing package matters",
        "body": [
          "Operational works is the point where a subdivision, townhouse project or other development moves from an approved idea to physical infrastructure. Contractors need enough information to set out levels, understand interfaces, price the scope and build without inventing design decisions on site.",
          "For the developer, incomplete drawings create more than a drafting problem. They can lead to information requests, tender exclusions, variations, service clashes, failed inspections, unapproved changes and missing evidence when plan sealing or other closeout approval is needed."
        ],
        "links": [
          {
            "label": "Council operational work requirements",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
          }
        ]
      },
      {
        "heading": "Typical drawing schedule",
        "body": [
          "The drawing schedule below is a starting point for a small Sunshine Coast subdivision or similar civil package. Some projects need fewer sheets; constrained sites, roadworks or complex drainage may need substantially more detail."
        ],
        "table": {
          "columns": [
            "Drawing group",
            "What it should resolve",
            "Typical project risk if missing"
          ],
          "rows": [
            [
              "Existing conditions and survey",
              "Boundaries, levels, services, vegetation, structures and tie-ins",
              "Design built from wrong levels or uncertain assets"
            ],
            [
              "Earthworks and finished levels",
              "Cut, fill, batters, retaining, lot grades and adjoining interfaces",
              "Unbuildable grades, runoff to neighbours or unpriced walls"
            ],
            [
              "Access and roadworks",
              "Driveways, pavements, kerb, footpaths, sight lines and connections",
              "Failed access, unsafe grades or frontage variations"
            ],
            [
              "Stormwater drainage",
              "Pits, pipes, overland flow, discharge, easements and details",
              "Flooding, blocked approval pathway or rework during construction"
            ],
            [
              "Services",
              "Water, sewer, utility corridors, protection and connection points",
              "Clashes, authority redesign or delayed service connections"
            ],
            [
              "Erosion and sediment control",
              "Staging, controls, site protection and maintenance",
              "Environmental incident, stop-work risk or failed inspection"
            ]
          ]
        }
      },
      {
        "heading": "Technical checks behind the drawings",
        "body": [
          "The drawings should be based on a reliable feature and level survey and coordinated with the approved plans, title information, easements, service searches and any relevant geotechnical or specialist advice. The civil engineer should test the design rather than merely illustrate it.",
          "For access, check grades, transitions, crossfalls, turning, sight distance and connection details. For stormwater, confirm catchments, pipe grades, pits, major flow paths, lawful discharge and downstream consequences. For earthworks, show finished levels, batter limits, retaining ownership and how the design meets adjoining land. For services, identify connection points, conflicts, protection and authority requirements.",
          "Where the site is sloping, flood-affected, constrained by an easement or close to existing infrastructure, sections and details often matter as much as the plan view. A single coloured layout cannot demonstrate that the works are constructible."
        ]
      },
      {
        "heading": "A practical preparation process",
        "body": [
          "The last step is routinely missed. If the project team does not decide in advance what will be surveyed, photographed, tested and certified, the evidence may be unavailable when the works are covered or the contractor has left site."
        ],
        "list": [
          "Build a condition register from the development approval and approved plans.",
          "Confirm the operational works pathway, forms, fees and required supporting information with Council.",
          "Update the survey and service information.",
          "Prepare the civil base plan and coordinate the layout with the planner, surveyor, architect, geotechnical engineer and authorities.",
          "Design access, levels, earthworks, drainage, services and erosion controls as one system.",
          "Check every sheet against the conditions and each other.",
          "Set up inspection points and as-constructed requirements before construction starts."
        ],
        "ordered": true
      },
      {
        "heading": "Common mistakes that cost money",
        "body": [
          "A common mistake is submitting a drawing set that is visually polished but not coordinated: different finished levels, inconsistent lot numbers, missing details or a stormwater design that does not match the earthworks plan. Another is using an old survey or ignoring service changes discovered after approval.",
          "Developers also lose time by treating construction drawings and as-constructed drawings as the same thing. The approved design shows what is intended; the as-constructed record shows what was actually installed. Unapproved site changes, missing inspection records and incomplete survey pickup can delay practical completion and plan sealing even when the infrastructure appears finished.",
          "Finally, do not assume that a civil drawing package guarantees approval. Council, service authorities and other agencies assess the submitted material against the applicable requirements and conditions. The drawings should make the proposal clear and defensible, not promise an outcome."
        ]
      },
      {
        "heading": "Check that the set is coordinated before issue",
        "body": "A drawing schedule is a completeness aid, not a substitute for design review. Check that the same levels, boundaries, infrastructure and revision status appear across the sheets. Where a detail refers to another consultant’s design, confirm that information exists and that the interface has been resolved. A contractor should be able to identify the current construction issue and raise a query without choosing between conflicting drawings.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Geometry",
              "Plans, sections, levels and dimensions.",
              "Resolve conflicts across the drawing set."
            ],
            [
              "Interfaces",
              "Structures, services, architecture and landscape.",
              "Confirm external design inputs and responsibility."
            ],
            [
              "Issue control",
              "Revision register, status and superseded documents.",
              "Make the authorised construction set unambiguous."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore operational works applications",
            "href": "/services/operational-works-applications"
          },
          {
            "label": "When does a Sunshine Coast subdivision need operational works?",
            "href": "/insights/when-does-a-subdivision-need-operational-works"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Trace one critical route, such as the stormwater outlet or driveway, through every relevant plan and section.",
          "Check that outstanding assumptions are visibly identified and closed before the affected work proceeds.",
          "Include as-constructed requirements and hold points in the delivery scope, not only in a generic final note."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Involve CivilCity as soon as the approval conditions are issued, or earlier if the project needs access, drainage, earthworks, services or frontage works to establish feasibility. Send the decision notice, conditions, approved plans, current survey, title and easement information, service searches and construction timing.",
          "CivilCity can turn the conditions into a coordinated Sunshine Coast operational works package, test the design against real levels and constraints, coordinate with your planner and surveyor, support authority responses and help plan inspections, as-constructed records and closeout. That is the difference between a drawing set that looks complete and a package that can be priced, built and closed out."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "operational-works-applications",
    "cta": {
      "label": "Operational works applications",
      "body": "Send the decision notice, approved plans and survey to define the engineering package."
    },
    "relatedSlugs": [
      "when-does-a-subdivision-need-operational-works",
      "operational-works-application-sunshine-coast",
      "as-constructed-drawings-sunshine-coast-subdivision-closeout"
    ],
    "resources": [
      {
        "label": "Council operational work requirements",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Council plan sealing",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Queensland development assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      }
    ]
  },
  {
    "slug": "as-constructed-drawings-sunshine-coast-subdivision-closeout",
    "title": "As-constructed drawings: why they matter for Sunshine Coast subdivision closeout",
    "description": "A practical guide to as-constructed drawings for Sunshine Coast subdivision and operational works, including survey pickup, inspections, changes and plan-sealing risk.",
    "date": "2026-09-27",
    "category": "Operational works",
    "keywords": [
      "as-constructed drawings Sunshine Coast",
      "subdivision plan sealing Sunshine Coast",
      "operational works closeout",
      "civil as constructed survey"
    ],
    "faqs": [
      {
        "question": "What are as-constructed drawings?",
        "answer": "They record what was actually built, including final levels, locations, dimensions and relevant infrastructure details. They are different from approved design drawings, which show what was intended."
      },
      {
        "question": "When should as-constructed information be collected?",
        "answer": "Plan it before construction and collect critical information while assets, connections and levels are visible. Waiting until the site is finished can make buried infrastructure difficult to verify."
      },
      {
        "question": "Can missing as-constructed drawings delay plan sealing?",
        "answer": "Yes. Incomplete records, unresolved variations, missing inspection evidence or uncertainty about constructed infrastructure can delay demonstrating that conditions and closeout requirements have been satisfied."
      },
      {
        "question": "Who prepares the final record?",
        "answer": "The civil engineer coordinates the requirements, while construction records and survey pickup are normally supplied by the contractor's surveyor or another suitably qualified survey professional."
      }
    ],
    "sections": [
      {
        "heading": "Quick answer",
        "body": [
          "As-constructed drawings record the infrastructure that was actually built on a Sunshine Coast development site. They can show final lot levels, roads, driveways, stormwater pipes and pits, drainage connections, services, retaining interfaces and other works relevant to completion and plan sealing.",
          "The approved civil drawings describe the design, not necessarily the final site. If construction changed a level, alignment, pipe location, pit position or connection, the closeout record needs to show that change clearly and be supported by the required inspections, tests, certificates and approvals. Plan sealing should be treated as a deliverable designed into construction, not paperwork discovered at the end."
        ]
      },
      {
        "heading": "Why the distinction matters",
        "body": [
          "A subdivision can look complete while the project file is not. A contractor may adjust a stormwater line around an existing service, change a retaining edge or alter a driveway level. Those changes may be reasonable, but they still need to be assessed, documented and approved where required.",
          "The commercial risk appears when civil works look finished and registration is expected, but the team has to reconstruct what happened months earlier. Missing evidence can mean extra survey, exposure of buried assets, redesign, authority queries or a contractor return visit."
        ],
        "links": [
          {
            "label": "Council operational work requirements",
            "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
          }
        ]
      },
      {
        "heading": "What the closeout record should answer",
        "body": [
          "The exact submission requirements depend on the approval, works and Council's current process. As a practical starting point, the record should show what was installed, where it is, what levels and dimensions apply, and whether the work matches the approved design or an accepted variation."
        ],
        "table": {
          "columns": [
            "Question",
            "Evidence to coordinate",
            "Why it matters"
          ],
          "rows": [
            [
              "Where are the assets?",
              "Surveyed alignments, pits, pipes, kerbs and connections",
              "Confirms the infrastructure footprint."
            ],
            [
              "What levels were achieved?",
              "Surface, invert, cover, lot and tie-in levels",
              "Confirms drainage, access and falls."
            ],
            [
              "What changed?",
              "Marked-up drawings, variation records and approvals",
              "Prevents hidden site changes."
            ],
            [
              "Was the work inspected?",
              "Inspection records, tests, photos and certificates",
              "Supports completion and condition responses."
            ],
            [
              "Can the project close out?",
              "Coordinated package and outstanding-item register",
              "Connects construction evidence to plan sealing."
            ]
          ]
        }
      },
      {
        "heading": "A Sunshine Coast example",
        "body": [
          "Imagine a two-lot subdivision in Buderim with a shared access handle and a new stormwater connection. An existing service forces the contractor to shift a pipe, move a pit and adjust the driveway transition to suit the surveyed road level.",
          "A better process records the change immediately, confirms the revised design response, surveys the installed infrastructure before it is covered, and updates the as-constructed drawing with final levels and connection details."
        ]
      },
      {
        "heading": "Practical closeout process",
        "body": [],
        "list": [
          "Read the approval conditions and Council's operational works and plan-sealing requirements before construction.",
          "Add as-constructed deliverables to the contractor's scope and inspection plan.",
          "Agree which assets need survey pickup before backfill.",
          "Record site changes immediately and obtain confirmation where required.",
          "Collect tests, inspections, photos, certificates and service sign-offs as work progresses.",
          "Reconcile the final survey against the approved drawings and condition register.",
          "Resolve outstanding items before requesting completion or plan sealing."
        ],
        "ordered": true
      },
      {
        "heading": "Mistakes that cause closeout delays",
        "body": [
          "The most common mistake is asking for an as-constructed plan after the contractor has demobilised. Other failures include relying on red-line sketches without survey pickup, omitting invert levels, showing design values instead of installed values, failing to record service connections, and treating a construction variation as informal because it looks minor.",
          "The survey, civil plan, engineering certificate, service authority record and plan-sealing application should describe the same completed works. If they disagree, someone must investigate before the file can be closed."
        ]
      },
      {
        "heading": "Specify what must be captured before work is covered",
        "body": "The as-constructed scope should be agreed with the engineer, surveyor and contractor before installation. Identify which assets need survey, what attributes must be recorded and which inspections or tests support acceptance. A photograph can help explain a detail but does not replace a surveyed position or level where one is required. Reconcile the collected information with approved changes while the team can still investigate discrepancies on site.",
        "table": {
          "columns": [
            "Decision or stage",
            "Evidence to check",
            "Practical outcome"
          ],
          "rows": [
            [
              "Survey pickup",
              "Asset position, levels and required attributes.",
              "Capture information before access is lost."
            ],
            [
              "Quality evidence",
              "Inspection, testing and product records.",
              "Support the relevant completion requirements."
            ],
            [
              "Change record",
              "Reason, design response and acceptance where required.",
              "Distinguish installed changes from undocumented departures."
            ]
          ]
        },
        "links": [
          {
            "label": "Explore construction and closeout support",
            "href": "/services/construction-supervision"
          },
          {
            "label": "When does a Sunshine Coast subdivision need operational works?",
            "href": "/insights/when-does-a-subdivision-need-operational-works"
          }
        ]
      },
      {
        "heading": "Checklist for your project brief",
        "body": "Use these points to define the next investigation or consultant deliverable.",
        "list": [
          "Include the record requirements in contractor and survey scopes so neither assumes the other is collecting them.",
          "Review the closeout file during construction and chase gaps promptly.",
          "Check that final plans show installed values and reference the correct approval and variations, rather than relabelling the design set."
        ]
      },
      {
        "heading": "When CivilCity should be involved",
        "body": [
          "Bring CivilCity in before construction starts if the project has conditioned infrastructure, new drainage, shared access, retaining, frontage works, service relocations or a plan-sealing deadline. Send the approval decision and conditions, approved civil plans, current survey, construction programme and proposed variations.",
          "CivilCity can define closeout requirements, coordinate inspection and survey inputs, review changes against the approved design, update the as-constructed package and identify unresolved items before they become a plan-sealing problem. The goal is a traceable record of what was built."
        ]
      }
    ],
    "updatedDate": "2026-09-27",
    "serviceSlug": "construction-supervision",
    "cta": {
      "label": "Construction and closeout support",
      "body": "Send the conditions, approved plans and outstanding records to identify the civil closeout tasks."
    },
    "relatedSlugs": [
      "when-does-a-subdivision-need-operational-works",
      "operational-works-application-sunshine-coast",
      "what-civil-drawings-are-needed-for-operational-works-sunshine-coast"
    ],
    "resources": [
      {
        "label": "Sunshine Coast Council plan sealing",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/plan-sealing"
      },
      {
        "label": "Council operational work requirements",
        "href": "https://www.sunshinecoast.qld.gov.au/development/development-applications/operational-work"
      },
      {
        "label": "Sunshine Coast Planning Scheme 2014",
        "href": "https://www.sunshinecoast.qld.gov.au/development/planning-documents/sunshine-coast-planning-scheme-2014"
      },
      {
        "label": "Queensland Development Assessment",
        "href": "https://www.planning.qld.gov.au/planning-framework/development-assessment"
      },
      {
        "label": "Unitywater subdivision servicing pathway",
        "href": "https://www.unitywater.com/building-and-developing/developing/subdivisions"
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
export const latestBlogPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
export function getArticleWordCount(post: BlogPost) {
  const text = post.sections.flatMap((section) => [
    section.heading, ...(Array.isArray(section.body) ? section.body : [section.body]),
    ...(section.list ?? []), ...(section.table?.columns ?? []), ...(section.table?.rows.flat() ?? []),
  ]).concat(post.faqs.flatMap((faq) => [faq.question, faq.answer])).join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}
export function getSectionId(index: number) { return `section-${index + 1}`; }
