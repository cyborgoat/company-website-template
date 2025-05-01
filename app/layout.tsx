import type {Metadata} from "next";
import {Inter} from "next/font/google"; // Import the Inter font from next/font
import "@/app/globals.css"; // Import the global stylesheet
import {cn} from "@/lib/utils"; // Import utility for combining class names
import Header from "./_components/header"; // Import the site header component
import Footer from "./_components/footer"; // Import the site footer component
import {ThemeProvider} from "@/components/theme-provider"; // Import theme provider from shadcn/ui setup

// Initialize the Inter font with desired subsets and define a CSS variable
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans", // Will be used in tailwind.config.ts
});

// Define metadata for the application (used in <head>)
export const metadata: Metadata = {
    title: "Figure Clone - AI Robots", // Site title
    description: "Next.js clone inspired by the Figure AI website, using Tailwind v4.", // Site description
};

// Root layout component
export default function RootLayout({
                                       children, // Represents the content of the current page
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Define the root HTML element
        <html lang="en" suppressHydrationWarning> {/* suppressHydrationWarning is often needed with next-themes */}
        {/* Define the body element */}
        <body
            className={cn(
                // Apply base styles: minimum height, background, text color, font, anti-aliasing
                "min-h-screen bg-background text-foreground font-sans antialiased",
                inter.variable // Apply the CSS variable for the Inter font
            )}
        >
        {/* Wrap the application with the ThemeProvider for dark/light mode handling */}
        <ThemeProvider
            attribute="class" // Use class-based theme switching
            defaultTheme="dark" // Set dark theme as the default
            enableSystem={false} // Disable system preference detection (force dark)
            disableTransitionOnChange // Prevent theme transition flashes
        >
            <Header/> {/* Render the site header */}
            <main className="flex-grow">{children}</main>
            {/* Render the page content, allowing it to grow */}
            <Footer/> {/* Render the site footer */}
        </ThemeProvider>
        </body>
        </html>
    );
}
