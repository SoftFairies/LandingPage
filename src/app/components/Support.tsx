import { MessageSquare, Shield, Wrench, HeartHandshake, Mail, Instagram, Phone, Globe, User } from "lucide-react";
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
    case "ig": return <Instagram className="size-4" />;
    case "phone": return <Phone className="size-4" />;
    default: return <Globe className="size-4" />;
  }
};

const teamSupport = [
  {
    name: "Alejandra Clemente",
    role: "UI / UX - Frontend Developer",
    avatar: "https://scontent.cdninstagram.com/v/t51.82787-19/729692054_18107466080484360_6924717009836580844_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43MjAuQzMifQ%3D%3D&_nc_ohc=R1EQUKrJaJIQ7kNvwETK8xV&_nc_oc=AdreQ7iDnSmWMI-a6OFEfuZYne9DPwhtQgSMUdYbS6Nmhc6nNi_m2lmOxEAfd37o6OHgQu7jdZpKWmZQM5WRykUD&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=vHODE-bT69_Axg4-jAdg2A&_nc_ss=7b689&oh=00_AQAinmHnxxq532bdpzzrPF7X_xBrtxGcuxO3cBXGdq6OUA&oe=6A5286C2", // Cambia esto por tu URL de imagen
    contacts: [
      { type: "email", label: "alejandraclemente48@gmail.com", href: "mailto:alejandraclemente48@gmail.com" },
      { type: "phone", label: "+52 968 6704 489", href: "tel:+529686704489" },
    ],
  },
  {
    name: "Ninive Gonzales",
    role: "Backend Developer & QA",
    avatar: "https://scontent.cdninstagram.com/v/t51.82787-19/710478461_18408516922196605_5872995714860679009_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=HKRfClVBOmYQ7kNvwGK3Ms9&_nc_oc=Adpa-Yld4giQCwbzgczM76OL_KLRYdcVEHP7T45nBjPL9QQR8E0Mb7rVSIe6ufGMNZ_L7M5gOcwUaRnxJwRVjVjz&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=yYGicKoe7-zLMaOtc1jYqA&_nc_ss=7b689&oh=00_AQAk5iCOTTnljrtv7wl6YNYXxX4wLAATkETcGG4w5yEB1g&oe=6A52825D",
    contacts: [
      { type: "email", label: "niniveargeliaperezgonzalez@gmail.com ", href: "mailto:niniveargeliaperezgonzalez@gmail.com" },
      { type: "ig", label: "@ninive__gonzalez", href: "https://www.instagram.com/ninive__gonzalez" },
    ],
  },
  {
    name: "Mónica Velázquez",
    role: "Backend API Developer",
    avatar: "https://scontent.cdninstagram.com/v/t51.82787-19/657740775_18356837209233284_2116215109728134815_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=101&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=WQTUfLvCtHwQ7kNvwHD6t60&_nc_oc=Ado_KyRjLHsWBfZCADVsJIAPrm-lefbHzroOY0vuSAmeq2TprdjTu2jfBsaRTSTj636EvYr3Fe_YdJnitrsDq7yo&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=ahwqp4pKhDItmDFh7rlW8A&_nc_ss=7b689&oh=00_AQB5lvfeDzFKhfCr3wYXUxT0FWy3OtBCvpgCosZKE1FpxA&oe=6A528BA2",
    contacts: [
      { type: "ig", label: "@miminmyn", href: "https://www.instagram.com/miminmyn/" },
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