import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hello! I'd like to discuss your premium gifting services. Could you please provide more information?");
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      subtitle: "Mon-Sat 9AM-7PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@tohfaazz.com",
      subtitle: "We'll respond within 24h"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, Maharashtra",
      subtitle: "India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtitle: "9:00 AM - 7:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to create memorable gifting experiences? We're here to help you every step of the way
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-premium">
              <h2 className="text-3xl font-playfair font-bold text-deep-green mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-green mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-premium"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-green mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-premium"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-green mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-premium resize-none"
                    placeholder="Tell us about your gifting requirements..."
                  />
                </div>
                
                <Button type="submit" className="w-full btn-hero">
                  Send Message
                </Button>
              </form>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-8 border-t border-sage-green/20">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Prefer instant messaging?
                  </p>
                  <Button onClick={handleWhatsAppContact} className="btn-whatsapp">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-deep-green mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you create the perfect gifting experience. Reach out to us through any of the channels below, and our team will be happy to assist you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-feature">
                    <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-emerald" />
                    </div>
                    <h3 className="font-semibold text-deep-green mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Location Map Placeholder */}
              <div className="card-premium">
                <h3 className="text-xl font-playfair font-semibold text-deep-green mb-4">
                  Our Location
                </h3>
                <div className="bg-mint/30 rounded-lg p-8 text-center">
                  <MapPin className="h-12 w-12 text-emerald mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    We're proudly based in Mumbai, serving clients across India with our premium gifting solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;