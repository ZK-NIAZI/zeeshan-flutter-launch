import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad Hassan",
      role: "Student — UET Lahore (FYP)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Zeeshan's mentorship was invaluable for my FYP. His guidance on Flutter architecture and clean code practices helped me deliver a professional-quality application.",
      rating: 5
    },
    {
      name: "Sarah Khan",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Working with Zeeshan on our mobile app was fantastic. He delivered on time, communicated clearly, and the code quality exceeded our expectations.",
      rating: 5
    },
    {
      name: "Muhammad Ali",
      role: "CS Student — LUMS",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The part-time development support was exactly what our team needed. Zeeshan helped us implement complex features while maintaining clean architecture.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students and startups who've achieved their goals with professional Flutter development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-floating p-6">
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} profile picture`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border/30"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};