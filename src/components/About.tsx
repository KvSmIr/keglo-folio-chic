import { Code2, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const techStacks = [
    {
      icon: Code2,
      category: 'Frontend',
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS'],
    },
    {
      icon: Database,
      category: 'Backend',
      technologies: ['Python', 'Django', 'Node.js', 'Java', 'C#'],
    },
    {
      icon: Smartphone,
      category: 'Mobile',
      technologies: ['Flutter', 'React Native', 'Android'],
    },
    {
      icon: Globe,
      category: 'Outils',
      technologies: ['Git', 'Docker', 'PostgreSQL', 'MongoDB'],
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
              Étudiant en Génie Logiciel, je me passionne pour la création d'applications
              performantes et élégantes qui résolvent des problèmes concrets. Mon approche
              combine créativité et rigueur technique pour livrer des solutions de qualité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              J'aime explorer de nouvelles technologies et frameworks, tout en consolidant mes
              compétences dans les langages que je maîtrise déjà. Mon objectif est de devenir un
              développeur full-stack polyvalent capable de gérer des projets de bout en bout.
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
