'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Membership', href: '/membership' },
  { name: 'Blog', href: '/blog' },
  { name: 'Past Events', href: '/past-events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            aria-label="IHSAN Healthcare Association Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-none">IHSAN</span>
              <span className="text-xs text-muted-foreground leading-none">Healthcare Association</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Link href="/donate">
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Link>
            </Button>
            <Button 
              asChild 
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/membership">
                <UserPlus className="w-4 h-4 mr-2" />
                Join Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/donate">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/membership">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}