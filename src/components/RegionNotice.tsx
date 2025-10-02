import { MapPin } from 'lucide-react';

export const RegionNotice = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-2xl backdrop-premium border-2 border-brand/40 glow-brand-lg">
          <div className="absolute top-4 right-4">
            <MapPin className="w-8 h-8 text-brand opacity-30" />
          </div>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-8 h-8 text-brand" strokeWidth={1.5} />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-glow-soft">
                Eligibility Notice
              </h3>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                This offer is available only to residents of the{' '}
                <span className="font-semibold text-brand">United Kingdom</span>,{' '}
                <span className="font-semibold text-brand">United States</span>,{' '}
                <span className="font-semibold text-brand">Canada</span>, or{' '}
                <span className="font-semibold text-brand">Australia</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
