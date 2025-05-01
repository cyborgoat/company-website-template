'use client'; // This component uses client-side animation library

import { motion, MotionProps } from 'framer-motion'; // Import motion component and types from Framer Motion
import React from 'react'; // Import React

// Define the props for the AnimatedSection component
// Extends MotionProps to allow passing any standard framer-motion prop
interface AnimatedSectionProps extends MotionProps {
    children: React.ReactNode; // The content to be wrapped and animated
    className?: string; // Optional CSS classes for the wrapper div
    hoverScale?: number; // The amount to scale the content on hover (e.g., 1.03 for 3% increase)
}

// AnimatedSection functional component
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                             // Destructure props with a default value for hoverScale
                                                             children,
                                                             className,
                                                             hoverScale = 1.03, // Default scale effect
                                                             ...rest // Collect any other props passed (like 'initial', 'animate', etc.)
                                                         }) => {
    return (
        // Use motion.div as the animatable wrapper element
        <motion.div
            className={className} // Apply passed CSS classes
            // Define animation properties specifically for the 'whileHover' state
            whileHover={{
                scale: hoverScale, // Scale the element on hover
                // y: -5, // Example: Optionally lift the element slightly on hover
            }}
            // Define the transition properties for the animation
            transition={{
                type: 'spring', // Use a spring physics-based animation for a natural feel
                stiffness: 350, // Controls the "stiffness" of the spring
                damping: 25,    // Controls the "bounciness" or resistance of the spring
            }}
            {...rest} // Spread any remaining framer-motion props onto the div
        >
            {children} {/* Render the wrapped content */}
        </motion.div>
    );
};

export default AnimatedSection; // Export the component
