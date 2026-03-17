import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"

/* ─── Data ──────────────────────────────────────────────────────── */

const MEMBERS = [
  {
    name: "Leozera",
    role: "Community Manager",
    color: "#e60939",
    initials: "LZ",
    description:
      "Responsável pelo gerenciamento da comunidade e pela representação direta dos jogadores dentro da gestão do servidor. Atua junto do Development Manager nas principais decisões estratégicas, ajudando a definir o direcionamento e as prioridades do projeto.",
  },
  {
    name: "Scott",
    role: "Development Manager",
    color: "#e64b2c",
    initials: "SC",
    description:
      "Responsável pela liderança do desenvolvimento técnico do servidor, supervisionando sistemas, scripts e infraestrutura. Junto do Community Manager, participa das decisões estratégicas que definem o direcionamento e a evolução do servidor.",
  },
  {
    name: "Unity",
    role: "Lead Admin",
    color: "#3464db",
    initials: "UN",
    description:
      "Lidera a equipe administrativa e atua como a principal ponte entre a administração e a gestão do servidor. Trabalha diretamente com o Community Manager e o Development Manager para garantir que as diretrizes e decisões estratégicas sejam aplicadas corretamente dentro da staff e do ambiente de roleplay.",
  },
  {
    name: "Caio",
    role: "Senior Admin",
    color: "#39b665",
    initials: "CA",
    description:
      "Apoia diretamente o Lead Admin e atua como elo entre a direção e os admins operacionais. Gerencia conflitos complexos, fiscaliza a qualidade do roleplay e supervisiona punições e refundos.",
  },
] as const

/* ─── Component ─────────────────────────────────────────────────── */

export function Team() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.08)

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative bg-bg-base py-24 md:py-32"
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mb-20 text-center">
          <SectionHeader
            eyebrow="Nossa Equipe"
            title={
              <>
                OS PILARES DA <span className="text-brand-500">STAFF</span>
              </>
            }
            subtitle={
              <p className="mx-auto max-w-xl text-center">
                Uma equipe experiente e presente, comprometida com a integridade
                do roleplay e com a qualidade do servidor em cada detalhe.
              </p>
            }
            centered
            inView={inView}
          />
        </div>

        {/* ── Member cards ───────────────────────────────────────── */}
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              animClass={cn(inView ? `animate-fade-up` : "opacity-0")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── MemberCard ─────────────────────────────────────────────────── */

function MemberCard({
  member,
  animClass,
}: {
  member: (typeof MEMBERS)[number]
  animClass: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "group relative flex cursor-pointer flex-col overflow-hidden bg-bg-surface/40 p-0 ring-0 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:bg-bg-surface/60",
        isExpanded && "-translate-y-2 bg-bg-surface/60",
        animClass
      )}
      style={{
        borderColor: isExpanded ? `${member.color}80` : `${member.color}30`,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      {/* Dynamic Glow Shadow on Hover / Active */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isExpanded && "opacity-100"
        )}
        style={{
          boxShadow: `0 20px 40px -20px ${member.color}50`,
        }}
        aria-hidden="true"
      />

      {/* Role-colored top border with glow */}
      <div
        className="absolute inset-x-0 top-0 z-20 h-1"
        style={{
          backgroundColor: member.color,
          boxShadow: `0 0 15px ${member.color}80`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Inner Highlight on hover / Active */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isExpanded && "opacity-100"
        )}
        style={{
          background: `linear-gradient(135deg, ${member.color}15 0%, transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <CardHeader className="p-8 pb-0">
        {/* Avatar Explorer */}
        <div
          className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-xl text-xl font-black transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundColor: `${member.color}15`,
            border: `1px solid ${member.color}40`,
            color: member.color,
            transform: isExpanded ? "scale(1.1)" : undefined,
          }}
        >
          {/* Avatar glow overlay */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              isExpanded && "opacity-100"
            )}
            style={{ boxShadow: `0 0 20px ${member.color}50` }}
            aria-hidden="true"
          />
          <span className="relative z-10" style={{ letterSpacing: "-0.02em" }}>
            {member.initials}
          </span>
        </div>

        {/* Identity */}
        <CardTitle
          className={cn(
            "mb-1 text-2xl font-black tracking-tight text-text-primary transition-colors duration-300 group-hover:text-white",
            isExpanded && "text-white"
          )}
          style={{ letterSpacing: "-0.02em" }}
        >
          {member.name}
        </CardTitle>
        <p
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: member.color }}
        >
          {member.role}
        </p>
      </CardHeader>

      <CardContent className="mt-4 p-8 pt-0">
        {/* Description — collapses based on hover OR tap state */}
        <div
          className={cn(
            "grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:grid-rows-[1fr]",
            isExpanded && "grid-rows-[1fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className="mt-4 border-t pt-5"
              style={{ borderColor: `${member.color}40` }}
            >
              <p
                className={cn(
                  "translate-y-2 text-[13.5px] leading-[1.65] text-text-secondary opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100",
                  isExpanded && "translate-y-0 opacity-100"
                )}
                style={{ transitionDelay: isExpanded ? "0ms" : "100ms" }}
              >
                {member.description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Decorative Bottom Line (thin) */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent opacity-50" />
    </Card>
  )
}


