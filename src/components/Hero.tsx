import { Button } from "./ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-homeschool.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/5 text-6xl font-display animate-float">
          ✨
        </div>
        <div className="absolute top-40 right-20 text-secondary/5 text-8xl font-display animate-float-slow">
          📚
        </div>
        <div className="absolute bottom-40 left-1/4 text-primary/5 text-7xl font-display animate-float">
          🌱
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold text-sm">
              <Sparkles size={16} />
              <span>Personalized Learning for Every Child</span>
            </div>
            
            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              Where Learning
              <br />
              Feels Like{" "}
              <span className="text-gradient-primary italic">Home</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Join our nurturing homeschool community where children thrive through
              flexible, family-centered education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-10 py-7 shadow-float hover:shadow-primary transition-all duration-300"
              >
                Join Our Learning Family
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("programs")}
                className="border-2 text-lg px-10 py-7 hover:shadow-soft transition-all duration-300"
              >
                Explore Programs
                <BookOpen className="ml-2" size={20} />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-12 justify-center lg:justify-start pt-12">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-display font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-display font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-display font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-float hover:shadow-primary transition-all duration-500">
              <img
                src={heroImage}
                alt="Happy family learning together at home"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-card">
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

export default Hero;
