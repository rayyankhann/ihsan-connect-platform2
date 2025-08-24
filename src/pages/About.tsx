import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
  Globe
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

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About IHSAN
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Building a community of compassionate healthcare professionals dedicated to service and excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IHSAN for Healthcare was created to uplift students with plans to pursue healthcare post-graduation. 
                Our primary purpose is to provide students with job, volunteering, and leadership opportunities 
                meant to educate them in their field, increase their involvement, and promote their applications. 
                Our secondary purpose is to aid the healthcare system in third-world countries by raising 
                awareness and fundraising money to provide them with necessary supplies and aid as needed.
              </p>
            </div>
            <Card className="card-gradient p-8">
              <div className="text-center">
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  "Ihsan" - Excellence in Worship
                </h3>
                <p className="text-muted-foreground">
                  Our name reflects our commitment to excellence, compassion, and 
                  conscious service to humanity through healthcare.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="card-gradient p-8 order-2 lg:order-1">
              <div className="text-center">
                <Stethoscope className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Healthcare Excellence
                </h3>
                <p className="text-muted-foreground">
                  Preparing the next generation of healthcare professionals through 
                  hands-on learning and professional development.
                </p>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our core principles, IHAUTD strives to create a nurturing and empowering environment 
                where pre-health students can grow academically, spiritually, and personally while making a 
                positive impact on their communities and society at large. We aspire to embody the teachings 
                of religion in our pursuit of a healthier and more compassionate world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-gradient p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Personal Development
              </h3>
              <p className="text-muted-foreground text-sm">
                We provide opportunities through MCAT workshops, research opportunities, and networking events that equip our members with the skills needed to succeed in healthcare.
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Empowerment
              </h3>
              <p className="text-muted-foreground text-sm">
                We aim to empower pre-health students by fostering an environment that encourages personal and academic growth through mentorship, resources, and support.
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Community
              </h3>
              <p className="text-muted-foreground text-sm">
                We seek to build a strong and supportive community of like-minded individuals who share a passion for healthcare and a commitment to upholding religious values.
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Service
              </h3>
              <p className="text-muted-foreground text-sm">
                Inspired by the teachings of religion, we organize and participate in clinical and non-clinical volunteering activities that promote health and well-being, exemplifying charity and compassion.
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Ethical Leadership
              </h3>
              <p className="text-muted-foreground text-sm">
                We aim to nurture future healthcare professionals who exemplify the highest ethical standards, reflecting the values of integrity, honesty, and compassion in their practice.
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Global Healthcare Aid
              </h3>
              <p className="text-muted-foreground text-sm">
                Supporting healthcare systems in third-world countries by raising awareness and fundraising money to provide necessary supplies and aid as needed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated students leading IHSAN into the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card 
                key={leader.name}
                className="card-gradient p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg bg-gradient-to-br from-primary to-accent text-white">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {leader.name}
                </h3>
                <Badge variant="secondary" className="mb-2">
                  {leader.position}
                </Badge>
                <p className="text-sm text-muted-foreground mb-1">
                  {leader.major} • {leader.year}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {leader.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in IHSAN's growth and impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="card-gradient p-6">
                      <Badge className="mb-3">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Become part of a community that's shaping the future of healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl"
            >
              <Users className="mr-2 h-5 w-5" />
              Join IHSAN
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10"
            >
              Contact Leadership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;