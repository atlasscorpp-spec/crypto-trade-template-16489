import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, BarChart3, Mail, ShoppingBag, Database, MessageSquare, Zap } from "lucide-react";

const LogoCarousel = () => {
  const integrations = [
    { icon: Facebook, name: "Facebook" },
    { icon: Instagram, name: "Instagram" },
    { icon: Linkedin, name: "LinkedIn" },
    { icon: Twitter, name: "Twitter/X" },
    { icon: BarChart3, name: "Google Analytics" },
    { icon: Mail, name: "Mailchimp" },
    { icon: Database, name: "Salesforce" },
    { icon: ShoppingBag, name: "Shopify" },
    { icon: MessageSquare, name: "Slack" },
    { icon: Zap, name: "Zapier" },
  ];

  const extendedIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <div className="container px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground">Integrates seamlessly with your favorite platforms</p>
      </div>
      <motion.div 
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedIntegrations.map((integration, index) => {
          const Icon = integration.icon;
          return (
            <motion.div
              key={`integration-${index}`}
              className="flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0.5 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium whitespace-nowrap">{integration.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;