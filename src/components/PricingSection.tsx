import React, { useState } from 'react';
import { Check, Building2, Rocket, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FormModal from './FormModal';

const tiers = [
  {
    name: 'Starter',
    icon: Rocket,
    price: 'Free',
    period: '',
    description: 'For SMEs exploring cross-border trade for the first time.',
    features: [
      'Basic trade documentation',
      'Market discovery tools',
      'Community support',
      'Single currency transactions',
      'Up to 5 shipments/month',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    icon: Building2,
    price: '$99',
    period: '/month',
    description: 'For active exporters scaling into new markets.',
    features: [
      'Everything in Starter',
      'Multi-currency payments & FX tools',
      'AI-assisted compliance checks',
      'Priority settlement processing',
      'Up to 50 shipments/month',
      'Dedicated support channel',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: '',
    description: 'A fully managed digital export department for your organisation.',
    features: [
      'Everything in Growth',
      'Unlimited shipments & transactions',
      'End-to-end export management',
      'Dedicated trade operations team',
      'Custom compliance workflows',
      'ERP & supply chain integrations',
      'White-glove onboarding & training',
      'SLA-backed uptime & support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    badge: 'Your Export Department',
  },
];

const PricingSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Pricing & Access
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Infrastructure That Scales With You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From first-time exporters to large enterprises, choose the level of support
            your trade operations require.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground shadow-xl scale-[1.02] ring-2 ring-primary/20'
                    : 'bg-card text-card-foreground border border-border hover:shadow-lg'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}

                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${
                    tier.highlighted ? 'bg-primary-foreground/15' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-5 w-5 ${tier.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className={`text-sm ${tier.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className={`text-base ml-1 ${tier.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      <span className={tier.highlighted ? 'text-primary-foreground/90' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full group ${
                    tier.highlighted
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  onClick={() => setIsFormOpen(true)}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Callout */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <Crown className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Enterprise: Your Entire Export Department, Digitised
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              For organisations that need a turnkey solution, Enterprise replaces the need for
              in-house export teams. From documentation and compliance to logistics coordination
              and payment settlement—DTFS manages the full trade lifecycle on your behalf.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto mb-8">
              {[
                { label: 'Trade Ops Team', desc: 'Dedicated specialists managing your exports' },
                { label: 'Full Compliance', desc: 'Destination-specific regulatory handling' },
                { label: 'Integrated Systems', desc: 'Connects to your ERP, CRM & logistics stack' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              onClick={() => setIsFormOpen(true)}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default PricingSection;
