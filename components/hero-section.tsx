import { ModelViewer } from "./model-viewer"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/5" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">
        {/* Text content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experiencia inmersiva
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
            Conoce nuestro avatar del cafe
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty lg:text-xl">
            Explora nuestro personaje 3D interactivo. Giralo, acercalo y
            descubrelo en realidad aumentada directamente en tu espacio.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Descubrir mas
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Sobre nosotros
            </a>
          </div>
        </div>

        {/* 3D Model */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <ModelViewer />
          </div>
        </div>
      </div>
    </section>
  )
}
