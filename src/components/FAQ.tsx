import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { SectionHeader } from "@/components/SectionHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "O servidor será VoIP ou text?",
    answer: "O servidor será baseado em VoIP, com elementos de text-based, tanto em scripts quanto em determinadas interações, para complementar cenas, descrever ações e ajudar a dar mais profundidade às situações onde a voz sozinha não resolve.",
  },
  {
    question: "O servidor vai ter CK?",
    answer: "Sim, e será sistêmico. Se o personagem morrer por arma de fogo ou em um acidente veicular grave, o sistema registra essa morte como definitiva e a história do personagem se encerra. Porém, situações forçadas, sem sentido narrativo ou feitas apenas para provocar CK podem ser revisadas pela administração e podem resultar em punições.",
  },
  {
    question: "Como será a economia do servidor?",
    answer: "A economia do servidor será mais próxima do real, com dinheiro entrando de forma equilibrada e ligada à vida do personagem. Haverá paycheck, sistemas que ajudam a manter despesas básicas e, ao mesmo tempo, será possível financiar carro, moto, casa e outros bens maiores.",
  },
  {
    question: "O servidor terá whitelist?",
    answer: (
      <>
        Sim. No momento, a whitelist está sendo liberada para todos que entrarem no{" "}
        <a 
          href="https://discord.gg/hoodlifels" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-400 underline decoration-brand-500/30 underline-offset-4 transition-colors"
        >
          discord
        </a>{" "}
        até a abertura oficial do servidor. Após esse período, será implementado um processo de whitelist mais rigoroso.
      </>
    ),
  },
  {
    question: "Posso ter mais de um personagem?",
    answer: "Sim. Inicialmente, todo jogador poderá criar até dois personagens. É possível adquirir mais slots por meio de doações.",
  },
]

export function FAQ() {
  const [sectionRef, inView] = useInView<HTMLElement>(0.1)

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative bg-bg-base py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-12 text-center">
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                PERGUNTAS <span className="text-brand-500">FREQUENTES</span>
              </>
            }
            centered
            inView={inView}
          />
        </div>

        {/* ── Accordion ──────────────────────────────────────── */}
        <div
          className={cn(
            "mt-12",
            inView ? "animate-fade-up delay-400" : "opacity-0"
          )}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border-default bg-bg-surface/40 px-6 transition-colors hover:bg-bg-surface/60 rounded-lg border"
              >
                <AccordionTrigger className="text-base font-bold py-6 text-text-primary hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
