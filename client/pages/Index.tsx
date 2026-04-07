import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Leaf,
  Users,
  ShieldCheck,
  Sprout,
  ArrowRight,
  Quote,
  CheckCircle2
} from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-right-top scale-110"
            style={{
              backgroundImage: "url('/images/groupimage02.png')"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-3xl space-y-6">
            {/* <Badge className="bg-accent text-accent-foreground border-none px-4 py-1 animate-fade-in">
              Rooted in Tradition
            </Badge> */}
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-[#5F7F63] tracking-tight leading-none">
              JESWANI GROUP
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic max-w-xl">
              Building trust through purity, tradition, and nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base">
                <Link to="/products">Explore Prakrtika Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm px-8 h-12 text-base">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Preview */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/download.jpg"
                  alt="Rural farming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wider uppercase text-sm">
                <div className="h-px w-8 bg-secondary" />
                About Jeswani Group
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight italic">
                Committed to natural living & farmer empowerment.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Jeswani Group is more than just a business; it's a movement towards
                sustainable food systems and healthier lifestyles. We bridge the gap
                between traditional wisdom and modern wellness.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Sustainable food systems",
                  "Farmer empowerment",
                  "Preserving traditions",
                  "Chemical-free lifestyle"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary/80 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="text-primary p-0 h-auto font-bold text-lg group">
                <Link to="/about" className="flex items-center gap-2">
                  Learn more about our vision
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/5 rounded-[60px] mx-4 md:mx-8">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Why Choose Us</h2>
            <p className="text-muted-foreground italic">Restoring the bond between nature and your home.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Direct Sourcing",
                desc: "Every grain is sourced directly from dedicated farmers, ensuring fair trade and fresh produce.",
                icon: Sprout
              },
              {
                title: "Traditional Methods",
                desc: "We use age-old preparation techniques like stone grinding and sun-drying to preserve nutrients.",
                icon: Leaf
              },
              {
                title: "Chemical-Free",
                desc: "Zero pesticides, zero preservatives. Just pure, organic goodness as nature intended.",
                icon: ShieldCheck
              },
              {
                title: "Rural Support",
                desc: "By choosing us, you directly contribute to the prosperity of Indian rural communities.",
                icon: Users
              }
            ].map((card, i) => (
              <Card key={i} className="bg-white border-none shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Highlight Section */}
      <section className="py-24 overflow-hidden">
        <div className="container px-4">
          <div className="bg-primary rounded-[40px] p-8 md:p-20 text-white relative overflow-hidden">
            {/* Abstract nature shape */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-8">
                <Badge variant="outline" className="text-accent border-accent px-4 py-1 italic">
                  Our Organic Food Division
                </Badge>
                <h2 className="text-4xl md:text-6xl font-serif font-bold italic leading-tight">
                  Prakrtika – Village Naturals
                </h2>
                <p className="text-xl text-white/80 font-light leading-relaxed italic max-w-2xl">
                 Prakrtika is the heart of Jeswani Group's organic mission.
                  It is our dedicated venture focused on bringing unadulterated,
                  farm-fresh products from the village to your kitchen.
                </p>
                <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-10 h-14 text-lg font-bold">
                  <a href="https://prakrtika.com" target="_blank" rel="noopener noreferrer">
                   Visit Our Website
                  </a>
                </Button>
              </div>
              <div className="lg:col-span-2">
                <div className="aspect-square rounded-full border-[20px] border-white/10 overflow-hidden shadow-2xl rotate-3">
                  <img
                    src="/images/image.jpeg"
                    alt="Organic products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Featured Products</h2>
              <p className="text-muted-foreground italic">Handpicked from our village naturals collection.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5 px-8">
              <Link to="/products" className="flex items-center gap-2">
                View Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Mustard Oil", cat: "OILS", img: "/images/mustardoil.png"},
              { name: "Groundnut Oil", cat: "Oils", img: "/images/groundnut-oil.png"},
              { name: " Turmeric Powders", cat: "powders", img: "/images/turneric.png"}
            ].map((prod, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-md transition-transform duration-500 group-hover:-translate-y-2">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent italic">{prod.cat}</span>
                  <h3 className="text-2xl font-serif font-bold text-secondary italic">{prod.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Quote className="h-12 w-12 text-accent/40 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Families Who Trust Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  text: "The difference in taste is unbelievable. You can actually smell the earth in their mustard oil. It reminds me of my grandmother's kitchen.",
                  role: "Home Maker"
                },
                {
                  name: "Vikram Mehra",
                  text: "Finding chemical-free wheat and dals that aren't mass-processed is hard. Pratirika has become our family's trusted source for purity.",
                  role: "Wellness Enthusiast"
                }
              ].map((t, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur-sm border-none p-10 rounded-[40px] relative">
                  <CardContent className="p-0 space-y-6">
                    <p className="text-lg text-secondary/80 italic leading-relaxed font-light">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent italic">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-primary font-serif italic">{t.name}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container px-4 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-secondary italic">Stay Rooted, Eat Pure</h2>
          <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
            Join the Jeswani Group family and experience the authentic flavors
            of rural India delivered with modern trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5 px-10 h-14 text-lg">
              <Link to="/contact">Contact for Bulk Orders</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
