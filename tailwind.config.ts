import type {Config} from 'tailwindcss'

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class", // Enables class-based dark mode (used by next-themes)
    content: [
        // Paths to all files that will contain Tailwind class names
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: { // Configuration for the default `.container` class
            center: true, // Centers the container
            padding: "1.5rem", // Default horizontal padding
            screens: {
                "2xl": "1400px", // Max width of the container on large screens
            },
        },
        extend: { // Extend the default Tailwind theme
            fontFamily: {
                // Define the primary sans-serif font stack, using a CSS variable
                sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
            },
            colors: {
                // Define the application's color palette using HSL values
                // These names correspond to Tailwind utility classes (e.g., bg-background)
                border: 'hsl(217.2 32.6% 17.5%)', // Border color
                input: 'hsl(217.2 32.6% 17.5%)',  // Input field background
                ring: 'hsl(224.3 76.3% 48%)',   // Focus ring color
                background: 'hsl(222.2 84% 4.9%)', // Default background
                foreground: 'hsl(210 40% 98%)',   // Default text color
                primary: { // Primary brand color (buttons, accents)
                    DEFAULT: 'hsl(217.2 91.2% 59.8%)',
                    foreground: 'hsl(222.2 47.4% 11.2%)', // Text color on primary background
                },
                secondary: { // Secondary color (less prominent buttons, backgrounds)
                    DEFAULT: 'hsl(217.2 32.6% 17.5%)',
                    foreground: 'hsl(210 40% 98%)',
                },
                destructive: { // Color for destructive actions (e.g., delete buttons)
                    DEFAULT: 'hsl(0 62.8% 30.6%)',
                    foreground: 'hsl(210 40% 98%)',
                },
                muted: { // Muted colors for subtle backgrounds or text
                    DEFAULT: 'hsl(217.2 32.6% 17.5%)',
                    foreground: 'hsl(215 20.2% 65.1%)',
                },
                accent: { // Accent color for highlights
                    DEFAULT: 'hsl(217.2 32.6% 17.5%)',
                    foreground: 'hsl(210 40% 98%)',
                },
                popover: { // Background/text for popovers
                    DEFAULT: 'hsl(222.2 84% 4.9%)',
                    foreground: 'hsl(210 40% 98%)',
                },
                card: { // Background/text for card components
                    DEFAULT: 'hsl(222.2 84% 4.9%)',
                    foreground: 'hsl(210 40% 98%)',
                },
            },
            borderRadius: { // Define border radius utilities using a CSS variable
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: { // Keyframe definitions for animations (used by shadcn/ui)
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: { // Animation utility classes (used by shadcn/ui)
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        tailwindcss_animate // Plugin required for shadcn/ui animations
        // Add any other Tailwind plugins here
    ],
}
export default config
