import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Building,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-secondary/30 py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground px-4 py-1 italic">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary italic leading-tight">
              Connect With Us
            </h1>
            <p className="text-xl text-muted-foreground italic leading-relaxed">
              For dealership, bulk orders & partnerships, or simply to learn more about our products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-primary/5 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold text-secondary italic">Send a Message</h2>
                <p className="text-muted-foreground italic text-sm">We'll get back to you within 24-48 hours.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary/70 italic px-1">Name</label>
                    <Input placeholder="Enter your name" className="rounded-2xl border-primary/10 h-12 bg-secondary/5 focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary/70 italic px-1">Phone</label>
                    <Input placeholder="Enter your phone number" className="rounded-2xl border-primary/10 h-12 bg-secondary/5 focus-visible:ring-primary/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary/70 italic px-1">Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="rounded-3xl border-primary/10 min-h-[150px] bg-secondary/5 focus-visible:ring-primary/20 p-4" 
                  />
                </div>
                <Button className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg group">
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-secondary italic">Company Details</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary italic">Phone</h4>
                      <p className="text-muted-foreground">+91 9351065510</p>
                      
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary italic">Email</h4>
                      <a 
  href="mailto:tanushreeorganics@gmail.com"
  className="text-muted-foreground hover:text-primary transition-colors"
>
  tanushreeorganics@gmail.com
</a>
                    
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary italic">Office Address</h4>
                      <p className="text-muted-foreground">
                        Plot No.152,Opp.Tehsil,Ward No 5,<br />
                        Sangaria (Hanumangarh), Rajasthan - 335063
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary italic">Working Hours</h4>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-[40px] overflow-hidden bg-secondary/10 border border-primary/5 aspect-video flex items-center justify-center group relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-serif font-bold text-secondary italic">View on Google Maps</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="pb-24">
        <div className="container px-4">
          <div className="bg-secondary rounded-[40px] p-12 md:p-16 text-center space-y-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
              <Building className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white italic">Grow With Us</h2>
            <p className="text-xl text-white/70 font-light italic max-w-2xl mx-auto">
              We are actively looking for dealership partners and regional distributors who 
              share our passion for organic purity and rural empowerment.
            </p>
            <div className="pt-4">
              <span className="text-accent font-serif text-2xl font-bold italic">tanushreeorganics@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
