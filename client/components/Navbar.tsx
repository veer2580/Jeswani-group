import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleLinkClick = (href) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">

        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/images/company.png"
            alt="Jeswani Logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm lg:text-base font-medium transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-[380px] p-6">

              <div className="flex flex-col gap-6 mt-10">

                {/* Mobile Logo */}
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <img
                    src="/images/company.png"
                    alt="Jeswani Logo"
                    className="h-9 w-auto"
                  />
                  <span className="font-bold text-lg text-primary">
                    {/* JAISWANI GROUP */}
                  </span>
                </div>

                {/* Mobile Links */}
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      "text-left text-lg font-medium transition-colors hover:text-primary",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/70"
                    )}
                  >
                    {link.name}
                  </button>
                ))}

                {/* Venture Section */}
                <div className="mt-8 pt-6 border-t">
                  <p className="text-xs text-muted-foreground uppercase mb-2">
                    A Venture
                  </p>
                  <p className="font-semibold italic text-secondary">
                    Prakrtika – Village Naturals
                  </p>
                </div>

              </div>

            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}