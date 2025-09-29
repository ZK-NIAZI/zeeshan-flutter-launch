import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery call",
      description: "scope & timeline",
      details: "We discuss your project requirements, goals, and establish clear timelines and deliverables."
    },
    {
      icon: PenTool,
      title: "Design & architecture",
      description: "low-fi → prototype",
      details: "Create wireframes, system architecture, and interactive prototypes to validate the approach."
    },
    {
      icon: Code,
      title: "Build & test",
      description: "milestones + demos",
      details: "Iterative development with regular milestones, code reviews, and demo sessions."
    },
    {
      icon: Rocket,
      title: "Release & handover",
      description: "CI/CD + docs",
      details: "Production deployment, automated pipelines, comprehensive documentation, and knowledge transfer."
    }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven process that ensures quality delivery and client satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-card/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto border border-border/30 group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-primary font-medium mb-3">{step.description}</p>
                  <p className="text-sm text-muted-foreground">{step.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};