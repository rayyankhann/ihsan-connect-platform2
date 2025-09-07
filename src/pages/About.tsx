'use client'

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Heart, 
  Users, 
  Target, 
  Eye,
  Mail,
  Linkedin,
  GraduationCap,
  Stethoscope,
  BookOpen,
  ArrowRight,
  Handshake,
  Globe,
  Award,
  Calendar,
  MapPin
} from 'lucide-react';

const leadership = [
  {
    name: "Sarah Ahmed",
    position: "President",
    major: "Biology",
    year: "Senior",
    bio: "Passionate about community health and pre-med student mentorship. Leading IHSAN's vision for inclusive healthcare education.",
    contact: {
      email: "president@ihsan-utd.com",
      linkedin: "#"
    }
  },
  {
    name: "Michael Rodriguez",
    position: "Vice President",
    major: "Biochemistry",
    year: "Junior",
    bio: "Focused on organizing educational workshops and building partnerships with healthcare professionals.",
    contact: {
      email: "vp@ihsan-utd.com",
      linkedin: "#"
    }
  },
  {
    name: "Jennifer Park",
    position: "Secretary",
    major: "Neuroscience",
    year: "Sophomore",
    bio: "Dedicated to maintaining strong communication within our community and documenting our impact.",
    contact: {
      email: "secretary@ihsan-utd.com",
      linkedin: "#"
    }
  },
  {
    name: "David Chen",
    position: "Treasurer",
    major: "Public Health",
    year: "Junior",
    bio: "Managing our finances to ensure sustainable programming and maximum community impact.",
    contact: {
      email: "treasurer@ihsan-utd.com",
      linkedin: "#"
    }
  },
  {
    name: "Aisha Patel",
    position: "Events Coordinator",
    major: "Psychology",
    year: "Senior",
    bio: "Organizing engaging events that bring together students, professionals, and community members.",
    contact: {
      email: "events@ihsan-utd.com",
      linkedin: "#"
    }
  },
  {
    name: "Omar Hassan",
    position: "Community Outreach Chair",
    major: "Health Studies",
    year: "Junior",
    bio: "Building bridges between IHSAN and the broader Dallas healthcare community through service.",
    contact: {
      email: "outreach@ihsan-utd.com",
      linkedin: "#"
    }
  }
];

const milestones = [
  {
    year: "2019",
    title: "IHSAN Founded",
    description: "Established by a group of pre-health students with a vision for community-centered healthcare education."
  },
  {
    year: "2020",
    title: "First Virtual Workshop Series",
    description: "Adapted to remote learning with successful virtual medical skills workshops during the pandemic."
  },
  {
    year: "2021",
    title: "Community Partnership Program",
    description: "Launched partnerships with local healthcare providers for enhanced volunteering opportunities."
  },
  {
    year: "2022",
    title: "Alumni Mentorship Network",
    description: "Created formal mentorship program connecting current students with healthcare professionals."
  },
  {
    year: "2023",
    title: "Scholarship Fund Established",
    description: "Launched annual scholarship program to support pre-health students with financial need."
  },
  {
    year: "2024",
    title: "300+ Members Strong",
    description: "Reached milestone of 300+ active members across all pre-health tracks."
  }
];

const stats = [
  { number: "300+", label: "Active Members", icon: Users },
  { number: "50+", label: "Events Hosted", icon: Calendar },
  { number: "25+", label: "Community Partners", icon: Handshake },
  { number: "$50K+", label: "Funds Raised", icon: Award }
];

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // Detect Firefox
    const isFirefoxBrowser = /Firefox/.test(navigator.userAgent);
    setIsFirefox(isFirefoxBrowser);
  }, []);

  return (
    <div className="min-h-screen pt-20 browser-compat firefox-fix"
         style={{ paddingTop: 'calc(5rem + env(safe-area-inset-top))' }}>
      {/* Header */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Decorative Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 rounded-full bg-[#2563eb] blur-3xl"></div>
          </div>
          
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-white/20 mb-6">
              🏥 About IHSAN
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story & Mission
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building the next generation of healthcare professionals through education, 
              community service, and leadership development
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

      {/* Tabbed Content Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            {isFirefox ? (
              // Firefox fallback - simple button navigation
              <div className="w-full">
                <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 lg:w-1/2 mx-auto bg-white shadow-lg mb-16 p-1 rounded-lg">
                  <button 
                    onClick={() => setActiveTab("mission")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "mission" 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Mission & Vision
                  </button>
                  <button 
                    onClick={() => setActiveTab("leadership")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "leadership" 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Leadership
                  </button>
                  <button 
                    onClick={() => setActiveTab("journey")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "journey" 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Our Journey
                  </button>
                  <button 
                    onClick={() => setActiveTab("values")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "values" 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Core Values
                  </button>
                </div>
              </div>
            ) : (
              // Normal tabs for other browsers
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 lg:w-1/2 mx-auto bg-white shadow-lg mb-16">
                  <TabsTrigger value="mission" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Mission & Vision
                  </TabsTrigger>
                  <TabsTrigger value="leadership" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Leadership
                  </TabsTrigger>
                  <TabsTrigger value="journey" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Our Journey
                  </TabsTrigger>
                  <TabsTrigger value="values" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Core Values
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            )}

            {/* Tab Content */}
            {activeTab === "mission" && (
              <div className="tab-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-6">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Our Mission</h2>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      IHSAN for Healthcare was created to uplift students with plans to pursue healthcare post-graduation. 
                      Our primary purpose is to provide students with job, volunteering, and leadership opportunities 
                      meant to educate them in their field, increase their involvement, and promote their applications. 
                      Our secondary purpose is to aid the healthcare system in third-world countries by raising 
                      awareness and fundraising money to provide them with necessary supplies and aid as needed.
                    </p>
                  </div>
                  <Card className="card-gradient p-10 shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-900 mb-4">
                        "Ihsan" - Excellence in Worship
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Our name reflects our commitment to excellence, compassion, and 
                        conscious service to humanity through healthcare.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <Card className="card-gradient p-10 shadow-xl hover:scale-105 transition-transform duration-300 order-2 lg:order-1">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
                        <Stethoscope className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-900 mb-4">
                        Healthcare Excellence
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Preparing the next generation of healthcare professionals through 
                        hands-on learning and professional development.
                      </p>
                    </div>
                  </Card>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-6">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Our Vision</h2>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Through our core principles, IHAUTD strives to create a nurturing and empowering environment 
                      where pre-health students can grow academically, spiritually, and personally while making a 
                      positive impact on their communities and society at large. We aspire to embody the teachings 
                      of religion in our pursuit of a healthier and more compassionate world.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Core Values Tab */}
            {activeTab === "values" && (
              <div className="tab-content">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                    Our Core Values
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    The principles that guide everything we do and shape our community
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: GraduationCap,
                      title: "Personal Development",
                      description: "We provide opportunities through MCAT workshops, research opportunities, and networking events that equip our members with the skills needed to succeed in healthcare.",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: Users,
                      title: "Empowerment",
                      description: "We aim to empower pre-health students by fostering an environment that encourages personal and academic growth through mentorship, resources, and support.",
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: Heart,
                      title: "Community",
                      description: "We seek to build a strong and supportive community of like-minded individuals who share a passion for healthcare and a commitment to upholding religious values.",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: Handshake,
                      title: "Service",
                      description: "Inspired by the teachings of religion, we organize and participate in clinical and non-clinical volunteering activities that promote health and well-being, exemplifying charity and compassion.",
                      color: "from-orange-500 to-red-500"
                    },
                    {
                      icon: Target,
                      title: "Ethical Leadership",
                      description: "We aim to nurture future healthcare professionals who exemplify the highest ethical standards, reflecting the values of integrity, honesty, and compassion in their practice.",
                      color: "from-indigo-500 to-purple-500"
                    },
                    {
                      icon: Globe,
                      title: "Global Healthcare Aid",
                      description: "Supporting healthcare systems in third-world countries by raising awareness and fundraising money to provide necessary supplies and aid as needed.",
                      color: "from-teal-500 to-cyan-500"
                    }
                  ].map((value, index) => (
                    <ScrollAnimation key={value.title} delay={index * 0.1}>
                      <Card className="card-gradient p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer group">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            )}

            {/* Leadership Tab */}
            {activeTab === "leadership" && (
              <div className="tab-content">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                    Leadership Team
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Meet the dedicated students leading IHSAN into the future
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {leadership.map((leader, index) => (
                    <ScrollAnimation key={leader.name} delay={index * 0.1}>
                      <Card 
                        className="card-gradient p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                      >
                        <Avatar className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <AvatarFallback className="text-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">
                          {leader.name}
                        </h3>
                        <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                          {leader.position}
                        </Badge>
                        <p className="text-gray-600 font-medium mb-3">
                          {leader.major} • {leader.year}
                        </p>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {leader.bio}
                        </p>
                        
                        <div className="flex justify-center space-x-3">
                          <Button size="sm" variant="outline" className="hover:bg-blue-50 hover:border-blue-300">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-blue-50 hover:border-blue-300">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            )}

            {/* Journey Tab */}
            {activeTab === "journey" && (
              <div className="tab-content">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                    Our Journey
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Key milestones in IHSAN's growth and impact
                  </p>
                </div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                  
                  <div className="space-y-16">
                    {milestones.map((milestone, index) => (
                      <ScrollAnimation key={milestone.year} delay={index * 0.1}>
                        <div 
                          className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                          <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                            <Card className="card-gradient p-8 hover:scale-105 transition-transform duration-300 shadow-lg">
                              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                                {milestone.year}
                              </Badge>
                              <h3 className="text-xl font-bold text-blue-900 mb-3">
                                {milestone.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {milestone.description}
                              </p>
                            </Card>
                          </div>
                          
                          {/* Timeline dot */}
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-white shadow-lg z-10"></div>
                          
                          <div className="w-1/2"></div>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Become part of a community that's shaping the future of healthcare
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
                Contact Leadership
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;