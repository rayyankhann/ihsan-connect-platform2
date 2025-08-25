import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';
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
  Award,
  Quote
} from 'lucide-react';
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
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Empowerment",
    description: "Foster academic growth through mentorship, resources, and support for pre-health students",
    icon: Award,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Community",
    description: "Build a supportive community of healthcare-passionate students sharing religious values",
    icon: Users,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Service",
    description: "Serve local and global communities through clinical and non-clinical volunteering activities",
    icon: Heart,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Ethical Leadership",
    description: "Nurture future healthcare professionals with integrity, honesty, and compassion",
    icon: Target,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Global Impact",
    description: "Aid healthcare systems in third-world countries through awareness and fundraising",
    icon: Globe,
    color: "from-cyan-500 to-blue-600"
  }
];

const Index = () => {
  const nextEvent = upcomingEvents[0];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[80vh] hero-gradient flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 rounded-full bg-[#2563eb] blur-3xl"></div>
          </div>
          
          {/* Title with decorative underline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Welcome to </span>
              <span className="text-white">IHSAN</span>
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              IHSAN Healthcare Association at the University of Texas at Dallas
            </p>
            <p className="text-lg text-white/80 mt-2">
              Open to All Healthcare-Interested Students
            </p>
          </div>
            
            <div className="flex items-center justify-center gap-8 mb-8 text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-base">$10 Membership</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-base">Open to All Students</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-base">Healthcare Focus</span>
              </div>
            </div>
            
            <div className="flex justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Join IHSAN - Support Charity!
              </Button>
            </div>
            
            {/* Next Event Banner */}
            {nextEvent && (
              <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <Card className="inline-flex items-center space-x-6 p-6 bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6" />
                    <span className="text-base font-medium">Next Event</span>
                  </div>
                  <div className="h-6 w-px bg-white/30"></div>
                  <div className="text-left">
                    <p className="font-medium text-base">{nextEvent.title}</p>
                    <p className="text-sm opacity-90">
                      {new Date(nextEvent.date).toLocaleDateString()} at {nextEvent.time}
                    </p>
                  </div>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/events">
                      Join Event
                    </Link>
                  </Button>
                </Card>
              </div>
            )}
          </div>
        </section>



      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8">
              Our Mission
            </h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <p className="text-2xl text-gray-700 leading-relaxed">
                <strong className="text-blue-900">IHSAN for Healthcare</strong> was created to uplift students with plans to pursue healthcare post-graduation. 
                Our primary purpose is to provide students with job, volunteering, and leadership opportunities 
                meant to educate them in their field, increase their involvement, and promote their applications.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our secondary purpose is to aid the healthcare system in third-world countries by raising 
                awareness and fundraising money to provide them with necessary supplies and aid as needed.
              </p>
            </div>
            <div className="mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-xl border-blue-400 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-4">
                <Link href="/about">
                  Learn More About Our Values
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Fundraising Goal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Support Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Help us reach our fundraising goal to support healthcare initiatives and provide opportunities for students
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#2563eb] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">$</span>
                </div>
                <h3 className="text-2xl font-bold text-[#2563eb]">Fundraising Goal</h3>
              </div>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto mb-6">
                <div className="flex justify-between text-lg mb-3">
                  <span className="text-gray-700 font-semibold">Raised: $35,000</span>
                  <span className="text-gray-700 font-semibold">Goal: $50,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '70%' }}
                  ></div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-lg font-bold text-[#2563eb]">70% Complete</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Your donation helps us provide healthcare opportunities, support students, and make a difference in communities worldwide.
              </p>
              
              <Button size="lg" className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300" asChild>
                <Link href="/donate">
                  Donate Now
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8">
                Our Core Objectives
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Six pillars that guide our mission to develop ethical healthcare professionals
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreObjectives.map((objective, index) => (
              <ScrollAnimation key={objective.title} delay={index * 0.1}>
                <Card 
                  className="card-gradient p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer group shadow-lg"
                >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${objective.color} flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <objective.icon className="w-10 h-10 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {objective.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {objective.description}
                </p>
              </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Upcoming Events
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Workshops, volunteering opportunities, and networking events - open to all students
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 0.1}>
                <Card 
                  className="card-gradient overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer group"
                >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="font-medium">
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-accent font-medium">
                      <Users className="w-4 h-4 mr-1" />
                      {event.spots}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
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
                  
                  <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                    <Link href="/events">
                      Join Event
                    </Link>
                  </Button>
                </div>
              </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.3}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Get Involved
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Join our open community of healthcare-passionate students
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="card-gradient p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <Link href="/membership" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <UserPlus className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Join IHSAN
                </h3>
                <p className="text-muted-foreground text-sm">
                  $10 membership - supports charity initiatives
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <Link href="/events" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Attend Events
                </h3>
                <p className="text-muted-foreground text-sm">
                  Workshops, volunteering & networking
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <Link href="/blog" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Quote className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Read Testimonials
                </h3>
                <p className="text-muted-foreground text-sm">
                  Member success stories & experiences
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
              <Link href="/donate" className="block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Globe className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110" />
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
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Healthcare Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join our open community and connect with like-minded students pursuing healthcare careers
            </p>
          </ScrollAnimation>
                      <ScrollAnimation delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/membership">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Join Today - Support Charity
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="text-lg px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10 bg-black/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/contact">
                    <Handshake className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Index;
