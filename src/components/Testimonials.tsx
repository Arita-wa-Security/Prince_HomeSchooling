import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent of 2 students",
      image: "👩‍🦰",
      rating: 5,
      text: "BrightPath transformed our family's learning experience. My children wake up excited to learn every day! The personalized attention and flexible approach have been life-changing.",
    },
    {
      name: "Michael Chen",
      role: "Parent of 1 student",
      image: "👨",
      rating: 5,
      text: "As a working parent, I was worried about homeschooling. BrightPath's support and structured curriculum made it possible. My son has thrived academically and socially.",
    },
    {
      name: "Emma Rodriguez",
      role: "Parent of 3 students",
      image: "👩",
      rating: 5,
      text: "Three kids, three different learning styles - BrightPath handles it beautifully. The community events help my children socialize while the curriculum keeps them challenged.",
    },
    {
      name: "David Thompson",
      role: "Parent of 1 student",
      image: "👨‍🦱",
      rating: 5,
      text: "The educators genuinely care about each child's success. They helped my daughter overcome learning challenges and now she's excelling beyond what we imagined possible.",
    },
    {
      name: "Lisa Anderson",
      role: "Parent of 2 students",
      image: "👩‍🦱",
      rating: 5,
      text: "BrightPath gave us the freedom to travel while maintaining academic excellence. The flexibility and quality of education have exceeded all our expectations.",
    },
    {
      name: "James Wilson",
      role: "Parent of 1 student",
      image: "👨‍🦳",
      rating: 5,
      text: "My son struggled in traditional school. Within months at BrightPath, his confidence soared and he rediscovered his love of learning. We couldn't be happier!",
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-muted relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-5 py-2.5 rounded-full font-semibold mb-6 text-sm">
            Testimonials
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Stories From Our
            <br />
            <span className="text-gradient-warm italic">Community</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from parents who have discovered the joy of homeschooling with Prince HomeSchool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-[1.5rem] p-10 shadow-soft hover:shadow-medium transition-all duration-300 relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/10" size={48} />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-secondary text-secondary" size={18} />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary text-primary-foreground rounded-[1.5rem] p-12 text-center shadow-float">
            <div className="font-display text-6xl font-bold mb-3">500+</div>
            <div className="text-xl opacity-90">Successful Graduates</div>
          </div>
          <div className="bg-secondary text-secondary-foreground rounded-[1.5rem] p-12 text-center shadow-float">
            <div className="font-display text-6xl font-bold mb-3">98%</div>
            <div className="text-xl">Parent Satisfaction</div>
          </div>
          <div className="bg-primary text-primary-foreground rounded-[1.5rem] p-12 text-center shadow-float">
            <div className="font-display text-6xl font-bold mb-3">15+</div>
            <div className="text-xl opacity-90">Years of Excellence</div>
          </div>
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

export default Testimonials;
