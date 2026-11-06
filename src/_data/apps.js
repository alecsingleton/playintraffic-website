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
        a: "<p>Yes. Random Run is free to download, with no ads and no account.</p>",
      },
      {
        q: "Does Random Run work on Apple Watch?",
        a: "<p>Yes. Random Run runs on its own on Apple Watch, so you can generate routes, follow the turn-by-turn directions, and track the whole run from your wrist without bringing your phone along.</p>",
      },
      {
        q: "Does Random Run work on iPhone Duo?",
        a: '<p>Yes, since version 3.0, on both screens. Open, the map takes most of the display, with each route\'s distance and time labelled on the map and the directions beside it, and you can tap the map to choose where to start. Folded halfway, the controls take one half and the map the other, so nothing lands on the hinge. Closed, the map fills the outer screen and routes A, B and C sit in the side bar. You can open or close it at any point, even mid-run. <a href="/blog/random-run/iphone-duo.html">More on Random Run for iPhone Duo</a>.</p>',
      },
      {
        q: "Does Random Run upload runs to Strava?",
        a: "<p>Yes, from iPhone and Apple Watch. It's off by default: connect Strava once in Settings and every finished run uploads on its own. Runs go straight from your phone to Strava, so we never see them, and you can disconnect anytime from Settings or from Strava's app permissions page.</p>",
      },
      {
        q: "Does Random Run track my location or collect my data?",
        a: '<p>We never see your location or your routes, and there are no accounts or ads. To build routes, Random Run sends your starting point and a few waypoints to Google\'s routing service, with nothing that identifies you attached. Your run history stays on your device. We also collect anonymous, aggregated usage signals (like how many people finish onboarding) through TelemetryDeck, with no identifiers, GPS, or route data attached. Strava is optional and off by default. Our <a href="/privacy.html">privacy policy</a> has the full details.</p>',
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet. Random Run is iOS only for now. <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20waitlist%20(Random%20Run)&body=Add%20me%20to%20the%20Android%20waitlist.">Join the Android waitlist</a> and we\'ll email you once, when it\'s ready.</p>',
      },
      {
        q: "How does the route generation work?",
        a: "<p>You tell Random Run how far or how long you want to run, and it generates three loop routes that start and end where you are, or at any point you pick on the map. Since version 2.0, every route is a true loop that never retraces a street, so you won't get an out-and-back in disguise. If you connect Apple Health, route timing is based on your own running pace.</p>",
      },
      {
        q: "Does Random Run support run/walk intervals?",
        a: "<p>Yes. There are built-in Galloway-style run/walk intervals: set your run and walk durations, and the app announces each switch with a voice cue and a haptic tap on both iPhone and Apple Watch. The interval cues are timed so they don't talk over the turn-by-turn voice guidance.</p>",
      },
      {
        q: "Can I run a route again?",
        a: "<p>Yes. Tap any run in your history to run that route again, and your favourites get a quick-start row on the home screen. A new route when you want variety, a known-good one when you don't.</p>",
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
        a: "<p>Yes. BikeRight is free to download, with no ads and no account.</p>",
      },
      {
        q: "How does BikeRight score route safety?",
        a: "<p>BikeRight matches every stretch of a route to OpenStreetMap and rates it with a model based on Level of Traffic Stress (LTS), the framework many cities' transportation departments use to judge how comfortable a street is to bike on. It weighs the kind of bike facility (separated path, protected lane, buffered lane, painted lane, sharrow, or nothing), the type of road, the speed limit, and the number of lanes.</p><p>Each segment lands in one of three bands, protected, shared, or unprotected, and fast arterials with no bike facility get flagged on top of that. The segments roll up into one score per route. That's why a quiet residential street can beat a painted lane on a busy road.</p>",
      },
      {
        q: "Does BikeRight track my location or collect data?",
        a: '<p>We never see your location or your rides, and there are no accounts or ads. To build and score routes, BikeRight requests map data from outside services: OpenStreetMap data for the bike infrastructure around you, Google for directions, and Apple for address search. Those requests carry the coordinates they need and nothing that identifies you. Your rides and saved places stay on your device. Our <a href="/bikeright-privacy.html">privacy policy</a> has the details.</p>',
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
        a: '<p>Not yet. BikeRight is iOS only for now. <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20waitlist%20(BikeRight)&body=Add%20me%20to%20the%20Android%20waitlist.">Join the Android waitlist</a> and we\'ll email you once, when it\'s ready.</p>',
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
        a: "<p>Yes. Go for a Walk is free to download, with no ads and no account.</p>",
      },
      {
        q: "Where can I download Go for a Walk?",
        a: '<p>Go for a Walk is available free on the <a href="https://apps.apple.com/app/go-for-a-walk/id6761119312" target="_blank" rel="noopener">App Store</a>.</p>',
      },
      {
        q: "Does Go for a Walk track my location or collect data?",
        a: '<p>We never see your location or your walks, and there are no accounts, ads, or analytics. To build routes, Go for a Walk sends map coordinates to Google Maps Platform for directions, elevation, and nearby places, with nothing that identifies you. Your walk history, preferences, and saved routes stay on your device. Our <a href="/go-for-a-walk-privacy.html">privacy policy</a> has the details.</p>',
      },
      {
        q: "Can I export a walking route to another app?",
        a: "<p>Yes. Export any route as a GPX file and open it in Strava, Garmin Connect, or any app that reads GPX. The file is made on your phone and goes wherever you send it from the share sheet.</p>",
      },
      {
        q: "Can I customize my walking routes?",
        a: "<p>Yes. Set your preferred distance or duration, then add parks, coffee stops, dog parks, landmarks, or playgrounds, and your routes will pass by them.</p>",
      },
      {
        q: "Is there an Android version?",
        a: '<p>Not yet. Go for a Walk is iOS only for now. <a href="mailto:playintraffic.ca@gmail.com?subject=Android%20waitlist%20(Go%20for%20a%20Walk)&body=Add%20me%20to%20the%20Android%20waitlist.">Join the Android waitlist</a> and we\'ll email you once, when it\'s ready.</p>',
      },
    ],
  },
];
