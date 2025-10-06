import { Button } from "./ui/button";
import { ArrowRight, BookOpen, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-homeschool.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
              <Sparkles size={18} />
              <span>Personalized Learning for Every Child</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Where Learning Feels Like{" "}
              <span className="text-gradient-primary">Home</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Join our nurturing homeschool community where children thrive through
              flexible, family-centered education that sparks curiosity and builds confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg px-8 py-6 shadow-primary"
              >
                Join Our Learning Family
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("programs")}
                className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
              >
                Explore Programs
                <BookOpen className="ml-2" size={20} />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-1 text-3xl font-bold text-primary">
                  <Heart className="fill-current" size={28} />
                  <span>98%</span>
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-primary">
              <img
                src={heroImage}
                alt="Happy family learning together at home"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl shadow-medium font-bold animate-bounce">
              Flexible Schedule
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-medium font-bold animate-pulse">
              Expert Guidance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
