import Link from 'next/link';
import {Linkedin, Twitter} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black text-muted-foreground border-t border-border/20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <Link href="/" className="font-semibold text-lg text-foreground hover:text-foreground/80 transition-colors mb-2 inline-block">
                        MYORG
                    </Link>
                    <p className="text-xs">&copy; {new Date().getFullYear()} MYORG, Inc. All rights reserved.</p>
                </div>
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-4 md:mb-0">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                    <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
                </nav>
                <div className="flex gap-4">
                    <Link href="https://twitter.com/figure_robot" target="_blank" rel="noopener noreferrer" aria-label="Figure AI on Twitter">
                        <Twitter className="h-5 w-5 hover:text-foreground transition-colors" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/figureai/" target="_blank" rel="noopener noreferrer" aria-label="Figure AI on LinkedIn">
                        <Linkedin className="h-5 w-5 hover:text-foreground transition-colors" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
