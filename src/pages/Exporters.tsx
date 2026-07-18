import React from 'react';
import { ArrowRight, ShieldCheck, Globe2, FileCheck2, Banknote, LineChart, Users2 } from 'lucide-react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import FormModal from '@/components/FormModal';

const Exporters = () => {
  const [open, setOpen] = useState(false);

  const pillars = [
    { icon: Globe2, title: 'Verified Global Buyers', desc: 'Reach vetted importers across priority corridors — matched to your product, capacity, and compliance profile.' },
    { icon: ShieldCheck, title: 'Risk-Managed Execution', desc: 'Escrow-secured payments and milestone-based settlement reduce counterparty and non-payment risk.' },
    { icon: FileCheck2, title: 'Automated Documentation', desc: 'Invoices, packing lists, certificates of origin and destination-market compliance generated in minutes.' },
    { icon: Banknote, title: 'Trade Finance Access', desc: 'Invoice discounting, pre-shipment finance and FX visibility through integrated financial partners.' },
    { icon: LineChart, title: 'Market Intelligence', desc: 'Real-time pricing, demand signals and tariff insights to price competitively and win more deals.' },
    { icon: Users2, title: 'Guided Onboarding', desc: 'Trade specialists and multilingual AI support walk you through each export step end-to-end.' },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <FloatingSocialIcons />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">For Exporters</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.05]">
              Sell to the world with<br />
              <span className="text-gradient">structure, security and scale</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
              DTFS gives exporters direct access to verified international buyers, structured trade execution across documentation, logistics and compliance, and reduced transaction risk through escrow-secured payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="btn-primary group" onClick={() => setOpen(true)}>
                Get Exporter Access <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary" asChild>
                <a href="/#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((p, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  <p.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 md:mt-24 rounded-2xl border border-border bg-card/50 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 tracking-tight">The exporter journey on DTFS</h2>
            <ol className="space-y-5">
              {[
                'Onboard your business and verify KYC/compliance credentials',
                'List products with standardized specifications and pricing',
                'Match with verified international buyers through intelligent deal discovery',
                'Execute contracts with automated documentation and escrow-secured payment',
                'Coordinate logistics, customs and delivery with real-time tracking',
                'Receive settlement in your preferred currency with full audit trail',
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold font-semibold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FooterSection />
      <FormModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Exporters;
