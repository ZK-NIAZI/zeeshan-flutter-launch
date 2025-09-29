import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    project: "",
    startDate: "",
    budget: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent('New booking request — Portfolio site');
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
University/Company: ${formData.organization}
Project summary:
${formData.project}

Preferred start date: ${formData.startDate}
Budget: ${formData.budget}
Phone: ${formData.phone}`);
    
    window.location.href = `mailto:shaniniazi568@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened!",
      description: "Please send the email from your client. I'll get back to you within 24 hours."
    });
    
    setFormData({
      name: "",
      email: "",
      organization: "",
      project: "",
      startDate: "",
      budget: "",
      phone: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your Flutter project? Book a free consultation call and let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="card-floating p-8">
            <h3 className="text-2xl font-bold mb-6">Book Your Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">University / Company</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="bg-background/50"
                  placeholder="e.g., UET Lahore, Tech Startup"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Brief Project Summary *</Label>
                <Textarea
                  id="project"
                  required
                  rows={4}
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                  className="bg-background/50"
                  placeholder="Describe your project, key features, and goals..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Preferred Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under PKR 10,000</SelectItem>
                    <SelectItem value="10k-25k">PKR 10,000 - 25,000</SelectItem>
                    <SelectItem value="25k-50k">PKR 25,000 - 50,000</SelectItem>
                    <SelectItem value="50k-100k">PKR 50,000 - 100,000</SelectItem>
                    <SelectItem value="100k-plus">PKR 100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-background/50"
                placeholder="+92 333 7783611"
              />
              </div>

              <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send & book call"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Prefer direct contact? Reach out via email, phone, or connect with me on social platforms.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:shaniniazi568@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    shaniniazi568@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+923337783611" className="text-muted-foreground hover:text-primary transition-colors">
                    +92 333 7783611
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/923337783611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors"
                aria-label="Chat on WhatsApp with +92 333 7783611"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-muted-foreground text-sm">Quick chat support</div>
                </div>
              </a>
            </div>

            <div className="pt-4">
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/zeeshan-niazi-app-developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Open Zeeshan's LinkedIn"
                >
                  <Button size="lg" className="btn-ghost">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://github.com/ZK-NIAZI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Open Zeeshan's GitHub"
                >
                  <Button size="lg" className="btn-ghost">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-card/20 rounded-lg p-6 border border-border/30">
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to inquiries within 24 hours. For urgent projects, feel free to call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};