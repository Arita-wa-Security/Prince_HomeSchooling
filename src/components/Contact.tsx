import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon!", {
      description: "Your message has been received. We typically respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold mb-6 text-sm">
            Get In Touch
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Begin
            <br />
            Your{" "}
            <span className="text-gradient-primary italic">Journey?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Reach out and let's start a conversation
            about your family's educational journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-4xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're just exploring homeschooling or ready to enroll, our friendly
                team is here to answer your questions and guide you through the process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-8 bg-card rounded-[1.5rem] shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-muted-foreground">princehomeschool20@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-8 bg-card rounded-[1.5rem] shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-muted-foreground">(+254) 799-186770</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-8 bg-card rounded-[1.5rem] shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Katani Rd<br />
                    Syokimau, Machakos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-[1.5rem] p-8 border-2 border-secondary/20">
              <h4 className="font-bold mb-3 text-xl">Free Consultation Available</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Schedule a complimentary 30-minute call with our education specialists
                to discuss your family's unique needs.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-[2rem] p-10 shadow-float">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-3">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="h-14 text-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-3">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="h-14 text-lg"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-3">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(+254) 799-186770"
                  className="h-14 text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-3">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your family and what you're looking for..."
                  className="min-h-[160px] resize-none text-lg"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-7 shadow-float hover:shadow-primary transition-all duration-300"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </Button>

              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                By submitting this form, you agree to be contacted by Prince Homeschool
                regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
