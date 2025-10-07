import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What platforms can I connect to MarketHub?",
    answer: "MarketHub integrates with all major social media platforms (Facebook, Instagram, LinkedIn, Twitter/X, YouTube), analytics tools (Google Analytics, Google Ads), CRM systems (Salesforce, HubSpot), email marketing (Mailchimp), e-commerce (Shopify), and collaboration tools (Slack, Zapier)."
  },
  {
    question: "How does the social media planner work?",
    answer: "Our social media planner lets you schedule posts across all platforms, create approval workflows for your team, preview posts before publishing, and analyze performance metrics - all from one unified dashboard similar to Metricool."
  },
  {
    question: "Can I manage multiple clients or brands?",
    answer: "Yes! Our Professional and Enterprise plans support unlimited workspaces, allowing you to manage multiple brands, clients, or departments separately with custom team permissions and branding."
  },
  {
    question: "Is there a free trial available?",
    answer: "Absolutely! We offer a 14-day free trial on all paid plans with no credit card required. You'll have full access to all features during your trial period."
  },
  {
    question: "How does billing and invoicing work?",
    answer: "Our invoice management system lets you create professional invoices, set up recurring billing, accept online payments, track payment status, and send automatic reminders - all integrated with your CRM data."
  },
  {
    question: "What kind of analytics and reporting do you provide?",
    answer: "We provide comprehensive analytics including social media performance, ROI tracking, team productivity metrics, client profitability reports, and customizable dashboards. Export data in multiple formats for presentations and stakeholder reports."
  },
  {
    question: "How does team collaboration work?",
    answer: "Create dedicated workspaces for each team or project, assign tasks, share files, comment on content, manage approval workflows, and track progress in real-time. Perfect for remote and distributed teams."
  },
  {
    question: "Can I migrate my data from other tools?",
    answer: "Yes! We provide data import tools and migration assistance for all major platforms. Our support team can help you seamlessly transfer your contacts, campaigns, and historical data."
  }
];

const FAQ = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6">
          Frequently Asked <span className="text-gradient font-medium">Questions</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Everything you need to know about MarketHub
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass rounded-lg px-6 border-white/10"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
