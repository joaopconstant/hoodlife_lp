import logoHorizontal from "@/assets/logo-horizontal.png"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  RiDiscordFill,
  RiYoutubeFill,
  RiTiktokFill,
  RiInstagramFill,
} from "@remixicon/react"

const socials = [
  {
    label: "Discord",
    href: "https://discord.gg/hoodlifels",
    icon: RiDiscordFill,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@hoodlife-ls",
    icon: RiYoutubeFill,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/hoodlifels",
    icon: RiInstagramFill,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@hoodlifels",
    icon: RiTiktokFill,
  },
]

const navColumns = [
  {
    heading: "O SERVIDOR",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Parceiros", href: "#parceiros" },
    ],
  },
  {
    heading: "COMUNIDADE",
    links: [
      { label: "Equipe", href: "#equipe" },
      { label: "Galeria", href: "#galeria" },
      {
        label: "Discord",
        href: "https://discord.gg/hoodlifels",
        external: true,
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-bg-base">
      {/* Brand accent line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand block */}
          <div className="flex flex-col gap-6">
            <img
              src={logoHorizontal}
              alt="Hoodlife"
              className="h-10 w-auto self-start"
            />
            <p className="max-w-xs text-[14px] leading-[1.7] text-text-muted">
              O verdadeiro Heavy Roleplay no FiveM. Mergulhe em Los Santos como
              nunca antes.
            </p>
            {/* Social icons */}
            <nav aria-label="Redes sociais" className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-sm border-border-default text-text-muted transition-colors hover:border-brand-500/50 hover:text-brand-400"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </nav>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={cn(
                        "text-[14px] text-text-muted",
                        "transition-colors duration-150 hover:text-brand-400"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ───────────────────────────────────────────── */}
        <div className="my-10 h-px w-full bg-border-subtle" />

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-[13px] text-text-muted">
            © {new Date().getFullYear()} Hoodlife. Todos os direitos reservados.
          </p>
          <p className="max-w-lg text-[11px] leading-relaxed text-text-disabled">
            Not affiliated with or endorsed by Rockstar North or Take-Two
            Interactive. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}
