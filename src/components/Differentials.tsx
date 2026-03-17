import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import {
  RiChatVoiceLine,
  RiShieldCheckLine,
  RiTerminalBoxLine,
  RiBuildingLine,
  RiAlarmWarningLine,
  RiGroupLine,
} from "@remixicon/react"

const ITEMS = [
  {
    Icon: RiChatVoiceLine,
    title: "Interpretação acima de mecânicas",
    body: "Os sistemas existem para apoiar o roleplay, não para substituí-lo. Histórias, escolhas e consequências têm prioridade sobre qualquer mecânica.",
  },
  {
    Icon: RiShieldCheckLine,
    title: "Servidor não pay-to-win",
    body: "Nada aqui pode ser comprado para gerar vantagem real. A progressão acontece através de interpretação, envolvimento e construção de história.",
  },
  {
    Icon: RiTerminalBoxLine,
    title: "Scripts realistas e avançados",
    body: "Os sistemas foram pensados para reforçar profundidade e coerência no mundo. Mecânicas existem para dar suporte ao RP, não para virar um jogo arcade.",
  },
  {
    Icon: RiBuildingLine,
    title: "Imersão urbana completa",
    body: "Los Santos é tratada como uma cidade viva. Cada camada social, econômica e criminal existe para ser explorada com profundidade.",
  },
  {
    Icon: RiAlarmWarningLine,
    title: "Crime com consequências",
    body: "Ser criminoso vai além de assaltos e tiroteios. Decisões geram impacto na reputação, nas relações e no futuro do personagem.",
  },
  {
    Icon: RiGroupLine,
    title: "Staff experiente e presente",
    body: "Administração ativa focada em manter o ambiente saudável e o roleplay consistente. Regras claras e aplicação justa para preservar a qualidade da cidade.",
  },
] as const

export function DIfferentials() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.08)

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="relative bg-bg-base py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ── Section header ─────────────────────────────────── */}
        <div className="mb-16 text-center">
          <SectionHeader
            eyebrow="Diferenciais"
            title={
              <>
                POR QUE <span className="text-brand-500">HOODLIFE</span>
              </>
            }
            centered
            inView={inView}
          />
        </div>

        {/* ── Cards grid ─────────────────────────────────────── */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Card
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-lg bg-bg-surface p-0 transition-colors duration-300 hover:bg-bg-elevated border-0! ring-0!",
                inView ? "animate-fade-up" : "opacity-0"
              )}
            >
              <CardHeader className="p-8 pb-0">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-md border border-brand-500/25 bg-brand-500/10 text-brand-400 shadow-[0_0_20px_oklch(0.56_0.27_255/0.12)] transition-[background-color,border-color,box-shadow] duration-300 group-hover:border-brand-500/50 group-hover:bg-brand-500/20 group-hover:shadow-[0_0_28px_oklch(0.56_0.27_255/0.25)]">
                  <item.Icon size={26} aria-hidden="true" />
                </div>

                <CardTitle className="mb-3 text-base leading-snug font-bold text-text-primary md:text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
