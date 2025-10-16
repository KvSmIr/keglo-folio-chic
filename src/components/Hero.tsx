import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/icon.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 animate-slide-up">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Bonjour, je suis</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">KEGLO</span>
              <br />
              Casimir
            </h1>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Développeur Full Stack passionné par la création de solutions modernes et élégantes
            qui résolvent des problèmes concrets.
          </p>

          <p className="text-lg text-muted-foreground/80">
            Étudiant en Génie Logiciel spécialisé en Python, Django, React, Angular, et Flutter.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Voir mes projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              Me contacter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/KvSmIr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/casimir-keglo-620551384/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:casimirkeglo@gmail.com"
              className="p-3 glass-card rounded-full hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30" />
            <img
              src={profileImage}
              alt="KEGLO Casimir"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
