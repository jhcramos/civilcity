export type ServiceBrief = {
  heading: string;
  introduction: string;
  decisions: { situation: string; scope: string; result: string }[];
  documents: string[];
  feeFactors: string;
};

export const serviceBriefs: Record<string, ServiceBrief> = {
  "stormwater-drainage-design": {
    heading: "Resolve drainage constraints before they reshape your development",
    introduction: "Engage a stormwater engineer for a Sunshine Coast subdivision, infill development or commercial site when runoff, detention or the discharge arrangement affects your layout. CivilCity connects the drainage design with access, earthworks and the approval conditions so your consultant team can work from a coordinated plan.",
    decisions: [
      { situation: "Before the layout is fixed", scope: "Review site levels, likely flow paths and potential discharge constraints.", result: "Identify where drainage space or further investigation may be needed." },
      { situation: "Preparing an application", scope: "Develop the agreed stormwater design, calculations and supporting documentation.", result: "Give the assessment team a documented engineering response." },
      { situation: "Responding to conditions or a request for information", scope: "Review the specific drainage issue against the current plans and supporting information.", result: "Define the design changes and evidence needed for the response." },
    ],
    documents: ["Site address and proposed development", "Survey with levels, if available", "Current layout and previous drainage reports", "Approval conditions or the council request you need to address"],
    feeFactors: "The scope depends on catchment complexity, available survey, the proposed discharge arrangement, detention requirements and the level of documentation required. Send the plans you have so we can identify missing inputs and prepare a project-specific proposal.",
  },
  "reconfiguration-of-a-lot-engineering": {
    heading: "Test the civil works behind your subdivision layout",
    introduction: "A subdivision needs more than enough land area. Access, drainage, levels and service connections can change the layout and the works budget. CivilCity helps Sunshine Coast owners, developers and planners assess these constraints before committing to a Reconfiguration of a Lot application or detailed design.",
    decisions: [
      { situation: "Considering a subdivision", scope: "Review access, stormwater, frontage and servicing constraints against the proposed lots.", result: "Identify civil issues that need resolving before progressing the concept." },
      { situation: "Preparing the ROL application", scope: "Coordinate civil advice with the planner and surveyor's proposed layout.", result: "Support the application with a clearer explanation of the engineering approach." },
      { situation: "Approval received", scope: "Review civil conditions and define the operational works design scope.", result: "Plan the next engineering stage and its required inputs." },
    ],
    documents: ["Property address and lot/plan reference", "Survey and proposed lot layout, where available", "Known easements and service information", "Planning advice, existing approvals and the intended development programme"],
    feeFactors: "Lot numbers alone do not determine engineering fees. Frontage upgrades, shared access, steep terrain, drainage constraints and available site information all affect the scope. We define the required civil work and any specialist inputs before you commission the next stage.",
  },
  "operational-works-applications": {
    heading: "Turn approval conditions into a defined civil design package",
    introduction: "Have development approval and need to move towards construction? CivilCity helps Sunshine Coast project teams translate civil conditions into drawings, calculations and application documentation. Start with the decision notice so the design scope responds to the actual approval.",
    decisions: [
      { situation: "Scoping the next stage", scope: "Review the decision notice, approved plans and civil conditions.", result: "Agree which drawings, calculations and supporting inputs are needed." },
      { situation: "Preparing operational works documentation", scope: "Coordinate access, drainage, earthworks and frontage design within the agreed scope.", result: "Prepare a civil package for the relevant application and assessment process." },
      { situation: "Council requests further information", scope: "Review the request, identify dependencies and prepare the agreed engineering response.", result: "Address the assessment issue with coordinated revisions." },
    ],
    documents: ["Complete decision notice and conditions", "Approved plans and any endorsed reports", "Current survey and consultant drawings", "Council correspondence and your proposed construction programme"],
    feeFactors: "The proposal depends on the civil conditions, infrastructure involved, design maturity and specialist coordination. Council fees, construction costs and other consultants' fees are separate from civil engineering fees unless expressly included. Assessment timeframes remain with the relevant authority.",
  },
  "rpeq-certification": {
    heading: "Clarify the review needed for your civil engineering sign-off",
    introduction: "Need an RPEQ civil engineer to review a design or address a certification requirement? Send CivilCity the drawings and the exact request from council or your project team. The review scope depends on the engineering work, available evidence and the certification required.",
    decisions: [
      { situation: "You have been asked for certification", scope: "Check the requested form, purpose and relevant civil engineering documents.", result: "Establish whether the work falls within the proposed review scope." },
      { situation: "Reviewing an existing design", scope: "Assess the drawings, calculations, assumptions and supporting information.", result: "Identify gaps or revisions needed before certification can be considered." },
      { situation: "Construction evidence is needed", scope: "Define the relevant inspection records, test results and as-constructed information.", result: "Identify what evidence is required for the agreed certification purpose." },
    ],
    documents: ["The certification request and any nominated form", "Current drawings and supporting calculations", "Approval conditions relevant to the work", "Inspection records or as-constructed information, where applicable"],
    feeFactors: "Review fees depend on document completeness, design complexity and the work required to establish an adequate basis for certification. Certification is subject to satisfactory review; supplying drawings does not guarantee sign-off. Unitywater accreditation is a separate requirement from RPEQ registration.",
  },
  "engineering-due-diligence": {
    heading: "Understand the civil risks before you commit to a development site",
    introduction: "Buying a Sunshine Coast development site or comparing layout options? CivilCity reviews the engineering constraints that can affect feasibility, including access, drainage, levels, frontage works and servicing. Use the findings to decide what to investigate, redesign or price before the next commitment.",
    decisions: [
      { situation: "Before acquisition", scope: "Review the available property information against your development concept.", result: "Identify material civil risks and information gaps for your purchase decision." },
      { situation: "Comparing development options", scope: "Consider how alternative layouts change access, drainage and earthworks needs.", result: "Give your planner and cost team a clearer basis for comparing options." },
      { situation: "Preparing the consultant brief", scope: "Identify further survey, investigations and design work needed.", result: "Commission the next stage with a defined engineering brief." },
    ],
    documents: ["Site address and proposed development concept", "Survey, plans and existing reports, if available", "Known easements, access and service information", "Your decision deadline and the specific questions you need answered"],
    feeFactors: "A desktop review and a scope involving site visits or additional investigations are different engagements. The proposal will identify the information reviewed, assumptions, exclusions and follow-up work. Due diligence does not replace detailed design or a construction tender price.",
  },
  "civil-engineering-advice": {
    heading: "Find the right engineering next step for your project",
    introduction: "Speak with CivilCity about the civil engineering issue holding up your Sunshine Coast project. Whether you are testing a site, preparing an application or responding to approval conditions, we help define the question, the information needed and the appropriate scope of work.",
    decisions: [
      { situation: "You are unsure where to start", scope: "Review your proposal and identify the principal civil engineering questions.", result: "Understand which advice, investigations or design work to commission." },
      { situation: "Your consultants need civil input", scope: "Review access, levels, drainage and servicing interfaces with the team.", result: "Resolve the engineering brief before the design advances." },
      { situation: "An approval issue needs a response", scope: "Review the specific condition or information request with the current plans.", result: "Agree the engineering work needed to address it." },
    ],
    documents: ["Site address and project stage", "A short description of the issue or decision", "Available plans, survey and reports", "Relevant council correspondence and decision deadlines"],
    feeFactors: "The right scope may be a focused advice task or a broader investigation and design engagement. Send the project details first so we can define the deliverables and fee basis around the decision you need to make.",
  },
};
