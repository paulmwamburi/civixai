import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BudgetAllocation } from '@/data/mockCivicData';

interface BudgetChartProps {
  data: BudgetAllocation[];
}

export default function BudgetChart({ data }: BudgetChartProps) {
  const chartData = data.map((item) => ({
    sector: item.sector,
    Current: item.allocated / 1000000,
    'AI Recommended': item.recommended / 1000000,
  }));

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Budget Allocation: Current vs AI Recommended</CardTitle>
        <p className="text-sm text-muted-foreground">Compare existing budget with AI-driven recommendations</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="sector" className="text-xs" />
            <YAxis className="text-xs" label={{ value: 'Million USD', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
            />
            <Legend />
            <Bar dataKey="Current" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="AI Recommended" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
