import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import MetricsGrid from '@/components/Dashboard/MetricsGrid';
import RecommendationCard from '@/components/Dashboard/RecommendationCard';
import BudgetChart from '@/components/Dashboard/BudgetChart';
import FilterPanel from '@/components/Dashboard/FilterPanel';
import AuditLog from '@/components/Dashboard/AuditLog';
import {
  mockRecommendations,
  mockMetrics,
  mockBudgetData,
  mockAuditLog,
} from '@/data/mockCivicData';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="mt-2 text-muted-foreground">
            AI-powered insights with transparent reasoning for civic decision-making
          </p>
        </div>

        <div className="mb-8">
          <MetricsGrid metrics={mockMetrics} />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Policy Recommendations</h3>
              <div className="space-y-6">
                {mockRecommendations.map((recommendation) => (
                  <RecommendationCard key={recommendation.id} recommendation={recommendation} />
                ))}
              </div>
            </div>

            <BudgetChart data={mockBudgetData} />
          </div>

          <div className="space-y-6">
            <FilterPanel />
            <AuditLog entries={mockAuditLog} />
          </div>
        </div>
      </main>
    </div>
  );
}
