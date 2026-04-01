import { useEffect, useState } from "react"
import { RiBookLine, RiCloseLine, RiMenu3Line } from "@remixicon/react"
import { cn } from "@/lib/utils"
import logoSrc from "@/assets/logo-horizontal.png"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "SOBRE", href: "#sobre" },
  { label: "TRAILER", href: "#trailer" },
  { label: "AMBIENTAÇÃO", href: "#ambientacao" },
  { label: "ECOSSISTEMA", href: "#ecossistema" },
  { label: "GALERIA", href: "#galeria" },
  { label: "DIFERENCIAIS", href: "#diferenciais" },
  { label: "EQUIPE", href: "#equipe" },
  { label: "FAQ", href: "#faq" },
  { label: "COMUNIDADE", href: "#comunidade" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-bg-base/80 backdrop-blur" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
          <a
            href="#"
            className="focus-brand flex shrink-0 items-center rounded-sm"
          >
            <img
              src={logoSrc}
              alt="Hoodlife"
              className="h-12 w-auto object-contain"
              draggable={false}
            />
          </a>

          <nav
            className="hidden items-center gap-4 lg:flex xl:gap-7"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-brand relative rounded-sm text-xs font-medium text-text-secondary transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-brand-500 after:transition-[width] after:duration-200 hover:text-text-primary hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="focus-brand rounded-sm text-text-secondary hover:bg-transparent hover:text-text-primary"
            >
              <a
                href="https://hoodlife.gitbook.io/docs"
                target="_blank"
                rel="noreferrer"
                title="Documentação"
                aria-label="Documentação"
              >
                <RiBookLine size={22} />
              </a>
            </Button>

            <Button
              asChild
              variant="default"
              size="sm"
              className="glow-brand-sm hover:glow-brand focus-brand hidden rounded-sm bg-brand-500 font-semibold tracking-wider text-white uppercase hover:bg-brand-400 lg:flex"
            >
              <a href="https://discord.gg/hoodlifels" target="_blank">
                Jogar Agora
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((v) => !v)}
              className="focus-brand rounded-sm text-text-secondary hover:bg-transparent hover:text-text-primary lg:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        aria-hidden={menuOpen ? undefined : "true"}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-bg-base pt-18 transition-all duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* key forces re-mount on each open, replaying CSS animations */}
        <nav
          key={String(menuOpen)}
          className="flex flex-1 flex-col items-start gap-1 px-6 py-8"
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="animate-slide-down w-full border-b border-border-subtle py-4 text-xl font-semibold text-text-secondary transition-colors duration-200 hover:text-text-primary"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}

          <Button
            asChild
            variant="default"
            size="lg"
            className="animate-slide-down glow-brand-sm hover:glow-brand focus-brand mt-8 rounded-sm bg-brand-500 text-base font-semibold tracking-wider text-white uppercase hover:bg-brand-400"
            style={{ animationDelay: `${NAV_LINKS.length * 60}ms` }}
          >
            <a href="#como-jogar" onClick={() => setMenuOpen(false)}>
              Jogar Agora
            </a>
          </Button>
        </nav>
      </div>
    </>
  )
}
