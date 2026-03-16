import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"

const VIDEO_ID = "oE2qM65DUlo"

export function Trailer() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.15)

  return (
    <section
      id="trailer"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg-base py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionHeader
            eyebrow="Assista"
            title="Trailer Oficial"
            centered
            inView={inView}
          />
        </div>

        {/* Video container */}
        <div
          className={cn(
            "relative",
            inView ? "animate-fade-up delay-400" : "opacity-0"
          )}
        >
          {/* Glow behind the video */}
          <div
            className="absolute -inset-4 rounded-xl opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--brand-700) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* iframe wrapper — responsive 16:9 */}
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border-default">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&color=white`}
              title="Hoodlife — Teaser Oficial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Description */}
        <div
          className={cn(
            "prose mx-auto mt-8 max-w-md text-center",
            inView ? "animate-fade-up delay-500" : "opacity-0"
          )}
        >
          <p>
            Breve apresentação da atmosfera e a proposta do Hoodlife,{" "}
            <b>em um minuto.</b>
          </p>
        </div>
      </div>
    </section>
  )
}
