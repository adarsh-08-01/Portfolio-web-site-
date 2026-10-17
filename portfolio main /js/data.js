// Adarsh Kashyap Portfolio Data

window.PortfolioData = {
  profile: {
    name: "Adarsh Kashyap",
    brand: "codewithadarsh",
    headline: "iOS Developer & Video Editor",
    bio: "Hi, I'm Adarsh Kashyap — an iOS Developer, Video Editor, Graphic Designer, and Creative Tech Enthusiast. I specialize in native SwiftUI apps and high-retention video editing using DaVinci Resolve, Final Cut Pro, and AI tools.",
    location: "India 🇮🇳",
    availability: "Open to new work & good problems",
    email: "adarshk.work.0801@gmail.com",
    contactEmail: "contact@codewithadarsh.com",
    whatsapp: "https://wa.me/916390790801",
    phone: "+91 6390790801",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/adarsh-kashyap-94238028b", color: "var(--ca-yellow)", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/adarsh-08-01", color: "var(--ca-purple)", icon: "github" },
      { name: "YouTube", url: "https://www.youtube.com/@codewithadarsh08/shorts", color: "var(--ca-magenta)", icon: "youtube" },
      { name: "Instagram", url: "https://www.instagram.com/codewithadarsh08/reels/", color: "var(--ca-green)", icon: "instagram" },
      { name: "Video Portfolio", url: "https://portfolio.malloy.sg/Adarshkashyap", color: "var(--ca-blue)", icon: "video" },
      { name: "Email", url: "mailto:adarshk.work.0801@gmail.com", color: "var(--ca-orange)", icon: "email" }
    ]
  },
  
  skills: [
    { name: "iOS & SwiftUI", bg: "var(--ca-yellow)", color: "var(--ca-ink)", emojis: ["📱", "⚡"] },
    { name: "Video & Motion Editing", bg: "var(--ca-magenta)", color: "#FFFFFF", emojis: ["🎬", "✂️"] },
    { name: "DaVinci Resolve & FCP", bg: "var(--ca-purple)", color: "#FFFFFF", emojis: ["🎥", "🎞️"] },
    { name: "AI Video Tools", bg: "var(--ca-orange)", color: "#FFFFFF", emojis: ["🤖", "✨"] },
    { name: "Graphic & UI Design", bg: "var(--ca-green)", color: "#FFFFFF", emojis: ["🎨", "✨"] }
  ],

  featuredProjects: [
    {
      id: "p1-justsip",
      tabLabel: "PROJECT 01",
      title: "JustSip",
      subtitle: "Water Hydration & Goal Tracker",
      category: "iOS SwiftUI App",
      bgColor: "#3B5BFF",
      textColor: "text-white",
      date: "MAR 19, 2026",
      description: "Making daily water intake logging effortless with 3D avatar animations, weekly history analytics, and smart reminders.",
      tags: ["IOS APP", "SWIFTUI", "3D AVATAR"],
      link: "https://github.com/adarsh-08-01/JustSip",
      previewType: "grid",
      previewImages: [
        "assets/images/justsip/HomeView2.png",
        "assets/images/justsip/HistroyView.png",
        "assets/images/justsip/NotificationView.png"
      ]
    },
    {
      id: "p2-travelsathi",
      tabLabel: "PROJECT 02",
      title: "Travel Sathi",
      subtitle: "Personal Travel Budget Guide & Planner",
      category: "iOS SwiftUI App",
      bgColor: "#111111",
      textColor: "text-white",
      date: "FEATURED IOS APP",
      description: "Your personal travel budget guide & destination planner, allowing travelers to discover top spots based on custom budget tiers and persona profiles.",
      tags: ["IOS APP", "SWIFTUI", "TRAVEL PLANNER"],
      link: "https://github.com/adarsh-08-01/Travel-Sathi-",
      previewType: "grid",
      previewImages: [
        "assets/images/travelsathi/TravelSathi_Destinations.png",
        "assets/images/travelsathi/TravelSathi_Role.png",
        "assets/images/travelsathi/TravelSathi_Budget.png"
      ]
    },
    {
      id: "p3-sangeetstream",
      tabLabel: "PROJECT 03",
      title: "SangeetStream",
      subtitle: "Web Music Streaming & Audio Player",
      category: "Web Application",
      bgColor: "#FF3D7F",
      textColor: "text-white",
      date: "WEB AUDIO APP",
      description: "Interactive web music player with real-time stream search, dynamic play queues, customized audio controls, and dark aesthetics.",
      tags: ["AUDIO WEB APP", "JAVASCRIPT", "UI UX"],
      link: "https://mysangeetstream.netlify.app/#Yo%20Yo%20Honey%20Singh",
      previewType: "audioWidget"
    },
    {
      id: "p4-rkconstruction",
      tabLabel: "PROJECT 04",
      title: "RK Construction",
      subtitle: "Commercial Construction Corporate Portal",
      category: "Web Development",
      bgColor: "#FFC93C",
      textColor: "text-black",
      date: "ACTIVE CLIENT SITE",
      description: "Full-stack corporate platform for premier commercial engineering & construction services featuring project portfolios and inquiry forms.",
      tags: ["COMMERCIAL WEB", "CLIENT SITE", "JAVASCRIPT"],
      link: "https://rkconstruction11.in/",
      previewType: "banner",
      image: "assets/images/rk_construction.png"
    },
    {
      id: "p5-kidslearn",
      tabLabel: "PROJECT 05",
      title: "KidsLearn",
      subtitle: "Interactive Early Learning Mini-Games for iOS",
      category: "iOS SwiftUI Casual Game",
      bgColor: "#059669",
      textColor: "text-white",
      date: "NEW IOS RELEASE",
      description: "A playful, interactive educational casual game for children featuring multiple quiz mini-games (Counting, Letters, Addition, Shapes, Animals, Colors) with streak rewards, stars, and real-time feedback.",
      tags: ["IOS APP", "SWIFTUI", "CASUAL GAME", "KIDS EDUCATION"],
      link: "https://github.com/adarsh-08-01/KidsLearn.",
      liveUrl: "https://appetize.io/app/b_o52qjiufaocxm64w22bstzxhv4",
      previewType: "grid",
      previewImages: [
        "assets/images/kidslearn/HomeView.png",
        "assets/images/kidslearn/AdditionLesson.png",
        "assets/images/kidslearn/ShapesLesson.png"
      ]
    }
  ],

  appsShowcase: [
    {
      id: "kids-learn",
      name: "KidsLearn",
      category: "ios",
      badge: "iOS SwiftUI App",
      badgeBg: "var(--ca-green)",
      shortDesc: "Interactive educational game for kids with counting, letters, shapes & quiz mini-games.",
      fullDesc: "KidsLearn is an interactive educational casual game designed for young learners, built natively for iOS using Swift and SwiftUI (MVVM architecture). It introduces fundamental concepts across six vibrant categories: Numbers/Counting, Alphabets, 2D/3D Shapes, Visual Addition, Animals, and Colors. Features randomized quiz questions, instant audio-visual feedback, progress tracking (Day Streaks, Stars, Coins, Badges), and customizable student profiles. Fully playable live in-browser via Appetize.io virtual device.",
      techStack: ["Swift", "SwiftUI", "MVVM", "Appetize.io", "SF Symbols", "iOS 16+"],
      github: "https://github.com/adarsh-08-01/KidsLearn.",
      liveUrl: "https://appetize.io/app/b_o52qjiufaocxm64w22bstzxhv4",
      previewImages: [
        "assets/images/kidslearn/HomeView.png",
        "assets/images/kidslearn/AdditionLesson.png",
        "assets/images/kidslearn/ShapesLesson.png",
        "assets/images/kidslearn/AlphabetsLesson.png",
        "assets/images/kidslearn/ProfileView.png"
      ]
    },
    {
      id: "just-sip",
      name: "JustSip",
      category: "ios",
      badge: "iOS SwiftUI App",
      badgeBg: "var(--ca-blue)",
      shortDesc: "Smart water hydration & daily goal tracker with 3D avatar.",
      fullDesc: "JustSip is a native iOS application built with Swift & SwiftUI. It empowers users to monitor their hydration through an animated 3D avatar that fills with water as intake is logged. Includes weekly analytics overview (daily averages, completion stats), customizable reminder intervals & test notifications, quick 500ml intake logging, and custom profile management.",
      techStack: ["Swift", "SwiftUI", "UserNotifications", "Charts", "CoreData", "SF Symbols"],
      github: "https://github.com/adarsh-08-01/JustSip",
      previewImages: [
        "assets/images/justsip/HomeView2.png",
        "assets/images/justsip/HomeView.png",
        "assets/images/justsip/HistroyView.png",
        "assets/images/justsip/ProfileView.png",
        "assets/images/justsip/NotificationView.png"
      ]
    },
    {
      id: "travel-sathi",
      name: "Travel Sathi",
      category: "ios",
      badge: "iOS SwiftUI App",
      badgeBg: "var(--ca-purple)",
      shortDesc: "Personal travel budget guide & destination planner.",
      fullDesc: "Travel Sathi is an iOS application designed to help students, professionals, and families plan trips according to their exact budget range (Low, Medium, High). Features curated destination cards (Goa, Manali, Kerala, Ladakh, Varanasi), persona selection, and itinerary planning.",
      techStack: ["Swift", "SwiftUI", "Combine", "JSON API", "SF Symbols"],
      github: "https://github.com/adarsh-08-01/Travel-Sathi-",
      previewImages: [
        "assets/images/travelsathi/TravelSathi_Destinations.png",
        "assets/images/travelsathi/TravelSathi_Role.png",
        "assets/images/travelsathi/TravelSathi_Budget.png"
      ]
    },
    {
      id: "sangeetstream-web",
      name: "SangeetStream",
      category: "web",
      badge: "Web Music Player",
      badgeBg: "var(--ca-magenta)",
      shortDesc: "Sleek web music player with real-time stream search.",
      fullDesc: "Interactive music player built with JavaScript & HTML5 Audio API. Features real-time artist stream search, customizable play queue, volume normalization, and sleek dark UI.",
      techStack: ["JavaScript", "HTML5 Audio API", "CSS3", "Netlify"],
      liveUrl: "https://mysangeetstream.netlify.app/#Yo%20Yo%20Honey%20Singh",
      previewImages: [
        "assets/images/sangeetstream_mobile.png",
        "assets/images/sangeetstream.png"
      ]
    },
    {
      id: "rk-construction-app",
      name: "RK Construction",
      category: "web",
      badge: "Live Client Site",
      badgeBg: "var(--ca-yellow)",
      shortDesc: "Commercial portal for construction & engineering services.",
      fullDesc: "Full-stack responsive web design and client portfolio portal built for RK Construction, featuring project galleries, service detail catalog, and direct inquiry routing.",
      techStack: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
      liveUrl: "https://rkconstruction11.in/",
      previewImages: [
        "assets/images/rk_construction_mobile.png",
        "assets/images/rk_construction.png"
      ]
    },
    {
      id: "video-reels-showcase",
      name: "Short-Form & Reels Production",
      category: "video",
      badge: "Video Editing",
      badgeBg: "var(--ca-green)",
      shortDesc: "High-retention vertical reels, talking-head & brand videos.",
      fullDesc: "Professional video editing specialized in short-form content (YouTube Shorts & Instagram Reels), talking-head edits, and brand promos. Primary tools: DaVinci Resolve, Final Cut Pro. AI-enhanced workflow using Caption AI, Midjourney, Veo 3, and HeyGen.",
      techStack: ["DaVinci Resolve", "Final Cut Pro", "Caption AI", "Midjourney", "Veo 3", "HeyGen"],
      liveUrl: "https://portfolio.malloy.sg/Adarshkashyap",
      previewImages: ["assets/images/adarsh_pixel_art.jpg"]
    }
  ],

  demoTracks: [
    { title: "Desi Kalakar", artist: "Yo Yo Honey Singh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Blue Eyes", artist: "Yo Yo Honey Singh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "Dope Shope", artist: "Yo Yo Honey Singh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
  ]
};
