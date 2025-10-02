export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#terms"
              className="text-muted-foreground hover:text-brand transition-smooth"
            >
              Terms & Conditions
            </a>
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-brand transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#cookies"
              className="text-muted-foreground hover:text-brand transition-smooth"
            >
              Cookie Settings
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed">
              This promotion is independent and is not endorsed by Amazon. Terms & conditions apply. Eligibility requirements and full details available in our Terms & Conditions.
            </p>
          </div>

          <div className="pt-6 border-t border-border/20">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ShopSmart. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
