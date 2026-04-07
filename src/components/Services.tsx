import { Share2, Compass, Palette, BarChart3, Fingerprint } from "lucide-react";

const services = [
  { icon: Share2, title: "Gestão de Redes Sociais", desc: "Gerenciamos seus perfis no Instagram, TikTok e outras plataformas com conteúdo estratégico e constância." },
  { icon: Compass, title: "Posicionamento Estratégico", desc: "Definimos o tom, a narrativa e o posicionamento ideal para você se destacar no meio digital." },
  { icon: Palette, title: "Criação de Conteúdo", desc: "Produzimos conteúdos visuais e textuais que conectam com sua audiência e geram engajamento real." },
  { icon: BarChart3, title: "Crescimento de Audiência", desc: "Estratégias orgânicas e pagas para acelerar o crescimento dos seus seguidores e alcance." },
  { icon: Fingerprint, title: "Branding Pessoal", desc: "Construímos sua identidade visual e marca pessoal para que você seja reconhecido dentro e fora do campo." },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-card/50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-primary font-heading uppercase tracking-widest text-sm font-semibold">Serviços</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mt-3">
          O que fazemos por <span className="text-gradient">você</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card border border-border rounded-xl p-8 hover-lift cursor-default">
            <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold uppercase">{s.title}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
