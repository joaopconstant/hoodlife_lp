import { cn } from "@/lib/utils"
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
        <div className="mb-16 text-center">
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
        <div className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              animClass={cn(inView ? `animate-fade-up delay-500` : "opacity-0")}
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
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden bg-bg-surface p-8",
        animClass
      )}
    >
      {/* Role-colored top border — always visible */}
      <div
        className="absolute inset-x-0 top-0 h-0.5"
        style={{ backgroundColor: member.color }}
        aria-hidden="true"
      />

      {/* Inset border ring — fades in on hover, contained within card */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${member.color}50` }}
        aria-hidden="true"
      />

      {/* Avatar */}
      <div
        className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-md text-xl font-black"
        style={{
          backgroundColor: `${member.color}18`,
          border: `1px solid ${member.color}44`,
          color: member.color,
        }}
      >
        {/* Avatar glow overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `0 0 24px ${member.color}55` }}
          aria-hidden="true"
        />
        <span style={{ letterSpacing: "-0.02em", position: "relative" }}>
          {member.initials}
        </span>
      </div>

      {/* Identity */}
      <h3
        className="mb-1 text-2xl font-black tracking-tight text-text-primary"
        style={{ letterSpacing: "-0.02em" }}
      >
        {member.name}
      </h3>
      <p
        className="text-[12px] font-bold tracking-widest uppercase"
        style={{ color: member.color }}
      >
        {member.role}
      </p>

      {/* Description — collapses to 0 when not hovered */}
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="mt-5 border-t border-border-subtle pt-5">
            <p
              className="translate-y-2 text-[13px] leading-[1.7] text-text-secondary opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              style={{ transitionDelay: "80ms" }}
            >
              {member.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: member.color }}
        aria-hidden="true"
      />
    </article>
  )
}
