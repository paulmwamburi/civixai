import { Clock, CheckCircle, XCircle, MinusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AuditLogEntry } from '@/data/mockCivicData';
import { formatDistanceToNow } from 'date-fns';

interface AuditLogProps {
  entries: AuditLogEntry[];
}

export default function AuditLog({ entries }: AuditLogProps) {
  const getFeedbackIcon = (feedback: 'agree' | 'disagree' | null) => {
    switch (feedback) {
      case 'agree':
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case 'disagree':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <MinusCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Decision Audit Log
        </CardTitle>
        <p className="text-sm text-muted-foreground">Track all AI recommendations and their rationales</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{entry.decision}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.rationale}</p>
                </div>
                {getFeedbackIcon(entry.feedback)}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {(entry.confidence * 100).toFixed(0)}% confidence
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(entry.timestamp), { addSuffix: true })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
