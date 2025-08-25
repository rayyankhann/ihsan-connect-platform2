'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  ArrowRight,
  Award,
  Heart,
  Globe
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

const stats = [
  { number: "25+", label: "Events This Month", icon: Calendar },
  { number: "300+", label: "Total RSVPs", icon: Users },
  { number: "15+", label: "Workshop Sessions", icon: Award },
  { number: "100%", label: "Free Events", icon: Heart }
];

const Events = () => {
  const [filter, setFilter] = useState("all");

  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type.toLowerCase() === filter);

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
              📅 Upcoming Events
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Events
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover upcoming workshops, guest speakers, and community service opportunities
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

      {/* Enhanced Event Filters */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Tabs value={filter} onValueChange={setFilter} className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-1/2 mx-auto bg-white shadow-lg">
                <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  All Events
                </TabsTrigger>
                <TabsTrigger value="workshop" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Workshops
                </TabsTrigger>
                <TabsTrigger value="volunteering" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Volunteering
                </TabsTrigger>
                <TabsTrigger value="career" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Career
                </TabsTrigger>
              </TabsList>

              <TabsContent value={filter} className="mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map((event, index) => (
                    <ScrollAnimation key={event.id} delay={index * 0.1}>
                      <Card 
                        className="card-gradient overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-2" />
                              {event.spots} spots available
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-blue-900 mb-4 leading-tight">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            {event.description}
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                              <span className="text-sm">
                                {new Date(event.date).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="w-4 h-4 mr-3 text-blue-500" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:scale-105 transition-all duration-300 shadow-lg group-hover:scale-105">
                            RSVP Now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>

                {filteredEvents.length === 0 && (
                  <ScrollAnimation>
                    <div className="text-center py-16">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                        <Calendar className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">No Events Found</h3>
                      <p className="text-gray-600 text-lg max-w-md mx-auto">
                        No events found for this category. Check back soon for new events!
                      </p>
                    </div>
                  </ScrollAnimation>
                )}
              </TabsContent>
            </Tabs>
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