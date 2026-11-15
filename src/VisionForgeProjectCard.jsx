import { FaGithub } from "react-icons/fa";

const features = [
  {
    title: "SELF-REFINING GENERATION",
    description:
      "Generates multiple candidates, scores the results and refines the best image across iterations.",
  },
  {
    title: "REFERENCE-AWARE WORKFLOWS",
    description:
      "Combines image-to-image generation, reference anchors and optional CLIP-assisted evaluation.",
  },
  {
    title: "BENCHMARKS & REPORTS",
    description:
      "Compares model presets, explores refinement sessions and exports structured experiment reports.",
  },
];

const technologies = [
  "Python",
  "PyTorch",
  "Diffusers",
  "Streamlit",
  "CLIP",
  "OpenCV",
  "Generative AI",
];

export default function VisionForgeProjectCard() {
  return (
    <div className="reveal-section mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[32px] border border-violet-400/15 bg-white/[0.018] p-6 sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.18em] text-violet-300">
            GENERATIVE AI STUDIO
          </p>

          <h3 className="mt-4 text-3xl font-semibold text-white">
            VisionForge-AI
          </h3>

          <span className="mt-5 inline-flex w-fit self-start rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.13em] text-violet-200">
            DIFFUSION WORKFLOW
          </span>

          <p className="mt-5 text-sm leading-7 text-zinc-400">
            A diffusion-based image generation studio that creates, evaluates
            and refines visual outputs. It combines iterative generation,
            reference matching and experiment tracking in a Streamlit interface.
          </p>

          <div className="mt-7 grid gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4"
              >
                <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                  {feature.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology) => (
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
              href="https://github.com/mohammad-azimi/VisionForge-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:border-violet-400/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>

        <div className="group relative min-w-0">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 opacity-70 blur-[90px] transition duration-700 group-hover:scale-110 group-hover:opacity-100 motion-reduce:transition-none sm:block" />

          <div className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#080810] p-3 shadow-[0_25px_90px_rgba(0,0,0,0.35)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:border-violet-400/35 group-hover:shadow-[0_30px_110px_rgba(124,58,237,0.18)] motion-reduce:transition-none">
            <div className="pointer-events-none absolute inset-0 z-10 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition duration-700 ease-out group-hover:translate-x-[120%] motion-reduce:hidden" />

            <div className="mb-3 flex items-center gap-2 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition group-hover:bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition group-hover:bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition group-hover:bg-emerald-400/60" />
              <div className="ml-4 min-w-0 flex-1 truncate rounded-lg border border-white/[0.05] bg-white/[0.025] px-3 py-2 text-center text-[11px] text-zinc-500">
                VisionForge-AI · Generation Studio
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#0d1117]">
              <img
                src="/projects/visionforge/dashboard.png"
                alt="Actual VisionForge-AI text-to-image generation interface"
                loading="lazy"
                decoding="async"
                className="block aspect-[1.75] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
              />

              <div className="absolute bottom-3 right-3 hidden w-[47%] overflow-hidden rounded-xl border border-violet-400/25 bg-[#080810] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.6)] transition duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none sm:block">
                <img
                  src="/projects/visionforge/studio.png"
                  alt="Actual VisionForge-AI self-refining generation interface"
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[1.68] w-full rounded-lg object-cover object-top"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent opacity-60 transition duration-700 group-hover:opacity-90 motion-reduce:transition-none" />
            </div>

            <div className="flex items-center justify-between px-2 pt-3 text-[10px] tracking-[0.12em] text-zinc-500">
              <span>TEXT-TO-IMAGE</span>
              <span>SELF-REFINING WORKFLOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
