import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 transition-transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-soft">
              <span className="text-2xl text-primary-foreground font-display font-bold"></span>
            </div>
            <span className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Prince <span className="text-primary">Homeschool</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              Testimonials
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-8 space-y-6 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-semibold text-lg"
            >
              Testimonials
            </button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full text-lg py-6"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
