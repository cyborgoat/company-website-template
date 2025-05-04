import Image from 'next/image'; // Import Next.js Image component for optimized images
import VideoPlayer from './_components/video-player'; // Import custom VideoPlayer component
import AnimatedSection from './_components/animated-section'; // Import custom animation wrapper component
import {Button} from '@/components/ui/button'; // Import Button component from shadcn/ui
import {ArrowRight} from 'lucide-react'; // Import an icon from lucide-react

// Home page component definition
export default function Home() {
  return (
      // Main container div for the page content
      <div>
        {/* --- Hero Section --- */}
        {/* Full-height section with video background */}
        <section className="relative h-[calc(100vh-56px)] w-full overflow-hidden flex items-center justify-center text-center text-white -mt-[56px]"> {/* Adjust height for header, negative margin pulls it up */}
          {/* Background Video */}
          <VideoPlayer
              // *** IMPORTANT: Replace with your actual video file path in /public/videos ***
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover z-0" // Position behind content, cover area
              autoPlay // Start playing automatically
              muted    // Mute the video (common for backgrounds)
              loop     // Loop the video
              playsInline // Important for playback on mobile devices
          />
          {/* Darkening overlay for better text readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

          {/* Hero Content Container */}
          <div className="relative z-20 p-8 max-w-4xl mx-auto"> {/* Position above overlay */}
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-md text-balance"> {/* Responsive text size, drop shadow, balanced text wrap */}
              AI ROBOTS TO SUPPORT HUMANITY
            </h1>
            {/* Subheadline/Description */}
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm max-w-2xl mx-auto text-balance"> {/* Responsive text size, lighter color, max width, balanced text wrap */}
              MYORG is building autonomous general purpose humanoid robots with the potential to reshape labor across industries.
            </p>
            {/* Call to Action Button */}
            <Button size="lg" variant="secondary" className="group"> {/* Large size, secondary style, group for icon hover effect */}
              Watch Our Progress
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> {/* Icon moves slightly on hover */}
            </Button>
          </div>
        </section>

        {/* --- Content Section 1: Text Left, Image Right --- */}
        <section className="py-16 md:py-24 bg-background text-foreground"> {/* Padding, default background/text colors */}
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> {/* Centered container, responsive grid, gap, vertical alignment */}
            {/* Text Content Block */}
            <div className="max-w-lg"> {/* Limit text width */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance"> {/* Responsive heading */}
                Advancing Robotics for Real-World Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance"> {/* Muted text color */}
                Our focus is on creating capable, safe, and adaptable humanoid robots designed to work alongside people and augment the global workforce.
              </p>
              <Button variant="outline" className="group"> {/* Outline button style */}
                Explore Technology
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            {/* Animated Image Block */}
            <AnimatedSection className="rounded-lg overflow-hidden shadow-lg group"> {/* Apply hover animation, rounded corners, shadow */}
              <Image
                  // *** IMPORTANT: Replace with your actual image file path in /public/images ***
                  src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Robot technology demonstration"
                  width={1920} // Specify image width for optimization
                  height={1080} // Specify image height for optimization
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out" // Ensure image scales, smooth transform on hover
                  priority // Load this image eagerly if it's above the fold
              />
            </AnimatedSection>
          </div>
        </section>

        {/* --- Content Section 2: Video Left, Text Right --- */}
        <section className="py-16 md:py-24 bg-muted/40 text-foreground"> {/* Slightly different background using muted color with opacity */}
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Animated Video Block */}
            <AnimatedSection className="rounded-lg overflow-hidden shadow-lg aspect-video group"> {/* Maintain video aspect ratio */}
              <VideoPlayer
                  // *** IMPORTANT: Replace with your actual video file path ***
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  className="w-full h-full object-cover" // Ensure video fills the container
                  autoPlay={false} // Don't autoplay content videos
                  muted={false}
                  loop={false}
                  controls={true} // Show default video controls
                  playsInline
              />
            </AnimatedSection>
            {/* Text Content Block */}
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">
                Autonomous Task Execution
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                See MYORG 01 performing complex tasks autonomously, demonstrating advancements in AI, dexterity, and mobility.
              </p>
              <Button variant="default" className="group"> {/* Default primary button style */}
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* --- Placeholder for More Sections --- */}
        {/* Add more sections as needed, following similar structure */}
        {/* Example: Team Section, Careers Section, News Section */}

      </div>
  );
}
