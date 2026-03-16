import esrbLogo from "@/assets/mature17-esrb.svg"

export function ESRBRating() {
  return (
    <div className="bg-bg-base pt-8 pb-40">
      <div className="mx-auto w-fit">
        <div className="flex items-center gap-4 rounded-md border border-white/20 bg-black p-2">
          <img
            src={esrbLogo}
            alt="ESRB Mature 17+"
            className="h-18 w-auto shrink-0"
            draggable={false}
          />
          <p className="w-48 text-[11px]">
            Este conteúdo é destinado a maiores de 17 anos. Pode conter
            violência intensa, linguagem forte, referências a drogas, temas
            adultos e outras situações que podem não ser apropriadas para
            menores de idade.
          </p>
        </div>
      </div>
    </div>
  )
}
