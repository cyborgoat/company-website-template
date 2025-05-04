import Link from 'next/link'; // Import Link for navigation
import {Linkedin, Twitter} from 'lucide-react'; // Import social media icons

// Footer component definition
const Footer = () => {
    return (
        // Footer element with dark background, padding, and top border
        <footer className="py-8 bg-black text-muted-foreground border-t border-border/20">
            {/* Container to constrain footer content */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"> {/* Responsive layout (column on small, row on medium+), spacing */}
                {/* Left Section: Logo/Copyright */}
                <div className="text-center md:text-left mb-4 md:mb-0"> {/* Centered text on small, left-aligned on medium+ */}
                    {/* Site Name/Logo */}
                    <Link href="/" className="font-semibold text-lg text-foreground hover:text-foreground/80 transition-colors mb-2 inline-block">
                        MYORG {/* Replace with an SVG logo if available */}
                    </Link>
                    {/* Copyright Notice */}
                    <p className="text-xs">&copy; {new Date().getFullYear()} MYORG, Inc. All rights reserved.</p>
                </div>

                {/* Center Section: Footer Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-4 md:mb-0"> {/* Links wrap on small screens, centered */}
                    <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                    <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
                </nav>

                {/* Right Section: Social Media Links */}
                <div className="flex gap-4"> {/* Simple flex container for icons */}
                    {/* Twitter Link */}
                    <Link href="https://twitter.com/figure_robot" target="_blank" rel="noopener noreferrer" aria-label="Figure AI on Twitter">
                        <Twitter className="h-5 w-5 hover:text-foreground transition-colors" /> {/* Icon with hover effect */}
                    </Link>
                    {/* LinkedIn Link */}
                    <Link href="https://www.linkedin.com/company/figureai/" target="_blank" rel="noopener noreferrer" aria-label="Figure AI on LinkedIn">
                        <Linkedin className="h-5 w-5 hover:text-foreground transition-colors" /> {/* Icon with hover effect */}
                    </Link>
                    {/* Add more social links here if needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

