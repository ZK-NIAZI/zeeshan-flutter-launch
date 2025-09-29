import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorkspace from "@/assets/hero-workspace.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">✨ Available for Projects</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              I build <span className="gradient-text">full-stack</span> Flutter apps — from idea to production.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Part-time & contract work for startups and final-year students: mobile, backend, APIs, CI/CD, and deployment.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <a 
              href="tel:+923337783611" 
              className="btn-hero group inline-flex items-center justify-center"
              aria-label="Call Zeeshan at +92 333 7783611"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book a free 15-min call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-2">
              <a 
                href="https://zk-niazi.github.io/Portfolioo-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary group inline-flex items-center justify-center"
                aria-label="View Zeeshan's portfolio projects"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View sample projects
              </a>
              <a 
                href="https://wa.me/923337783611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
                aria-label="Chat on WhatsApp with +92 333 7783611"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Availability info */}
          <p className="text-sm text-muted-foreground">
            <strong>Availability:</strong> Part-time (evenings & weekends) — Remote or local in Lahore.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              1+ year professional Flutter
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              AI-accelerated dev workflows
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              End-to-end releases
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-card/20 backdrop-blur-sm border border-border/30">
            <img 
              src={heroWorkspace} 
              alt="Flutter development workspace showing code editor and mobile app previews"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/30 animate-float">
            <div className="text-2xl font-bold gradient-text">50</div>
            <div className="text-sm text-muted-foreground">Apps Delivered</div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/30 animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-2xl font-bold gradient-text">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-muted-foreground mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};