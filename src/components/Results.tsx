import { Star } from "lucide-react";

const stats = [
  { value: "500%", label: "Crescimento médio de seguidores" },
  { value: "3M+", label: "Impressões geradas por mês" },
  { value: "50+", label: "Atletas atendidos" },
  { value: "98%", label: "Taxa de satisfação" },
];

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Jogador de Futebol",
    text: "A Play Agency transformou minha presença digital. Em 3 meses saí de 5 mil para mais de 80 mil seguidores com engajamento real.",
  },
  {
    name: "Ana Beatriz",
    role: "Atleta de Vôlei",
    text: "Profissionalismo e estratégia de outro nível. Finalmente tenho uma marca pessoal que me representa e atrai patrocinadores.",
  },
  {
    name: "Rafael Costa",
    role: "Lutador de MMA",
    text: "O time da Play entende o mundo do esporte como ninguém. Meu conteúdo agora gera conexão real com meus fãs.",
  },
];

const Results = () => (
  <section id="resultados" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-primary font-heading uppercase tracking-widest text-sm font-semibold">Resultados</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mt-3">
          Números que <span className="text-gradient">falam por si</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6">
            <span className="text-gradient font-heading text-4xl md:text-5xl font-bold">{s.value}</span>
            <p className="mt-2 text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-xl p-8 hover-lift">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-bold uppercase text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
