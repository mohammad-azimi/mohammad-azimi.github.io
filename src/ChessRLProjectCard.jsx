import { FaGithub } from "react-icons/fa";

const features = [
  {
    label: "Q-LEARNING BASELINE",
    text: "Explores reinforcement learning and compares the Q-learning agent with simpler chess opponents.",
  },
  {
    label: "NEURAL-GUIDED SEARCH",
    text: "Combines an imitation-trained policy network with guided search to evaluate promising legal moves.",
  },
  {
    label: "PLAYABLE CHESS INTERFACE",
    text: "Includes a Flask-powered browser interface, five difficulty levels, move history, and board controls.",
  },
];

const technologies = [
  "Python",
  "PyTorch",
  "Q-learning",
  "Imitation Learning",
  "Neural Search",
  "Minimax",
  "Flask",
  "python-chess",
];

export default function ChessRLProjectCard() {
  return (
    <div className="reveal-section mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[32px] border border-violet-400/15 bg-white/[0.018] p-6 sm:p-8 lg:p-10">
      <div className="grid min-w-0 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.18em] text-violet-300">
            REINFORCEMENT LEARNING & GAME AI
          </p>

          <h3 className="mt-4 text-3xl font-semibold text-white">
            ChessRL-Agent
          </h3>

          <span className="mt-5 inline-flex w-fit self-start rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.13em] text-violet-200">
            HYBRID CHESS AI
          </span>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
            A playable chess AI playground combining a Q-learning baseline,
            an imitation-trained neural policy, and neural-guided search.
            Includes an interactive browser chessboard and evaluation against
            multiple baseline agents.
          </p>

          <div className="mt-7 grid gap-3">
            {features.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
              >
                <p className="text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
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
              href="https://github.com/mohammad-azimi/ChessRL-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-200 transition hover:border-violet-400/40"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>

        <div className="group relative min-w-0">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 opacity-70 blur-[90px] transition duration-700 group-hover:scale-110 group-hover:opacity-100 sm:block" />

          <div className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#080810] p-3 shadow-[0_25px_90px_rgba(0,0,0,0.35)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:border-violet-400/35 group-hover:shadow-[0_30px_110px_rgba(124,58,237,0.18)]">
            <div className="pointer-events-none absolute inset-0 z-10 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition duration-700 ease-out group-hover:translate-x-[120%]" />

            <div className="mb-3 flex items-center gap-2 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition group-hover:bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition group-hover:bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition group-hover:bg-emerald-400/60" />

              <div className="ml-4 flex-1 rounded-lg border border-white/[0.05] bg-white/[0.025] px-4 py-2 text-center text-[11px] text-zinc-600">
                ChessRL-Agent · Browser Chess Interface
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#151715]">
              <img
                src="/projects/chessrl-agent/chessrl-web-app.png"
                alt="ChessRL-Agent playable browser chess interface with a neural-guided chess opponent"
                loading="lazy"
                className="block h-auto w-full transform-gpu object-contain transition duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent opacity-50 transition duration-700 group-hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
