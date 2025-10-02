import { UserPlus, Shield, Gift } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Sign up with ShopSmart',
    description: 'Enter a few quick details.',
  },
  {
    number: 2,
    icon: Shield,
    title: 'Confirm your eligibility',
    description: 'Residents of UK, US, CA, or AU only.',
  },
  {
    number: 3,
    icon: Gift,
    title: 'Receive your £750 Amazon shopping credit',
    description: 'Follow the redemption steps.',
  },
];

export const ThreeStepProcess = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground text-glow-soft">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center space-y-4 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-card/60 backdrop-blur-sm border border-brand/30 flex items-center justify-center glow-brand transition-smooth group-hover:scale-110 group-hover:glow-brand-lg">
                    <Icon className="w-10 h-10 text-brand" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-primary-foreground font-bold text-sm glow-brand">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
