import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              {/* <Leaf className="h-6 w-6 text-accent" /> */}
              <span className="font-serif text-2xl font-bold tracking-tight">
                JESWANI GROUP
              </span>
            </div>
            <p className="text-secondary-foreground/80 max-w-sm italic">
              "Eat Pure • Live Pure • Stay Rooted"
            </p>
            <div className="flex items-center gap-4">
              <Link to="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/franchise" className="hover:text-accent transition-colors">Franchise</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li className="flex items-center gap-2 pt-2 text-accent">
                <span className="font-semibold italic">Prakrtika – Village Naturals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Jeswani Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
