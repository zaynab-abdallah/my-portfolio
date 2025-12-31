import { useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/img/photo.png";
import TypingEffect from "@/components/TypingEffect";

const Hero = () => {
  const [nameTypingComplete, setNameTypingComplete] = useState(false);
  const [nameStartTyping, setNameStartTyping] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </div>

          {/* Name with Photo */}
          <div className="opacity-0 animate-fade-in-up animation-delay-100 flex flex-col items-center gap-6 mb-4">
            {/* Profile Photo with Rotating Border */}
            {/* 
              CUSTOMIZATION GUIDE:
              - Border Rotation Speed: Change '10s' to adjust speed (higher = slower)
              - Border Opacity: Change 'opacity-80' (0-100)
              - Border Colors: Edit gradient classes (from-primary, via-primary/70, to-primary)
              - Border Width: Change '-inset-3' (larger = thicker border)
              - Photo Size: Change w-32/h-32 md:w-40/h-40 lg:w-48/h-48
              - Float Animation Speed: Change '4s' (higher = slower)
              - Float Distance: Edit float animation in index.css (translateY value)
              - Glow Intensity: Change 'blur-3xl' (blur-sm, blur-md, blur-lg, blur-xl, blur-2xl, blur-3xl)
              - Glow Opacity: Change 'bg-primary/30' (primary/10 to primary/50)
              - Border Color: Change 'border-primary/30' (primary/10 to primary/50)
            */}
            <div className="relative inline-block">
              {/* Rotating Border Ring - أبطأ وأوضح */}
              <div 
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-90"
                style={{ 
                  animation: 'rotate-border 15s linear infinite'
                }}
              >
                <div className="absolute inset-[4px] rounded-full bg-background"></div>
              </div>
              {/* Photo Container with Floating Animation - حركة أوضح */}
              <div 
                className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl z-10 hover:scale-105 transition-transform duration-300"
                style={{
                  animation: 'float 5s ease-in-out infinite'
                }}
              >
                <img 
                  src={profilePhoto} 
                  alt="Zaynab Shaltout" 
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 1%'
                  }}
                />
              </div>
              {/* Glow effect behind photo - توهج أقوى */}
              <div 
                className="absolute inset-0 rounded-full bg-primary/40 blur-[60px] -z-10"
                style={{ 
                  animation: 'float 5s ease-in-out infinite',
                  animationDelay: '0.7s'
                }}
              ></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <TypingEffect 
                text="Hi, I'm " 
                speed={80}
                showCursor={false}
                onComplete={() => {
                  setNameStartTyping(true);
                }}
              />
              {nameStartTyping && (
                <TypingEffect 
                  text="Zaynab Shaltout" 
                  speed={100}
                  className="text-gradient"
                  showCursor={false}
                  onComplete={() => {
                    setNameTypingComplete(true);
                  }}
                />
              )}
            </h1>
          </div>

          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6">
            {nameTypingComplete && (
              <TypingEffect 
                text="Front-End Developer | React & Next.js" 
                speed={80}
              />
            )}
          </p>

          {/* Description */}
          <p className="opacity-0 animate-fade-in-up animation-delay-300 text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft performant, accessible, and beautifully designed web applications. 
            Passionate about clean code, modern tooling, and creating exceptional user experiences.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View Projects
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="opacity-0 animate-fade-in-up animation-delay-500 flex items-center justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@johndoe.dev"
              className="p-3 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
