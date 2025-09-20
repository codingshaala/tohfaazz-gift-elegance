import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Palette, Package, Clock, MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const categories = [
    { name: "Corporate", href: "/products", color: "bg-emerald" },
    { name: "Wedding", href: "/products", color: "bg-sage-green" },
    { name: "Party", href: "/products", color: "bg-forest-green" }
  ];

  const featuredProducts = [
    {
      name: "Premium Chocolates",
      description: "Artisanal chocolates perfect for corporate gifting",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop",
    },
    {
      name: "Fresh Flowers",
      description: "Elegant bouquets for weddings and celebrations",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
    },
    {
      name: "Luxury Perfumes",
      description: "Curated fragrance collections for premium gifting",
      image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=300&fit=crop",
    },
    {
      name: "Custom Hampers",
      description: "Personalized gift collections tailored to your needs",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Sourced from trusted suppliers, every gift meets our high standards of excellence and craftsmanship."
    },
    {
      icon: Palette,
      title: "Customization",
      description: "Personalized packaging and curated selections tailored to your specific requirements and branding needs."
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Seamless handling of large orders with competitive pricing for corporate events and celebrations."
    },
    {
      icon: Clock,
      title: "Hassle-Free Booking",
      description: "Simple ordering process with dedicated support to ensure smooth delivery and customer satisfaction."
    }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello! I'm interested in your premium gifting services. Could you please provide more information?");
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green/80 via-emerald/70 to-sage-green/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Curated Gifts for
              <span className="block text-gold">Corporates, Weddings & Parties</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your special occasions with our thoughtfully selected premium gift collections that create lasting impressions
            </p>
            
            {/* Quick Category Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {categories.map((category) => (
                <Link key={category.name} to={category.href}>
                  <Button className={`${category.color} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    {category.name} Gifts
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="btn-hero">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button onClick={handleWhatsAppContact} className="btn-whatsapp">
                <MessageCircle className="h-5 w-5" />
                Chat with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-green mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular gift categories, carefully curated for different occasions and preferences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="card-product group">
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-deep-green mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link to="/products">
                    <Button variant="outline" className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-mint/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-green mb-4">
              Why Choose Tohfaazz?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional gifting experiences that exceed your expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="card-feature group">
                <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald/20 transition-colors">
                  <feature.icon className="h-10 w-10 text-emerald" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-deep-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Mini Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-green mb-6">
                Crafting Memorable Experiences Since 2020
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Tohfaazz, we believe every gift should tell a story. Our journey began with a simple mission: to transform ordinary gifting into extraordinary experiences that create lasting memories and strengthen relationships.
                </p>
                <p>
                  From corporate appreciation gifts to wedding favors and party giveaways, we curate premium collections that reflect thoughtfulness, quality, and attention to detail. Every product in our catalog is carefully selected to ensure it meets our high standards of excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/about">
                  <Button className="btn-hero">
                    Learn Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-white">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop" 
                alt="Premium gift packaging and presentation"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-emerald/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-deep-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-sage-green text-xl mb-12 max-w-3xl mx-auto">
            Whether you're planning a corporate event, wedding celebration, or special party, we're here to help you find the perfect gifts that will be remembered and cherished.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-white text-deep-green hover:bg-cream px-8 py-4 text-lg font-semibold rounded-xl">
                Browse Products
              </Button>
            </Link>
            <Button onClick={handleWhatsAppContact} className="btn-whatsapp text-lg px-8 py-4">
              <MessageCircle className="h-5 w-5" />
              Start Planning
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;