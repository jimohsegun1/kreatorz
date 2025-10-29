import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from '@/lib/data';

const iconMap: { [key: string]: string } = {
  Foundation: '/foundation_level.png',
  Intermediate: '/intermediate_level.png',
  Advanced: '/advanced_level.png',
};

export function LevelInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.scoreLevels.map((level) => {
        const iconSrc = iconMap[level.title];
        return (
          <Card key={level.title} className="bg-accent/50 shadow-sm flex flex-col p-6 border border-primary/20">
            <CardHeader className='p-0 mb-4'>
              {iconSrc && <Image src={iconSrc} alt={`${level.title} level icon`} width={32} height={32} />}
            </CardHeader>
            <CardContent className='p-0 flex-1'>
              <CardTitle className="text-xl font-bold mb-2 font-headline">{level.title} Level</CardTitle>
              <p className="text-base text-muted-foreground">{level.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
