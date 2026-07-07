import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { BookOpen, TrendingUp, Target } from "lucide-react";

interface HeroProps {
  onRegisterClick: () => void;
}

export function Hero({ onRegisterClick }: HeroProps) {
  
  const handleRegisterClick = () => {
    const registrationLink = "https://forms.gle/Dqt5BuS8w1a2dPfq9";
    window.open(registrationLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm text-blue-700">
              <BookOpen className="size-4" />
              <span>Software de seguimiento de lectura</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Lectura Métrica
            </h1>

            <p className="text-2xl text-blue-600 font-medium">
              Mide, Aprende y Mantén tu hábito
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              La plataforma que transformar tu experiencia de lectura.
              Registra tu progreso, descubre nuevos libros y mantén la
              motivación.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("funcionalidades")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Conocer Más
              </Button>
            </div>

          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwYm9vayUyMGxpYnJhcnl8ZW58MXx8fHwxNzgyNzY4ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Persona leyendo en biblioteca"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border hidden lg:block">
              <div className="text-sm text-gray-600 mb-1">Tu progreso hoy</div>
              <div className="text-3xl font-bold text-blue-600">45 páginas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}