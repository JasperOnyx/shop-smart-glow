import { Lock, CheckCircle, FileText } from 'lucide-react';

const badges = [
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data is protected',
  },
  {
    icon: CheckCircle,
    title: 'Trusted Experience',
    description: 'Reliable reward process',
  },
  {
    icon: FileText,
    title: 'Terms Apply',
    description: 'Clear & transparent',
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-lg backdrop-premium border border-border glow-soft transition-smooth hover:glow-soft-lg"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          No spam. We'll only use your info to deliver the reward process.
        </p>
      </div>
    </section>
  );
};
