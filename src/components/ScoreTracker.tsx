'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { data } from '@/lib/data';

export function ScoreTracker() {
  const finalScore = data.influenceScore.score;
  const level = data.influenceScore.level;
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (finalScore === 0) {
      setScore(0);
      return;
    }
    const animationDuration = 1000;
    const frameRate = 60;
    const totalFrames = animationDuration / (1000 / frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const newScore = Math.round(finalScore * progress);

      setScore(Math.min(newScore, finalScore));

      if (currentFrame >= totalFrames) {
        clearInterval(counter);
        setScore(finalScore);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [finalScore]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const angle = (score / 100) * 360;

  const dotX = 50 + radius * Math.cos(((angle - 90) * Math.PI) / 180);
  const dotY = 50 + radius * Math.sin(((angle - 90) * Math.PI) / 180);

  return (
    <Card className="h-full flex flex-col shadow-sm bg-accent/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Influence Score</CardTitle>
        <Badge
          className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground border-0"
        >
          {level}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center text-center mt-[-18]">
        <div className="relative flex h-80 w-80 items-center justify-center">
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--chart-2))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="hsl(var(--primary))" floodOpacity="0.3" />
              </filter>
            </defs>
            <circle
              className="text-gray-200 dark:text-gray-800"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            <circle
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="url(#scoreGradient)"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              transform="rotate(180 50 50)"
              style={{ transition: 'stroke-dashoffset 1s ease-out' }}
              filter="url(#shadow)"
            />
            {score > 0 && (
              <g style={{ transition: 'transform 1s ease-out' }} transform={`rotate(${angle - 90} 50 50)`}>
                <circle
                  cx="50"
                  cy={50-radius}
                  r="5"
                  fill="hsl(var(--primary))"
                />
              </g>
            )}
          </svg>
          <div className="flex flex-col">
            <span className="font-headline text-6xl font-bold text-foreground">
              {score}
            </span>
            <span className="text-muted-foreground">out of 100</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
