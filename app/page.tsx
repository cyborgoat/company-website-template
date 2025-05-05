import Image from 'next/image'; // Import Next.js Image component for optimized images
import VideoPlayer from './_components/video-player'; // Import custom VideoPlayer component
import AnimatedSection from './_components/animated-section'; // Import custom animation wrapper component
import {Button} from '@/components/ui/button'; // Import Button component from shadcn/ui
import {ArrowRight} from 'lucide-react'; // Import an icon from lucide-react

// Home page component definition
export default function Home() {
  return (
      <div>
        <section className="relative h-screen pt-[56px] w-full overflow-hidden flex items-center justify-center text-center text-white">
          <VideoPlayer
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              muted
              loop
              playsInline
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

          <div className="relative z-20 p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-md text-balance">
              AI ROBOTS TO SUPPORT HUMANITY
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm max-w-2xl mx-auto text-balance">
              MYORG is building autonomous general purpose humanoid robots with the potential to reshape labor across industries.
            </p>
            <Button size="lg" variant="secondary" className="group">
              Watch Our Progress
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">
                Advancing Robotics for Real-World Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Our focus is on creating capable, safe, and adaptable humanoid robots designed to work alongside people and augment the global workforce.
              </p>
              <Button variant="outline" className="group">
                Explore Technology
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <AnimatedSection className="rounded-lg overflow-hidden shadow-lg group">
              <Image
                  src="https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Robot technology demonstration"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
                  priority
              />
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40 text-foreground">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="rounded-lg overflow-hidden shadow-lg aspect-video group">
              <VideoPlayer
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  className="w-full h-full object-cover"
                  autoPlay={false}
                  muted={false}
                  loop={false}
                  controls={true}
                  playsInline
              />
            </AnimatedSection>
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">
                Autonomous Task Execution
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                See MYORG 01 performing complex tasks autonomously, demonstrating advancements in AI, dexterity, and mobility.
              </p>
              <Button variant="default" className="group">
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
}
