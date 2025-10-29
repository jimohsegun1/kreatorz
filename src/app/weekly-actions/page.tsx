
'use client';

import { data } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const iconMap: { [key: string]: string } = {
  'Strengthen Thought Leadership': '/strengthen.png',
  'Expand Your Network': '/expand.png',
  'Optimize Content Strategy': '/optimize.png',
};

export default function WeeklyActionsPage() {
  const completedActions = 1;
  const totalActions = data.weeklyActions.length;
  const potentialScoreIncrease = data.weeklyActions.reduce((acc, action) => acc + action.points, 0);

  const getPriorityBadgeClass = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };
  
  const getIconBgColorClass = (priority: string) => {
    switch (priority.toLowerCase()) {
        case 'high':
            return 'bg-red-100';
        case 'medium':
            return 'bg-yellow-100';
        default:
            return 'bg-blue-100';
    }
  };

  return (
    <div className="w-full bg-card p-4 sm:p-6 lg:p-8 rounded-xl">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold font-headline">Your Weekly Actions</h1>
        <p className="text-muted-foreground mt-2">
          Three personalized actions to boost your Personal Brand Score this week.
        </p>
      </div>

      <Card className="mb-8 bg-primary text-primary-foreground shadow-lg bg-gradient-to-r from-primary to-chart-2">
        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold">Current Score</p>
            <p className="text-sm text-primary-foreground/80">Based on your latest assessment</p>
          </div>
          <p className="text-4xl font-bold font-headline">
            {data.influenceScore.score}<span className="text-2xl text-primary-foreground/80">/100</span>
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6 mb-8">
        {data.weeklyActions.map((action, index) => {
          const iconSrc = iconMap[action.title];
          const isThirdCard = index === 2;
          return (
            <Card key={index} className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center", isThirdCard ? 'bg-blue-100' : getIconBgColorClass(action.priority))}>
                      {iconSrc && <Image src={iconSrc} alt={`${action.title} icon`} width={32} height={32} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-headline text-foreground">{action.title}</h3>
                      <Badge variant="outline" className={cn("mt-1 font-medium", getPriorityBadgeClass(action.priority))}>
                        Priority: {action.priority}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground self-start sm:self-center">+{action.points} points</p>
                </div>
                <p className="text-muted-foreground mb-6">{action.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm font-medium text-foreground text-center sm:text-left">{action.levelPath}</p>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground w-full sm:w-auto">
                    Start Action <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mb-8 bg-accent/50 border-transparent">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <h3 className="text-lg font-semibold font-headline text-foreground">Weekly Progress</h3>
            <p className="text-sm text-muted-foreground">{completedActions} of {totalActions} completed</p>
          </div>
          <Progress value={(completedActions / totalActions) * 100} className="mb-3 h-2" />
          <p className="text-sm text-muted-foreground text-center sm:text-left">Complete all actions to potentially increase your score by up to {potentialScoreIncrease} points.</p>
        </CardContent>
      </Card>

      <div className="text-center">
        <h3 className="text-lg font-semibold font-headline mb-2">Need more guidance?</h3>
        <p className="text-muted-foreground mb-4">Explore the full Influencer Development Pathway for structured learning.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <Button variant="outline">Foundation Level</Button>
          <Button variant="outline">Intermediate Level</Button>
          <Button variant="default" className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground">Advanced Level</Button>
        </div>
      </div>
    </div>
  );
}
