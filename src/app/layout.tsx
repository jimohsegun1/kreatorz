'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Sidebar } from '@/components/Sidebar';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { data } from '@/lib/data';
import { useState } from 'react';
import Image from 'next/image';

const iconMap: { [key: string]: string } = {
  'Score Overview': '/score_overview.png',
  'Pillar Breakdown': '/pillar_breakdown.png',
  'Weekly Actions': '/weekly_actions.png',
  'Progress Timeline': '/progress_timeline.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background" suppressHydrationWarning>
        <div className="flex gap-4 sm:gap-6 lg:gap-8 items-start max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
          
          <Sidebar />

          <main className="flex-1 min-w-0">
            <div className="flex items-center gap-4 mb-6 lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <PanelLeft />
                    <span className="sr-only">Open sidebar</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                  <aside className="w-64 flex-shrink-0 bg-card p-6 flex flex-col rounded-xl h-full">
                    <div className="mb-8">
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        My Pathway Progress
                      </Button>
                    </div>
                    <nav className="flex flex-col gap-2">
                      {data.sidebarLinks.map((link) => {
                        const iconSrc = iconMap[link.title];
                        return (
                          <Link href={link.href} key={link.title} onClick={() => setIsMobileMenuOpen(false)}>
                            <Button
                              variant='ghost'
                              className='w-full justify-start'
                            >
                              {iconSrc && <Image src={iconSrc} alt={`${link.title} icon`} width={20} height={20} className="mr-3" />}
                              {link.title}
                            </Button>
                          </Link>
                        );
                      })}
                    </nav>
                  </aside>
                </SheetContent>
              </Sheet>

              <h1 className="text-2xl font-bold font-headline">Influence Compass</h1>
            </div>
            {children}
          </main>

        </div>
        <Toaster />
      </body>
    </html>
  );
}
