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
    <section id="about" className="py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold mb-6 text-sm">
            About Prince Homeschooling
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Education That Grows
            <br />
            With Your{" "}
            <span className="text-gradient-primary italic">Family</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 5 years, we've been helping families discover the joy of homeschooling
            through personalized programs that honor each child's unique journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative rounded-[2rem] overflow-hidden shadow-float">
            <img
              src={aboutImage}
              alt="Parent and child learning together"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            <h3 className="font-display text-4xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Prince Homeschooling, we empower families to create rich, joyful learning
              experiences at home. We believe education should be an adventure that brings
              families closer together while preparing children for a bright future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert educators work alongside parents to design personalized curricula
              that spark curiosity, build confidence, and develop essential skills for life.
            </p>
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4 text-primary font-semibold">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Accredited programs recognized nationwide</span>
              </div>
              <div className="flex items-center gap-4 text-primary font-semibold">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Small student-to-teacher ratios for personalized support</span>
              </div>
              <div className="flex items-center gap-4 text-primary font-semibold">
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
              className="bg-background rounded-[1.5rem] p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="text-primary" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-muted">
        <svg
          className="absolute bottom-0 w-full h-24 text-card"
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

export default About;
