import { Network, ShieldCheck, Server, Code2, Database, Smartphone } from 'lucide-react';

const About = () => {
  const techStacks = [
    {
      icon: Network,
      category: 'Réseaux',
      technologies: ['Cisco CCNA 1-3', 'Routage & Switching', 'DHCP / DNS', 'VLAN & Wireless'],
    },
    {
      icon: Server,
      category: 'Systèmes & Infrastructure',
      technologies: ['Linux (Admin)', 'Windows Server', 'Active Directory', 'Nagios / Zabbix'],
    },
    {
      icon: ShieldCheck,
      category: 'Cybersécurité',
      technologies: ['Pentesting', 'Metasploit', 'Cryptographie', 'Firewall'],
    },
    {
      icon: Code2,
      category: 'Développement',
      technologies: ['Python', 'Django', 'React', 'Angular'],
    },
    {
      icon: Database,
      category: 'Bases de données',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      icon: Smartphone,
      category: 'Mobile',
      technologies: ['Flutter', 'React Native', 'Android'],
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionné par le développement logiciel et les technologies modernes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Bio */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Mon parcours</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Étudiant en dernière année de Licence Administration Systèmes et Réseaux
              (spécialisation Cybersécurité) à l'IAI-TOGO, je conçois et déploie des
              infrastructures réseau et systèmes fiables : serveurs DHCP/DNS/Web, pare-feu,
              supervision, et architectures sécurisées pour entreprises et startups.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Certifié Cisco CCNA 1, 2 et 3, je maîtrise l'administration Linux et Windows
              Server, les tests d'intrusion (pentesting) et la cryptographie. Je m'intéresse
              particulièrement à la sécurisation des réseaux d'entreprise et à la supervision
              proactive (Nagios, Zabbix).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En parallèle, je conserve une double compétence en développement logiciel
              (Python, Django, React, Angular, Flutter), ce qui me permet de construire des
              solutions complètes, de l'infrastructure jusqu'à l'application. Mon objectif à
              terme est de fonder ma propre structure de conseil en cybersécurité au Togo.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 gap-6">
            {techStacks.map((stack, index) => (
              <div
                key={stack.category}
                className="glass-card p-6 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <stack.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{stack.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
