'use client';
import React from 'react';

interface VideoPlayerProps {
    src: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    playsInline?: boolean;
    preload?: 'auto' | 'metadata' | 'none';
    poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    className,
    autoPlay = true,
    muted = true,
    loop = true,
    controls = false,
    playsInline = true,
    preload = "auto",
    poster,
}) => {
    return (
        <video
            className={className}
            src={src}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            controls={controls}
            playsInline={playsInline}
            preload={preload}
            poster={poster}
        >
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
