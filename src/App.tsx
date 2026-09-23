import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HealthReality from '@/components/HealthReality';
import Testimonials from '@/components/Testimonials';
import FounderStory from '@/components/FounderStory';
import HealthConcerns from '@/components/HealthConcerns';
import Approach from '@/components/Approach';
import OnlineConsultations from '@/components/OnlineConsultations';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-primary">
      <Header />
      <main>
        <Hero />
        <HealthReality />
        <Testimonials />
        <FounderStory />
        <HealthConcerns />
        <Approach />
        <OnlineConsultations />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
