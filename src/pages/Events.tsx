"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Filter,
  ArrowRight,
  Award,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

// Sample events data with dates
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
    description:
      "Learn essential medical skills including vital signs, basic suturing, and patient communication.",
  },
  {
    id: 2,
    title: "Healthcare Career Fair",
    date: "2025-01-22",
    time: "10:00 AM",
    location: "Activities Center",
    type: "Career",
    spots: 100,
    description:
      "Meet with healthcare professionals and learn about different career paths in medicine.",
  },
  {
    id: 3,
    title: "Community Health Screening",
    date: "2025-01-29",
    time: "9:00 AM",
    location: "Dallas Community Center",
    type: "Service",
    spots: 15,
    description:
      "Volunteer at a community health screening event serving underserved populations.",
  },

  // February 2025 Events
  {
    id: 4,
    title: "Guest Speaker: Dr. Sarah Johnson",
    date: "2025-02-05",
    time: "7:00 PM",
    location: "Science Building Auditorium",
    type: "Guest Speaker",
    spots: 50,
    description:
      "Join us for an inspiring talk on pediatric medicine and career development.",
  },
  {
    id: 5,
    title: "Research Symposium",
    date: "2025-02-12",
    time: "2:00 PM",
    location: "Research Center",
    type: "Research",
    spots: 30,
    description:
      "Present and discuss healthcare research projects with peers and faculty.",
  },
  {
    id: 6,
    title: "Fundraising Gala",
    date: "2025-02-20",
    time: "6:30 PM",
    location: "UT Dallas Ballroom",
    type: "Fundraising",
    spots: 200,
    description:
      "Annual fundraising event supporting our healthcare initiatives and scholarships.",
  },
  {
    id: 7,
    title: "CPR Certification Workshop",
    date: "2025-02-25",
    time: "5:00 PM",
    location: "Health Sciences Building",
    type: "Workshop",
    spots: 20,
    description: "Get certified in CPR and basic life support techniques.",
  },

  // March 2025 Events
  {
    id: 8,
    title: "Medical Ethics Seminar",
    date: "2025-03-03",
    time: "6:30 PM",
    location: "Philosophy Department",
    type: "Workshop",
    spots: 40,
    description:
      "Explore ethical dilemmas in healthcare and medical decision-making.",
  },
  {
    id: 9,
    title: "Guest Speaker: Dr. Michael Chen",
    date: "2025-03-10",
    time: "7:00 PM",
    location: "Engineering Building",
    type: "Guest Speaker",
    spots: 75,
    description: "Innovations in medical technology and future of healthcare.",
  },
  {
    id: 10,
    title: "Blood Drive",
    date: "2025-03-15",
    time: "10:00 AM",
    location: "Student Union Plaza",
    type: "Service",
    spots: 50,
    description: "Donate blood and help save lives in our community.",
  },
  {
    id: 11,
    title: "Healthcare Innovation Hackathon",
    date: "2025-03-22",
    time: "9:00 AM",
    location: "Computer Science Building",
    type: "Workshop",
    spots: 60,
    description:
      "Collaborate on innovative healthcare solutions and technology.",
  },
  {
    id: 12,
    title: "Spring Fundraising Walk",
    date: "2025-03-29",
    time: "8:00 AM",
    location: "UT Dallas Campus",
    type: "Fundraising",
    spots: 150,
    description:
      "Join our annual walkathon to raise funds for healthcare scholarships.",
  },

  // April 2025 Events
  {
    id: 13,
    title: "Medical School Application Workshop",
    date: "2025-04-05",
    time: "2:00 PM",
    location: "Career Center",
    type: "Career",
    spots: 35,
    description:
      "Learn about medical school applications, interviews, and requirements.",
  },
  {
    id: 14,
    title: "Guest Speaker: Dr. Emily Rodriguez",
    date: "2025-04-12",
    time: "6:00 PM",
    location: "Natural Science Building",
    type: "Guest Speaker",
    spots: 80,
    description:
      "Global health initiatives and international medical missions.",
  },
  {
    id: 15,
    title: "Community Garden Volunteering",
    date: "2025-04-19",
    time: "9:00 AM",
    location: "Community Garden",
    type: "Service",
    spots: 25,
    description:
      "Help maintain our community garden and learn about nutrition.",
  },
  {
    id: 16,
    title: "Healthcare Policy Research Forum",
    date: "2025-04-26",
    time: "3:00 PM",
    location: "Political Science Building",
    type: "Research",
    spots: 45,
    description:
      "Discuss current healthcare policies and their impact on communities.",
  },

  // May 2025 Events
  {
    id: 17,
    title: "Pre-Med Student Networking",
    date: "2025-05-03",
    time: "5:30 PM",
    location: "Business School",
    type: "Career",
    spots: 100,
    description:
      "Network with current medical students and healthcare professionals.",
  },
  {
    id: 18,
    title: "Guest Speaker: Dr. James Wilson",
    date: "2025-05-10",
    time: "7:00 PM",
    location: "Auditorium",
    type: "Guest Speaker",
    spots: 120,
    description: "Emergency medicine and trauma care in urban settings.",
  },
  {
    id: 19,
    title: "Mental Health Awareness Workshop",
    date: "2025-05-17",
    time: "4:00 PM",
    location: "Psychology Building",
    type: "Workshop",
    spots: 30,
    description: "Learn about mental health first aid and supporting others.",
  },
  {
    id: 20,
    title: "Healthcare Technology Research",
    date: "2025-05-24",
    time: "1:00 PM",
    location: "Engineering Research Center",
    type: "Research",
    spots: 40,
    description:
      "Present research on healthcare technology and digital health solutions.",
  },
  {
    id: 21,
    title: "End of Year Fundraising Dinner",
    date: "2025-05-31",
    time: "6:30 PM",
    location: "Dallas Convention Center",
    type: "Fundraising",
    spots: 300,
    description:
      "Celebrate our achievements and raise funds for next year's programs.",
  },
];

const eventTypes = [
  "All Events",
  "Workshop",
  "Guest Speaker",
  "Service",
  "Fundraising",
  "Research",
  "Career",
];

const stats = [
  { number: "25+", label: "Events This Month", icon: Calendar },
  { number: "300+", label: "Total RSVPs", icon: Users },
  { number: "15+", label: "Workshop Sessions", icon: Award },
  { number: "100%", label: "Free Events", icon: Heart },
];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All Events");
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // Start with January 2025

  // Get events for the selected type
  const filteredEvents =
    selectedType === "All Events"
      ? events
      : events.filter((event) => event.type === selectedType);

  // Event type colors
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

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: string) => {
    return filteredEvents.filter((event) => event.date === date);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-32 w-32 sm:w-full bg-gray-50 border border-gray-200"
        ></div>
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatDate(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      );
      const dayEvents = getEventsForDate(dateString);

      days.push(
        <div
          key={day}
          className="h-32 w-32 sm:w-full bg-white border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
        >
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
          <div className="space-y-1 max-h-24 overflow-y-auto">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded transition-colors border-l-2 ${getEventTypeColor(
                  event.type
                )} block`}
                title={`${event.title} - ${event.time} - ${event.location}`}
              >
                <div className="font-medium truncate">{event.title}</div>
                <div className="text-xs opacity-80">{event.time}</div>
                <div className="text-xs truncate font-semibold">
                  {event.type}
                </div>
              </div>
            ))}
            {dayEvents.length === 0 && (
              <div className="text-xs text-gray-400 text-center py-2">
                No events
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
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
              📅 Interactive Calendar
            </span> */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Event Calendar
            </h1>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Browse our interactive calendar to find workshops, guest speakers,
              and community service opportunities
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
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calendar Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                    Event Calendar
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Showing {filteredEvents.length}{" "}
                    {selectedType === "All Events"
                      ? "events"
                      : selectedType.toLowerCase() + " events"}{" "}
                    in {getMonthName(currentMonth)}
                  </p>
                  {/* Debug info - remove this later */}
                  <div className="text-xs text-gray-500 mt-1">
                    Debug: Current month events:{" "}
                    {
                      filteredEvents.filter((e) => e.date.startsWith("2025-01"))
                        .length
                    }{" "}
                    in Jan,{" "}
                    {
                      filteredEvents.filter((e) => e.date.startsWith("2025-02"))
                        .length
                    }{" "}
                    in Feb
                  </div>
                </div>

                {/* Event Type Filter */}
                <div className="flex items-center gap-4">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-48 bg-white border-blue-200">
                      <SelectValue placeholder="Filter by event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-8">
                <Button
                  variant="outline"
                  onClick={prevMonth}
                  className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>

                <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                  {getMonthName(currentMonth)}
                </h3>

                <Button
                  variant="outline"
                  onClick={nextMonth}
                  className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <span className="hidden sm:inline"> Next </span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Calendar Grid */}
              <Card className="p-6 bg-white shadow-lg overflow-auto">
                {/* Calendar Header */}
                <div className="grid grid-cols-7 gap-1 mb-2 w-max sm:w-full">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="w-32 sm:w-full p-3 text-center font-semibold text-blue-900 bg-blue-50 rounded-lg"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1 w-max sm:w-full">
                  {generateCalendarDays()}
                </div>
              </Card>
            </div>

            {/* Event Legend */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Event Types
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {eventTypes.slice(1).map((type) => {
                  const colorClasses = getEventTypeColor(type);
                  const bgColor = colorClasses.split(" ")[0];

                  return (
                    <div
                      key={type}
                      className={`flex items-center gap-2 p-3 rounded-lg shadow-sm border ${colorClasses}`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${bgColor
                          .replace("bg-", "bg-")
                          .replace("-100", "-500")}`}
                      ></div>
                      <span className="text-sm font-medium">{type}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background decorative elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div> */}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Never miss an event! Join our community to get notified about
              upcoming workshops and opportunities.
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
                className="text-lg px-10 py-5 rounded-xl border-2 border-white text-blue-700 hover:bg-white hover:text-blue-700 font-semibold hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 h-6 w-6" />
                View Past Events
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Events;
