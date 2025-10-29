'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { data } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const iconMap: { [key: string]: string } = {
  'Score Overview': '/score_overview.png',
  'Pillar Breakdown': '/pillar_breakdown.png',
  'Weekly Actions': '/weekly_actions.png',
  'Progress Timeline': '/progress_timeline.png',
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-card p-6 hidden lg:flex flex-col rounded-xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          My Pathway Progress
        </Button>
      </div>
      <nav className="flex flex-col gap-2">
        {data.sidebarLinks.map((link) => {
          const iconSrc = iconMap[link.title];
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.title}>
              <Button
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive && 'bg-primary/10 text-primary'
                )}
              >
                {iconSrc && <Image src={iconSrc} alt={`${link.title} icon`} width={20} height={20} className="mr-3" />}
                {link.title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
