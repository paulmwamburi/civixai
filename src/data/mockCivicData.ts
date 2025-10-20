export interface PolicyRecommendation {
  id: string;
  title: string;
  sector: string;
  priority: 'high' | 'medium' | 'low';
  recommendedBudget: number;
  confidence: number;
  reasoning: string;
  impactScore: number;
  features: {
    name: string;
    importance: number;
    value: string;
  }[];
}

export interface CivicMetric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export interface BudgetAllocation {
  sector: string;
  allocated: number;
  recommended: number;
  satisfaction: number;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  decision: string;
  rationale: string;
  confidence: number;
  feedback: 'agree' | 'disagree' | null;
}

export const mockRecommendations: PolicyRecommendation[] = [
  {
    id: '1',
    title: 'Increase Water Infrastructure Investment',
    sector: 'Water & Sanitation',
    priority: 'high',
    recommendedBudget: 2500000,
    confidence: 0.92,
    reasoning: 'Analysis shows high population density in underserved areas combined with low satisfaction scores (2.3/5) and aging infrastructure (15+ years). These factors strongly indicate urgent need for investment.',
    impactScore: 8.7,
    features: [
      { name: 'Population Density', importance: 0.34, value: 'High (850/km²)' },
      { name: 'Satisfaction Score', importance: 0.28, value: 'Low (2.3/5)' },
      { name: 'Infrastructure Age', importance: 0.22, value: '15 years' },
      { name: 'Service Coverage', importance: 0.16, value: '68%' },
    ],
  },
  {
    id: '2',
    title: 'Expand Public Transportation Network',
    sector: 'Transportation',
    priority: 'high',
    recommendedBudget: 1800000,
    confidence: 0.87,
    reasoning: 'High commute times (avg 45min) and growing population (+12% annually) indicate need for expanded public transport. Current capacity utilization at 94% shows system strain.',
    impactScore: 7.9,
    features: [
      { name: 'Commute Time', importance: 0.31, value: '45 minutes avg' },
      { name: 'Population Growth', importance: 0.27, value: '+12% annually' },
      { name: 'Capacity Utilization', importance: 0.25, value: '94%' },
      { name: 'Accessibility Score', importance: 0.17, value: '6.2/10' },
    ],
  },
  {
    id: '3',
    title: 'Healthcare Facility Modernization',
    sector: 'Healthcare',
    priority: 'medium',
    recommendedBudget: 1200000,
    confidence: 0.79,
    reasoning: 'Moderate patient wait times (30min) and equipment age (8 years) suggest modernization need. However, satisfaction scores remain acceptable (3.8/5), indicating medium priority.',
    impactScore: 6.8,
    features: [
      { name: 'Wait Time', importance: 0.29, value: '30 minutes' },
      { name: 'Equipment Age', importance: 0.26, value: '8 years' },
      { name: 'Patient Load', importance: 0.24, value: '82% capacity' },
      { name: 'Satisfaction', importance: 0.21, value: '3.8/5' },
    ],
  },
];

export const mockMetrics: CivicMetric[] = [
  { label: 'Citizens Served', value: '245,000', change: 4.2, trend: 'up' },
  { label: 'Budget Utilization', value: '87%', change: 2.1, trend: 'up' },
  { label: 'Avg Satisfaction', value: '3.6/5', change: -1.5, trend: 'down' },
  { label: 'Policy Impact Score', value: '7.3/10', change: 0.8, trend: 'up' },
];

export const mockBudgetData: BudgetAllocation[] = [
  { sector: 'Water', allocated: 1800000, recommended: 2500000, satisfaction: 2.3 },
  { sector: 'Transport', allocated: 1500000, recommended: 1800000, satisfaction: 3.1 },
  { sector: 'Healthcare', allocated: 2200000, recommended: 1200000, satisfaction: 3.8 },
  { sector: 'Education', allocated: 2800000, recommended: 2900000, satisfaction: 4.1 },
  { sector: 'Security', allocated: 1200000, recommended: 1100000, satisfaction: 3.9 },
];

export const mockAuditLog: AuditLogEntry[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    decision: 'Recommend water infrastructure investment increase',
    rationale: 'High population density and low satisfaction scores in underserved areas',
    confidence: 0.92,
    feedback: 'agree',
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    decision: 'Prioritize public transportation expansion',
    rationale: 'Growing population and high capacity utilization indicate system strain',
    confidence: 0.87,
    feedback: null,
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    decision: 'Medium priority for healthcare modernization',
    rationale: 'Equipment age and wait times moderate, satisfaction acceptable',
    confidence: 0.79,
    feedback: 'agree',
  },
];

export const regions = ['All Regions', 'North District', 'South District', 'East District', 'West District'];
export const sectors = ['All Sectors', 'Water & Sanitation', 'Transportation', 'Healthcare', 'Education', 'Security'];
