import { Target, TrendingUp, Users } from "lucide-react";

const highlights = [
  { icon: Target, label: "Posicionamento", desc: "Estratégias certeiras para destacar seu perfil" },
  { icon: TrendingUp, label: "Crescimento", desc: "Resultados reais e mensuráveis" },
  { icon: Users, label: "Comunidade", desc: "Engajamento autêntico com sua audiência" },
];

const About = () => (
  <section id="sobre" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <span className="text-primary font-heading uppercase tracking-widest text-sm font-semibold">Sobre Nós</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mt-3">
          Somos a <span className="text-gradient">Play Agency</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Somos uma agência de marketing esportivo focada em transformar a presença digital de atletas. 
          Combinamos estratégia, criatividade e dados para construir marcas pessoais que geram impacto, 
          visibilidade e oportunidades reais.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div key={h.label} className="bg-card border border-border rounded-xl p-8 text-center hover-lift">
            <div className="w-14 h-14 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <h.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase">{h.label}</h3>
            <p className="mt-2 text-muted-foreground text-sm">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
