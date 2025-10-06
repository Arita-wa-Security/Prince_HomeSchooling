import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import earlyImage from "@/assets/program-early.jpg";
import elementaryImage from "@/assets/program-elementary.jpg";
import middleImage from "@/assets/program-middle.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Early Learning",
      age: "Ages 5-7",
      description: "Building foundations through play-based learning, early literacy, math concepts, and social-emotional development in a nurturing environment.",
      image: earlyImage,
      features: [
        "Phonics & early reading skills",
        "Hands-on math activities",
        "Creative arts & music",
        "Nature exploration",
      ],
    },
    {
      title: "Elementary Years",
      age: "Ages 8-11",
      description: "Developing core academic skills while encouraging curiosity through project-based learning, STEM activities, and creative expression.",
      image: elementaryImage,
      features: [
        "Comprehensive literacy program",
        "Science experiments & discovery",
        "World cultures & geography",
        "Critical thinking skills",
      ],
    },
    {
      title: "Middle School",
      age: "Ages 12-14",
      description: "Preparing for high school with advanced academics, independent study skills, leadership development, and career exploration.",
      image: middleImage,
      features: [
        "Advanced coursework",
        "Research & writing projects",
        "Technology & coding",
        "Community service opportunities",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-32 bg-muted relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-5 py-2.5 rounded-full font-semibold mb-6 text-sm">
            Our Programs
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Learning Paths for
            <br />
            Every{" "}
            <span className="text-gradient-warm italic">Stage</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From curious beginners to independent learners, we provide age-appropriate
            programs designed to meet your child exactly where they are.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-[2rem] overflow-hidden shadow-medium hover:shadow-float transition-all duration-500 group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-bold shadow-medium">
                  {program.age}
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="font-display text-3xl font-bold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-2 hover:shadow-soft transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-16 text-center shadow-float">
          <h3 className="font-display text-4xl lg:text-5xl font-bold mb-6">Not sure which program fits?</h3>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation with our education specialists to find the perfect path for your child.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-bold text-lg px-10 py-7"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-background">
        <svg
          className="absolute bottom-0 w-full h-24 text-muted"
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

export default Programs;
