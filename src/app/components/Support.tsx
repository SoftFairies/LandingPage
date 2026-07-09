import { MessageSquare, Shield, Wrench, HeartHandshake, Mail, LinkedinIcon, Phone, Globe, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const supportItems = [
  { icon: MessageSquare, title: "Soporte Técnico", description: "Resolvemos dudas técnicas y errores de la plataforma." },
  { icon: Wrench, title: "Mantenimiento", description: "Actualizaciones semanales y optimización continua." },
  { icon: Shield, title: "Seguridad", description: "Protección de datos con los más altos estándares." },
];

// Configura los iconos según el tipo de contacto
const getIcon = (type: string) => {
  switch (type) {
    case "email": return <Mail className="size-4" />;
    case "linkedin": return <LinkedinIcon className="size-4" />;
    case "phone": return <Phone className="size-4" />;
    default: return <Globe className="size-4" />;
  }
};

const teamSupport = [
  {
    name: "Alejandra Clemente",
    role: "UI / UX - Frontend Developer",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHfX4NHwQZ6pg/profile-displayphoto-scale_200_200/B56Zwl7TwoJEAY-/0/1770162832299?e=2147483647&v=beta&t=fZ8aY_gXw1SvSb1ZoOgKtD36AwKj2N1SU11k0rZ11mI", // Cambia esto por tu URL de imagen
    contacts: [
      { type: "email", label: "alejandraclemente48@gmail.com", href: "mailto:alejandraclemente48@gmail.com" },
      { type: "linkedin", label: "Alejandra Clemente", href: "https://www.linkedin.com/in/patricia-alejandra-clemente-chacon-4466013aa?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
    ],
  },
  {
    name: "Ninive Gonzales",
    role: "Backend Developer & QA",
    avatar: "https://scontent.cdninstagram.com/v/t51.82787-19/710478461_18408516922196605_5872995714860679009_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=HKRfClVBOmYQ7kNvwGK3Ms9&_nc_oc=Adpa-Yld4giQCwbzgczM76OL_KLRYdcVEHP7T45nBjPL9QQR8E0Mb7rVSIe6ufGMNZ_L7M5gOcwUaRnxJwRVjVjz&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=yYGicKoe7-zLMaOtc1jYqA&_nc_ss=7b689&oh=00_AQAk5iCOTTnljrtv7wl6YNYXxX4wLAATkETcGG4w5yEB1g&oe=6A52825D",
    contacts: [
      { type: "email", label: "niniveargeliaperezgonzalez@gmail.com ", href: "mailto:niniveargeliaperezgonzalez@gmail.com" },
      { type: "linkedin", label: "Ninive Gonzales", href: "https://www.linkedin.com/in/ninive-gonzalez-8866163aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    ],
  },
  {
    name: "Mónica Velázquez",
    role: "Backend API Developer",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQE8Z0HW0kF-wA/profile-displayphoto-scale_400_400/B4EZwltiUxGoAg-/0/1770159222586?e=1785369600&v=beta&t=_fcLgKEMv-7klCaM-0CQOYQnNfVArnCo-AglnsS6wAo",
    contacts: [
      { type: "linkedin", label: "Mónica Velázquez", href: "https://www.linkedin.com/in/mónica-velázquez-8866163aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    ],
  },
];

export function Support() {
  return (
    <section id="soporte" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Soporte y Mantenimiento</h2>
          <p className="text-lg text-gray-600">Nuestro equipo está aquí para ayudarte</p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportItems.map((item, i) => (
            <Card key={i} className="border-2 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="bg-blue-50 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="size-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent><p className="text-sm text-gray-600">{item.description}</p></CardContent>
            </Card>
          ))}
        </div>

        {/* Sección del equipo */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center mb-10">Conoce al equipo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamSupport.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="size-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100" 
                />
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-sm text-blue-600 mb-6 font-medium">{member.role}</p>
                
                <div className="flex flex-col gap-2">
                  {member.contacts.map((c, i) => (
                    <a key={i} href={c.href} target="_blank" rel="noreferrer" 
                       className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {getIcon(c.type)}
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}