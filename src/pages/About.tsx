import { Button } from "@/components/ui/button";
import { Award, Users, Gift, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest products from trusted suppliers to ensure exceptional quality in every gift."
    },
    {
      icon: Heart,
      title: "Personal Touch", 
      description: "Every gift is curated with care and attention to detail, making each experience memorable and special."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you to understand and exceed your expectations."
    },
    {
      icon: Gift,
      title: "Curated Excellence",
      description: "Our team of experts carefully selects each product to ensure it meets our high standards of elegance and quality."
    }
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            About Tohfaazz
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Crafting memorable experiences through thoughtfully curated gifts since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-deep-green mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Tohfaazz emerged from a simple belief: that every gift should tell a story and create lasting memories. What started as a passion project has grown into a trusted partner for corporates, wedding planners, and event organizers across India.
                </p>
                <p>
                  We understand that gifting is an art form that requires careful consideration of the recipient, the occasion, and the message you want to convey. This understanding drives everything we do - from product selection to packaging design.
                </p>
                <p>
                  Today, we're proud to have facilitated thousands of meaningful gifting experiences, helping our clients express appreciation, celebrate milestones, and strengthen relationships through thoughtfully curated gifts.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop" 
                alt="Luxury gift packaging"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-mint/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-premium">
              <h3 className="text-2xl font-playfair font-bold text-deep-green mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To transform the art of gifting by curating premium, personalized experiences that create lasting impressions and strengthen relationships. We strive to make every gift a memorable moment that reflects thoughtfulness and care.
              </p>
            </div>
            <div className="card-premium">
              <h3 className="text-2xl font-playfair font-bold text-deep-green mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted premium gifting platform, known for our uncompromising quality, innovative curation, and ability to turn every occasion into a celebration worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-deep-green mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every gift we curate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-feature">
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-deep-green mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Create Memorable Experiences?
          </h2>
          <p className="text-sage-green text-lg mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect gifts for your next corporate event, wedding, or special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="btn-hero">
                Explore Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-green">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;