import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Languages,
  Mail,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const technologies = [
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "HTML / CSS",
  "SQL",
  "Git",
  "GitHub",
  "NumPy / Pandas",
];

const focusAreas = [
  {
    title: "Reinforcement Learning",
    label: "Primary Focus",
    description:
      "Learning how intelligent agents make decisions, interact with environments and improve through rewards.",
  },
  {
    title: "Intelligent Systems",
    label: "Academic Direction",
    description:
      "My Master's path and the wider field where I want to grow, research and build meaningful systems.",
  },
  {
    title: "Computer Vision",
    label: "Additional Interest",
    description:
      "An area of AI I am also interested in exploring through future projects and deeper study.",
  },
];

const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Academic / Professional" },
  { name: "Russian", level: "Currently Developing" },
];

const education = [
  {
    period: "2017 — 2020",
    title: "Empirical Science Diploma",
    institution: "Shaahed Seyyed Ahmad Khomeini",
    description:
      "Completed secondary education with an empirical science focus.",
  },
  {
    period: "2020 — 2024",
    title: "Bachelor's Degree in Computer Engineering — Software",
    institution: "Zand Institute of Higher Education",
    description:
      "Focused on software development, programming foundations and computer engineering subjects.",
  },
  {
    period: "Nov 2025 — Present",
    title: "Russian Language & Pre-University Preparatory Course",
    institution: "Peter the Great St. Petersburg Polytechnic University",
    description:
      "Academic Russian language preparation for international students, including grammar, reading, writing, listening and speaking.",
  },
  {
    period: "Enrolled · Begins after Summer 2026",
    title: "Master's Degree in Intelligent Systems",
    institution: "Peter the Great St. Petersburg Polytechnic University",
    description:
      "09.04.01_17 Intelligent Systems — International Educational Program, full-time and English-taught, Institute of Cybersecurity and Computer Science.",
    featured: true,
  },
];

const experiences = [
  {
    period: "2024 — Present",
    title: "Independent Learning in Artificial Intelligence",
    organization: "Personal Development",
    description:
      "Developing practical knowledge through AI-related learning, university work and personal projects, with a growing focus on Reinforcement Learning.",
  },
  {
    period: "2022 — 2024",
    title: "Student Employee — IT Department",
    organization: "Zand Institute of Higher Education",
    description:
      "Supported technical and administrative activities in an academic working environment.",
  },
  {
    period: "Aug 2023 — Sep 2023",
    title: "Intern — Network Support Technician",
    organization: "Zand Institute of Higher Education",
    description:
      "Gained practical experience with technical support and network-related tasks.",
  },
  {
    period: "2022 — 2024",
    title: "Student Employee — Education Department",
    organization: "Zand Institute of Higher Education",
    description:
      "Worked in an academic administration environment and developed communication and organizational skills.",
  },
];

const achievements = [
  {
    year: "2023",
    title: "Third Place — AI & Digitalization Startup Event",
    institution: "Zand Institute of Higher Education",
  },
  {
    year: "2023",
    title: "Introduction to Machine Learning Certificate",
    institution: "Zand Institute of Higher Education",
  },
  {
    year: "2023",
    title: "Soft Skills Development Certification",
    institution: "Zand Institute of Higher Education",
  },
];

const projects = [
  {
    title: "Habit Tracker",
    type: "Featured Project",
    description:
      "A modern habit tracking application with daily check-ins, progress monitoring, reminders and a PWA experience.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "PWA",
      "Push Notifications",
    ],
    live: "https://mohammad-azimi.github.io/Habit-Tracker/",
    code: "https://github.com/mohammad-azimi/Habit-Tracker",
    featured: true,
  },
];

export default function App() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      gsap.set([".chapter-two", ".chapter-three", ".chapter-four"], {
        autoAlpha: 0,
        y: 48,
      });

      gsap.set(".scroll-fill", {
        scaleY: 0.12,
        transformOrigin: "top center",
      });

      gsap.set(".path-active", {
        strokeDasharray: 360,
        strokeDashoffset: 360,
        opacity: 0.14,
      });

      gsap.set([".route-signal", ".optimal-label", ".path-flow"], {
        autoAlpha: 0,
      });

      gsap.to(".agent-glow", {
        scale: 1.18,
        opacity: 0.65,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".agent-pulse", {
        scale: 1.55,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
      });

      gsap.to(".ring-one", {
        rotate: 360,
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ring-two", {
        rotate: -360,
        duration: 46,
        repeat: -1,
        ease: "none",
      });

      gsap.utils.toArray(".neural-dot").forEach((dot, index) => {
        gsap.to(dot, {
          x: index % 2 === 0 ? 9 : -9,
          y: index % 3 === 0 ? -13 : 11,
          opacity: 0.75,
          duration: 2.1 + (index % 4) * 0.55,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-scroll",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      heroTimeline
        .to(".chapter-one", { autoAlpha: 0, y: -46, duration: 0.45 }, 0.18)
        .to(".rl-scene", { scale: 1.1, rotate: 4, duration: 0.8 }, 0.05)
        .to(".path-dim", { opacity: 0.16, duration: 0.5 }, 0.2)
        .to(
          ".path-active",
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.78,
          },
          0.29,
        )
        .to(".route-signal", { autoAlpha: 1, duration: 0.2 }, 0.55)
        .to(".path-flow", { autoAlpha: 1, duration: 0.25 }, 0.48)
        .to(
          ".optimal-label",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
          },
          0.78,
        )
        .to(".reward-node", { scale: 1.35, duration: 0.38 }, 0.42)
        .to(".chapter-two", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.48)
        .to(".scroll-fill", { scaleY: 0.4, duration: 0.7 }, 0.1)
        .to(".chapter-two", { autoAlpha: 0, y: -46, duration: 0.42 }, 1.13)
        .to(".chapter-three", { autoAlpha: 1, y: 0, duration: 0.5 }, 1.38)
        .to(".agent-node", { scale: 1.18, duration: 0.45 }, 1.37)
        .to(".rl-scene", { scale: 0.96, xPercent: 8, duration: 0.75 }, 1.3)
        .to(".scroll-fill", { scaleY: 0.72, duration: 0.65 }, 1.28)
        .to(".chapter-three", { autoAlpha: 0, y: -46, duration: 0.43 }, 2.02)
        .to(".chapter-four", { autoAlpha: 1, y: 0, duration: 0.5 }, 2.24)
        .to(".rl-scene", { scale: 1.05, rotate: -3, duration: 0.72 }, 2.1)
        .to(".scroll-fill", { scaleY: 1, duration: 0.55 }, 2.18);

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section, {
          y: 55,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main
      ref={pageRef}
      className="page-bg min-h-screen overflow-x-clip text-white"
    >
      <Header />

      <section className="hero-scroll relative h-[345vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="grid-overlay pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute right-[7%] top-[20%] h-[480px] w-[480px] rounded-full bg-violet-700/15 blur-[130px]" />

          <div className="relative mx-auto h-full w-full max-w-6xl px-6 sm:px-8">
            <HeroChapter
              className="chapter-one"
              badge="MASTER'S STUDENT IN INTELLIGENT SYSTEMS"
              title={
                <>
                  Mohammad
                  <br />
                  <span className="hero-gradient-text">Azimi</span>
                </>
              }
              description="Computer Engineering graduate and Master's student in Intelligent Systems, focused on Reinforcement Learning and building meaningful digital products."
              actions
            />

            <HeroChapter
              className="chapter-two invisible opacity-0"
              badge="01 / LEARNING THROUGH INTERACTION"
              title={
                <>
                  Agent.
                  <br />
                  Action. Reward.
                  <br />
                  <span className="purple-gradient-text">Learning.</span>
                </>
              }
              description="I am especially interested in Reinforcement Learning: how intelligent agents make decisions and improve through experience."
            />

            <HeroChapter
              className="chapter-three invisible opacity-0"
              badge="02 / ACADEMIC DIRECTION"
              title={
                <>
                  From software
                  <br />
                  engineering to
                  <br />
                  <span className="purple-gradient-text">
                    intelligent systems.
                  </span>
                </>
              }
              description="Enrolled in the Master's program in Intelligent Systems at Peter the Great St. Petersburg Polytechnic University."
            />

            <HeroChapter
              className="chapter-four invisible opacity-0"
              badge="03 / THE PORTFOLIO"
              title={
                <>
                  Skills. Journey.
                  <br />
                  Projects.
                  <br />
                  <span className="purple-gradient-text">Growth.</span>
                </>
              }
              description="Explore my education, experience, achievements and projects as I continue building my path in AI."
            />

            <RLScene />

            <div className="absolute bottom-9 left-6 flex items-center gap-4 sm:left-8">
              <div className="h-14 w-px overflow-hidden bg-white/10">
                <div className="scroll-fill h-full w-full bg-gradient-to-b from-violet-400 to-blue-500" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-zinc-500">
                <ArrowDown size={14} />
                SCROLL TO EXPLORE
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5">
      <nav className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-4">
        <a href="#" className="text-xl font-bold tracking-[-0.08em]">
          <span className="text-white">M</span>
          <span className="text-violet-400">A</span>
        </a>

        <div className="hidden items-center gap-5 text-sm text-zinc-400 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/mohammad-azimi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white"
        >
          <GitBranch size={16} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}

function HeroChapter({
  className,
  badge,
  title,
  description,
  actions = false,
}) {
  return (
    <div
      className={`${className} absolute left-6 top-[27%] z-10 max-w-[610px] sm:left-8 lg:top-[31%]`}
    >
      <Badge text={badge} />

      <h1 className="mt-7 text-5xl leading-[0.96] font-bold sm:text-6xl lg:text-7xl">
        {title}
      </h1>

      <p className="mt-7 max-w-[520px] text-base leading-7 text-zinc-400 sm:text-lg">
        {description}
      </p>

      {actions && (
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="group flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold transition hover:bg-violet-500"
          >
            Explore My Journey
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40"
          >
            View Projects
          </a>
        </div>
      )}
    </div>
  );
}

function RLScene() {
  const neuralDots = [
    { x: 18, y: 20, size: 5, opacity: 0.46 },
    { x: 31, y: 12, size: 3, opacity: 0.34 },
    { x: 46, y: 19, size: 4, opacity: 0.55 },
    { x: 71, y: 15, size: 4, opacity: 0.4 },
    { x: 84, y: 27, size: 3, opacity: 0.5 },
    { x: 11, y: 46, size: 3, opacity: 0.3 },
    { x: 88, y: 50, size: 5, opacity: 0.42 },
    { x: 15, y: 73, size: 4, opacity: 0.48 },
    { x: 35, y: 84, size: 3, opacity: 0.32 },
    { x: 63, y: 87, size: 4, opacity: 0.46 },
    { x: 84, y: 76, size: 3, opacity: 0.4 },
    { x: 52, y: 8, size: 3, opacity: 0.38 },
  ];

  return (
    <div className="rl-scene absolute top-[21%] right-[-190px] h-[430px] w-[430px] opacity-40 sm:right-[-80px] sm:opacity-70 md:right-[-20px] lg:top-[24%] lg:right-[6px] lg:h-[535px] lg:w-[535px] lg:opacity-100">
      <div className="agent-glow absolute inset-[110px] rounded-full bg-violet-600/30 blur-[86px]" />

      <div className="ring-one absolute inset-[14px] rounded-full border border-violet-400/[0.09]">
        <span className="absolute left-[23%] top-[-4px] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(196,181,253,0.75)]" />
      </div>

      <div className="ring-two absolute inset-[47px] rounded-full border border-blue-400/[0.09]">
        <span className="absolute bottom-[18%] right-[3px] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
      </div>

      <div className="absolute inset-[84px] rounded-full border border-violet-400/[0.1]" />

      <div className="pointer-events-none absolute inset-0">
        {neuralDots.map((dot, index) => (
          <span
            key={index}
            className="neural-dot absolute rounded-full bg-violet-300"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 535 535">
        <defs>
          <linearGradient id="activeRoute" x1="267" y1="268" x2="432" y2="110">
            <stop stopColor="#8b5cf6" />
            <stop offset="0.48" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="path-dim"
          d="M267 268 C208 215 153 172 103 112"
          fill="none"
          stroke="rgba(167,139,250,0.45)"
          strokeWidth="2"
          strokeDasharray="4 11"
        />

        <path
          className="path-dim"
          d="M267 268 C200 290 144 339 93 408"
          fill="none"
          stroke="rgba(96,165,250,0.36)"
          strokeWidth="2"
          strokeDasharray="4 11"
        />

        <path
          className="path-dim"
          d="M267 268 C336 294 389 344 438 406"
          fill="none"
          stroke="rgba(167,139,250,0.38)"
          strokeWidth="2"
          strokeDasharray="4 11"
        />

        <path
          className="path-active"
          d="M267 268 C316 218 376 170 432 110"
          fill="none"
          stroke="url(#activeRoute)"
          strokeWidth="3"
          filter="url(#softGlow)"
        />

        <path
          className="path-flow"
          d="M267 268 C316 218 376 170 432 110"
          fill="none"
          stroke="rgba(221,214,254,0.95)"
          strokeWidth="2"
        />

        <g className="route-signal">
          <circle r="5" fill="#ddd6fe" filter="url(#softGlow)">
            <animateMotion
              dur="2.1s"
              repeatCount="indefinite"
              path="M267 268 C316 218 376 170 432 110"
            />
          </circle>
        </g>
      </svg>

      <SceneNode className="left-[63px] top-[78px]" text="STATE" />
      <SceneNode className="left-[47px] bottom-[86px]" text="ACTION" />
      <SceneNode className="right-[44px] bottom-[84px]" text="ENV" />

      <div className="reward-node absolute right-[43px] top-[66px] flex h-[84px] w-[84px] items-center justify-center rounded-[22px] border border-blue-400/35 bg-blue-400/[0.1] text-[11px] font-semibold tracking-[0.19em] text-blue-100 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
        REWARD
      </div>

      <div className="optimal-label invisible absolute right-[32px] top-[157px] rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-[9px] font-semibold tracking-[0.18em] text-violet-200 opacity-0">
        OPTIMAL POLICY
      </div>

      <div className="agent-node glass-panel absolute left-1/2 top-1/2 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[29px] border-violet-400/25 shadow-[0_0_60px_rgba(124,58,237,0.22)]">
        <div className="agent-pulse pointer-events-none absolute inset-0 rounded-[29px] border border-violet-400/35" />
        <Sparkles size={22} className="text-violet-300" />
        <span className="mt-2 text-[11px] font-semibold tracking-[0.2em] text-violet-100">
          AGENT
        </span>
        <span className="mt-1 text-[9px] tracking-[0.13em] text-zinc-500">
          π(a|s)
        </span>
      </div>
    </div>
  );
}

function SceneNode({ className, text }) {
  return (
    <div
      className={`${className} path-dim absolute flex h-[76px] w-[76px] items-center justify-center rounded-[20px] border border-white/[0.09] bg-white/[0.028] text-[10px] font-semibold tracking-[0.16em] text-zinc-400 backdrop-blur-md`}
    >
      {text}
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/10 px-4 py-2 text-[10px] font-semibold tracking-[0.12em] text-violet-300 sm:text-[11px]">
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
      {text}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <Badge text={eyebrow} />
      <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-border px-6 py-24 sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="ABOUT ME"
          title={
            <>
              Building the future with{" "}
              <span className="purple-gradient-text">intelligent systems.</span>
            </>
          }
        />

        <div className="space-y-6 text-base leading-8 text-zinc-400">
          <p>
            I am a Computer Engineering graduate in Software and an enrolled
            Master's student in Intelligent Systems at Peter the Great St.
            Petersburg Polytechnic University.
          </p>
          <p>
            My primary AI interest is Reinforcement Learning. I am interested in
            understanding how agents learn from decisions and interaction, while
            also exploring Computer Vision and practical product development.
          </p>

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {[
              "Problem Solver",
              "Quick Learner",
              "Detail Oriented",
              "Team Player",
            ].map((trait) => (
              <div
                key={trait}
                className="glass-panel rounded-xl px-4 py-3 text-sm text-zinc-300"
              >
                <span className="mr-3 text-violet-400">✦</span>
                {trait}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-border px-6 py-24 sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="SKILLS & FOCUS"
          title={
            <>
              Tools I use and fields I am{" "}
              <span className="purple-gradient-text">exploring.</span>
            </>
          }
          description="A combination of software development foundations, AI interests and communication skills shaped by my academic journey."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Code2 size={20} className="text-violet-300" />
              <h3 className="text-xl font-semibold">Technologies & Tools</h3>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 text-sm text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/[0.06] pt-7">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-violet-300" />
              <h3 className="text-lg font-semibold">Soft Skills</h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Adaptability",
                "Time Management",
                "Attention to Detail",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <Sparkles size={19} className="text-violet-300" />
                <h3 className="text-xl font-semibold">AI Direction</h3>
              </div>

              <div className="mt-6 space-y-5">
                {focusAreas.map((area) => (
                  <div key={area.title}>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-violet-300">
                      {area.label}
                    </p>
                    <p className="mt-1 font-medium text-zinc-100">
                      {area.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <Languages size={19} className="text-violet-300" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>

              <div className="mt-6 space-y-3">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"
                  >
                    <span className="text-sm text-zinc-100">
                      {language.name}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section
      id="education"
      className="section-border px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="reveal-section mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="EDUCATION"
          title={
            <>
              Academic journey toward{" "}
              <span className="purple-gradient-text">Intelligent Systems.</span>
            </>
          }
        />

        <div className="mt-16 space-y-5">
          {education.map((item) => (
            <article
              key={item.title}
              className={`education-card grid gap-5 rounded-3xl p-6 sm:p-8 lg:grid-cols-[205px_1fr] ${
                item.featured
                  ? "border-violet-400/25 bg-violet-500/[0.07]"
                  : "glass-panel"
              }`}
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <GraduationCap size={22} />
                </div>
                <p className="text-sm font-medium text-violet-300">
                  {item.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">{item.institution}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {item.description}
                </p>

                {item.featured && (
                  <div className="mt-6 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200">
                    Current Academic Direction
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-border px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="reveal-section mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title={
            <>
              Learning through{" "}
              <span className="purple-gradient-text">work and practice.</span>
            </>
          }
        />

        <div className="relative mt-16 space-y-6 before:absolute before:bottom-0 before:left-[23px] before:top-0 before:w-px before:bg-white/10 sm:before:left-[27px]">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="relative grid gap-5 pl-16 sm:pl-20 lg:grid-cols-[190px_1fr]"
            >
              <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-[#0c0c14] text-violet-300 sm:h-14 sm:w-14">
                <Briefcase size={20} />
              </div>

              <p className="pt-4 text-sm font-medium text-violet-300">
                {experience.period}
              </p>

              <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  {experience.organization}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-border px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="reveal-section mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title={
            <>
              Milestones along the{" "}
              <span className="purple-gradient-text">journey.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="glass-panel rounded-3xl p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <Award size={22} />
              </div>
              <p className="mt-7 text-xs font-semibold tracking-[0.16em] text-violet-300">
                {achievement.year}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-7">
                {achievement.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                {achievement.institution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-border px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="reveal-section mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="PROJECTS"
          title={
            <>
              Products I have{" "}
              <span className="purple-gradient-text">built.</span>
            </>
          }
          description="Practical projects that represent my current development skills while I continue growing into AI and Reinforcement Learning."
        />

        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`grid overflow-hidden rounded-3xl p-6 sm:p-8 ${
                project.featured
                  ? "featured-project lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12"
                  : "glass-panel"
              }`}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.17em] text-violet-300">
                  {project.type}
                </p>
                <h3 className="mt-4 text-3xl font-semibold">{project.title}</h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </a>
                  )}

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:border-violet-400/40"
                  >
                    <GitBranch size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              {project.featured && <DashboardPreview />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="mt-12 rounded-[26px] border border-white/[0.08] bg-[#080811] p-3 sm:p-5 lg:mt-0">
      <div className="rounded-[19px] border border-white/[0.07] bg-[#0b0b14] p-4 sm:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="text-xs text-zinc-600">Habit Tracker Dashboard</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.32fr_0.68fr]">
          <div className="space-y-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="h-8 rounded-lg bg-violet-500/15" />
            <div className="h-7 rounded-lg bg-white/[0.04]" />
            <div className="h-7 rounded-lg bg-white/[0.04]" />
            <div className="h-7 rounded-lg bg-white/[0.04]" />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-16 rounded-xl border border-white/[0.06] bg-white/[0.025]"
                />
              ))}
            </div>

            <div className="flex h-40 items-end gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              {[38, 66, 48, 86, 58, 94, 72].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/50 to-violet-400"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="section-border px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="reveal-section mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading
            eyebrow="CONTACT"
            title={
              <>
                Let's build something{" "}
                <span className="purple-gradient-text">meaningful.</span>
              </>
            }
          />
          <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">
            Open to connecting about projects, learning opportunities and
            conversations around intelligent systems.
          </p>

          <a
            href="mailto:mohammad.azimi.dev@gmail.com"
            className="glass-panel mt-9 flex max-w-sm items-center gap-4 rounded-2xl p-4 transition hover:border-violet-400/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
              <Mail size={19} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Email Me</p>
              <p className="mt-1 text-sm text-zinc-200">
                mohammad.azimi.dev@gmail.com
              </p>
            </div>
          </a>
        </div>

        <form className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="form-field" type="text" placeholder="Your Name" />
            <input
              className="form-field"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="form-field mt-4 min-h-40 resize-none"
            placeholder="Your Message"
          />
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-4 text-sm font-semibold transition hover:bg-violet-500"
          >
            Send Message
            <ArrowRight size={16} />
          </button>
          <p className="mt-4 text-xs text-zinc-600">
            Form submission functionality will be connected later.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="mr-4 text-lg font-bold tracking-[-0.08em]">
            <span className="text-white">M</span>
            <span className="text-violet-400">A</span>
          </span>
          © 2026 Mohammad Azimi. All rights reserved.
        </div>
        <a href="#" className="transition hover:text-white">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
