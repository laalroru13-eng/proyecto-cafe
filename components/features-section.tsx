import { Eye, Rotate3D, Smartphone } from "lucide-react"

const features = [
  {
    icon: Rotate3D,
    title: "Interactivo 360",
    description:
      "Gira y explora el avatar desde cualquier angulo con controles tactiles e intuitivos.",
  },
  {
    icon: Smartphone,
    title: "Realidad Aumentada",
    description:
      "Coloca el avatar en tu espacio real usando la camara de tu dispositivo movil.",
  },
  {
    icon: Eye,
    title: "Alta Fidelidad",
    description:
      "Modelo 3D con texturas detalladas, iluminacion realista y animaciones fluidas.",
  },
]

export function FeaturesSection() {
  return (
    <section id="experiencia" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experiencia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
            Una nueva forma de interactuar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Nuestro avatar combina tecnologia de punta con un diseno unico para
            ofrecerte una experiencia memorable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
