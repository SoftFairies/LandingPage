import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onAppClick: () => void;
  onRegisterClick: () => void;
}

export function Header({ onAppClick, onRegisterClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="size-8 text-blue-600" />
            <span className="font-semibold text-xl">Lectura Métrica</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("creadores")}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Creadores
            </button>

            <button
              onClick={() => scrollToSection("soporte")}
              className="text-sm hover:text-blue-600 transition-colors"
            >Soporte
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => {
                window.location.href = "https://lm-front-production.up.railway.app/login";
              }}
            >
              Inicio de Sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}