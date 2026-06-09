import type { ProfileData } from "@/types/portfolio";

export const profile: ProfileData = {
  username: "kzar",
  name: "Kanishk Kulshrestha",

  location: "Pune, India",

  status: "SWE Intern @Fiserv",

  bio:
    "I enjoy building systems from scratch, whether that's a ray tracer, or a terminal application.",

  skillsSummary:
    "C++ · Python · System Design · Distributed Systems · Competitive Programming",

  avatar: "/images/profile/avatar.jpg",

  stats: {
    codeforcesRating: "1463",
    repositories: "20+",
    yearsCoding: "4+",
  },

  highlights: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/kzarre",
      icon: "github",
    },
    {
      id: "resume",
      label: "Resume",
      url: "/resume/Kanishk_Kulshrestha_resume.pdf",
      icon: "resume",
    },
    {
      id: "codeforces",
      label: "Codeforces",
      url: "https://codeforces.com/profile/kzar",
      icon: "codeforces",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/k-zar/",
      icon: "linkedin",
    },
  ],

  social: {
    github: "https://github.com/kzarre",
    linkedin: "https://www.linkedin.com/in/k-zar/",
    codeforces: "https://codeforces.com/profile/kzar",
    email: "kkulshrestha47@gmail.com",
  },
};