'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  MessageCircle,
  Users,
  Calendar,
  Heart,
  ArrowRight,
  Award,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Primary contact for all inquiries",
    contact: "ihsanhealthcareutd@gmail.com",
    href: "mailto:ihsanhealthcareutd@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    description: "Stay updated with our latest activities",
    contact: "@ihsanhealthcareutd",
    href: "https://www.instagram.com/ihsanhealthcareutd/",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find us on campus",
    contact: "UT Dallas Campus",
    href: "#",
    color: "from-green-500 to-emerald-500"
  },
  // {
  //   icon: Clock,
  //   title: "Office Hours",
  //   description: "When our leadership is available",
  //   contact: "Mon-Fri: 2:00 PM - 5:00 PM",
  //   href: "#",
  //   color: "from-orange-500 to-red-500"
  // }
];

const inquiryTypes = [
  { value: "membership", label: "Membership Information" },
  { value: "events", label: "Event Questions" },
  { value: "volunteering", label: "Volunteering Opportunities" },
  { value: "partnership", label: "Partnership/Collaboration" },
  { value: "media", label: "Media/Press Inquiry" },
  { value: "general", label: "General Question" }
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/ihsanhealthcareutd/",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "#",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "#",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:ihsanhealthcareutd@gmail.com",
    color: "from-gray-600 to-gray-700"
  }
];

const quickActions = [
  {
    icon: Users,
    title: "Join IHSAN",
    description: "Become a member",
    href: "/membership",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Calendar,
    title: "Event RSVP",
    description: "Register for events",
    href: "/events",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Volunteer",
    description: "Get involved",
    href: "/events",
    color: "from-purple-500 to-pink-500"
  }
];

const stats = [
  { number: "24-48h", label: "Response Time", icon: Clock },
  { number: "300+", label: "Active Members", icon: Users },
  { number: "50+", label: "Events This Year", icon: Calendar },
  { number: "100%", label: "Free Support", icon: Heart }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
            {/* <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-white/20 mb-6">
              📞 Get In Touch
            </span> */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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

      {/* Enhanced Contact Methods */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the method that works best for you
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 items-stretch">
            {contactMethods.map((method, index) => (
              <ScrollAnimation key={method.title} delay={index * 0.1}>
                <Card 
                  className="h-full card-gradient p-8 text-center cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                  onClick={() => method.href !== "#" && window.open(method.href, '_blank')}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-semibold text-base xl:text-lg">
                    {method.contact}
                  </p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Quick Actions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <Card className="card-gradient p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-10">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-gray-700 font-semibold mb-2 block">
                        Inquiry Type
                      </Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-semibold mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Brief description of your inquiry"
                        className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xl py-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Send className="mr-3 h-6 w-6" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </ScrollAnimation>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <ScrollAnimation delay={0.2}>
                <Card className="card-gradient p-6 lg:p-4 xl:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action) => (
                      <a
                        key={action.title}
                        href={action.href}
                        className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900">{action.title}</p>
                          <p className="text-gray-600">{action.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
              </ScrollAnimation>

              {/* Social Media */}
              <ScrollAnimation delay={0.3}>
                <Card className="card-gradient p-6 lg:p-4 xl:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className={`min-w-10 min-h-10 w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-blue-900">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </Card>
              </ScrollAnimation>

              {/* Response Time */}
              {/* <ScrollAnimation delay={0.4}>
                <Card className="card-gradient p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    We typically respond to inquiries within:
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">General Inquiries</span>
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                        24-48 hours
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Membership</span>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                        Same day
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Urgent Matters</span>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                        2-4 hours
                      </Badge>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation> */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {[
              {
                question: "How can I join IHSAN?",
                answer: "You can join by filling out our membership form on the Membership page. We welcome all UT Dallas students interested in healthcare careers."
              },
              {
                question: "Are there membership fees?",
                answer: "We offer both free Student Membership and Active Membership ($25/semester) with additional benefits. Choose what works best for you."
              },
              {
                question: "Can non-pre-health students join?",
                answer: "While our focus is on pre-health students, we welcome anyone interested in healthcare, community service, and professional development."
              },
              {
                question: "How often do you meet?",
                answer: "We have general meetings twice a month, plus various workshops, volunteering opportunities, and social events throughout the semester."
              }
            ].map((faq, index) => (
              <ScrollAnimation key={faq.question} delay={index * 0.1}>
                <Card className="card-gradient p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
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
              Ready to Connect?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-10 py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.location.href = 'mailto:ihsanhealthcareutd@gmail.com'}
              >
                <Mail className="mr-3 h-6 w-6" />
                Email Us Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-5 rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://www.instagram.com/ihsanhealthcareutd/', '_blank')}
              >
                <Instagram className="mr-3 h-6 w-6" />
                Follow on Instagram
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;