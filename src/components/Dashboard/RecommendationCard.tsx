import { ThumbsUp, ThumbsDown, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PolicyRecommendation } from '@/data/mockCivicData';
import { useState } from 'react';

interface RecommendationCardProps {
  recommendation: PolicyRecommendation;
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <Card className="shadow-card transition-all hover:shadow-elevated">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{recommendation.title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{recommendation.sector}</p>
          </div>
          <Badge className={`${getPriorityColor(recommendation.priority)} border`}>
            {recommendation.priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Recommended Budget</p>
            <p className="text-lg font-bold text-foreground">
              ${(recommendation.recommendedBudget / 1000000).toFixed(1)}M
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Impact Score</p>
            <p className="text-lg font-bold text-accent">{recommendation.impactScore}/10</p>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">AI Confidence</span>
            <span className="font-semibold text-foreground">{(recommendation.confidence * 100).toFixed(0)}%</span>
          </div>
          <Progress value={recommendation.confidence * 100} className="h-2" />
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowExplanation(!showExplanation)}
          className="w-full"
        >
          <AlertCircle className="mr-2 h-4 w-4" />
          {showExplanation ? 'Hide' : 'Show'} AI Reasoning
        </Button>

        {showExplanation && (
          <div className="space-y-4 rounded-lg border border-border bg-muted/30 p-4">
            <div>
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                Why This Decision?
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{recommendation.reasoning}</p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">Key Factors (Feature Importance)</h4>
              <div className="space-y-3">
                {recommendation.features.map((feature, idx) => (
                  <div key={idx}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">{feature.name}</span>
                      <span className="text-muted-foreground">{(feature.importance * 100).toFixed(0)}%</span>
                    </div>
                    <Progress value={feature.importance * 100} className="h-1.5" />
                    <p className="mt-1 text-xs text-muted-foreground">{feature.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1">
            <ThumbsUp className="mr-1 h-3 w-3" />
            Agree
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <ThumbsDown className="mr-1 h-3 w-3" />
            Disagree
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
