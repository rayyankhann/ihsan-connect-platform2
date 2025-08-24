'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  ArrowRight
} from 'lucide-react';
import volunteeringImage from '@/assets/volunteering-event.jpg';
import networkingImage from '@/assets/networking-event.jpg';

const events = [
  {
    id: 1,
    title: "Medical Skills Workshop",
    date: "2025-01-15",
    time: "6:00 PM",
    location: "Student Union Building, Room 2.304",
    type: "Workshop",
    image: volunteeringImage,
    spots: 25,
    description: "Learn essential medical skills including vital signs, basic suturing, and patient communication."
  },
  {
    id: 2,
    title: "Healthcare Career Fair",
    date: "2025-01-22",
    time: "10:00 AM",
    location: "Activities Center",
    type: "Career",
    image: networkingImage,
    spots: 100,
    description: "Meet with healthcare professionals and learn about different career paths in medicine."
  },
  {
    id: 3,
    title: "Community Health Screening",
    date: "2025-01-29",
    time: "9:00 AM",
    location: "Dallas Community Center",
    type: "Volunteering",
    image: volunteeringImage,
    spots: 15,
    description: "Volunteer at a community health screening event serving underserved populations."
  }
];

const Events = () => {
  const [filter, setFilter] = useState("all");

  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type.toLowerCase() === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events Calendar
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join us for workshops, volunteering opportunities, and networking events
          </p>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-1/2 mx-auto">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="workshop">Workshops</TabsTrigger>
              <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <Card 
                    key={event.id} 
                    className="card-gradient overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="font-medium">
                          {event.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          {event.spots} spots
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        RSVP Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No events found for this category.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Events;