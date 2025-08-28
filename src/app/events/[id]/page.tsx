'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft,
  CheckCircle,
  Star,
  Mail,
  Phone
} from 'lucide-react';
import Link from 'next/link';

// Import the events data (we'll need to move this to a shared file later)
const events = [
  // January 2025 Events
  {
    id: 1,
    title: "Medical Skills Workshop",
    date: "2025-01-15",
    time: "6:00 PM",
    location: "Student Union Building, Room 2.304",
    type: "Workshop",
    spots: 25,
    spotsRemaining: 18,
    description: "Learn essential medical skills including vital signs, basic suturing, and patient communication.",
    longDescription: "Join us for an intensive hands-on workshop where you'll learn fundamental medical skills that are essential for any healthcare career. This workshop covers vital signs measurement, basic suturing techniques, patient communication strategies, and medical terminology. Perfect for pre-med students, nursing students, and anyone interested in healthcare.",
    instructor: "Dr. Sarah Johnson, MD",
    requirements: "No prior experience required. Bring comfortable clothing for hands-on activities.",
    whatToBring: "Comfortable clothing, notebook, pen",
    contactEmail: "events@ihsan.org",
    contactPhone: "(555) 123-4567"
  },
  {
    id: 2,
    title: "Healthcare Career Fair",
    date: "2025-01-22",
    time: "10:00 AM",
    location: "Activities Center",
    type: "Career",
    spots: 100,
    spotsRemaining: 45,
    description: "Meet with healthcare professionals and learn about different career paths in medicine.",
    longDescription: "Connect with healthcare professionals from various specialties including medicine, nursing, pharmacy, physical therapy, and more. Learn about different career paths, educational requirements, and job opportunities. Network with potential mentors and get advice on your healthcare journey.",
    instructor: "Various Healthcare Professionals",
    requirements: "Open to all students interested in healthcare careers",
    whatToBring: "Resume, business cards, professional attire",
    contactEmail: "careers@ihsan.org",
    contactPhone: "(555) 123-4568"
  },
  {
    id: 3,
    title: "Community Health Screening",
    date: "2025-01-29",
    time: "9:00 AM",
    location: "Dallas Community Center",
    type: "Service",
    spots: 15,
    spotsRemaining: 8,
    description: "Volunteer at a community health screening event serving underserved populations.",
    longDescription: "Make a difference in our community by volunteering at our health screening event. Help provide basic health screenings including blood pressure, glucose testing, and health education to underserved populations. This is a great opportunity to gain hands-on experience while serving the community.",
    instructor: "Community Health Team",
    requirements: "Basic training will be provided on-site",
    whatToBring: "Comfortable clothing, closed-toe shoes",
    contactEmail: "volunteer@ihsan.org",
    contactPhone: "(555) 123-4569"
  }
];

const EventPage = ({ params }: { params: { id: string } }) => {
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    phone: '',
    dietaryRestrictions: '',
    specialRequests: ''
  });
  const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);

  const event = events.find(e => e.id === parseInt(params.id));

  if (!event) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-green-100 text-green-800 border-green-500";
      case "Guest Speaker":
        return "bg-purple-100 text-purple-800 border-purple-500";
      case "Service":
        return "bg-orange-100 text-orange-800 border-orange-500";
      case "Fundraising":
        return "bg-red-100 text-red-800 border-red-500";
      case "Research":
        return "bg-indigo-100 text-indigo-800 border-indigo-500";
      case "Career":
        return "bg-teal-100 text-teal-800 border-teal-500";
      default:
        return "bg-blue-100 text-blue-800 border-blue-500";
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the RSVP data to your backend
    console.log('RSVP submitted:', rsvpForm);
    setIsRsvpSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setRsvpForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </Button>
            
            <Badge className={`mb-4 ${getEventTypeColor(event.type)} border-0`}>
              {event.type}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{event.spotsRemaining} spots remaining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About This Event</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {event.longDescription}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Instructor</h3>
                    <p className="text-gray-700">{event.instructor}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Requirements</h3>
                    <p className="text-gray-700">{event.requirements}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">What to Bring</h3>
                    <p className="text-gray-700">{event.whatToBring}</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* RSVP Section */}
            <div className="lg:col-span-1">
              <ScrollAnimation delay={0.2}>
                <Card className="p-6 sticky top-24">
                  {!isRsvpSubmitted ? (
                    <>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">RSVP for This Event</h3>
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-700">Available Spots:</span>
                          <span className="font-semibold text-blue-900">{event.spotsRemaining} / {event.spots}</span>
                        </div>
                      </div>

                      <form onSubmit={handleRsvpSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={rsvpForm.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={rsvpForm.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={rsvpForm.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="dietary">Dietary Restrictions</Label>
                          <Input
                            id="dietary"
                            value={rsvpForm.dietaryRestrictions}
                            onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                            placeholder="Vegetarian, allergies, etc."
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="requests">Special Requests</Label>
                          <Textarea
                            id="requests"
                            value={rsvpForm.specialRequests}
                            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                            placeholder="Any special accommodations needed"
                            className="mt-1"
                            rows={3}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          disabled={event.spotsRemaining === 0}
                        >
                          {event.spotsRemaining === 0 ? 'Event Full' : 'RSVP Now'}
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-900 mb-2">RSVP Confirmed!</h3>
                      <p className="text-green-700 mb-4">
                        Thank you for your RSVP. We'll send you a confirmation email with event details.
                      </p>
                      <Button 
                        onClick={() => setIsRsvpSubmitted(false)}
                        variant="outline"
                        className="w-full"
                      >
                        RSVP for Another Person
                      </Button>
                    </div>
                  )}
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Questions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Email Us</h3>
                <p className="text-gray-600">{event.contactEmail}</p>
              </Card>
              <Card className="p-6 text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Call Us</h3>
                <p className="text-gray-600">{event.contactPhone}</p>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default EventPage;
