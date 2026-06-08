import type { PortfolioPost } from "@/types/portfolio";

/** Paths are relative to `public/` — see public/images/projects/ */
const p = (slug: string, file: string) => `/images/projects/${slug}/${file}`;

export const projects: PortfolioPost[] = [
  {
    id: "graphic-renderer",
    slug: "graphic-renderer",
    
    title: "Light Ray Simulator",
    description:
    "A ray tracer built from scratch in C++ that renders scenes using reflections, shadows, and physically based lighting.",
    thumbnail: p("graphic-renderer", "thumbnail.jpg"),
    thumbnailFallback:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    technologies: ["C++", "OpenGL", "Linear Algebra", "CMake"],
    githubUrl: "https://github.com/kzarre/RayLite",
    buildDate: "May 2025",
    features: [
      "Recursive ray tracing",
      "Reflections & shadows",
      "Multithreaded rendering",
    ],
    slides: [
      {
        id: "gr-1",
        type: "render",
        alt: "Graphic renderer output",
        visual: p("graphic-renderer", "slide-1.jpg"),
        fallback:
          "linear-gradient(135deg, #e94560 0%, #533483 50%, #0f3460 100%)",
        caption: "Rendered scene output",
      },
      {
        id: "gr-2",
        type: "diagram",
        alt: "Rendering pipeline diagram",
        visual: p("graphic-renderer", "slide-2.jpg"),
        fallback:
          "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
        caption: "Rendering pipeline",
      },
    ],
  },
  {
    id: "cli-text-editor",
    slug: "cli-text-editor",
    title: "CLI Text Editor",
    description:
    "A minimal text editor written in C for the terminal, inspired by early command-line editors.",
    thumbnail: p("cli-text-editor", "thumbnail.jpg"),
    thumbnailFallback:
      "linear-gradient(135deg, #fab005 0%, #212529 100%)",
    technologies: ["C", "ncurses", "ANSI Escape Codes"],
    githubUrl: "https://github.com/kzarre/Quanta",
    buildDate: "July 2025",
    features: [
      "Text editing",
      "File saving",
      "Keyboard shortcuts",
    ],
    slides: [
      {
        id: "te-1",
        type: "terminal",
        alt: "CLI text editor interface",
        visual: p("cli-text-editor", "slide-1.jpg"),
        fallback:
          "linear-gradient(135deg, #fab005 0%, #343a40 100%)",
        caption: "Editor in terminal",
      },
      {
        id: "te-2",
        type: "terminal",
        alt: "CLI text editor interface",
        visual: p("cli-text-editor", "slide-2.jpg"),
        fallback:
          "linear-gradient(135deg, #fab005 0%, #343a40 100%)",
        caption: "Editor in terminal",
      },
    ],
  },
  {
    id: "cli-spotify",
    slug: "cli-spotify",
    title: "CLI Spotify",
    description:
      "A terminal-based Spotify client for searching, queuing, and controlling music without leaving the command line.",
    thumbnail: p("cli-spotify", "thumbnail.jpg"),
    thumbnailFallback:
      "linear-gradient(135deg, #1db954 0%, #191414 100%)",
    technologies: ["Python", "Go", "Spotify API", "OAuth2"],
    githubUrl: "https://github.com/kzarre/Spotuify",
    buildDate: "October 2025",
    features: [
      "Spotify search",
      "Playback control",
      "OAuth login",
    ],
    slides: [
      {
        id: "cs-1",
        type: "terminal",
        alt: "CLI Spotify player",
        visual: p("cli-spotify", "slide-1.jpg"),
        fallback:
          "linear-gradient(135deg, #1db954 0%, #121212 100%)",
        caption: "Terminal player UI",
      },
    ],
  },
  {
    id: "compiler",
    slug: "compiler",
    title: "Compiler",
    description:
    "A compiler for a custom programming language featuring lexing, parsing, and code generation.",
    thumbnail: p("compiler", "thumbnail.jpg"),
    thumbnailFallback:
      "linear-gradient(135deg, #7950f2 0%, #364fc7 100%)",
    technologies: ["Python", "PLY", "AST", "Bytecode VM"],
    githubUrl: "https://github.com/kzarre/JAPL",
    buildDate: "January 2025",
    features: [
      "Lexer & parser",
      "AST generation",
      "Code generation",
    ],
    slides: [
      {
        id: "cp-1",
        type: "diagram",
        alt: "Compiler pipeline",
        visual: p("compiler", "slide-1.jpg"),
        fallback:
          "linear-gradient(135deg, #364fc7 0%, #7950f2 100%)",
        caption: "Compilation stages",
      },
      {
        id: "cp-2",
        type: "terminal",
        alt: "Compiler output",
        visual: p("compiler", "slide-2.jpg"),
        fallback:
          "linear-gradient(135deg, #7950f2 0%, #212529 100%)",
        caption: "Source to bytecode",
      },
      {
        id: "cp-3",
        type: "terminal",
        alt: "Compiler output",
        visual: p("compiler", "slide-3.jpg"),
        fallback:
          "linear-gradient(135deg, #7950f2 0%, #212529 100%)",
        caption: "Source to bytecode",
      },
    ],
  },
  {
    id: "distributed-rate-limiter",
    slug: "distributed-rate-limiter",
    title: "Distributed Rate Limiter",
    description:
      "A Redis-backed distributed rate limiter designed to enforce API request limits across multiple servers.",
    thumbnail: p("distributed-rate-limiter", "thumbnail.jpg"),
    thumbnailFallback:
      "linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)",
    technologies: ["Python", "Redis", "FastAPI", "Docker"],
    githubUrl: "https://github.com/kzarre/rate_limiter",
    buildDate: "May 2026",
    features: [
      "Redis-backed",
      "Sliding window algorithm",
      "Dockerized deployment",
    ],
    slides: [
      {
        id: "rl-1",
        type: "diagram",
        alt: "Rate limiter architecture",
        visual: p("distributed-rate-limiter", "slide-1.jpg"),
        fallback:
          "linear-gradient(135deg, #212529 0%, #e03131 100%)",
        caption: "System architecture",
      },
      {
        id: "rl-2",
        type: "diagram",
        alt: "Rate limiter architecture",
        visual: p("distributed-rate-limiter", "slide-2.jpg"),
        fallback:
          "linear-gradient(135deg, #212529 0%, #e03131 100%)",
        caption: "System architecture",
      },
    ],
  },
  {
    id: "hernia-repair-simulator",
    slug: "hernia-repair-simulator",
    title: "Hernia Repair Simulator",
    description:
      "A VR surgical training simulator built for teaching hernia repair procedures through interactive practice.",
    thumbnail: p("hernia-repair-simulator", "thumbnail.jpg"),
    thumbnailFallback:
      "linear-gradient(135deg, #339af0 0%, #1864ab 100%)",
    technologies: ["C#", "Unity", "3D Modeling", "Medical Simulation"],
    githubUrl: "https://github.com/Shambsri21/Hernia_repair_unity",
    buildDate: "Feb 2025",
    features: [
      "Interactive 3D surgical scene",
      "Tool selection & feedback",
    ],
    slides: [
      {
        id: "hr-1",
        type: "screenshot",
        alt: "Simulator main view",
        visual: p("hernia-repair-simulator", "slide-1.jpg"),
        fallback:
          "linear-gradient(135deg, #1864ab 0%, #339af0 100%)",
        caption: "Surgical simulation view",
      },
      {
        id: "hr-2",
        type: "screenshot",
        alt: "Procedure step UI",
        visual: p("hernia-repair-simulator", "slide-2.jpg"),
        fallback:
          "linear-gradient(135deg, #339af0 0%, #212529 100%)",
        caption: "Procedure guidance UI",
      },
    ],
  },
];
