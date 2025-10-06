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
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold mb-6 text-sm">
            How It Works
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Your Journey to
            <br />
            <span className="text-gradient-primary italic">Homeschool Success</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started is simple. Here's how we support your family every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
              )}
              
              <div className="relative bg-card rounded-[1.5rem] p-10 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-medium">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <step.icon className="text-primary" size={36} />
                </div>

                <h3 className="font-display text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-muted rounded-[2rem] p-12 md:p-16 max-w-4xl">
            <h3 className="font-display text-3xl md:text-4xl font-bold">Ready to start your homeschool journey?</h3>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl leading-relaxed">
              Join hundreds of families who have found joy and success with BrightPath Homeschool.
            </p>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-muted">
        <svg
          className="absolute bottom-0 w-full h-24 text-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
          fill="currentColor"
        >
          <path d="M0,0 C240,40 480,40 720,20 C960,0 1200,0 1440,20 L1440,54 L0,54 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
