import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 50% of viewport height
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-elegant">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">Ready to start your project?</p>
            <p className="text-xs text-muted-foreground">Book a free 15-min consultation</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="btn-hero text-sm px-4 py-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book Call
            </Button>
            
            <Button 
              size="sm" 
              variant="ghost" 
              className="p-2"
              onClick={() => setIsDismissed(true)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};