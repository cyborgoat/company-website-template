'use client'; // This component doesn't require server-side features

import React from 'react'; // Import React

// Define the expected properties (props) for the VideoPlayer component
interface VideoPlayerProps {
    src: string; // The source URL of the video file
    className?: string; // Optional CSS classes to apply to the video element
    autoPlay?: boolean; // Whether the video should autoplay
    muted?: boolean; // Whether the video should be muted
    loop?: boolean; // Whether the video should loop
    controls?: boolean; // Whether to show the browser's default video controls
    playsInline?: boolean; // Hint for mobile browsers to play inline instead of fullscreen
    preload?: 'auto' | 'metadata' | 'none'; // How the video should be preloaded
    poster?: string; // URL of an image to show while the video is loading
}

// VideoPlayer functional component
const VideoPlayer: React.FC<VideoPlayerProps> = ({
                                                     // Destructure props with default values
                                                     src,
                                                     className,
                                                     autoPlay = true,
                                                     muted = true,
                                                     loop = true,
                                                     controls = false, // Default to no controls (common for background videos)
                                                     playsInline = true, // Default to playing inline
                                                     preload = "auto", // Default to preloading the video
                                                     poster,
                                                 }) => {
    return (
        // Render the HTML <video> element
        <video
            className={className} // Apply any passed CSS classes
            src={src} // Set the video source
            autoPlay={autoPlay} // Set autoplay attribute
            muted={muted} // Set muted attribute
            loop={loop} // Set loop attribute
            controls={controls} // Set controls attribute
            playsInline={playsInline} // Set playsinline attribute
            preload={preload} // Set preload attribute
            poster={poster} // Set poster image attribute
        >
            {/* Fallback text shown if the browser doesn't support the <video> tag */}
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer; // Export the component for use in other files
