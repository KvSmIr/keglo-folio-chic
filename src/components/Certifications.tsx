import { Award, ShieldCheck, Network, Languages } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Network,
      title: 'CCNA 1 – Introduction aux réseaux',
      issuer: 'Cisco',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Network,
      title: 'CCNA 2 – Switching, Routing et Wireless Essentials',
      issuer: 'Cisco',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Network,
      title: 'CCNA 3 – Configuration et conception d\'architecture',
      issuer: 'Cisco',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShieldCheck,
      title: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      color: 'from-rose-500 to-red-600',
    },
    {
      icon: Award,
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft Certified',
      color: 'from-sky-500 to-indigo-600',
    },
    {
      icon: Languages,
      title: 'TOEIC – Test of English for International Communication',
      issuer: 'ETS',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certifications réseaux, cybersécurité et cloud qui valident mon expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-6 rounded-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
              >
                <cert.icon className="h-full w-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
