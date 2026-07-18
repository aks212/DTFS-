import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, PackageSearch, Fingerprint, TrendingDown, MapPinned, HeadphonesIcon } from 'lucide-react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import { Button } from '@/components/ui/button';
import FormModal from '@/components/FormModal';
import importersHero from '@/assets/importers-hero.jpg';
import importersJourney from '@/assets/importers-journey.jpg';

const Importers = () => {
  const [open, setOpen] = useState(false);

  const pillars = [
    { icon: PackageSearch, title: 'Reliable Sourcing', desc: 'Discover verified exporters with proven capacity, quality standards and compliance credentials — no more guesswork.' },
    { icon: Fingerprint, title: 'Full Traceability', desc: 'Origin-to-destination product provenance, quality certifications and shipment tracking on a single dashboard.' },
    { icon: ShieldCheck, title: 'Buyer Protection', desc: 'Escrow-secured payments released only against verified milestones — capital is protected across the trade cycle.' },
    { icon: TrendingDown, title: 'Transparent Pricing', desc: 'Compare landed cost across suppliers with real-time FX, duties and logistics factored in.' },
    { icon: MapPinned, title: 'Coordinated Logistics', desc: 'Freight, customs clearance and last-mile handled inside one workflow with live status updates.' },
    { icon: HeadphonesIcon, title: 'Concierge Support', desc: 'Trade specialists and multilingual AI assist through negotiation, documentation and dispute resolution.' },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <FloatingSocialIcons />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">For Importers</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.05]">
              Source globally with<br />
              <span className="text-gradient">confidence and clarity</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
              DTFS gives importers reliable access to verified suppliers, end-to-end transparency across pricing, provenance and logistics, and full confidence throughout the trade cycle — from purchase order to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="btn-primary group" onClick={() => setOpen(true)}>
                Get Importer Access <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary" asChild>
                <a href="/#about">Learn More</a>
              </Button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16 rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img
              src={importersHero}
              alt="Global importer reviewing shipments with a world map overlay in a modern warehouse"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 tracking-tight">The importer journey on DTFS</h2>
            <ol className="space-y-5">
              {[
                'Register your business and verify buyer credentials',
                'Search vetted suppliers with transparent capacity and compliance data',
                'Request quotes and compare landed cost across multiple exporters',
                'Contract with milestone-based escrow to protect working capital',
                'Track production, shipment, customs and delivery in real time',
                'Confirm receipt and release payment with a complete audit trail',
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

export default Importers;
