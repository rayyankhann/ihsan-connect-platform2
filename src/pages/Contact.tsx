'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
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
  Heart
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Primary contact for all inquiries",
    contact: "ihsanhealthcareutd@gmail.com",
    href: "mailto:ihsanhealthcareutd@gmail.com"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    description: "Stay updated with our latest activities",
    contact: "@ihsanhealthcareutd",
    href: "https://www.instagram.com/ihsanhealthcareutd/"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find us on campus",
    contact: "UT Dallas Campus",
    href: "#"
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "When our leadership is available",
    contact: "Mon-Fri: 2:00 PM - 5:00 PM",
    href: "#"
  }
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
    color: "from-primary to-accent"
  },
  {
    icon: Calendar,
    title: "Event RSVP",
    description: "Register for events",
    href: "/events",
    color: "from-accent to-primary"
  },
  {
    icon: Heart,
    title: "Volunteer",
    description: "Get involved",
    href: "/events",
    color: "from-primary to-primary-hover"
  }
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
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="card-gradient p-6 text-center cursor-pointer hover:scale-105 transition-transform animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => method.href !== "#" && window.open(method.href, '_blank')}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {method.contact}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger>
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
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent text-lg py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="card-gradient p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  {quickActions.map((action) => (
                    <a
                      key={action.title}
                      href={action.href}
                      className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{action.title}</p>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="card-gradient p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center mr-2 group-hover:scale-110 transition-transform`}>
                        <social.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{social.name}</span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Response Time */}
              <Card className="card-gradient p-6">
                <div className="flex items-center mb-3">
                  <MessageCircle className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Response Time
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  We typically respond to inquiries within:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">General Inquiries</span>
                    <Badge variant="secondary">24-48 hours</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Membership</span>
                    <Badge variant="secondary">Same day</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Urgent Matters</span>
                    <Badge variant="secondary">2-4 hours</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How can I join IHSAN?
              </h3>
              <p className="text-muted-foreground">
                You can join by filling out our membership form on the Membership page. 
                We welcome all UT Dallas students interested in healthcare careers.
              </p>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Are there membership fees?
              </h3>
              <p className="text-muted-foreground">
                We offer both free Student Membership and Active Membership ($25/semester) 
                with additional benefits. Choose what works best for you.
              </p>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Can non-pre-health students join?
              </h3>
              <p className="text-muted-foreground">
                While our focus is on pre-health students, we welcome anyone interested 
                in healthcare, community service, and professional development.
              </p>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How often do you meet?
              </h3>
              <p className="text-muted-foreground">
                We have general meetings twice a month, plus various workshops, 
                volunteering opportunities, and social events throughout the semester.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help and answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl"
              onClick={() => window.location.href = 'mailto:ihsanhealthcareutd@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://www.instagram.com/ihsanhealthcareutd/', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;