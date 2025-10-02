import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  variant?: 'A' | 'B';
  ctaVariant?: 'A' | 'B';
}

export const HeroSection = ({ variant = 'A', ctaVariant = 'A' }: HeroSectionProps) => {
  const headlines = {
    A: 'Unlock £750 Amazon Shopping Rewards — Join ShopSmart',
    B: '£750 Amazon Shopping Reward — Eligible UK, US, CA & AU Residents',
  };

  const ctaTexts = {
    A: 'Claim My £750 Reward',
    B: 'Get My Amazon Shopping Credit',
  };

  const subheadline = 'A secure, premium way to get shopping credit — quick to sign up, tailored for select residents.';

  // AFFILIATE LINK - Edit this to change the redirect URL
  const affiliateLink = 'https://uplevelrewarded.com/aff_c?offer_id=142&aff_id=148296';

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-brand/20 glow-brand mb-6">
          <Sparkles className="w-4 h-4 text-brand" />
          <span className="text-sm text-foreground/90 font-medium">Exclusive Opportunity</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-glow-soft leading-tight animate-hero-entrance">
          {headlines[variant]}
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-glow-soft animate-hero-entrance" style={{ animationDelay: '0.2s' }}>
          {subheadline}
        </p>

        <div className="pt-4 animate-hero-entrance" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            className="bg-brand hover:bg-brand-glow text-primary-foreground font-semibold text-lg px-8 py-6 rounded-lg glow-brand-lg transition-smooth hover:scale-105 hover:glow-brand-lg"
            asChild
          >
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
              {ctaTexts[ctaVariant]}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
