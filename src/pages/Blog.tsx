'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  User, 
  Calendar, 
  ArrowRight,
  BookOpen,
  Heart,
  MessageCircle,
  Award,
  Globe,
  PenTool,
  Star,
  Quote
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IHSAN Alumni, Medical Student",
    date: "2024-12-15",
    rating: 5,
    category: "Medical School",
    tags: ["Pre-Med", "MCAT", "Applications"],
    testimonial: "IHSAN was instrumental in my journey to medical school. The workshops, networking opportunities, and mentorship I received here gave me the confidence and skills I needed to succeed. The community is incredibly supportive and the hands-on experiences were invaluable.",
    likes: 42,
    comments: 12
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "IHSAN Member, Senior",
    date: "2024-12-10",
    rating: 5,
    category: "Volunteering",
    tags: ["Community Service", "Healthcare Access"],
    testimonial: "Volunteering through IHSAN has been one of the most rewarding experiences of my college career. I've learned so much about healthcare accessibility and the impact we can make in our community. The leadership opportunities have helped me grow both personally and professionally.",
    likes: 28,
    comments: 8
  },
  {
    id: 3,
    name: "Dr. Amanda Rodriguez",
    role: "Faculty Advisor",
    date: "2024-12-05",
    rating: 5,
    category: "Research",
    tags: ["Research", "Academic", "Opportunities"],
    testimonial: "As a faculty advisor, I've seen firsthand how IHSAN transforms students' academic and professional trajectories. The organization provides exceptional opportunities for research, networking, and skill development that are crucial for healthcare careers.",
    likes: 35,
    comments: 15
  },
  {
    id: 4,
    name: "Jennifer Park",
    role: "IHSAN Alumni, Physician",
    date: "2024-11-28",
    rating: 5,
    category: "Career",
    tags: ["Networking", "Professional Development"],
    testimonial: "The networking skills I developed through IHSAN have been essential in my medical career. The organization taught me how to build meaningful professional relationships and gave me access to mentors who guided my path to becoming a physician.",
    likes: 31,
    comments: 9
  }
];

const categories = ["All", "Medical School", "Volunteering", "Research", "Career"];

const stats = [
  { number: "50+", label: "Member Testimonials", icon: Quote },
  { number: "1,200+", label: "Total Views", icon: Heart },
  { number: "25+", label: "Community Members", icon: User },
  { number: "4.9", label: "Average Rating", icon: Star }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20 browser-compat firefox-fix">
      {/* Header */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 rounded-full bg-[#2563eb] blur-3xl"></div>
          </div>
          
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-white/20 mb-6">
              💬 Member Stories
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IHSAN Testimonials
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real experiences and success stories from our IHSAN community members
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

      {/* Enhanced Featured Testimonial */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 text-base">
                Featured Story
              </Badge>
            </div>
            <Card className="card-gradient overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-12">
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-6">
                    {testimonials[0].category}
                  </Badge>
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                    "{testimonials[0].testimonial}"
                  </h2>
                  
                  <div className="flex items-center mb-8">
                    <Avatar className="mr-4 w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">
                        {testimonials[0].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-blue-900">{testimonials[0].name}</p>
                      <p className="text-gray-600">{testimonials[0].role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        {new Date(testimonials[0].date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-red-500" />
                        {testimonials[0].likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2 text-blue-500" />
                        {testimonials[0].comments}
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:scale-105 transition-all duration-300 shadow-lg">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Quote className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced All Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                More Member Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover more experiences and insights from our community
              </p>
            </div>
          </ScrollAnimation>

          {/* Enhanced Category Filter */}
          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full ${category === "All" ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50 hover:border-blue-300'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Enhanced Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} delay={index * 0.1}>
                <Card 
                  className="card-gradient overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-4">
                      {testimonial.category}
                    </Badge>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-4 leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </p>

                    <div className="flex items-center mb-6">
                      <Avatar className="mr-4 w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-blue-900 text-sm">{testimonial.name}</p>
                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        {new Date(testimonial.date).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-500" />
                          {testimonial.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                          {testimonial.comments}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="hover:bg-blue-50 hover:text-blue-700">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="text-center mt-16">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-xl hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all duration-300"
              >
                Load More Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
              Share Your Story
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Have an experience to share with the IHSAN community? 
              We'd love to feature your testimonial and inspire others.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <PenTool className="mr-3 h-6 w-6" />
              Submit Your Testimonial
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;