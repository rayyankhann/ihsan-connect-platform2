"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Membership", href: "/membership" },
  // { name: "Testimonials", href: "/blog" },
  // { name: 'Past Events', href: '/past-events' },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Cross-browser scroll position detection
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollY > 20);
    };

    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href) || false;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 browser-compat firefox-fix nav-mobile !p-0",
        "pt-[env(safe-area-inset-top)]",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-300"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 xl:space-x-4 group"
            aria-label="IHSAN Healthcare Association Home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src="/ihsan-logo-sm.png"
                alt="IHSAN Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg xl:text-xl text-gray-900 leading-none">
                IHSAN
              </span>
              <span className="text-xs xl:text-sm text-gray-600 leading-none">
                Healthcare Association
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm xl:text-base font-medium transition-colors hover:text-blue-600 relative group",
                  isActive(item.href) ? "text-blue-600" : "text-gray-700"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hover:bg-blue-600 hover:text-white transition-colors border-gray-300 text-gray-700 px-3 xl:px-6 py-2"
            >
              <Link href="/donate">
                <Heart className="w-5 h-5 " />
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
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg z-40"
            style={{ top: `calc(4rem + env(safe-area-inset-top))` }}
          >
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
