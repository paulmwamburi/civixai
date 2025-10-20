import { Shield, TrendingUp } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">CivixLens</h1>
              <p className="text-sm text-muted-foreground">Explainable AI for Civic Decisions</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">87% Transparency Score</span>
          </div>
        </div>
      </div>
    </header>
  );
}
