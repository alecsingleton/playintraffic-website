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
      "A running route generator for iPhone and Apple Watch. Tell it how far or how long you want to run, and it builds three loops you've never done, with turn-by-turn directions and automatic Strava upload when you finish.",
    page: "/random-run.html",
    privacy: "/privacy.html",
    appStoreId: "6755962631",
    appStoreUrl: "https://apps.apple.com/app/random-run/id6755962631",
    icon128: "/img/random-run-icon-128.webp",
    icon180: "/img/random-run-icon-180.png",
    shareCard: "/img/share-random-run.png",
    os: "iOS 17.6+",
    schemaDescription:
      "A free running route generator for iPhone and Apple Watch. Pick a distance or a time, get three loop routes you've never run, follow them from your wrist, and let finished runs upload to Strava on their own.",
    rating: { value: 5.0, count: 3, min: MIN_RATING_COUNT },
    ctaHeading: "Your next run starts here.",
    footerBrand: "Random Run. New route, every time.",
    footerCopy: "Made for runners who want variety.",
    faqs: [
      {
        q: "Is Random Run free?",
        a: "<p>Yes, completely free. There are no subscriptions, in-app purchases, or ads, and every feature is included from day one.</p>",
      },
      {
        q: "Does Random Run work on Apple Watch?",
        a: "<p>Yes. Random Run runs on its own on Apple Watch, so you can generate routes, follow the turn-by-turn directions, and track the whole run from your wrist without bringing your phone along.</p>",
      },
      {
        q: "Does Random Run upload runs to Strava?",
        a: "<p>Yes. There's an optional Strava integration on both iPhone and Apple Watch. It's off by default; once you turn it on, every finished run uploads automatically, and you can turn it back off anytime.</p>",
      },
      {
        q: "Does Random Run track my location or collect my data?",
        a: '<p>Your location and your routes never leave your device. Route generation happens locally, and there are no accounts or ad tracking. We do collect anonymous, aggregated usage signals (like how many people finish onboarding) through TelemetryDeck, with no identifiers, GPS, or route data attached. Strava integration is optional and off by default. Our <a href="/privacy.html">privacy policy</a> has the full details.</p>',
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet. Random Run is iOS only for now, but if you\'d like an Android version, <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20Request%20for%20Random%20Run">let us know</a> — knowing people want it helps us decide what to build next.</p>',
      },
      {
        q: "How does the route generation work?",
        a: "<p>You tell Random Run how far or how long you want to run, and it generates three loop routes that start and end at your current location. Since version 2.0, every route is a true loop that never retraces a street, so you won't get an out-and-back in disguise. If you connect Apple Health, route timing is based on your own running pace.</p>",
      },
      {
        q: "Can I auto-upload my runs to Strava?",
        a: "<p>Yes. Connect Strava once in Settings and every finished run uploads on its own. Your phone sends runs directly to Strava, so we never see them, and you can disconnect anytime from Settings or from Strava's app permissions page.</p>",
      },
      {
        q: "Does Random Run support run/walk intervals?",
        a: "<p>Yes. There are built-in Galloway-style run/walk intervals: set your run and walk durations, and the app announces each switch with a voice cue and a haptic tap on both iPhone and Apple Watch. The interval cues are timed so they don't talk over the turn-by-turn voice guidance.</p>",
      },
      {
        q: "Can I plan a running route somewhere other than my current location?",
        a: "<p>Yes. Pick any starting point on the map (a hotel, an office, a trailhead) and Random Run generates loop routes from there. It's handy for planning tomorrow's run the night before, especially when you're travelling.</p>",
      },
      {
        q: "What happens if I go off route during a run?",
        a: "<p>The app notices when you've drifted off course and reroutes you back to your loop, updating the map, directions, and voice guidance as it goes. If a road is closed or you just want a different way home, the Detour button builds an alternate path back to your start.</p>",
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
      "A cycling navigation app that finds the safest bike route to your destination using your city's real infrastructure: protected lanes, quiet streets, and multi-use paths. Every route gets a safety score, and Apple Watch taps out the turns so your eyes stay on the road.",
    page: "/bikeright.html",
    privacy: "/bikeright-privacy.html",
    appStoreId: "6759763484",
    appStoreUrl: "https://apps.apple.com/app/bikeright-safer-bike-routes/id6759763484",
    icon128: "/img/bikeright-icon-128.webp",
    icon180: "/img/bikeright-icon-180.png",
    shareCard: "/img/share-bikeright.png",
    os: "iOS 17.6+",
    schemaDescription:
      "BikeRight finds bike routes built around protected lanes, quiet streets, and your city's real cycling infrastructure. Every route gets a safety score, and the Apple Watch app delivers turns and segment safety through haptic taps so your eyes stay on the road.",
    rating: { value: 0, count: 0, min: MIN_RATING_COUNT },
    ctaHeading: "Your safest ride starts here.",
    footerBrand: "BikeRight. Safer routes, scored and explained.",
    footerCopy: "Made for riders who want to know what's between them and the cars.",
    faqs: [
      {
        q: "Is BikeRight free?",
        a: "<p>Yes, completely free. There are no subscriptions, in-app purchases, or ads, and everything, including the Apple Watch app and destination mode, is included.</p>",
      },
      {
        q: "How does BikeRight score route safety?",
        a: "<p>Each segment of a route is checked against OpenStreetMap's cycling infrastructure data and classified as a protected bike lane, multi-use path, shared road, or unprotected street. Those segments roll up into an overall safety score for the route, so the safest option is easy to spot.</p>",
      },
      {
        q: "Does BikeRight track my location or collect data?",
        a: "<p>No. Route generation and safety scoring happen entirely on your device, and your GPS coordinates are never sent to our servers (we don't have any). There are no analytics, accounts, or tracking.</p>",
      },
      {
        q: "Does BikeRight work on Apple Watch?",
        a: "<p>Yes. BikeRight has a standalone Apple Watch app that uses haptic taps on your wrist for two things:</p><ul><li><strong>Navigation.</strong> Left and right turns each have their own tap pattern, and the rhythm becomes second nature after a ride or two.</li><li><strong>Upcoming segment safety.</strong> As each new segment begins, your wrist taps once for a protected lane, twice for shared, three times for unprotected, and gives a pair of four-taps when the street is rough enough that you may want to look up.</li></ul><p>The point is that you never have to check a screen mid-ride. The safety breakdown you saw on the map is the same one you feel on the road.</p>",
      },
      {
        q: "Does BikeRight support Live Activities and Dynamic Island?",
        a: "<p>Yes. If you ride with your phone in a handlebar mount, a Live Activity keeps your next turn, the distance to it, and the current segment's safety on the Lock Screen. The Dynamic Island shows the turn even when another app is open, so you don't need to touch the phone mid-ride.</p>",
      },
      {
        q: "Can I use BikeRight to navigate to a specific destination?",
        a: '<p>Yes. Tap "Add a destination" on the home screen, enter an address, and BikeRight finds multiple routes, each scored and ranked by safety.</p>',
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet. BikeRight is iOS only for now, but if you\'d like an Android version, <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20Request%20for%20BikeRight">let us know</a> — knowing people want it helps us decide what to build next.</p>',
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
      "A walking route app that builds loops through your own neighbourhood, with stops for the things you like along the way: parks, coffee, landmarks, playgrounds. Even the blocks you know best have streets you haven't walked.",
    page: "/go-for-a-walk.html",
    privacy: "/go-for-a-walk-privacy.html",
    appStoreId: "6761119312",
    appStoreUrl: "https://apps.apple.com/app/go-for-a-walk/id6761119312",
    icon128: "/img/go-for-a-walk-icon-128.webp",
    icon180: "/img/go-for-a-walk-icon-180.png",
    shareCard: "/img/share-go-for-a-walk.png",
    os: "iOS 26.1+",
    schemaDescription:
      "A free walking route app for iOS. Set a distance, choose what you'd like along the way (parks, coffee, landmarks, playgrounds), and get three routes through parts of your own neighbourhood you've never seen.",
    rating: { value: 0, count: 0, min: MIN_RATING_COUNT },
    ctaHeading: "Your next walk starts here.",
    footerBrand: "Go for a Walk. Same block, new streets.",
    footerCopy: "Built for the everyday explorer.",
    faqs: [
      {
        q: "Is Go for a Walk free?",
        a: "<p>Yes, completely free. There are no subscriptions, in-app purchases, or ads, and every feature is included from the start.</p>",
      },
      {
        q: "Where can I download Go for a Walk?",
        a: '<p>Go for a Walk is available free on the <a href="https://apps.apple.com/app/go-for-a-walk/id6761119312" target="_blank" rel="noopener">App Store</a>.</p>',
      },
      {
        q: "Does Go for a Walk track my location or collect data?",
        a: "<p>No. Your walk history, preferences, and routes stay on your device. We don't run servers or analytics, and we don't collect any personal information.</p>",
      },
      {
        q: "Can I customize my walking routes?",
        a: "<p>Yes. Set your preferred distance or duration, then add parks, coffee stops, dog parks, landmarks, or playgrounds, and your routes will pass by them.</p>",
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet. Go for a Walk is iOS only for now, but if you\'d like an Android version, <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20Request%20for%20Go%20for%20a%20Walk">let us know</a> — knowing people want it helps us decide what to build next.</p>',
      },
    ],
  },
];
