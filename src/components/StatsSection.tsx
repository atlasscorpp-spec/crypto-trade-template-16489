import { motion } from "framer-motion";
import { Users, TrendingUp, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users"
  },
  {
    icon: TrendingUp,
    value: "2.5M+",
    label: "Posts Scheduled"
  },
  {
    icon: Clock,
    value: "40hrs",
    label: "Saved Per Week"
  },
  {
    icon: Globe,
    value: "120+",
    label: "Countries"
  }
];

const StatsSection = () => {
  return (
    <section className="container px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
