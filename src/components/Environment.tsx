import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import darkCityBg from "@/assets/dark-city-bg.jpg"
import { RiBriefcaseLine, RiSwordLine, RiScales3Line } from "@remixicon/react"

const CARDS = [
  {
    Icon: RiBriefcaseLine,
    title: "Vida Cotidiana",
    body: "Rotinas, empregos, transporte público e comércio local mostram como a cidade funciona na prática.",
  },
  {
    Icon: RiSwordLine,
    title: "Conflitos e Tensão Social",
    body: "Disputas territoriais, pequenas infrações e rivalidades entre grupos geram desafios constantes para os moradores.",
  },
  {
    Icon: RiScales3Line,
    title: "Decisões e Repercussões",
    body: "Cada ação do personagem provoca efeitos reais, influenciando alianças, oportunidades e o desenvolvimento dentro da cidade.",
  },
] as const

export function Environment() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.12)

  return (
    <section
      id="ambientacao"
      ref={sectionRef}
      className="relative h-full overflow-hidden bg-bg-base"
    >
      {/* ── Background ───────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${darkCityBg})` }}
        aria-hidden="true"
      />
      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-bg-base to-transparent"
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-bg-base to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-20">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <SectionHeader
            eyebrow="Ambientação"
            title={
              <>
                LOS SANTOS COMO VOCÊ
                <br />
                NUNCA <span className="text-brand-500">VIVEU</span>
              </>
            }
            centered
            inView={inView}
          />
        </div>

        {/* ── Body copy ──────────────────────────────────────── */}
        <div
          className={cn(
            "prose mx-auto max-w-2xl text-center",
            inView ? "animate-fade-up delay-600" : "opacity-0"
          )}
        >
          <p>
            Los Santos é uma cidade de contrastes intensos. Bairros ricos e
            áreas populares coexistem lado a lado, cada um com sua rotina, ritmo
            e cultura próprios. O trânsito caótico, o comércio diversificado, os
            prédios históricos e a vida nas ruas formam o{" "}
            <b>cenário de cada história</b>.
          </p>
          <p>
            Aqui, cada personagem enfrenta os desafios de uma cidade viva:
            pressões econômicas, relações sociais delicadas, oportunidades que
            exigem escolhas e conflitos que testam a habilidade de se adaptar.
            Nada acontece sem consequência, e{" "}
            <span className="text-brand-500">
              cada decisão influencia diretamente o caminho do personagem
            </span>
            , moldando reputações, alianças e experiências únicas dentro do
            mundo urbano de Los Santos.
          </p>
        </div>

        {/* ── Cards ──────────────────────────────────────────── */}
        <div className="mt-12 grid w-full gap-2 sm:grid-cols-3">
          {CARDS.map((card, index) => (
            <Card
              key={card.title}
              className={cn(
                "group relative overflow-hidden rounded-lg bg-bg-surface/80 p-0 backdrop-blur-sm border-0! ring-0!",
                "transition-colors duration-300 hover:bg-bg-elevated",
                inView ? `animate-fade-up delay-${700 + index * 100}` : "opacity-0"
              )}
            >
              <CardHeader className="p-8 pb-0">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-brand-500/25 bg-brand-500/10 text-brand-400 shadow-[0_0_20px_oklch(0.56_0.27_255/0.12)] transition-[background-color,border-color,box-shadow] duration-300 group-hover:border-brand-500/50 group-hover:bg-brand-500/20 group-hover:shadow-[0_0_28px_oklch(0.56_0.27_255/0.25)]">
                  <card.Icon size={22} aria-hidden="true" />
                </div>

                <CardTitle className="mb-2 text-base leading-snug font-bold text-text-primary md:text-lg">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {card.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
