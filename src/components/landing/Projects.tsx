import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import flutterApp1 from "@/assets/flutter-app-1.jpg";
import flutterApp2 from "@/assets/flutter-app-2.jpg";
import flutterApp3 from "@/assets/flutter-app-3.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Qaider-APP SFD",
      image: flutterApp1,
      description: "Full-stack mobile application with real-time features",
      tech: ["Flutter", "Firebase", "REST API", "Real-time sync"],
      outcome: "Active users, scalable architecture",
      role: "Lead Flutter Developer",
      link: "#"
    },
    {
      title: "MAP Pakistan",
      image: flutterApp2,
      description: "Location-based service with advanced mapping",
      tech: ["Flutter", "Google Maps", "Location Services", "Backend API"],
      outcome: "High-performance location tracking",
      role: "Full-stack Developer",
      link: "#"
    },
    {
      title: "Quickly Transfer",
      image: flutterApp3,
      description: "Fast file transfer application with modern UI",
      tech: ["Flutter", "File Management", "Cross-platform", "Modern UI"],
      outcome: "Intuitive user experience",
      role: "Mobile App Developer",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real applications built with modern Flutter development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-floating overflow-hidden group">
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} application screenshot`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <p className="text-xs text-primary font-medium">{project.role}</p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted/50 text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <p className="text-sm">
                  <span className="text-muted-foreground">Outcome: </span>
                  <span className="text-foreground">{project.outcome}</span>
                </p>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="btn-ghost flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View case study
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};