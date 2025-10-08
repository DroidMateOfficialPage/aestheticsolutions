
import Header from "./components/Header";
import Hero from "./components/hero";
import USPSection from "./components/uspsection";
import Blog from "./components/blog";
import StatsSection from "./components/num_selection";
import Video from "./components/video";
import Contact from "./components/contact";
import Portfolio from "./components/treatments";
import Footer from "./components/Footer";
import References from "./components/review";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-50 flex-col">
      <Header />
      <Hero />
      <StatsSection />
      {/* <Video src="/video/7581715-uhd_4096_2160_25fps.mp4" poster="/images/postervideo.png" className="h-96 my-16" /> */}
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <References />
      <USPSection />
      <Contact />
      <Blog />
      <Footer />
      {/* Dodaj ostale sekcije ispod */}
    </main>
  );
}