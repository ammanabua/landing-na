
import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PodcastFeature from "@/components/PodcastFeature"
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Hero />
        <Services />
        <About />
        <PodcastFeature />
        {/* <Booking /> */}
        {/* <Testimonials />
        <Newsletter />
        <Contact /> */}
      </main>
    </div>
  );
}
