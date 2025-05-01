'use client'; // This component uses client-side state and effects

import Link from 'next/link'; // Import Link component for client-side navigation
import { Button } from '@/components/ui/button'; // Import Button component
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Import Sheet components for mobile drawer menu
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle
import { cn } from '@/lib/utils'; // Utility for class names
import { useState, useEffect } from 'react'; // Import React hooks for state and effects

// Header component definition
const Header = () => {
    // State to track if the user has scrolled down the page
    const [hasScrolled, setHasScrolled] = useState(false);
    // State to control the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Effect to add a scroll event listener
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // Set state based on scroll position (true if scrolled more than 10px)
            setHasScrolled(window.scrollY > 10);
        };
        // Add the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove the event listener when the component unmounts (cleanup)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs only once on mount

    // Array containing navigation link data
    // --- MODIFIED: Added new links here ---
    const navLinks = [
        // { href: "/myorg-01", label: "Myorg-01" }, // Example existing link
        { href: "/team", label: "Team" }, // New Link
        { href: "/demos", label: "Demos" }, // New Link
        { href: "/projects", label: "Projects" }, // New Link (links to /projects overview)
        { href: "/about", label: "About" }, // Existing Link
        { href: "/news", label: "News" }, // Existing Link
        { href: "/blogs", label: "Blogs" }, // Existing Link
    ];
    // --- END OF MODIFICATION ---

    return (
        // Header element, sticky at the top, with transitions for background/border color
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-colors duration-300 ease-in-out",
                // Conditional classes based on scroll state
                hasScrolled
                    ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80" // Scrolled state: visible border, semi-transparent background with blur
                    : "border-transparent bg-transparent" // Top state: transparent border and background
            )}
        >
            {/* Container to constrain header content width */}
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-6">
                {/* Logo linking to the homepage */}
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}> {/* Close mobile menu on logo click */}
                    {/* Site Name/Logo */}
                    <span className={cn(
                        "font-bold sm:inline-block text-xl tracking-tight transition-colors",
                        // Change text color based on scroll state for contrast
                        hasScrolled ? "text-foreground" : "text-white"
                    )}>
            MYORG
          </span>
                </Link>

                {/* Desktop Navigation Links (hidden on smaller screens) */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80", // Base link styles
                                // Adjust text color based on scroll state
                                hasScrolled ? "text-foreground/60" : "text-gray-200 hover:text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Navigation Menu (visible on smaller screens) */}
                <div className="md:hidden">
                    {/* Sheet component acts as a drawer */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}> {/* Control open state */}
                        {/* Trigger button for the Sheet */}
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost" // Use ghost variant for icon button
                                size="icon"
                                className={cn(
                                    "hover:bg-white/10", // Subtle hover effect when header is transparent
                                    // Adjust icon color and hover background based on scroll state
                                    hasScrolled ? "text-foreground hover:bg-accent" : "text-white hover:text-white"
                                )}
                                aria-label="Toggle Menu" // Accessibility label
                            >
                                {/* Show X icon when menu is open, Menu icon when closed */}
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </SheetTrigger>
                        {/* Content of the Sheet (the drawer itself) */}
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6 border-l border-border/40"> {/* Style the drawer */}
                            {/* Navigation links inside the mobile menu */}
                            <div className="mt-8 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;