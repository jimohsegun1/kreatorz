import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { data } from '@/lib/data';

const iconMap: { [key: string]: string } = {
  Clarity: '/clarity.png',
  Content: '/content.png',
  Network: '/network.png',
  Leadership: '/leadership.png',
  Consistency: '/consistency.png',
  'Peer Impact': '/peer_impact.png',
};

export function Pillars() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {data.pillars.map((pillar) => {
        const iconSrc = iconMap[pillar.name];
        return (
          <Card
            key={pillar.name}
            className="flex flex-col items-center justify-center gap-2 p-4 text-center transition-colors hover:bg-accent/50 bg-card border-border/60"
          >
            {iconSrc && (
              <div className="bg-accent rounded-md p-2">
                <Image src={iconSrc} alt={`${pillar.name} icon`} width={24} height={24} />
              </div>
            )}
            <span className="text-sm font-medium text-foreground">{pillar.name}</span>
          </Card>
        );
      })}
    </div>
  );
}
