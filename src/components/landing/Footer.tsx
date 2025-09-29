import { Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio and description */}
          <div>
            <h3 className="text-xl font-bold mb-2">Zeeshan Khan</h3>
            <p className="text-muted-foreground mb-4">
              Full-Stack Flutter Developer @SpeedForce Digital. BS CS.
            </p>
            <p className="text-sm text-muted-foreground">
              Passionate about crafting beautiful mobile experiences and mentoring the next generation of developers.
            </p>
          </div>

          {/* Links and actions */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://zk-niazi.github.io/Portfolioo-/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Open Zeeshan's portfolio"
              >
                <Button variant="outline" size="sm" className="bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
              </a>
              <a 
                href="https://github.com/ZK-NIAZI" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Open Zeeshan's GitHub"
              >
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/zeeshan-niazi-app-developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Open Zeeshan's LinkedIn"
              >
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a 
                href="https://drive.google.com/file/d/16EbwIONhopJUC9WdyUaMPa17FWLlny0L/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Download Zeeshan's Resume"
              >
                <Button variant="outline" size="sm" className="bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume (PDF)
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Zeeshan Khan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Form data is collected solely for project communication and is never shared with third parties.
          </p>
        </div>
      </div>
    </footer>
  );
};