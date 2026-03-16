import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"

import partner1 from "@/assets/partner1.png"
import partner2 from "@/assets/partner2.png"
import partner3 from "@/assets/partner3.png"
import partner4 from "@/assets/partner4.png"
import partner5 from "@/assets/partner5.png"
import partner6 from "@/assets/partner6.png"
import partner7 from "@/assets/partner7.png"
import partner8 from "@/assets/partner8.png"

const LOGOS = [
  { src: partner1, alt: "Parceiro 1" },
  { src: partner2, alt: "Parceiro 2" },
  { src: partner3, alt: "Parceiro 3" },
  { src: partner4, alt: "Parceiro 4" },
  { src: partner5, alt: "Parceiro 5" },
  { src: partner6, alt: "Parceiro 6" },
  { src: partner7, alt: "Parceiro 7" },
  { src: partner8, alt: "Parceiro 8" },
]

export function Partners() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.1)

  return (
    <section
      id="parceiros"
      ref={sectionRef}
      className="relative bg-bg-base py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <SectionHeader
            eyebrow="Parceiros e Apoiadores"
            centered
            inView={inView}
          />
        </div>
      </div>

      {/* ── Carousel ─────────────────────────────────────────────── */}
      <div
        className={cn(
          "relative overflow-hidden transition-opacity duration-700",
          inView ? "opacity-100" : "opacity-0"
        )}
        /* Edge fade mask */
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-16 pr-16 hover:paused">
          {/* Original + duplicate for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex h-14 w-36 shrink-0 items-center justify-center opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
