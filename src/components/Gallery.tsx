import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import print1 from "@/assets/print1.png"
import print2 from "@/assets/print2.png"
import print3 from "@/assets/print3.png"
import print4 from "@/assets/print4.png"
import print5 from "@/assets/print5.png"
import print6 from "@/assets/print6.png"
import print7 from "@/assets/print7.png"

const SIZE_SPANS = {
  small: "",
  medium: "md:col-span-1 md:row-span-2",
  big: "md:col-span-2 md:row-span-2",
} as const

type Size = keyof typeof SIZE_SPANS

const IMAGES: { src: string; alt: string; size: Size }[] = [
  { src: print6, alt: "Jovens mexicanos", size: "big" },
  { src: print2, alt: "Policiais em serviço", size: "small" },
  { src: print3, alt: "Personagens com dinheiro", size: "medium" },
  { src: print5, alt: "Selfie do personagem", size: "medium" },
  { src: print4, alt: "Interior skateshop", size: "small" },
  { src: print1, alt: "Por do sol", size: "big" },
  { src: print7, alt: "Personagens na grade", size: "small" },
]

export function Gallery() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.1)

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg-base py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionHeader
            eyebrow="Nossa Comunidade"
            title={
              <>
                GALERIA <span className="text-brand-500">HOODLIFE</span>
              </>
            }
            subtitle={
              <p>Capturas de tela registradas pelos nossos jogadores.</p>
            }
            centered
            inView={inView}
          />
        </div>

        {/* Grid */}
        <div
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-3",
            inView ? "animate-fade-in delay-500" : "opacity-0"
          )}
        >
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={cn(
                "group relative overflow-hidden rounded-sm border border-white/5 bg-bg-surface",
                "transition-colors duration-300 hover:border-brand-500/50",
                SIZE_SPANS[img.size]
              )}
            >
              <div
                className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover:bg-transparent"
                aria-hidden="true"
              />
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
