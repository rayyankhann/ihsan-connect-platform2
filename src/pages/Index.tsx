import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ScrollAnimation";
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
  Quote,
} from "lucide-react";
import volunteeringImage from "@/assets/volunteering-event.jpg";
import networkingImage from "@/assets/networking-event.jpg";
import Image from "next/image";

const upcomingEvents = [
  {
    id: 1,
    title: "MCAT Prep Workshop",
    date: "2025-01-15",
    time: "6:00 PM",
    location: "Student Union Building, Room 2.304",
    type: "Workshop",
    image: volunteeringImage,
    spots: "Open to All",
  },
  {
    id: 2,
    title: "Healthcare Career Fair & Networking",
    date: "2025-01-22",
    time: "10:00 AM",
    location: "Activities Center",
    type: "Career",
    image: networkingImage,
    spots: "Open to All",
  },
  {
    id: 3,
    title: "Community Health Screening Volunteer",
    date: "2025-01-29",
    time: "9:00 AM",
    location: "Dallas Community Center",
    type: "Volunteering",
    image: volunteeringImage,
    spots: "Open to All",
  },
];

const coreObjectives = [
  {
    title: "Personal Development",
    description:
      "MCAT workshops, research opportunities, and networking events to equip members with essential healthcare skills",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Empowerment",
    description:
      "Foster academic growth through mentorship, resources, and support for pre-health students",
    icon: Award,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Community",
    description:
      "Build a supportive community of healthcare-passionate students sharing religious values",
    icon: Users,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Service",
    description:
      "Serve local and global communities through clinical and non-clinical volunteering activities",
    icon: Heart,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Ethical Leadership",
    description:
      "Nurture future healthcare professionals with integrity, honesty, and compassion",
    icon: Target,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Global Impact",
    description:
      "Aid healthcare systems in third-world countries through awareness and fundraising",
    icon: Globe,
    color: "from-cyan-500 to-blue-600",
  },
];

const logos = [
  { src: "/brandLogo/FajrScientific.png", alt: "FajrScientific" },
  { src: "/brandLogo/SyrianAmericanMedicalSociety.png", alt: "Syrian American Medical Society" },
  { src: "/brandLogo/SudaneseAmericanPhysiciansAssociation.webp", alt: "Sudanese American Physicians Association.jpeg" },
  { src: "/brandLogo/SadaqahProject.jpg", alt: "Project Sadaqa" },

];

const Index = () => {
  const nextEvent = upcomingEvents[0];

  return (
    <div
      className="min-h-screen pt-20 browser-compat firefox-fix ios-fix"
      style={{ paddingTop: "calc(5rem + env(safe-area-inset-top))" }}
    >
      {/* Hero Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Decorative Elements */}
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 rounded-full bg-[#2563eb] blur-3xl"></div>
          </div> */}

          {/* <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-white/20 mb-6">
              🏥 Healthcare Excellence
            </span>
          </div> */}

          {/* Title with decorative underline */}
          <div className="mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 mobile-h1">
              <span className="text-white">Welcome to </span>
              <span className="text-white">IHSAN</span>
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-2 sm:mb-4"></div>
            <p className="text-sm sm:text-xl text-white/90 max-w-2xl mx-auto mobile-p">
              IHSAN Healthcare Association at the University of Texas at Dallas
            </p>
            <p className="text-xs sm:text-lg text-white/80 mt-1 sm:mt-2 mobile-p">
              Open to All Healthcare-Interested Students
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 text-white/80 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base">$15 Membership</span>
            </div>
            <div className="w-px h-4 sm:h-6 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base">Open to All Students</span>
            </div>
            <div className="w-px h-4 sm:h-6 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base">Healthcare Focus</span>
            </div>
          </div>

          <div className="flex justify-center mb-8 sm:mb-12">
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg btn-mobile-lg touch-friendly"
              >
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Join IHSAN - Support Charity!
              </Button>
            </Link>
          </div>

          {/* Next Event Banner */}
          {nextEvent && (
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Card className="flex flex-col sm:inline-flex sm:items-center sm:space-y-2 p-4  bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl w-full max-w-sm mx-auto">
                <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-medium">
                    Next Event
                  </span>
                </div>
                <hr className="border-white/30 mb-3 w-full"/>
                {/* <div className="h-px sm:h-6 w-full sm:w-px bg-white/30 mb-3 sm:mb-0"></div> */}
                <div className="text-center mb-3 sm:mb-0">
                  <p className="font-medium text-sm sm:text-base">
                    {nextEvent.title}
                  </p>
                  <p className="text-xs sm:text-sm opacity-90">
                    {new Date(nextEvent.date).toLocaleDateString()} at{" "}
                    {nextEvent.time}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  asChild
                  className="btn-mobile touch-friendly"
                >
                  <Link href="/events">Join Event</Link>
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-24 bg-gradient-to-br from-blue-50 to-white section-mobile">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8 mobile-h2">
              Our Mission
            </h2>
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-8">
              <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed mobile-p">
                <strong className="text-blue-900">IHSAN Healthcare Association</strong>{" "}
                &#40;highlight club name blue&#41; was created to uplift students with plans to pursue healthcare post-graduation. Our primary purpose is to provide students with job, volunteering, and leadership opportunities meant to educate them in their field, increase their involvement, and promote their applications.
              </p>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed mobile-p">
                Our secondary purpose is to aid the healthcare system in third-world countries by raising awareness and fundraising money to provide them with necessary supplies and aid as needed.
              </p>
            </div>

          </ScrollAnimation>
        </div>
      </section>

      {/* Fundraising Goal Section */}
      <section className="py-12 sm:py-20 bg-white section-mobile">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Support Our Mission
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Help us reach our fundraising goal to support healthcare
              initiatives and provide opportunities for students
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 sm:p-8 shadow-lg border border-blue-100 card-mobile">
              <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2563eb] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">
                    $
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2563eb]">
                  Fundraising Goal
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-lg mb-3">
                  <span className="text-gray-700 font-semibold">
                    Raised: $35,000
                  </span>
                  <span className="text-gray-700 font-semibold">
                    Goal: $50,000
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="text-center mt-2 sm:mt-3">
                  <span className="text-base sm:text-lg font-bold text-[#2563eb]">
                    70% Complete
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto">
                Your donation helps us provide healthcare opportunities, support
                students, and make a difference in communities worldwide.
              </p>

              <Button
                size="lg"
                className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 btn-mobile-lg touch-friendly"
                asChild
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
   
      {/* Donation Section */}
      <section className="pb-12 sm:pb-20 bg-white section-mobile">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 sm:p-8 shadow-lg border border-blue-100">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-24 h-24 mx-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full mix-blend-darken hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-8 sm:py-12 bg-muted/30 section-mobile">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                Get Involved
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Join our open community of healthcare-passionate students
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 grid-mobile">
            <Link href="/membership" className="block">
              <Card className="card-gradient p-4 sm:p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 card-mobile touch-friendly">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Join IHSAN
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  $15 membership - supports charity initiatives
                </p>
              </Card>
            </Link>

            <Card className="card-gradient p-4 sm:p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 card-mobile touch-friendly">
              <Link href="/events" className="block">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Attend Events
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Workshops, volunteering & networking
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-4 sm:p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 card-mobile touch-friendly">
              <Link href="/blog" className="block">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Read Testimonials
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Member success stories & experiences
                </p>
              </Link>
            </Card>

            <Card className="card-gradient p-4 sm:p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 card-mobile touch-friendly">
              <Link href="/donate" className="block">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Global Aid
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Support third-world healthcare
                </p>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 hero-gradient section-mobile safe-area-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Begin Your Healthcare Journey?
            </h2>
            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
              Join our open community and connect with like-minded students
              pursuing healthcare careers
            </p>
          </ScrollAnimation>
          {/* <ScrollAnimation delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg btn-mobile-lg touch-friendly"
              >
                <Link href="/membership">
                  <UserPlus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Join Today - Support Charity
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-white/30 text-blue-700 hover:bg-white/10 bg-black/20 transition-all duration-300 hover:scale-105 hover:shadow-lg btn-mobile-lg touch-friendly"
              >
                <Link href="/contact">
                  <Handshake className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </ScrollAnimation> */}
        </div>
      </section>
    </div>
  );
};

export default Index;
