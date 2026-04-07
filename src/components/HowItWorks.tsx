import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Analisamos seu perfil atual, público-alvo e oportunidades no mercado." },
  { icon: Map, num: "02", title: "Planejamento", desc: "Criamos uma estratégia personalizada com metas claras e cronograma." },
  { icon: Rocket, num: "03", title: "Execução", desc: "Colocamos o plano em ação com gestão completa de conteúdo e redes." },
  { icon: TrendingUp, num: "04", title: "Crescimento", desc: "Monitoramos resultados e escalamos para maximizar seu impacto." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="section-padding bg-card/50">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <span className="text-primary font-heading uppercase tracking-widest text-sm font-semibold">Como Funciona</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mt-3">
          Seu caminho até o <span className="text-gradient">topo</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center group">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 font-heading text-xs font-bold bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center">
                {s.num}
              </span>
            </div>
            <h3 className="font-heading text-lg font-bold uppercase">{s.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
