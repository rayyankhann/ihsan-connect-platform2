import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  BookOpen, 
  UserPlus,
  ArrowRight,
  Stethoscope,
  GraduationCap,
  Handshake,
  Globe,
  Target,
  Award
} from 'lucide-react';
import heroImage from '@/assets/hero-event.jpg';
import volunteeringImage from '@/assets/volunteering-event.jpg';
import networkingImage from '@/assets/networking-event.jpg';

const upcomingEvents = [
  {
    id: 1,
    title: "MCAT Prep Workshop",
    date: "2025-01-15",
    time: "6:00 PM",
    location: "Student Union Building, Room 2.304",
    type: "Workshop",
    image: volunteeringImage,
    spots: "Open to All"
  },
  {
    id: 2,
    title: "Healthcare Career Fair & Networking",
    date: "2025-01-22",
    time: "10:00 AM",
    location: "Activities Center",
    type: "Career",
    image: networkingImage,
    spots: "Open to All"
  },
  {
    id: 3,
    title: "Community Health Screening Volunteer",
    date: "2025-01-29",
    time: "9:00 AM",
    location: "Dallas Community Center",
    type: "Volunteering",
    image: volunteeringImage,
    spots: "Open to All"
  }
];

const coreObjectives = [
  {
    title: "Personal Development",
    description: "MCAT workshops, research opportunities, and networking events to equip members with essential healthcare skills",
    icon: GraduationCap,
    color: "from-primary to-primary-hover"
  },
  {
    title: "Empowerment",
    description: "Foster academic growth through mentorship, resources, and support for pre-health students",
    icon: Award,
    color: "from-accent to-accent-hover"
  },
  {
    title: "Community",
    description: "Build a supportive community of healthcare-passionate students sharing religious values",
    icon: Users,
    color: "from-primary to-accent"
  },
  {
    title: "Service",
    description: "Serve local and global communities through clinical and non-clinical volunteering activities",
    icon: Heart,
    color: "from-accent to-primary"
  },
  {
    title: "Ethical Leadership",
    description: "Nurture future healthcare professionals with integrity, honesty, and compassion",
    icon: Target,
    color: "from-primary to-accent"
  },
  {
    title: "Global Impact",
    description: "Aid healthcare systems in third-world countries through awareness and fundraising",
    icon: Globe,
    color: "from-accent to-primary"
  }
];

const Index = () => {
  const nextEvent = upcomingEvents[0];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Next Event Banner */}
          {nextEvent && (
            <div className="mb-8 animate-fade-up">
              <Card className="inline-flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md border-white/20 text-white">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Next Event</span>
                </div>
                <div className="h-4 w-px bg-white/30"></div>
                <div className="text-left">
                  <p className="font-medium">{nextEvent.title}</p>
                  <p className="text-sm opacity-90">
                    {new Date(nextEvent.date).toLocaleDateString()} at {nextEvent.time}
                  </p>
                </div>
                <Button size="sm" variant="secondary" asChild>
                  <Link href="/events">
                    Join Event
                  </Link>
                </Button>
              </Card>
            </div>
          )}

          {/* Main Hero Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient-primary bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                IHSAN
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Ihsan Healthcare Association at the University of Texas at Dallas
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Free & Open to All Healthcare-Interested Students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild 
                className="btn-hero text-lg px-8 py-4 rounded-xl"
              >
                <Link href="/membership">
                  Join IHSAN - It's Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="text-lg px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/about">
                  Learn Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Globe className="w-10 h-10 text-white" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong className="text-foreground">IHSAN for Healthcare</strong> was created to uplift students with plans to pursue healthcare post-graduation. 
                Our primary purpose is to provide students with job, volunteering, and leadership opportunities 
                meant to educate them in their field, increase their involvement, and promote their applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our secondary purpose is to aid the healthcare system in third-world countries by raising 
                awareness and fundraising money to provide them with necessary supplies and aid as needed.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link href="/about">
                  Learn More About Our Values
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six pillars that guide our mission to develop ethical healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreObjectives.map((objective, index) => (
              <Card 
                key={objective.title} 
                className="card-gradient p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${objective.color} flex items-center justify-center mx-auto mb-4`}>
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {objective.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free workshops, volunteering opportunities, and networking events - open to all students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
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
                    <div className="flex items-center text-sm text-accent font-medium">
                      <Users className="w-4 h-4 mr-1" />
                      {event.spots}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric"
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
                  
                  <Button className="w-full" asChild>
                    <Link href="/events">
                      Join Event - Free!
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our free, open community of healthcare-passionate students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient p-6 text-center group cursor-pointer">
              <Link href="/membership" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Join IHSAN
                </h3>
                <p className="text-muted-foreground text-sm">
                  Free membership - open to all students
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-6 text-center group cursor-pointer">
              <Link href="/events" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Attend Events
                </h3>
                <p className="text-muted-foreground text-sm">
                  Workshops, volunteering & networking
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-6 text-center group cursor-pointer">
              <Link href="/blog" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Read Stories
                </h3>
                <p className="text-muted-foreground text-sm">
                  Member experiences & journeys
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-6 text-center group cursor-pointer">
              <Link href="/donate" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Global Aid
                </h3>
                <p className="text-muted-foreground text-sm">
                  Support third-world healthcare
                </p>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Healthcare Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join our free, open community and connect with like-minded students pursuing healthcare careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl"
            >
              <Link href="/membership">
                <UserPlus className="mr-2 h-5 w-5" />
                Join Free Today
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="text-lg px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/contact">
                <Handshake className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
