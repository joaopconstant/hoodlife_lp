import {
  RiArrowDownLine,
  RiArticleLine,
  RiGroupLine,
  RiMapPin2Line,
  RiTimeLine,
} from "@remixicon/react"
import darkCityBg from "@/assets/dark-city-bg.jpg"
import esrbSrc from "@/assets/mature17-esrb.svg"
import heroBgSrc from "@/assets/hero-bg.mp4"
import { Button } from "@/components/ui/button"

const STATS = [
  { icon: RiGroupLine, value: "600+", label: "Jogadores" },
  { icon: RiArticleLine, value: "40+", label: "Tópicos Ativos" },
  { icon: RiMapPin2Line, value: "Los Santos", label: "Mapa Oficial" },
  { icon: RiTimeLine, value: "24 / 7", label: "Online" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-dvh w-full overflow-hidden"
      aria-label="Hero — Hoodlife"
    >
      {/* ── Video background ─────────────────────────────── */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroBgSrc}
        poster={darkCityBg}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* ── Overlay stack ────────────────────────────────── */}

      {/* Directional: dense on text-side, thin on video-side */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.082 0.006 255 / 0.97) 0%, oklch(0.082 0.006 255 / 0.72) 48%, oklch(0.082 0.006 255 / 0.18) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade — blends into page content below */}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, oklch(0.082 0.006 255 / 1) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle blue glow behind title area */}
      <div
        className="absolute top-1/2 left-0 h-125 w-150 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--brand-500) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Top: ESRB badge */}
        <div className="flex justify-end px-6 pt-22">
          <img
            src={esrbSrc}
            alt="ESRB Mature 17+"
            className="animate-fade-in h-10 w-auto opacity-60 delay-1000"
            draggable={false}
          />
        </div>

        {/* Center: headline */}
        <div className="w-full max-w-7xl px-6 md:mx-4 lg:mx-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="eyebrow animate-fade-up mb-5 delay-300">
              Bem vindo(a) ao Hoodlife
            </p>

            {/* Main title */}
            <h1 className="text-display animate-fade-up text-5xl text-text-primary delay-400 md:text-7xl">
              O VERDADEIRO
              <br />
              <span className="text-brand-500">HEAVY ROLEPLAY</span>
              <br />
              NO FIVEM
            </h1>

            {/* Divider */}
            <div
              className="mt-7 mb-6 h-px w-16 origin-left bg-brand-500"
              style={{
                animation:
                  "line-grow 0.6s cubic-bezier(0.16,1,0.3,1) 500ms both",
              }}
            />

            {/* Tagline */}
            <p className="animate-fade-up max-w-md text-lg leading-relaxed font-light text-text-secondary delay-600">
              <span className="font-normal text-text-primary">
                Diferente de servidores convencionais, buscamos uma experiência
                única, com foco na ambientação consistente dos personagens.
              </span>
            </p>

            {/* CTAs */}
            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4 delay-700">
              <Button
                asChild
                variant="default"
                size="lg"
                className="glow-brand-sm hover:glow-brand focus-brand rounded-sm bg-brand-500 font-semibold tracking-wider text-white uppercase hover:bg-brand-400"
              >
                <a href="https://discord.gg/hoodlifels" target="_blank">Conectar ao Servidor</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="focus-brand rounded-sm border-white/20 font-semibold tracking-wider text-text-secondary uppercase hover:border-white/40 hover:bg-white/5 hover:text-text-primary"
              >
                <a href="#sobre">Saiba Mais</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: stats bar */}
        <div className="animate-fade-up mx-auto w-full max-w-7xl delay-800">
          <div className="border-t border-border-subtle">
            <div className="grid grid-cols-2 divide-x divide-border-subtle sm:grid-cols-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-6 py-5 transition-colors duration-200 hover:bg-bg-surface/40"
                >
                  <Icon
                    size={18}
                    className="shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm leading-none font-bold text-text-primary">
                      {value}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in absolute right-6 bottom-22 z-10 hidden flex-col items-center gap-2 delay-900 md:flex">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-text-disabled uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <RiArrowDownLine
          size={14}
          className="animate-bounce text-text-disabled"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
