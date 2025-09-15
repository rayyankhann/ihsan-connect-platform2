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
import Link from "next/link";
import { getYear } from "date-fns";

// Sample events data with dates
// const events = [
//   // January 2025 Events
//   {
//     id: 1,
//     title: "Medical Skills Workshop",
//     date: "2025-01-15",
//     time: "6:00 PM",
//     location: "Student Union Building, Room 2.304",
//     type: "Workshop",
//     spots: 25,
//     description:
//       "Learn essential medical skills including vital signs, basic suturing, and patient communication.",
//   },
//   {
//     id: 2,
//     title: "Healthcare Career Fair",
//     date: "2025-01-22",
//     time: "10:00 AM",
//     location: "Activities Center",
//     type: "Career",
//     spots: 100,
//     description:
//       "Meet with healthcare professionals and learn about different career paths in medicine.",
//   },
//   {
//     id: 3,
//     title: "Community Health Screening",
//     date: "2025-01-29",
//     time: "9:00 AM",
//     location: "Dallas Community Center",
//     type: "Service",
//     spots: 15,
//     description:
//       "Volunteer at a community health screening event serving underserved populations.",
//   },

//   // February 2025 Events
//   {
//     id: 4,
//     title: "Guest Speaker: Dr. Sarah Johnson",
//     date: "2025-02-05",
//     time: "7:00 PM",
//     location: "Science Building Auditorium",
//     type: "Guest Speaker",
//     spots: 50,
//     description:
//       "Join us for an inspiring talk on pediatric medicine and career development.",
//   },
//   {
//     id: 5,
//     title: "Research Symposium",
//     date: "2025-02-12",
//     time: "2:00 PM",
//     location: "Research Center",
//     type: "Research",
//     spots: 30,
//     description:
//       "Present and discuss healthcare research projects with peers and faculty.",
//   },
//   {
//     id: 6,
//     title: "Fundraising Gala",
//     date: "2025-02-20",
//     time: "6:30 PM",
//     location: "UT Dallas Ballroom",
//     type: "Fundraising",
//     spots: 200,
//     description:
//       "Annual fundraising event supporting our healthcare initiatives and scholarships.",
//   },
//   {
//     id: 7,
//     title: "CPR Certification Workshop",
//     date: "2025-02-25",
//     time: "5:00 PM",
//     location: "Health Sciences Building",
//     type: "Workshop",
//     spots: 20,
//     description: "Get certified in CPR and basic life support techniques.",
//   },

//   // March 2025 Events
//   {
//     id: 8,
//     title: "Medical Ethics Seminar",
//     date: "2025-03-03",
//     time: "6:30 PM",
//     location: "Philosophy Department",
//     type: "Workshop",
//     spots: 40,
//     description:
//       "Explore ethical dilemmas in healthcare and medical decision-making.",
//   },
//   {
//     id: 9,
//     title: "Guest Speaker: Dr. Michael Chen",
//     date: "2025-03-10",
//     time: "7:00 PM",
//     location: "Engineering Building",
//     type: "Guest Speaker",
//     spots: 75,
//     description: "Innovations in medical technology and future of healthcare.",
//   },
//   {
//     id: 10,
//     title: "Blood Drive",
//     date: "2025-03-15",
//     time: "10:00 AM",
//     location: "Student Union Plaza",
//     type: "Service",
//     spots: 50,
//     description: "Donate blood and help save lives in our community.",
//   },
//   {
//     id: 11,
//     title: "Healthcare Innovation Hackathon",
//     date: "2025-03-22",
//     time: "9:00 AM",
//     location: "Computer Science Building",
//     type: "Workshop",
//     spots: 60,
//     description:
//       "Collaborate on innovative healthcare solutions and technology.",
//   },
//   {
//     id: 12,
//     title: "Spring Fundraising Walk",
//     date: "2025-03-29",
//     time: "8:00 AM",
//     location: "UT Dallas Campus",
//     type: "Fundraising",
//     spots: 150,
//     description:
//       "Join our annual walkathon to raise funds for healthcare scholarships.",
//   },

//   // April 2025 Events
//   {
//     id: 13,
//     title: "Medical School Application Workshop",
//     date: "2025-04-05",
//     time: "2:00 PM",
//     location: "Career Center",
//     type: "Career",
//     spots: 35,
//     description:
//       "Learn about medical school applications, interviews, and requirements.",
//   },
//   {
//     id: 14,
//     title: "Guest Speaker: Dr. Emily Rodriguez",
//     date: "2025-04-12",
//     time: "6:00 PM",
//     location: "Natural Science Building",
//     type: "Guest Speaker",
//     spots: 80,
//     description:
//       "Global health initiatives and international medical missions.",
//   },
//   {
//     id: 15,
//     title: "Community Garden Volunteering",
//     date: "2025-04-19",
//     time: "9:00 AM",
//     location: "Community Garden",
//     type: "Service",
//     spots: 25,
//     description:
//       "Help maintain our community garden and learn about nutrition.",
//   },
//   {
//     id: 16,
//     title: "Healthcare Policy Research Forum",
//     date: "2025-04-26",
//     time: "3:00 PM",
//     location: "Political Science Building",
//     type: "Research",
//     spots: 45,
//     description:
//       "Discuss current healthcare policies and their impact on communities.",
//   },

//   // May 2025 Events
//   {
//     id: 17,
//     title: "Pre-Med Student Networking",
//     date: "2025-05-03",
//     time: "5:30 PM",
//     location: "Business School",
//     type: "Career",
//     spots: 100,
//     description:
//       "Network with current medical students and healthcare professionals.",
//   },
//   {
//     id: 18,
//     title: "Guest Speaker: Dr. James Wilson",
//     date: "2025-05-10",
//     time: "7:00 PM",
//     location: "Auditorium",
//     type: "Guest Speaker",
//     spots: 120,
//     description: "Emergency medicine and trauma care in urban settings.",
//   },
//   {
//     id: 19,
//     title: "Mental Health Awareness Workshop",
//     date: "2025-05-17",
//     time: "4:00 PM",
//     location: "Psychology Building",
//     type: "Workshop",
//     spots: 30,
//     description: "Learn about mental health first aid and supporting others.",
//   },
//   {
//     id: 20,
//     title: "Healthcare Technology Research",
//     date: "2025-05-24",
//     time: "1:00 PM",
//     location: "Engineering Research Center",
//     type: "Research",
//     spots: 40,
//     description:
//       "Present research on healthcare technology and digital health solutions.",
//   },
//   {
//     id: 21,
//     title: "End of Year Fundraising Dinner",
//     date: "2025-05-31",
//     time: "6:30 PM",
//     location: "Dallas Convention Center",
//     type: "Fundraising",
//     spots: 300,
//     description:
//       "Celebrate our achievements and raise funds for next year's programs.",
//   },

//   // Sep 25 Events
//   {
//     id: 22,
//     title: "First General Body Meeting",
//     date: "2025-09-15",
//     time: "7:00 PM",
//     type: "Social",
//     description:
//       "Kick off the school year with our very first GBM! Come meet the executive board, connect with fellow students, and participate in a fun interactive activity to get to know each other. Perfect chance to learn more about our club and how to get involved.",
//     formLink: "https://forms.gle/27SPPfrLceQJLwc26"
//   },
//   {
//     id: 23,
//     title: "Workshop Suturing",
//     date: "2025-09-24",
//     time: "7:00 PM",
//     type: "Workshop",
//     description:
//       "Get hands-on experience in a medical skill every healthcare provider needs! Practice suturing on dummies with step-by-step guidance. Great opportunity for pre-health students to build confidence and learn outside the classroom.",
//   },

//   // Oct 25 Events
//   {
//     id: 24,
//     title: "Collaboration with Islamic Relief (Cancer Awareness Event)",
//     date: "2025-10-01",
//     time: "7:00 PM",
//     type: "career/research",
//     description:
//       "A collaborative event focusing on cancer awareness, education, and community support. Learn about prevention, treatment, and how we can play a role in supporting those affected.",
//   },
//   {
//     id: 25,
//     title: "Speaker Event",
//     date: "2025-10-14",
//     time: "7:00 PM",
//     type: "Guest Speaker",
//     description:
//       "Engage with a guest speaker from the health or medical field who will share their personal journey, insights, and advice for aspiring healthcare professionals. A great way to gain inspiration and ask questions directly.",
//   },
//   {
//     id: 26,
//     title: "Texas Food Bank Volunteering",
//     date: "2025-10-18",
//     time: "7:00 PM",
//     type: "Service",
//     description:
//       "Give back to the community by volunteering at the North Texas Food Bank. Help pack, organize, and distribute meals for families in need while bonding with other members.",
//   },
//   {
//     id: 27,
//     title: "Pre-Health Day",
//     date: "2025-10-29",
//     time: "7:00 PM",
//     type: "career/research",
//     description:
//       "A showcase day for all things pre-health! Explore different career paths, resources, and opportunities designed to help students succeed in healthcare fields. Network, learn, and get inspired for your journey.",
//   },

//   // Nov 25 Events
//   {
//     id: 28,
//     title: "Mock Interview",
//     date: "2025-11-05",
//     time: "7:00 PM",
//     type: "Workshop",
//     description:
//       "Prepare for professional school and job interviews in a safe and supportive environment. Practice answering common questions, receive feedback, and build confidence before the real thing.",
//   },
//   {
//     id: 29,
//     title: "MSA Banquet (Tentative)",
//     date: "2025-11-12",
//     time: "7:00 PM",
//     type: "Social",
//     description:
//       "Celebrate with the Muslim Student Association at their annual banquet! A night of food, community, and culture—perfect for networking and enjoying time with fellow students.",
//   },
//   {
//     id: 30,
//     title: "NAY Collaboration (Tentative)",
//     date: "2025-11-13",
//     time: "7:00 PM",
//     type: "Service",
//     description:
//       "Collaborative event with NAY (North American Youth / Neighborhood Association of Youth – depending on group). Expect engaging activities, discussions, or service opportunities focused on youth empowerment and community growth.",
//   },
//   {
//     id: 31,
//     title: "Texas Food Bank Volunteering",
//     date: "2025-11-15",
//     time: "7:00 PM",
//     type: "Service",
//     description:
//       "Another chance to serve! Join us again at the North Texas Food Bank to continue supporting families in need. A rewarding and humbling way to spend your afternoon.",
//   },
//   {
//     id: 32,
//     title: "Bonfire x Multicultural Socia",
//     date: "2025-11-17",
//     time: "7:00 PM",
//     type: "Social",
//     description:
//       "Warm up by the fire and celebrate diversity with a multicultural society! An evening filled with food, community, and cultural exchange—perfect for meeting new friends and celebrating our campus’s diversity.",
//   },

//   // Des 25 Event
//   {
//     id: 33,
//     title: "Gala",
//     date: "2025-12-01",
//     time: "7:00 PM",
//     type: "Social",
//     description:
//       "End the semester in style at our Gala! Dress up, enjoy a night of food, celebration, and community with friends. A perfect way to wrap up the semester and honor everyone’s hard work",
//   },
// ];

const events = [
  {
    id: 1,
    title: "GBM 1 – First General Body Meeting",
    date: "2025-09-15",
    time: "7:00 PM",
    type: "Social Event",
    url:"https://forms.gle/27SPPfrLceQJLwc26",
    description:
      "Kick off the school year with our very first GBM! Come meet the executive board, connect with fellow students, and participate in a fun interactive activity to get to know each other. Perfect chance to learn more about our club and how to get involved. Sign-up: https://forms.gle/27SPPfrLceQJLwc26",
  },
  {
    id: 2,
    title: "Suturing Workshop",
    date: "2025-09-24",
    time: "7:00 PM",
    type: "Workshop",
    description:
      "Get hands-on experience in a medical skill every healthcare provider needs! Practice suturing on dummies with step-by-step guidance. Great opportunity for pre-health students to build confidence and learn outside the classroom.",
  },
  {
    id: 3,
    title: "Collaboration with Islamic Relief (Cancer Awareness Event)",
    date: "2025-10-01",
    time: "7:00 PM",
    type: "Career/Research",
    description:
      "A collaborative event focusing on cancer awareness, education, and community support. Learn about prevention, treatment, and how we can play a role in supporting those affected.",
  },
  {
    id: 4,
    title: "Speaker Event",
    date: "2025-10-14",
    time: "7:00 PM",
    type: "Guest Speaker",
    description:
      "Engage with a guest speaker from the health or medical field who will share their personal journey, insights, and advice for aspiring healthcare professionals. A great way to gain inspiration and ask questions directly.",
  },
  {
    id: 5,
    title: "Texas Food Bank Volunteering",
    date: "2025-10-18",
    time: "7:00 PM",
    type: "Service Event",
    description:
      "Give back to the community by volunteering at the North Texas Food Bank. Help pack, organize, and distribute meals for families in need while bonding with other members.",
  },
  {
    id: 6,
    title: "Pre-Health Day",
    date: "2025-10-29",
    time: "7:00 PM",
    type: "Career/Research",
    description:
      "A showcase day for all things pre-health! Explore different career paths, resources, and opportunities designed to help students succeed in healthcare fields. Network, learn, and get inspired for your journey.",
  },
  {
    id: 7,
    title: "Mock Interview",
    date: "2025-11-05",
    time: "7:00 PM",
    type: "Workshop",
    description:
      "Prepare for professional school and job interviews in a safe and supportive environment. Practice answering common questions, receive feedback, and build confidence before the real thing.",
  },
  {
    id: 8,
    title: "MSA Banquet (Tentative)",
    date: "2025-11-12",
    time: "7:00 PM",
    type: "Social Event",
    description:
      "Celebrate with the Muslim Student Association at their annual banquet! A night of food, community, and culture—perfect for networking and enjoying time with fellow students. (Tentative)",
  },
  {
    id: 9,
    title: "NAY Collaboration (Tentative)",
    date: "2025-11-13",
    time: "7:00 PM",
    type: "Service Event",
    description:
      "Collaborative event with NAY (North American Youth / Neighborhood Association of Youth – depending on group). Expect engaging activities, discussions, or service opportunities focused on youth empowerment and community growth. (Tentative)",
  },
  {
    id: 10,
    title: "Texas Food Bank Volunteering",
    date: "2025-11-15",
    time: "7:00 PM",
    type: "Service Event",
    description:
      "Another chance to serve! Join us again at the North Texas Food Bank to continue supporting families in need. A rewarding and humbling way to spend your afternoon.",
  },
  {
    id: 11,
    title: "Bonfire x Multicultural Social",
    date: "2025-11-17",
    time: "7:00 PM",
    type: "Social Event",
    description:
      "Warm up by the fire and celebrate diversity with a multicultural society! An evening filled with food, community, and cultural exchange—perfect for meeting new friends and celebrating our campus’s diversity.",
  },
  {
    id: 12,
    title: "Gala",
    date: "2025-12-01",
    time: "7:00 PM",
    type: "Social Event",
    description:
      "End the semester in style at our Gala! Dress up, enjoy a night of food, celebration, and community with friends. A perfect way to wrap up the semester and honor everyone’s hard work.",
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
  "Social",
];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All Events");
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Start with Current Month

  // Get events for the selected type with flexible matching
  const filteredEvents =
    selectedType === "All Events"
      ? events
      : events.filter((event) => {
          // Handle exact matches
          if (event.type === selectedType) return true;
          
          // Handle partial matches for current event types
          if (selectedType === "Service" && event.type === "Service Event") return true;
          if (selectedType === "Social" && event.type === "Social Event") return true;
          if (selectedType === "Career" && event.type === "Career/Research") return true;
          if (selectedType === "Research" && event.type === "Career/Research") return true;
          
          return false;
        });

  // Event type colors
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-green-100 text-green-800 border-green-500";
      case "Guest Speaker":
        return "bg-purple-100 text-purple-800 border-purple-500";
      case "Service":
      case "Service Event":
        return "bg-orange-100 text-orange-800 border-orange-500";
      case "Fundraising":
        return "bg-red-100 text-red-800 border-red-500";
      case "Research":
      case "Career":
      case "Career/Research":
        return "bg-indigo-100 text-indigo-800 border-indigo-500";
      case "Social":
      case "Social Event":
        return "bg-yellow-100 text-yellow-800 border-yellow-500";
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
                title={`${event.title} - ${event.time} `}
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
                    in {getYear(currentMonth)}
                  </p>
                  {/* Debug info - remove this later */}
                  {/* <div className="text-xs text-gray-500 mt-1">
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
                  </div> */}
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
                  className="flex items-center gap-2 border-blue-200 text-blue-700 hover:hero-gradient"
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
                  className="flex items-center gap-2 border-blue-200 text-blue-700 hover:hero-gradient"
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
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
 {/* Event Listings Section */}
      <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-blue-900 mb-6">
            Event Listings
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {filteredEvents?.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 relative"
              >
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {event.type}
                </span>

                <h3 className="text-lg font-bold text-blue-900 mb-2 w-3/4">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {event.date}
                  {" • "}
                  {event.time}
                </p>

                <p className="text-gray-600 mb-6 line-clamp-4">
                  {event.description}
                </p>

                <Link href={event.url || "#"}   className={` ${!event.url ? "cursor-not-allowed opacity-50" : ""}`}>
                  <Button  variant="default" className="transition " disabled={!event.url}>
                    RSVP
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
