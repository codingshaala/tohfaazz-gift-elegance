import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Chocolates",
      description: "Artisanal chocolates crafted with the finest ingredients for corporate gifting",
      category: "Edibles",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Fresh Flower Bouquets",
      description: "Elegant flower arrangements for weddings and special occasions",
      category: "Flowers",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Luxury Diaries",
      description: "Premium leather-bound diaries perfect for corporate gifts",
      category: "Stationery",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Executive Pens",
      description: "Premium writing instruments for professional gifting",
      category: "Stationery",
      image: "https://images.unsplash.com/photo-1565265478659-b769c6a39cd3?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Premium Perfumes",
      description: "Curated fragrance collections for luxury gifting",
      category: "Fragrance",
      image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Branded Pendrives",
      description: "Customizable tech accessories for corporate branding",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Luxury Hampers",
      description: "Curated gift hampers combining multiple premium items",
      category: "Hampers",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Custom Gift Sets",
      description: "Personalized gift collections tailored to your requirements",
      category: "Custom",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop",
    },
  ];

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in ordering "${productName}". Could you please provide more details about pricing and customization options?`);
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Our Product Collection
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our curated selection of premium gifts perfect for corporates, weddings, and special occasions
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card-product">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-sage-green/20 text-deep-green text-xs px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-deep-green mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="w-full btn-whatsapp"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-sage-green text-lg mb-8 max-w-2xl mx-auto">
            We specialize in creating bespoke gift collections tailored to your specific requirements and budget
          </p>
          <Button 
            onClick={() => handleWhatsAppOrder("Custom Gift Solution")}
            className="btn-hero"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Discuss Custom Requirements
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;