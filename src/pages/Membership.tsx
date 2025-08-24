import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Stethoscope, 
  GraduationCap, 
  Heart,
  Check,
  Star,
  BookOpen,
  Calendar,
  UserPlus
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with healthcare professionals, alumni, and peers"
  },
  {
    icon: Stethoscope,
    title: "Hands-on Experience",
    description: "Participate in medical workshops and skill-building sessions"
  },
  {
    icon: Heart,
    title: "Community Service",
    description: "Volunteer at health fairs and community outreach programs"
  },
  {
    icon: GraduationCap,
    title: "Career Preparation",
    description: "Resume reviews, interview prep, and career guidance"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access to study materials, MCAT prep, and academic support"
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Member-only workshops, social events, and guest speakers"
  }
];

const membershipInfo = {
  name: "IHSAN Member",
  price: "Free",
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
  description: "Join our open, free college club for all healthcare-interested students"
};

const Membership = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join IHSAN - Free & Open to All
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our free college club dedicated to healthcare excellence, service, and global impact
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Membership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of joining our healthcare community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="card-gradient p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Information */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Free Membership - Open to All
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No fees, no barriers - just passionate students pursuing healthcare careers together
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="card-gradient p-8 relative ring-2 ring-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                <Star className="w-4 h-4 mr-1" />
                Free for All Students
              </Badge>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {membershipInfo.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {membershipInfo.price}
                </div>
                <div className="text-muted-foreground">
                  {membershipInfo.period}
                </div>
                <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                  {membershipInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {membershipInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent text-lg py-6">
                <UserPlus className="mr-2 h-5 w-5" />
                Join IHSAN Today - It's Free!
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Free Community?
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below to join IHSAN - no fees required!
            </p>
          </div>

          <Card className="card-gradient p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="major">Major</Label>
                  <Input id="major" placeholder="e.g., Biology, Chemistry" />
                </div>
                <div>
                  <Label htmlFor="gradYear">Expected Graduation Year</Label>
                  <Input id="gradYear" placeholder="e.g., 2026" />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent text-lg py-6">
                <UserPlus className="mr-2 h-5 w-5" />
                Join IHSAN - Free Registration
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Membership;