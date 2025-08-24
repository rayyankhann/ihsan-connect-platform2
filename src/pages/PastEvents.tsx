'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  ArrowRight,
  Star
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
    type: "Career",
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
    type: "Volunteering",
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
    type: "Workshop",
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
    type: "Career",
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
    type: "Academic",
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
const eventTypes = ["All", "Workshop", "Volunteering", "Career", "Academic", "Fundraising"];

const PastEvents = () => {
  const [selectedSemester, setSelectedSemester] = React.useState("All");
  const [selectedType, setSelectedType] = React.useState("All");

  const filteredEvents = pastEvents.filter(event => {
    const semesterMatch = selectedSemester === "All" || event.semester === selectedSemester;
    const typeMatch = selectedType === "All" || event.type === selectedType;
    return semesterMatch && typeMatch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Past Events
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrating our community's achievements and memorable experiences
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="card-gradient p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </Card>
            <Card className="card-gradient p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Total Attendees</div>
            </Card>
            <Card className="card-gradient p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Workshop Sessions</div>
            </Card>
            <Card className="card-gradient p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Community Members Served</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedSemester} onValueChange={setSelectedSemester} className="w-full mb-6">
            <TabsList className="grid grid-cols-4 lg:w-1/2 mx-auto">
              {semesters.map((semester) => (
                <TabsTrigger key={semester} value={semester}>
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
                className="rounded-full"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Card 
                key={event.id}
                className="card-gradient overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="text-white text-sm font-medium">{event.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="font-medium">
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
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

                  {/* Event Highlights */}
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2 text-sm">Highlights:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {event.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No events found for the selected filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Don't Miss Future Events
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay updated on our upcoming workshops, volunteering opportunities, and networking events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-xl">
              <a href="/events">
                View Upcoming Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-xl">
              <a href="/membership">
                Join IHSAN
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastEvents;