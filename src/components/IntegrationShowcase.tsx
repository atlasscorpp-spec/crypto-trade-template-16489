import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, BarChart3, Mail, ShoppingBag, Database, MessageSquare, Zap, Youtube, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const integrationCategories = [
  {
    category: "Social Media",
    description: "Connect and manage all your social accounts",
    integrations: [
      { icon: Facebook, name: "Facebook", color: "text-blue-500" },
      { icon: Instagram, name: "Instagram", color: "text-pink-500" },
      { icon: Linkedin, name: "LinkedIn", color: "text-blue-600" },
      { icon: Twitter, name: "Twitter/X", color: "text-sky-500" },
      { icon: Youtube, name: "YouTube", color: "text-red-500" },
    ]
  },
  {
    category: "Analytics & Ads",
    description: "Track performance and optimize campaigns",
    integrations: [
      { icon: BarChart3, name: "Google Analytics", color: "text-orange-500" },
      { icon: TrendingUp, name: "Google Ads", color: "text-green-500" },
    ]
  },
  {
    category: "Business Tools",
    description: "Streamline your workflow",
    integrations: [
      { icon: Mail, name: "Mailchimp", color: "text-yellow-500" },
      { icon: Database, name: "Salesforce", color: "text-blue-400" },
      { icon: ShoppingBag, name: "Shopify", color: "text-green-600" },
      { icon: MessageSquare, name: "Slack", color: "text-purple-500" },
      { icon: Zap, name: "Zapier", color: "text-orange-400" },
    ]
  }
];

const IntegrationShowcase = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6">
          Powerful <span className="text-gradient font-medium">Integrations</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Connect with all your favorite tools and platforms in one place
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {integrationCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 p-6 h-full">
              <h3 className="text-xl font-medium mb-2">{category.category}</h3>
              <p className="text-sm text-gray-400 mb-6">{category.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {category.integrations.map((integration, index) => {
                  const Icon = integration.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg glass hover:bg-white/5 transition-all cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className={`w-8 h-8 ${integration.color}`} />
                      <span className="text-xs text-gray-300 text-center">{integration.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationShowcase;
