export type Segment = {
  slug: string;
  name: string;
  pain: string;
  buyingCycle: string;
  emailPriorities: string[];
  topApps: string[];
  metrics: string[];
};

// Planning briefs, not observed industry benchmarks. topApps is reserved for
// evidence-backed workflow shortlists; empty arrays make no supplier ranking.
export const SEGMENTS: Segment[] = [
  {
    slug: 'fashion',
    name: 'fashion stores',
    pain: 'seasonality, size availability, drops, and fast-moving inventory',
    buyingCycle: 'Measure discovery-to-order by collection and size; separate launch demand from return-driven replacements.',
    emailPriorities: ['Drop and waitlist campaigns', 'Size and fit education', 'Back-in-stock by variant', 'Seasonal winback before clearance'],
    topApps: [],
    metrics: ['Revenue per recipient by collection', 'Second purchase within 60 days', 'Return rate by email segment', 'Full-price vs discount purchase ratio'],
  },
  {
    slug: 'beauty',
    name: 'beauty brands',
    pain: 'replenishment timing, bundles, subscriptions, shades, and routine education',
    buyingCycle: 'Estimate reorder intervals by routine, pack size and shade; separate subscription renewals from discretionary purchases.',
    emailPriorities: ['Replenishment by product usage', 'Routine education sequences', 'Shade matching follow-up', 'Subscription skip/churn prevention'],
    topApps: [],
    metrics: ['Replenishment conversion rate', 'Subscription retention at 90 days', 'Bundle attach rate from email', 'Unsubscribe rate on education vs promo'],
  },
  {
    slug: 'supplements',
    name: 'supplement stores',
    pain: 'compliance-safe claims, subscriptions, replenishment, and education',
    buyingCycle: 'Use pack quantity and stated usage to propose a reorder window; review claims before sending.',
    emailPriorities: ['Compliance-safe education content', 'Replenishment timing by SKU', 'Subscription management emails', 'Ingredient and usage guides'],
    topApps: [],
    metrics: ['Subscription churn from email touchpoints', 'Replenishment revenue per active subscriber', 'Compliance review pass rate', 'LTV by acquisition source'],
  },
  {
    slug: 'jewelry',
    name: 'jewelry stores',
    pain: 'gift timing, high-consideration purchases, and trust-building',
    buyingCycle: 'Separate self-purchase from occasion-led gifts; measure consultation-to-order and delivery lead time.',
    emailPriorities: ['Gift guide and occasion campaigns', 'Trust-building education', 'Financing and warranty proof', 'Anniversary and milestone reminders'],
    topApps: [],
    metrics: ['Gift purchase attribution', 'Average consideration time', 'High-AOV conversion from nurture', 'Repeat gift buyer rate'],
  },
  {
    slug: 'home-goods',
    name: 'home goods stores',
    pain: 'larger catalogs, style preferences, and delayed purchase cycles',
    buyingCycle: 'Measure room or project purchase intervals; separate browsing inspiration from an active furnishing plan.',
    emailPriorities: ['Room and style segmentation', 'Inspiration content series', 'Cross-sell by room completion', 'Seasonal refresh campaigns'],
    topApps: [],
    metrics: ['Cross-sell revenue per room segment', 'Browse-to-purchase window', 'Catalog engagement depth', 'Project completion rate'],
  },
  {
    slug: 'food-and-beverage',
    name: 'food and beverage brands',
    pain: 'repeat purchase windows, subscriptions, and limited-time flavors',
    buyingCycle: 'Calculate reorder timing from pack size and customer usage; include shipping and perishability constraints.',
    emailPriorities: ['Replenishment by consumption rate', 'New flavor launch alerts', 'Subscription box previews', 'Perishability and shipping clarity'],
    topApps: [],
    metrics: ['Reorder rate by product', 'Subscription skip recovery', 'Launch sell-through from email', 'Margin after shipping promos'],
  },
  {
    slug: 'pet-products',
    name: 'pet product stores',
    pain: 'pet lifecycle, reorder timing, and product education',
    buyingCycle: 'Estimate depletion from product quantity and pet size; update the model when life stage or household changes.',
    emailPriorities: ['Pet life-stage segmentation', 'Reorder by consumption math', 'Breed/size-specific recommendations', 'New pet onboarding series'],
    topApps: [],
    metrics: ['Reorder rate by pet segment', 'Life-stage transition revenue', 'Subscription retention', 'Education-to-purchase conversion'],
  },
  {
    slug: 'digital-products',
    name: 'digital product shops',
    pain: 'delivery, onboarding, cross-sells, and low-inventory constraints',
    buyingCycle: 'Use delivery and activation events to time onboarding; base cross-sell on completed use rather than a fixed day.',
    emailPriorities: ['Instant delivery and access emails', 'Onboarding and activation series', 'Cross-sell by purchase behavior', 'Renewal and upgrade paths'],
    topApps: [],
    metrics: ['Activation rate post-purchase', 'Cross-sell within 14 days', 'Renewal conversion', 'Support ticket reduction from onboarding'],
  },
  {
    slug: 'print-on-demand',
    name: 'print-on-demand stores',
    pain: 'trend cycles, personalization, and margin-sensitive promos',
    buyingCycle: 'Separate design approval, production and delivery; measure consideration by design rather than assuming impulse demand.',
    emailPriorities: ['Trend and design drop alerts', 'Personalization follow-up', 'Margin-safe discount rules', 'Creator and niche community content'],
    topApps: [],
    metrics: ['Margin per email order', 'Trend drop sell-through', 'Personalization completion rate', 'Discount dependency ratio'],
  },
  {
    slug: 'high-aov',
    name: 'high-AOV stores',
    pain: 'longer consideration, trust, financing, and expert proof',
    buyingCycle: 'Measure consultation and financing steps before order; distinguish long consideration from lost intent.',
    emailPriorities: ['Extended nurture sequences', 'Expert proof and case studies', 'Financing and warranty education', 'Consultation booking follow-up'],
    topApps: [],
    metrics: ['Consideration-to-purchase window', 'Financing attach rate', 'Consultation-to-sale conversion', 'Full-price purchase percentage'],
  },
  {
    slug: 'subscription-boxes',
    name: 'subscription box brands',
    pain: 'subscriber retention, skips, churn, and upcoming-box previews',
    buyingCycle: 'Use the actual billing calendar and skip events; measure churn by subscriber tenure before choosing intervention points.',
    emailPriorities: ['Upcoming box preview emails', 'Skip recovery sequences', 'Churn prevention at risk months', 'Referral and gifting campaigns'],
    topApps: [],
    metrics: ['Skip-to-active recovery rate', 'Churn by subscriber month', 'Referral revenue from email', 'Box preview engagement correlation'],
  },
  {
    slug: 'b2b-wholesale',
    name: 'B2B wholesale Shopify stores',
    pain: 'account approvals, bulk ordering, and rep follow-up',
    buyingCycle: 'Measure approval-to-first-order and account reorder intervals; distinguish buyer activity from rep-owned opportunities.',
    emailPriorities: ['Account approval and onboarding', 'Bulk order reminders', 'Rep-triggered follow-up', 'Catalog and MOQ updates'],
    topApps: [],
    metrics: ['Account activation rate', 'Bulk reorder frequency', 'Rep-attributed revenue', 'MOQ compliance from email prompts'],
  },
];

export function segmentBySlug(slug: string) {
  return SEGMENTS.find((s) => s.slug === slug);
}
