import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import { RiDiscordFill, RiArrowRightLine } from "@remixicon/react"

export function DiscordCTA() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.1)

  return (
    <section
      id="comunidade"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg-base py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: content ──────────────────────────────────── */}
          <div>
            <SectionHeader
              eyebrow="Comunidade"
              title={
                <>
                  ENTRE NO <span className="text-brand-500">DISCORD</span>
                </>
              }
              inView={inView}
            />

            <div
              className={cn(
                "prose mt-7",
                inView ? "animate-fade-up delay-400" : "opacity-0"
              )}
            >
              <p>
                Nossa comunidade, whitelist e todo o suporte acontecem no
                Discord. <b>É lá que você começa sua jornada no Hoodlife.</b>
              </p>
            </div>

            <a
              href="https://discord.gg/hoodlifels"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group mt-10 inline-flex items-center gap-3 rounded-sm bg-brand-500 px-6 py-3.5 text-sm font-bold tracking-wider text-white uppercase transition-[background-color,box-shadow] duration-300 hover:bg-brand-400 hover:shadow-[0_0_32px_oklch(0.56_0.27_255/0.35)]",
                inView ? "animate-fade-up delay-500" : "opacity-0"
              )}
            >
              <RiDiscordFill size={18} aria-hidden="true" />
              Entrar no servidor
              <RiArrowRightLine
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* ── Right: Discord widget ───────────────────────────── */}
          <div
            className={cn(
              "flex justify-center lg:justify-end",
              inView ? "animate-fade-up delay-300" : "opacity-0"
            )}
          >
            <div
              className="relative overflow-hidden rounded-lg border-0! ring-0!"
              style={{
                boxShadow:
                  "0 0 0 1px oklch(1 0 0 / 0.08), 0 24px 64px oklch(0 0 0 / 0.5)",
              }}
            >
              <iframe
                src="https://discord.com/widget?id=1370743473560621108&theme=dark"
                width="350"
                height="500"
                allowTransparency={true}
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title="Servidor Discord Hoodlife"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
