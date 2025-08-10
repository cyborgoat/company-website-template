"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/demos", label: "Demos" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/blogs", label: "Blogs" },
    { href: "/news", label: "News" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300 ease-in-out",
        hasScrolled
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="w-full h-14">
        <div className="mx-auto max-w-screen-2xl grid grid-cols-3 h-full items-center px-6">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2 justify-self-start col-start-1"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span
            className={cn(
              "font-bold sm:inline-block text-xl tracking-tight transition-colors",
              hasScrolled ? "text-foreground" : "text-white"
            )}
          >
            Company Awesome
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm md:justify-self-center md:col-start-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                hasScrolled
                  ? "text-foreground/60"
                  : "text-gray-200 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 justify-self-end col-start-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "hover:bg-white/10",
                    hasScrolled
                      ? "text-foreground hover:bg-accent"
                      : "text-white hover:text-white"
                  )}
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background p-6 border-l border-border/40"
              >
                <div className="mt-8 flex flex-col space-y-4">
                  <ThemeToggle />
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
