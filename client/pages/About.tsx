import { Badge } from "@/components/ui/badge";
import { Leaf, Target, Heart, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary text-primary-foreground px-4 py-1 italic">Our Journey</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary italic leading-tight">
              Rooted in Tradition, Growing for the Future.
            </h1>
            <p className="text-xl text-muted-foreground italic leading-relaxed">
              Jeswani Group was born from a simple realization: that the true essence
              of health lies in the traditional ways of our ancestors.
            </p>
          </div>
        </div>
      </section>

      {/* Storytelling Content */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-24">

            {/* Our Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary italic">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  To build a <strong>traditional wooden-pressed oils and natural spice powders</strong>.
                  We believe every kitchen deserves authentic aroma, real nutrition and purity
                  crafted from farm-grown seeds and hand-ground spices prepared using age-old
                  methods and the trusted care of our farmers.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="/images/groupimage.png"
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Our Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg md:order-2">
                <img
                  src="/images/chacha.jpg"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 md:order-1">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary italic">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  To <strong>connect farmers directly to families</strong>.
                  By eliminating unnecessary intermediaries, we ensure that farmers
                  get their fair due and families get the freshest possible produce,
                  straight from the heart of rural India to their doorstep.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary italic mb-4">Our Values</h2>
                <p className="text-muted-foreground italic">The pillars that sustain Jaiswani Group.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Purity", desc: "No chemicals, no additives. Just nature.", icon: ShieldCheck },
                  { title: "Trust", desc: "Transparent sourcing and honest pricing.", icon: Users },
                  { title: "Sustainability", desc: "Eco-friendly practices from farm to home.", icon: Leaf },
                  { title: "Community", desc: "Empowering rural villages through growth.", icon: Heart }
                ].map((val, i) => (
                  <div key={i} className="text-center space-y-4 p-8 bg-secondary/5 rounded-3xl border border-primary/5">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <val.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary italic">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Venture */}
            <div className="bg-primary rounded-[40px] p-8 md:p-16 text-white text-center space-y-8">
              <Badge variant="outline" className="text-accent border-accent px-4 py-1 italic">Specialized Division</Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Prakrtika – Village Naturals</h2>
              <p className="text-xl text-white/80 font-light leading-relaxed italic max-w-3xl mx-auto">
                Prakrtika is the organic food venture of Jeswani Group. It represents our
                unwavering commitment to "Village Naturals"—bringing back the simplicity,
                richness, and purity of rural life to the modern world.
              </p>
              <div className="pt-4 italic text-accent font-medium">
                "Eat Pure • Live Pure • Stay Rooted"
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
