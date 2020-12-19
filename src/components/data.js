export const ScienceOptions = [

  { label: "Agricultural Science", core: [] },
  { label: "Animal Health and Disease", core: [] },
  { label: "Animal Science and Management", core: [] },
  { label: "Biochemistry and Molecular Biology", core: [] },
  { label: "Bioengineering Systems", core: [] },
  { label: "Biotechnology", core: [] },
  { label: "Cell and Developmental Biology", core: [] },
  { label: "Chemical Systems", core: [] },
  { label: "Chemistry", core: [] },
  { label: "Civil Systems", core: [] },
  { label: "Climate and Weather", core: [] },
  { label: "Computational Biology", core: [] },
  {
    label: "Computing and Software Systems",
    core: [[" COMP10001"," Foundations of Computing"],[" COMP10002"," Foundations of Algorithms"]],
  },
  { label: "Data Science",
    core: [[" COMP10001"," Foundations of Computing"],[" COMP10002"," Foundations of Algorithms"]] 
  },
  { label: "Ecology and Evolutionary Biology", core: [] },
  { label: "Ecosystem Science", core: [] },
  { label: "Electrical Systems", core: [] },
  { label: "Environmental Engineering Systems", core: [] },
  { label: "Environmental Science", core: [] },
  { label: "Food Science", core: [] },
  { label: "Forest Science", core: [] },
  { label: "Genetics", core: [] },
  { label: "Geography", core: [] },
  { label: "Geology", core: [] },
  { label: "Human Nutrition", core: [] },
  { label: "Human Structure and Function", core: [] },
  { label: "Immunology", core: [] },
  { label: "Infection and Immunity", core: [] },
  { label: "Informatics", core: [] },
  { label: "Marine Biology", core: [] },
  { label: "Mathematical Physics", core: [] },
  { label: "Mathematics and Statistics", core: [] },
  { label: "Mechanical Systems", core: [] },
  { label: "Mechatronics Systems", core: [] },
  { label: "Microbiology", core: [] },
  { label: "Neuroscience", core: [] },
  { label: "Pathology", core: [] },
  { label: "Pharmacology", core: [] },
  { label: "Physics", core: [] },
  { label: "Physiology", core: [] },
  { label: "Plant Science", core: [] },
  { label: "Psychology", core: [] },
  { label: "Spatial Systems", core: [] },
  { label: "Veterinary BioSciences", core: [] },
  { label: "Zoology", core: [] },

]; 

export const FirstOption = [
  { label: "Select" },

];


export const CommerceOptions = [
  { label: "Economics" },
  { label: "Finance" },
  { label: "Actuarial Studies" },
  { label: "Accounting" },
  { label: "Management" },
  { label: "Marketing" },
];
export const BiomedOptions = [
  { label: "Biochemistry and Molecular Biology", core: [] },
  { label: "Bioengineering Systems", core: [] },
  { label: "Biotechnology", core: [] },
  { label: "Cell and Developmental Biology", core: [] },
  { label: "Genetics", core: [] },
  { label: "Human Nutrition", core: [] },
  { label: "Human Structure and Function", core: [] },
  { label: "Immunology", core: [] },
  { label: "Infection and Immunity", core: [] },
  { label: "Microbiology", core: [] },
  { label: "Neuroscience", core: [] },
  { label: "Pathology", core: [] },
  { label: "Pharmacology", core: [] },
  { label: "Physiology", core: [] },
  { label: "Psychology", core: [] },
];

export const DesignOptions = [
  { label: "Architecture", core: [] },
  { label: "Civil Systems", core: [] },
  { label: "Computing", core: [] },
  { label: "Construction", core: [] },
  { label: "Digital Technologies", core: [] },
  { label: "Graphic Design", core: [] },
  { label: "Landscape Architecture", core: [] },
  { label: "Mechanical Systems", core: [] },
  { label: "Performance Design", core: [] },
  { label: "Property", core: [] },
  { label: "Spatial Systems", core: [] },
  { label: "Urban Planning", core: [] },
];

export const ArtsOptions = [
  { label: "Ancient World Studies", core: [] },
  { label: "Anthropology", core: [] },
  { label: "Arabic Studies", core: [] },
  { label: "Art History", core: [] },
  { label: "Asian Studies", core: [] },
  { label: "Chinese Studies", core: [] },
  { label: "Classics", core: [] },
  { label: "Creative Writing", core: [] },
  { label: "Criminology", core: [] },
  { label: "Economics", core: [] },
  { label: "English and Theatre Studies", core: [] },
  { label: "French Studies", core: [] },
  { label: "Gender Studies", core: [] },
  { label: "Geography", core: [] },
  { label: "German Studies", core: [] },
  { label: "Hebrew and Jewish Studies", core: [] },
  { label: "History", core: [] },
  { label: "History and Philosophy of Science", core: [] },
  { label: "Indigenous Studies", core: [] },
  { label: "Indonesian Studies", core: [] },
  { label: "Islamic Studies", core: [] },
  { label: "Italian Studies", core: [] },
  { label: "Japanese Studies", core: [] },
  { label: "Linguistics and Applied Linguistics", core: [] },
  { label: "Media and Communications", core: [] },
  { label: "Philosophy", core: [] },
  { label: "Politics and International Studies", core: [] },
  { label: "Psychology", core: [] },
  { label: "Russian Studies", core: [] },
  { label: "Screen and Cultural Studies", core: [] },
  { label: "Sociology", core: [] },
  { label: "Spanish and Latin American Studies", core: [] },
];

export const groupedOptions = [
  {
    label: "Science",
    options: ScienceOptions,
  },
  {
    label: "Commerce",
    options: CommerceOptions,
  },
  {
    label: "BioMedicine",
    options: BiomedOptions,
  },
  {
    label: "Design",
    options: DesignOptions,
  },
];

export const optionalSubjects = [
  {
    code: "ABPL10004",
    name: "Global Foundations of Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL10005",
    name: "Understanding the Built Environment",
    offered: ["semester_1"],
  },
  {
    code: "ABPL20033",
    name: "Construction Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL20035",
    name: "Cities: From Local to Global",
    offered: ["semester_1"],
  },
  {
    code: "ABPL20036",
    name: "Environmental Building Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL20042",
    name: "Construction of Residential Buildings",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30037",
    name: "Architecture Design Studio: Fire",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL30041",
    name: "Construction Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL30042",
    name: "Landscape Studio: Urban Open Space",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30046",
    name: "Steel and Concrete Structural Systems",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30048",
    name: "Architecture Design Studio: Air",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL30050",
    name: "Modern Architecture: MoMo to PoMo",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30051",
    name: "Urban Morphological Mapping",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30053",
    name: "Formative Ideas in Architecture",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30055",
    name: "Construction Management",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30059",
    name: "Property Case Studies",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30067",
    name: "Design Workshop",
    offered: ["semester_1"],
  },
  {
    code: "ABPL30068",
    name: "Design Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90010",
    name: "Advanced Construction Technology",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90016",
    name: "Asset Management",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90017",
    name: "Urban Design Theory",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90020",
    name: "Measured Drawings & Digital Heritage",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90026",
    name: "Property Development",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90028",
    name: "Project Management",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90034",
    name: "Property Securitisation",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90035",
    name: "Risk in Construction",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90041",
    name: "Property Law (PG)",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90056",
    name: "Urban Transport Politics",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90061",
    name: "Urban Design Studio A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90065",
    name: "Managing Global City Regions",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90066",
    name: "MSD Research Project Short (12.5 Points)",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90067",
    name: "MSD Thesis -Semester Long (25 Points)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90072",
    name: "Landscape Studio 5:Sustainable Urbanism",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90077",
    name: "Introduction to Transport and Land Use",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90078",
    name: "Contemporary Landscape Theory",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90086",
    name: "Environmental Systems",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90089",
    name: "Australian Architecture",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90107",
    name: "Landscape Studio 1: Design Techniques",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90118",
    name: "Applied Architectural Technology",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90123",
    name: "Advanced Computational Design",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90129",
    name: "Advanced Cost Management",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90130",
    name: "Planning Law & Statutory Planning",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90134",
    name: "Planning Theory and History",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90135",
    name: "Analytical Methods",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90140",
    name: "Architectural Practice",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90147",
    name: "Design Futures",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90149",
    name: "Contemporary Digital Practice",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90167",
    name: "Design Communications Workshop (P/G)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90172",
    name: "Landscape Studio 3 Speculations",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90222",
    name: "Ex_Lab: Timber Furniture",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ABPL90236",
    name: "Design Approaches and Methods (PG)",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90246",
    name: "The Economies of Cities and Regions",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90263",
    name: "Constructed Ecologies",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90271",
    name: "Shaping the Landscape",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90273",
    name: "Urban Design Studio B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90274",
    name: "Property Markets and Valuations",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90284",
    name: "Master of Architecture Studio A",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90286",
    name: "Construction Methods A",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90288",
    name: "Architectural Cultures 1: Modernism",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90292",
    name: "Construction of Buildings",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90295",
    name: "Construction Regulations and Control",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90306",
    name: "MUP Independent Study",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ABPL90307",
    name: "MSD Vocational Placement",
    offered: ["summer_term", "semester_1", "may", "semester_2"],
  },
  {
    code: "ABPL90309",
    name: "Supply Chains in Construction",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90313",
    name: "Management of Construction",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90314",
    name: "Property Agency and Marketing (PG)",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90324",
    name: "Materials and Structures",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90334",
    name: "Means and Methods in Construction",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90339",
    name: "International Real Estate Economics",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90341",
    name: "Urban Environmental Policy and Planning",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90359",
    name: "Research Practicum in Construction",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90360",
    name: "MUCH Heritage Industry Internship",
    offered: ["january", "semester_1", "semester_2"],
  },
  {
    code: "ABPL90361",
    name: "ExLaB: Experimental Furniture Futures",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90362",
    name: "Research Thesis - Property",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90363",
    name: "Property Research and Analysis",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90368",
    name: "Architecture and Media",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90369",
    name: "Architecture as Spectacle",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90370",
    name: "Design Management",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90375",
    name: "Landscape Architecture Design Thesis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90376",
    name: "Urban Design Thesis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90382",
    name: "Urban and Cultural Heritage Minor Thesis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90384",
    name: "MUP Studio",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90389",
    name: "Urban Design Studio C",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90390",
    name: "Architectural Engineering Thesis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90396",
    name: "MSD Minor Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90397",
    name: "MSD Minor Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90403",
    name: "Visions and Agendas in Architecture",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90405",
    name: "Energy & Carbon in the Built Environment",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90409",
    name: "Realising The Knowledge Economy",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90413",
    name: "Construction Cost Planning",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90414",
    name: "Lean Construction",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90417",
    name: "Environment Behavior Methods for Design",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90420",
    name: "Interactive Architecture",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90421",
    name: "Design - Philosophy - Architecture",
    offered: ["semester_1"],
  },
  {
    code: "ABPL90422",
    name: "SI-Lab: Scanning and Virtual Reality",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90424",
    name: "Introduction to High-Performance Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ABPL90425",
    name: "Informal Settlement",
    offered: ["semester_1"],
  },
  {
    code: "ACCT10001",
    name: "Accounting Reports and Analysis",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ACCT10002",
    name: "Introductory Financial Accounting",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ACCT20001",
    name: "Cost Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT20002",
    name: "Intermediate Financial Accounting",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ACCT20007",
    name: "Accounting Information: Risks & Controls",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT30001",
    name: "Financial Accounting Theory",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT30002",
    name: "Enterprise Performance Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT30004",
    name: "Auditing and Assurance Services",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT40001",
    name: "Research in Financial Accounting",
    offered: ["semester_1"],
  },
  {
    code: "ACCT40002",
    name: "Research in Management Accounting",
    offered: ["semester_1"],
  },
  {
    code: "ACCT40008",
    name: "Honours Research Essay Part 1",
    offered: ["semester_1"],
  },
  {
    code: "ACCT90002",
    name: "Financial Statement Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90004",
    name: "Accounting for Decision Making",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ACCT90009",
    name: "Strategic Cost Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90010",
    name: "Strategic Performance Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90012",
    name: "Corporate Reporting",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90013",
    name: "Theory of Financial Accounting",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90014",
    name: "Auditing and Assurance Services",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90015",
    name: "Legal Issues for Business",
    offered: ["semester_1", "june", "semester_2"],
  },
  {
    code: "ACCT90016",
    name: "Taxation for Business Decision Making",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90019",
    name: "Financial Accounting Research",
    offered: ["semester_1"],
  },
  {
    code: "ACCT90020",
    name: "Management Accounting Research",
    offered: ["semester_1"],
  },
  {
    code: "ACCT90030",
    name: "Information Processes & Control",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90033",
    name: "Integrated Accounting Studies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90041",
    name: "Fundamentals in Accounting",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACCT90042",
    name: "Accounting and Finance for Actuaries",
    offered: ["semester_1"],
  },
  {
    code: "ACTL20001",
    name: "Introductory Financial Mathematics",
    offered: ["semester_1"],
  },
  {
    code: "ACTL30001",
    name: "Actuarial Modelling I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL30002",
    name: "Actuarial Modelling II",
    offered: ["semester_1"],
  },
  {
    code: "ACTL30007",
    name: "Actuarial Modelling III",
    offered: ["semester_1"],
  },
  {
    code: "ACTL30008",
    name: "Actuarial Analytics and Data I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL40001",
    name: "Actuarial Studies Research Essay",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACTL40002",
    name: "Risk Theory I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL40004",
    name: "Advanced Financial Mathematics",
    offered: ["semester_1"],
  },
  {
    code: "ACTL40006",
    name: "Actuarial Practice and Control I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL40010",
    name: "Actuarial Studies Projects Part 1",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90001",
    name: "Mathematics of Finance I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90003",
    name: "Mathematics of Finance III",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90004",
    name: "Insurance Risk Models",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90006",
    name: "Life Insurance Models I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90008",
    name: "Statistical Techniques in Insurance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACTL90010",
    name: "Actuarial Practice And Control I",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90013",
    name: "Actuarial Studies Projects",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACTL90016",
    name: "Actuarial Science Research Report Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACTL90017",
    name: "Actuarial Science Research Report Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACTL90018",
    name: "General Insurance Practice",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90020",
    name: "General Insurance Modelling",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90022",
    name: "Economics for Actuaries",
    offered: ["semester_1"],
  },
  {
    code: "ACTL90023",
    name: "Data Analytics in Insurance 1",
    offered: ["semester_1"],
  },
  {
    code: "ACUR90002",
    name: "Art Museums and Curatorship",
    offered: ["semester_1"],
  },
  {
    code: "ACUR90007",
    name: "Collection Management",
    offered: ["semester_1"],
  },
  {
    code: "ACUR90009",
    name: "Art Curatorship Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ACUR90010",
    name: "Art Curatorship Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI10045",
    name: "Foundations of Agricultural Sciences 1",
    offered: ["semester_1"],
  },
  {
    code: "AGRI10047",
    name: "Agriculture in Australia",
    offered: ["semester_1"],
  },
  {
    code: "AGRI10050",
    name: "Agricultural Systems Biology",
    offered: ["semester_1"],
  },
  {
    code: "AGRI20026",
    name: "Plant Growth Processes",
    offered: ["semester_1"],
  },
  {
    code: "AGRI20042",
    name: "Agricultural Economics",
    offered: ["semester_1"],
  },
  {
    code: "AGRI20043",
    name: "Biochemistry in Agricultural Systems",
    offered: ["semester_1"],
  },
  {
    code: "AGRI20044",
    name: "Microbiology in Agriculture",
    offered: ["semester_1"],
  },
  {
    code: "AGRI30022",
    name: "Special Studies",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "AGRI30030",
    name: "Livestock Production Systems",
    offered: ["semester_1"],
  },
  {
    code: "AGRI30033",
    name: "Farm Management Economics",
    offered: ["semester_1"],
  },
  {
    code: "AGRI30037",
    name: "Soil Management",
    offered: ["semester_1"],
  },
  {
    code: "AGRI30042",
    name: "Plant Pathology",
    offered: ["semester_1"],
  },
  {
    code: "AGRI40017",
    name: "Agric.Science Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "AGRI90066",
    name: "Soil Science and Management",
    offered: ["semester_1"],
  },
  {
    code: "AGRI90070",
    name: "Minor Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90072",
    name: "Major Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90075",
    name: "Research Methods For Life Sciences",
    offered: ["semester_1"],
  },
  {
    code: "AGRI90078",
    name: "Internship for Agricultural Sciences",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90079",
    name: "Minor Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90080",
    name: "Major Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90081",
    name: "Minor Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90082",
    name: "Major Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90083",
    name: "Internship for Agricultural Sciences Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90084",
    name: "Internship for Agricultural Sciences Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AGRI90086",
    name: "Communicating Agricultural Sciences",
    offered: ["semester_1"],
  },
  {
    code: "AGRI90091",
    name: "Advanced Plant Breeding and Improvement",
    offered: ["semester_1"],
  },
  {
    code: "AGRI90092",
    name: "Agricultural Advisory Practice & Theory",
    offered: ["semester_1"],
  },
  {
    code: "AHIS10001",
    name: "Art History: Theory and Controversy",
    offered: ["semester_1"],
  },
  {
    code: "AHIS20011",
    name: "European Renaissance Art",
    offered: ["semester_1"],
  },
  {
    code: "AHIS20016",
    name: "Art and Revolution",
    offered: ["semester_1"],
  },
  {
    code: "AHIS20021",
    name: "Arts of East Asia",
    offered: ["semester_1"],
  },
  {
    code: "AHIS30003",
    name: "European Art & Absolute Power 1660-1815",
    offered: ["semester_1"],
  },
  {
    code: "AHIS30005",
    name: "Contemporary Aboriginal Art",
    offered: ["semester_1"],
  },
  {
    code: "AHIS30020",
    name: "Contemporary Art",
    offered: ["semester_1"],
  },
  {
    code: "AHIS40008",
    name: "Twentieth-Century Italian Art: 1909-1969",
    offered: ["semester_1"],
  },
  {
    code: "AHIS40023",
    name: "Art History Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AHIS40024",
    name: "Art History Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AHIS90005",
    name: "History and Philosophy of Museums",
    offered: ["semester_1"],
  },
  {
    code: "AHIS90007",
    name: "Biennales, Triennales and Documentas",
    offered: ["semester_1"],
  },
  {
    code: "AIND10004",
    name: "Art and Indigenous Voice",
    offered: ["semester_1"],
  },
  {
    code: "AMGT90001",
    name: "Principles of Arts Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AMGT90004",
    name: "States, Governments and the Arts",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AMGT90007",
    name: "Advanced Arts Management",
    offered: ["semester_1"],
  },
  {
    code: "AMGT90013",
    name: "Finance and Budgeting",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AMGT90017",
    name: "Communicating the Arts",
    offered: ["semester_1"],
  },
  {
    code: "AMGT90027",
    name: "Arts Management Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "AMGT90028",
    name: "Arts Management Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT20006",
    name: "Principles of Human Structure",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT30007",
    name: "Human Locomotor Systems",
    offered: ["semester_1"],
  },
  {
    code: "ANAT40001",
    name: "Anatomy & Neurosci Research Proj Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT40002",
    name: "Seminars in Anatomy and Neuroscience",
    offered: ["semester_1"],
  },
  {
    code: "ANAT40005",
    name: "Anatomy & Neurosci Research Proj Part 2",
    offered: ["semester_1"],
  },
  {
    code: "ANAT90004",
    name: "Anatomy and Physiology for Audiology",
    offered: ["semester_1"],
  },
  {
    code: "ANAT90011",
    name: "Anatomy and Physiology",
    offered: ["semester_1"],
  },
  {
    code: "ANAT90012",
    name: "Project in Anatomy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT90013",
    name: "Project in Anatomy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT90014",
    name: "Project in Anatomy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT90015",
    name: "Project in Anatomy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANAT90016",
    name: "Anatomy and Physiology",
    offered: ["semester_1"],
  },
  {
    code: "ANCW10001",
    name: "Ancient Egypt and Mesopotamia",
    offered: ["semester_1"],
  },
  {
    code: "ANCW10006",
    name: "Ancient Egyptian 1",
    offered: ["semester_1"],
  },
  {
    code: "ANCW20015",
    name: "Classical Mythology",
    offered: ["semester_1", "june"],
  },
  {
    code: "ANCW20019",
    name: "The Rise and Fall of the Roman Republic",
    offered: ["semester_1"],
  },
  {
    code: "ANCW20023",
    name: "Ancient Egyptian 3",
    offered: ["semester_1"],
  },
  {
    code: "ANCW20025",
    name: "Archaeology of the Roman World",
    offered: ["semester_1"],
  },
  {
    code: "ANCW30016",
    name: "The Age of Alexander the Great",
    offered: ["semester_1"],
  },
  {
    code: "ANCW30017",
    name: "Interpreting the Ancient World",
    offered: ["semester_1"],
  },
  {
    code: "ANCW40012",
    name: "The Roman Way of Life",
    offered: ["semester_1"],
  },
  {
    code: "ANCW40014",
    name: "Research in Ancient World Studies",
    offered: ["semester_1"],
  },
  {
    code: "ANCW40016",
    name: "Ancient World Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANCW40017",
    name: "Ancient World Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANCW40019",
    name: "Frontiers of the Greek World",
    offered: ["semester_1"],
  },
  {
    code: "ANSC20001",
    name: "Animal Physiology and Growth",
    offered: ["semester_1"],
  },
  {
    code: "ANSC20005",
    name: "Companion Animal Biology",
    offered: ["semester_1"],
  },
  {
    code: "ANSC30001",
    name: "Animal Disease Biotechnology 1",
    offered: ["semester_1"],
  },
  {
    code: "ANSC30003",
    name: "Applied Animal Behaviour",
    offered: ["semester_1"],
  },
  {
    code: "ANSC30004",
    name: "Applied Animal Reproduction & Genetics",
    offered: ["semester_1"],
  },
  {
    code: "ANSC30006",
    name: "Production Animal Health",
    offered: ["semester_1"],
  },
  {
    code: "ANSC40001",
    name: "Animal Sci & Mgt Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "ANSC90001",
    name: "Wildlife Management",
    offered: ["semester_1"],
  },
  {
    code: "ANTH20001",
    name: "Keeping the Body in Mind",
    offered: ["semester_1"],
  },
  {
    code: "ANTH20007",
    name: "Working with Value",
    offered: ["semester_1"],
  },
  {
    code: "ANTH20011",
    name: "Ethnic Nationalism and the Modern World",
    offered: ["semester_1"],
  },
  {
    code: "ANTH30003",
    name: "Lived Religion in an Uncertain World",
    offered: ["semester_1"],
  },
  {
    code: "ANTH30005",
    name: "Power, Ideology and Inequality",
    offered: ["semester_1"],
  },
  {
    code: "ANTH30009",
    name: "Anthropology of More-Than-Human Worlds",
    offered: ["semester_1"],
  },
  {
    code: "ANTH40001",
    name: "Philosophy and Scope of Anthropology",
    offered: ["semester_1"],
  },
  {
    code: "ANTH40009",
    name: "Anthropology Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ANTH40010",
    name: "Anthropology Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARBC10001",
    name: "Arabic 3",
    offered: ["semester_1"],
  },
  {
    code: "ARBC10003",
    name: "Arabic 5",
    offered: ["semester_1"],
  },
  {
    code: "ARBC10005",
    name: "Arabic 1",
    offered: ["semester_1"],
  },
  {
    code: "ARBC20001",
    name: "Arabic in Context 1",
    offered: ["semester_1"],
  },
  {
    code: "ARBC20002",
    name: "Arabic 7",
    offered: ["semester_1"],
  },
  {
    code: "ARBC20004",
    name: "Arabic 3",
    offered: ["semester_1"],
  },
  {
    code: "ARBC20006",
    name: "Arabic 5",
    offered: ["semester_1"],
  },
  {
    code: "ARBC30002",
    name: "Arabic 9",
    offered: ["semester_1"],
  },
  {
    code: "ARBC30004",
    name: "Arabic 5",
    offered: ["semester_1"],
  },
  {
    code: "ARBC30006",
    name: "Arabic 7",
    offered: ["semester_1"],
  },
  {
    code: "ARBC40001",
    name: "Honours Arabic A",
    offered: ["semester_1"],
  },
  {
    code: "ARBC40007",
    name: "Arabic Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARBC40008",
    name: "Arabic Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARBC90003",
    name: "Graduate Arabic A",
    offered: ["semester_1"],
  },
  {
    code: "ARCH10001",
    name: "Foundations of Design: Representation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARCH10002",
    name: "Construction as Alchemy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARCH10003",
    name: "Design Studio Alpha",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARCH20001",
    name: "Design Studio Beta",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARCH20002",
    name: "Design Studio Gamma",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARCH20003",
    name: "Modern Architecture: MoMo to PoMo",
    offered: ["semester_1"],
  },
  {
    code: "ARCH20004",
    name: "Digital Design",
    offered: ["semester_1"],
  },
  {
    code: "ARCH30001",
    name: "Design Studio Delta",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARCH30002",
    name: "Design Studio Epsilon",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARTS30002",
    name: "Introduction to Language Translation",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90008",
    name: "Researching the Past",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90009",
    name: "Researching Texts",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90010",
    name: "Researching Society and Culture",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90011",
    name: "Researching Images",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90012",
    name: "Researching Ideas",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90013",
    name: "Researching Media and Culture",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90014",
    name: "Researching Politics and Policy",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90015",
    name: "Researching Language",
    offered: ["semester_1"],
  },
  {
    code: "ARTS90024",
    name: "Industry Core and Placement",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ARTS90026",
    name: "Interdisciplinary Industry Project 1",
    offered: ["semester_1", "winter_term", "semester_2"],
  },
  {
    code: "ARTS90027",
    name: "Interdisciplinary Industry Project 2",
    offered: ["semester_1", "winter_term", "semester_2"],
  },
  {
    code: "ASIA10001",
    name: "Language and Power in Asian Societies",
    offered: ["semester_1"],
  },
  {
    code: "ASIA20001",
    name: "Media and Urban Culture in Asia",
    offered: ["semester_1"],
  },
  {
    code: "ASIA20003",
    name: "Genders and Desires in Asia",
    offered: ["semester_1"],
  },
  {
    code: "ASIA30004",
    name: "Corruption in Asia",
    offered: ["semester_1"],
  },
  {
    code: "ASIA40004",
    name: "Asian Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ASIA40005",
    name: "Asian Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ASIA90004",
    name: "Critical Asian Perspectives",
    offered: ["semester_1"],
  },
  {
    code: "ASIA90012",
    name: "International Relations Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ASIA90013",
    name: "International Relations Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ASIA90017",
    name: "Contemporary China",
    offered: ["semester_1"],
  },
  {
    code: "ASIA90018",
    name: "Indonesia Rising?",
    offered: ["semester_1"],
  },
  {
    code: "ATOC20001",
    name: "Weather and Climate Systems",
    offered: ["semester_1"],
  },
  {
    code: "ATOC30004",
    name: "Dynamical Meteorology and Oceanography",
    offered: ["semester_1"],
  },
  {
    code: "ATOC30008",
    name: "Atmospheric Processes and Composition",
    offered: ["semester_1"],
  },
  {
    code: "ATOC90002",
    name: "Climate Science for Decision-Making",
    offered: ["semester_1"],
  },
  {
    code: "ATOC90010",
    name: "Statistics in Climate Dynamics",
    offered: ["semester_1"],
  },
  {
    code: "ATOC90013",
    name: "Atmospheric Modelling",
    offered: ["semester_1"],
  },
  {
    code: "ATOC90017",
    name: "Advanced Past Climates",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90001",
    name: "Electrophysiological Assessment B",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90002",
    name: "Research for Hearing and Speech Sciences",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90016",
    name: "Pathologies of the Auditory System",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90025",
    name: "Communication Across the Lifespan",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90027",
    name: "Clinical Processes A",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90034",
    name: "Planning and Integrating Intervention",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90035",
    name: "Speech and Language Disorders - Advanced",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90036",
    name: "Disorders of Fluency",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90048",
    name: "Principles of Clinical Audiology",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90049",
    name: "Principles of Hearing Rehabilitation",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90050",
    name: "Acoustics and Perception of Speech",
    offered: ["semester_1"],
  },
  {
    code: "AUDI90051",
    name: "Principles of Paediatric Audiology",
    offered: ["semester_1"],
  },
  {
    code: "BCMB20002",
    name: "Biochemistry and Molecular Biology",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BCMB20005",
    name: "Techniques in Molecular Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BCMB30002",
    name: "Functional Genomics and Bioinformatics",
    offered: ["semester_1"],
  },
  {
    code: "BCMB30003",
    name: "Molecular Aspects of Cell Biology",
    offered: ["semester_1"],
  },
  {
    code: "BCMB30010",
    name: "Advanced Techniques in Molecular Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BCMB30011",
    name: "Cellular Metabolism and Disease",
    offered: ["semester_1"],
  },
  {
    code: "BCMB30012",
    name: "Current Advances in Molecular Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BCMB40009",
    name: "Biochemistry Research Project Part 1",
    offered: ["semester_1", "june"],
  },
  {
    code: "BCMB40012",
    name: "Biochemistry Research Project Part 2",
    offered: ["semester_1"],
  },
  {
    code: "BIEN90001",
    name: "Biochemical Engineering Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "BIEN90003",
    name: "Biochemical Engineering Minor Thesis",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "BINF90001",
    name: "Statistics for Bioinformatics",
    offered: ["semester_1"],
  },
  {
    code: "BINF90002",
    name: "Elements of Bioinformatics",
    offered: ["semester_1"],
  },
  {
    code: "BIOL10002",
    name: "Biomolecules and Cells",
    offered: ["semester_1"],
  },
  {
    code: "BIOL10006",
    name: "Systems Biology",
    offered: ["semester_1"],
  },
  {
    code: "BIOL10008",
    name: "Introductory Biology: Life's Machinery",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "BIOL10009",
    name: "Biology: Life's Machinery",
    offered: ["semester_1"],
  },
  {
    code: "BIOL20001",
    name: "Evolution: Making Sense Of Life",
    offered: ["semester_1"],
  },
  {
    code: "BIOL40010",
    name: "Research Project - RMH Part 1",
    offered: ["semester_1"],
  },
  {
    code: "BIOL40011",
    name: "Research Project - RMH Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOL40013",
    name: "Research Project - RMH Part 2",
    offered: ["semester_1"],
  },
  {
    code: "BIOL90001",
    name: "Microscopy for Biological Sciences",
    offered: ["semester_1"],
  },
  {
    code: "BIOM10001",
    name: "Discovering Biomedicine",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM20001",
    name: "Molecular and Cellular Biomedicine",
    offered: ["semester_1"],
  },
  {
    code: "BIOM30002",
    name: "Biomedicine: Molecule to Malady",
    offered: ["semester_1"],
  },
  {
    code: "BIOM30003",
    name: "Biomedical Science Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "BIOM90012",
    name: "Research Project (SBS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90013",
    name: "Research Project (SBS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90014",
    name: "Research Project (SBS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90015",
    name: "Research Project (SBS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90016",
    name: "Research Project (MMS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90017",
    name: "Research Project (MMS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90018",
    name: "Research Project (MMS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90019",
    name: "Research Project (MMS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90020",
    name: "Research Project (MDS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90021",
    name: "Research Project (MDS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90022",
    name: "Research Project (MDS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BIOM90023",
    name: "Research Project (MDS)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BLAW10001",
    name: "Principles of Business Law",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BLAW20001",
    name: "Corporate Law",
    offered: ["semester_1"],
  },
  {
    code: "BLAW30003",
    name: "Taxation Law II",
    offered: ["semester_1"],
  },
  {
    code: "BMEN20003",
    name: "Applied Computation in Bioengineering",
    offered: ["semester_1"],
  },
  {
    code: "BMEN30005",
    name: "Introduction to Biomechanics",
    offered: ["semester_1"],
  },
  {
    code: "BMEN30006",
    name: "Circuits and Systems",
    offered: ["semester_1"],
  },
  {
    code: "BMEN30010",
    name: "Mechanics for Bioengineering",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90018",
    name: "Biomedical Engineering Capstone Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BMEN90021",
    name: "Medical Imaging",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90027",
    name: "Systems and Synthetic Biology",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90032",
    name: "Biomed Eng Capstone Proj Part 2",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90033",
    name: "Bioinstrumentation",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90037",
    name: "Bioengineering Data Analytics",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90038",
    name: "Biomechanics",
    offered: ["semester_1"],
  },
  {
    code: "BMEN90039",
    name: "Biomedical Eng Management & Regulations",
    offered: ["semester_1"],
  },
  {
    code: "BOTA20001",
    name: "Green Planet: Plants and the Environment",
    offered: ["semester_1"],
  },
  {
    code: "BTCH30002",
    name: "Trends & Issues in Agrifood Biotech",
    offered: ["semester_1"],
  },
  {
    code: "BTCH30003",
    name: "Biotechnology in Practice",
    offered: ["semester_1"],
  },
  {
    code: "BTCH90009",
    name: "Genomics and Bioinformatics",
    offered: ["semester_1"],
  },
  {
    code: "BTCH90010",
    name: "Genetically Modified Organisms",
    offered: ["semester_1"],
  },
  {
    code: "BUSA30000",
    name: "Business Judgement",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "BUSA90518",
    name: "Innovation and Enterprise Internship",
    offered: ["semester_1"],
  },
  {
    code: "BUSA90520",
    name: "Data Wrangling and Visualisation",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "BUSA90525",
    name: "Business and Economics Internship",
    offered: ["summer_term", "semester_1", "winter_term", "semester_2"],
  },
  {
    code: "CCDP10002",
    name: "The Electronic Arts: Vision and Sound",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CCDP10003",
    name: "Video Games: Remaking Reality",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CCDP20001",
    name: "Street Art",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CCDP40001",
    name: "Research Methods (Social Practice)",
    offered: ["semester_1"],
  },
  {
    code: "CEDB20003",
    name: "Fundamentals of Cell Biology",
    offered: ["semester_1"],
  },
  {
    code: "CEDB30002",
    name: "Concepts in Cell & Developmental Biology",
    offered: ["semester_1"],
  },
  {
    code: "CHEM10003",
    name: "Chemistry 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CHEM10006",
    name: "Chemistry for Biomedicine",
    offered: ["semester_1"],
  },
  {
    code: "CHEM10007",
    name: "Fundamentals of Chemistry",
    offered: ["semester_1"],
  },
  {
    code: "CHEM10008",
    name: "Foundation Studies in Chemistry",
    offered: ["semester_1"],
  },
  {
    code: "CHEM20011",
    name: "Environmental Chemistry",
    offered: ["semester_1"],
  },
  {
    code: "CHEM20018",
    name: "Chemistry: Reactions and Synthesis",
    offered: ["semester_1"],
  },
  {
    code: "CHEM20026",
    name: "Principles of Chemical Biology",
    offered: ["semester_1"],
  },
  {
    code: "CHEM30015",
    name: "Advanced Practical Chemistry",
    offered: ["semester_1"],
  },
  {
    code: "CHEM30016",
    name: "Reactivity and Mechanism",
    offered: ["semester_1"],
  },
  {
    code: "CHEM30017",
    name: "Specialised Topics in Chemistry A",
    offered: ["semester_1"],
  },
  {
    code: "CHEM90007",
    name: "Environmental Chemistry",
    offered: ["semester_1"],
  },
  {
    code: "CHEM90055",
    name: "Chemical Regulations and Safety",
    offered: ["semester_1"],
  },
  {
    code: "CHEN20009",
    name: "Transport Processes",
    offered: ["semester_1"],
  },
  {
    code: "CHEN30001",
    name: "Reactor Engineering",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90007",
    name: "Chemical Engineering Thermodynamics",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90013",
    name: "Process Engineering",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90018",
    name: "Particle Mechanics and Processing",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90019",
    name: "Advanced Heat & Mass Transport Processes",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90020",
    name: "Chemical Engineering Management",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90023",
    name: "Chemical Engineering Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "CHEN90026",
    name: "Chemical Engineering Minor Research Proj",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "CHEN90027",
    name: "Future Fuels and Petroleum",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90028",
    name: "Chemical Engineering Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "CHEN90030",
    name: "Chemical Engineering Minor Thesis",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "CHEN90031",
    name: "Bioprocess Engineering",
    offered: ["semester_1"],
  },
  {
    code: "CHEN90038",
    name: "Product Design and Analysis",
    offered: ["semester_1"],
  },
  {
    code: "CHIN10001",
    name: "Chinese 9",
    offered: ["semester_1"],
  },
  {
    code: "CHIN10003",
    name: "Chinese 7",
    offered: ["semester_1"],
  },
  {
    code: "CHIN10005",
    name: "Chinese 1",
    offered: ["semester_1"],
  },
  {
    code: "CHIN10015",
    name: "Chinese 3",
    offered: ["semester_1"],
  },
  {
    code: "CHIN10017",
    name: "Chinese 5",
    offered: ["semester_1"],
  },
  {
    code: "CHIN10019",
    name: "Contemporary Chinese Literature",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20001",
    name: "Chinese 3",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20003",
    name: "Chinese 5",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20005",
    name: "Modern Chinese Literature",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20006",
    name: "Great Chinese Classics",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20007",
    name: "Chinese Studies: Culture and Empire",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20009",
    name: "Chinese Economic Documents",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20010",
    name: "Chinese in Context 1",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20012",
    name: "Chinese 9",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20022",
    name: "Advanced Seminar in Chinese",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20025",
    name: "Human Rights in East and Southeast Asia",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20027",
    name: "Chinese 7",
    offered: ["semester_1"],
  },
  {
    code: "CHIN20029",
    name: "Understanding the New Media in China",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30002",
    name: "Taiwan & Beyond: Chinese Settler Culture",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30007",
    name: "Advanced Seminar in Chinese",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30008",
    name: "Chinese 5",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30010",
    name: "Modern Chinese Literature",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30011",
    name: "Great Chinese Classics",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30012",
    name: "Chinese Economic Documents",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30025",
    name: "Chinese 7",
    offered: ["semester_1"],
  },
  {
    code: "CHIN30027",
    name: "Chinese 9",
    offered: ["semester_1"],
  },
  {
    code: "CHIN40006",
    name: "Chinese Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CHIN40007",
    name: "Chinese Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CHIN90001",
    name: "Honours Chinese A",
    offered: ["semester_1"],
  },
  {
    code: "CHIN90003",
    name: "Topics in Chinese Studies",
    offered: ["semester_1"],
  },
  {
    code: "CHIN90005",
    name: "Graduate Chinese A",
    offered: ["semester_1"],
  },
  {
    code: "CLAS10004",
    name: "Ancient Greek 1",
    offered: ["semester_1", "winter_term"],
  },
  {
    code: "CLAS10006",
    name: "Latin 1",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "CLAS10012",
    name: "Latin 3",
    offered: ["semester_1"],
  },
  {
    code: "CLAS10020",
    name: "Ancient Greek 3",
    offered: ["semester_1"],
  },
  {
    code: "CLAS20013",
    name: "Ancient Greek 5",
    offered: ["semester_1"],
  },
  {
    code: "CLAS20015",
    name: "Ancient Greek 3",
    offered: ["semester_1"],
  },
  {
    code: "CLAS20029",
    name: "Latin 3",
    offered: ["semester_1"],
  },
  {
    code: "CLAS20030",
    name: "Latin 5",
    offered: ["semester_1"],
  },
  {
    code: "CLAS30013",
    name: "Latin 5",
    offered: ["semester_1"],
  },
  {
    code: "CLAS30024",
    name: "Ancient Greek 5",
    offered: ["semester_1"],
  },
  {
    code: "CLAS40036",
    name: "Classics Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CLAS40037",
    name: "Classics Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CLAS40038",
    name: "Ancient Greek Honours Seminar 1",
    offered: ["semester_1"],
  },
  {
    code: "CLAS40040",
    name: "Latin Honours Seminar 1",
    offered: ["semester_1"],
  },
  {
    code: "COMP10001",
    name: "Foundations of Computing",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "COMP10002",
    name: "Foundations of Algorithms",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP10003",
    name: "Media Computation",
    offered: ["semester_1"],
  },
  {
    code: "COMP20005",
    name: "Engineering Computation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP20007",
    name: "Design of Algorithms",
    offered: ["semester_1"],
  },
  {
    code: "COMP20008",
    name: "Elements of Data Processing",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP30013",
    name: "Advanced Studies in Computing",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "COMP30023",
    name: "Computer Systems",
    offered: ["semester_1"],
  },
  {
    code: "COMP30024",
    name: "Artificial Intelligence",
    offered: ["semester_1"],
  },
  {
    code: "COMP30027",
    name: "Machine Learning",
    offered: ["semester_1"],
  },
  {
    code: "COMP90005",
    name: "Advanced Studies in Computing",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "COMP90007",
    name: "Internet Technologies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90015",
    name: "Distributed Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90016",
    name: "Computational Genomics",
    offered: ["semester_1"],
  },
  {
    code: "COMP90020",
    name: "Distributed Algorithms",
    offered: ["semester_1"],
  },
  {
    code: "COMP90024",
    name: "Cluster and Cloud Computing",
    offered: ["semester_1"],
  },
  {
    code: "COMP90038",
    name: "Algorithms and Complexity",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90041",
    name: "Programming and Software Development",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90042",
    name: "Natural Language Processing",
    offered: ["semester_1"],
  },
  {
    code: "COMP90044",
    name: "Research Methods",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90048",
    name: "Declarative Programming",
    offered: ["semester_1"],
  },
  {
    code: "COMP90049",
    name: "Introduction to Machine Learning",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90050",
    name: "Advanced Database Systems",
    offered: ["semester_1", "winter_term"],
  },
  {
    code: "COMP90051",
    name: "Statistical Machine Learning",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90054",
    name: "AI Planning for Autonomy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90055",
    name: "Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "COMP90059",
    name: "Introduction to Programming",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "COMP90060",
    name: "Computer Science Research Project Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90061",
    name: "Computer Science Research Project Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90062",
    name: "Computer Science Research Project Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90063",
    name: "Computer Science Research Project Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90064",
    name: "Computer Science Research Project Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90065",
    name: "Computer Science Research Project Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90066",
    name: "Computer Science Research Project Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90067",
    name: "Computer Science Research Project Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90068",
    name: "Computer Science Research Project Pt3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90069",
    name: "Computer Science Research Project Pt3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90070",
    name: "Computer Science Research Project Pt3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90071",
    name: "Computer Science Research Project Pt3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90072",
    name: "The Art of Scientific Computation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90074",
    name: "Web Security",
    offered: ["semester_1"],
  },
  {
    code: "COMP90077",
    name: "Advanced Algorithms and Data Structures",
    offered: ["semester_1"],
  },
  {
    code: "COMP90078",
    name: "Computer Science Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90079",
    name: "Computer Science Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90080",
    name: "Computer Science Research Project Part 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90081",
    name: "Computer Science Research Project Part 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90082",
    name: "Software Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90085",
    name: "Volunteer Experience in I.T.",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "COMP90087",
    name: "The Ethics of Artificial Intelligence",
    offered: ["semester_1"],
  },
  {
    code: "CONS30001",
    name: "Building Information Modelling",
    offered: ["semester_1"],
  },
  {
    code: "CREA10001",
    name: "Contemporary Art and Biomedicine",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CREA90002",
    name: "Arts for Health and Wellbeing",
    offered: ["semester_1"],
  },
  {
    code: "CREA90003",
    name: "Evaluation of Wellbeing in Creative Arts",
    offered: ["semester_1"],
  },
  {
    code: "CREA90014",
    name: "Creative Arts Therapies Research 2",
    offered: ["semester_1"],
  },
  {
    code: "CREA90017",
    name: "Creative Arts Therapists in Community",
    offered: ["semester_1"],
  },
  {
    code: "CRIM10001",
    name: "Crime, Criminology, and Critique",
    offered: ["semester_1"],
  },
  {
    code: "CRIM20002",
    name: "Criminal Law and Political Justice",
    offered: ["semester_1"],
  },
  {
    code: "CRIM20003",
    name: "Policing",
    offered: ["semester_1"],
  },
  {
    code: "CRIM20010",
    name: "Law, Justice and Social Change",
    offered: ["semester_1"],
  },
  {
    code: "CRIM30002",
    name: "Global Criminology",
    offered: ["semester_1"],
  },
  {
    code: "CRIM30005",
    name: "Corporate Power and White Collar Crime",
    offered: ["semester_1"],
  },
  {
    code: "CRIM30006",
    name: "Crime and Culture",
    offered: ["semester_1"],
  },
  {
    code: "CRIM30010",
    name: "Managing Justice: Agencies and the State",
    offered: ["semester_1"],
  },
  {
    code: "CRIM30011",
    name: "Young People, Crime and Justice",
    offered: ["semester_1"],
  },
  {
    code: "CRIM40002",
    name: "Qualitative Research Methods",
    offered: ["semester_1"],
  },
  {
    code: "CRIM40003",
    name: "Drugs and Justice",
    offered: ["semester_1"],
  },
  {
    code: "CRIM40005",
    name: "Punishment and Detention: New Challenges",
    offered: ["semester_1"],
  },
  {
    code: "CRIM40008",
    name: "Criminology Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CRIM40009",
    name: "Criminology Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CRIM90009",
    name: "Judging Crime",
    offered: ["semester_1"],
  },
  {
    code: "CRIM90011",
    name: "Research and Criminal Justice Governance",
    offered: ["semester_1"],
  },
  {
    code: "CRIM90018",
    name: "Making Sense of Crime and Justice",
    offered: ["semester_1"],
  },
  {
    code: "CRIM90028",
    name: "Criminology Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CRIM90029",
    name: "Criminology Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CRIM90030",
    name: "Criminology & Sociology Internship Pt 1",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "CRIM90031",
    name: "Criminology & Sociology Internship Pt 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CRIM90035",
    name: "Victims and Criminal Justice",
    offered: ["semester_1"],
  },
  {
    code: "CULS20014",
    name: "Television, Lifestyle & Consumer Culture",
    offered: ["semester_1"],
  },
  {
    code: "CULS20018",
    name: "Popular Culture: From K-pop to Selfies",
    offered: ["semester_1"],
  },
  {
    code: "CULS30004",
    name: "Thinking Sex",
    offered: ["semester_1"],
  },
  {
    code: "CULS30006",
    name: "Global Cultures",
    offered: ["semester_1"],
  },
  {
    code: "CULS40001",
    name: "Cultural Policy and Power",
    offered: ["semester_1"],
  },
  {
    code: "CULS90011",
    name: "The Cosmopolitan Imaginary",
    offered: ["semester_1"],
  },
  {
    code: "CUMC90006",
    name: "Conservation Internship and Projects",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CUMC90035",
    name: "Conservation Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CUMC90036",
    name: "Conservation Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CVEN30008",
    name: "Engineering Risk Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CVEN30010",
    name: "Systems Modelling and Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CVEN90017",
    name: "Earthquake Resistant Design of Buildings",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90024",
    name: "High Rise Structures",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90026",
    name: "Extreme Loading of Structures",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90043",
    name: "Sustainable Infrastructure Engineering",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90044",
    name: "Engineering Site Characterisation",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90047",
    name: "IE Research Project 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CVEN90049",
    name: "Structural Theory and Design 2",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90050",
    name: "Geotechnical Engineering",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90059",
    name: "Integrated Design - Infrastructure",
    offered: ["semester_1"],
  },
  {
    code: "CVEN90063",
    name: "Transport System Modelling",
    offered: ["semester_1"],
  },
  {
    code: "CWRI10001",
    name: "Creative Writing: Ideas and Practice",
    offered: ["semester_1"],
  },
  {
    code: "CWRI10002",
    name: "Knowledge Practices 1",
    offered: ["semester_1"],
  },
  {
    code: "CWRI20005",
    name: "Creative Non Fiction",
    offered: ["semester_1"],
  },
  {
    code: "CWRI20007",
    name: "Poetry",
    offered: ["semester_1"],
  },
  {
    code: "CWRI20009",
    name: "Writing for Screen",
    offered: ["semester_1"],
  },
  {
    code: "CWRI20012",
    name: "Writing Identity and Difference",
    offered: ["semester_1"],
  },
  {
    code: "CWRI30006",
    name: "Poetry and Poetics",
    offered: ["semester_1"],
  },
  {
    code: "CWRI40004",
    name: "Thinking Writing: Theory and Creativity",
    offered: ["semester_1"],
  },
  {
    code: "CWRI40011",
    name: "Graphic Narratives",
    offered: ["semester_1"],
  },
  {
    code: "CWRI40015",
    name: "Creative Writing Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CWRI40016",
    name: "Creative Writing Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CWRI90015",
    name: "Creative Writing Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CWRI90016",
    name: "Creative Writing Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "CWRI90018",
    name: "Advanced Writing Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT40003",
    name: "Advances in Oral Health Research",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT40010",
    name: "Oral Health Sci Research Proj Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT40011",
    name: "Oral Health Sci Research Proj Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90011",
    name: "Research Design 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90013",
    name: "Research Proposal 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90014",
    name: "Research Proposal 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90015",
    name: "Principles of Specialty 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90016",
    name: "Principles of Specialty 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90017",
    name: "Clinical Practice in Specialty 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90018",
    name: "Clinical Practice in Specialty 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90019",
    name: "Minor Thesis 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90021",
    name: "Advanced Seminars in Specialty 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90023",
    name: "Adv Clinical Practice in Specialty 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90024",
    name: "Adv Clinical Practice in Specialty 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90025",
    name: "Minor Thesis 3",
    offered: ["semester_1"],
  },
  {
    code: "DENT90026",
    name: "Minor Thesis 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90027",
    name: "Advanced Seminars in Specialty 3",
    offered: ["semester_1"],
  },
  {
    code: "DENT90029",
    name: "Adv Clinical Practice in Specialty 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90030",
    name: "Adv Clinical Practice in Specialty 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90031",
    name: "Research Design 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90032",
    name: "Research Design 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90033",
    name: "Research Project 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90035",
    name: "Advanced Clinical Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90037",
    name: "Advanced Clinical Practice 3",
    offered: ["semester_1"],
  },
  {
    code: "DENT90038",
    name: "Advanced Clinical Practice 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DENT90039",
    name: "Forensic Odontology 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90041",
    name: "Casework/Research Report 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90045",
    name: "Research Project 1",
    offered: ["semester_1"],
  },
  {
    code: "DENT90047",
    name: "OMS Clinical Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "DEVT10001",
    name: "The Developing World",
    offered: ["semester_1"],
  },
  {
    code: "DEVT10002",
    name: "Engagements with Place",
    offered: ["semester_1"],
  },
  {
    code: "DEVT90002",
    name: "Internship in Development",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DEVT90003",
    name: "The Political Ecology of Development",
    offered: ["semester_1"],
  },
  {
    code: "DEVT90008",
    name: "International Internship in Development",
    offered: ["january", "semester_1", "semester_2"],
  },
  {
    code: "DEVT90009",
    name: "Development Theories",
    offered: ["semester_1"],
  },
  {
    code: "DEVT90039",
    name: "Civil Society, NGOs and the State",
    offered: ["semester_1"],
  },
  {
    code: "DEVT90053",
    name: "Intervening in Development",
    offered: ["semester_1"],
  },
  {
    code: "DEVT90054",
    name: "Development Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DEVT90055",
    name: "Development Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DEVT90060",
    name: "Internship in Development",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DEVT90061",
    name: "Global Urban Development",
    offered: ["semester_1"],
  },
  {
    code: "DEVT90076",
    name: "Social Policy and Development",
    offered: ["semester_1", "november"],
  },
  {
    code: "DNCE10027",
    name: "Dancing the Dance 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DNCE10029",
    name: "Body Knowledges: Dance Science",
    offered: ["semester_1"],
  },
  {
    code: "DNCE10030",
    name: "Dance Lab 1: Studio Practices",
    offered: ["semester_1"],
  },
  {
    code: "DNCE40005",
    name: "Research Methods (Dance)",
    offered: ["semester_1"],
  },
  {
    code: "DPSS10008",
    name: "Artefact and Performance 1",
    offered: ["semester_1"],
  },
  {
    code: "DPSS10009",
    name: "Production Studio 1",
    offered: ["semester_1"],
  },
  {
    code: "DPSS20010",
    name: "Production Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "DPSS20011",
    name: "Production Studio 3",
    offered: ["semester_1"],
  },
  {
    code: "DPSS30008",
    name: "Production Practice 3 - Part A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DPSS30009",
    name: "Production Practice 3 - Part B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "DPSS90001",
    name: "Design Research",
    offered: ["semester_1"],
  },
  {
    code: "DPSS90002",
    name: "Design Projects 1",
    offered: ["semester_1"],
  },
  {
    code: "DRAM10026",
    name: "Up Close and Personal with MTC",
    offered: ["semester_1", "june", "semester_2"],
  },
  {
    code: "DRAM10032",
    name: "Contextual Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "DRAM10033",
    name: "Performance Preparation 1",
    offered: ["semester_1"],
  },
  {
    code: "DRAM20023",
    name: "Contextual Studies 2 Theory in Action",
    offered: ["semester_1"],
  },
  {
    code: "DRAM40001",
    name: "Research Methods (Theatre Practice)",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90010",
    name: "Performing Arts Research Methodologies",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90011",
    name: "Applied Dramaturgy 1",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90013",
    name: "Independent Dramaturgy Project",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90019",
    name: "Dramaturgy, Text and Performance",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90020",
    name: "Directing Methodologies",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90022",
    name: "Collaboration in Action",
    offered: ["semester_1"],
  },
  {
    code: "DRAM90023",
    name: "Applied Dramaturgy 2",
    offered: ["semester_1"],
  },
  {
    code: "ECOL30006",
    name: "Ecology in Changing Environments",
    offered: ["semester_1"],
  },
  {
    code: "ECOL30007",
    name: "Marine Ecosystems: Ecology & Management",
    offered: ["semester_1"],
  },
  {
    code: "ECOM20001",
    name: "Econometrics 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECOM30001",
    name: "Basic Econometrics",
    offered: ["semester_1"],
  },
  {
    code: "ECOM30002",
    name: "Econometrics 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECOM40003",
    name: "Macroeconometrics",
    offered: ["semester_1"],
  },
  {
    code: "ECOM40006",
    name: "Econometrics 3",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90001",
    name: "Basic Econometrics",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90002",
    name: "Econometrics 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECOM90005",
    name: "Advanced Econometric Techniques",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90007",
    name: "Macroeconometrics",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90009",
    name: "Quantitative Methods for Business",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECOM90013",
    name: "Econometrics 3",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90015",
    name: "Special Topics in Adv. Econometrics 2",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90020",
    name: "Computational Economics and Business",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90022",
    name: "Research Methods",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90023",
    name: "Treatment Effects and Program Evaluation",
    offered: ["semester_1"],
  },
  {
    code: "ECOM90024",
    name: "Forecasting in Economics and Business",
    offered: ["semester_1"],
  },
  {
    code: "ECON10003",
    name: "Introductory Macroeconomics",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ECON10004",
    name: "Introductory Microeconomics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON10005",
    name: "Quantitative Methods 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON20002",
    name: "Intermediate Microeconomics",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "ECON20003",
    name: "Quantitative Methods 2",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ECON20007",
    name: "Globalisation and the World Economy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON30001",
    name: "International Trade Policy",
    offered: ["semester_1"],
  },
  {
    code: "ECON30005",
    name: "Money and Banking",
    offered: ["semester_1"],
  },
  {
    code: "ECON30010",
    name: "Microeconomics",
    offered: ["semester_1"],
  },
  {
    code: "ECON30013",
    name: "Economic Analysis and Policy",
    offered: ["semester_1"],
  },
  {
    code: "ECON30018",
    name: "Economics of the Law",
    offered: ["semester_1"],
  },
  {
    code: "ECON30020",
    name: "Mathematical Economics",
    offered: ["semester_1"],
  },
  {
    code: "ECON30024",
    name: "Economics of Financial Markets",
    offered: ["semester_1"],
  },
  {
    code: "ECON30025",
    name: "Computational Economics and Business",
    offered: ["semester_1"],
  },
  {
    code: "ECON40001",
    name: "Advanced Microeconomics",
    offered: ["semester_1"],
  },
  {
    code: "ECON40002",
    name: "Advanced Macroeconomics",
    offered: ["semester_1"],
  },
  {
    code: "ECON40018",
    name: "Economics Research Essay Part 1",
    offered: ["semester_1"],
  },
  {
    code: "ECON90002",
    name: "Microeconomics",
    offered: ["semester_1"],
  },
  {
    code: "ECON90003",
    name: "Macroeconomics",
    offered: ["semester_1"],
  },
  {
    code: "ECON90010",
    name: "Quantitative Analysis of Finance II",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON90015",
    name: "Managerial Economics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON90016",
    name: "Environmental Economics and Strategy",
    offered: ["semester_1"],
  },
  {
    code: "ECON90029",
    name: "Economics For Public Policy",
    offered: ["semester_1"],
  },
  {
    code: "ECON90032",
    name: "Macroeconomics for Managers",
    offered: ["semester_1"],
  },
  {
    code: "ECON90033",
    name: "Quantitative Analysis of Finance I",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON90034",
    name: "Economics of Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON90047",
    name: "Macroeconomics 2",
    offered: ["semester_1"],
  },
  {
    code: "ECON90053",
    name: "Mathematics for Economists",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON90055",
    name: "Computational Economics",
    offered: ["semester_1"],
  },
  {
    code: "ECON90063",
    name: "Advanced Microeconomics",
    offered: ["semester_1"],
  },
  {
    code: "ECON90064",
    name: "Advanced Studies in Economics 1",
    offered: ["semester_1"],
  },
  {
    code: "ECON90065",
    name: "Advanced Studies in Economics 2",
    offered: ["semester_1"],
  },
  {
    code: "ECON90071",
    name: "Economics Research Report Part 1",
    offered: ["semester_1"],
  },
  {
    code: "ECON90073",
    name: "Economics Thesis Workshop Part 1",
    offered: ["semester_1"],
  },
  {
    code: "ECON90074",
    name: "Economics Thesis Workshop Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ECON90075",
    name: "Economic Analysis and Policy",
    offered: ["semester_1"],
  },
  {
    code: "ECON90079",
    name: "Advanced Experimental Economics",
    offered: ["semester_1"],
  },
  {
    code: "EDUC10048",
    name: "Creativity, Play and the Arts",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC10051",
    name: "Sports Coaching: Theory and Practice",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "EDUC10054",
    name: "Drawing, Painting and Sensory Knowing",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC10056",
    name: "Learning and the Digital Generations",
    offered: ["semester_1"],
  },
  {
    code: "EDUC10057",
    name: "Wellbeing, Motivation and Performance",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "EDUC10058",
    name: "Music, Learning and Popular Musicians",
    offered: ["semester_1"],
  },
  {
    code: "EDUC10060",
    name: "Introduction to Indigenous Education",
    offered: ["semester_1"],
  },
  {
    code: "EDUC20064",
    name: "Concepts of Childhood",
    offered: ["semester_1"],
  },
  {
    code: "EDUC20065",
    name: "Knowledge, Learning and Culture",
    offered: ["semester_1"],
  },
  {
    code: "EDUC20068",
    name: "Sport, Education and the Media",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC20070",
    name: "Learning via Sport and Outdoor Education",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC20073",
    name: "Links Between Health and Learning",
    offered: ["semester_1"],
  },
  {
    code: "EDUC20077",
    name: "Printing, Collage and Social Engagement",
    offered: ["semester_1"],
  },
  {
    code: "EDUC20080",
    name: "School Experience as Breadth",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC20084",
    name: "Staging Theatre for Youth Audiences",
    offered: ["semester_1"],
  },
  {
    code: "EDUC20085",
    name: "Singing, Song Writing and Youth Music",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90002",
    name: "Effective University Teaching",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90048",
    name: "Second Language Teaching Methodology",
    offered: ["semester_1", "june"],
  },
  {
    code: "EDUC90057",
    name: "Education Capstone Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90101",
    name: "Multilingual Practices in Global Times",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90334",
    name: "Minor Project in Education 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90335",
    name: "Minor Project in Education",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90558",
    name: "Education Research Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90606",
    name: "Engagement and the Arts",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90728",
    name: "Innovative Spaces and Pedagogy",
    offered: ["semester_1", "august"],
  },
  {
    code: "EDUC90838",
    name: "Project in Clinical Education",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90868",
    name: "Advanced Methodology",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90869",
    name: "Doctor of Education Thesis Proposal",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90892",
    name: "Clinical Teaching Practice (EC) 1",
    offered: ["semester_1", "august"],
  },
  {
    code: "EDUC90929",
    name: "Understanding Education in Context",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90930",
    name: "Local Literacies in Global Contexts",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC90932",
    name: "Education Research Design Part 2",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90948",
    name: "Mathematics: Improving Learning",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90951",
    name: "Understanding Education Policy",
    offered: ["semester_1"],
  },
  {
    code: "EDUC90989",
    name: "Capstone Professional Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC91021",
    name: "Clinical Teaching Practice (GD EC) 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC91029",
    name: "Understanding the Student as Learner",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC91030",
    name: "Research in Educational Relationships",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EDUC91033",
    name: "Teaching Number (7-10)",
    offered: ["semester_1"],
  },
  {
    code: "EDUC91034",
    name: "Teaching Algebra (7-10)",
    offered: ["semester_1"],
  },
  {
    code: "EDUC91037",
    name: "Teaching and Learning in Science",
    offered: ["semester_1"],
  },
  {
    code: "EDUC91038",
    name: "Inquiry and Literacy in Science",
    offered: ["semester_1"],
  },
  {
    code: "ELEN20005",
    name: "Foundations of Electrical Networks",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN20006",
    name: "Digital Systems",
    offered: ["semester_1"],
  },
  {
    code: "ELEN30009",
    name: "Electrical Network Analysis and Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN30010",
    name: "Digital System Design",
    offered: ["semester_1"],
  },
  {
    code: "ELEN30012",
    name: "Signals and Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN30014",
    name: "Analog and Digital Electronics Concepts",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90011",
    name: "Directed Studies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90026",
    name: "Introduction to Optimisation",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90051",
    name: "Advanced Communication Systems",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90052",
    name: "Advanced Signal Processing",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90054",
    name: "Probability and Random Models",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90055",
    name: "Control Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90056",
    name: "Electronic Circuit Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90057",
    name: "Communication Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90058",
    name: "Signal Processing",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90059",
    name: "Lightwave Systems",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90066",
    name: "Embedded System Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ELEN90069",
    name: "Electrical Power Systems",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90074",
    name: "Introduction to Power Engineering",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90077",
    name: "Grid Integration of Renewables",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90083",
    name: "Electrical Engineering Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ELEN90088",
    name: "System Optimisation & Machine Learning",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90089",
    name: "Communication Design Clinic",
    offered: ["semester_1"],
  },
  {
    code: "ELEN90090",
    name: "Autonomous Systems Clinic",
    offered: ["semester_1"],
  },
  {
    code: "ENEN20002",
    name: "Earth Processes for Engineering",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENEN30002",
    name: "Intro to Sustainable Water Management",
    offered: ["semester_1"],
  },
  {
    code: "ENEN90005",
    name: "Environmental Management ISO 14000",
    offered: ["semester_1"],
  },
  {
    code: "ENEN90006",
    name: "Solid Wastes to Sustainable Resources",
    offered: ["semester_1"],
  },
  {
    code: "ENEN90027",
    name: "Energy for Sustainable Development",
    offered: ["semester_1"],
  },
  {
    code: "ENEN90031",
    name: "Quantitative Environmental Modelling",
    offered: ["semester_1"],
  },
  {
    code: "ENEN90033",
    name: "Solar Energy",
    offered: ["semester_1"],
  },
  {
    code: "ENEN90038",
    name: "Engineering Hydrology",
    offered: ["semester_1"],
  },
  {
    code: "ENGL10002",
    name: "Literature and Performance",
    offered: ["semester_1"],
  },
  {
    code: "ENGL10004",
    name: "Indigenous Literature",
    offered: ["semester_1"],
  },
  {
    code: "ENGL20009",
    name: "The Australian Imaginary",
    offered: ["semester_1"],
  },
  {
    code: "ENGL20030",
    name: "Modern and Contemporary Theatre",
    offered: ["semester_1"],
  },
  {
    code: "ENGL20031",
    name: "Literature, Adaptation, Media",
    offered: ["semester_1"],
  },
  {
    code: "ENGL20033",
    name: "Shakespeare in Performance",
    offered: ["semester_1"],
  },
  {
    code: "ENGL30006",
    name: "Global Literature and Postcolonialism",
    offered: ["semester_1"],
  },
  {
    code: "ENGL30013",
    name: "Gothic Fictions",
    offered: ["semester_1"],
  },
  {
    code: "ENGL30016",
    name: "Decadent Literature",
    offered: ["semester_1"],
  },
  {
    code: "ENGL30046",
    name: "Romancing the Medieval",
    offered: ["semester_1"],
  },
  {
    code: "ENGL30048",
    name: "Performance and the World",
    offered: ["semester_1"],
  },
  {
    code: "ENGL30051",
    name: "Comedy",
    offered: ["semester_1"],
  },
  {
    code: "ENGL40015",
    name: "American Fiction: The 20th Century",
    offered: ["semester_1"],
  },
  {
    code: "ENGL40018",
    name: "Don Juan: Our Contemporary",
    offered: ["semester_1"],
  },
  {
    code: "ENGL40024",
    name: "Renaissance Drama",
    offered: ["semester_1"],
  },
  {
    code: "ENGL40026",
    name: "English & Theatre Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGL40027",
    name: "English & Theatre Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGL90002",
    name: "Writing as Women: Critical Readings",
    offered: ["semester_1"],
  },
  {
    code: "ENGM90007",
    name: "Project Management Practices",
    offered: ["semester_1"],
  },
  {
    code: "ENGM90011",
    name: "Economic Analysis for Engineers",
    offered: ["semester_1"],
  },
  {
    code: "ENGM90013",
    name: "Strategy Execution for Engineers",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGM90014",
    name: "The World of Engineering Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGM90015",
    name: "Management and Leadership for Engineers",
    offered: ["semester_1"],
  },
  {
    code: "ENGM90016",
    name: "Engineering Management Capstone",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR10004",
    name: "Engineering Technology and Society",
    offered: ["semester_1"],
  },
  {
    code: "ENGR20004",
    name: "Engineering Mechanics",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ENGR20005",
    name: "Numerical Methods in Engineering",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR30002",
    name: "Fluid Mechanics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90021",
    name: "Critical Communication for Engineers",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90024",
    name: "Computational Fluid Dynamics",
    offered: ["semester_1"],
  },
  {
    code: "ENGR90026",
    name: "Engineering Entrepreneurship",
    offered: ["semester_1"],
  },
  {
    code: "ENGR90028",
    name: "Introduction to Energy Systems",
    offered: ["semester_1"],
  },
  {
    code: "ENGR90029",
    name: "Analysing Energy Systems",
    offered: ["semester_1"],
  },
  {
    code: "ENGR90031",
    name: "Energy Systems Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90032",
    name: "Energy Supply and Value Chains",
    offered: ["semester_1"],
  },
  {
    code: "ENGR90033",
    name: "Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ENGR90034",
    name: "Creating Innovative Engineering",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90035",
    name: "Graduate Research Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90036",
    name: "Leadership for Innovation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90037",
    name: "Engineering Capstone Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90038",
    name: "Engineering Capstone Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90039",
    name: "Creating Innovative Professionals",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENGR90041",
    name: "Engineering Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENST20001",
    name: "Human Behaviour and Environment",
    offered: ["semester_1"],
  },
  {
    code: "ENST30002",
    name: "Land And Environment Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENST90006",
    name: "Environmental Research Review (12.5)",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ENST90007",
    name: "Environmental Research Project (25)",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ENST90016",
    name: "Environmental Research Project (50)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENST90020",
    name: "Environmental Industry Research (50)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENST90025",
    name: "Environmental Industry Research (25)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENST90032",
    name: "Sustainability and Behaviour Change",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ENST90033",
    name: "Climate Change Mitigation",
    offered: ["semester_1"],
  },
  {
    code: "ENST90043",
    name: "Sustainable Landscapes",
    offered: ["semester_1"],
  },
  {
    code: "ENST90045",
    name: "Spatial Tools for Ecosystem Management",
    offered: ["semester_1"],
  },
  {
    code: "ENVS10001",
    name: "Natural Environments",
    offered: ["semester_1"],
  },
  {
    code: "ENVS10006",
    name: "Mapping Environments",
    offered: ["semester_1"],
  },
  {
    code: "ERTH30001",
    name: "Hydrogeology/Environmental Geochemistry",
    offered: ["semester_1"],
  },
  {
    code: "ESLA10003",
    name: "Academic English 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ESLA90001",
    name: "Professional Speaking Communication",
    offered: ["semester_1"],
  },
  {
    code: "ESLA90003",
    name: "Professional Literacies",
    offered: ["semester_1"],
  },
  {
    code: "EURO20003",
    name: "Memory & Memoirs of 20th Century Europe",
    offered: ["semester_1"],
  },
  {
    code: "EURO30002",
    name: "Memory & Memoirs of 20th Century Europe",
    offered: ["semester_1"],
  },
  {
    code: "EURO40002",
    name: "Seminars in Languages and Linguistics A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EURO40003",
    name: "Seminars in Languages and Linguistics B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "EVSC10001",
    name: "The Global Environment",
    offered: ["semester_1"],
  },
  {
    code: "EVSC20004",
    name: "Blue Planet-Intro to Marine Environments",
    offered: ["semester_1"],
  },
  {
    code: "EVSC20006",
    name: "Energy and the Environment",
    offered: ["semester_1"],
  },
  {
    code: "EVSC30003",
    name: "Environmental Risk Assessment",
    offered: ["semester_1"],
  },
  {
    code: "EVSC30006",
    name: "Ecology of Urban Landscapes",
    offered: ["semester_1"],
  },
  {
    code: "EVSC90015",
    name: "Environmental Impact Assessment",
    offered: ["semester_1"],
  },
  {
    code: "EVSC90017",
    name: "Global Environmental Change",
    offered: ["semester_1"],
  },
  {
    code: "EVSC90020",
    name: "Environmental Modelling",
    offered: ["semester_1"],
  },
  {
    code: "FINA10025",
    name: "Studio Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "FINA10026",
    name: "Critical and Theoretical Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "FINA10035",
    name: "Still Life: Nature Morte",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FINA10036",
    name: "Life Drawing: The Body",
    offered: ["semester_1"],
  },
  {
    code: "FINA20026",
    name: "Painting Techniques",
    offered: [
      "summer_term",
      "february",
      "semester_1",
      "winter_term",
      "june",
      "semester_2",
    ],
  },
  {
    code: "FINA20027",
    name: "Studio Studies 3",
    offered: ["semester_1"],
  },
  {
    code: "FINA20029",
    name: "Critical and Theoretical Studies 3",
    offered: ["semester_1"],
  },
  {
    code: "FINA20043",
    name: "Light in Performance",
    offered: ["semester_1"],
  },
  {
    code: "FINA20044",
    name: "Art and the Botanical",
    offered: [
      "summer_term",
      "february",
      "semester_1",
      "winter_term",
      "june",
      "semester_2",
    ],
  },
  {
    code: "FINA30001",
    name: "Studio Studies 5",
    offered: ["semester_1"],
  },
  {
    code: "FINA30017",
    name: "Critical and Theoretical Studies 5",
    offered: ["semester_1"],
  },
  {
    code: "FINA30022",
    name: "Space Studio",
    offered: ["semester_1"],
  },
  {
    code: "FINA30023",
    name: "Space in Performance",
    offered: ["semester_1"],
  },
  {
    code: "FINA30025",
    name: "Studio Options",
    offered: ["semester_1"],
  },
  {
    code: "FINA30028",
    name: "Studio Studies 5",
    offered: ["semester_1"],
  },
  {
    code: "FINA40004",
    name: "Research Methods (Visual Art)",
    offered: ["semester_1"],
  },
  {
    code: "FINA60008",
    name: "Studio Materials and Methods A",
    offered: ["semester_1"],
  },
  {
    code: "FINA60011",
    name: "Contemporary Art Practice A",
    offered: ["semester_1"],
  },
  {
    code: "FINA60013",
    name: "Critical Issues in Contemporary Art A",
    offered: ["semester_1"],
  },
  {
    code: "FINA70006",
    name: "Studio Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "FINA70008",
    name: "Professional Perspectives",
    offered: ["semester_1"],
  },
  {
    code: "FINA90002",
    name: "Research Methods",
    offered: ["march", "semester_1"],
  },
  {
    code: "FINA90006",
    name: "Perspectives in Art & Cultural Theory 1",
    offered: ["semester_1"],
  },
  {
    code: "FINA90008",
    name: "Perspectives in Art & Cultural Theory 3",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10006",
    name: "Screen Practice 1A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10007",
    name: "Screenwriting 1",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10010",
    name: "Making Movies 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FLTV10012",
    name: "Screenwriting Practices 1A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10014",
    name: "Pictures, Sounds, Words",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10016",
    name: "Animation Studio 1A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10017",
    name: "Animation History and Research",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10018",
    name: "Writing Animation 1",
    offered: ["semester_1"],
  },
  {
    code: "FLTV10021",
    name: "Interactive Art Media 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FLTV10023",
    name: "Introduction to Screenwriting Practices",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FLTV10024",
    name: "Making Micro Movies - Filming the Real",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20005",
    name: "Making Movies 2",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20006",
    name: "Screen Practice 2A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20010",
    name: "Screen Culture 2",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20012",
    name: "Screenwriting Practices 2A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20014",
    name: "Animation Research 2",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20015",
    name: "Animation Studio 2A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20018",
    name: "Writing for the Youth Screen Market",
    offered: ["semester_1"],
  },
  {
    code: "FLTV20019",
    name: "Writing Animation 2",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30009",
    name: "Languages of the Screen",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30011",
    name: "Screen Culture and Aesthetics 3",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30018",
    name: "Animation Lab 3",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30021",
    name: "Collaborative Production",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30023",
    name: "Animation Studio 3A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30025",
    name: "Screen Practice 3A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV30029",
    name: "Screenwriting Practices 3A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV40005",
    name: "Research Methods (Animation)",
    offered: ["semester_1"],
  },
  {
    code: "FLTV40008",
    name: "Research Methods (Film and Television)",
    offered: ["semester_1"],
  },
  {
    code: "FLTV40011",
    name: "Research Methods (Screenwriting)",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70020",
    name: "Narrative Projects 1A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70026",
    name: "Scriptwriting 2",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70028",
    name: "Documentary Projects 2A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70030",
    name: "Narrative Projects 2A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70041",
    name: "Storytelling Workshop",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70042",
    name: "Cinematic Writing",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70043",
    name: "Writing for Television",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70044",
    name: "Writing and Rewriting",
    offered: ["semester_1"],
  },
  {
    code: "FLTV70045",
    name: "Business of Screenwriting",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90003",
    name: "Design Processes and Principles A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90004",
    name: "Design Realisation and Collaboration A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90005",
    name: "Design Documentation and Communication A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90006",
    name: "Studies in Screen",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90011",
    name: "Graphics for Stage and Screen",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90014",
    name: "Screen Design Projects A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90015",
    name: "Industry Investigation Project A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90022",
    name: "Business of Producing 2",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90025",
    name: "Documentary Projects 1A",
    offered: ["semester_1"],
  },
  {
    code: "FLTV90026",
    name: "Screen Language 1A",
    offered: ["semester_1"],
  },
  {
    code: "FNCE10002",
    name: "Principles of Finance",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "FNCE20005",
    name: "Corporate Financial Decision Making",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "FNCE30001",
    name: "Investments",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE30006",
    name: "Entrepreneurial Finance",
    offered: ["semester_1"],
  },
  {
    code: "FNCE30007",
    name: "Derivative Securities",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE30008",
    name: "Street Finance",
    offered: ["semester_1"],
  },
  {
    code: "FNCE30011",
    name: "Essentials of Corporate Valuation",
    offered: ["semester_1"],
  },
  {
    code: "FNCE40001",
    name: "Advanced Corporate Finance",
    offered: ["semester_1"],
  },
  {
    code: "FNCE40002",
    name: "Advanced Investments",
    offered: ["semester_1"],
  },
  {
    code: "FNCE40003",
    name: "Numerical Techniques in Finance",
    offered: ["semester_1"],
  },
  {
    code: "FNCE40004",
    name: "Research Methods in Finance",
    offered: ["semester_1"],
  },
  {
    code: "FNCE90011",
    name: "Derivative Securities",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90012",
    name: "Corporate Restructuring and Valuation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90013",
    name: "Case Studies in Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90016",
    name: "International Financial Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90018",
    name: "Corporate Financial Policy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90046",
    name: "Treasury Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90047",
    name: "Financial Markets and Instruments",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90048",
    name: "Project Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90049",
    name: "Property Development and Investment",
    offered: ["semester_1"],
  },
  {
    code: "FNCE90056",
    name: "Investment Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90060",
    name: "Financial Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90062",
    name: "Capstone Studies in Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90064",
    name: "Emerging Markets Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90065",
    name: "Fundamentals of Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90071",
    name: "DRFS Research Report Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90072",
    name: "DRFS Research Report Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90074",
    name: "Laboratory Rotation 2",
    offered: ["semester_1"],
  },
  {
    code: "FNCE90077",
    name: "Empirical Investments",
    offered: ["semester_1"],
  },
  {
    code: "FNCE90080",
    name: "Applied Investment Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90082",
    name: "Applied Risk Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90083",
    name: "Data Analysis for Finance",
    offered: ["semester_1"],
  },
  {
    code: "FNCE90085",
    name: "Communicating Current Issues in Finance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FNCE90086",
    name: "Behavioural Finance",
    offered: ["semester_1"],
  },
  {
    code: "FOOD10001",
    name: "Beer Styles and Sensory Analysis",
    offered: ["semester_1"],
  },
  {
    code: "FOOD20003",
    name: "Intro to Food Science & Human Nutrition",
    offered: ["semester_1"],
  },
  {
    code: "FOOD30007",
    name: "Food Processing & Preservation",
    offered: ["semester_1"],
  },
  {
    code: "FOOD30008",
    name: "Advanced Food Analysis",
    offered: ["semester_1"],
  },
  {
    code: "FOOD40001",
    name: "Food Science Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "FOOD90010",
    name: "Meat and Meat Products",
    offered: ["semester_1"],
  },
  {
    code: "FOOD90022",
    name: "Food Chemistry",
    offered: ["semester_1"],
  },
  {
    code: "FOOD90023",
    name: "Food Microbiology",
    offered: ["semester_1"],
  },
  {
    code: "FOOD90029",
    name: "Food Engineering",
    offered: ["semester_1"],
  },
  {
    code: "FOOD90036",
    name: "MFPI Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FOOD90037",
    name: "MFPI Internship Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FOOD90038",
    name: "MFPI Internship Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FOOD90041",
    name: "The Politics of Food",
    offered: ["semester_1"],
  },
  {
    code: "FOOD90042",
    name: "Special Studies in Food",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "FREN10001",
    name: "French 3",
    offered: ["semester_1"],
  },
  {
    code: "FREN10004",
    name: "French 1",
    offered: ["semester_1", "winter_term"],
  },
  {
    code: "FREN10006",
    name: "French 5",
    offered: ["semester_1"],
  },
  {
    code: "FREN20001",
    name: "French 5",
    offered: ["semester_1"],
  },
  {
    code: "FREN20011",
    name: "French Cinema: The New Wave and Beyond",
    offered: ["semester_1"],
  },
  {
    code: "FREN20012",
    name: "French Travel Writing",
    offered: ["semester_1"],
  },
  {
    code: "FREN20015",
    name: "French 3",
    offered: ["semester_1"],
  },
  {
    code: "FREN20019",
    name: "French 7",
    offered: ["semester_1"],
  },
  {
    code: "FREN30001",
    name: "French 7",
    offered: ["semester_1"],
  },
  {
    code: "FREN30003",
    name: "French 5",
    offered: ["semester_1"],
  },
  {
    code: "FREN30013",
    name: "French Cinema: The New Wave and Beyond",
    offered: ["semester_1"],
  },
  {
    code: "FREN30014",
    name: "French Travel Writing",
    offered: ["semester_1"],
  },
  {
    code: "FREN40005",
    name: "French IV: Honours Language I",
    offered: ["semester_1"],
  },
  {
    code: "FREN40010",
    name: "French Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FREN40011",
    name: "French Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FREN90003",
    name: "Graduate French A",
    offered: ["semester_1"],
  },
  {
    code: "FRST30003",
    name: "Urban Forest Ecosystems",
    offered: ["semester_1"],
  },
  {
    code: "FRST90076",
    name: "Short Research Project B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "FRST90077",
    name: "Long Research Project B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GDES10001",
    name: "Graphic Design Studio 1: Image & Text",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GDES20001",
    name: "Graphic Design Studio 2: Image & Media",
    offered: ["semester_1"],
  },
  {
    code: "GDES30001",
    name: "Infographics Studio",
    offered: ["semester_1"],
  },
  {
    code: "GDES30002",
    name: "Branding",
    offered: ["semester_1"],
  },
  {
    code: "GEND20008",
    name: "Sex and Gender Present and Future",
    offered: ["semester_1"],
  },
  {
    code: "GEND40006",
    name: "Gender Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEND40007",
    name: "Gender Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEND40008",
    name: "Queer Theory",
    offered: ["semester_1"],
  },
  {
    code: "GEND90011",
    name: "Gender and Development Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEND90012",
    name: "Gender and Development Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GENE10001",
    name: "Genetics in the Media",
    offered: ["semester_1"],
  },
  {
    code: "GENE20001",
    name: "Foundations of Genetics and Genomics",
    offered: ["semester_1"],
  },
  {
    code: "GENE30001",
    name: "Evolutionary Genetics and Genomics",
    offered: ["semester_1"],
  },
  {
    code: "GENE30002",
    name: "Genes: Organisation and Function",
    offered: ["semester_1"],
  },
  {
    code: "GENE90001",
    name: "Human Genetics & Genomics in Healthcare",
    offered: ["semester_1"],
  },
  {
    code: "GENE90018",
    name: "Advanced Topics in Genetics",
    offered: ["semester_1"],
  },
  {
    code: "GENE90019",
    name: "Genes Molecules and Cells",
    offered: ["semester_1"],
  },
  {
    code: "GENE90021",
    name: "Advanced Clinical Genomics 1",
    offered: ["semester_1"],
  },
  {
    code: "GENE90026",
    name: "Clinical Genome Variant Analysis 1",
    offered: ["semester_1"],
  },
  {
    code: "GENP40000",
    name: "Primary Care Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "GENP40002",
    name: "Introduction to Primary Care Research",
    offered: ["semester_1"],
  },
  {
    code: "GENP60002",
    name: "Preventive Health Care",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GENP90017",
    name: "Immunisation and Travel Health",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG10001",
    name: "Famine: The Geography of Scarcity",
    offered: ["semester_1"],
  },
  {
    code: "GEOG20001",
    name: "Society and Environments",
    offered: ["semester_1"],
  },
  {
    code: "GEOG20002",
    name: "Landscapes and Environmental Change",
    offered: ["semester_1"],
  },
  {
    code: "GEOG20003",
    name: "Environmental Politics and Management",
    offered: ["semester_1"],
  },
  {
    code: "GEOG20010",
    name: "China in Transition",
    offered: ["semester_1"],
  },
  {
    code: "GEOG20012",
    name: "Post-Conflict Development and Difference",
    offered: ["semester_1"],
  },
  {
    code: "GEOG20016",
    name: "Fertility, Mortality and Social Change",
    offered: ["semester_1"],
  },
  {
    code: "GEOG30001",
    name: "Geomorphology: Catchment to Coast",
    offered: ["semester_1"],
  },
  {
    code: "GEOG30019",
    name: "Sustainable Development",
    offered: ["semester_1"],
  },
  {
    code: "GEOG30022",
    name: "Riverine Landscapes: Hydrology & Ecology",
    offered: ["semester_1"],
  },
  {
    code: "GEOG30029",
    name: "Geographies of Migration",
    offered: ["semester_1"],
  },
  {
    code: "GEOG40003",
    name: "Advancing Geography & Environmental Stud",
    offered: ["semester_1"],
  },
  {
    code: "GEOG90003",
    name: "Integrated River & Catchment Management",
    offered: ["semester_1"],
  },
  {
    code: "GEOG90010",
    name: "Geography Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90011",
    name: "Geography Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90012",
    name: "Geography Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90013",
    name: "Geography Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90015",
    name: "Geography Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90018",
    name: "Contemporary Geographical Thought",
    offered: ["semester_1"],
  },
  {
    code: "GEOG90020",
    name: "Risk Management and Citizen Science",
    offered: ["semester_1"],
  },
  {
    code: "GEOG90021",
    name: "Conservation and Cultural Environments",
    offered: ["semester_1"],
  },
  {
    code: "GEOG90022",
    name: "International Internship in Environment",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "GEOG90028",
    name: "Geography Practical",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "GEOG90030",
    name: "Geography Minor Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90031",
    name: "Geography Minor Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90032",
    name: "Geography Minor Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOG90033",
    name: "Geography Minor Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOL20002",
    name: "Structural and Metamorphic Geology",
    offered: ["semester_1"],
  },
  {
    code: "GEOL20003",
    name: "Earth Composition, Minerals and Magmas",
    offered: ["semester_1"],
  },
  {
    code: "GEOL30004",
    name: "Geochemistry & Petrogenesis",
    offered: ["semester_1"],
  },
  {
    code: "GEOL30007",
    name: "Geobiology: Fossils & Environments",
    offered: ["semester_1"],
  },
  {
    code: "GEOL90005",
    name: "Hydrogeology/Environmental Geochemistry",
    offered: ["semester_1"],
  },
  {
    code: "GEOL90022",
    name: "Practical Earth Science A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOL90023",
    name: "Practical Earth Science B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOL90024",
    name: "Project In Geoscience",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOL90025",
    name: "Research Project In Geoscience",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOM20013",
    name: "Applications of GIS",
    offered: ["semester_1"],
  },
  {
    code: "GEOM30009",
    name: "Imaging the Environment",
    offered: ["semester_1"],
  },
  {
    code: "GEOM90008",
    name: "Foundations of Spatial Information",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GEOM90010",
    name: "Spatial Information Research Project A",
    offered: ["summer_term", "semester_1", "winter_term", "semester_2"],
  },
  {
    code: "GEOM90013",
    name: "Spatial Information Research Project C",
    offered: ["summer_term", "semester_1", "winter_term", "semester_2"],
  },
  {
    code: "GEOM90018",
    name: "Spatial Databases",
    offered: ["semester_1"],
  },
  {
    code: "GEOM90020",
    name: "Spatial Information Research Project",
    offered: ["summer_term", "semester_1", "winter_term", "semester_2"],
  },
  {
    code: "GEOM90023",
    name: "Spatial Information Research Project B",
    offered: ["summer_term", "semester_1", "winter_term", "semester_2"],
  },
  {
    code: "GEOM90031",
    name: "Spatial Information Research Project D",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "GEOM90038",
    name: "Advanced Imaging",
    offered: ["semester_1"],
  },
  {
    code: "GEOM90039",
    name: "Advanced Surveying and Mapping",
    offered: ["semester_1"],
  },
  {
    code: "GEOM90042",
    name: "Spatial Information Programming",
    offered: ["semester_1"],
  },
  {
    code: "GEOM90043",
    name: "Spatial IT Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "GEOM90045",
    name: "Residential Land Development",
    offered: ["semester_1"],
  },
  {
    code: "GERM10001",
    name: "German 3",
    offered: ["semester_1"],
  },
  {
    code: "GERM10004",
    name: "German 1",
    offered: ["summer_term", "semester_1", "winter_term"],
  },
  {
    code: "GERM10006",
    name: "German 5",
    offered: ["semester_1"],
  },
  {
    code: "GERM10008",
    name: "German 7",
    offered: ["semester_1"],
  },
  {
    code: "GERM20001",
    name: "German 7",
    offered: ["semester_1"],
  },
  {
    code: "GERM20003",
    name: "German Cultural Studies B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GERM20004",
    name: "German 3",
    offered: ["semester_1"],
  },
  {
    code: "GERM20007",
    name: "German 5",
    offered: ["semester_1"],
  },
  {
    code: "GERM20009",
    name: "German 9",
    offered: ["semester_1"],
  },
  {
    code: "GERM30001",
    name: "German Cultural Studies B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GERM30002",
    name: "German Cultural Studies C",
    offered: ["semester_1"],
  },
  {
    code: "GERM30003",
    name: "German 9",
    offered: ["semester_1"],
  },
  {
    code: "GERM30005",
    name: "German 5",
    offered: ["semester_1"],
  },
  {
    code: "GERM30021",
    name: "German 7",
    offered: ["semester_1"],
  },
  {
    code: "GERM40010",
    name: "German Honours Language",
    offered: ["semester_1"],
  },
  {
    code: "GERM40016",
    name: "German Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GERM40017",
    name: "German Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "GERM90003",
    name: "Graduate German A",
    offered: ["semester_1"],
  },
  {
    code: "HEBR10001",
    name: "Hebrew 1",
    offered: ["semester_1"],
  },
  {
    code: "HEBR10005",
    name: "Hebrew 3",
    offered: ["semester_1"],
  },
  {
    code: "HEBR10011",
    name: "Hebrew 5",
    offered: ["semester_1"],
  },
  {
    code: "HEBR20005",
    name: "Hebrew 3",
    offered: ["semester_1"],
  },
  {
    code: "HEBR20007",
    name: "Hebrew 5",
    offered: ["semester_1"],
  },
  {
    code: "HEBR30003",
    name: "Hebrew 5",
    offered: ["semester_1"],
  },
  {
    code: "HIST10012",
    name: "The World Since World War II",
    offered: ["semester_1"],
  },
  {
    code: "HIST10016",
    name: "Europe: From Black Death to New Worlds",
    offered: ["semester_1"],
  },
  {
    code: "HIST20013",
    name: "The Holocaust & Genocide",
    offered: ["semester_1"],
  },
  {
    code: "HIST20034",
    name: "Modern Southeast Asia",
    offered: ["semester_1"],
  },
  {
    code: "HIST20059",
    name: "American History: Revolution to WWII",
    offered: ["semester_1"],
  },
  {
    code: "HIST20065",
    name: "Rebels and Revolutionaries",
    offered: ["semester_1"],
  },
  {
    code: "HIST20068",
    name: "The French Revolution",
    offered: ["semester_1"],
  },
  {
    code: "HIST20072",
    name: "Pirates and their Enemies",
    offered: ["semester_1"],
  },
  {
    code: "HIST20089",
    name: "Britain's Empire: Power and Resistance",
    offered: ["semester_1"],
  },
  {
    code: "HIST30015",
    name: "The Modern Middle East",
    offered: ["semester_1"],
  },
  {
    code: "HIST30068",
    name: "A History of Violence",
    offered: ["semester_1"],
  },
  {
    code: "HIST30074",
    name: "Global Histories of Indigenous Activism",
    offered: ["semester_1"],
  },
  {
    code: "HIST30075",
    name: "Gender in History, 1800 to the Present",
    offered: ["semester_1"],
  },
  {
    code: "HIST30076",
    name: "Stalinism",
    offered: ["semester_1"],
  },
  {
    code: "HIST40030",
    name: "History for Historians",
    offered: ["semester_1"],
  },
  {
    code: "HIST40039",
    name: "History Thesis Part 1",
    offered: ["semester_1"],
  },
  {
    code: "HIST90023",
    name: "The Writing of Australian History",
    offered: ["semester_1"],
  },
  {
    code: "HIST90024",
    name: "International History",
    offered: ["semester_1"],
  },
  {
    code: "HIST90034",
    name: "International Relations Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "HIST90035",
    name: "International Relations Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "HLTH90006",
    name: "Basics of Digital Health for Clinicians",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "HLTH90014",
    name: "Healthcare Research-Principles & Designs",
    offered: ["semester_1"],
  },
  {
    code: "HLTH90019",
    name: "Indigenous Health and Nursing",
    offered: ["semester_1"],
  },
  {
    code: "HORT90008",
    name: "Horticultural Plant Science",
    offered: ["semester_1"],
  },
  {
    code: "HORT90033",
    name: "Plants in the Landscape",
    offered: ["semester_1"],
  },
  {
    code: "HORT90034",
    name: "Landscape Design",
    offered: ["semester_1"],
  },
  {
    code: "HORT90038",
    name: "Food Production for Urban Landscapes",
    offered: ["semester_1"],
  },
  {
    code: "HPSC10002",
    name: "Science and Pseudoscience",
    offered: ["semester_1"],
  },
  {
    code: "HPSC20009",
    name: "Technology & Contemporary Life",
    offered: ["semester_1"],
  },
  {
    code: "HPSC30023",
    name: "Science and Society",
    offered: ["semester_1"],
  },
  {
    code: "HPSC30034",
    name: "Magic, Reason, New Worlds, 1450-1750",
    offered: ["semester_1"],
  },
  {
    code: "HPSC40016",
    name: "History and Philosophy of Science",
    offered: ["semester_1"],
  },
  {
    code: "HPSC40018",
    name: "HPS Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "HPSC40019",
    name: "HPS Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "HPSC90010",
    name: "Environment and Knowledge",
    offered: ["semester_1"],
  },
  {
    code: "HPSC90013",
    name: "Science, Controversy and Public Policy",
    offered: ["semester_1"],
  },
  {
    code: "IBUS90001",
    name: "Global Strategy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "IBUS90002",
    name: "Managing in Asia",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "IBUS90003",
    name: "The Multinational",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INDG10001",
    name: "Indigenous Australia",
    offered: ["semester_1"],
  },
  {
    code: "INDG20001",
    name: "Indigenous Treaties and Titles",
    offered: ["semester_1"],
  },
  {
    code: "INDG20004",
    name: "Racial Literacy: Indigeneity & Whiteness",
    offered: ["semester_1"],
  },
  {
    code: "INDG30002",
    name: "Indigenous Cultural Heritage",
    offered: ["semester_1"],
  },
  {
    code: "INDG30004",
    name: "Aboriginal Writing",
    offered: ["semester_1"],
  },
  {
    code: "INDG40002",
    name: "Textual Revelations",
    offered: ["semester_1"],
  },
  {
    code: "INDG40003",
    name: "Indigenous Studies Thesis Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INDG40004",
    name: "Indigenous Studies Thesis Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INDO10001",
    name: "Indonesian 3",
    offered: ["semester_1"],
  },
  {
    code: "INDO10003",
    name: "Indonesian 5",
    offered: ["semester_1"],
  },
  {
    code: "INDO10005",
    name: "Indonesian 1",
    offered: ["semester_1"],
  },
  {
    code: "INDO10012",
    name: "Literature: Reading Indonesian Lives",
    offered: ["semester_1"],
  },
  {
    code: "INDO10014",
    name: "Indonesia in the World",
    offered: ["semester_1"],
  },
  {
    code: "INDO20006",
    name: "Indonesian 3",
    offered: ["semester_1"],
  },
  {
    code: "INDO20008",
    name: "Indonesian 5",
    offered: ["semester_1"],
  },
  {
    code: "INDO20015",
    name: "Literature: Reading Indonesian Lives",
    offered: ["semester_1"],
  },
  {
    code: "INDO20017",
    name: "Indonesia in the World",
    offered: ["semester_1"],
  },
  {
    code: "INDO30006",
    name: "Literature: Reading Indonesian Lives",
    offered: ["semester_1"],
  },
  {
    code: "INDO30011",
    name: "Indonesian 5",
    offered: ["semester_1"],
  },
  {
    code: "INDO30020",
    name: "Indonesia in the World",
    offered: ["semester_1"],
  },
  {
    code: "INDO40001",
    name: "Honours Indonesian A",
    offered: ["semester_1"],
  },
  {
    code: "INDO40003",
    name: "Topics in Indonesian Studies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INDO40008",
    name: "Indonesian Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INDO40009",
    name: "Indonesian Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INDO90002",
    name: "Graduate Indonesian A",
    offered: ["semester_1"],
  },
  {
    code: "INFO20003",
    name: "Database Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INFO20005",
    name: "User Interface Development",
    offered: ["semester_1"],
  },
  {
    code: "INFO30005",
    name: "Web Information Technologies",
    offered: ["semester_1"],
  },
  {
    code: "INFO30009",
    name: "Game Design",
    offered: ["semester_1"],
  },
  {
    code: "INFO90002",
    name: "Database Systems & Information Modelling",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INFO90003",
    name: "Designing Novel Interactions",
    offered: ["semester_1"],
  },
  {
    code: "INFO90004",
    name: "Evaluating the User Experience",
    offered: ["semester_1"],
  },
  {
    code: "INFO90008",
    name: "HCI Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INFO90009",
    name: "HCI Project (Advanced)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "INFO90010",
    name: "Technology Innovation Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISLM10003",
    name: "Islam and Muslim Societies: Introduction",
    offered: ["semester_1"],
  },
  {
    code: "ISLM20016",
    name: "Introduction to Islamic Spirituality",
    offered: ["semester_1"],
  },
  {
    code: "ISLM30018",
    name: "Diplomacy: Engaging the Muslim World",
    offered: ["semester_1"],
  },
  {
    code: "ISLM40001",
    name: "Topics in Arabic & Islamic Studies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISLM40011",
    name: "Islamic Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISLM40012",
    name: "Islamic Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90026",
    name: "Fundamentals of Information Systems",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90032",
    name: "Emerging Technologies and Issues",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90035",
    name: "Knowledge Management Systems",
    offered: ["semester_1"],
  },
  {
    code: "ISYS90036",
    name: "Enterprise Systems",
    offered: ["semester_1"],
  },
  {
    code: "ISYS90038",
    name: "IS Strategy and Governance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90043",
    name: "Enterprise Applications & Architectures",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90045",
    name: "Professional IS Consulting",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90048",
    name: "Managing ICT Infrastructure",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90049",
    name: "Digital Business Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90050",
    name: "IT Project and Change Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90051",
    name: "Impact of Digitisation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90069",
    name: "Digital Transformation of Health",
    offered: ["semester_1", "june"],
  },
  {
    code: "ISYS90076",
    name: "IT Infrastructure for Digital Health",
    offered: ["semester_1"],
  },
  {
    code: "ISYS90077",
    name: "Designing Digital Health Solutions",
    offered: ["semester_1"],
  },
  {
    code: "ISYS90079",
    name: "Health IT Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "ISYS90081",
    name: "Business Process Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90100",
    name: "Information Systems Maj Res Project Pt 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90101",
    name: "Information Systems Maj Res Project Pt 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90102",
    name: "Information Systems Maj Res Project Pt 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90103",
    name: "Information Systems Maj Res Project Pt 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90104",
    name: "Information Systems Maj Res Project Pt 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90105",
    name: "Information Systems Maj Res Project Pt 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90106",
    name: "Information Systems Maj Res Project Pt 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90107",
    name: "Information Systems Maj Res Project Pt 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90108",
    name: "Information Systems Maj Res Project Pt 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90109",
    name: "Information Systems Min Res Project Pt 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90110",
    name: "Information Systems Min Res Project Pt 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ISYS90112",
    name: "Business Process Analytics",
    offered: ["semester_1"],
  },
  {
    code: "ITAL10001",
    name: "Italian 3",
    offered: ["semester_1"],
  },
  {
    code: "ITAL10004",
    name: "Italian 1",
    offered: ["semester_1"],
  },
  {
    code: "ITAL10006",
    name: "Italian 5",
    offered: ["semester_1"],
  },
  {
    code: "ITAL10009",
    name: "Italian 7",
    offered: ["semester_1"],
  },
  {
    code: "ITAL20002",
    name: "Italian 7",
    offered: ["semester_1"],
  },
  {
    code: "ITAL20007",
    name: "Italian 3",
    offered: ["semester_1"],
  },
  {
    code: "ITAL20011",
    name: "Italian 5",
    offered: ["semester_1"],
  },
  {
    code: "ITAL20012",
    name: "Italian 9",
    offered: ["semester_1"],
  },
  {
    code: "ITAL30001",
    name: "Italian 9",
    offered: ["semester_1"],
  },
  {
    code: "ITAL30003",
    name: "Italian 5A",
    offered: ["semester_1"],
  },
  {
    code: "ITAL30007",
    name: "To Hell with Dante",
    offered: ["semester_1"],
  },
  {
    code: "ITAL30013",
    name: "Italian 5",
    offered: ["semester_1"],
  },
  {
    code: "ITAL30015",
    name: "Italian 7",
    offered: ["semester_1"],
  },
  {
    code: "ITAL40001",
    name: "Italian Honours Language Seminar 1",
    offered: ["semester_1"],
  },
  {
    code: "ITAL40015",
    name: "Italian Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ITAL40016",
    name: "Italian Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ITAL90003",
    name: "Graduate Italian A",
    offered: ["semester_1"],
  },
  {
    code: "JAPN10001",
    name: "Japanese 1",
    offered: ["semester_1"],
  },
  {
    code: "JAPN10003",
    name: "Japanese 5",
    offered: ["semester_1"],
  },
  {
    code: "JAPN10005",
    name: "Japanese 7",
    offered: ["semester_1"],
  },
  {
    code: "JAPN10007",
    name: "Japanese 3",
    offered: ["semester_1"],
  },
  {
    code: "JAPN10010",
    name: "Variation in Japanese Language",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20003",
    name: "Japanese 7",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20005",
    name: "Contemporary Japan",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20007",
    name: "Japanese 3",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20009",
    name: "Signs and Symbols in Japanese",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20012",
    name: "Variation in Japanese Language",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20013",
    name: "Japanese 5",
    offered: ["semester_1"],
  },
  {
    code: "JAPN20018",
    name: "Japanese Through the Media",
    offered: ["semester_1"],
  },
  {
    code: "JAPN30004",
    name: "Japanese through the Media",
    offered: ["semester_1"],
  },
  {
    code: "JAPN30005",
    name: "Japanese 7",
    offered: ["semester_1"],
  },
  {
    code: "JAPN30007",
    name: "Japanese 5",
    offered: ["semester_1"],
  },
  {
    code: "JAPN30010",
    name: "Signs and Symbols in Japanese",
    offered: ["semester_1"],
  },
  {
    code: "JAPN30012",
    name: "Variation in Japanese Language",
    offered: ["semester_1"],
  },
  {
    code: "JAPN40001",
    name: "Honours Japanese A",
    offered: ["semester_1"],
  },
  {
    code: "JAPN40003",
    name: "Topics in Japanese Studies",
    offered: ["semester_1"],
  },
  {
    code: "JAPN40008",
    name: "Japanese Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JAPN40009",
    name: "Japanese Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JAPN90002",
    name: "Graduate Japanese A",
    offered: ["semester_1"],
  },
  {
    code: "JEWI20007",
    name: "Modern Israel: Good Bad and Disputed",
    offered: ["semester_1"],
  },
  {
    code: "JOUR90001",
    name: "Researching/Writing Stories",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90003",
    name: "Journalism Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90005",
    name: "Audio Journalism",
    offered: ["semester_1"],
  },
  {
    code: "JOUR90010",
    name: "Newsroom-Applied Professional Practice",
    offered: ["semester_1"],
  },
  {
    code: "JOUR90015",
    name: "Journalism Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90016",
    name: "Journalism Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90017",
    name: "Journalism Project (Extended) Part 1",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "JOUR90018",
    name: "Journalism Project (Extended) Part 2",
    offered: ["semester_1"],
  },
  {
    code: "JOUR90019",
    name: "Journalism Project (Extended) Part 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90020",
    name: "International Journalism - Key Skills",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90021",
    name: "International Traditions in Journalism",
    offered: ["semester_1"],
  },
  {
    code: "JOUR90025",
    name: "Journalism Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "JOUR90026",
    name: "Journalism Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "KORE10001",
    name: "Korean 1",
    offered: ["semester_1"],
  },
  {
    code: "KORE10003",
    name: "Korean 3",
    offered: ["semester_1"],
  },
  {
    code: "KORE20003",
    name: "Korean 3",
    offered: ["semester_1"],
  },
  {
    code: "KORE30002",
    name: "Two Koreas in the World",
    offered: ["semester_1"],
  },
  {
    code: "LANG40003",
    name: "Seminar in Languages 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LANG40004",
    name: "Seminar in Languages 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LARC30001",
    name: "Site Tectonics",
    offered: ["semester_1"],
  },
  {
    code: "LAWS20008",
    name: "Legal Language",
    offered: ["semester_1"],
  },
  {
    code: "LAWS20014",
    name: "Intellectual Property Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50024",
    name: "Principles of Public Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50025",
    name: "Torts",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50026",
    name: "Obligations",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50030",
    name: "Property",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50032",
    name: "Administrative Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50036",
    name: "Remedies",
    offered: ["semester_1", "november"],
  },
  {
    code: "LAWS50037",
    name: "Evidence and Proof",
    offered: ["semester_1", "june"],
  },
  {
    code: "LAWS50039",
    name: "Legal Research",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LAWS50046",
    name: "Taxation Law and Policy",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50055",
    name: "Advocacy",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "LAWS50058",
    name: "Melbourne University Law Review",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "LAWS50059",
    name: "Legal Internship",
    offered: ["january", "semester_1", "june", "semester_2", "november"],
  },
  {
    code: "LAWS50060",
    name: "Melbourne Journal of International Law",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "LAWS50063",
    name: "Competition Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50064",
    name: "Employment Law",
    offered: ["february", "semester_1"],
  },
  {
    code: "LAWS50068",
    name: "Equality and Discrimination Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50075",
    name: "Trade Mark Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50078",
    name: "Environmental Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50094",
    name: "International Commercial Law & Disputes",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50101",
    name: "Refugee Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50119",
    name: "Sports Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50127",
    name: "Philosophical Foundations of Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS50130",
    name: "Advanced Torts",
    offered: ["semester_1"],
  },
  {
    code: "LAWS70003",
    name: "Minor Thesis (LLM) # P/T",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LAWS70006",
    name: "International Tax: Principles, Structure",
    offered: ["semester_1", "november"],
  },
  {
    code: "LAWS70015",
    name: "Minor Thesis F/T LLM",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LAWS70067",
    name: "International Legal Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LAWS70318",
    name: "Tax Practice: Writing Effectively",
    offered: ["semester_1"],
  },
  {
    code: "LAWS70469",
    name: "Construction Law",
    offered: ["semester_1"],
  },
  {
    code: "LAWS90033",
    name: "Law Apps",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LAWS90039",
    name: "Mediation",
    offered: ["semester_1"],
  },
  {
    code: "LAWS90074",
    name: "Copyright and Designs",
    offered: ["semester_1"],
  },
  {
    code: "LAWS90164",
    name: "MLS Tax Clinic",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LAWS90209",
    name: "Indigenous Legal Advocacy Clinic",
    offered: ["semester_1"],
  },
  {
    code: "LAWS90212",
    name: "Law and Civil Society in Asia",
    offered: ["semester_1"],
  },
  {
    code: "LAWS90218",
    name: "Constitutions in Global Perspective",
    offered: ["semester_1"],
  },
  {
    code: "LAWS90228",
    name: "International Capital Markets",
    offered: ["semester_1"],
  },
  {
    code: "LING10002",
    name: "Intercultural Communication",
    offered: ["semester_1"],
  },
  {
    code: "LING20005",
    name: "Phonetics",
    offered: ["semester_1"],
  },
  {
    code: "LING20009",
    name: "Language in Aboriginal Australia",
    offered: ["semester_1"],
  },
  {
    code: "LING20011",
    name: "Grammar of English",
    offered: ["semester_1"],
  },
  {
    code: "LING30003",
    name: "First Language Acquisition",
    offered: ["semester_1"],
  },
  {
    code: "LING30007",
    name: "Semantics",
    offered: ["semester_1"],
  },
  {
    code: "LING30014",
    name: "Australian Indigenous Languages",
    offered: ["semester_1"],
  },
  {
    code: "LING40002",
    name: "Issues in Linguistic Research",
    offered: ["semester_1"],
  },
  {
    code: "LING40008",
    name: "Experimental Phonetics",
    offered: ["semester_1"],
  },
  {
    code: "LING40015",
    name: "LAL Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING40016",
    name: "LAL Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING90002",
    name: "Presenting Academic Discourse",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING90003",
    name: "Research in Applied Linguistics",
    offered: ["semester_1"],
  },
  {
    code: "LING90005",
    name: "Quantitative Methods in Language Studies",
    offered: ["semester_1"],
  },
  {
    code: "LING90009",
    name: "Language Testing",
    offered: ["semester_1"],
  },
  {
    code: "LING90010",
    name: "Applied Linguistics Thesis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING90012",
    name: "Second Language Acquisition",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING90016",
    name: "Grammar in Use",
    offered: ["semester_1"],
  },
  {
    code: "LING90018",
    name: "Sociolinguistics and Language Learning",
    offered: ["semester_1"],
  },
  {
    code: "LING90031",
    name: "Advanced Linguistics Analysis A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING90032",
    name: "Advanced Linguistics Analysis B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LING90033",
    name: "Linguistics for Speech Pathology",
    offered: ["semester_1"],
  },
  {
    code: "LING90039",
    name: "Concepts in Applied Linguistics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "LTAM10001",
    name: "Latin America: Past, Politics & Culture",
    offered: ["semester_1"],
  },
  {
    code: "MAST10005",
    name: "Calculus 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST10006",
    name: "Calculus 2",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MAST10007",
    name: "Linear Algebra",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MAST10008",
    name: "Accelerated Mathematics 1",
    offered: ["semester_1"],
  },
  {
    code: "MAST10011",
    name: "Experimental Design and Data Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST10012",
    name: "Introduction to Mathematics",
    offered: ["semester_1"],
  },
  {
    code: "MAST10014",
    name: "Foundation Mathematics 1",
    offered: ["semester_1"],
  },
  {
    code: "MAST10016",
    name: "Mathematics for Biomedicine",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST10022",
    name: "Linear Algebra: Advanced",
    offered: ["semester_1"],
  },
  {
    code: "MAST20004",
    name: "Probability",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST20006",
    name: "Probability for Statistics",
    offered: ["semester_1"],
  },
  {
    code: "MAST20009",
    name: "Vector Calculus",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST20026",
    name: "Real Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST20029",
    name: "Engineering Mathematics",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MAST20031",
    name: "Analysis of Biological Data",
    offered: ["semester_1"],
  },
  {
    code: "MAST20032",
    name: "Vector Calculus: Advanced",
    offered: ["semester_1"],
  },
  {
    code: "MAST20033",
    name: "Real Analysis: Advanced",
    offered: ["semester_1"],
  },
  {
    code: "MAST30005",
    name: "Algebra",
    offered: ["semester_1"],
  },
  {
    code: "MAST30011",
    name: "Graph Theory",
    offered: ["semester_1"],
  },
  {
    code: "MAST30013",
    name: "Techniques in Operations Research",
    offered: ["semester_1"],
  },
  {
    code: "MAST30020",
    name: "Probability for Inference",
    offered: ["semester_1"],
  },
  {
    code: "MAST30021",
    name: "Complex Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST30025",
    name: "Linear Statistical Models",
    offered: ["semester_1"],
  },
  {
    code: "MAST30030",
    name: "Applied Mathematical Modelling",
    offered: ["semester_1"],
  },
  {
    code: "MAST30032",
    name: "Biological Modelling and Simulation",
    offered: ["semester_1"],
  },
  {
    code: "MAST90012",
    name: "Measure Theory",
    offered: ["semester_1"],
  },
  {
    code: "MAST90014",
    name: "Optimisation for Industry",
    offered: ["semester_1"],
  },
  {
    code: "MAST90019",
    name: "Random Processes",
    offered: ["semester_1"],
  },
  {
    code: "MAST90029",
    name: "Differential Topology and Geometry",
    offered: ["semester_1"],
  },
  {
    code: "MAST90031",
    name: "Enumerative Combinatorics",
    offered: ["semester_1"],
  },
  {
    code: "MAST90042",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90044",
    name: "Thinking and Reasoning with Data",
    offered: ["semester_1"],
  },
  {
    code: "MAST90045",
    name: "Systems Modelling and Simulation",
    offered: ["semester_1"],
  },
  {
    code: "MAST90046",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90047",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90048",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90057",
    name: "Elements of Probability",
    offered: ["semester_1"],
  },
  {
    code: "MAST90059",
    name: "Stochastic Calculus with Applications",
    offered: ["semester_1"],
  },
  {
    code: "MAST90060",
    name: "Mathematical Statistical Mechanics",
    offered: ["semester_1"],
  },
  {
    code: "MAST90064",
    name: "Advanced Methods: Differential Equations",
    offered: ["semester_1"],
  },
  {
    code: "MAST90072",
    name: "Data and Decision Making",
    offered: ["semester_1"],
  },
  {
    code: "MAST90073",
    name: "Minor Research Project Part A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90074",
    name: "Minor Research Project Part B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90075",
    name: "Research Project Part A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90076",
    name: "Research Project Part B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90077",
    name: "Research Project Part C",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MAST90082",
    name: "Mathematical Statistics",
    offered: ["semester_1"],
  },
  {
    code: "MAST90084",
    name: "Statistical Modelling",
    offered: ["semester_1"],
  },
  {
    code: "MAST90101",
    name: "Introduction to Statistical Computing",
    offered: ["semester_1"],
  },
  {
    code: "MAST90105",
    name: "Methods of Mathematical Statistics",
    offered: ["semester_1"],
  },
  {
    code: "MAST90106",
    name: "Data Science Project Pt1",
    offered: ["semester_1"],
  },
  {
    code: "MAST90108",
    name: "Data Science Research Project Pt1",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MAST90109",
    name: "Data Science Research Project Pt2",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MAST90122",
    name: "Inference for Spatio-Temporal Processes",
    offered: ["semester_1"],
  },
  {
    code: "MAST90127",
    name: "Advanced Biological Modelling: Dynamics",
    offered: ["semester_1"],
  },
  {
    code: "MAST90132",
    name: "Lie Algebras",
    offered: ["semester_1"],
  },
  {
    code: "MAST90137",
    name: "Mathematical Game Theory",
    offered: ["semester_1"],
  },
  {
    code: "MAST90139",
    name: "Statistical Modelling for Data Science",
    offered: ["semester_1"],
  },
  {
    code: "MCEN30017",
    name: "Mechanics & Materials",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MCEN30018",
    name: "Thermodynamics and Fluid Mechanics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MCEN30020",
    name: "Systems Modelling and Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MCEN30021",
    name: "Mechanical Systems Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MCEN90012",
    name: "Design for Manufacture",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90014",
    name: "Materials",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90015",
    name: "Thermodynamics",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90017",
    name: "Advanced Motion Control",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90018",
    name: "Advanced Fluid Dynamics",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90028",
    name: "Robotics Systems",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90029",
    name: "Advanced Solid Mechanics",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90032",
    name: "Sensor Systems",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90036",
    name: "Capstone Project A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MCEN90038",
    name: "Dynamics",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90045",
    name: "Aerospace Dynamics and Control",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90048",
    name: "Artificial Intelligence for Engineers",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90054",
    name: "Design and Manufacturing Practice",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90055",
    name: "Manufacturing Processes and Technology",
    offered: ["semester_1"],
  },
  {
    code: "MCEN90058",
    name: "Industrial Engineering",
    offered: ["semester_1"],
  },
  {
    code: "MECM10003",
    name: "Media and Society",
    offered: ["semester_1"],
  },
  {
    code: "MECM10005",
    name: "Academic Writing and Communication",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM20006",
    name: "Understanding Australian Media",
    offered: ["semester_1"],
  },
  {
    code: "MECM20010",
    name: "Comparing Media Systems",
    offered: ["semester_1"],
  },
  {
    code: "MECM20012",
    name: "Analysing Professional Communication",
    offered: ["february", "semester_1", "june"],
  },
  {
    code: "MECM20013",
    name: "Text and Audio Journalism",
    offered: ["semester_1"],
  },
  {
    code: "MECM30015",
    name: "Media and Communications Project",
    offered: ["semester_1"],
  },
  {
    code: "MECM30016",
    name: "Digital Media Research",
    offered: ["semester_1"],
  },
  {
    code: "MECM40003",
    name: "Researching Audiences and Reception",
    offered: ["semester_1"],
  },
  {
    code: "MECM40006",
    name: "Public Relations and Communications",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM40011",
    name: "Writing for the Media",
    offered: ["semester_1"],
  },
  {
    code: "MECM40018",
    name: "Media & Communications Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM40019",
    name: "Media & Communications Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90002",
    name: "Global Data Policy & Governance",
    offered: ["semester_1"],
  },
  {
    code: "MECM90007",
    name: "Media Convergence and Digital Culture",
    offered: ["semester_1"],
  },
  {
    code: "MECM90024",
    name: "Strategic Content Creation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90026",
    name: "Advanced Industry Practice - Advertising",
    offered: ["semester_1"],
  },
  {
    code: "MECM90029",
    name: "Media and Communications Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90030",
    name: "Media and Communications Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90031",
    name: "Audiovisual Communication",
    offered: ["semester_1", "winter_term", "semester_2"],
  },
  {
    code: "MECM90032",
    name: "Marketing Communications Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90033",
    name: "Marketing Communications Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90034",
    name: "Marketing & Media in a Global Context",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90035",
    name: "Integrated Marketing Communications",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90036",
    name: "Foundations of Marketing & Communication",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90038",
    name: "Researching Media & Communications",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90039",
    name: "Understanding Media & Communications",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MECM90041",
    name: "Political Economy of Digital Life",
    offered: ["semester_1"],
  },
  {
    code: "MEDI40002",
    name: "Advanced Studies in Biomedicine",
    offered: ["semester_1"],
  },
  {
    code: "MEDI40004",
    name: "Seminars in Translational Medicine",
    offered: ["semester_1"],
  },
  {
    code: "MEDI40005",
    name: "Research Project - SVHM Part 1",
    offered: ["semester_1"],
  },
  {
    code: "MEDI40006",
    name: "Biomedical Advanced Coursework",
    offered: ["semester_1"],
  },
  {
    code: "MEDI40014",
    name: "Biomedicine Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "MEDI40018",
    name: "Research Project – WH Part 1",
    offered: ["semester_1"],
  },
  {
    code: "MEDI90046",
    name: "3-D Echocardiography & New Technologies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90047",
    name: "Congenital,Obsetric& Medical Conditions",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90048",
    name: "Advanced Case Studies Practicum",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90049",
    name: "Principles of Ultrasound Heart Scan",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90050",
    name: "Doppler Echocardiography",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90051",
    name: "Ventricular Function",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90054",
    name: "Ultrasound Guided Procedures",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90056",
    name: "Advanced Anatomy and Doppler Analysis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90057",
    name: "Advanced Valve and Aortic Pathology",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90058",
    name: "Applications of Echocardiography",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90059",
    name: "Advanced Echocardiography Interpretation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90083",
    name: "Research Methods & Ultrasound Literature",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90088",
    name: "Graduate Research Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90100",
    name: "Abdominal and Peri-Arrest Ultrasound",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90101",
    name: "Obstetrics Gynaecology and Practicum",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90102",
    name: "Vessels Nerves Lungs and Musculoskeletal",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MEDI90103",
    name: "Prehabilitation and Risk Assessment",
    offered: ["semester_1"],
  },
  {
    code: "MEDI90104",
    name: "Enhanced Recovery After Surgery",
    offered: ["semester_1"],
  },
  {
    code: "MGMT10002",
    name: "Principles of Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT10003",
    name: "Organisation and Management",
    offered: ["semester_1"],
  },
  {
    code: "MGMT20001",
    name: "Organisational Behaviour",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MGMT20002",
    name: "Managing Processes and Projects",
    offered: ["semester_1"],
  },
  {
    code: "MGMT30006",
    name: "Managing Entrepreneurship and Innovation",
    offered: ["semester_1"],
  },
  {
    code: "MGMT30012",
    name: "Management Consulting",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT30013",
    name: "Managing for Competitive Advantage",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90010",
    name: "Strategic Human Resources",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90011",
    name: "Managing Stakeholders",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90013",
    name: "Leadership and Team Dynamics",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90015",
    name: "Human Resource Fundamentals",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90016",
    name: "Performance & Reward Management",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90018",
    name: "Managing Behaviour in Organisations",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90025",
    name: "People and Change",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90026",
    name: "Supply Chain Management",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90027",
    name: "International Human Resources",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90030",
    name: "Managing Innovation",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90031",
    name: "Project Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90038",
    name: "Global Corporate Governance",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90129",
    name: "Group Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90130",
    name: "Internship I",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90131",
    name: "Internship II",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90140",
    name: "Management Competencies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90141",
    name: "Business Analysis & Decision Making",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MGMT90146",
    name: "Strategic Management",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MGMT90148",
    name: "Consulting Fundamentals",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90164",
    name: "EMA Special Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90171",
    name: "Leadership in Science",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90197",
    name: "Advanced Organisational Behaviour",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90198",
    name: "Advanced Qualitative Research Methods",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90201",
    name: "Entrepreneurial Practice",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90204",
    name: "Leading for Strategic Advantage",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90206",
    name: "Management & Marketing Special Topics 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90207",
    name: "Management & Marketing Special Topics 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90208",
    name: "Sustainable Business Practices",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90209",
    name: "EMA Career Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90223",
    name: "Design Thinking",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90224",
    name: "Garage Project",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90225",
    name: "Creating a Successful Business Model",
    offered: ["semester_1"],
  },
  {
    code: "MGMT90235",
    name: "EMA Special Project (Year Long) Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90236",
    name: "EMA Special Project (Year Long) Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90237",
    name: "Research Report Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90238",
    name: "Research Report Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MGMT90280",
    name: "Managerial Decision Analytics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MIIM20001",
    name: "Principles of Microbiology & Immunology",
    offered: ["semester_1"],
  },
  {
    code: "MIIM30002",
    name: "Principles of Immunology",
    offered: ["semester_1"],
  },
  {
    code: "MIIM30011",
    name: "Medical Microbiology: Bacteriology",
    offered: ["semester_1"],
  },
  {
    code: "MIIM30016",
    name: "Techniques in Microbiology",
    offered: ["semester_1"],
  },
  {
    code: "MIIM40002",
    name: "Advanced Microbiology and Immunology",
    offered: ["semester_1"],
  },
  {
    code: "MIIM40005",
    name: "Micro & Immuno Research Project Part 1",
    offered: ["semester_1", "june"],
  },
  {
    code: "MIIM40006",
    name: "Micro & Immuno Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MKTG10001",
    name: "Principles of Marketing",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MKTG20001",
    name: "Consumer Behaviour",
    offered: ["semester_1"],
  },
  {
    code: "MKTG20006",
    name: "Brand Management",
    offered: ["semester_1"],
  },
  {
    code: "MKTG30003",
    name: "Service and Relationship Marketing",
    offered: ["semester_1"],
  },
  {
    code: "MKTG30006",
    name: "Retailing",
    offered: ["semester_1"],
  },
  {
    code: "MKTG30012",
    name: "Business and Marketing Ethics",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90001",
    name: "Omnichannel Retail",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90002",
    name: "New Product Development",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90004",
    name: "Marketing Management",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MKTG90005",
    name: "Marketing Strategy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MKTG90006",
    name: "Branding",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90007",
    name: "Customer Experience Management",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90008",
    name: "Consumers and Consumption",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MKTG90011",
    name: "Marketing Research",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MKTG90012",
    name: "International Marketing Management",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90026",
    name: "Marketing Metrics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MKTG90032",
    name: "Applied Syndicate Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MKTG90033",
    name: "Neuromarketing",
    offered: ["semester_1"],
  },
  {
    code: "MKTG90037",
    name: "Managing for Value Creation",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MREN90001",
    name: "Polymers and Composites",
    offered: ["semester_1"],
  },
  {
    code: "MREN90003",
    name: "Electronic and Magnetic Materials",
    offered: ["semester_1"],
  },
  {
    code: "MREN90005",
    name: "Materials Engineering Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MULT10011",
    name: "Introduction to Life, Earth and Universe",
    offered: ["semester_1"],
  },
  {
    code: "MULT10014",
    name: "Identity",
    offered: ["semester_1"],
  },
  {
    code: "MULT10015",
    name: "Language",
    offered: ["semester_1"],
  },
  {
    code: "MULT10016",
    name: "Reason",
    offered: ["semester_1"],
  },
  {
    code: "MULT10018",
    name: "Power",
    offered: ["semester_1"],
  },
  {
    code: "MULT20003",
    name: "Critical Analytical Skills",
    offered: ["semester_1"],
  },
  {
    code: "MULT20008",
    name: "Australian Indigenous Politics",
    offered: ["semester_1"],
  },
  {
    code: "MULT20010",
    name: "Arts Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MULT20012",
    name: "Arts Internship: Not for Profit",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT30015",
    name: "Independent Research Project",
    offered: ["summer_term", "semester_1", "winter_term", "semester_2"],
  },
  {
    code: "MULT30019",
    name: "Arts Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MULT30020",
    name: "Arts Internship: Not for Profit",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT40007",
    name: "Special Research Topics",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90002",
    name: "Supervised Reading (Asia Institute)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90004",
    name: "Sustainability Governance and Leadership",
    offered: ["semester_1", "june"],
  },
  {
    code: "MULT90018",
    name: "Internship I (Placement Only)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90019",
    name: "Internship II (Semester Long)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90059",
    name: "Social Enterprise Incubator",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90061",
    name: "Internship II (Year Long) Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90062",
    name: "Internship II (Year Long) Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MULT90063",
    name: "Introduction to Quantum Computing",
    offered: ["semester_1"],
  },
  {
    code: "MULT90064",
    name: "Industry Core and Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI10016",
    name: "Art of Piano Teaching",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10017",
    name: "Riffs: Guitar Cultures & Practice 1",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "MUSI10037",
    name: "Music in Everyday Life",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10041",
    name: "Baroque Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10047",
    name: "Music History 1: Monteverdi to Mozart",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10052",
    name: "Brass Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10056",
    name: "Early Voices 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10058",
    name: "Conservatorium Choir 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10060",
    name: "Symphonic Ensembles 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10066",
    name: "Guitar Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10068",
    name: "String Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10076",
    name: "Piano Duo and Duet 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10092",
    name: "Vocal Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10159",
    name: "Choir 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10173",
    name: "Guitar Group 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10180",
    name: "Contextual Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10181",
    name: "Ensemble Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10182",
    name: "Individual Performance Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10184",
    name: "Pop Song Writing 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI10191",
    name: "Interactive Composition 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10192",
    name: "Ensemble Studies 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI10195",
    name: "Music Making Laboratory 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10197",
    name: "Individual Performance Studies 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI10202",
    name: "Jazz: The Improvisatory Spirit",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10204",
    name: "Applied Aural Musicianship 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10207",
    name: "Medieval and Renaissance Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10219",
    name: "Rock Music: From Roots to Retro",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10220",
    name: "Practical Music 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI10221",
    name: "Practical Music 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI10225",
    name: "Chamber Choir 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI10229",
    name: "Sound Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20008",
    name: "Music Technology",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20013",
    name: "Chamber Music 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20014",
    name: "Chamber Music 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20025",
    name: "Minor Music Performance 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20026",
    name: "Minor Music Performance 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20055",
    name: "Composition 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20056",
    name: "Composition 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20069",
    name: "Baroque Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20071",
    name: "Big Band 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20073",
    name: "Brass Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20080",
    name: "Early Voices 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20082",
    name: "Conservatorium Choir 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20087",
    name: "MCM Indonesian Gamelan Ensemble 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20088",
    name: "MCM Indonesian Gamelan Ensemble 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20089",
    name: "Guitar Ensemble 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20091",
    name: "String Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20093",
    name: "Symphonic Ensembles 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20099",
    name: "Piano Duo and Duet 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20104",
    name: "Shakuhachi 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20105",
    name: "Shakuhachi 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20108",
    name: "MCM Chinese Music Ensemble",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MUSI20112",
    name: "Vocal Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20122",
    name: "Composition Studies",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20124",
    name: "University Symphonic Ensembles 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20134",
    name: "Melbourne Big Band 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20135",
    name: "Chinese Music Ensemble 1",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MUSI20138",
    name: "Indonesian Gamelan Ensemble",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20143",
    name: "World Music Choir",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "MUSI20149",
    name: "Music Psychology",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20156",
    name: "Practical Anatomy for Classical Voice 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20160",
    name: "Applied Aural Musicianship 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20163",
    name: "Samba Band",
    offered: ["february", "semester_1", "june", "semester_2"],
  },
  {
    code: "MUSI20164",
    name: "Free Play New Music Improvisation Ensem",
    offered: ["february", "semester_1", "june", "semester_2"],
  },
  {
    code: "MUSI20173",
    name: "The Art of Game Music",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20174",
    name: "The Laptop Recording Studio",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20175",
    name: "Individual Performance Studies 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20176",
    name: "Ensemble Studies 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20177",
    name: "Contextual Studies 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20178",
    name: "Individual Performance Studies 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20179",
    name: "Ensemble Studies 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20181",
    name: "Interactive Composition 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20182",
    name: "Music Making Laboratory 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20198",
    name: "Music History 2: C19th Music and Ideas",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "MUSI20199",
    name: "Practical Music 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20200",
    name: "Practical Music 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20201",
    name: "Performance 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20202",
    name: "Performance 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20209",
    name: "Chinese Music Ensemble 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20210",
    name: "Saxophone Ensemble",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI20213",
    name: "Chamber Choir 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20215",
    name: "Medieval and Renaissance Ensemble 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20220",
    name: "Sound Studies 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20223",
    name: "Music Performance Science",
    offered: ["semester_1"],
  },
  {
    code: "MUSI20228",
    name: "Optimising Personal Performance",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30019",
    name: "Chamber Music 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30020",
    name: "Chamber Music 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30025",
    name: "Orchestration",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30030",
    name: "The Music Of Spain",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30031",
    name: "Electro-Acoustic Music",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30032",
    name: "Music Research",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30047",
    name: "Music Analysis",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30050",
    name: "Minor Music Performance 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30051",
    name: "Minor Music Performance 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30053",
    name: "The Ethnography of Music",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30139",
    name: "Shakuhachi Ensemble 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30159",
    name: "Acting for Singers 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30163",
    name: "Baroque Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30165",
    name: "Big Band 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30167",
    name: "Brass Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30172",
    name: "Early Voices 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30174",
    name: "Conservatorium Choir 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30181",
    name: "Guitar Ensemble 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30183",
    name: "String Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30185",
    name: "Symphonic Ensembles 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30193",
    name: "Piano Duo and Duet 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30206",
    name: "Vocal Ensemble 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30213",
    name: "Composition 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30214",
    name: "Composition 4",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30223",
    name: "Contextual Studies 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30225",
    name: "Ensemble Studies 5",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30226",
    name: "Ensemble Studies 6",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30227",
    name: "Individual Performance Studies 5",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30228",
    name: "Individual Performance Studies 6",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30229",
    name: "Interactive Composition 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30231",
    name: "Music Making Laboratory 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30236",
    name: "The Music Producer: From Brass to Beats",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30238",
    name: "Advanced Harmonic and Rhythmic Studies",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30244",
    name: "Chamber Choir 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30249",
    name: "Music History 3:Impressionism to Present",
    offered: ["summer_term", "semester_1"],
  },
  {
    code: "MUSI30250",
    name: "Practical Music 5",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30251",
    name: "Practical Music 6",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30252",
    name: "Performance 5",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30253",
    name: "Performance 6",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI30257",
    name: "Figured Bass Realisation 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30260",
    name: "Medieval and Renaissance Ensemble 5",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30265",
    name: "Italian Lyric Diction",
    offered: ["semester_1"],
  },
  {
    code: "MUSI30267",
    name: "Interpretation of German Lieder",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40012",
    name: "GradDip Composition 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40013",
    name: "GradDip Composition 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40016",
    name: "Practical Study 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40017",
    name: "Practical Study 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40036",
    name: "Conducting",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40055",
    name: "Music Analysis",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40056",
    name: "Special Study",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40060",
    name: "Concerto",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40061",
    name: "Recital",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40062",
    name: "Honours Chamber Music 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40063",
    name: "Honours Ensemble 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40064",
    name: "The Research Process for Musicians",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40067",
    name: "Honours Composition 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40068",
    name: "Honours Composition 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40070",
    name: "Professional Project (Ethnomusicology)",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40071",
    name: "Professional Project (Musicology)",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40073",
    name: "Composition Studies",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40075",
    name: "Music Psychology",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40078",
    name: "Music Research (Honours)",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40079",
    name: "The Ethnography of Music (Honours)",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40080",
    name: "Honours Ensemble 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40081",
    name: "Honours Chamber Music 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40083",
    name: "Research Methods",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40088",
    name: "Integrated Musical Practice 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40089",
    name: "Integrated Musical Practice 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40092",
    name: "Music Management and Enterprise",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40095",
    name: "The Music of Spain",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40101",
    name: "Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40102",
    name: "Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40103",
    name: "Figured Bass Realisation 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI40104",
    name: "Dissertation Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40105",
    name: "Dissertation Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40107",
    name: "Capstone Music Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40108",
    name: "Capstone Music Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40110",
    name: "Honours Music Studies 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI40111",
    name: "Honours Music Studies 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90015",
    name: "Band Direction",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90032",
    name: "Music Therapy Methods 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90036",
    name: "Music Psychology Research",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90038",
    name: "Clinical Training in Music Therapy 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90040",
    name: "Clinical Training in Music Therapy 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90041",
    name: "Applications of Music in Therapy A",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90043",
    name: "Applications of Music in Therapy C",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90044",
    name: "Objectivist Research in Music Therapy",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90093",
    name: "Ensemble A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90094",
    name: "Ensemble B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90100",
    name: "Recital 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90144",
    name: "The Teacher as Conductor",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90147",
    name: "Performing to Teach 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90148",
    name: "Ensemble",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90149",
    name: "Applied Instrumental and Vocal Teaching",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90150",
    name: "Music Learning, Teaching and Research",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90151",
    name: "Music Performance Curriculum& Assessment",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90152",
    name: "Second Instrument / Vocal Study 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90153",
    name: "Professional Practice 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90154",
    name: "Professional Practice 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90155",
    name: "Second Instrument / Vocal Study 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90156",
    name: "Performing to Teach 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90157",
    name: "Pedagogue Recital",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90191",
    name: "The Research Process For Musicians (RHD)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90192",
    name: "Studio Teaching 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90193",
    name: "Studio Teaching 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90194",
    name: "Instrumental Pedagogy",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90195",
    name: "Professional Practice 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90196",
    name: "Orchestration",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90197",
    name: "Professional Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90198",
    name: "Professional Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90199",
    name: "Suzuki Practicum Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90200",
    name: "Suzuki Practicum Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90221",
    name: "Orchestral Performance Practicum 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90224",
    name: "Orchestral Experience 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90225",
    name: "Music Outreach & Social Entrepreneurship",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90227",
    name: "Orchestral Performance Practicum 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90229",
    name: "Orchestral Performance Practicum 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "MUSI90231",
    name: "Core Skills In Opera 1",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90234",
    name: "Core Skills in Opera 3",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90237",
    name: "Major Role Preparation",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90239",
    name: "Lyric Diction for Opera",
    offered: ["semester_1"],
  },
  {
    code: "MUSI90245",
    name: "Orchestra Audition Preparation 1",
    offered: ["semester_1"],
  },
  {
    code: "MUST10013",
    name: "Music Theatre Contextual Studies 1",
    offered: ["semester_1"],
  },
  {
    code: "MUST10014",
    name: "Music Theatre Studio 1",
    offered: ["semester_1"],
  },
  {
    code: "MUST20010",
    name: "Singing and the Power of Pop Music",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NEUR30002",
    name: "Neurophysiology: Neurons and Circuits",
    offered: ["semester_1"],
  },
  {
    code: "NEUR30003",
    name: "Principles of Neuroscience",
    offered: ["semester_1"],
  },
  {
    code: "NEUR90015",
    name: "Project in Neuroscience",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NEUR90016",
    name: "Project in Neuroscience",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NEUR90017",
    name: "Project in Neuroscience",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NEUR90018",
    name: "Project in Neuroscience",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NRMT10007",
    name: "Land Resources and Management",
    offered: ["semester_1"],
  },
  {
    code: "NRMT90003",
    name: "Social Research Methods",
    offered: ["semester_1"],
  },
  {
    code: "NURS90002",
    name: "Independent Study",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NURS90026",
    name: "Independent Study Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NURS90052",
    name: "Nursing Science 3",
    offered: ["semester_1"],
  },
  {
    code: "NURS90053",
    name: "Clients with Complex Health States",
    offered: ["semester_1"],
  },
  {
    code: "NURS90059",
    name: "Nursing Research",
    offered: ["semester_1"],
  },
  {
    code: "NURS90066",
    name: "Foundations of Nursing",
    offered: ["semester_1"],
  },
  {
    code: "NURS90067",
    name: "Health Assessment for Advanced Practice1",
    offered: ["semester_1"],
  },
  {
    code: "NURS90068",
    name: "Health Assessment for Adv. Practice 2",
    offered: ["semester_1"],
  },
  {
    code: "NURS90069",
    name: "Clinical Leadership in Context",
    offered: ["semester_1"],
  },
  {
    code: "NURS90086",
    name: "Quality and Safety in Healthcare",
    offered: ["semester_1"],
  },
  {
    code: "NURS90104",
    name: "Chronic Disease Management: Foundations",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NURS90105",
    name: "Chronic Disease Management: In Practice",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NURS90106",
    name: "Advanced Nursing Practice: Primary Care",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "NURS90129",
    name: "Nursing Science 1",
    offered: ["semester_1"],
  },
  {
    code: "NURS90130",
    name: "Nursing Assessment & Care",
    offered: ["semester_1"],
  },
  {
    code: "NUTR30002",
    name: "Monitoring Food and Nutrition Intake",
    offered: ["semester_1"],
  },
  {
    code: "NUTR30005",
    name: "Molecular Nutrition and Genomics",
    offered: ["semester_1"],
  },
  {
    code: "NUTR40001",
    name: "Human Nutrition Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "OPTO20004",
    name: "Perception, Illusions and Art",
    offered: ["semester_1"],
  },
  {
    code: "OPTO40012",
    name: "Vision Science Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "OPTO90016",
    name: "Glaucoma and Retinal Disease",
    offered: ["semester_1"],
  },
  {
    code: "OPTO90018",
    name: "The Eye and Vision: A Window to Disease",
    offered: ["semester_1"],
  },
  {
    code: "OPTO90019",
    name: "Project in Vision Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "OPTO90020",
    name: "Project in Vision Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "OPTO90021",
    name: "Project in Vision Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "OPTO90022",
    name: "Project in Vision Science",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "OPTO90031",
    name: "Research Studies in Optometry",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ORAL10001",
    name: "Society and Health 1A",
    offered: ["semester_1"],
  },
  {
    code: "ORAL20001",
    name: "Health Promotion 2A",
    offered: ["semester_1"],
  },
  {
    code: "ORAL40001",
    name: "Oral Health Research Project 4A",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "ORAL40002",
    name: "Oral Health Research Project 4B",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "OTOL40001",
    name: "Otolaryngology Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "OTOL40002",
    name: "Otolaryngology Advanced Coursework",
    offered: ["semester_1"],
  },
  {
    code: "PADM20001",
    name: "Foundations of Digital Government",
    offered: ["semester_1"],
  },
  {
    code: "PADM90004",
    name: "Public Administration Thesis",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PAED40001",
    name: "Paediatrics Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "PAED90007",
    name: "Professional Practice in Context",
    offered: ["semester_1"],
  },
  {
    code: "PATH20001",
    name: "Exploring Human Disease",
    offered: ["semester_1"],
  },
  {
    code: "PATH30001",
    name: "Mechanisms of Human Disease",
    offered: ["semester_1"],
  },
  {
    code: "PATH30002",
    name: "Techniques for Investigation of Disease",
    offered: ["semester_1"],
  },
  {
    code: "PATH40001",
    name: "Pathology Research Project Part 1",
    offered: ["semester_1", "june", "semester_2"],
  },
  {
    code: "PATH40002",
    name: "Critical Analysis of Pathology Research",
    offered: ["semester_1"],
  },
  {
    code: "PATH40005",
    name: "Pathology Research Project Part 2",
    offered: ["semester_1"],
  },
  {
    code: "PATH40006",
    name: "Clinical Path Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PATH40007",
    name: "Clinical Path Research Project Part 2",
    offered: ["semester_1"],
  },
  {
    code: "PHIL10002",
    name: "Philosophy: The Big Questions",
    offered: ["semester_1"],
  },
  {
    code: "PHIL20001",
    name: "Science, Reason and Reality",
    offered: ["semester_1"],
  },
  {
    code: "PHIL20033",
    name: "The Philosophy of Mind",
    offered: ["semester_1"],
  },
  {
    code: "PHIL20038",
    name: "Nietzsche and Critics",
    offered: ["semester_1"],
  },
  {
    code: "PHIL20039",
    name: "The Nature of Reality",
    offered: ["semester_1"],
  },
  {
    code: "PHIL20043",
    name: "History of Early Modern Philosophy",
    offered: ["semester_1"],
  },
  {
    code: "PHIL30024",
    name: "The Foundations of Interpretation",
    offered: ["semester_1"],
  },
  {
    code: "PHIL30043",
    name: "The Power and Limits of Logic",
    offered: ["semester_1"],
  },
  {
    code: "PHIL30053",
    name: "Philosophy of Language",
    offered: ["semester_1"],
  },
  {
    code: "PHIL40002",
    name: "Recent European Philosophy",
    offered: ["semester_1"],
  },
  {
    code: "PHIL40004",
    name: "Value Theory",
    offered: ["semester_1"],
  },
  {
    code: "PHIL40020",
    name: "Reading and Writing Philosophy",
    offered: ["semester_1"],
  },
  {
    code: "PHIL40021",
    name: "Philosophy Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHIL40022",
    name: "Philosophy Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHIL90007",
    name: "Literature Review",
    offered: ["semester_1"],
  },
  {
    code: "PHIL90021",
    name: "Critical and Creative Thinking",
    offered: ["semester_1"],
  },
  {
    code: "PHIL90034",
    name: "Philosophical Methodology",
    offered: ["semester_1"],
  },
  {
    code: "PHIL90039",
    name: "Applied Ethics Thesis Part 2",
    offered: ["semester_1"],
  },
  {
    code: "PHRM30003",
    name: "Drug Treatment of Disease",
    offered: ["semester_1"],
  },
  {
    code: "PHRM30009",
    name: "Drugs in Biomedical Experiments",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHRM90002",
    name: "Pharmacology for Health Professionals",
    offered: ["semester_1"],
  },
  {
    code: "PHTY90040",
    name: "Physiotherapy Professional Portfolio",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC10001",
    name: "Physics 1: Advanced",
    offered: ["semester_1"],
  },
  {
    code: "PHYC10003",
    name: "Physics 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC10007",
    name: "Physics for Biomedicine",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC10009",
    name: "Foundations of Physics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC10010",
    name: "Indigenous Astronomy",
    offered: ["semester_1"],
  },
  {
    code: "PHYC20012",
    name: "Quantum and Thermal Physics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC20013",
    name: "Laboratory and Computational Physics 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC30016",
    name: "Electrodynamics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC30018",
    name: "Quantum Physics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC30019",
    name: "Astrophysics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC30021",
    name: "Laboratory and Computational Physics 3",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC30023",
    name: "Light, Lasers, Optics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC90007",
    name: "Quantum Mechanics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC90008",
    name: "Quantum Field Theory",
    offered: ["semester_1"],
  },
  {
    code: "PHYC90009",
    name: "Physical Cosmology",
    offered: ["semester_1"],
  },
  {
    code: "PHYC90010",
    name: "Statistical Mechanics",
    offered: ["semester_1"],
  },
  {
    code: "PHYC90021",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC90022",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC90023",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYC90024",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYS20008",
    name: "Human Physiology",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYS20009",
    name: "Research-Based Physiology",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PHYS30009",
    name: "Experimental Physiology",
    offered: ["semester_1"],
  },
  {
    code: "PHYS30010",
    name: "Advanced Human Physiology",
    offered: ["semester_1"],
  },
  {
    code: "PHYS40005",
    name: "Physiology Research Project Part 1",
    offered: ["semester_1", "june"],
  },
  {
    code: "PHYS90008",
    name: "Advanced Seminars in Physiology",
    offered: ["semester_1"],
  },
  {
    code: "PLAN10001",
    name: "Cities Past and Future",
    offered: ["semester_1"],
  },
  {
    code: "PLAN30001",
    name: "Planning Scenario and Policy Workshop",
    offered: ["semester_1"],
  },
  {
    code: "PLAN30003",
    name: "Research Methods for Planners",
    offered: ["semester_1"],
  },
  {
    code: "PLAN30004",
    name: "Transit Oriented Development",
    offered: ["semester_1"],
  },
  {
    code: "POLS10001",
    name: "Australian Politics",
    offered: ["semester_1"],
  },
  {
    code: "POLS20011",
    name: "The Politics of Sex",
    offered: ["semester_1"],
  },
  {
    code: "POLS20023",
    name: "Comparative Politics",
    offered: ["semester_1"],
  },
  {
    code: "POLS20031",
    name: "Political Economy",
    offered: ["semester_1"],
  },
  {
    code: "POLS30001",
    name: "Parliamentary Internship",
    offered: ["semester_1"],
  },
  {
    code: "POLS30003",
    name: "Public Affairs Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POLS30011",
    name: "Chinese Politics and Society",
    offered: ["semester_1"],
  },
  {
    code: "POLS30015",
    name: "International Gender Politics",
    offered: ["semester_1"],
  },
  {
    code: "POLS30032",
    name: "Campaigns and Elections",
    offered: ["semester_1"],
  },
  {
    code: "POLS30033",
    name: "Democracy and its Dilemmas",
    offered: ["semester_1"],
  },
  {
    code: "POLS40021",
    name: "Politics & International Thesis Part 1",
    offered: ["semester_1"],
  },
  {
    code: "POLS40024",
    name: "Key Debates in Political Science 1",
    offered: ["semester_1"],
  },
  {
    code: "POLS90009",
    name: "International Relations Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POLS90023",
    name: "International Governance and Law",
    offered: ["semester_1"],
  },
  {
    code: "POLS90026",
    name: "International Political Economy",
    offered: ["semester_1"],
  },
  {
    code: "POLS90030",
    name: "Nuclear Weapons and Disarmament",
    offered: ["semester_1"],
  },
  {
    code: "POLS90038",
    name: "Human Rights",
    offered: ["semester_1"],
  },
  {
    code: "POLS90042",
    name: "Latin America in the World",
    offered: ["semester_1"],
  },
  {
    code: "POLS90050",
    name: "Terrorism and Insurgency",
    offered: ["semester_1"],
  },
  {
    code: "POLS90054",
    name: "International Relations Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POLS90055",
    name: "International Relations Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POLS90058",
    name: "Asia-Pacific: Zone of Conflict or Peace?",
    offered: ["semester_1"],
  },
  {
    code: "POPH20001",
    name: "Genetics, Health, and Society",
    offered: ["semester_1"],
  },
  {
    code: "POPH40005",
    name: "Population Health Research Project 1",
    offered: ["semester_1"],
  },
  {
    code: "POPH90013",
    name: "Biostatistics",
    offered: ["semester_1"],
  },
  {
    code: "POPH90014",
    name: "Epidemiology 1",
    offered: ["semester_1"],
  },
  {
    code: "POPH90058",
    name: "Health Program Evaluation 1",
    offered: ["semester_1"],
  },
  {
    code: "POPH90070",
    name: "Clinical Sexual & Reproductive Health",
    offered: ["semester_1"],
  },
  {
    code: "POPH90094",
    name: "Health Economics 1",
    offered: ["semester_1"],
  },
  {
    code: "POPH90117",
    name: "Health Indicators and Health Surveys",
    offered: ["semester_1"],
  },
  {
    code: "POPH90118",
    name: "Clinical Biostatistics",
    offered: ["semester_1"],
  },
  {
    code: "POPH90122",
    name: "Survival Analysis",
    offered: ["semester_1"],
  },
  {
    code: "POPH90123",
    name: "Longitudinal and Correlated Data",
    offered: ["semester_1"],
  },
  {
    code: "POPH90148",
    name: "Probability and Distribution Theory",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90149",
    name: "Biostatistics Research Project - S",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90151",
    name: "Biostatistics Research Project - D",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90167",
    name: "Young People in Context",
    offered: ["semester_1"],
  },
  {
    code: "POPH90168",
    name: "Vulnerable Young People",
    offered: ["semester_1"],
  },
  {
    code: "POPH90169",
    name: "Adolescent Sexuality and Sexual Health",
    offered: ["semester_1"],
  },
  {
    code: "POPH90170",
    name: "Adolescent Health Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90201",
    name: "Community-Based Participatory Research",
    offered: ["semester_1"],
  },
  {
    code: "POPH90226",
    name: "Societal Implications of Genomics",
    offered: ["semester_1"],
  },
  {
    code: "POPH90227",
    name: "Public Health in Practice",
    offered: ["semester_1"],
  },
  {
    code: "POPH90239",
    name: "Professional Practice - S",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90255",
    name: "Research Project in Public Health - S",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90270",
    name: "Bioethics and Public Health",
    offered: ["semester_1"],
  },
  {
    code: "POPH90276",
    name: "M.Epidemiology Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90277",
    name: "M.Epidemiology Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90284",
    name: "Research Project in Public Health Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90285",
    name: "Research Project in Public Health Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90286",
    name: "Professional Practice - Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90287",
    name: "Professional Practice - Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90288",
    name: "Biostatistics Research Project Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90289",
    name: "Biostatistics Research Project Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "POPH90292",
    name: "M.Epidemiology Research Project - S",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PPMN10001",
    name: "Tackling Wicked Policy Problems",
    offered: ["semester_1"],
  },
  {
    code: "PPMN40006",
    name: "Public Policy & Management Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PPMN90035",
    name: "Public Consultation & Policy Negotiation",
    offered: ["semester_1"],
  },
  {
    code: "PPMN90039",
    name: "Executive Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PPMN90049",
    name: "Public /Social Policy Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PPMN90050",
    name: "Public /Social Policy Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PPMN90056",
    name: "Business and Government",
    offered: ["semester_1"],
  },
  {
    code: "PROP20001",
    name: "Finance for Built Environment",
    offered: ["semester_1"],
  },
  {
    code: "PROP20002",
    name: "Design and Property Principles",
    offered: ["semester_1"],
  },
  {
    code: "PROP30001",
    name: "Valuation of Land and Buildings",
    offered: ["semester_1"],
  },
  {
    code: "PSYC10003",
    name: "Mind, Brain & Behaviour 1",
    offered: ["semester_1"],
  },
  {
    code: "PSYC20006",
    name: "Biological Psychology",
    offered: ["semester_1"],
  },
  {
    code: "PSYC20008",
    name: "Developmental Psychology",
    offered: ["semester_1"],
  },
  {
    code: "PSYC30012",
    name: "The Unconscious Mind",
    offered: ["semester_1"],
  },
  {
    code: "PSYC30013",
    name: "Research Methods for Human Inquiry",
    offered: ["semester_1"],
  },
  {
    code: "PSYC30014",
    name: "The Psychopathology of Everyday Life",
    offered: ["semester_1"],
  },
  {
    code: "PSYC30017",
    name: "Perception, Memory and Cognition",
    offered: ["semester_1"],
  },
  {
    code: "PSYC30018",
    name: "Neuroscience and the Mind",
    offered: ["semester_1"],
  },
  {
    code: "PSYC40006",
    name: "Ethics and Evidence-Based Practice",
    offered: ["semester_1"],
  },
  {
    code: "PSYC40014",
    name: "Advanced Research Methods In Psychology",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90005",
    name: "Thesis (Masters/coursework)",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PSYC90006",
    name: "Basic Interventions",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90007",
    name: "Cognitive-Behaviour Therapy",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90010",
    name: "Mental Health Issues Across the Lifespan",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90023",
    name: "Child Psychopathology",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90027",
    name: "Clinical Psychology in Medical Settings",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90030",
    name: "Principles of Psychological Assessment",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90084",
    name: "Neuroanatomy for Neuropsychologists",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90095",
    name: "Thesis (Masters/coursework) Part 1",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90101",
    name: "Advanced Social Psychology",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90104",
    name: "Thinking, Judgement and Decision Making",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90105",
    name: "Influence and Persuasion",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90106",
    name: "Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PSYC90107",
    name: "Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PSYC90110",
    name: "Ethics & Psychological Practice",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90111",
    name: "Well-being in Practice",
    offered: ["semester_1"],
  },
  {
    code: "PSYC90115",
    name: "Professional Psychology Placement 1",
    offered: ["semester_1"],
  },
  {
    code: "PSYT90028",
    name: "Infant Observation 1",
    offered: ["semester_1"],
  },
  {
    code: "PSYT90032",
    name: "Foundations of Working with Adolescents",
    offered: ["semester_1"],
  },
  {
    code: "PSYT90038",
    name: "Foundations of Working with Families",
    offered: ["semester_1"],
  },
  {
    code: "PSYT90040",
    name: "Clinical Practicum: Families",
    offered: ["semester_1"],
  },
  {
    code: "PSYT90082",
    name: "Mental Health Disorders in Infancy",
    offered: ["semester_1"],
  },
  {
    code: "PSYT90086",
    name: "Mental Health Science Research Project 1",
    offered: ["semester_1"],
  },
  {
    code: "PUBL90001",
    name: "Structural Editing",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PUBL90002",
    name: "Editorial English",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PUBL90003",
    name: "The Contemporary Publishing Industry",
    offered: ["semester_1"],
  },
  {
    code: "PUBL90004",
    name: "Business and Professional Communications",
    offered: ["semester_1", "june"],
  },
  {
    code: "PUBL90006",
    name: "Writing and Editing for Digital Media",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PUBL90009",
    name: "Advanced Editing for Digital Media",
    offered: ["semester_1"],
  },
  {
    code: "PUBL90010",
    name: "Print Production and Design",
    offered: ["semester_1", "june"],
  },
  {
    code: "PUBL90013",
    name: "Writing and Editing for Magazines",
    offered: ["semester_1"],
  },
  {
    code: "PUBL90014",
    name: "Legal Issues in Arts and Media",
    offered: ["semester_1"],
  },
  {
    code: "PUBL90022",
    name: "Publishing and Communications Thesis Pt1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PUBL90023",
    name: "Publishing and Communications Thesis Pt2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "PUBL90025",
    name: "Grattan Street Press (Extended)",
    offered: ["semester_1"],
  },
  {
    code: "RADI90017",
    name: "Diagnostic Radiology 1",
    offered: ["semester_1"],
  },
  {
    code: "RADI90019",
    name: "Diagnostic Radiology 3",
    offered: ["semester_1"],
  },
  {
    code: "RADI90021",
    name: "Diagnostic Radiology 5",
    offered: ["semester_1"],
  },
  {
    code: "RADI90022",
    name: "Diagnostic Radiology Minor Thesis 1",
    offered: ["semester_1"],
  },
  {
    code: "RURA90008",
    name: "Utilising Knowledge in Aboriginal Health",
    offered: ["semester_1"],
  },
  {
    code: "RUSS10001",
    name: "Russian 1",
    offered: ["semester_1"],
  },
  {
    code: "RUSS20004",
    name: "Russian 3",
    offered: ["semester_1"],
  },
  {
    code: "RUSS20006",
    name: "Russian 5",
    offered: ["semester_1"],
  },
  {
    code: "RUSS30001",
    name: "Russian 5",
    offered: ["semester_1"],
  },
  {
    code: "RUSS40006",
    name: "Russian Language & Culture 4A",
    offered: ["semester_1"],
  },
  {
    code: "RUSS40009",
    name: "Russian Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "RUSS40010",
    name: "Russian Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SCIE10001",
    name: "Science: A Study of Life and Environment",
    offered: ["semester_1"],
  },
  {
    code: "SCIE10003",
    name: "Science: Supporting Health and Wellbeing",
    offered: ["semester_1"],
  },
  {
    code: "SCIE30001",
    name: "Science Research Project",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "SCIE30002",
    name: "Science and Technology Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "SCIE30003",
    name: "Science Research Project Abroad",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "SCIE40001",
    name: "Critical Thinking in Research",
    offered: ["semester_1"],
  },
  {
    code: "SCIE90005",
    name: "Ethics and Responsibility in Science",
    offered: ["semester_1"],
  },
  {
    code: "SCIE90011",
    name: "From Lab to Life",
    offered: ["semester_1"],
  },
  {
    code: "SCIE90013",
    name: "Communication for Research Scientists",
    offered: ["semester_1", "winter_term", "semester_2"],
  },
  {
    code: "SCIE90017",
    name: "Science and Technology Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "SCIE90018",
    name: "Science Research Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "SCIE90027",
    name: "Ecosystem Internship",
    offered: ["summer_term", "semester_1", "semester_2"],
  },
  {
    code: "SCIE90034",
    name: "Communicating Science at Work",
    offered: ["semester_1"],
  },
  {
    code: "SCRN10001",
    name: "Introduction to Screen Studies",
    offered: ["semester_1"],
  },
  {
    code: "SCRN20011",
    name: "Hollywood and Entertainment",
    offered: ["semester_1"],
  },
  {
    code: "SCRN30005",
    name: "The Digital Screenscape",
    offered: ["semester_1"],
  },
  {
    code: "SCRN40002",
    name: "Contemporary Film Theory",
    offered: ["semester_1"],
  },
  {
    code: "SCRN40010",
    name: "Dream Screen: Film and Psychoanalysis",
    offered: ["semester_1"],
  },
  {
    code: "SCRN40017",
    name: "Screen & Cultural Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SCRN40018",
    name: "Screen & Cultural Studies Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SKIL90004",
    name: "Project Management in Science",
    offered: ["semester_1"],
  },
  {
    code: "SOCI10001",
    name: "Understanding Society",
    offered: ["semester_1"],
  },
  {
    code: "SOCI20017",
    name: "Sexualising Society: Sociology of Sex",
    offered: ["semester_1"],
  },
  {
    code: "SOCI30001",
    name: "Contemporary Sociological Theory",
    offered: ["semester_1"],
  },
  {
    code: "SOCI30005",
    name: "Sociology Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SOCI30009",
    name: "Living in a Risk Society",
    offered: ["semester_1"],
  },
  {
    code: "SOCI30012",
    name: "Digital Technology and Social Change",
    offered: ["semester_1"],
  },
  {
    code: "SOCI30013",
    name: "Survey Design and Analysis",
    offered: ["semester_1"],
  },
  {
    code: "SOCI30015",
    name: "Sociology of Work: The Future of Work",
    offered: ["semester_1"],
  },
  {
    code: "SOCI40006",
    name: "Sociology Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SOCI40007",
    name: "Sociology Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SOCI40008",
    name: "Reading Sociology",
    offered: ["semester_1"],
  },
  {
    code: "SOCI90010",
    name: "International Migration",
    offered: ["semester_1"],
  },
  {
    code: "SOCI90013",
    name: "Social Policy Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SOCI90021",
    name: "Social Policy Special Topics B",
    offered: ["semester_1"],
  },
  {
    code: "SOLS40002",
    name: "Socio-Legal Studies Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SOTH20002",
    name: "Classical Sociological Theory",
    offered: ["semester_1"],
  },
  {
    code: "SOTH40001",
    name: "Relationships in Modernity",
    offered: ["semester_1"],
  },
  {
    code: "SPAN10001",
    name: "Spanish 1",
    offered: ["semester_1", "winter_term"],
  },
  {
    code: "SPAN10003",
    name: "Spanish 3",
    offered: ["semester_1"],
  },
  {
    code: "SPAN10007",
    name: "Spanish 5",
    offered: ["semester_1"],
  },
  {
    code: "SPAN20002",
    name: "Spanish 3",
    offered: ["semester_1"],
  },
  {
    code: "SPAN20018",
    name: "Spanish 5",
    offered: ["semester_1"],
  },
  {
    code: "SPAN20022",
    name: "Spanish 7",
    offered: ["semester_1"],
  },
  {
    code: "SPAN30014",
    name: "Spanish 5",
    offered: ["semester_1"],
  },
  {
    code: "SPAN30016",
    name: "Spanish 7",
    offered: ["semester_1"],
  },
  {
    code: "SPAN30021",
    name: "Exploring Latin America",
    offered: ["semester_1"],
  },
  {
    code: "SPAN40007",
    name: "Spanish & Latin American Thesis Part 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SPAN40008",
    name: "Spanish & Latin American Thesis Part 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SPAN90003",
    name: "Graduate Spanish A",
    offered: ["semester_1"],
  },
  {
    code: "SURG40002",
    name: "Advanced Studies in Biomedicine: Surgery",
    offered: ["semester_1"],
  },
  {
    code: "SURG40005",
    name: "Surgery Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "SURG90021",
    name: "Contemporary Surgical Practice",
    offered: ["semester_1"],
  },
  {
    code: "SURG90022",
    name: "Fundamentals of Peri-Operative Care",
    offered: ["semester_1"],
  },
  {
    code: "SURG90023",
    name: "Fundamentals of Surgery I",
    offered: ["semester_1"],
  },
  {
    code: "SURG90025",
    name: "Fundamentals of Surgery III",
    offered: ["semester_1"],
  },
  {
    code: "SURG90026",
    name: "Surgical Research I",
    offered: ["semester_1"],
  },
  {
    code: "SWEN20003",
    name: "Object Oriented Software Development",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SWEN30006",
    name: "Software Modelling and Design",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "SWEN90004",
    name: "Modelling Complex Software Systems",
    offered: ["semester_1"],
  },
  {
    code: "SWEN90009",
    name: "Software Requirements Analysis",
    offered: ["semester_1"],
  },
  {
    code: "SWEN90010",
    name: "High Integrity Systems Engineering",
    offered: ["semester_1"],
  },
  {
    code: "SWEN90016",
    name: "Software Processes and Management",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "THTR10019",
    name: "Clear Speech and Communication",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "THTR40006",
    name: "Research Methods (Music Theatre)",
    offered: ["semester_1"],
  },
  {
    code: "THTR40009",
    name: "Research Methods (Production)",
    offered: ["semester_1"],
  },
  {
    code: "THTR70006",
    name: "Research and New Performance Writing",
    offered: ["semester_1"],
  },
  {
    code: "THTR70008",
    name: "Writing for Performance 1 (Solo)",
    offered: ["semester_1"],
  },
  {
    code: "THTR70009",
    name: "Writing for Performance 2 (Collab)",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90001",
    name: "Translation and Interpreting as Product",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90006",
    name: "Translating in an Australian Context",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90008",
    name: "Translating in a Chinese Context",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90010",
    name: "Translation Internship",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "TRAN90012",
    name: "Translation and Interpreting Thesis 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "TRAN90013",
    name: "Translation and Interpreting Thesis 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "TRAN90020",
    name: "Business and Legal Translation",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90021",
    name: "Translation, Interpreting, Communication",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "TRAN90022",
    name: "Translation Industry Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "TRAN90023",
    name: "Translation Technologies",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90024",
    name: "Teaching Translation and Interpreting",
    offered: ["semester_1"],
  },
  {
    code: "TRAN90025",
    name: "Consecutive Interpreting",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10002",
    name: "Logic: Language and Information",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10003",
    name: "An Ecological History of Humanity",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10006",
    name: "Critical Thinking With Data",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10009",
    name: "Food for a Healthy Planet",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10011",
    name: "The Secret Life of the Body 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "UNIB10022",
    name: "Entrepreneurship Principles and Tools",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "UNIB10023",
    name: "The Making of Melbourne",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "UNIB10024",
    name: "Sustainability: hope for the Earth?",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10025",
    name: "Sustainable and Equitable Energy Futures",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10026",
    name: "Disability, Diversity and Inclusion",
    offered: ["semester_1"],
  },
  {
    code: "UNIB10027",
    name: "Everyday Morality",
    offered: ["semester_1"],
  },
  {
    code: "UNIB20001",
    name: "Climate Change ll",
    offered: ["semester_1"],
  },
  {
    code: "UNIB20012",
    name: "Water for Sustainable Futures",
    offered: ["semester_1"],
  },
  {
    code: "UNIB20018",
    name: "Going Places - Travelling Smarter",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "UNIB20024",
    name: "Designer Humans - Prospects & Perils",
    offered: ["semester_1"],
  },
  {
    code: "UNIB30002",
    name: "Global Health, Security & Sustainability",
    offered: ["semester_1"],
  },
  {
    code: "UNIB30010",
    name: "Food for a Healthy Planet III",
    offered: ["semester_1"],
  },
  {
    code: "VETS20019",
    name: "Frontiers in Veterinary Science",
    offered: ["semester_1"],
  },
  {
    code: "VETS30016",
    name: "Veterinary Bioscience: Digestive System",
    offered: ["semester_1"],
  },
  {
    code: "VETS30029",
    name: "Veterinary Bioscience: Cells to Systems",
    offered: ["semester_1"],
  },
  {
    code: "VETS30030",
    name: "Introduction to Professional Practice",
    offered: ["semester_1"],
  },
  {
    code: "VETS30031",
    name: "Animal Production Systems 1",
    offered: ["semester_1"],
  },
  {
    code: "VETS40020",
    name: "Vet Bioscience Research Project Part 1",
    offered: ["semester_1"],
  },
  {
    code: "VETS70001",
    name: "MVSc (Clinical) Practicum # FT",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS70002",
    name: "MVSc (Clinical) Practicum # PT",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90029",
    name: "Vet Public Health Research Project",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90036",
    name: "Cardiovascular & Respiratory Emergencies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90037",
    name: "Abdominal & Urogenital Emergencies",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90038",
    name: "Haemato, Neurologic & Global Conditions",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90039",
    name: "CPR, Eye Emergencies & Practical ECC",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90040",
    name: "General Principles and FAST Techniques",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90041",
    name: "Urinary Reproductive Tracts Lymph Nodes",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90042",
    name: "Liver, Spleen and Sampling",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90043",
    name: "Gastrointestinal Tract Pancreas Adrenals",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90044",
    name: "Vet Public Health Research Project Pt 1",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90045",
    name: "Vet Public Health Research Project Pt 2",
    offered: ["semester_1", "semester_2"],
  },
  {
    code: "VETS90058",
    name: "Veterinary Bioscience 1A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90060",
    name: "Applications in Animal Health A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90062",
    name: "Principles of Veterinary Bioscience",
    offered: ["semester_1"],
  },
  {
    code: "VETS90064",
    name: "Veterinary Bioscience 2A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90066",
    name: "Infections Population & Pub. Health PtA",
    offered: ["semester_1"],
  },
  {
    code: "VETS90068",
    name: "Applications in Animal Health 2 Part A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90082",
    name: "Animal Management and Veterinary Health",
    offered: ["semester_1"],
  },
  {
    code: "VETS90097",
    name: "Production, Herd and Public Health A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90099",
    name: "Infections and Immunity A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90115",
    name: "Veterinary Bioscience 1A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90117",
    name: "Applications in Animal Health A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90119",
    name: "Veterinary Principles: Digestive System",
    offered: ["semester_1"],
  },
  {
    code: "VETS90120",
    name: "Vet Bioscience: Digestive System",
    offered: ["semester_1"],
  },
  {
    code: "VETS90121",
    name: "Vet Bioscience: Cells to Systems",
    offered: ["semester_1"],
  },
  {
    code: "VETS90122",
    name: "Intro to the Veterinary Profession",
    offered: ["semester_1"],
  },
  {
    code: "VETS90123",
    name: "Animal Production Systems: Extensive",
    offered: ["semester_1"],
  },
  {
    code: "VETS90128",
    name: "Vet Bioscience: Integument and Immunity",
    offered: ["semester_1"],
  },
  {
    code: "VETS90129",
    name: "Vet Bioscience: Locomotion",
    offered: ["semester_1"],
  },
  {
    code: "VETS90130",
    name: "Veterinary Virology",
    offered: ["semester_1"],
  },
  {
    code: "VETS90131",
    name: "Veterinary Parasitology A",
    offered: ["semester_1"],
  },
  {
    code: "VETS90132",
    name: "Veterinary Professional Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "VETS90133",
    name: "Animal Production Systems: Epidemiology",
    offered: ["semester_1"],
  },
  {
    code: "WELF90004",
    name: "Principles of Counselling 1",
    offered: ["semester_1"],
  },
  {
    code: "WELF90006",
    name: "Fitness to Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "WELF90009",
    name: "Genetic Counselling Practice 1",
    offered: ["semester_1"],
  },
  {
    code: "ZOOL20004",
    name: "Australian Wildlife Biology",
    offered: ["semester_1"],
  },
  {
    code: "ZOOL20005",
    name: "Animal Structure and Function",
    offered: ["semester_1"],
  },
  {
    code: "ZOOL30004",
    name: "Evolution and the Human Condition",
    offered: ["semester_1"],
  },
  {
    code: "ZOOL30006",
    name: "Animal Behaviour",
    offered: ["semester_1"],
  },
  {
    code: "ZOOL30007",
    name: "Experimental Animal Behaviour",
    offered: ["semester_1"],
  },
  {
    code: "ZOOL90007",
    name: "Graduate Seminar in Ecology & Evolution",
    offered: ["semester_1"],
  },
];
