import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_play.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Resultados", href: "#resultados" },
    { label: "Como Funciona", href: "#como-funciona" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Play Agency" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-heading">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511980368389"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-bold font-heading uppercase tracking-wider hover:brightness-110 transition"
          >
            Fale Conosco
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-heading">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511980368389"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-bold font-heading uppercase tracking-wider text-center"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
