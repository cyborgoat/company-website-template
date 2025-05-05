import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import the Inter font from next/font
import "@/app/globals.css"; // Import the global stylesheet
import { cn } from "@/lib/utils"; // Import utility for combining class names
import Header from "./_components/header"; // Import the site header component
import Footer from "./_components/footer"; // Import the site footer component
import { ThemeProvider } from "@/components/theme-provider"; // Import theme provider from shadcn/ui setup

// Initialize the Inter font with desired subsets and define a CSS variable
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans", // Will be used in tailwind.config.ts
});

export const metadata: Metadata = {
    title: "Company Awesome",
    description: "Company Website Template",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground font-sans antialiased",
                    inter.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow flex flex-col">{children}</main>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
