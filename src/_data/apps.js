// Single source of truth for the three apps. Nav, footers, homepage cards,
// JSON-LD, FAQ markup, and smart app banners all render from this data.
//
// `rating` mirrors the App Store (see tools/check_ratings.sh). It is only
// emitted as aggregateRating schema once `count` reaches MIN_RATING_COUNT,
// so thin data never looks gamed to search engines.
const MIN_RATING_COUNT = 5;

module.exports = [
  {
    key: "random-run",
    name: "Random Run",
    bodyClass: "page--run",
    color: "run",
    tagline: "New route, every time.",
    navDesc: "New route, every time",
    cardDesc:
      "A running route generator for iPhone and Apple Watch. Pick a distance or a time, get three loop routes you've never run, and follow them turn by turn — with automatic Strava upload when you finish.",
    page: "/random-run.html",
    privacy: "/privacy.html",
    appStoreId: "6755962631",
    appStoreUrl: "https://apps.apple.com/app/random-run/id6755962631",
    icon128: "/img/random-run-icon-128.webp",
    icon180: "/img/random-run-icon-180.png",
    shareCard: "/img/share-random-run.png",
    os: "iOS 17.6+",
    schemaDescription:
      "One tap to find a new route. One tap to run it on your wrist. Zero taps to log it to Strava. Free for iPhone and Apple Watch, privacy-first by default.",
    rating: { value: 5.0, count: 3, min: MIN_RATING_COUNT },
    ctaHeading: "Your next run starts here.",
    footerBrand: "Random Run. New route, every time.",
    footerCopy: "Made for runners who want variety.",
    faqs: [
      {
        q: "Is Random Run free?",
        a: "<p>Yes — completely free. No subscriptions, no in-app purchases, no ads. Every feature is available from day one.</p>",
      },
      {
        q: "Does Random Run work on Apple Watch?",
        a: "<p>Yes. Random Run is a standalone Apple Watch app — not a companion that mirrors the phone. You can generate routes, follow turn-by-turn directions, and track the whole run from your wrist. Leave the phone at home.</p>",
      },
      {
        q: "Does Random Run upload runs to Strava?",
        a: "<p>Yes. Random Run has optional Strava integration on both iPhone and Apple Watch. It's off by default — turn it on once and every future run uploads automatically when you finish. One tap to turn it off again, any time.</p>",
      },
      {
        q: "Does Random Run track my location or collect my data?",
        a: '<p>Your location and your routes never leave your device. Route generation happens locally, and there are no accounts or ad-network tracking. We do collect anonymous, aggregated usage signals (e.g. how many people finished onboarding) through TelemetryDeck — no identifiers, no GPS, no route data. Strava integration is fully optional and off by default. See our <a href="/privacy.html">privacy policy</a> for the full breakdown.</p>',
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet — Random Run is iOS only for now. If you\'d like to see an Android version, <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20Request%20for%20Random%20Run">let us know</a>. It helps us prioritize.</p>',
      },
      {
        q: "How does the route generation work?",
        a: "<p>Tell Random Run how far or how long you want to run. It generates three unique loop routes starting and ending at your current location — and since version 2.0, every route is a true loop that never retraces a street, so there are no disguised out-and-backs. If you connect Apple Health, routes are personalized to your running pace.</p>",
      },
      {
        q: "Can I auto-upload my runs to Strava?",
        a: "<p>Yes. Connect Strava once in Settings and every finished run uploads automatically — no taps required. Your phone sends runs directly to Strava; we never see them. Disconnect anytime from Settings or from Strava's own app-permissions page.</p>",
      },
      {
        q: "Does Random Run support run/walk intervals?",
        a: "<p>Yes. Random Run has built-in Galloway-style run/walk intervals. Set your run and walk durations, and the app announces every switch with a voice cue and a haptic tap — on iPhone and Apple Watch. Interval cues share audio politely with turn-by-turn voice guidance.</p>",
      },
      {
        q: "Can I plan a running route somewhere other than my current location?",
        a: "<p>Yes. Pick any starting point on the map — a hotel, an office, a trailhead — and Random Run generates loop routes from there. Perfect for planning tomorrow's run the night before, especially when travelling.</p>",
      },
      {
        q: "What happens if I go off route during a run?",
        a: "<p>Random Run automatically detects when you've drifted off course and reroutes you back to your loop, updating the map, directions, and voice guidance. If a road is closed or you want a different way home, tap the Detour button and the app builds an alternate path back to your start.</p>",
      },
    ],
  },
  {
    key: "bikeright",
    name: "BikeRight",
    bodyClass: "page--ride",
    color: "ride",
    tagline: "Safer routes, scored and explained.",
    navDesc: "Safer routes, scored and explained",
    cardDesc:
      "A cycling navigation app that finds the safest bike route to your destination using your city's real infrastructure — protected lanes, quiet streets, multi-use paths — with every route safety-scored and haptic turn-by-turn on Apple Watch.",
    page: "/bikeright.html",
    privacy: "/bikeright-privacy.html",
    appStoreId: "6759763484",
    appStoreUrl: "https://apps.apple.com/app/bikeright-safer-bike-routes/id6759763484",
    icon128: "/img/bikeright-icon-128.webp",
    icon180: "/img/bikeright-icon-180.png",
    shareCard: "/img/share-bikeright.png",
    os: "iOS 17.6+",
    schemaDescription:
      "BikeRight builds the route around protected lanes, quiet streets, and the cycling infrastructure your city actually has — then keeps your eyes on the road while you ride. Apple Watch delivers every turn, and each segment's safety, through distinct haptic tap patterns.",
    rating: { value: 0, count: 0, min: MIN_RATING_COUNT },
    ctaHeading: "Your safest ride starts here.",
    footerBrand: "BikeRight. Safer routes, scored and explained.",
    footerCopy: "Made for riders who want to know what's between them and the cars.",
    faqs: [
      {
        q: "Is BikeRight free?",
        a: "<p>Yes — completely free. No subscriptions, no in-app purchases, no ads. Every feature, including Apple Watch and destination mode, is included.</p>",
      },
      {
        q: "How does BikeRight score route safety?",
        a: "<p>BikeRight analyzes each route segment against OpenStreetMap cycling infrastructure data — protected bike lanes, multi-use paths, shared roads, and unprotected streets. Each route gets an overall safety score so the safest option is always at the top.</p>",
      },
      {
        q: "Does BikeRight track my location or collect data?",
        a: "<p>No. Route generation and safety scoring happen entirely on your device. Your GPS coordinates are never sent to our servers — we don't have any. There are no analytics, no accounts, and no tracking.</p>",
      },
      {
        q: "Does BikeRight work on Apple Watch?",
        a: "<p>Yes. BikeRight has a standalone Apple Watch app that delivers two kinds of information through haptic taps on your wrist:</p><ul><li><strong>Navigation.</strong> Distinct tap patterns for left and right turns — you learn the rhythm in one ride.</li><li><strong>Upcoming segment safety.</strong> As each new segment begins, your wrist taps once for a protected lane, twice for shared, three times for unprotected, and a pair of four-taps when the street is rough enough that you may want to look up.</li></ul><p>No screen to check, no glance down. The safety score you chose on the map is the one you feel on the road.</p>",
      },
      {
        q: "Does BikeRight support Live Activities and Dynamic Island?",
        a: "<p>Yes. If you prefer your phone in a handlebar mount, BikeRight keeps your next turn, distance, and the current segment's safety visible on the Lock Screen as a Live Activity. Dynamic Island keeps the turn in view even when another app is open, so you never need to touch the phone mid-ride.</p>",
      },
      {
        q: "Can I use BikeRight to navigate to a specific destination?",
        a: '<p>Yes. Tap "Add a destination" on the home screen, enter an address, and BikeRight will find multiple routes — each scored and ranked by safety.</p>',
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet — BikeRight is iOS only for now. If you\'d like to see an Android version, <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20Request%20for%20BikeRight">let us know</a>. It helps us prioritize.</p>',
      },
    ],
  },
  {
    key: "go-for-a-walk",
    name: "Go for a Walk",
    bodyClass: "page--walk",
    color: "walk",
    tagline: "Same block, new streets.",
    navDesc: "Same block, new streets",
    cardDesc:
      "A walking route app that builds loops through your own neighbourhood with the stops you actually want — parks, coffee, landmarks, playgrounds — so the same block always has new streets.",
    page: "/go-for-a-walk.html",
    privacy: "/go-for-a-walk-privacy.html",
    appStoreId: "6761119312",
    appStoreUrl: "https://apps.apple.com/app/go-for-a-walk/id6761119312",
    icon128: "/img/go-for-a-walk-icon-128.webp",
    icon180: "/img/go-for-a-walk-icon-180.png",
    shareCard: "/img/share-go-for-a-walk.png",
    os: "iOS 26.1+",
    schemaDescription:
      "Set your distance. Pick what you want along the way — parks, coffee, landmarks, playgrounds. Get three routes through parts of your own area you've never seen.",
    rating: { value: 0, count: 0, min: MIN_RATING_COUNT },
    ctaHeading: "Your next walk starts here.",
    footerBrand: "Go for a Walk. Same block, new streets.",
    footerCopy: "Built for the everyday explorer.",
    faqs: [
      {
        q: "Is Go for a Walk free?",
        a: "<p>Yes — completely free. No subscriptions, no in-app purchases, no ads. Every feature is included from the start.</p>",
      },
      {
        q: "Where can I download Go for a Walk?",
        a: '<p>Go for a Walk is available free on the <a href="https://apps.apple.com/app/go-for-a-walk/id6761119312" target="_blank" rel="noopener">App Store</a>.</p>',
      },
      {
        q: "Does Go for a Walk track my location or collect data?",
        a: "<p>No. Your walk history, preferences, and route data stay on your device. We don't have servers, we don't run analytics, and we don't collect any personal information.</p>",
      },
      {
        q: "Can I customize my walking routes?",
        a: "<p>Yes. You can add parks, coffee stops, dog parks, landmarks, and playgrounds to your route. Set your preferred distance or duration.</p>",
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet — Go for a Walk is iOS only for now. If you\'d like to see an Android version, <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20Request%20for%20Go%20for%20a%20Walk">let us know</a>. It helps us prioritize.</p>',
      },
    ],
  },
];
