
'use client';
import { ScoreTracker } from '@/components/ScoreTracker';
import { HistoricalChart } from '@/components/HistoricalChart';
import { Pillars } from '@/components/Pillars';
import { LevelInfo } from '@/components/LevelInfo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-card p-4 sm:p-6 lg:p-8 rounded-xl">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">Your Influence Compass</h1>
          <p className="text-muted-foreground mt-2">
            The Personal Brand Score is your dynamic benchmark, guiding you through each stage of the Influencer Development Pathway.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <ScoreTracker />
            <HistoricalChart />
        </div>

        <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-headline mb-4">Why Your Score Matters</h2>
            <LevelInfo />
        </div>

        <div className='mb-8'>
            <h2 className="text-xl sm:text-2xl font-bold font-headline mb-4">Built on Six Core Pillars</h2>
            <Pillars />
        </div>

        <div className="flex justify-center sm:justify-end">
          <Button size="lg" className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground w-full sm:w-auto">
            View Pillar Breakdown <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
    </div>
  );
}
