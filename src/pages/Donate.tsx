'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FundraisingProgress from '@/components/FundraisingProgress';
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Stethoscope,
  Check,
  Star,
  DollarSign,
  CreditCard
} from 'lucide-react';

const donationTiers = [
  {
    name: "Supporter",
    amount: 25,
    description: "Help fund basic workshop materials and educational resources",
    benefits: [
      "Recognition on our website",
      "Thank you card from leadership",
      "Event updates newsletter"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Sponsor",
    amount: 100,
    description: "Support event hosting, guest speakers, and community outreach",
    benefits: [
      "All Supporter benefits",
      "Name featured in event programs",
      "Invitation to annual appreciation dinner",
      "Priority event notifications"
    ],
    color: "from-primary to-accent",
    recommended: true
  },
  {
    name: "Partner",
    amount: 250,
    description: "Enable major initiatives like medical equipment purchases and scholarships",
    benefits: [
      "All Sponsor benefits",
      "Logo displayed at major events",
      "Private meet & greet with leadership",
      "Annual impact report",
      "Custom appreciation plaque"
    ],
    color: "from-amber-500 to-amber-600"
  }
];

const impactStats = [
  {
    icon: Users,
    number: "300+",
    label: "Students Supported",
    description: "Pre-health students guided through their academic journey"
  },
  {
    icon: GraduationCap,
    number: "50+",
    label: "Workshops Hosted",
    description: "Educational events and skill-building sessions"
  },
  {
    icon: Stethoscope,
    number: "1,000+",
    label: "Community Members Served",
    description: "Individuals helped through our health outreach programs"
  },
  {
    icon: Heart,
    number: "$35K+",
    label: "Funds Raised",
    description: "Invested directly into student and community programs"
  }
];

const Donate = () => {
  const [customAmount, setCustomAmount] = React.useState("");
  const [selectedTier, setSelectedTier] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Help us continue building the next generation of healthcare professionals
          </p>
          
          {/* Fundraising Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <FundraisingProgress 
              currentAmount={35000} 
              goalAmount={50000} 
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how your support makes a difference in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="card-gradient p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ways to Give
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a giving level that works for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {donationTiers.map((tier, index) => (
              <Card 
                key={tier.name}
                className={`card-gradient p-8 relative cursor-pointer transition-all ${
                  selectedTier === index ? 'ring-2 ring-primary scale-105' : ''
                } ${tier.recommended ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedTier(selectedTier === index ? null : index)}
              >
                {tier.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${tier.amount}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${selectedTier === index ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                  variant={selectedTier === index ? 'default' : 'outline'}
                >
                  {selectedTier === index ? 'Selected' : `Give $${tier.amount}`}
                </Button>
              </Card>
            ))}
          </div>

          {/* Custom Amount */}
          <Card className="card-gradient p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Custom Amount
              </h3>
              <p className="text-muted-foreground text-sm">
                Choose your own donation amount
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="customAmount">Donation Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="0.00"
                    className="pl-10"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent">
                <CreditCard className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Donor Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are grateful for the generous support of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Partners ($250+)</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Dr. Sarah Johnson</p>
                <p>UT Dallas Alumni Association</p>
                <p>Richardson Medical Center</p>
              </div>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Sponsors ($100+)</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Michael Chen (Class of '22)</p>
                <p>Dr. Amanda Rodriguez</p>
                <p>UTD Pre-Health Advisory</p>
                <p>Dallas Healthcare Group</p>
              </div>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Supporters ($25+)</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Jennifer Park</p>
                <p>IHSAN Alumni Network</p>
                <p>UTD Student Government</p>
                <p>And 25+ other supporters</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Donation FAQ
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Is my donation tax-deductible?
              </h3>
              <p className="text-muted-foreground">
                Yes, IHSAN is a registered student organization under UT Dallas. 
                Your donation may be tax-deductible. Please consult with your tax advisor.
              </p>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How are donations used?
              </h3>
              <p className="text-muted-foreground">
                Donations support workshop materials, guest speaker fees, community outreach programs, 
                and educational resources for our members. We provide annual impact reports to all donors.
              </p>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Can I make a recurring donation?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer monthly and semester-based recurring donation options. 
                Contact us at ihsanhealthcareutd@gmail.com to set up a recurring gift.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your support helps us continue our mission of developing the next generation of healthcare leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10 bg-black/20"
            >
              Learn More About Impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;