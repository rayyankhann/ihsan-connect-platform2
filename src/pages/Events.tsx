'use client'

import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { listUpcomingEvents, listEventsInRange } from '@/lib/events-data';
import type { EventDoc } from '@/types/events';
import { formatEventDateRange } from '@/types/events';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  ArrowRight,
  Award,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

// Events are now loaded from Firestore; keeping calendar rendering unchanged
type CalendarEvent = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // localized time
  location: string;
  type: string;
  description: string;
  rsvpURL?: string;
};

const eventTypes = [
  "All Events",
  "Workshop", 
  "Guest Speaker", 
  "Service", 
  "Fundraising", 
  "Research",
  "Career"
];

const stats = [
  { number: "25+", label: "Events This Month", icon: Calendar },
  { number: "300+", label: "Total RSVPs", icon: Users },
  { number: "15+", label: "Workshop Sessions", icon: Award },
  { number: "100%", label: "Free Events", icon: Heart }
];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All Events");
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // Start with January 2025
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const formatLocalIsoWithOffset = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    const tzOffsetMin = -d.getTimezoneOffset();
    const sign = tzOffsetMin >= 0 ? '+' : '-';
    const absMin = Math.abs(tzOffsetMin);
    const offH = pad(Math.floor(absMin / 60));
    const offM = pad(absMin % 60);
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${sign}${offH}:${offM}`;
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    const monthStartLocal = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1, 0, 0, 0);
    const monthEndLocal = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1, 0, 0, 0);
    const startIso = formatLocalIsoWithOffset(monthStartLocal);
    const endIso = formatLocalIsoWithOffset(monthEndLocal);
    // Dev sanity log
    console.debug('Calendar month range', { startIso, endIso });

    listEventsInRange(startIso, endIso)
      .then((items: EventDoc[]) => {
        if (!isMounted) return;
        const timeFmt = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' });
        const transformed: CalendarEvent[] = items.map((e) => {
          const start = new Date(e.start);
          const yyyy = start.getFullYear();
          const mm = String(start.getMonth() + 1).padStart(2, '0');
          const dd = String(start.getDate()).padStart(2, '0');
          return {
            id: e.id,
            title: e.title,
            date: `${yyyy}-${mm}-${dd}`,
            time: timeFmt.format(start),
            location: e.location,
            type: e.type,
            description: e.description,
            rsvpURL: (e as any).rsvpURL,
          };
        });
        console.debug('Month events fetched:', transformed.length);
        setEvents(transformed);
      })
      .catch((err) => {
        console.error(err);
        if (isMounted) setError('Failed to load events');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => { isMounted = false };
  }, [currentMonth]);

  // Get events for the selected type
  const filteredEvents = useMemo(() => {
    const base = selectedType === "All Events" 
      ? events 
      : events.filter(event => event.type === selectedType);
    return base;
  }, [events, selectedType]);

  // Event type colors
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-green-100 text-green-800 border-green-500";
      case "Guest Speaker":
        return "bg-purple-100 text-purple-800 border-purple-500";
      case "Service":
        return "bg-orange-100 text-orange-800 border-orange-500";
      case "Fundraising":
        return "bg-red-100 text-red-800 border-red-500";
      case "Research":
        return "bg-indigo-100 text-indigo-800 border-indigo-500";
      case "Career":
        return "bg-teal-100 text-teal-800 border-teal-500";
      default:
        return "bg-blue-100 text-blue-800 border-blue-500";
    }
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: string) => {
    return filteredEvents.filter(event => event.date === date);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 bg-gray-50 border border-gray-200"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
      const dayEvents = getEventsForDate(dateString);
      
      days.push(
        <div key={day} className="h-32 bg-white border border-gray-200 p-2 hover:bg-gray-50 transition-colors">
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
          <div className="space-y-1 max-h-24 overflow-y-auto">
            {dayEvents.map(event => (
              <div key={event.id} className="relative group">
                <Link 
                  href={`/event?id=${event.id}`}
                  className={`text-xs p-1 rounded transition-colors border-l-2 ${getEventTypeColor(event.type)} block`}
                  title={`${event.title} - ${event.time} - ${event.location}`}
                >
                  <div className="font-medium truncate">{event.title}</div>
                  <div className="text-xs opacity-80">{event.time}</div>
                  <div className="text-xs truncate font-semibold">{event.type}</div>
                </Link>
                <div className="absolute right-1 bottom-1 hidden group-hover:block group-focus-within:block">
                  {event.rsvpURL ? (
                    <a href={event.rsvpURL} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-[11px]">RSVP</a>
                  ) : (
                    <Link href={`/event?id=${event.id}`} className="text-blue-700 underline text-[11px]">RSVP</Link>
                  )}
                </div>
              </div>
            ))}
            {dayEvents.length === 0 && (
              <div className="text-xs text-gray-400 text-center py-2">
                No events
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 rounded-full bg-[#2563eb] blur-3xl"></div>
          </div>
          
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-white/20 mb-6">
              📅 Interactive Calendar
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Event Calendar
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Browse our interactive calendar to find workshops, guest speakers, and community service opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calendar Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                    Event Calendar
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Showing {filteredEvents.length} {selectedType === "All Events" ? "events" : selectedType.toLowerCase() + " events"} in {getMonthName(currentMonth)}
                  </p>
                  {/* Debug info - remove this later */}
                  <div className="text-xs text-gray-500 mt-1">
                    Debug: Current month events: {filteredEvents.filter(e => e.date.startsWith('2025-01')).length} in Jan, {filteredEvents.filter(e => e.date.startsWith('2025-02')).length} in Feb
                  </div>
                </div>
                
                {/* Event Type Filter */}
                <div className="flex items-center gap-4">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-48 bg-white border-blue-200">
                      <SelectValue placeholder="Filter by event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map(type => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-8">
                <Button 
                  variant="outline" 
                  onClick={prevMonth}
                  className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <h3 className="text-2xl font-bold text-blue-900">
                  {getMonthName(currentMonth)}
                </h3>
                
                <Button 
                  variant="outline" 
                  onClick={nextMonth}
                  className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>



              {/* Calendar Grid */}
              <Card className="p-6 bg-white shadow-lg">
                {/* Calendar Header */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-3 text-center font-semibold text-blue-900 bg-blue-50 rounded-lg">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays()}
                </div>
              </Card>


            </div>

            {/* Event Legend */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Event Types</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {eventTypes.slice(1).map(type => {
                  const colorClasses = getEventTypeColor(type);
                  const bgColor = colorClasses.split(' ')[0];
                  
                  return (
                    <div key={type} className={`flex items-center gap-2 p-3 rounded-lg shadow-sm border ${colorClasses}`}>
                      <div className={`w-3 h-3 rounded-full ${bgColor.replace('bg-', 'bg-').replace('-100', '-500')}`}></div>
                      <span className="text-sm font-medium">{type}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Event Listings */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Event Listings</h3>
              <div className="space-y-4">
                {filteredEvents.map((ev) => (
                  <Card key={ev.id} className="p-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-blue-900">{ev.title}</h4>
                        <Badge>{ev.type}</Badge>
                      </div>
                      <div className="text-gray-600 text-sm">{ev.date} • {ev.time} • {ev.location}</div>
                      <div className="text-gray-700">{ev.description}</div>
                      <div>
                        {ev.rsvpURL ? (
                          <a href={ev.rsvpURL} target="_blank" rel="noopener noreferrer">
                            <Button>RSVP</Button>
                          </a>
                        ) : (
                          <Button disabled>RSVP Coming Soon</Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Never miss an event! Join our community to get notified about upcoming workshops and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Users className="mr-3 h-6 w-6" />
                Join IHSAN
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-5 rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 h-6 w-6" />
                View Past Events
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Events;