export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
    videoSrc: string;
    videoPoster?: string;
  };
  roboticsImpact: {
    title: string;
    description: string;
    ctaButton: string;
    imageSrc: string;
    imageAlt: string;
  };
  autonomousTasks: {
    title: string;
    description: string;
    ctaButton: string;
    videoSrc: string;
    videoPoster?: string;
  };
}

export const homePageContent: HomePageContent = {
  hero: {
    title: "AI ROBOTS TO SUPPORT HUMANITY",
    subtitle: "MYORG is building autonomous general purpose humanoid robots with the potential to reshape labor across industries.",
    ctaButton: "Watch Our Progress",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    videoPoster: "/images/posters/hero-video-poster.jpg",
  },
  roboticsImpact: {
    title: "Advancing Robotics for Real-World Impact",
    description: "Our focus is on creating capable, safe, and adaptable humanoid robots designed to work alongside people and augment the global workforce.",
    ctaButton: "Explore Technology",
    imageSrc: "https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Robot technology demonstration",
  },
  autonomousTasks: {
    title: "Autonomous Task Execution",
    description: "See MYORG 01 performing complex tasks autonomously, demonstrating advancements in AI, dexterity, and mobility.",
    ctaButton: "Watch Demo",
    videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    videoPoster: "/images/posters/demo-video-poster.jpg",
  },
};

// You could add more configurations here, e.g., for site-wide text
export interface SiteConfig {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  footerText: string;
  // Add other global settings as needed
}

export const siteConfig: SiteConfig = {
  siteName: "Cyborgoaty",
  siteTitle: "Company CyborGoaty",
  siteDescription: "CyborGoaty is building the next generation of autonomous general purpose humanoid robots to support humanity.",
  footerText: `© ${new Date().getFullYear()} MYORG Robotics. All rights reserved.`,
}; 