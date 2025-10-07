import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds and connect your marketing platforms"
  },
  {
    icon: Settings,
    title: "Customize",
    description: "Set up your workflows, invite team members, and configure integrations"
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Launch campaigns, track performance, and grow your business"
  }
];

const HowItWorks = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6">
          How It <span className="text-gradient font-medium">Works</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Get started in minutes with our simple three-step process
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
                <Icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
