import { useEffect } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import useEmblaCarousel from "embla-carousel-react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import cardCriminal from "@/assets/card-criminal.png"
import cardBusiness from "@/assets/card-business.png"
import cardPolice from "@/assets/card-police.png"
import cardFire from "@/assets/card-fire.png"
import cardArtistic from "@/assets/card-artistic.png"
import cardCivil from "@/assets/card-civil.png"
import cardRacer from "@/assets/card-racer.png"
import cardOther from "@/assets/card-other.png"

const CARDS = [
  { category: "Empresarial", title: "Negócios e poder", image: cardBusiness },
  { category: "Legal", title: "Ordem e proteção", image: cardPolice },
  { category: "Emergencial", title: "Resposta rápida", image: cardFire },
  { category: "Artístico", title: "Cultura e expressão", image: cardArtistic },
  { category: "Civil", title: "Vida cotidiana", image: cardCivil },
  { category: "Corredor", title: "Corridas e tunagens", image: cardRacer },
  { category: "Outros", title: "Use a criatividade", image: cardOther },
  { category: "Ilegal", title: "Gangues e facções", image: cardCriminal },
]

export function Ecosystem() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.1)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })

  // Re-init after the fade-in animation completes so Embla has accurate
  // layout measurements (animate-fade-up uses translateY which can skew them)
  useEffect(() => {
    if (!inView || !emblaApi) return
    const id = setTimeout(() => emblaApi.reInit(), 900)
    return () => clearTimeout(id)
  }, [inView, emblaApi])

  const prev = () => emblaApi?.scrollPrev()
  const next = () => emblaApi?.scrollNext()

  return (
    <section
      id="ecossistema"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-bg-base py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ── Header row: title left · arrows right ─────────────── */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <SectionHeader
              eyebrow="Ecossistema"
              title={
                <>
                  ESCOLHA SEU <span className="text-brand-500">CAMINHO</span>
                </>
              }
              inView={inView}
            />
          </div>

          <div
            className={cn(
              "flex shrink-0 items-center gap-2 pb-0.5",
              inView ? "animate-fade-up delay-400" : "opacity-0"
            )}
          >
            <Button
              onClick={prev}
              aria-label="Anterior"
              variant="outline"
              size="icon-lg"
              className="cursor-pointer rounded-sm border-border-default text-text-secondary hover:border-brand-500 hover:text-brand-500"
            >
              <RiArrowLeftSLine aria-hidden="true" />
            </Button>
            <Button
              onClick={next}
              aria-label="Próximo"
              variant="outline"
              size="icon-lg"
              className="cursor-pointer rounded-sm border-border-default text-text-secondary hover:border-brand-500 hover:text-brand-500"
            >
              <RiArrowRightSLine aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* ── Carousel ──────────────────────────────────────────── */}
        <div className={cn("-mx-6 md:mx-0", inView ? "animate-fade-in delay-500" : "opacity-0")}>
          <div className="relative">
            {/* Edge fades */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg-base via-bg-base/80 to-transparent md:w-32"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg-base via-bg-base/80 to-transparent md:w-32"
              aria-hidden="true"
            />

            {/* Embla viewport — Embla v8 supports gap natively */}
            <div className="touch-pan-y overflow-hidden px-6 md:px-0" ref={emblaRef}>
              <div className="-ml-5 flex">
                {CARDS.map((card) => (
                  <div
                    key={card.category}
                    className="min-w-0 flex-[0_0_85%] pl-5 sm:flex-[0_0_45%] lg:flex-[0_0_28%]"
                  >
                    <Card
                      className={cn(
                        "group relative aspect-3/4 cursor-pointer overflow-hidden rounded-lg p-0 ring-0!",
                        "border border-border-default transition-[border-color,box-shadow] duration-300 hover:border-brand-500"
                      )}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        draggable={false}
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 ring-1 ring-brand-500 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      <div className="absolute right-0 bottom-0 left-0 p-5">
                        <Badge variant="secondary" className="mb-3 rounded-sm bg-brand-500/20 px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-400 uppercase ring-1 ring-brand-500/40 border-0!">
                          {card.category}
                        </Badge>
                        <h3 className="text-base leading-snug font-bold text-text-primary md:text-lg">
                          {card.title}
                        </h3>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
