import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CivicMetric } from '@/data/mockCivicData';

interface MetricsGridProps {
  metrics: CivicMetric[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-accent" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable', change: number) => {
    if (trend === 'up' && change > 0) return 'text-accent';
    if (trend === 'down') return 'text-destructive';
    return 'text-muted-foreground';
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="shadow-card transition-shadow hover:shadow-elevated">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="mt-2 text-3xl font-bold text-foreground">{metric.value}</p>
              </div>
              <div className={`flex items-center gap-1 rounded-lg px-2 py-1 ${
                metric.trend === 'up' ? 'bg-accent/10' : metric.trend === 'down' ? 'bg-destructive/10' : 'bg-muted'
              }`}>
                {getTrendIcon(metric.trend)}
                <span className={`text-sm font-semibold ${getTrendColor(metric.trend, metric.change)}`}>
                  {Math.abs(metric.change)}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
