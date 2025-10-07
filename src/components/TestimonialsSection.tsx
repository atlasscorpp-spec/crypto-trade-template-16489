"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "MarketHub transformed how we manage campaigns. The social media planner with approval workflows is exactly what we needed. Our team's productivity increased by 40%."
  },
  {
    name: "Sarah Johnson",
    role: "Agency Owner",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Having CRM, invoicing, and analytics in one platform has been a game-changer. We've reduced our tool stack from 8 to 1 and saved thousands in monthly subscriptions."
  },
  {
    name: "David Wilson",
    role: "Freelance Consultant",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The invoice management alone is worth the price. Automated billing and client tracking have helped me get paid 50% faster. Plus, the analytics are incredibly insightful."
  },
  {
    name: "Emily Zhang",
    role: "Social Media Manager",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The social media planning feature rivals Metricool. The team review system ensures quality content every time. It's become essential for managing our 20+ client accounts."
  },
  {
    name: "James Rodriguez",
    role: "Startup Founder",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "We run our entire marketing operation on MarketHub. The collaborative workspaces keep our remote team aligned, and the business analytics help us make data-driven decisions."
  },
  {
    name: "Lisa Thompson",
    role: "E-commerce Manager",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "The platform integrations are seamless. We connected all our tools in minutes. The task management with team collaboration features has streamlined our entire workflow."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Loved by Marketing Teams</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of marketers streamlining their workflow
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;