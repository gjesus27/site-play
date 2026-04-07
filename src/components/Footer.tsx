import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo_play.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/80">
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logo} alt="Play Agency" className="h-12 w-auto" />
          <p className="text-muted-foreground text-sm text-center md:text-left leading-relaxed">
            Agência de marketing esportivo especializada em futsal e futebol de campo. Transformamos atletas em marcas.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">Navegação</h4>
          <a href="#sobre" className="text-muted-foreground text-sm hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="text-muted-foreground text-sm hover:text-primary transition-colors">Serviços</a>
          <a href="#resultados" className="text-muted-foreground text-sm hover:text-primary transition-colors">Resultados</a>
          <a href="#como-funciona" className="text-muted-foreground text-sm hover:text-primary transition-colors">Como Funciona</a>
        </div>

        {/* Contato */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">Contato</h4>
          <a href="https://wa.me/5511980368389" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> (11) 98036-8389
          </a>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5511980368389" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border py-6 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground text-xs">© 2026 Play Agency. Todos os direitos reservados.</p>
        <p className="text-muted-foreground text-xs mt-1">Desenvolvido por <span className="text-primary font-semibold">Anup</span></p>
      </div>
    </div>
  </footer>
);

export default Footer;
