import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is included in the Starter plan?',
    answer:
      'The Starter plan gives SMEs free access to basic trade documentation tools, market discovery features, community support, single-currency transactions, and up to 5 shipments per month—ideal for businesses exploring cross-border trade for the first time.',
  },
  {
    question: 'How does the Enterprise plan work as an export department?',
    answer:
      'Our Enterprise tier acts as your fully managed digital export department. A dedicated trade operations team handles documentation, compliance, logistics coordination, and payment settlement on your behalf—so you can scale internationally without building an in-house export team.',
  },
  {
    question: 'What onboarding support do you provide?',
    answer:
      'All plans include guided onboarding. Growth users receive priority setup assistance, while Enterprise clients get white-glove onboarding with custom compliance workflow configuration, ERP integration support, and dedicated training sessions for their team.',
  },
  {
    question: 'How does DTFS handle regulatory compliance?',
    answer:
      'DTFS uses AI-assisted compliance checks to ensure your shipments meet destination-specific regulatory requirements. Enterprise clients benefit from custom compliance workflows and a dedicated team that monitors evolving trade regulations across target markets.',
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer:
      'Yes. You can upgrade from Starter to Growth instantly, and changes take effect immediately. Enterprise transitions involve a brief consultation to configure your dedicated operations team and integrations. Downgrades are processed at the end of your billing cycle.',
  },
  {
    question: 'What currencies and payment methods are supported?',
    answer:
      'Starter supports single-currency transactions. Growth and Enterprise plans unlock multi-currency payments with integrated FX tools, enabling you to transact across African, Asian, and global markets with competitive exchange rates and priority settlement processing.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about plans, onboarding, and compliance.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
