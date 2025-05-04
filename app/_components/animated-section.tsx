'use client';
import {motion, MotionProps} from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
    hoverScale?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className,
    hoverScale = 1.03,
    ...rest
}) => {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: hoverScale }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
