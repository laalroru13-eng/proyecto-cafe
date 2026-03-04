import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <a href="#inicio" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="font-serif text-lg font-bold text-foreground">
            Proyecto Cafe
          </span>
        </a>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Una experiencia inmersiva que combina la cultura del cafe con
          tecnologia 3D y realidad aumentada.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#inicio"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Inicio
          </a>
          <a
            href="#experiencia"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Experiencia
          </a>
          <a
            href="#nosotros"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Nosotros
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          {"2026 Proyecto Cafe. Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  )
}
