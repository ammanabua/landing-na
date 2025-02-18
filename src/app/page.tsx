
import About from "@/components/About";
// import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Newsletter from "@/components/Newsletter";
import PodcastFeature from "@/components/PodcastFeature"
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
        <Hero />
        <About />
        <Services />
        <LogoCarousel speed={40} />
        <PodcastFeature />
        {/* <Booking /> */}
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
    </div>
  );
}
