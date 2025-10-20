import { Filter, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { regions, sectors } from '@/data/mockCivicData';

export default function FilterPanel() {
  return (
    <Card className="shadow-card">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Region</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region.toLowerCase().replace(' ', '-')}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Sector</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector.toLowerCase().replace(' ', '-')}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Budget Range</label>
              <span className="flex items-center text-sm text-muted-foreground">
                <DollarSign className="h-3 w-3" />
                0.5M - 3M
              </span>
            </div>
            <Slider defaultValue={[1, 3]} max={3} step={0.1} className="w-full" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Priority Level</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
