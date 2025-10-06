import { Heart, Users, Target, Award } from "lucide-react";
import aboutImage from "@/assets/about-learning.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "We believe every child deserves personalized attention in a loving environment where they feel safe to explore and grow.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Education works best when families are involved. We partner with parents to create meaningful learning experiences.",
    },
    {
      icon: Target,
      title: "Flexible Approach",
      description: "Every child learns differently. Our programs adapt to individual learning styles, pace, and interests.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain high academic standards while fostering creativity, critical thinking, and a lifelong love of learning.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
            About BrightPath
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education That Grows With Your{" "}
            <span className="text-gradient-primary">Family</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we've been helping families discover the joy of homeschooling
            through personalized programs that honor each child's unique journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-medium">
            <img
              src={aboutImage}
              alt="Parent and child learning together"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At BrightPath Homeschool, we empower families to create rich, joyful learning
              experiences at home. We believe education should be an adventure that brings
              families closer together while preparing children for a bright future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert educators work alongside parents to design personalized curricula
              that spark curiosity, build confidence, and develop essential skills for life.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3 text-primary font-semibold mb-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Accredited programs recognized nationwide</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-semibold mb-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Small student-to-teacher ratios for personalized support</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-semibold">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Community events and group activities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="text-primary" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
