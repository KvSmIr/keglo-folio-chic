import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Django', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Java', level: 80 },
      ],
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 87 },
        { name: 'React Native', level: 82 },
      ],
    },
    {
      category: 'Autres compétences',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 83 },
        { name: 'C#', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">compétences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies et frameworks que je maîtrise
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="glass-card p-8 rounded-2xl animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 0.1 + skillIndex * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
