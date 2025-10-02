import { GradientBackground } from '@/components/GradientBackground';
import { HeroSection } from '@/components/HeroSection';
import { ThreeStepProcess } from '@/components/ThreeStepProcess';
import { TrustBadges } from '@/components/TrustBadges';
import { RegionNotice } from '@/components/RegionNotice';
import { Footer } from '@/components/Footer';
import { RotatingNotifications } from '@/components/RotatingNotifications';
import { Helmet } from 'react-helmet';

const Index = () => {
  // A/B Testing variants - change these to test different versions
  const heroVariant: 'A' | 'B' = 'A';
  const ctaVariant: 'A' | 'B' = 'A';

  return (
    <>
      <Helmet>
        <title>ShopSmart - Unlock £750 Amazon Shopping Rewards</title>
        <meta
          name="description"
          content="Join ShopSmart and claim your £750 Amazon shopping credit. Available to UK, US, CA, and AU residents. Secure, premium, and simple to join."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GradientBackground />
      
      <main className="relative min-h-screen">
        <HeroSection variant={heroVariant} ctaVariant={ctaVariant} />
        <ThreeStepProcess />
        <TrustBadges />
        <RegionNotice />
        <Footer />
      </main>

      <RotatingNotifications />
    </>
  );
};

export default Index;
