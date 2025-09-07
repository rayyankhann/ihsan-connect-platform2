'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Users, 
  Stethoscope, 
  GraduationCap, 
  Heart,
  Check,
  Star,
  BookOpen,
  Calendar,
  UserPlus,
  Award,
  Globe,
  Target,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with healthcare professionals, alumni, and peers",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Stethoscope,
    title: "Hands-on Experience",
    description: "Participate in medical workshops and skill-building sessions",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Community Service",
    description: "Volunteer at health fairs and community outreach programs",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: GraduationCap,
    title: "Career Preparation",
    description: "Resume reviews, interview prep, and career guidance",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access to study materials, MCAT prep, and academic support",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Member-only workshops, social events, and guest speakers",
    color: "from-teal-500 to-cyan-500"
  }
];

const membershipInfo = {
  name: "IHSAN Member",
        price: "$15",
  period: "Open to All UT Dallas Students",
  features: [
    "Access to all workshops and events",
    "MCAT prep and study groups", 
    "Volunteer opportunities (clinical & non-clinical)",
    "Networking with healthcare professionals",
    "Leadership development opportunities",
    "Research opportunity connections",
    "Career mentorship programs",
    "Global healthcare awareness initiatives",
    "Community service projects",
    "Pre-health academic support"
  ],
      description: "Join our college club for all healthcare-interested students. Your $15 membership fee directly supports our charity initiatives and community health programs."
};

const stats = [
  { number: "300+", label: "Active Members", icon: Users },
  { number: "50+", label: "Events This Year", icon: Calendar },
          { number: "$15", label: "Membership Fee", icon: Star },
  { number: "25+", label: "Healthcare Partners", icon: Stethoscope }
];

const Membership = () => {
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
              💝 Charity-Focused Membership
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Become part of a community dedicated to healthcare excellence and community service
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

      {/* Enhanced Benefits */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Membership Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our healthcare community
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} delay={index * 0.1}>
                <Card className="card-gradient p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer group">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Membership Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                $15 Membership - Open to All
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No barriers - just passionate students pursuing healthcare careers together
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient p-12 relative ring-2 ring-blue-500 shadow-2xl hover:scale-105 transition-transform duration-300">
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-6 py-2 text-base">
                <Star className="w-5 h-5 mr-2" />
                Supporting Charity Initiatives
              </Badge>
              
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-blue-900 mb-4">
                  {membershipInfo.name}
                </h3>
                <div className="text-6xl font-bold text-green-600 mb-4">
                  {membershipInfo.price}
                </div>
                <div className="text-xl text-gray-600 mb-6">
                  {membershipInfo.period}
                </div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  {membershipInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {membershipInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xl py-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                <UserPlus className="mr-3 h-6 w-6" />
                Join IHSAN Today!
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Signup Form */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to join IHSAN - $15 registration fee supports charity initiatives!
              </p>
            </div>
          </ScrollAnimation>

          <Card className="card-gradient p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-semibold mb-2 block">
                    First Name
                  </Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name" 
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-semibold mb-2 block">
                    Last Name
                  </Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name" 
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                  Email Address
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="major" className="text-gray-700 font-semibold mb-2 block">
                    Major
                  </Label>
                  <Input 
                    id="major" 
                    placeholder="e.g., Biology, Chemistry" 
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="gradYear" className="text-gray-700 font-semibold mb-2 block">
                    Expected Graduation Year
                  </Label>
                  <Input 
                    id="gradYear" 
                    placeholder="e.g., 2026" 
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold mb-2 block">
                  Phone Number (Optional)
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(555) 123-4567" 
                  className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xl py-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                <UserPlus className="mr-3 h-6 w-6" />
                Join IHSAN - Support Charity
              </Button>
            </form>
          </Card>
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
              Start Your Healthcare Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join 300+ students already making a difference in healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <UserPlus className="mr-3 h-6 w-6" />
                Join Now - Support Charity!
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-5 rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold hover:scale-105 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Membership;