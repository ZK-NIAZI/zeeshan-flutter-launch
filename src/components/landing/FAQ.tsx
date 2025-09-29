import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Do you do full project work?",
      answer: "Yes, I work on complete projects with student participation & clear authorship. For FYP projects, I ensure students understand every aspect of the development process and maintain proper academic integrity."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Absolutely. I understand the importance of confidentiality in business projects and am happy to sign NDAs before discussing project details or accessing sensitive information."
    },
    {
      question: "Do you accept remote work?",
      answer: "Yes, part-time remote work is my preferred arrangement. I'm experienced in remote collaboration using modern tools like Slack, Discord, GitHub, and video conferencing for regular check-ins and demos."
    },
    {
      question: "How do you manage payments?",
      answer: "I use a milestone-based approach: 30% upfront to begin work, payments at agreed milestones throughout development, and final payment upon project completion and handover with full documentation."
    },
    {
      question: "What's included in FYP mentorship?",
      answer: "FYP mentorship includes architecture planning, code review sessions, best practices guidance, documentation help, demo preparation, and ongoing support throughout your final year project timeline."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, I offer post-launch support for bug fixes, minor updates, and technical questions. Extended support packages are available for clients who need ongoing maintenance and feature development."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-card/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about my Flutter development and mentorship services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg px-6 data-[state=open]:bg-card/80 transition-all duration-300"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline hover:text-primary">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};