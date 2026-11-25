export type ShopifyApp = {
  sourceUrl?: string;
  checkedOn?: string;
  slug: string;
  name: string;
  category: string;
  bestFor: string;
  pricing: string;
  priceDetail: string;
  rating: string;
  shopifyDepth: 'Native' | 'Deep' | 'Basic' | 'Integration' | 'Not assessed';
  automationDepth: 'Advanced' | 'Solid' | 'Basic' | 'Minimal' | 'Not assessed';
  tagline: string;
  strengths: string[];
  limits: string[];
  features: string[];
  channels: string[];
  shopifyFit: string;
};

// Catalog order is not a ranking. Depth and rating have not been independently scored.
// sourceUrl supports bounded product facts, not a completed acceptance test.
export const APPS: ShopifyApp[] = [
  {
    "slug": "sequenzy",
    "name": "Sequenzy",
    "category": "Email, SMS and agent tools",
    "bestFor": "Store-data campaigns operated through an assistant",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Store-data campaigns operated through an assistant.",
    "strengths": [
      "Shopify customer and order sync",
      "AI, CLI and MCP tools"
    ],
    "limits": [
      "Check SMS account eligibility and tracking setup before enabling journeys"
    ],
    "features": [
      "Shopify customer and order sync",
      "AI, CLI and MCP tools"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Use MCP to inspect one synced order and SMS readiness; preview a sequence, purchase before its next step, and verify suppression before approving sends.",
    "sourceUrl": "https://apps.shopify.com/sequenzy",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "klaviyo",
    "name": "Klaviyo",
    "category": "Email and SMS automation",
    "bestFor": "Separate channel permission with Shopify customer data",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Separate channel permission with Shopify customer data.",
    "strengths": [
      "Shopify integration",
      "email and SMS consent collection"
    ],
    "limits": [
      "SMS collection depends on supported location, sending number and age-gating"
    ],
    "features": [
      "Shopify integration",
      "email and SMS consent collection"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Compare a first-time checkout SMS opt-in with a historical subscriber import; show separate email and SMS permission and a purchase stopping a recovery flow.",
    "sourceUrl": "https://help.klaviyo.com/hc/en-us/articles/360056824732",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "omnisend",
    "name": "Omnisend",
    "category": "Email, SMS and browser push",
    "bestFor": "Coordinating channels from synced commerce data",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Coordinating channels from synced commerce data.",
    "strengths": [
      "Shopify customer, product and order sync",
      "push workflows"
    ],
    "limits": [
      "Browser push requires HTTPS and its own subscriber permission"
    ],
    "features": [
      "Shopify customer, product and order sync",
      "push workflows"
    ],
    "channels": [
      "email",
      "sms",
      "push",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Connect a test store, verify a changed product and order, then join email and push identities at checkout; purchase before the next recovery step and inspect the stop decision.",
    "sourceUrl": "https://support.omnisend.com/en/articles/3175406-connect-your-shopify-store-to-omnisend",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "shopify-email",
    "name": "Shopify Email",
    "category": "Shopify Messaging (formerly Shopify Email)",
    "bestFor": "Testing the native Shopify campaign baseline",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Testing the native Shopify campaign baseline.",
    "strengths": [
      "Admin-based campaigns",
      "email and SMS automations"
    ],
    "limits": [
      "Channel availability and privacy settings must meet Shopify requirements"
    ],
    "features": [
      "Admin-based campaigns",
      "email and SMS automations"
    ],
    "channels": [
      "email",
      "sms",
      "whatsapp",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Build a welcome automation in the admin, check consent for each channel and prove a purchase stops the incentive reminder; identify any custom Flow work before adding another sender.",
    "sourceUrl": "https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "yotpo-email-sms",
    "name": "Yotpo Email & SMS",
    "category": "Retired email and SMS products",
    "bestFor": "Auditing a former Yotpo messaging program",
    "pricing": "Retired messaging product",
    "priceDetail": "No current messaging price presented.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Auditing a former Yotpo messaging program.",
    "strengths": [
      "Yotpo publishes messaging migration guidance"
    ],
    "limits": [
      "Yotpo scheduled full Email and SMS deprecation for December 31, 2025"
    ],
    "features": [
      "Yotpo publishes messaging migration guidance"
    ],
    "channels": [],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Inventory old flows, export permission and suppression history where accessible, and confirm replacement queue ownership. Reviews and loyalty are separate products; do not infer messaging availability from them.",
    "sourceUrl": "https://www.yotpo.com/blog/email-sms-migration-partners/",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "privy",
    "name": "Privy",
    "category": "Onsite conversion, email and SMS",
    "bestFor": "Connecting capture with lifecycle messaging",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Connecting capture with lifecycle messaging.",
    "strengths": [
      "Onsite conversion and messaging platform",
      "Sendlane acquisition announced"
    ],
    "limits": [
      "Acquisition does not establish identical plans, contracts or feature access"
    ],
    "features": [
      "Onsite conversion and messaging platform",
      "Sendlane acquisition announced"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Submit a popup twice, confirm one permission record and coupon, then purchase before the welcome follow-up. Ask which acquired features are available in the quoted Privy account.",
    "sourceUrl": "https://www.privy.com/blog/privy-acquires-sendlane",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "drip",
    "name": "Drip",
    "category": "Email automation and popups",
    "bestFor": "Designing behavior-based email workflows",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Designing behavior-based email workflows.",
    "strengths": [
      "Shopify customer segmentation",
      "automation workflows and popups"
    ],
    "limits": [
      "Confirm channel eligibility in the actual account rather than relying on listing category tags"
    ],
    "features": [
      "Shopify customer segmentation",
      "automation workflows and popups"
    ],
    "channels": [
      "email",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Enter a product-interest segment, change the purchase state, and inspect branch eligibility before the next email. Preview product blocks after a price change and document the data lag.",
    "sourceUrl": "https://apps.shopify.com/drip",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "postscript",
    "name": "Postscript",
    "category": "SMS and email with access conditions",
    "bestFor": "Evaluating SMS alongside the email rollout",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Evaluating SMS alongside the email rollout.",
    "strengths": [
      "Shopify SMS tools",
      "email product announced"
    ],
    "limits": [
      "Email page describes waitlist and cohort onboarding; confirm access before planning cutover"
    ],
    "features": [
      "Shopify SMS tools",
      "email product announced"
    ],
    "channels": [
      "sms",
      "email",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Obtain email access confirmation, then reconcile one shopper with multiple addresses and a phone number. Demonstrate cross-channel stop conditions and attribution windows before replacing an email sender.",
    "sourceUrl": "https://draft.postscript.io/email",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "attentive",
    "name": "Attentive",
    "category": "SMS and email journeys",
    "bestFor": "Separating transactional updates from promotional sends",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Separating transactional updates from promotional sends.",
    "strengths": [
      "Shopify transactional journeys",
      "email and SMS messaging"
    ],
    "limits": [
      "Transactional permission does not establish permission for marketing"
    ],
    "features": [
      "Shopify transactional journeys",
      "email and SMS messaging"
    ],
    "channels": [
      "sms",
      "email",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Create an order update for a transactional-only subscriber and show that promotional messages remain excluded; inspect shipment updates and the corresponding email journey configuration.",
    "sourceUrl": "https://help.attentive.com/hc/en-us/articles/360056977212-Set-up-transactional-subscriber-collection-and-messages-for-Shopify",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "mailchimp",
    "name": "Mailchimp",
    "category": "Email and ecommerce marketing",
    "bestFor": "Keeping an existing audience connected to Shopify",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Keeping an existing audience connected to Shopify.",
    "strengths": [
      "Shopify customer and order sync",
      "product recommendations"
    ],
    "limits": [
      "Pause overlapping welcome automations before connecting the store"
    ],
    "features": [
      "Shopify customer and order sync",
      "product recommendations"
    ],
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Connect a single store to the intended audience, compare historic and new orders, and confirm that import does not start duplicate welcome messages. Reconcile unsubscribes before the first campaign.",
    "sourceUrl": "https://mailchimp.com/help/connect-shopify/",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "activecampaign",
    "name": "ActiveCampaign",
    "category": "Marketing automation and sales workflows",
    "bestFor": "Purchase-triggered follow-up alongside sales processes",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Purchase-triggered follow-up alongside sales processes.",
    "strengths": [
      "Shopify purchase and abandoned-cart data",
      "ecommerce segment conditions"
    ],
    "limits": [
      "Map guest and logged-in identities before linking sales follow-up"
    ],
    "features": [
      "Shopify purchase and abandoned-cart data",
      "ecommerce segment conditions"
    ],
    "channels": [
      "email",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Place guest and logged-in orders, verify purchase fields and currency, then show which automation and sales owner receives each event. Retry the event and inspect duplicate follow-up prevention.",
    "sourceUrl": "https://help.activecampaign.com/hc/en-us/articles/360012461919-Get-started-with-the-ActiveCampaign-Shopify-integration",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "brevo",
    "name": "Brevo",
    "category": "Brevo PushOwl for Shopify",
    "bestFor": "Evaluating the current Shopify connection path",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Evaluating the current Shopify connection path.",
    "strengths": [
      "Customer, catalog and order sync",
      "email, SMS, push and WhatsApp"
    ],
    "limits": [
      "Brevo identifies PushOwl as the supported connection, replacing its former Shopify app"
    ],
    "features": [
      "Customer, catalog and order sync",
      "email, SMS, push and WhatsApp"
    ],
    "channels": [
      "email",
      "sms",
      "push",
      "whatsapp",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Check the existing Brevo account identity before import, preserve subscription status, activate the tracker, and test a variant back-in-stock alert against actual inventory. Quote the Shopify product rather than a generic Brevo plan.",
    "sourceUrl": "https://help.brevo.com/hc/en-us/articles/360014912879-Brevo-PushOwl-app-for-Shopify-Connect-your-Shopify-store-with-Brevo-PushOwl",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "sendlane",
    "name": "Sendlane",
    "category": "Ecommerce messaging acquired by Privy",
    "bestFor": "Reviewing Sendlane continuity and migration scope",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Reviewing Sendlane continuity and migration scope.",
    "strengths": [
      "Email and SMS platform",
      "Privy acquisition announced"
    ],
    "limits": [
      "Confirm contracting entity, account continuity and feature transition directly"
    ],
    "features": [
      "Email and SMS platform",
      "Privy acquisition announced"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Request a written continuity plan for existing journeys, billing and support. Reproduce one suppression rule and reporting window in the proposed destination before moving the remaining flows.",
    "sourceUrl": "https://www.privy.com/sendlane-acquisition",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "aftership-email",
    "name": "AfterShip Email",
    "category": "AfterShip Email",
    "bestFor": "Coordinating marketing with post-purchase notifications",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Coordinating marketing with post-purchase notifications.",
    "strengths": [
      "Marketing email and post-purchase notification flows"
    ],
    "limits": [
      "Tracking, Returns and SMS are distinct AfterShip services; confirm dependencies"
    ],
    "features": [
      "Marketing email and post-purchase notification flows"
    ],
    "channels": [
      "email",
      "marketing"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Map a delayed delivery and a return to their source products, then check which email flow consumes each event. Keep service updates separate from promotions and price every required module.",
    "sourceUrl": "https://www.aftership.com/legal/feature-specific-terms",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "recart",
    "name": "Recart",
    "category": "SMS marketing",
    "bestFor": "Evaluating a Shopify SMS program",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Evaluating a Shopify SMS program.",
    "strengths": [
      "Shopify-focused SMS marketing"
    ],
    "limits": [
      "Historical Messenger positioning does not establish current Messenger access"
    ],
    "features": [
      "Shopify-focused SMS marketing"
    ],
    "channels": [
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Collect an SMS opt-in, abandon a cart, then purchase before the reminder. Inspect consent, stop behavior and send costs; ask separately about any legacy Messenger workflow you need to retain.",
    "sourceUrl": "https://recart.com/careers-old",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "justuno",
    "name": "Justuno",
    "category": "Onsite conversion and capture",
    "bestFor": "Passing subscriber intent to an existing sender",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Passing subscriber intent to an existing sender.",
    "strengths": [
      "Shopify lead capture",
      "targeted onsite offers"
    ],
    "limits": [
      "A capture integration alone does not establish email delivery or downstream queue behavior"
    ],
    "features": [
      "Shopify lead capture",
      "targeted onsite offers"
    ],
    "channels": [
      "marketing"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Capture a Shop login and coupon, inspect the destination audience and consent fields, then dismiss and revisit the offer on mobile. Verify the receiving sender owns the welcome queue.",
    "sourceUrl": "https://partners.justuno.com/integration-partners/shopify",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "rejoiner",
    "name": "Rejoiner",
    "category": "Lifecycle email and services",
    "bestFor": "Scoping software versus managed lifecycle work",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Scoping software versus managed lifecycle work.",
    "strengths": [
      "Email and SMS software with expert service support"
    ],
    "limits": [
      "Confirm SMS scope and deliverables in a current proposal"
    ],
    "features": [
      "Email and SMS software with expert service support"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Ask who writes, approves and changes each flow, then walk a recovered cart through the service handoff. Record revision ownership, reporting access and what remains if the service engagement ends.",
    "sourceUrl": "https://www.rejoiner.com/",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "marsello",
    "name": "Marsello",
    "category": "Loyalty and customer messaging",
    "bestFor": "Joining POS rewards with online customer history",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Joining POS rewards with online customer history.",
    "strengths": [
      "Shopify POS loyalty",
      "reward messages and merge tags"
    ],
    "limits": [
      "Cross-channel matching uses email; phone-only members do not automatically link online"
    ],
    "features": [
      "Shopify POS loyalty",
      "reward messages and merge tags"
    ],
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Enroll a phone-only POS member, then add email and verify the online match and point balance. Redeem a reward and check the next loyalty message reflects the new balance.",
    "sourceUrl": "https://help.marsello.com/shopify-pos-common-questions-marsello-help-center",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "firepush",
    "name": "Firepush",
    "category": "Web push notifications",
    "bestFor": "Evaluating browser-based recovery",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Evaluating browser-based recovery.",
    "strengths": [
      "Current provider notice identifies Firepush as a web push app"
    ],
    "limits": [
      "November 2026 notice says SMS and email campaigns are no longer offered"
    ],
    "features": [
      "Current provider notice identifies Firepush as a web push app"
    ],
    "channels": [
      "push",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Use a permitted browser subscription to test a product reminder, purchase suppression and browser revocation. Inventory any historical SMS or email flows for a separate sender; old help pages are not current availability evidence.",
    "sourceUrl": "https://getfirepush.com/blog/sms-campaigns/",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "smsbump",
    "name": "SMSBump",
    "category": "Legacy Yotpo SMSBump messaging",
    "bestFor": "Reconciling a former SMSBump subscriber history",
    "pricing": "Retired messaging product",
    "priceDetail": "No current messaging price presented.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Reconciling a former SMSBump subscriber history.",
    "strengths": [
      "Legacy brand associated with Yotpo messaging"
    ],
    "limits": [
      "Yotpo Email and SMS were scheduled for full deprecation on December 31, 2025"
    ],
    "features": [
      "Legacy brand associated with Yotpo messaging"
    ],
    "channels": [],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Trace SMSBump consent, STOP records and active phone-number ownership into the replacement program. Confirm which exports remain accessible and prevent replaying old recovery queues.",
    "sourceUrl": "https://www.yotpo.com/blog/email-sms-migration-partners/",
    "checkedOn": "2026-11-25"
  },
  {
    "slug": "tinyemail",
    "name": "tinyEmail",
    "category": "AI-assisted ecommerce email",
    "bestFor": "Reviewing generated campaign copy and store data",
    "pricing": "Request current plan and usage quote",
    "priceDetail": "Price the documented workflow, channel destinations, send volume and required support; no fixed rate verified here.",
    "rating": "Not independently scored",
    "shopifyDepth": "Not assessed",
    "automationDepth": "Not assessed",
    "tagline": "Reviewing generated campaign copy and store data.",
    "strengths": [
      "AI-assisted email and ecommerce workflows"
    ],
    "limits": [
      "Generated copy needs product, offer and audience review before approval"
    ],
    "features": [
      "AI-assisted email and ecommerce workflows"
    ],
    "channels": [
      "email",
      "marketing"
    ],
    "shopifyFit": "Acceptance brief (proposed, not a completed test): Draft a product campaign, change its price and availability, then preview all blocks and links. Check audience permission and sender authentication before scheduling; document which workflow steps still need manual work.",
    "sourceUrl": "https://www.tinyemail.com/careers",
    "checkedOn": "2026-11-25"
  }
];

export function appBySlug(slug: string) {
  return APPS.find((a) => a.slug === slug);
}

export function channelApps(channel: string) {
  return APPS.filter((app) => app.channels.includes(channel));
}

export function comparisonPairs() {
  const pairs: [ShopifyApp, ShopifyApp][] = [];
  // Historical comparison routes include retired and adjacent tools.
  // Preserve the route roster independently of current channel availability.
  const emailApps = APPS;
  for (let i = 0; i < emailApps.length; i++) {
    for (let j = i + 1; j < Math.min(emailApps.length, i + 7); j++) {
      pairs.push([emailApps[i], emailApps[j]]);
    }
  }
  return pairs.slice(0, 70);
}
