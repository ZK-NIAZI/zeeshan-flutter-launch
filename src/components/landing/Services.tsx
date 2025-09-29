import { Smartphone, GraduationCap, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Full-stack Flutter Apps",
      description: "Mobile UI + backend (REST / WebSocket), maps, auth, payments.",
      features: ["Cross-platform mobile development", "Real-time features with WebSocket", "Payment integration", "Maps & location services"]
    },
    {
      icon: GraduationCap,
      title: "FYP Mentorship & Implementation",
      description: "Architecture, coding, code review, docs, demo prep.",
      features: ["Project architecture guidance", "Code review & best practices", "Documentation & demo preparation", "Academic compliance"]
    },
    {
      icon: Rocket,
      title: "Deployment & CI/CD",
      description: "Play/App store builds, CI pipelines, server setup, deployment.",
      features: ["App store deployment", "Automated CI/CD pipelines", "Server configuration", "Production monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Flutter development services from concept to production
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="card-floating p-8 group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};