import { MessageCircle, Users, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const packages = [
    {
      icon: MessageCircle,
      title: "Quick Consult",
      subtitle: "Review + 1-hour call",
      price: "PKR 1,500",
      description: "Perfect for project reviews, technical guidance, or quick problem-solving sessions.",
      features: [
        "1-hour video consultation",
        "Project/code review",
        "Technical recommendations",
        "Architecture guidance",
        "Follow-up summary document"
      ]
    },
    {
      icon: Users,
      title: "Mentorship Package",
      subtitle: "4 sessions",
      price: "PKR 8,000",
      description: "Comprehensive mentorship for FYP students or developers looking to improve their Flutter skills.",
      features: [
        "4 x 1-hour mentoring sessions",
        "Code review & feedback",
        "Best practices guidance",
        "Project planning assistance",
        "Career development advice"
      ],
      popular: true
    },
    {
      icon: Code,
      title: "Part-time Implementation",
      subtitle: "milestone based",
      price: "From PKR 25,000",
      description: "Full development services with flexible engagement based on project scope and requirements.",
      features: [
        "Custom development scope",
        "Milestone-based delivery",
        "Full-stack implementation",
        "CI/CD setup included",
        "Documentation & handover"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for every type of engagement — from quick consults to full project development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card 
                key={index} 
                className={`card-floating p-8 relative ${
                  pkg.popular ? 'ring-2 ring-primary/50 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.subtitle}</p>
                  
                  <div className="text-3xl font-bold gradient-text mb-2">{pkg.price}</div>
                  {pkg.title === "Part-time Implementation" && (
                    <p className="text-xs text-muted-foreground">scope dependent</p>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-6 text-center">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${pkg.popular ? 'btn-hero' : 'btn-secondary'}`}>
                  Request this package
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All packages include clear communication, regular updates, and professional documentation.
          </p>
          <p className="text-sm text-muted-foreground">
            Payment terms: 30% upfront, milestones for larger projects, final release upon completion.
          </p>
        </div>
      </div>
    </section>
  );
};