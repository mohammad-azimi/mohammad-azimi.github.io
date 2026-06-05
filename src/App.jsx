import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Sparkles,
  X,
  CheckCircle2,
  LoaderCircle,
  BookOpen,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const publicLinks = {
  email: "mohammadazimi1011@gmail.com",
  github: "https://github.com/mohammad-azimi",
  linkedin: "https://www.linkedin.com/in/-mohammad--azimi-/",
  publication: "https://en.civilica.com/doc/1650184/",
};

const formspreeFormId = "xzdqpbrg";

const navigationLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Achievements", href: "#achievements", id: "achievements" },
  { name: "Research", href: "#research", id: "research" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

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

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Adaptability",
  "Time Management",
  "Attention to Detail",
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
    period: "Sep 2017 — May 2020",
    title: "High School Diploma — Empirical Science",
    institution: "Shaahed Seyyed Ahmad Khomeini",
    description:
      "Completed high school education with a focus on empirical sciences and scientific methodology.",
  },
  {
    period: "Sep 2020 — Aug 2024",
    title: "Bachelor of Computer Engineering — Computer Software Engineering",
    institution: "Zand Institute of Higher Education",
    grade: "18.35 / 20",
    description:
      "Built a strong foundation in software development, network support and system management, complemented by practical university work experience and a technical internship.",
  },
  {
    period: "Nov 2025 — Present",
    title: "Preparatory Course — Russian Language and Pre-University Program",
    institution: "Peter the Great St. Petersburg Polytechnic University",
    description:
      "Intensive Russian language and academic preparation program for international students preparing to study at a Russian university. In addition to Russian language training, the program included academic subjects studied in Russian.",
    coursework: [
      "Russian Language",
      "Mathematics",
      "Physics",
      "Statistics & Probability",
      "Informatics",
      "Chemistry",
    ],
  },
  {
    period: "Enrolled · Begins after Summer 2026",
    title: "Master's Degree in Intelligent Systems",
    institution: "Peter the Great St. Petersburg Polytechnic University",
    description:
      "09.04.01_17 Intelligent Systems (International Educational Program) · Full-time · English-taught · Institute of Cybersecurity and Computer Science.",
    featured: true,
  },
];

const experiences = [
  {
    period: "2024 — Present",
    title: "Independent Study in AI & Machine Learning",
    organization: "Professional Development",
    type: "AI Learning",
    summary:
      "Building a strong foundation in Artificial Intelligence and Machine Learning through structured self-study, online courses and practical experimentation.",
    highlights: [
      "Studying supervised and unsupervised learning, neural networks, deep learning and core AI concepts.",
      "Developing practical skills with Python, NumPy, Pandas, scikit-learn and machine learning workflows.",
      "Applying knowledge through personal projects involving predictive modeling, data analysis and real-world datasets.",
      "Currently expanding my direction toward Reinforcement Learning, while maintaining an interest in Computer Vision.",
    ],
    tags: [
      "Machine Learning",
      "Python",
      "Deep Learning",
      "Reinforcement Learning",
    ],
    featured: true,
  },
  {
    period: "2022 — 2024",
    title: "Student Employee — IT Department",
    organization: "Zand Institute of Higher Education",
    type: "Technical Support",
    summary:
      "Supported the university's technical environment by assisting with IT services, systems and computer laboratory maintenance.",
    highlights: [
      "Provided technical support for university systems and daily IT-related issues.",
      "Reviewed and maintained computer laboratories, troubleshooting hardware and software problems.",
      "Collaborated with university staff to support reliable operation of IT services.",
    ],
    tags: ["IT Support", "Troubleshooting", "System Maintenance"],
  },
  {
    period: "Aug 2023 — Sep 2023",
    title: "Intern — Network Support Technician",
    organization: "Zand Institute of Higher Education",
    type: "Internship · 120 Hours",
    summary:
      "Completed a practical internship with the network support team, gaining hands-on experience with network infrastructure and technical troubleshooting.",
    highlights: [
      "Assisted with maintaining and troubleshooting the university's network infrastructure.",
      "Worked with network devices and supported performance and security monitoring tasks.",
      "Developed practical understanding of networking protocols, hardware installation and system optimization.",
    ],
    tags: ["Networking", "Technical Support", "Infrastructure"],
  },
  {
    period: "2022 — 2024",
    title: "Student Employee — Building Management Department",
    organization: "Zand Institute of Higher Education",
    type: "Operations Support",
    summary:
      "Supported academic operations, classroom coordination and faculty asset management within the university environment.",
    highlights: [
      "Assisted with classroom scheduling and coordination of student and faculty activities.",
      "Managed and monitored faculty assets and supported campus facility operations.",
      "Helped organize university meetings and events while supporting communication between faculty members and students.",
    ],
    tags: ["Coordination", "Asset Management", "Event Support"],
  },
  {
    period: "2022 — 2024",
    title: "Student Employee — Education Department",
    organization: "Zand Institute of Higher Education",
    type: "Academic Administration",
    summary:
      "Assisted the education department in supporting students and managing academic administration processes.",
    highlights: [
      "Helped students with course selection and related academic issues.",
      "Supported student records and enrollment-related processes.",
      "Communicated with students and staff to respond to academic inquiries and provide guidance.",
    ],
    tags: ["Student Support", "Administration", "Communication"],
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

const publications = [
  {
    status: "Published Conference Paper",
    year: "2022 / 1401",
    title:
      "Early Detection of Forest Fires Using Unmanned Aerial Vehicles and Artificial Intelligence",
    conference:
      "7th International Conference on Knowledge and Technology of Electrical Engineering, Computer and Mechanical Engineering of Iran",
    language: "Persian",
    documentId: "UTCONF07_133",
    description:
      "A research paper proposing the use of unmanned aerial vehicles equipped with artificial intelligence and computer vision capabilities for early smoke and fire detection in forest environments.",
    keywords: [
      "Artificial Intelligence",
      "Computer Vision",
      "UAV",
      "Forest Fire Detection",
      "Crisis Management",
    ],
    link: publicLinks.publication,
  },
];

export default function App() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".page-progress", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.to(".page-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set([".chapter-two", ".chapter-three", ".chapter-four"], {
          display: "none",
        });
        return;
      }

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

      gsap.set([".route-signal", ".path-flow"], {
        autoAlpha: 0,
      });

      gsap.set(".optimal-label", {
        autoAlpha: 0,
        y: 12,
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
        .to(".path-flow", { autoAlpha: 1, duration: 0.25 }, 0.48)
        .to(".route-signal", { autoAlpha: 1, duration: 0.2 }, 0.55)
        .to(".reward-node", { scale: 1.35, duration: 0.38 }, 0.42)
        .to(".optimal-label", { autoAlpha: 1, y: 0, duration: 0.35 }, 0.78)
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

      gsap.from(".profile-card", {
        x: -42,
        y: 26,
        autoAlpha: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".profile-accent", {
        scale: 0.85,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 72%",
          once: true,
        },
      });
      
      gsap.from(".about-copy", {
        y: 48,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".about-trait", {
        y: 20,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-traits",
          start: "top 84%",
          once: true,
        },
      });

      gsap.set([".education-progress", ".experience-progress"], {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.to(".education-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".education-timeline",
          start: "top 68%",
          end: "bottom 62%",
          scrub: true,
        },
      });

      gsap.utils.toArray(".education-entry").forEach((entry) => {
        gsap.from(entry, {
          x: 34,
          y: 22,
          autoAlpha: 0,
          duration: 0.72,
          ease: "power2.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 84%",
            once: true,
          },
        });

        const dot = entry.querySelector(".timeline-dot");

        if (dot) {
          gsap.from(dot, {
            scale: 0.3,
            autoAlpha: 0,
            duration: 0.45,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: entry,
              start: "top 84%",
              once: true,
            },
          });
        }
      });

      gsap.to(".experience-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 68%",
          end: "bottom 62%",
          scrub: true,
        },
      });

      gsap.utils.toArray(".experience-entry").forEach((entry) => {
        gsap.from(entry, {
          x: 34,
          y: 24,
          autoAlpha: 0,
          duration: 0.72,
          ease: "power2.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.from(".achievement-card", {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#achievements",
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".publication-card", {
        y: 42,
        autoAlpha: 0,
        duration: 0.82,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#research",
          start: "top 74%",
          once: true,
        },
      });

      gsap.from(".publication-meta", {
        y: 18,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".publication-card",
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".project-copy", {
        x: -34,
        autoAlpha: 0,
        duration: 0.82,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-showcase",
          start: "top 74%",
          once: true,
        },
      });

      gsap.from(".project-visual", {
        x: 52,
        y: 18,
        autoAlpha: 0,
        duration: 0.92,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-showcase",
          start: "top 74%",
          once: true,
        },
      });

      gsap.from(".project-feature", {
        y: 22,
        autoAlpha: 0,
        duration: 0.62,
        stagger: 0.13,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-features",
          start: "top 83%",
          once: true,
        },
      });

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
    <main ref={pageRef} className="page-bg min-h-screen text-white">
      <div className="fixed left-0 right-0 top-0 z-[70] h-[2px] bg-transparent">
        <div className="page-progress h-full w-full bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400" />
      </div>

      <Header />

      <section className="hero-scroll relative h-[345vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="grid-overlay pointer-events-none absolute inset-0" />

          <div className="pointer-events-none absolute right-[7%] top-[20%] hidden h-[480px] w-[480px] rounded-full bg-violet-700/15 blur-[130px] sm:block" />

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
      <ResearchSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.36;

      const activeLink = navigationLinks.find((link) => {
        const section = document.getElementById(link.id);

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= marker && rect.bottom > marker;
      });

      setActiveSection(activeLink?.id ?? "");
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const linkClasses = (id, mobile = false) => {
    const isActive = activeSection === id;

    if (mobile) {
      return `flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
        isActive
          ? "bg-violet-500/[0.1] text-violet-200"
          : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
      }`;
    }

    return `nav-link relative py-2 transition ${
      isActive ? "text-white" : "text-zinc-400 hover:text-white"
    }`;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5">
      <nav className="glass-panel mx-auto max-w-6xl rounded-2xl">
        <div className="flex items-center justify-between px-5 py-4">
          <a
            href="#"
            onClick={closeMenu}
            className="text-xl font-bold tracking-[-0.08em]"
            aria-label="Back to home"
          >
            <span className="text-white">M</span>
            <span className="text-violet-400">A</span>
          </a>

          <div className="hidden items-center gap-5 text-sm lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={linkClasses(link.id)}
              >
                {link.name}

                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={publicLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white sm:flex"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition hover:border-violet-400/40 hover:text-white lg:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu overflow-hidden border-white/[0.06] lg:hidden ${
            menuOpen ? "mobile-menu-open border-t" : ""
          }`}
        >
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={linkClasses(link.id, true)}
              >
                <span className="flex items-center gap-3">
                  {activeSection === link.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  )}
                  {link.name}
                </span>

                <ArrowRight
                  size={14}
                  className={
                    activeSection === link.id
                      ? "text-violet-300"
                      : "text-zinc-600"
                  }
                />
              </a>
            ))}

            <a
              href={publicLinks.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 sm:hidden"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          onClick={closeMenu}
          className="fixed inset-0 -z-10 bg-black/45 backdrop-blur-[2px] lg:hidden"
        />
      )}
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
      className={`${className} absolute left-6 top-[20%] z-10 max-w-[610px] sm:left-8 sm:top-[27%] lg:top-[31%]`}
    >
      <Badge text={badge} />

      <h1 className="mt-7 text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">
        {title}
      </h1>

      <p className="mt-7 max-w-[520px] text-base leading-7 text-zinc-400 sm:text-lg">
        {description}
      </p>

      {actions && (
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="group flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-500"
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
    <div className="rl-scene absolute right-[-64px] top-[57%] h-[300px] w-[300px] opacity-20 sm:right-[-80px] sm:top-[28%] sm:h-[430px] sm:w-[430px] sm:opacity-55 md:right-[-20px] md:opacity-70 lg:right-[6px] lg:top-[24%] lg:h-[535px] lg:w-[535px] lg:opacity-100">
      <div className="agent-glow absolute inset-[72px] rounded-full bg-violet-600/30 blur-[64px] sm:inset-[110px] sm:blur-[86px]" />

      <div className="ring-one absolute inset-[14px] rounded-full border border-violet-400/[0.09]">
        <span className="absolute left-[23%] top-[-4px] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(196,181,253,0.75)]" />
      </div>

      <div className="ring-two absolute inset-[36px] rounded-full border border-blue-400/[0.09] sm:inset-[47px]">
        <span className="absolute bottom-[18%] right-[3px] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
      </div>

      <div className="absolute inset-[58px] rounded-full border border-violet-400/[0.1] sm:inset-[84px]" />

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

      <SceneNode
        className="left-[35px] top-[43px] sm:left-[63px] sm:top-[78px]"
        text="STATE"
      />
      <SceneNode
        className="bottom-[48px] left-[30px] sm:bottom-[86px] sm:left-[47px]"
        text="ACTION"
      />
      <SceneNode
        className="bottom-[48px] right-[28px] sm:bottom-[84px] sm:right-[44px]"
        text="ENV"
      />

      <div className="reward-node absolute right-[28px] top-[38px] flex h-[58px] w-[58px] items-center justify-center rounded-[17px] border border-blue-400/35 bg-blue-400/[0.1] text-[8px] font-semibold tracking-[0.14em] text-blue-100 shadow-[0_0_40px_rgba(59,130,246,0.2)] sm:right-[43px] sm:top-[66px] sm:h-[84px] sm:w-[84px] sm:rounded-[22px] sm:text-[11px] sm:tracking-[0.19em]">
        REWARD
      </div>

      <div className="optimal-label invisible absolute right-[20px] top-[103px] rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-1.5 text-[7px] font-semibold tracking-[0.14em] text-violet-200 opacity-0 sm:right-[32px] sm:top-[157px] sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[0.18em]">
        OPTIMAL POLICY
      </div>

      <div className="agent-node glass-panel absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[21px] border-violet-400/25 shadow-[0_0_60px_rgba(124,58,237,0.22)] sm:h-[112px] sm:w-[112px] sm:rounded-[29px]">
        <div className="agent-pulse pointer-events-none absolute inset-0 rounded-[21px] border border-violet-400/35 sm:rounded-[29px]" />

        <Sparkles
          size={17}
          className="text-violet-300 sm:h-[22px] sm:w-[22px]"
        />

        <span className="mt-1.5 text-[8px] font-semibold tracking-[0.18em] text-violet-100 sm:mt-2 sm:text-[11px] sm:tracking-[0.2em]">
          AGENT
        </span>

        <span className="mt-1 text-[7px] tracking-[0.11em] text-zinc-500 sm:text-[9px] sm:tracking-[0.13em]">
          π(a|s)
        </span>
      </div>
    </div>
  );
}

function SceneNode({ className, text }) {
  return (
    <div
      className={`${className} path-dim absolute flex h-[52px] w-[52px] items-center justify-center rounded-[15px] border border-white/[0.09] bg-white/[0.028] text-[7px] font-semibold tracking-[0.12em] text-zinc-400 backdrop-blur-md sm:h-[76px] sm:w-[76px] sm:rounded-[20px] sm:text-[10px] sm:tracking-[0.16em]`}
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
  const traits = [
    "Problem Solver",
    "Quick Learner",
    "Detail Oriented",
    "Team Player",
  ];

  return (
    <section
      id="about"
      className="about-transition section-border relative overflow-hidden px-6 py-28 sm:px-8 lg:py-40"
    >
      <div className="about-beam pointer-events-none absolute left-0 right-0 top-0 h-px" />

      <div className="profile-accent pointer-events-none absolute left-[15%] top-[36%] hidden h-[390px] w-[390px] rounded-full bg-violet-700/[0.12] blur-[115px] lg:block" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
        <div className="profile-card mx-auto w-full max-w-[350px] lg:mx-0">
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#0a0a12] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.36)]">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-600/20 blur-[55px]" />

            <div className="relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-white">
              <img
                src="/profile/mohammad-azimi.png"
                alt="Mohammad Azimi portrait"
                className="block aspect-[3/4] w-full object-cover object-top"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#080810] via-[#080810]/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-semibold text-white">
                  Mohammad Azimi
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-300">
                  M.Sc. Student · Intelligent Systems
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel mt-4 flex items-center justify-between rounded-2xl px-5 py-4">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                PRIMARY FOCUS
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">
                Reinforcement Learning
              </p>
            </div>

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
              <span className="absolute h-7 w-7 animate-ping rounded-full bg-violet-400/10" />
              <Sparkles size={18} className="relative text-violet-300" />
            </div>
          </div>
        </div>

        <div className="about-copy">
          <SectionHeading
            eyebrow="ABOUT ME"
            title={
              <>
                Building the future with{" "}
                <span className="purple-gradient-text">
                  intelligent systems.
                </span>
              </>
            }
          />

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-400">
            <p>
              I am a Computer Engineering graduate in Software and an enrolled
              Master's student in Intelligent Systems at Peter the Great St.
              Petersburg Polytechnic University.
            </p>

            <p>
              My primary AI interest is Reinforcement Learning. I am interested
              in understanding how agents learn from decisions and interaction,
              while also exploring Computer Vision and practical product
              development.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-4 py-3 text-xs font-medium tracking-[0.12em] text-violet-200">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_13px_rgba(167,139,250,0.8)]" />
            FROM DECISIONS TO DIRECTION
          </div>

          <div className="about-traits mt-9 grid gap-3 sm:grid-cols-2">
            {traits.map((trait) => (
              <div
                key={trait}
                className="about-trait glass-panel rounded-xl px-4 py-3 text-sm text-zinc-300"
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

            <div className="mt-10 border-t border-white/[0.06] pt-7">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-violet-300" />
                <h3 className="text-lg font-semibold">Soft Skills</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="EDUCATION"
          title={
            <>
              Academic journey toward{" "}
              <span className="purple-gradient-text">Intelligent Systems.</span>
            </>
          }
        />

        <div className="education-timeline relative mt-16 space-y-5 lg:pl-14">
          <div className="timeline-rail absolute bottom-9 left-[20px] top-9 hidden w-px bg-white/[0.07] lg:block">
            <div className="education-progress h-full w-full bg-gradient-to-b from-violet-400 via-blue-400 to-violet-500" />
          </div>

          {education.map((item) => (
            <article
              key={item.title}
              className={`education-entry education-card relative grid gap-5 rounded-3xl p-6 sm:p-8 lg:grid-cols-[205px_1fr] ${
                item.featured
                  ? "border-violet-400/25 bg-violet-500/[0.07]"
                  : "glass-panel"
              }`}
            >
              <span
                className={`timeline-dot absolute -left-[43px] top-[38px] hidden h-5 w-5 rounded-full border-[5px] border-[#07070c] lg:block ${
                  item.featured ? "bg-blue-400" : "bg-violet-400"
                }`}
              />

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

                {item.grade && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-4 py-2 text-xs text-zinc-300">
                    <span className="font-semibold tracking-[0.12em] text-violet-300">
                      GRADE
                    </span>
                    <span>{item.grade}</span>
                  </div>
                )}

                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {item.description}
                </p>

                {item.coursework && (
                  <div className="mt-6">
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                      COURSEWORK STUDIED IN RUSSIAN
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-zinc-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

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
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="EXPERIENCE & DEVELOPMENT"
          title={
            <>
              Learning through{" "}
              <span className="purple-gradient-text">work and practice.</span>
            </>
          }
          description="Professional experience, academic support roles and independent learning that shaped my technical and personal development."
        />

        <div className="experience-timeline relative mt-16 space-y-6">
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-white/10 sm:left-[27px]">
            <div className="experience-progress h-full w-full bg-gradient-to-b from-violet-400 via-blue-400 to-violet-500" />
          </div>

          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="experience-entry relative grid gap-5 pl-16 sm:pl-20 lg:grid-cols-[190px_1fr]"
            >
              <div
                className={`absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-2xl border text-violet-300 sm:h-14 sm:w-14 ${
                  experience.featured
                    ? "border-violet-400/30 bg-violet-500/10 shadow-[0_0_26px_rgba(139,92,246,0.14)]"
                    : "border-violet-400/20 bg-[#0c0c14]"
                }`}
              >
                <Briefcase size={20} />
              </div>

              <div className="pt-3">
                <p className="text-sm font-medium text-violet-300">
                  {experience.period}
                </p>

                <p className="mt-3 text-[10px] font-semibold tracking-[0.16em] text-zinc-500">
                  {experience.type}
                </p>
              </div>

              <div
                className={`rounded-2xl p-6 sm:p-7 ${
                  experience.featured
                    ? "border border-violet-400/20 bg-violet-500/[0.045]"
                    : "glass-panel"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {experience.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-300">
                      {experience.organization}
                    </p>
                  </div>

                  {experience.featured && (
                    <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-[10px] font-semibold tracking-[0.13em] text-violet-200">
                      CURRENT FOCUS
                    </span>
                  )}
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
                  {experience.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-7 text-zinc-400"
                    >
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
      <div className="mx-auto max-w-6xl">
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
              className="achievement-card glass-panel rounded-3xl p-7"
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

function ResearchSection() {
  return (
    <section
      id="research"
      className="section-border overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="RESEARCH & PUBLICATIONS"
          title={
            <>
              Exploring ideas through{" "}
              <span className="purple-gradient-text">academic research.</span>
            </>
          }
          description="Research experience connecting artificial intelligence with practical, real-world challenges."
        />

        <div className="mt-14">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="publication-card overflow-hidden rounded-[32px] border border-violet-400/15 bg-[#090910] p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <BookOpen size={25} />
                  </div>

                  <p className="publication-meta mt-7 text-xs font-semibold tracking-[0.18em] text-violet-300">
                    {publication.status}
                  </p>

                  <div className="publication-meta mt-7 space-y-4 text-sm">
                    <ResearchInfo label="Published" value={publication.year} />

                    <ResearchInfo
                      label="Language"
                      value={`${publication.language} Publication`}
                    />

                    <ResearchInfo
                      label="Document ID"
                      value={publication.documentId}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {publication.title}
                  </h3>

                  <p className="mt-6 text-sm font-medium leading-7 text-zinc-300 sm:text-base">
                    {publication.conference}
                  </p>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {publication.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {publication.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-zinc-400"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-9 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    View Publication
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchInfo({ label, value }) {
  return (
    <div className="publication-meta border-b border-white/[0.06] pb-4">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-zinc-500">
        {label}
      </p>
      <p className="mt-2 leading-6 text-zinc-200">{value}</p>
    </div>
  );
}

function ProjectsSection() {
  const projectFeatures = [
    {
      title: "Daily Tracking",
      description: "Mark habits complete and maintain consistent routines.",
    },
    {
      title: "Progress Analytics",
      description: "Monitor daily performance through a clean dashboard.",
    },
    {
      title: "Push Reminders",
      description: "Receive scheduled reminders through PWA notifications.",
    },
  ];

  return (
    <section
      id="projects"
      className="section-border overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
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

        <article className="featured-showcase mt-14 overflow-hidden rounded-[32px] border border-violet-400/15 bg-[#090910] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.77fr_1.23fr] lg:items-center">
            <div className="project-copy">
              <p className="text-xs font-semibold tracking-[0.18em] text-violet-300">
                FEATURED PROJECT
              </p>

              <h3 className="mt-5 text-4xl font-semibold">
                Habit <span className="purple-gradient-text">Tracker</span>
              </h3>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                A modern habit tracking application designed to help users build
                consistency through daily check-ins, progress monitoring and
                reminder notifications.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "Tailwind CSS",
                  "PWA",
                  "Push Notifications",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://mohammad-azimi.github.io/Habit-Tracker/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Live Demo
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://github.com/mohammad-azimi/Habit-Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:border-violet-400/40"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <ProjectVisual />
          </div>

          <div className="project-features mt-10 grid gap-4 border-t border-white/[0.06] pt-8 md:grid-cols-3">
            {projectFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="project-feature rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-xs font-semibold text-violet-300">
                  0{index + 1}
                </div>

                <h4 className="mt-5 text-base font-semibold text-white">
                  {feature.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-6 overflow-hidden rounded-[32px] border border-violet-400/15 bg-white/[0.018] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-violet-300">
                    REINFORCEMENT LEARNING PROJECT
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    GlucoPilot-RL
                  </h3>
                </div>

                <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-[10px] font-semibold tracking-[0.13em] text-violet-200">
                  RESEARCH SIMULATION
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
                A reinforcement learning research simulation for virtual Type 1
                Diabetes glucose control, comparing fixed-action baselines, PPO
                experiments and a final safety-shielded discrete DQN controller
                inside the simglucose virtual-patient simulator.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                    METHOD
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Safety-shielded discrete residual DQN policy for simulated
                    control decisions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                    RESULT
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Improved simulated control behavior compared with baseline
                    experiments.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                    SAFETY NOTE
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Research and educational simulation only; not intended for
                    medical decision-making.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Reinforcement Learning",
                  "DQN",
                  "PPO",
                  "simglucose",
                  "Safety Shield",
                  "Research Simulation",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/mohammad-azimi/GlucoPilot-RL"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:border-violet-400/40"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[90px] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#080810] p-3 shadow-[0_25px_90px_rgba(0,0,0,0.35)]">
                <div className="mb-3 flex items-center gap-2 px-2 py-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

                  <div className="ml-4 flex-1 rounded-lg border border-white/[0.05] bg-white/[0.025] px-4 py-2 text-center text-[11px] text-zinc-600">
                    GlucoPilot-RL Evaluation
                  </div>
                </div>

                <div className="overflow-hidden rounded-[18px] border border-white/[0.06] bg-white">
                  <img
                    src="/projects/glucopilot-rl/overview.png"
                    alt="GlucoPilot-RL reinforcement learning evaluation result"
                    className="block w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual() {
  return (
    <div className="project-visual relative">
      <div className="project-light pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[90px] sm:block" />

      <div className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#080810] p-3 shadow-[0_25px_90px_rgba(0,0,0,0.38)] sm:p-4">
        <div className="mb-3 flex items-center gap-2 px-2 py-1">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

          <div className="ml-4 flex-1 rounded-lg border border-white/[0.05] bg-white/[0.025] px-4 py-2 text-center text-[11px] text-zinc-600">
            Habit Tracker Dashboard
          </div>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#0b0b14]">
          <img
            src="/projects/habit-tracker/dashboard.png"
            alt="Habit Tracker dashboard interface"
            className="block w-full object-cover"
          />
        </div>

        <div className="absolute bottom-7 right-7 hidden w-[42%] overflow-hidden rounded-xl border border-white/[0.12] bg-[#0b0b14] p-1.5 shadow-2xl sm:block">
          <img
            src="/projects/habit-tracker/feature.png"
            alt="Habit Tracker analytics feature preview"
            className="block w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [state, submitForm, reset] = useForm(formspreeFormId);

  return (
    <section
      id="contact"
      className="section-border overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="reveal-section mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading
            eyebrow="CONTACT"
            title={
              <>
                Let&apos;s build something{" "}
                <span className="purple-gradient-text">meaningful.</span>
              </>
            }
          />

          <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">
            Open to connecting about projects, learning opportunities and
            conversations around intelligent systems.
          </p>

          <div className="mt-9 space-y-3">
            <ContactCard
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                publicLinks.email,
              )}`}
              icon={<Mail size={19} />}
              label="Email Me"
              value={publicLinks.email}
              external
            />

            <ContactCard
              href={publicLinks.github}
              icon={<FaGithub size={19} />}
              label="GitHub"
              value="@mohammad-azimi"
              external
            />

            {publicLinks.linkedin && (
              <ContactCard
                href={publicLinks.linkedin}
                icon={<FaLinkedinIn size={19} />}
                label="LinkedIn"
                value="Connect with me"
                external
              />
            )}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8">
          {state.succeeded ? (
            <div className="flex min-h-[410px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <CheckCircle2 size={30} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-white">
                Message sent successfully.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                Thank you for reaching out. I have received your message and
                will respond as soon as possible.
              </p>

              <button
                type="button"
                onClick={reset}
                className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-500/[0.06]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submitForm}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    className="form-field"
                    id="contact-name"
                    type="text"
                    name="name"
                    aria-label="Your name"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-2 block text-xs text-red-300"
                  />
                </div>

                <div>
                  <input
                    className="form-field"
                    id="contact-email"
                    type="email"
                    name="email"
                    aria-label="Your email"
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 block text-xs text-red-300"
                  />
                </div>
              </div>

              <textarea
                className="form-field mt-4 min-h-40 resize-none"
                id="contact-message"
                name="message"
                aria-label="Your message"
                placeholder="Your Message"
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 block text-xs text-red-300"
              />

              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <input
                type="hidden"
                name="subject"
                value="New portfolio message from {{ name }}"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? (
                  <>
                    <LoaderCircle size={17} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-zinc-600">
                Your message will be sent securely through the contact form.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ href, icon, label, value, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="glass-panel group flex max-w-sm items-center gap-4 rounded-2xl p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/15">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-zinc-500">{label}</p>
        <p className="mt-1 truncate text-sm text-zinc-200">{value}</p>
      </div>

      <ExternalLink
        size={14}
        className="ml-auto text-zinc-600 transition group-hover:text-violet-300"
      />
    </a>
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
