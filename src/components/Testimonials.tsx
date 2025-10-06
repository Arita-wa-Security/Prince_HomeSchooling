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
    <section id="testimonials" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stories From Our{" "}
            <span className="text-gradient-warm">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from parents who have discovered the joy of homeschooling with BrightPath.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-secondary text-secondary" size={18} />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 text-center shadow-primary">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-xl opacity-90">Successful Graduates</div>
          </div>
          <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 text-center shadow-medium">
            <div className="text-5xl font-bold mb-2">98%</div>
            <div className="text-xl">Parent Satisfaction</div>
          </div>
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 text-center shadow-primary">
            <div className="text-5xl font-bold mb-2">15+</div>
            <div className="text-xl opacity-90">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
