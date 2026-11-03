export type Domain = {
  id: string;
  number: string;
  name: string;
  short: string;
  description: string;
  stack: string[];
  color: string;
  symbol: string;
};

export type Project = {
  id: number;
  title: string;
  domain: string;
  description: string;
  stack: string[];
  status: "Existing project" | "Showcase concept" | "Research direction";
  featured?: boolean;
};

export const domains: Domain[] = [
  { id: "frontend", number: "01", name: "Frontend Engineering", short: "Interfaces & experiences", description: "Immersive interfaces, data-rich dashboards and responsive digital products.", stack: ["React", "TypeScript", "Tailwind CSS", "Three.js"], color: "#7896ff", symbol: "◈" },
  { id: "backend", number: "02", name: "Java Backend", short: "Distributed systems", description: "Secure APIs, enterprise services, event-driven systems and scalable backends.", stack: ["Java 17/21", "Spring Boot", "Hibernate", "Kafka"], color: "#f59e0b", symbol: "⌘" },
  { id: "salesforce", number: "03", name: "Salesforce", short: "CRM engineering", description: "Business automation, Apex services, Lightning Web Components and integrations.", stack: ["Apex", "SOQL", "LWC", "REST APIs"], color: "#38bdf8", symbol: "◇" },
  { id: "sap", number: "04", name: "SAP Enterprise", short: "Enterprise platforms", description: "Enterprise application development and integration across business processes.", stack: ["SAP BTP", "CAP Java", "S/4HANA", "REST"], color: "#a78bfa", symbol: "▦" },
  { id: "embedded", number: "05", name: "Embedded & IoT", short: "Connected devices", description: "Microcontroller systems, sensor networks, edge devices and telemetry pipelines.", stack: ["C/C++", "ESP32", "Arduino", "MQTT"], color: "#57e6e0", symbol: "⌁" },
  { id: "vlsi", number: "06", name: "VLSI & Semiconductor", short: "Digital hardware", description: "RTL design, digital systems, FPGA exploration and ASIC implementation flows.", stack: ["Verilog", "RTL", "Yosys", "OpenROAD"], color: "#fb7185", symbol: "▧" },
  { id: "automation", number: "07", name: "Industrial Automation", short: "Control & operations", description: "Industrial control concepts, PLC logic, SCADA and connected factory systems.", stack: ["PLC", "OpenPLC", "Ladder Logic", "SCADA"], color: "#f97316", symbol: "⚙" },
  { id: "ai-data", number: "08", name: "AI & Data Engineering", short: "Intelligence systems", description: "Streaming data, intelligent applications, analytics and observability.", stack: ["Spring AI", "Kafka", "Redis", "SQL"], color: "#c084fc", symbol: "✳" },
  { id: "devops", number: "09", name: "Cloud & DevOps", short: "Delivery infrastructure", description: "Containerization, automated delivery, infrastructure and system monitoring.", stack: ["Docker", "GitHub Actions", "Jenkins", "Grafana"], color: "#60a5fa", symbol: "☁" },
  { id: "electronics", number: "10", name: "Electronics & Energy", short: "Power & electronics", description: "Energy systems, PCB concepts, power monitoring and renewable integration.", stack: ["KiCad", "PCB", "BMS", "MPPT"], color: "#facc15", symbol: "ϟ" },
];

const entries: Array<[string, string, string, string[], Project["status"]]> = [
  ["3D Engineering Portfolio", "frontend", "Interactive portfolio experience with spatial navigation and responsive UI.", ["React", "Three.js", "Tailwind"], "Showcase concept"],
  ["Enterprise Resource Platform", "frontend", "A modular workspace for people, projects and operational resources.", ["React", "TypeScript", "REST"], "Showcase concept"],
  ["Industrial Command Center", "frontend", "A telemetry-rich command interface for connected industrial assets.", ["React", "Charts", "WebSocket"], "Showcase concept"],
  ["AI SaaS Workspace", "frontend", "A polished workspace for AI-assisted workflows and knowledge exploration.", ["React", "Spring AI"], "Showcase concept"],
  ["Financial Intelligence Dashboard", "frontend", "An analytical interface for financial activity and performance.", ["React", "Charts", "REST"], "Showcase concept"],
  ["Smart Hospital Platform", "frontend", "A responsive interface for hospital operations and patient workflows.", ["React", "Tailwind"], "Showcase concept"],
  ["Global Logistics Tracker", "frontend", "A shipment visibility interface with live status and route context.", ["React", "Maps", "REST"], "Showcase concept"],
  ["Cloud Infrastructure UI", "frontend", "A control surface for environments, services and deployments.", ["React", "TypeScript"], "Showcase concept"],
  ["Examination Management Portal", "frontend", "Admin and student examination workflows with a responsive interface.", ["React", "Tailwind", "Java"], "Existing project"],
  ["Digital Twin Visualization", "frontend", "A 3D interface for visualizing connected assets and telemetry.", ["Three.js", "React"], "Showcase concept"],

  ["Enterprise ERP Backend", "backend", "A modular backend for enterprise workflows and resource management.", ["Java", "Spring Boot", "MySQL"], "Showcase concept"],
  ["Digital Wallet Platform", "backend", "A secure wallet backend with transaction-oriented APIs.", ["Java", "Spring Boot", "JWT"], "Existing project"],
  ["Hospital Management APIs", "backend", "Backend services for appointments, patient records and administration.", ["Spring Boot", "JPA", "SQL"], "Showcase concept"],
  ["Distributed Commerce Platform", "backend", "Order, inventory and payment workflows designed around service boundaries.", ["Spring Boot", "Kafka"], "Showcase concept"],
  ["Real-Time Chat Service", "backend", "A messaging backend using persistent connections and authenticated users.", ["Spring Boot", "WebSocket"], "Existing project"],
  ["Industrial Asset Service", "backend", "Asset lifecycle, work orders and maintenance records.", ["Java", "PostgreSQL"], "Showcase concept"],
  ["Microservices Reference Platform", "backend", "A reference architecture for service communication and resilience.", ["Spring Boot", "Docker"], "Showcase concept"],
  ["Enterprise Knowledge API", "backend", "An API layer for document ingestion and AI-assisted retrieval.", ["Spring AI", "Java"], "Showcase concept"],
  ["Recruitment Workflow Backend", "backend", "Candidate, interview and hiring workflow services.", ["Spring Boot", "MySQL"], "Showcase concept"],
  ["Multi-Tenant SaaS Core", "backend", "Tenant-aware authentication, authorization and data boundaries.", ["Spring Security", "PostgreSQL"], "Showcase concept"],

  ["Smart Lead Management", "salesforce", "Lead scoring, assignment and automation using Salesforce platform capabilities.", ["Apex", "LWC", "SOQL"], "Showcase concept"],
  ["SLA Case Management", "salesforce", "Case lifecycle management with escalation and service-level tracking.", ["Apex", "Batch Apex"], "Showcase concept"],
  ["Recruitment CRM", "salesforce", "Applicant records, pipeline visibility and recruitment workflows.", ["Apex", "LWC"], "Showcase concept"],
  ["Industrial Asset CRM", "salesforce", "Service records and asset support workflows.", ["Salesforce", "REST"], "Showcase concept"],
  ["Agriculture Relationship CRM", "salesforce", "Farmer profiles, field activities and engagement workflows.", ["Apex", "LWC"], "Showcase concept"],
  ["Healthcare Engagement CRM", "salesforce", "Patient engagement and service request workflows.", ["Salesforce", "Flows"], "Showcase concept"],
  ["Real Estate Sales Automation", "salesforce", "Property enquiries, lead assignment and opportunity tracking.", ["Apex", "SOQL"], "Showcase concept"],
  ["Financial Advisory CRM", "salesforce", "Client relationship and advisory workflow management.", ["LWC", "Apex"], "Showcase concept"],
  ["IoT Device Alert CRM", "salesforce", "Device events surfaced as actionable CRM service records.", ["REST API", "Apex"], "Showcase concept"],
  ["Partner Collaboration Portal", "salesforce", "Partner-facing workflows and role-aware experiences.", ["LWC", "Salesforce"], "Showcase concept"],

  ["Intelligent Procurement", "sap", "Procurement workflow concepts for enterprise purchasing.", ["SAP BTP", "CAP Java"], "Showcase concept"],
  ["Smart Inventory", "sap", "Material visibility and inventory movement workflows.", ["SAP", "CAP"], "Showcase concept"],
  ["Supplier Collaboration", "sap", "Supplier onboarding and purchasing collaboration.", ["SAP BTP", "REST"], "Showcase concept"],
  ["Material Planning Workbench", "sap", "Material planning and requirements visibility.", ["S/4HANA MM"], "Showcase concept"],
  ["Sales Order Workspace", "sap", "Sales order lifecycle and fulfilment visibility.", ["SAP SD", "CAP"], "Showcase concept"],
  ["Financial Operations View", "sap", "Finance process visibility and reporting concepts.", ["SAP FICO"], "Showcase concept"],
  ["Agriculture Supply Chain", "sap", "Traceability across farmer, supplier and distribution workflows.", ["SAP BTP", "CAP Java"], "Showcase concept"],
  ["Industrial Maintenance Hub", "sap", "Maintenance planning and asset work management.", ["SAP", "REST"], "Showcase concept"],
  ["Enterprise People Directory", "sap", "Organizational data and employee workflow concepts.", ["SAP BTP"], "Showcase concept"],
  ["Cross-Enterprise Integration", "sap", "Integration patterns between SAP and external platforms.", ["CAP Java", "REST APIs"], "Showcase concept"],

  ["Human Health & Position Tracker", "embedded", "ESP32-oriented tracking concept combining sensor, GPS and GSM communication.", ["ESP32", "GPS", "GSM", "UART"], "Existing project"],
  ["Industrial Equipment Monitor", "embedded", "Sensor telemetry for monitoring equipment operating conditions.", ["C/C++", "ESP32", "MQTT"], "Showcase concept"],
  ["EV Battery Monitor", "embedded", "Battery parameter acquisition and protection concepts.", ["Embedded C", "Sensors"], "Showcase concept"],
  ["Agriculture Monitoring Node", "embedded", "Field sensing and telemetry for irrigation decisions.", ["ESP32", "Sensors"], "Showcase concept"],
  ["IoT Energy Meter", "embedded", "Electrical measurement with connected monitoring.", ["Arduino", "MQTT"], "Showcase concept"],
  ["Predictive Maintenance Node", "embedded", "Vibration and temperature sensing at the edge.", ["C++", "ESP32"], "Showcase concept"],
  ["Railway Track Monitor", "embedded", "A sensor-based track condition monitoring prototype concept.", ["Embedded C", "Sensors"], "Showcase concept"],
  ["Cold Chain Monitor", "embedded", "Temperature and location tracking for sensitive logistics.", ["GPS", "GSM", "IoT"], "Showcase concept"],
  ["Water Quality Node", "embedded", "Water parameter sensing and remote telemetry.", ["ESP32", "Sensors"], "Showcase concept"],
  ["Industrial IoT Gateway", "embedded", "An edge gateway bridging device protocols and MQTT.", ["Raspberry Pi", "MQTT"], "Showcase concept"],

  ["32-bit RISC Processor", "vlsi", "A processor architecture exploration implemented in RTL.", ["Verilog", "RTL"], "Research direction"],
  ["Parameterized ALU", "vlsi", "Arithmetic and logic datapath with verification scenarios.", ["Verilog"], "Research direction"],
  ["UART Controller", "vlsi", "A serial communication controller with configurable timing.", ["Verilog", "RTL"], "Research direction"],
  ["SPI Controller", "vlsi", "A synchronous serial peripheral controller.", ["Verilog"], "Research direction"],
  ["I2C Controller", "vlsi", "A two-wire bus controller and protocol state machine.", ["Verilog"], "Research direction"],
  ["AES Hardware Accelerator", "vlsi", "A cryptographic hardware architecture exploration.", ["RTL", "Verilog"], "Research direction"],
  ["FIR Filter Architecture", "vlsi", "A digital signal processing datapath exploration.", ["Verilog", "DSP"], "Research direction"],
  ["FPGA Traffic Controller", "vlsi", "A finite-state-machine based traffic controller.", ["FPGA", "Verilog"], "Research direction"],
  ["SDRAM Controller", "vlsi", "Memory interface and timing controller exploration.", ["RTL", "Verilog"], "Research direction"],
  ["RTL-to-Layout Flow", "vlsi", "An educational synthesis and physical design flow.", ["Yosys", "OpenROAD"], "Research direction"],

  ["Smart Factory Automation", "automation", "A connected factory control and monitoring concept.", ["PLC", "SCADA"], "Showcase concept"],
  ["Conveyor Control System", "automation", "Sequenced conveyor operation with sensor interlocks.", ["OpenPLC", "Ladder Logic"], "Showcase concept"],
  ["Water Treatment Automation", "automation", "Process monitoring and control for water treatment stages.", ["PLC", "SCADA"], "Showcase concept"],
  ["Smart Warehouse Automation", "automation", "Material movement and automated warehouse workflows.", ["PLC", "Sensors"], "Showcase concept"],
  ["Packaging & Sorting Line", "automation", "A control sequence for automated packaging and sorting.", ["Ladder Logic", "PLC"], "Showcase concept"],
  ["Boiler Monitoring System", "automation", "Temperature and pressure monitoring concepts.", ["SCADA", "Sensors"], "Showcase concept"],
  ["Substation Monitoring", "automation", "Electrical parameter monitoring and alarm concepts.", ["SCADA", "IoT"], "Showcase concept"],
  ["Solar Plant Controller", "automation", "Monitoring and supervisory control for solar generation.", ["PLC", "Energy"], "Showcase concept"],
  ["Intelligent Pump Control", "automation", "Pump sequencing, protection and operating modes.", ["PLC", "Ladder Logic"], "Showcase concept"],
  ["Factory Digital Twin", "automation", "A digital representation of factory assets and signals.", ["SCADA", "MQTT", "3D"], "Showcase concept"],

  ["NEXGRID Energy Intelligence", "ai-data", "Autonomous energy and infrastructure intelligence using connected data streams.", ["Java 21", "Spring Boot", "Kafka", "MQTT", "Redis"], "Existing project"],
  ["Energy Demand Forecasting", "ai-data", "A data workflow for load patterns and demand forecasts.", ["Python", "SQL"], "Showcase concept"],
  ["Kafka Transaction Stream", "ai-data", "An event-streaming reference for transaction processing.", ["Kafka", "Java"], "Showcase concept"],
  ["Enterprise Knowledge Assistant", "ai-data", "A retrieval-oriented assistant for enterprise knowledge.", ["Spring AI", "RAG"], "Showcase concept"],
  ["Supply Chain Forecasting", "ai-data", "Demand and inventory analytics concepts.", ["SQL", "Python"], "Showcase concept"],
  ["Anomaly Detection Engine", "ai-data", "Anomaly detection over operational event streams.", ["Kafka", "Redis"], "Showcase concept"],
  ["IoT Telemetry Analytics", "ai-data", "A telemetry pipeline from MQTT ingestion to analytics.", ["MQTT", "Kafka"], "Showcase concept"],
  ["Visual Quality Inspection", "ai-data", "A computer vision quality inspection concept.", ["AI", "Computer Vision"], "Research direction"],
  ["Traffic Intelligence", "ai-data", "Traffic data aggregation and trend analysis.", ["Python", "SQL"], "Showcase concept"],
  ["Observability Intelligence", "ai-data", "Metrics and alert correlation for distributed systems.", ["Prometheus", "Grafana"], "Showcase concept"],

  ["Java CI/CD Pipeline", "devops", "Automated build, test and deployment workflow.", ["GitHub Actions", "Maven"], "Showcase concept"],
  ["Containerized Microservices", "devops", "Local container orchestration for service-based applications.", ["Docker", "Compose"], "Showcase concept"],
  ["Monitoring Stack", "devops", "Metrics dashboards and alerting for application services.", ["Grafana", "Prometheus"], "Showcase concept"],
  ["Infrastructure Provisioning", "devops", "Declarative infrastructure automation exploration.", ["Terraform"], "Research direction"],
  ["Multi-Environment Delivery", "devops", "Development, staging and production deployment strategy.", ["CI/CD", "Docker"], "Showcase concept"],
  ["Centralized Logging", "devops", "Structured application logs and operational search.", ["Docker", "Logging"], "Showcase concept"],
  ["API Quality Pipeline", "devops", "Automated API checks as part of continuous integration.", ["Postman", "CI"], "Showcase concept"],
  ["IoT Backend Deployment", "devops", "Containerized MQTT, Kafka and Spring services.", ["Docker", "Kafka"], "Showcase concept"],
  ["Backup & Recovery Workflow", "devops", "Backup automation and recovery runbook concepts.", ["Cloud", "Automation"], "Showcase concept"],
  ["Engineering Operations Center", "devops", "A unified view of build, release and service health.", ["Grafana", "CI/CD"], "Showcase concept"],

  ["Hybrid Portable Microgrid", "electronics", "Hybrid renewable energy system concept with intelligent monitoring.", ["Solar", "Wind", "Arduino", "IoT"], "Existing project"],
  ["Solar Charge Controller", "electronics", "A solar charging and battery management concept.", ["Power Electronics", "MPPT"], "Research direction"],
  ["EV Battery Monitoring PCB", "electronics", "PCB concept for battery voltage and temperature monitoring.", ["KiCad", "BMS"], "Research direction"],
  ["Intelligent Power Distribution", "electronics", "A monitored power distribution and switching concept.", ["Sensors", "Power"], "Showcase concept"],
  ["Inverter Monitoring", "electronics", "Electrical parameter monitoring for inverter systems.", ["Arduino", "Sensors"], "Showcase concept"],
  ["Renewable Energy Controller", "electronics", "A controller concept for hybrid renewable generation.", ["Solar", "Wind", "Embedded C"], "Showcase concept"],
  ["Three-Phase Energy Analyzer", "electronics", "Measurement and visualization of three-phase electrical parameters.", ["Embedded C", "Sensors"], "Research direction"],
  ["Motor Protection PCB", "electronics", "Overcurrent and thermal protection circuit concept.", ["KiCad", "PCB"], "Research direction"],
  ["Wireless Sensor PCB", "electronics", "A compact sensor interface and wireless telemetry board.", ["PCB", "ESP32"], "Research direction"],
  ["Portable Power Quality Analyzer", "electronics", "A portable instrument concept for power quality measurements.", ["Electronics", "Embedded C"], "Research direction"],
];

export const projects: Project[] = entries.map(([title, domain, description, stack, status], index) => ({
  id: index + 1,
  title,
  domain,
  description,
  stack,
  status,
  featured: [0, 8, 10, 20, 40, 50, 60, 70, 80, 90].includes(index),
}));

export const profile = {
  name: "Madan Patel H S",
  headline: "Building intelligent systems across software, hardware & industry.",
  location: "Karnataka, India",
  email: "",
  github: "https://github.com/Madanpatel21",
  linkedin: "",
  summary: "An Electrical & Electronics Engineering graduate and software developer exploring the intersection of enterprise software, connected devices, industrial intelligence and emerging technologies.",
};
