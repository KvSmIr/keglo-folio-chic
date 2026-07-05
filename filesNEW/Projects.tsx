import {
  Megaphone,
  Network,
  Activity,
  Landmark,
  Terminal,
  Building2,
  Dumbbell,
  Calendar,
  FolderKanban,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: Megaphone,
      title: "Architecture réseau d'une startup publicitaire",
      description:
        "Conception et réalisation de l'architecture réseau complète d'une startup de création et gestion d'annonces publicitaires : plan d'adressage, segmentation, sécurité et disponibilité des services.",
      tags: ['Cisco', 'Architecture réseau', 'VLAN', 'Sécurité'],
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Network,
      title: 'Déploiement réseau local (DHCP, DNS, Web, Firewall)',
      description:
        "Déploiement d'un réseau local d'entreprise avec serveur DHCP, serveur DNS, serveur Web et pare-feu, incluant configuration, tests de connectivité et durcissement de la sécurité périmétrique.",
      tags: ['Linux', 'DHCP/DNS', 'Firewall', 'Apache/Nginx'],
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Activity,
      title: 'Plateforme de supervision réseau (IDS Technologie)',
      description:
        "Conception et développement d'une plateforme de supervision réseau pour les clients d'IDS Technologie, permettant le monitoring en temps réel de la disponibilité et des performances des équipements.",
      tags: ['Nagios', 'Zabbix', 'Monitoring', 'SNMP'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Landmark,
      title: 'Automatisation du refinancement — FUCEC_TOGO',
      description:
        "Développement d'une application pour automatiser le processus de refinancement au sein des COOPEC de la FUCEC_TOGO, réduisant les délais de traitement et sécurisant le suivi des dossiers.",
      tags: ['Système d\'information', 'Base de données', 'Sécurité'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Terminal,
      title: 'Laboratoire de Pentesting avec Metasploitable',
      description:
        "Mise en place d'un laboratoire de tests d'intrusion avec Metasploitable pour identifier et exploiter des vulnérabilités sur une machine volontairement vulnérable, dans un contexte simulé d'entreprise.",
      tags: ['Metasploit', 'Pentesting', 'Kali Linux', 'Vulnérabilités'],
      color: 'from-rose-500 to-red-600',
    },
    {
      icon: Building2,
      title: "App de refinancement d'entreprise",
      description:
        "Développement complet d'une application permettant aux entreprises de gérer leur refinancement avec suivi en temps réel, analyses financières et tableaux de bord dynamiques.",
      tags: ['Angular', 'Django', 'PostgreSQL', 'Chart.js'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Dumbbell,
      title: 'Gestion de salle de gym',
      description:
        'Application Java complète pour la gestion des abonnements, des paiements, du suivi des membres et des statistiques de fréquentation avec interface moderne.',
      tags: ['Java', 'Swing', 'MySQL', 'JavaFX'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Calendar,
      title: "Gestion d'événements",
      description:
        "Plateforme de gestion d'événements avec planification, invitations, suivi des participants et génération de rapports automatisés.",
      tags: ['React', 'Node.js', 'MongoDB', 'React Native'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FolderKanban,
      title: 'Gestion de projets',
      description:
        'Application collaborative de gestion de projets avec système de tâches, deadlines, tableaux Kanban et notifications en temps réel.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Redis'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">projets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Réalisations en administration systèmes & réseaux, cybersécurité et développement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 rounded-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon className="h-full w-full text-white" />
              </div>

              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted/50 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 group-hover:border-primary transition-colors"
              >
                Voir le projet
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
