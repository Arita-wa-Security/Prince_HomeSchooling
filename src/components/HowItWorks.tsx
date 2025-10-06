import { MessageCircle, FileText, Users, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Connect With Us",
      description: "Reach out for a free consultation. We'll discuss your family's goals, your child's learning style, and answer all your questions.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Personalized Plan",
      description: "Our educators create a customized learning plan tailored to your child's interests, strengths, and developmental needs.",
    },
    {
      icon: Users,
      number: "03",
      title: "Ongoing Support",
      description: "Join our community with regular check-ins, parent resources, group activities, and dedicated educational support.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Watch Them Thrive",
      description: "Celebrate milestones together as your child grows academically, socially, and emotionally in a nurturing environment.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Journey to{" "}
            <span className="text-gradient-primary">Homeschool Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Here's how we support your family every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="text-primary" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-muted rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to start your homeschool journey?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Join hundreds of families who have found joy and success with BrightPath Homeschool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
