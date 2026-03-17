import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  centered?: boolean
  inView: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  inView,
}: SectionHeaderProps) {
  return (
    <>
      <p
        className={cn(
          "eyebrow mb-4",
          inView ? "animate-fade-up delay-300" : "opacity-0"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-3xl leading-tight font-black tracking-tight text-text-primary md:text-5xl",
          inView ? "animate-fade-up delay-400" : "opacity-0"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 flex",
          centered && "justify-center",
          inView ? "animate-fade-up delay-500" : "opacity-0"
        )}
        aria-hidden="true"
      ></div>
      {subtitle && (
        <div
          className={cn(
            "prose",
            centered && "mx-auto",
            inView ? "animate-fade-up delay-600" : "opacity-0"
          )}
        >
          {subtitle}
        </div>
      )}
    </>
  )
}
