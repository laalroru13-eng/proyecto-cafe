export function AboutSection() {
  return (
    <section id="nosotros" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre nosotros
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
              El cafe como nunca lo habias visto
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Proyecto Cafe nace de la pasion por combinar la cultura del cafe
                con la tecnologia mas innovadora. Creemos que cada experiencia
                puede ser unica y memorable.
              </p>
              <p>
                Nuestro avatar 3D es solo el comienzo. Estamos construyendo un
                ecosistema digital donde el mundo del cafe cobra vida de formas
                que nunca imaginaste.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8">
              <span className="font-serif text-4xl font-bold text-primary">
                3D
              </span>
              <span className="text-sm text-muted-foreground">
                Modelo interactivo
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8">
              <span className="font-serif text-4xl font-bold text-primary">
                AR
              </span>
              <span className="text-sm text-muted-foreground">
                Realidad aumentada
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8">
              <span className="font-serif text-4xl font-bold text-primary">
                360
              </span>
              <span className="text-sm text-muted-foreground">
                Vista completa
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8">
              <span className="font-serif text-4xl font-bold text-primary">
                HD
              </span>
              <span className="text-sm text-muted-foreground">
                Alta definicion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
