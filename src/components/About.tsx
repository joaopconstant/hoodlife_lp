import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import darkSandyBg from "@/assets/dark-sandy-bg.jpg"
import aboutImg from "@/assets/about.png"

export function About() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.12)

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative h-full overflow-hidden bg-bg-base"
    >
      {/* ── Background ───────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${darkSandyBg})` }}
        aria-hidden="true"
      />
      {/* Top fade from hero */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-bg-base to-transparent"
        aria-hidden="true"
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-bg-base to-transparent"
        aria-hidden="true"
      />

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center lg:grid-cols-2">
        {/* ── Left: character art ──────────────────────────────── */}
        <div
          className={cn(
            "hidden items-center justify-center lg:flex",
            "transition-all duration-1000 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <img
            src={aboutImg}
            alt="Personagens Hoodlife"
            className="h-auto w-full object-contain select-none"
            draggable={false}
          />
        </div>

        {/* ── Right: text content ──────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 py-20 lg:pr-16 lg:pl-6">
          <SectionHeader
            eyebrow="Sobre o Hoodlife"
            title={
              <>
                COMPROMETIMENTO
                <br />
                COM<span className="text-brand-500"> QUALIDADE</span>
              </>
            }
            inView={inView}
          />

          <div
            className={cn(
              "prose mt-7",
              inView ? "animate-fade-up delay-600" : "opacity-0"
            )}
          >
            <p>
              <b className="text-text-primary">
                Heavy roleplay não é promessa vazia aqui.
              </b>{" "}
              É prática diária. Enquanto outros servidores usam o termo como
              ferramenta de marketing, nós construímos cada sistema, regra e
              mecânica para sustentar uma coisa só:{" "}
              <span className="text-brand-500">
                histórias reais com consequências reais.
              </span>
            </p>
            <p>
              Nossa prioridade absoluta é a{" "}
              <b className="text-text-primary">qualidade de roleplay</b>,
              imersão e coerência narrativa. Cada personagem evolui
              organicamente. Cada decisão tem peso. Cada interação pode mudar o
              rumo de uma história.
            </p>
            <p>
              A ambientação é 100% urbana, explorando Los Santos em todas as
              suas camadas: sociais, culturais, estruturais e criminais.{" "}
              <b className="text-text-primary">
                O foco principal são os guetos, mas o ecossistema é completo e
                interconectado.
              </b>
            </p>
          </div>

          <blockquote
            className={cn(
              "mt-8 rounded-r-sm border-l-2 border-brand-500 bg-bg-surface/60 py-4 pr-5 pl-5",
              "text-sm leading-relaxed text-text-secondary italic",
              inView ? "animate-fade-up delay-800" : "opacity-0"
            )}
          >
            "Jogadores novatos são bem-vindos, desde que estejam dispostos a
            aprender, evoluir e respeitar o RP sério. Não exigimos perfeição.{" "}
            <span className="font-semibold text-brand-500">
              Exigimos comprometimento.
            </span>
            "
          </blockquote>

          {/* Mobile: image below text */}
          <div
            className={cn(
              "relative mt-10 flex justify-center overflow-hidden lg:hidden",
              inView ? "animate-fade-up delay-1000" : "opacity-0"
            )}
          >
            <img
              src={aboutImg}
              alt="Personagens Hoodlife"
              className="w-auto object-contain object-bottom select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
