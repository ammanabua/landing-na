
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
      <main className="grid grid-cols-1 justify-center items-center sm:items-start w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <LogoCarousel speed={50} />
        <PodcastFeature />
        {/* <Booking /> */}
        <section id="testimonials">
          <Testimonials />
        </section>
        <Newsletter />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
