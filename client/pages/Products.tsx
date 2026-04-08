import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, MapPin, Sparkles } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string;
  origin: string;
  image: string;
}

const products: Product[] = [
  // Powders
  {
    id: "p1",
    name: "Cumic Powder",
    category: "Powders",
    description: "Finely ground cumin seeds slow-roasted to enhance aroma and natural essential oils.",
    benefits: "Improves digestion, reduces bloating, boosts metabolism and rich in iron.",
    origin: "Rajasthan Cumin Farms",
    image: "/images/jeerapowder.jpeg",
  },
  {
    id: "p2",
    name: "GaramMasala Powder",
    category: "Powders",
    description: "Traditional blend of handpicked whole spices stone-ground in small batches for authentic Indian flavor.",
    benefits: "Enhances taste, aids digestion, warming for body and improves appetite.",
    origin: "North Indian Spice Blends",
    image: "/images/garammasala.jpeg",
  },
  {
    id: "p3",
    name: "Turmeric Powder",
    category: "Powders",
    description: "High-curcumin turmeric rhizomes sun-dried and naturally ground without artificial color.",
    benefits: "Powerful anti-inflammatory, boosts immunity, supports skin health and healing.",
    origin: "Erode, Tamil Nadu Turmeric Belt",
    image: "/images/turmericpowder.jpeg",
  },
  {
    id: "p3",
    name: "Coriander Powder",
    category: "Powders",
    description: "Traditional low-gluten wheat variety grown in organic soil.",
    benefits: "Rich in fiber and minerals compared to modern wheat.",
    origin: "Vidarbha Region, India",
    image: "/images/corlander.jpeg",
  },
  
  // Oils
  {
    id: "p5",
    name: "Sesame Oil",
    category: "Oils",
    description: "Cold-pressed from premium sesame seeds using traditional wooden Ghani to retain natural aroma and nutrients.",
    benefits: "Improves heart health, supports digestion, boosts skin glow and rich in calcium & antioxidants.",
    origin: "Traditional Village Ghani",
    image: "/images/sesameoil.jpeg",
  },
  {
    id: "p6",
    name: "Groundnut Oil",
    category: "Oils",
    description: "Naturally filtered groundnut oil extracted at low temperature preserving its nutty flavor and vitamins.",
    benefits: "Good for deep frying, improves cholesterol balance and rich in Vitamin E.",
    origin: "Traditional Village Ghani",
    image: "/images/groundnutoil.jpeg",
  },
  {
    id: "p7",
    name: "Coconut Oil",
    category: "Oils",
    description: "Pure cold-pressed coconut oil made from sun-dried coconuts without chemicals or refining.",
    benefits: "Boosts immunity, improves hair growth, supports metabolism and antimicrobial properties.",
    origin: "Traditional Village Ghani",
    image: "/images/coconutoil.jpeg",
  },
  {
    id: "p8",
    name: "Blacksesame Oil",
    category: "Oils",
    description: "Premium black sesame seeds crushed in wooden Ghani for stronger aroma and higher mineral content.",
    benefits: "Strengthens bones, improves joint lubrication, supports hair health and high in iron.",
    origin: "Traditional Village Ghani",
    image: "/images/blacksesameoil.jpeg",
  },
  {
    id: "p9",
    name: "Mustard Oil",
    category: "Oils",
    description: "Kachi Ghani mustard oil extracted using slow wooden press for authentic pungent taste and purity.",
    benefits: "Improves blood circulation, boosts immunity, antibacterial and ideal for Indian cooking.",
    origin: "Traditional Village Ghani",
    image: "/images/mustardoil02.jpeg",
  },
  
];

const categories = ["Oils", "Powders",];

export default function Products() {
  return (
    <div className="bg-background pb-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20">
        <div className="container px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 italic">
              Our Product Gallery
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              A curated collection of nature's finest offerings, sourced directly from the heart of rural India.
              No chemicals, no compromises—only purity.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <div className="container px-4 py-12">
        {categories.map((category) => (
          <div key={category} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary italic px-4">
                {category}
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 group rounded-2xl bg-white/50 backdrop-blur-sm">
                    <div className="h-[320px] bg-white flex items-center justify-center p-4 rounded-t-2xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain scale-[1.5]"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-serif text-primary group-hover:text-secondary transition-colors">
                          {product.name}
                        </CardTitle>
                        {/* <Leaf className="h-5 w-5 text-accent opacity-60" /> */}
                      </div>
                      <CardDescription className="text-sm font-medium text-secondary/70 italic">
                        {product.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <div className="flex items-start gap-2 text-xs">
                          <Sparkles className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span className="font-medium">
                            <span className="text-primary/60">Benefits: </span>
                            {product.benefits}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs">
                          <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span className="font-medium">
                            <span className="text-primary/60">Origin: </span>
                            {product.origin}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {products.filter((p) => p.category === category).length === 0 && (
              <div className="text-center py-12 text-muted-foreground italic">
                Coming soon to Pratirika...
              </div>
            )}
          </div>
        ))}

        {/* Bulk Order Note */}
        <div className="mt-20 bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          {/* <Leaf className="h-10 w-10 text-primary mx-auto mb-6 opacity-60" /> */}
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">
            Bulk & Partnership Orders
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            We are dedicated to supplying the purest organic products to businesses,
            communities, and retail partners who value authentic Indian tradition.
          </p>
          <div className="flex justify-center">
            <div className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors cursor-pointer">
              Inquire for Bulk Orders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
