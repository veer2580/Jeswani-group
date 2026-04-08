import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Store, 
  TrendingUp, 
  ShieldCheck, 
  Sprout, 
  Users, 
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Briefcase
} from "lucide-react";

export default function Franchise() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/theme.png"
            alt="Organic Store Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-accent text-accent-foreground px-4 py-1 italic animate-fade-in">
              Franchise Opportunity
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white  leading-tight">
              Start Your Own Organic Store with Jeswani Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed">
              Become a partner in promoting healthy living and traditional food culture 
              through our retail franchise <span className="text-accent font-bold">Rajasthan Agro Mart</span>.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-10 h-14 text-lg font-bold">
                <a href="#apply">Apply for Franchise</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Rajasthan Agro Mart */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider uppercase text-sm">
                <div className="h-px w-8 bg-secondary" />
                The Concept
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic leading-tight">
                Rajasthan Agro Mart: Purity at Every Doorstep
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed italic">
                <p>
                  Rajasthan Agro Mart is the retail franchise model of Jeswani Group created 
                  to deliver pure, authentic and traditional food products to every household.
                </p>
                <p>
                  Our stores focus on organic groceries, cold-pressed oils, traditional foods, 
                  and farmer-sourced products, creating a haven for health-conscious families.
                </p>
                <p>
                  The concept connects rural producers directly to urban consumers while 
                  ensuring quality and fair pricing, bridging the gap between farm and kitchen.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=800&auto=format&fit=crop" 
                  alt="Organic Mart Concept" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-primary/10 rounded-3xl -rotate-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Take Our Franchise */}
      <section className="py-24 bg-secondary/5 rounded-[60px] mx-4 md:mx-8">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Why Partner With Us?</h2>
            <p className="text-muted-foreground italic text-lg">A low-risk, high-impact business model for the modern entrepreneur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trusted Brand Support",
                desc: "Full backing from the established Jeswani Group and our growing 'Prakrtika' network.",
                icon: ShieldCheck
              },
              {
                title: "Growing Market Demand",
                desc: "Tap into the rapidly expanding consumer shift towards organic and chemical-free lifestyles.",
                icon: TrendingUp
              },
              {
                title: "Low Risk Retail Model",
                desc: "A proven, sustainable business structure designed for long-term stability and growth.",
                icon: Store
              },
              {
                title: "Direct Farmer Supply",
                desc: "Get access to a consistent supply of pure products directly from our network of farmers.",
                icon: Sprout
              },
              {
                title: "Training & Guidance",
                desc: "Comprehensive support for store setup, inventory management, and operational workflows.",
                icon: Users
              },
              {
                title: "Marketing & Branding",
                desc: "Professional branding support and marketing materials to help your store thrive locally.",
                icon: Megaphone
              }
            ].map((card, i) => (
              <Card key={i} className="bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl group border border-primary/5">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary italic">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Requirements */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary italic">Basic Requirements</h2>
                <div className="grid gap-6">
                  {[
                    { label: "Shop Space", value: "300–800 sq ft" },
                    { label: "Location", value: "Prime residential or market area" },
                    { label: "Manpower", value: "Basic team (2–3 persons)" },
                    { label: "Investment", value: "Affordable investment model" }
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-secondary/5 rounded-2xl">
                      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{req.label}</div>
                        <div className="text-lg font-serif font-bold text-secondary italic">{req.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary italic">Support From Company</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Store design & branding",
                    "Product supply chain",
                    "Initial training program",
                    "Promotion materials",
                    "Inventory management",
                    "Digital marketing support"
                  ].map((support, i) => (
                    <div key={i} className="flex items-center gap-3 text-secondary/80 font-medium italic bg-white p-4 rounded-2xl shadow-sm border border-primary/5">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      {support}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profit Opportunity */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">A Profitable & Sustainable Future</h2>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white/90">
              With high repeat customers, daily essential product lines, and the rapidly
              growing demand for organic foods, Rajasthan Agro Mart offers a unique
              long-term business opportunity that is as rewarding as it is sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Past/Existing Franchises */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary px-4 py-1 italic">Success Stories</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Our Existing Franchises</h2>
            <p className="text-muted-foreground italic text-lg">Leading the way in organic retail across the region.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                location: "Jaipur Central",
                type: "Flagship Store",
                img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=800&auto=format&fit=crop",
                status: "Operational since 2021"
              },
              {
                location: "Jodhpur Heritage",
                type: "Premium Outlet",
                img: "/images/shop.png",
                status: "Operational since 2022"
              },
              {
                location: "Udaipur Lakeview",
                type: "Community Store",
                img: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=800&auto=format&fit=crop",
                status: "Operational since 2023"
              }
            ].map((store, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[32px] aspect-[4/5] shadow-lg">
                <img
                  src={store.img}
                  alt={store.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Badge className="bg-accent text-accent-foreground border-none mb-2">{store.type}</Badge>
                    <h3 className="text-2xl font-serif font-bold italic">{store.location}</h3>
                    <p className="text-white/70 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">{store.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 scroll-mt-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-primary/5">
            <div className="text-center mb-12 space-y-4">
              <Badge className="bg-accent text-accent-foreground px-4 py-1 italic">Join Our Network</Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Franchise Inquiry</h2>
              <p className="text-muted-foreground italic">Tell us about your interest, and our team will connect with you.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary/70 italic px-1">Full Name</label>
                  <Input placeholder="Your full name" className="rounded-2xl h-12 bg-secondary/5 border-primary/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary/70 italic px-1">Phone Number</label>
                  <Input placeholder="Enter your contact number" className="rounded-2xl h-12 bg-secondary/5 border-primary/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary/70 italic px-1">City</label>
                  <Input placeholder="Target city for store" className="rounded-2xl h-12 bg-secondary/5 border-primary/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary/70 italic px-1">Shop Location</label>
                  <Input placeholder="Area or market name" className="rounded-2xl h-12 bg-secondary/5 border-primary/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary/70 italic px-1">Investment Budget</label>
                <Input placeholder="Your planned budget range" className="rounded-2xl h-12 bg-secondary/5 border-primary/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary/70 italic px-1">Your Message</label>
                <Textarea 
                  placeholder="Share any specific questions or details" 
                  className="rounded-3xl min-h-[120px] bg-secondary/5 border-primary/10 p-4" 
                />
              </div>
              <Button className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xl group">
                Submit Franchise Inquiry
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic leading-tight">
                For Dealership & Partnership Inquiries
              </h2>
              <p className="text-xl text-muted-foreground italic leading-relaxed">
                Contact Jeswani Group directly to discuss regional distribution 
                or bulk dealership opportunities.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/5 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-bold">CALL US</div>
                    <div className="text-lg font-serif font-bold text-secondary italic">+91 9351065510</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/5 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-bold">EMAIL US</div>
                    <a 
  href="mailto:tanushreeorganics@gmail.com"
  className="text-muted-foreground hover:text-primary transition-colors"
>
  tanushreeorganics@gmail.com
</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/5 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-bold">BUSINESS HOURS</div>
                    <div className="text-lg font-serif font-bold text-secondary italic">Mon - Sat: 9 AM - 6 PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/10 rounded-[40px] p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto">
                <Briefcase className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary italic">Corporate Partnership</h3>
              <p className="text-muted-foreground italic">
                Looking for a larger regional presence? Connect with our business development 
                team for regional distribution rights.
              </p>
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8">
                Request Corporate Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
