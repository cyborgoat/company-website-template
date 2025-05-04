// lib/animations.ts (Example - or include directly in page files)
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
        },
    },
});

export const cardHover = {
    scale: 1.03,
    transition: { duration: 0.2 }
};