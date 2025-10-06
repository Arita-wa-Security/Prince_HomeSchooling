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
    <section id="programs" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full font-semibold mb-4">
            Our Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Learning Paths for Every{" "}
            <span className="text-gradient-warm">Stage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious beginners to independent learners, we provide age-appropriate
            programs designed to meet your child exactly where they are.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-medium hover:shadow-primary transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold">
                  {program.age}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-primary">
          <h3 className="text-3xl font-bold mb-4">Not sure which program fits?</h3>
          <p className="text-xl mb-6 opacity-90">
            Schedule a free consultation with our education specialists to find the perfect path for your child.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-bold"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
