// app/about/page.tsx
export default function AboutPage() {
    return (
        <main className="container py-8"> {/* Use container for consistent padding/width */}
            <h1 className="text-3xl font-bold mb-4 text-foreground">About Us</h1>
            <p className="text-muted-foreground"> {/* Use theme colors */}
                This is the about page content. You can style elements using
                Tailwind utility classes defined in your theme.
            </p>
            {/* Add more content and components here */}
        </main>
    );
}