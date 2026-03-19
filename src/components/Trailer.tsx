import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { useEffect, useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"

// const VIDEO_ID = "CZEPV8MXLkc"

const LAUNCH_DATE = new Date("2026-04-01T20:00:00-03:00")

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, target.getTime() - Date.now()))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(0, target.getTime() - Date.now()))
    }, 1000)
    return () => clearInterval(interval)
  }, [target])

  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24)
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return { days, hours, minutes, seconds, done: timeLeft === 0 }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="surface flex h-20 w-20 items-center justify-center rounded-lg border border-border-brand md:h-24 md:w-24">
        <span className="text-4xl font-black tabular-nums text-text-primary md:text-5xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="eyebrow text-text-muted">{label}</span>
    </div>
  )
}

export function Trailer() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.15)
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE)

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
            eyebrow="Em breve"
            title={<>Trailer Oficial</>}
            subtitle={<p>O trailer oficial do Hoodlife está chegando. Fique ligado.</p>}
            centered
            inView={inView}
          />
        </div>

        {/* Countdown */}
        <div
          className={cn(
            "flex items-center justify-center gap-4 md:gap-8",
            inView ? "animate-fade-up delay-600" : "opacity-0"
          )}
        >
          <CountdownUnit value={days} label="Dias" />
          <span className="mb-6 text-4xl font-black text-brand-500">:</span>
          <CountdownUnit value={hours} label="Horas" />
          <span className="mb-6 text-4xl font-black text-brand-500">:</span>
          <CountdownUnit value={minutes} label="Minutos" />
          <span className="mb-6 text-4xl font-black text-brand-500">:</span>
          <CountdownUnit value={seconds} label="Segundos" />
        </div>

        {/* Save the date */}
        <div
          className={cn(
            "mt-10 flex flex-col items-center gap-2",
            inView ? "animate-fade-up delay-700" : "opacity-0"
          )}
        >
          <span className="eyebrow text-text-muted">Save the date</span>
          <p className="text-2xl font-black tracking-tight text-text-primary md:text-3xl">
            01 de Abril às 20:00
          </p>
          <p className="text-sm text-text-muted">Horário de Brasília</p>
        </div>

        {/* REMOVE THIS BLOCK AND UNCOMMENT VIDEO_ID + iframe BELOW WHEN TIMER HITS ZERO */}

        {/* Video container — uncomment when trailer is live
        <div
          className={cn(
            "relative",
            inView ? "animate-fade-up delay-600" : "opacity-0"
          )}
        >
          <div
            className="absolute -inset-4 rounded-xl opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--brand-700) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

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

        <div
          className={cn(
            "prose mx-auto mt-8 max-w-md text-center",
            inView ? "animate-fade-up delay-700" : "opacity-0"
          )}
        >
          <p>
            Breve apresentação da atmosfera e a proposta do Hoodlife,{" "}
            <b>em um minuto.</b>
          </p>
        </div>
        */}
      </div>
    </section>
  )
}
