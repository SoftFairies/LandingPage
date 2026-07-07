import {
  UserCog,
  Library,
  Clock,
  BarChart3,
  Trophy,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: UserCog,
    title: "Autenticación y Personalización",
    description:
      "Crea tu perfil a tu medida y descubre nuestro 'Radar de Curiosidades', un espacio diseñado para sorprenderte con datos fascinantes, efemérides y notas culturales cada vez que entres.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Library,
    title: "Biblioteca Personal Automatizada",
    description:
      "Organiza tus lecturas sin complicaciones. Solo busca tu obra favorita y nosotros nos encargamos de autocompletar la portada, el autor y todos los detalles por ti.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Registro de Progreso Flexible",
    description:
      "Mide tu tiempo de lectura en vivo con nuestro cronómetro interactivo, o si lo prefieres, registra tus avances manualmente. ¡Tú decides cómo llevar el control de tus páginas y capítulos!",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analítico Dinámico",
    description:
      "Visualiza tu historial como lector con gráficos increíbles. Descubre tus géneros favoritos, conoce tu ritmo de lectura diario y celebra todas las obras que has terminado.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Trophy,
    title: "Retos y Recompensas", 
    description:
      "¡Mantén el hábito y gana recompensas! Acumula días consecutivos de lectura para mantener tu racha viva y desbloquea insignias exclusivas al alcanzar nuevas metas.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Mail,
    title: "Buzón del Lector",
    description:
      "Conecta con la comunidad intercambiando cartas de recomendación. Cada 24 horas podrás enviar tus favoritas y descubrir nuevas sugerencias literarias sorpresa.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Funcionalidades que Transforman tu Lectura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un ecosistema completo diseñado para hacer de la lectura un hábito
            sostenible, medible y gratificante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className={`${feature.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`size-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
