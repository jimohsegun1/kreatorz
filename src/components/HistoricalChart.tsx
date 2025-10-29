'use client';

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { data } from '@/lib/data';

const chartData = data.scoreHistory;

const chartConfig = {
  score: {
    label: 'Score',
    color: 'hsl(var(--primary))',
  },
};

export function HistoricalChart() {
  return (
    <Card className="shadow-sm h-full bg-accent/50">
      <CardHeader>
        <CardTitle>4-Week Score History</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-6">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            accessibilityLayer
          >
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-border/50" />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              domain={[675, 725]}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="score"
              type="monotone"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorScore)"
              dot={{
                r: 4,
                fill: 'hsl(var(--background))',
                strokeWidth: 2,
                stroke: 'hsl(var(--primary))',
              }}
              activeDot={{
                r: 6,
                strokeWidth: 2,
                fill: 'hsl(var(--background))',
                stroke: 'hsl(var(--primary))',
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
