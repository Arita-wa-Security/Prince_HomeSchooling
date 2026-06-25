import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import princeLogo from "../assets/prince_logo.png"; 

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* <div>
              <span className="text-2xl text-primary-foreground font-display font-bold"><img src={princeLogo} alt="Prince Homeschool" className="h-40 w-40" /></span>
            </div> */}
              <span className="font-display text-2xl font-bold">Prince HomeSchool</span>
            </div>
            <p className="text-background/70 leading-relaxed text-lg">
              Empowering families to create joyful, personalized learning experiences at home.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 bg-background/10 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-background/10 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-background/10 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-background/10 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-background/70 hover:text-primary transition-colors text-lg"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/70 hover:text-primary transition-colors text-lg"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-background/70 hover:text-primary transition-colors text-lg"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-background/70 hover:text-primary transition-colors text-lg"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-xl mb-6">Our Programs</h4>
            <ul className="space-y-4 text-lg">
              <li className="text-background/70">IGCSE Cambridge</li>
              <li className="text-background/70">CBE</li>
              <li className="text-background/70">Sign Language</li>
              <li className="text-background/70">Music</li>
              <li className="text-background/70">Swahili</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4 text-background/70 text-lg">
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>princehomeschool20@gmail.com</span>
              </li>
              <li>+254 799 186 770</li>
              <li>
                Katani Rd<br />
                Syokimau, Machakos
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60">
              © {new Date().getFullYear()} Prince HomeSchool. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Powered by AriLabs
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
