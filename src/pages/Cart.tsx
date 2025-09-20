import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Item Removed",
      description: `${productName} has been removed from your cart.`,
    });
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const orderDetails = items.map(item => 
      `${item.name} (Qty: ${item.quantity}) - ₹${((item.price || 0) * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const total = getTotalPrice().toLocaleString();
    const message = encodeURIComponent(`Hello! I'd like to place an order:\n\n${orderDetails}\n\nTotal: ₹${total}\n\nCould you please confirm availability and provide payment details?`);
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-sage-green mx-auto mb-6" />
            <h1 className="text-3xl font-playfair font-bold text-deep-green mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Discover our premium gift collections and add items to your cart to get started.
            </p>
            <Link to="/products">
              <Button className="btn-hero">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-mint/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-emerald hover:text-deep-green mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-playfair font-bold text-deep-green">
            Shopping Cart ({getTotalItems()} items)
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="card-premium">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="sm:w-32 sm:h-32 w-full h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <Link to={`/products/${item.id}`}>
                        <h3 className="text-xl font-playfair font-semibold text-deep-green hover:text-emerald transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sage-green text-sm mt-1">{item.category}</p>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Price and Remove */}
                      <div className="text-right space-y-2">
                        <div className="font-semibold text-emerald">
                          ₹{((item.price || 0) * item.quantity).toLocaleString()}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-red-500 hover:text-red-700 h-8 px-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="text-center pt-6">
              <Button 
                variant="outline" 
                onClick={() => {
                  clearCart();
                  toast({
                    title: "Cart Cleared",
                    description: "All items have been removed from your cart.",
                  });
                }}
                className="text-red-500 border-red-200 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-premium sticky top-6">
              <h3 className="text-2xl font-playfair font-bold text-deep-green mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping</span>
                  <span>{getTotalPrice() >= 2000 ? 'Free' : '₹150'}</span>
                </div>
                
                {getTotalPrice() >= 2000 && (
                  <div className="text-sm text-emerald">
                    🎉 You get free shipping!
                  </div>
                )}
                
                <hr className="border-sage-green/20" />
                
                <div className="flex justify-between text-lg font-semibold text-deep-green">
                  <span>Total</span>
                  <span>₹{(getTotalPrice() + (getTotalPrice() >= 2000 ? 0 : 150)).toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={handleWhatsAppCheckout} className="w-full btn-hero">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Proceed with WhatsApp
                </Button>
                
                <div className="text-xs text-muted-foreground text-center">
                  Complete your order via WhatsApp for personalized service and custom packaging options.
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-sage-green/20 space-y-2 text-sm text-muted-foreground">
                <div>✓ Premium gift packaging included</div>
                <div>✓ Customization options available</div>
                <div>✓ Same-day delivery in Mumbai</div>
                <div>✓ Bulk order discounts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;