import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Plus, Minus, ShoppingCart, Star, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Extended product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Premium Chocolates",
      description: "Artisanal chocolates crafted with the finest ingredients for corporate gifting",
      longDescription: "Our premium chocolate collection features handcrafted delicacies made from the finest Belgian cocoa. Each piece is carefully selected and beautifully packaged, making them perfect for corporate gifts, client appreciation, or special occasions. The collection includes dark chocolate truffles, milk chocolate pralines, and white chocolate specialties.",
      category: "Edibles",
      price: 1299,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=400&fit=crop",
      features: [
        "Handcrafted Belgian chocolates",
        "Premium gift packaging included",
        "Customizable branding options",
        "Minimum order: 10 pieces",
        "Shelf life: 6 months",
        "Available in multiple flavors"
      ],
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Fresh Flower Bouquets",
      description: "Elegant flower arrangements for weddings and special occasions",
      longDescription: "Our fresh flower bouquets are carefully arranged by expert florists using the finest seasonal blooms. Perfect for weddings, corporate events, and celebrations, each arrangement is designed to create lasting impressions and memorable moments.",
      category: "Flowers",
      price: 899,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=400&fit=crop",
      features: [
        "Fresh seasonal flowers",
        "Professional arrangement",
        "Same-day delivery available",
        "Custom color themes",
        "Eco-friendly packaging",
        "Care instructions included"
      ],
      rating: 4.9,
      reviews: 89
    },
    // Add other products as needed...
  ];

  const product = products.find(p => p.id === parseInt(id || "1"));

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-deep-green mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button className="btn-hero">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hello! I'm interested in "${product.name}". Could you provide more details about bulk pricing and customization options?`);
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Breadcrumb */}
      <div className="bg-mint/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-emerald">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-emerald">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-deep-green font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-emerald hover:text-deep-green mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-sage-green/20 text-deep-green">
                {product.category}
              </Badge>
              
              <h1 className="text-4xl font-playfair font-bold text-deep-green mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sage-green'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              <div className="text-3xl font-bold text-emerald mb-6">
                ₹{product.price?.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground ml-2">per unit</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-xl font-playfair font-semibold text-deep-green">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-emerald flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-deep-green">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="text-lg font-semibold text-deep-green">
                Total: ₹{((product.price || 0) * quantity).toLocaleString()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button onClick={handleAddToCart} className="w-full btn-hero">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button onClick={handleWhatsAppInquiry} className="w-full btn-whatsapp">
                <MessageCircle className="h-5 w-5 mr-2" />
                Bulk Order Inquiry
              </Button>

              <div className="text-sm text-muted-foreground">
                <p>• Free shipping on orders above ₹2,000</p>
                <p>• Customization available for bulk orders</p>
                <p>• Same-day delivery in Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;