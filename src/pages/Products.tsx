import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Filter, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Premium Chocolates",
      description: "Artisanal chocolates crafted with the finest ingredients for corporate gifting",
      category: "Edibles",
      price: 1299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Fresh Flower Bouquets",
      description: "Elegant flower arrangements for weddings and special occasions",
      category: "Flowers",
      price: 899,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Luxury Diaries",
      description: "Premium leather-bound diaries perfect for corporate gifts",
      category: "Stationery",
      price: 649,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Executive Pens",
      description: "Premium writing instruments for professional gifting",
      category: "Stationery",
      price: 899,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1565265478659-b769c6a39cd3?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Premium Perfumes",
      description: "Curated fragrance collections for luxury gifting",
      category: "Fragrance",
      price: 2499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Branded Pendrives",
      description: "Customizable tech accessories for corporate branding",
      category: "Technology",
      price: 799,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Luxury Hampers",
      description: "Curated gift hampers combining multiple premium items",
      category: "Hampers",
      price: 3499,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Custom Gift Sets",
      description: "Personalized gift collections tailored to your requirements",
      category: "Custom",
      price: 1999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop",
    },
  ];

  const categories = ["All", "Edibles", "Flowers", "Stationery", "Fragrance", "Technology", "Hampers", "Custom"];

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in ordering "${productName}". Could you please provide more details about pricing and customization options?`);
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
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

      {/* Filters Section */}
      <section className="py-8 bg-mint/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-emerald" />
              <h3 className="font-semibold text-deep-green">Filter Products</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Category Filter */}
              <div className="min-w-[200px]">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-white border-sage-green/30">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div className="min-w-[150px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-white border-sage-green/30">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategory !== "All" && (
              <Badge 
                variant="secondary" 
                className="bg-emerald/10 text-emerald hover:bg-emerald/20 cursor-pointer"
                onClick={() => setSelectedCategory("All")}
              >
                {selectedCategory} ✕
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="card-product group">
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge className="bg-sage-green/20 text-deep-green text-xs px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-gold text-gold mr-1" />
                      {product.rating}
                    </div>
                  </div>
                  
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xl font-playfair font-semibold text-deep-green mb-2 hover:text-emerald transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="text-lg font-bold text-emerald mb-4">
                    ₹{product.price.toLocaleString()}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-emerald hover:bg-forest-green text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      onClick={() => handleWhatsAppOrder(product.name)}
                      variant="outline" 
                      className="border-emerald text-emerald hover:bg-emerald hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
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