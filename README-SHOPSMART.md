# ShopSmart Landing Page - Configuration Guide

## Quick Start

This landing page is ready to deploy! The affiliate link is already configured.

## Key Configuration Points

### 1. Affiliate Link (MOST IMPORTANT)
The affiliate redirect URL is set in: `src/components/HeroSection.tsx`

```typescript
// Line 17-18
const affiliateLink = 'https://uplevelrewarded.com/aff_c?offer_id=142&aff_id=148296';
```

To change the affiliate link, edit this single line.

### 2. A/B Testing Variants
Test different headlines and CTA buttons in: `src/pages/Index.tsx`

```typescript
// Lines 12-13
const heroVariant: 'A' | 'B' = 'A';  // Change to 'B' for alternate headline
const ctaVariant: 'A' | 'B' = 'A';   // Change to 'B' for alternate CTA text
```

**Headline Variants:**
- Variant A: "Unlock £750 Amazon Shopping Rewards — Join ShopSmart"
- Variant B: "£750 Amazon Shopping Reward — Eligible UK, US, CA & AU Residents"

**CTA Button Variants:**
- Variant A: "Claim My £750 Reward"
- Variant B: "Get My Amazon Shopping Credit"

### 3. Rotating Notifications
Configure name pool and message templates in: `src/components/RotatingNotifications.tsx`

```typescript
// Lines 4-9: Name pool
const names = [
  'James', 'Olivia', 'Ethan', // ... add or remove names
];

// Lines 11-15: Message templates
const messageTemplates = [
  'just claimed ShopSmart £750 Amazon Reward',
  // ... add or remove messages
];
```

**Timing:** 
- Visible: 5 seconds
- Hidden: 8 seconds
- Total cycle: 13 seconds

### 4. Legal Links
Update footer links in: `src/components/Footer.tsx`

Replace `#terms`, `#privacy`, and `#cookies` with actual URLs:

```typescript
<a href="https://yourdomain.com/terms">Terms & Conditions</a>
<a href="https://yourdomain.com/privacy">Privacy Policy</a>
<a href="https://yourdomain.com/cookies">Cookie Settings</a>
```

## Design System

All colors and styles are defined in:
- `src/index.css` - CSS variables and utilities
- `tailwind.config.ts` - Tailwind extensions

### Brand Colors (HSL)
- Primary Brand: `--brand: 30 100% 50%` (#FF9900)
- Background: `--background: 220 15% 8%` (Dark charcoal)
- Card: `--card: 220 15% 12%` (Slightly lighter)

### Glow Effects
Applied via utility classes:
- `.glow-brand` - Orange glow
- `.glow-brand-lg` - Larger orange glow
- `.glow-soft` - Soft white glow

## Performance Notes

- Animated particles are optimized using Canvas API
- All animations use CSS `transform` for GPU acceleration
- No heavy libraries - built with React + Tailwind only

## SEO & Meta Tags

Meta tags are set in:
- `index.html` - Default meta tags
- `src/pages/Index.tsx` - React Helmet dynamic tags

Update for your domain and social sharing.

## Analytics Integration

Add your tracking code in `index.html` or create a separate analytics component.

Recommended UTM parameters for TikTok traffic:
```
?utm_source=tiktok&utm_medium=social&utm_campaign=shopsmart
```

## GDPR Compliance

Cookie consent control is linked in the footer but needs implementation. Consider using a service like:
- Cookie Consent by Osano
- CookieBot
- OneTrust

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting
3. Point your domain (vaultsrating.online) to the deployment
4. Ensure HTTPS is enabled
5. Test all links and the affiliate redirect

## Support & Modifications

For any changes to the design system, always edit:
1. `src/index.css` first (define new colors/utilities)
2. `tailwind.config.ts` if needed
3. Then use the tokens in components

Never use hardcoded colors like `bg-white` or `text-[#FF9900]` in components!

---

**Built with Lovable** | Ready for production ✨
