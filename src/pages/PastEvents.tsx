'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  ArrowRight,
  Star,
  Award,
  Heart,
  Globe
} from 'lucide-react';
import volunteeringImage from '@/assets/volunteering-event.jpg';
import networkingImage from '@/assets/networking-event.jpg';

const pastEvents = [
  {
    id: 1,
    title: "Fall 2024 Medical School Panel",
    date: "2024-11-15",
    time: "7:00 PM",
    location: "Natural Science Building, Room 1.124",
    type: "Guest Speakers",
    semester: "Fall 2024",
    image: networkingImage,
    attendees: 85,
    description: "Medical school students and recent graduates shared their experiences and answered questions about the application process.",
    highlights: [
      "Panel of 6 medical students from different schools",
      "Q&A session with over 50 questions answered",
      "Networking opportunities with current students"
    ],
    rating: 4.8
  },
  {
    id: 2,
    title: "Community Health Fair Volunteering",
    date: "2024-10-28",
    time: "8:00 AM",
    location: "Richardson Community Center",
    type: "Service",
    semester: "Fall 2024",
    image: volunteeringImage,
    attendees: 32,
    description: "IHSAN members volunteered at a community health fair, providing blood pressure screenings and health education.",
    highlights: [
      "Served over 200 community members",
      "Hands-on experience with vital signs",
      "Collaboration with local healthcare providers"
    ],
    rating: 4.9
  },
  {
    id: 3,
    title: "Suturing Workshop",
    date: "2024-10-12",
    time: "6:30 PM",
    location: "Student Union Building, Room 2.304",
    type: "Workshops",
    semester: "Fall 2024",
    image: volunteeringImage,
    attendees: 28,
    description: "Hands-on suturing practice with medical student instructors teaching basic techniques.",
    highlights: [
      "Practice on suture pads and pig's feet",
      "Learn different suturing techniques",
      "Take-home practice materials"
    ],
    rating: 4.7
  },
  {
    id: 4,
    title: "Healthcare Professionals Networking Night",
    date: "2024-09-20",
    time: "6:00 PM",
    location: "Alumni Center",
    type: "Guest Speakers",
    semester: "Fall 2024",
    image: networkingImage,
    attendees: 65,
    description: "An evening of networking with healthcare professionals from various specialties including physicians, nurses, and researchers.",
    highlights: [
      "15+ healthcare professionals attended",
      "Speed networking sessions",
      "Career advice and mentorship opportunities"
    ],
    rating: 4.6
  },
  {
    id: 5,
    title: "MCAT Study Group Launch",
    date: "2024-09-05",
    time: "5:00 PM",
    location: "McDermott Library, Room 2.102",
    type: "Workshops",
    semester: "Fall 2024",
    image: networkingImage,
    attendees: 22,
    description: "Kickoff meeting for our weekly MCAT study groups with study schedules and resource sharing.",
    highlights: [
      "Formation of study groups by target test date",
      "Resource sharing and study schedules",
      "Peer tutoring program launch"
    ],
    rating: 4.5
  },
  {
    id: 6,
    title: "Spring Charity Run for Health",
    date: "2024-04-13",
    time: "7:00 AM",
    location: "UTD Campus Green",
    type: "Fundraising",
    semester: "Spring 2024",
    image: volunteeringImage,
    attendees: 120,
    description: "5K charity run to raise funds for local healthcare initiatives and community health programs.",
    highlights: [
      "Raised $3,500 for community health programs",
      "120 participants including students and faculty",
      "Health and wellness booths"
    ],
    rating: 4.8
  }
];

const semesters = ["All", "Fall 2024", "Spring 2024", "Fall 2023"];
const eventTypes = ["All", "Workshops", "Guest Speakers", "Service", "Fundraising", "Research"];

const stats = [
  { number: "50+", label: "Events Hosted", icon: Calendar },
  { number: "1,200+", label: "Total Attendees", icon: Users },
  { number: "25+", label: "Workshop Sessions", icon: Award },
  { number: "500+", label: "Community Members Served", icon: Heart }
];

const PastEvents = () => {
  const [selectedSemester, setSelectedSemester] = React.useState("All");
  const [selectedType, setSelectedType] = React.useState("All");

  const filteredEvents = pastEvents.filter(event => {
    const semesterMatch = selectedSemester === "All" || event.semester === selectedSemester;
    const typeMatch = selectedType === "All" || event.type === selectedType;
    return semesterMatch && typeMatch;
  });

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
            {/* <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-white/20 mb-6">
              📅 Past Events
            </span> */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Event History
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our past events and see the impact we've made in our community
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
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
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Tabs value={selectedSemester} onValueChange={setSelectedSemester} className="w-full mb-8">
              <TabsList className="grid grid-cols-4 lg:w-1/2 mx-auto bg-white shadow-lg h-auto">
                {semesters.map((semester) => (
                  <TabsTrigger key={semester} value={semester} className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs md:text-sm font-bold md:font-semibold px-2 md:px-4">
                    {semester}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap justify-center gap-3">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={type === selectedType ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full ${type === selectedType ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50 hover:border-blue-300'}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced Events Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 0.1}>
                <Card 
                  className="card-gradient overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={event.image.src} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-white text-sm font-medium">{event.rating}</span>
                    </div>
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
                        {event.attendees} attendees
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

                    {/* Event Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3 text-sm">Highlights:</h4>
                      <ul className="text-xs text-gray-600 space-y-2">
                        {event.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full hover:bg-blue-50 hover:border-blue-300 group-hover:scale-105 transition-all duration-300">
                      View Details
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
                  No events found for the selected filters. Try adjusting your search criteria.
                </p>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        {/* Background decorative elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div> */}
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't Miss Future Events
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Stay updated on our upcoming workshops, volunteering opportunities, and networking events.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Calendar className="mr-3 h-6 w-6" />
                View Upcoming Events
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-5 rounded-xl border-2 border-white text-blue-700 hover:bg-white hover:text-blue-700 font-semibold hover:scale-105 transition-all duration-300"
              >
                <Heart className="mr-3 h-6 w-6" />
                Join IHSAN
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default PastEvents;