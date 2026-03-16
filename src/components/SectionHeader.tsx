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
          inView ? "animate-fade-up delay-100" : "opacity-0"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-3xl leading-tight font-black tracking-tight text-text-primary md:text-5xl",
          inView ? "animate-fade-up delay-200" : "opacity-0"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-0.5 w-12 bg-brand-500",
          centered && "mx-auto",
          subtitle ? "mb-7" : "",
          inView ? "animate-fade-up delay-300" : "opacity-0"
        )}
        aria-hidden="true"
      />
      {subtitle && (
        <div
          className={cn(
            "prose",
            centered && "mx-auto",
            inView ? "animate-fade-up delay-400" : "opacity-0"
          )}
        >
          {subtitle}
        </div>
      )}
    </>
  )
}
